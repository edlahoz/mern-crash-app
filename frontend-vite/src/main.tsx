import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "urql";
import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import { client } from "@/data/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Provider>
  </React.StrictMode>
);
