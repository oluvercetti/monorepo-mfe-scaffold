import { Breadcrumb } from "@repo/ui";

export default function BreadCrumb() {
  return (
    <Breadcrumb
      items={[
        { label: "Admin Settings", href: "/admin" },
        { label: "Branding and Styling", href: "/admin/brand-styling" },
      ]}
    />
  );
}
