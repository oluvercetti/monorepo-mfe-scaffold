import { Tabs, TabsList, TabsTrigger } from "@repo/ui";
import { Icon } from "@repo/ui/src/icons/icon";
import Image from "next/image";
import { useState } from "react";
import { useLoginPageDesignStore } from "../../../stores/login-page-design-store";
import ImageUploadModal from "./image-upload-modal";

const layouts = [
  { key: "left", icon: "/assets/svgs/align-left.svg", label: "Left" },
  { key: "center", icon: "/assets/svgs/align-vertically.svg", label: "Center" },
  { key: "right", icon: "/assets/svgs/align-right.svg", label: "Right" },
];

export default function CustomizationPanel() {
  const {
    orgLogo,
    backgroundImage,
    layout,
    setOrgLogo,
    setBackgroundImage,
    setLayout,
    backgroundType,
  } = useLoginPageDesignStore();

  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const [bgModalOpen, setBgModalOpen] = useState(false);

  const previewBg = backgroundImage || "/assets/svgs/login-empty-state.svg";
  const previewLogo = orgLogo || "/assets/images/access-logo.svg";
  const layoutTabs =
    backgroundType === "half"
      ? layouts.filter((l) => l.key !== "center")
      : layouts;

  return (
    <aside className="flex w-72 flex-col gap-6 divide-y border-r bg-white py-4">
      <ImageUploadModal
        open={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
        onUpload={(url) => setOrgLogo(url)}
        title="Upload Logo"
        buttonLabel="Upload"
        aspectRatio="100 × 100"
        maxSizeMB={5}
        initialPreview={orgLogo}
      />
      <ImageUploadModal
        open={bgModalOpen}
        onClose={() => setBgModalOpen(false)}
        onUpload={(url) => setBackgroundImage(url)}
        title="Upload Background Image"
        buttonLabel="Upload"
        aspectRatio="2000 × 2000"
        maxSizeMB={5}
        initialPreview={backgroundImage}
      />
      <div className="text-textPrimary flex px-4 text-[16px] font-bold leading-[24px]">
        <p>Customization Panel</p>
        <span className="ml-auto" />
      </div>
      {/* Logo */}
      <div className="space-y-3 px-4 py-2">
        <label className="text-textPrimary mb-1 block text-[16px] font-bold">
          Organizational Logo{" "}
          <span>
            <Icon name="info-circle" width={14} height={14} />
          </span>
        </label>
        <p className="text-textPrimary text-[10px] font-normal leading-[16px]">
          Maximum file dimension: 100 x 100 pixels
        </p>
        <div className="mb-2 flex items-center space-x-3">
          <Image src={previewLogo} alt="Logo preview" width={80} height={80} />
          <button
            type="button"
            className="text-baz-primary text-[12px] font-medium leading-[18px]"
            onClick={() => setLogoModalOpen(true)}
          >
            Change
          </button>
          <button
            type="button"
            className="text-[12px] font-medium leading-[18px] text-[#E43A39]"
            onClick={() => setOrgLogo(null)}
          >
            Delete
          </button>
        </div>
      </div>
      {/* Background */}
      <div className="space-y-3 px-4 py-2">
        <label className="text-textPrimary mb-1 block text-[16px] font-bold">
          Background Image{" "}
          <span>
            <Icon name="info-circle" width={14} height={14} />
          </span>
        </label>
        <Image
          src={previewBg}
          alt="Background preview"
          width={300}
          height={60}
          className="mb-2 rounded"
        />
        <div className="mb-2 flex items-center space-x-3">
          <button
            type="button"
            className="text-baz-primary text-[12px] font-medium leading-[18px]"
            onClick={() => setBgModalOpen(true)}
          >
            Change
          </button>
          <button
            type="button"
            className="text-[12px] font-medium leading-[18px] text-[#E43A39]"
            onClick={() => setBackgroundImage(null)}
          >
            Delete
          </button>
        </div>
      </div>
      {/* Layout */}
      <div className="space-y-3 px-4 py-2">
        <label className="text-textPrimary mb-1 block text-[16px] font-bold">
          Layout{" "}
          <span>
            <Icon name="info-circle" width={14} height={14} />
          </span>
        </label>
        <Tabs
          value={
            backgroundType === "half" && layout === "center" ? "left" : layout
          }
          onValueChange={(value) => setLayout(value as typeof layout)}
          className="w-full rounded-lg bg-[#F5F5F5] p-2"
        >
          <TabsList className="flex justify-between gap-2">
            {layoutTabs.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="flex w-full flex-col items-center rounded-lg border px-2 py-1 transition-all"
              >
                <Image
                  src={tab.icon}
                  alt={`${tab.label} align`}
                  width={24}
                  height={24}
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </aside>
  );
}
