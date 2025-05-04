"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the microfrontends
const Tickets = dynamic(() => import("tickets/Tickets"), {
  ssr: false,
  loading: () => <div>Loading Tickets...</div>,
});

const FormBuilder = dynamic(() => import("formBuilder/FormBuilder"), {
  ssr: false,
  loading: () => <div>Loading Form Builder...</div>,
});

const AdminSettings = dynamic(() => import("adminSettings/AdminSettings"), {
  ssr: false,
  loading: () => <div>Loading Admin Settings...</div>,
});

const ServiceCatalogue = dynamic(
  () => import("serviceCatalogue/ServiceCatalogue"),
  {
    ssr: false,
    loading: () => <div>Loading Service Catalogue...</div>,
  }
);

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Microfrontend Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          <Suspense fallback={<div>Loading Tickets...</div>}>
            <Tickets />
          </Suspense>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Form Builder</h2>
          <Suspense fallback={<div>Loading Form Builder...</div>}>
            <FormBuilder />
          </Suspense>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Admin Settings</h2>
          <Suspense fallback={<div>Loading Admin Settings...</div>}>
            <AdminSettings />
          </Suspense>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Service Catalogue</h2>
          <Suspense fallback={<div>Loading Service Catalogue...</div>}>
            <ServiceCatalogue />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
