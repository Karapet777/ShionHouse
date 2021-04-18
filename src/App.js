import React from "react";
import { ToastContainer } from "react-toastify";

import AppProvider from "./context/AppProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppProvider>
      <AppRouter />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
