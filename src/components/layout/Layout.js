import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="app-Layout">
      <main className="app-Layout__main">{children}</main>
    </div>
  );
};

export default Layout;
