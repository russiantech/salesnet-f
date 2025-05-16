// src/components/offers/OfferManager.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Table, Modal, message, Space, Tag, Switch } from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  EyeOutlined,
  ClockCircleOutlined,
  FireOutlined
} from '@ant-design/icons';
import OfferForm from './OfferForm';
import { Offer, OfferStatus } from '../../types/Offer';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import { formatDate, timeLeft } from '../../utils/dateUtils';

const OfferManager: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const response = await OffersAxiosService.getOffers();
      setOffers(response.data);
    } catch (error) {
      message.error('Failed to fetch offers');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentOffer(null);
    setModalVisible(true);
  };

  const handleEdit = (offer: Offer) => {
    setCurrentOffer(offer);
    setModalVisible(true);
  };

  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: 'Delete Offer',
      content: 'Are you sure you want to delete this offer?',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: async () => {
        try {
          await OffersAxiosService.deleteOffer(id);
          message.success('Offer deleted successfully');
          fetchOffers();
        } catch (error) {
          message.error('Failed to delete offer');
        }
      },
    });
  };

  const handleStatusChange = async (offer: Offer, checked: boolean) => {
    try {
      const endpoint = checked ? 'activate' : 'deactivate';
      await OffersAxiosService.updateOfferStatus(offer.id, endpoint);
      message.success(`Offer ${checked ? 'activated' : 'deactivated'} successfully`);
      fetchOffers();
    } catch (error) {
      message.error(`Failed to ${checked ? 'activate' : 'deactivate'} offer`);
    }
  };

  const handleFeatureChange = async (offer: Offer, checked: boolean) => {
    try {
      const endpoint = checked ? 'feature' : 'unfeature';
      await OffersAxiosService.updateOfferStatus(offer.id, endpoint);
      message.success(`Offer ${checked ? 'featured' : 'unfeatured'} successfully`);
      fetchOffers();
    } catch (error) {
      message.error(`Failed to ${checked ? 'feature' : 'unfeature'} offer`);
    }
  };

  const handleSubmit = async (values: any) => {
    setConfirmLoading(true);
    try {
      if (currentOffer) {
        await OffersAxiosService.updateOffer(currentOffer.id, values);
        message.success('Offer updated successfully');
      } else {
        await OffersAxiosService.createOffer(values);
        message.success('Offer created successfully');
      }
      setModalVisible(false);
      fetchOffers();
    } catch (error) {
      message.error(currentOffer ? 'Failed to update offer' : 'Failed to create offer');
    } finally {
      setConfirmLoading(false);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Offer) => (
        <a onClick={() => navigate(`/offers/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount: any) => (
        <Tag color="blue">
          {discount.type === 'percentage' 
            ? `${discount.value}% OFF` 
            : `$${discount.value} OFF`}
        </Tag>
      ),
    },
    {
      title: 'Dates',
      dataIndex: 'dates',
      key: 'dates',
      render: (dates: any) => (
        <div>
          <div>Start: {formatDate(dates.start)}</div>
          <div>End: {formatDate(dates.end)}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: OfferStatus, record: Offer) => (
        <Space>
          <Tag 
            color={
              status === 'active' ? 'green' : 
              status === 'scheduled' ? 'orange' : 
              status === 'expired' ? 'red' : 'default'
            }
          >
            {status.toUpperCase()}
          </Tag>
          <Switch
            checked={record.is_active}
            onChange={(checked) => handleStatusChange(record, checked)}
          />
        </Space>
      ),
    },
    {
      title: 'Featured',
      dataIndex: 'is_featured',
      key: 'is_featured',
      render: (featured: boolean, record: Offer) => (
        <Switch
          checked={featured}
          onChange={(checked) => handleFeatureChange(record, checked)}
          checkedChildren={<FireOutlined />}
          unCheckedChildren={<FireOutlined />}
        />
      ),
    },
    {
      title: 'Time Left',
      key: 'time_left',
      render: (record: Offer) => {
        const { days, hours, minutes } = timeLeft(record.dates.end);
        return (
          <Tag icon={<ClockCircleOutlined />} color="default">
            {days}d {hours}h {minutes}m
          </Tag>
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: Offer) => (
        <Space size="middle">
          <Button 
            icon={<EyeOutlined />} 
            onClick={() => navigate(`/offers/${record.id}`)}
          />
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEdit(record)}
          />
          <Button 
            icon={<DeleteOutlined />} 
            danger
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="offer-manager">
      <Card
        title="Manage Offers"
        extra={
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={handleCreate}
          >
            Create Offer
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={offers}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title={currentOffer ? 'Edit Offer' : 'Create Offer'}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
        destroyOnClose
      >
        <OfferForm 
          offer={currentOffer}
          onSubmit={handleSubmit}
          confirmLoading={confirmLoading}
          onCancel={() => setModalVisible(false)}
        />
      </Modal>
    </div>
  );
};

export default OfferManager;