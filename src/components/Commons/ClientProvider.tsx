// components/ClientProvider.tsx
"use client";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { theme } from "../../theme";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/sidebar";
export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript />
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <MantineProvider theme={theme}>
        <Provider store={store}>
          <Sidebar>{children}</Sidebar>
        </Provider>
      </MantineProvider>
    </>
  );
}
