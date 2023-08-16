import React, { useState } from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive ? "bg-white hover:bg-white" : " "
      } text-accent-secondary font-semibold px-4 py-2 rounded-t-md focus:outline-none hover:bg-gray-200 transition-all ease-in-out duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabPanel = ({ children, isActive }) => {
  return isActive ? <div>{children}</div> : null;
};

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            isActive={tab.label === activeTab}
            onClick={() => handleTabClick(tab.label)}
          />
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <TabPanel key={tab.label} isActive={tab.label === activeTab}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
