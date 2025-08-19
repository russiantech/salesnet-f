// // src/components/shared/Breadcrumb.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// interface BreadcrumbItem {
//   label: string;
//   path?: string;
//   active?: boolean;
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[];
// }

// const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
//   return (
//     <nav className="container pt-1 pt-md-0 my-3 my-md-4" aria-label="breadcrumb">
//       <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
//         {items.map((item, index) => (
//           <li key={index} className={`breadcrumb-item ${item.active || index === items.length - 1 ? 'active' : ''}`}
//             aria-current={item.active || index === items.length - 1 ? 'page' : undefined} >
//             {item.path ? (
//               <Link to={item.path}>{item.label}</Link>
//             ) : (
//               <span>{item.label}</span>
//             )}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;

// v2 - last one is disbled
// src/components/shared/Breadcrumb.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="pt-1 pt-md-0 my-1 my-md-1" aria-label="breadcrumb">
      <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.path || "#"}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}; 

export default Breadcrumb;
