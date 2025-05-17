import { Breadcrumb } from "@repo/ui";

export default function BreadCrumb() {
  return (
    <Breadcrumb
      items={[
        { label: "Admin Settings", href: "/admin" },
        { label: "Branding and Styling", href: "/admin/brand-styling" },
        {
          label: "Navbar and Tab Apperance",
          href: "/admin/brand-styling/navbar-design",
        },
      ]}
      className="bg-white py-4 border-b border-borderColor"
    />
  );
}
