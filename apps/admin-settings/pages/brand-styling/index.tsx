import BreadCrumb from "../../components/brand-styling/bread-crumb";
import Link from "next/link";
import { useRouter } from "next/router";

interface DesignCardProps {
  title: string;
  description: string;
  route: string;
}

const DesignCard = ({ title, description, route }: DesignCardProps) => {
  const router = useRouter();
  const currentPath = router.asPath.replace(/\/$/, "");
  const href = `${currentPath}/${route}`;
  return (
    <div className="self-stretch px-2 relative rounded-lg border border-solid border-[#ebebeb] shadow-sm">
      <Link href={href} className="self-stretch py-4 space-y-4 relative block">
        <div className="relative w-fit font-bold text-[#333333] text-[16px] leading-[24px] whitespace-nowrap">
          {title}
        </div>
        <p className="relative self-stretch font-normal text-[#808080] text-[14px] leading-[18px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default function BrandingStylingPage() {
  return (
    <div className="p-6 ">
      <BreadCrumb />
      <div className="w-full space-y-6 p-6 relative bg-white rounded-lg">
        <div className="relative self-stretch mt-[-1.00px] font-bold text-[#333333] text-[16px]  leading-[24px] ">
          Branding and Styling
        </div>
        <div className="relative self-stretch w-full h-px bg-[#ebebeb]" />

        <DesignCard
          title="Login Page Design"
          description="Customize the layout and background image of your login page to create a branded and welcoming experience."
          route="login-page-design"
        />

        <DesignCard
          title="Nav Bar and Tab Appearance"
          description="Personalize the look of your tabs by updating colors and logos to align with your brand identity."
          route="navbar-design"
        />
      </div>
    </div>
  );
}