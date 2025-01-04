// Layout.js
import React, { useState, useEffect } from "react";
import { fetchLayout, saveLayout } from "../utils/api";

const Layout = () => {
  const [layout, setLayout] = useState({});
  const [newLayout, setNewLayout] = useState({});

  useEffect(() => {
    const loadLayout = async () => {
      const fetchedLayout = await fetchLayout("user1");
      setLayout(fetchedLayout);
    };
    loadLayout();
  }, []);

  const handleSaveLayout = async () => {
    await saveLayout("user1", newLayout);
    alert("Layout Saved");
  };

  return (
    <div>
      <h2>Modify Layout</h2>
      <div>
        <pre>{JSON.stringify(layout, null, 2)}</pre>
      </div>
      <button onClick={handleSaveLayout}>Save New Layout</button>
    </div>
  );
};

export default Layout;
