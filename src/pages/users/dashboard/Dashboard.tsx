// pages/vendor/Dashboard.tsx
import React from 'react';
import Navigation from '../../../components/shared/Navigation';
import SeoConfig from '../../../utils/SeoManager';
import Aside from '../shared/Aside';
import VendorDashboard from './VendorDashboard';
// import { VendorDashboard } from '../../vendor/dashboard/Dashboard';
// import { VendorDashboard } from '../../../components/vendor/VendorDashboard';

const Dashboard: React.FC = () => {
  return (
    <>
      <SeoConfig 
        title={'Vendor Dashboard - Salesnet'}
        description={'Manage your sales, products, and earnings on Salesnet'}
        keywords={'vendor, dashboard, sales, earnings, analytics'}
        canonical={'/vendor/dashboard'}
      />

      <Navigation />
      
      <main className="content-wrapper">
        <div className="container pt-4 pt-lg-5 pb-5">
          <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            {/* Sidebar navigation */}
            <Aside />

            {/* Dashboard content */}
            <div className="col-lg-9">
              <VendorDashboard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;