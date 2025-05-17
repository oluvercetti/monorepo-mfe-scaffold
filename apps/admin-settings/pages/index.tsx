import {
  AdminCard,
  AdminCardGrid,
  AdminHeader,
  AdminSectionHeader,
  AlertIcon,
  AssetManagementIcon,
  BrandIcon,
  BusinessObjectIcon,
  EmailIcon,
  EntitiesIcon,
  HelpIcon,
  ModulesIcon,
  ReusableListIcon,
  RolesIcon,
  SectionDivider,
  ServiceCategoryIcon,
  ServiceIcon,
  TeamsIcon,
  UsersIcon,
} from "@repo/ui";
import React from "react";

// Define the section data structure
interface CardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface Section {
  number: number;
  title: string;
  description: string;
  cards: CardItem[];
}

export default function AdminSettingsPage() {
  // Data structure representing all sections and cards
  const sections: Section[] = [
    {
      number: 1,
      title: "General Settings",
      description: "Configure basic element that helps with smooth experience",
      cards: [
        {
          title: "Brand and Styling",
          description:
            "Customize platform colors, logos, and themes to match your brand.",
          icon: <BrandIcon />,
          href: "/admin/brand-styling",
        },
        {
          title: "Entities",
          description:
            "Configure multiple business entities to streamline operations across divisions.",
          icon: <EntitiesIcon />,
          href: "/admin/entities",
        },
        {
          title: "Reusable List",
          description: "Create reusable list for your forms.",
          icon: <ReusableListIcon />,
          href: "/admin/reusable-list",
        },
      ],
    },
    {
      number: 2,
      title: "Access Management",
      description: "Manage users, Teams and permission across the application",
      cards: [
        {
          title: "Users",
          description: "Add, edit, and manage user roles and permissions.",
          icon: <UsersIcon />,
          href: "/admin/users",
        },
        {
          title: "Roles",
          description:
            "Define access levels and responsibilities within the system.",
          icon: <RolesIcon />,
          href: "/admin/roles",
        },
        {
          title: "Teams",
          description:
            "Organize users into departments or teams for streamlined management.",
          icon: <TeamsIcon />,
          href: "/admin/teams",
        },
      ],
    },
    {
      number: 3,
      title: "Form Element",
      description: "Configure forms, workflow and SLA",
      cards: [
        {
          title: "Modules Offering Configuration",
          description:
            "Create and modify forms for data collection and workflow automation.",
          icon: <ModulesIcon />,
          href: "/admin/modules",
        },
      ],
    },
    {
      number: 4,
      title: "Service Configuration",
      description:
        "Organize services, categories, and core business objects for efficient management.",
      cards: [
        {
          title: "Service Category",
          description: "Manage and create service categories on the system.",
          icon: <ServiceCategoryIcon />,
          href: "/admin/service-category",
        },
        {
          title: "Service",
          description: "Manage and create service categories on the system.",
          icon: <ServiceIcon />,
          href: "/admin/service",
        },
        {
          title: "Business Object",
          description: "Configure business object.",
          icon: <BusinessObjectIcon />,
          href: "/admin/business-object",
        },
        {
          title: "Asset Management",
          description:
            "Management everything asset from asset category, manufacturer, life cycle, and inventories",
          icon: <AssetManagementIcon />,
          href: "/admin/asset-management",
        },
      ],
    },
    {
      number: 5,
      title: "Notifications & Communications",
      description: "Control how alerts and emails are sent and managed.",
      cards: [
        {
          title: "Alert Settings",
          description: "Create and manage system alerts.",
          icon: <AlertIcon />,
          href: "/admin/alerts",
        },
        {
          title: "Email",
          description:
            "Customize email templates and manage recipients for system notifications.",
          icon: <EmailIcon />,
          href: "/admin/email",
        },
      ],
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col p-6">
      <AdminHeader />

      <div>
        <SectionDivider />
        {sections.map((section, index) => (
          <div key={section.number} className="section-container">
            <AdminSectionHeader
              number={section.number}
              title={section.title}
              description={section.description}
            />

            <AdminCardGrid>
              {section.cards.map((card) => (
                <AdminCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  href={card.href}
                />
              ))}
            </AdminCardGrid>

            {index < sections.length - 1 && <SectionDivider />}
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 z-50 cursor-pointer">
        <HelpIcon />
      </div>
    </main>
  );
}
