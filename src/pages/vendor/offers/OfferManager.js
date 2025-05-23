import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/offers/OfferManager.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Table, Modal, message, Space, Tag, Switch } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import OfferForm from './OfferForm';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import { formatDate, timeLeft } from '../../utils/dateUtils';
const OfferManager = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentOffer, setCurrentOffer] = useState(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        fetchOffers();
    }, []);
    const fetchOffers = async () => {
        setLoading(true);
        try {
            const response = await OffersAxiosService.getOffers();
            setOffers(response.data);
        }
        catch (error) {
            message.error('Failed to fetch offers');
        }
        finally {
            setLoading(false);
        }
    };
    const handleCreate = () => {
        setCurrentOffer(null);
        setModalVisible(true);
    };
    const handleEdit = (offer) => {
        setCurrentOffer(offer);
        setModalVisible(true);
    };
    const handleDelete = async (id) => {
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
                }
                catch (error) {
                    message.error('Failed to delete offer');
                }
            },
        });
    };
    const handleStatusChange = async (offer, checked) => {
        try {
            const endpoint = checked ? 'activate' : 'deactivate';
            await OffersAxiosService.updateOfferStatus(offer.id, endpoint);
            message.success(`Offer ${checked ? 'activated' : 'deactivated'} successfully`);
            fetchOffers();
        }
        catch (error) {
            message.error(`Failed to ${checked ? 'activate' : 'deactivate'} offer`);
        }
    };
    const handleFeatureChange = async (offer, checked) => {
        try {
            const endpoint = checked ? 'feature' : 'unfeature';
            await OffersAxiosService.updateOfferStatus(offer.id, endpoint);
            message.success(`Offer ${checked ? 'featured' : 'unfeatured'} successfully`);
            fetchOffers();
        }
        catch (error) {
            message.error(`Failed to ${checked ? 'feature' : 'unfeature'} offer`);
        }
    };
    const handleSubmit = async (values) => {
        setConfirmLoading(true);
        try {
            if (currentOffer) {
                await OffersAxiosService.updateOffer(currentOffer.id, values);
                message.success('Offer updated successfully');
            }
            else {
                await OffersAxiosService.createOffer(values);
                message.success('Offer created successfully');
            }
            setModalVisible(false);
            fetchOffers();
        }
        catch (error) {
            message.error(currentOffer ? 'Failed to update offer' : 'Failed to create offer');
        }
        finally {
            setConfirmLoading(false);
        }
    };
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (_jsx("a", { onClick: () => navigate(`/offers/${record.id}`), children: text })),
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (discount) => (_jsx(Tag, { color: "blue", children: discount.type === 'percentage'
                    ? `${discount.value}% OFF`
                    : `$${discount.value} OFF` })),
        },
        {
            title: 'Dates',
            dataIndex: 'dates',
            key: 'dates',
            render: (dates) => (_jsxs("div", { children: [_jsxs("div", { children: ["Start: ", formatDate(dates.start)] }), _jsxs("div", { children: ["End: ", formatDate(dates.end)] })] })),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => (_jsxs(Space, { children: [_jsx(Tag, { color: status === 'active' ? 'green' :
                            status === 'scheduled' ? 'orange' :
                                status === 'expired' ? 'red' : 'default', children: status.toUpperCase() }), _jsx(Switch, { checked: record.is_active, onChange: (checked) => handleStatusChange(record, checked) })] })),
        },
        {
            title: 'Featured',
            dataIndex: 'is_featured',
            key: 'is_featured',
            render: (featured, record) => (_jsx(Switch, { checked: featured, onChange: (checked) => handleFeatureChange(record, checked), checkedChildren: _jsx(FireOutlined, {}), unCheckedChildren: _jsx(FireOutlined, {}) })),
        },
        {
            title: 'Time Left',
            key: 'time_left',
            render: (record) => {
                const { days, hours, minutes } = timeLeft(record.dates.end);
                return (_jsxs(Tag, { icon: _jsx(ClockCircleOutlined, {}), color: "default", children: [days, "d ", hours, "h ", minutes, "m"] }));
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record) => (_jsxs(Space, { size: "middle", children: [_jsx(Button, { icon: _jsx(EyeOutlined, {}), onClick: () => navigate(`/offers/${record.id}`) }), _jsx(Button, { icon: _jsx(EditOutlined, {}), onClick: () => handleEdit(record) }), _jsx(Button, { icon: _jsx(DeleteOutlined, {}), danger: true, onClick: () => handleDelete(record.id) })] })),
        },
    ];
    return (_jsxs("div", { className: "offer-manager", children: [_jsx(Card, { title: "Manage Offers", extra: _jsx(Button, { type: "primary", icon: _jsx(PlusOutlined, {}), onClick: handleCreate, children: "Create Offer" }), children: _jsx(Table, { columns: columns, dataSource: offers, rowKey: "id", loading: loading, pagination: { pageSize: 10 } }) }), _jsx(Modal, { title: currentOffer ? 'Edit Offer' : 'Create Offer', visible: modalVisible, onCancel: () => setModalVisible(false), footer: null, width: 800, destroyOnClose: true, children: _jsx(OfferForm, { offer: currentOffer, onSubmit: handleSubmit, confirmLoading: confirmLoading, onCancel: () => setModalVisible(false) }) })] }));
};
export default OfferManager;
