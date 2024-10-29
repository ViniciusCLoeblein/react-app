"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({defaultOptions: {
  queries: {
    refetchIntervalInBackground: false
  }
}});

export default function ProviderApp({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}