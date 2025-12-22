"use client";
import { ReactNode, useState } from "react";
import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function TanstackProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [client] = useState(() => queryClient);
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}