// src/components/shared/Breadcrumb.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item ${item.active || index === items.length - 1 ? 'active' : ''}`}
            aria-current={item.active || index === items.length - 1 ? 'page' : undefined}
          >
            {item.href ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;