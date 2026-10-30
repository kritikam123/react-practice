import * as React from "react";

const tabContext = React.createContext({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

export function TabProvider({ children, defaultValue }) {
  const [activeTabValue, setActiveTabValue] = React.useState(defaultValue);

  return (
    <tabContext.Provider value={{ activeTabValue, setActiveTabValue }}>
      {children}
    </tabContext.Provider>
  );
}

export function TabTrigger({ value, children }) {
  const { activeTabValue, setActiveTabValue } = React.useContext(tabContext);

  const handleSetActiveTabValue = () => {
    setActiveTabValue(value);
  };

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

export function TabContent({ children, value }) {
  const { activeTabValue } = React.useContext(tabContext);

  if (activeTabValue !== value) {
    return null;
  }

  return children;
}
