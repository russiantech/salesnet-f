import { useState } from 'react';

// Main container component
const TabbedInterface = ({ categories }) => {
  const [activeTab, setActiveTab] = useState('categories');
  const [interfaceState, setInterfaceState] = useState({
    categories: {
      checkedIds: new Set(),
      expandedIds: new Set(),
      searchQuery: '',
    },
    // Add other tabs' state here
  });

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <TabButton
              id="categories"
              label="Categories"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              id="settings"
              label="Settings"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </div>

        <div className="card-body">
          <TabContent id="categories" activeTab={activeTab}>
            <CategoryList
              categories={categories}
              state={interfaceState.categories}
              setState={(newState) => setInterfaceState(prev => ({
                ...prev,
                categories: newState
              }))}
            />
          </TabContent>
          
          <TabContent id="settings" activeTab={activeTab}>
            <SettingsPanel />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

// Tab Button Component
const TabButton = ({ id, label, activeTab, setActiveTab }) => (
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === id ? 'active' : ''}`}
      onClick={() => setActiveTab(id)}
      aria-controls={`${id}-tab`}
      aria-selected={activeTab === id}
    >
      {label}
    </button>
  </li>
);

// Tab Content Component
const TabContent = ({ id, activeTab, children }) => (
  <div
    id={`${id}-tab`}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
    className={activeTab === id ? '' : 'visually-hidden'}
  >
    {children}
  </div>
);

// Enhanced Category List Component
const CategoryList = ({ categories, state, setState }) => {
  const handleStateUpdate = (newPartialState) => {
    setState({ ...state, ...newPartialState });
  };

  return (
    <div className="category-interface">
      <SearchControl
        searchQuery={state.searchQuery}
        setSearchQuery={(query) => handleStateUpdate({ searchQuery: query })}
      />
      
      <div className="nested-list-container mt-3">
        <NestedList
          categories={categories}
          checkedIds={state.checkedIds}
          expandedIds={state.expandedIds}
          onCheck={handleCheckedState}
          onToggle={handleToggleExpansion}
        />
      </div>
    </div>
  );
};

// Search Control Component
const SearchControl = ({ searchQuery, setSearchQuery }) => (
  <div className="input-group mb-3">
    <span className="input-group-text">
      <i className="bi bi-search" />
    </span>
    <input
      type="search"
      className="form-control"
      placeholder="Search categories..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      aria-label="Search categories"
    />
  </div>
);

// Nested List Component
const NestedList = ({ categories, checkedIds, expandedIds, onCheck, onToggle }) => {
  const [localExpanded, setLocalExpanded] = useState(new Set());

  const toggleVisibility = (categoryId) => {
    const newExpanded = new Set(localExpanded);
    newExpanded.has(categoryId) ? newExpanded.delete(categoryId) : newExpanded.add(categoryId);
    setLocalExpanded(newExpanded);
  };

  return (
    <ul className="list-group">
      {categories.map((category) => (
        <CategoryNode
          key={category.id}
          category={category}
          depth={0}
          checkedIds={checkedIds}
          expandedIds={expandedIds}
          localExpanded={localExpanded}
          onCheck={onCheck}
          onToggle={onToggle}
          onVisibilityToggle={toggleVisibility}
        />
      ))}
    </ul>
  );
};

// Category Node Component
const CategoryNode = ({ category, depth, checkedIds, expandedIds, localExpanded, onCheck, onToggle, onVisibilityToggle }) => {
  const hasChildren = category.children?.length > 0;
  const isExpanded = expandedIds.has(category.id) && localExpanded.has(category.id);

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex align-items-center" style={{ paddingLeft: `${depth * 32}px` }}>
          <ToggleButton
            isExpanded={isExpanded}
            hasChildren={hasChildren}
            onToggle={() => {
              onVisibilityToggle(category.id);
              onToggle(category.id);
            }}
          />
          
          <CheckboxControl
            category={category}
            checkedIds={checkedIds}
            onCheck={onCheck}
          />
        </div>
      </li>
      
      {hasChildren && isExpanded && (
        <NestedList
          categories={category.children}
          depth={depth + 1}
          checkedIds={checkedIds}
          expandedIds={expandedIds}
          localExpanded={localExpanded}
          onCheck={onCheck}
          onToggle={onToggle}
          onVisibilityToggle={onVisibilityToggle}
        />
      )}
    </>
  );
};

// Toggle Button Component
const ToggleButton = ({ isExpanded, hasChildren, onToggle }) => (
  <button
    className="btn btn-sm btn-link me-2"
    onClick={onToggle}
    disabled={!hasChildren}
    aria-expanded={isExpanded}
  >
    {hasChildren && (
      <i className={`bi ${isExpanded ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
    )}
  </button>
);

// Checkbox Control Component
const CheckboxControl = ({ category, checkedIds, onCheck }) => {
  const isChecked = checkedIds.has(category.id);
  const isIndeterminate = false; // Add indeterminate state logic here

  return (
    <div className="form-check flex-grow-1">
      <input
        className="form-check-input"
        type="checkbox"
        id={`check-${category.id}`}
        checked={isChecked}
        ref={(el) => el && (el.indeterminate = isIndeterminate)}
        onChange={(e) => onCheck(category.id, e.target.checked)}
      />
      <label className="form-check-label ms-2" htmlFor={`check-${category.id}`}>
        {category.name}
      </label>
    </div>
  );
};

// Settings Panel Component (example secondary tab)
const SettingsPanel = () => (
  <div className="settings-panel">
    <h3>Settings</h3>
    <p>Additional configuration options...</p>
  </div>
);

export default TabbedInterface;