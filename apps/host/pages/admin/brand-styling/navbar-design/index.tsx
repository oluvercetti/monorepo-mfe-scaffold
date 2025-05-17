import dynamic from "next/dynamic";
import { Suspense } from "react";


const NavbarDesign = dynamic(() => import("adminSettings/NavbarDesign"), {
  ssr: false,
  loading: () => <div>Loading Navbar Design...</div>,
});

export default function AdminPage() {
  return (
    <div>
        
      <Suspense fallback={<div>Loading Navbar Design</div>}>
        <NavbarDesign />
      </Suspense>
    </div>
  );
}
