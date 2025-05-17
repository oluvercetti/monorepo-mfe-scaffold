import dynamic from "next/dynamic";
import { Suspense } from "react";


const LoginPageDesign = dynamic(() => import("adminSettings/LoginPageDesign"), {
  ssr: false,
  loading: () => <div>Loading Login Page Design...</div>,
});

export default function AdminPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading Page Design</div>}>
        <LoginPageDesign />
      </Suspense>
    </div>
  );
}
