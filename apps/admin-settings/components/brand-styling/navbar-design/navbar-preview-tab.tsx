import React from "react";
import { useNavbarDesignStore } from "../../../stores/navbar-design-store";
import Image from "next/image";
import SearchIcon from "../../../public/assets/icons/search";
import AllMenuIcon from "../../../public/assets/icons/all-menu";
import NotificationIcon from "../../../public/assets/icons/notification";
import UserIcon from "../../../public/assets/icons/user";

export default function NavbarPreviewTab() {
  const orgLogo = useNavbarDesignStore((s) => s.orgLogo);
  const colors = useNavbarDesignStore((s) => s.colors);
  const Logo = orgLogo?? "/assets/images/logo.png"

  return (

    <div className="flex-1 flex flex-col items-center bg-[#F7F7F7] min-h-screen py-8 px-8">
      <div className="w-full max-w-[1200px] bg-white rounded shadow border border-[#F2F2F2] overflow-hidden flex flex-col" style={{ minHeight: '80vh' }}>
        <PreviewNavbar orgLogo={Logo} colors={colors} />
        <div className="flex-1 flex flex-col gap-6 p-8" style={{ minHeight: '500px' }}>
          
          <div className="flex gap-6 flex-1">
            <div className="h-40 flex-1 bg-[#F5F5F5] rounded-2xl" />
            <div className="h-40 flex-1 bg-[#F5F5F5] rounded-2xl" />
          </div>
           <div className="h-8 w-1/3 bg-[#F5F5F5] rounded-2xl" />
          <div className="h-64 w-full bg-[#F5F5F5] rounded-2xl" />
         
        </div>
      </div>
    </div>
    
  );
}

function PreviewNavbar({ orgLogo, colors }: { orgLogo: string | null, colors: Record<string, string> }) {
  return (
    <nav
      className="flex items-center justify-between px-7 py-3 border-b bg-white"
      
    >
      <div className="flex items-center gap-5">
        <Image
                src={orgLogo}
                alt="Logo"
                width={100}
                height={24}
                priority
                quality={100}
              />
               <div className="relative flex items-center basis-[10%]">
        <i className="absolute left-1 top-1/2 transform -translate-y-1/2 ml-1">
          <SearchIcon />
        </i>
        <input
          type="search"
          placeholder="Search for anything..."
          className="border border-[#F5F5F5] bg-[#FCFCFD] rounded-md text-textSecondary placeholder:text-textSecondary pl-12 py-2 text-[14px] leading-[18px] min-w-[300px]"
        />
      </div>
      </div>
     
      <div className="flex items-center gap-6">
        {[
          "Active Menu",
          "Default Main Menu",
          "Default Main Menu",
          
        ].map((label, idx) => (
          <a
            key={label}
            href="#"
            style={{
              background: idx === 0 ? colors.secondary : "transparent",
              color: idx === 0 ? colors.primary :'',
            }}
            className="text-[14px] p-2 leading-[18px] font-normal text-textPrimary rounded text-center transition-colors"
           
            onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
            onMouseOut={e => (e.currentTarget.style.color = '#333333')}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-8" style={{ color: colors.primary }}>
        <button className="text-textSecondary">
          <NotificationIcon />
        </button>
        <button >
          <AllMenuIcon />
        </button>
        <button >
          <UserIcon />
        </button>
      </div>
     
    </nav>
  );
}
