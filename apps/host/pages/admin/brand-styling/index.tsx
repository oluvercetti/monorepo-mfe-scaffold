import dynamic from "next/dynamic";
import { Suspense } from "react";


const BrandStyling = dynamic(() => import("adminSettings/BrandStyling"), {
  ssr: false,
  loading: () => <div>Loading Brand Styling...</div>,
});

export default function AdminPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading Brand Styling</div>}>
        <BrandStyling />
      </Suspense>
    </div>
  );
}
