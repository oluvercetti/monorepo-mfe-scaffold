import { Breadcrumb } from "@repo/ui";

export default function BreadCrumb() {
  return (
    <Breadcrumb
      items={[
        { label: "Admin Settings", href: "/admin" },
        { label: "Branding and Styling", href: "/admin/brand-styling" },
        {
          label: "Login Page Design",
          href: "/admin/brand-styling/login-page-design",
        },
      ]}
      className="bg-white py-4 border-b border-borderColor"
    />
  );
}
