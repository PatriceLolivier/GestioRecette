import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HomePage } from "@page/HomePage";
import { RecetteHome } from "@page/RecetteHome";
import { RecetteDetails } from "@page/RecetteDetails";
import { CreateRecette } from "@page/CreateRecette";
import { EditRecette } from "@page/EditRecette";

import { MainLayout } from "@template/MainLayout";

import "./index.css";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recette" element={<RecetteHome />} />
            <Route path="/recette/:id" element={<RecetteDetails />} />
            <Route path="/add-recette" element={<CreateRecette />} />
            <Route path="/edit-recette/:id" element={<EditRecette />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
);
