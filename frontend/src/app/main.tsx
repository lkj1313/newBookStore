import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// QueryClient 생성
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
