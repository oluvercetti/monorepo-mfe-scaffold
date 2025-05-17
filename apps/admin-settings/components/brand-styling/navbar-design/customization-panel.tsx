import { Icon } from "@repo/ui/src/icons/icon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import { useNavbarDesignStore } from "../../../stores/navbar-design-store";
import ImageUploadModal from "../login-page-design/image-upload-modal";

interface ColorPickerPopupProps {
  color: string;
  onChange: (_hex8: string) => void;
  onClose: () => void;
}
const colorLabels = {
  primary: {
    label: "Primary Colour",
    desc: "Used for buttons, nav bar, table headers, and icons to reflect your brand.",
  },
  secondary: {
    label: "Secondary Colour",
    desc: "Applied to highlights, alerts, and supporting UI elements.",
  },
  tertiary: {
    label: "Tertiary Colour",
    desc: "Used for accents, subtle backgrounds, and less prominent UI elements.",
  },
};

function ColorPickerPopup({
  color,
  onChange,

  onClose,
}: ColorPickerPopupProps) {
  // Parse color and alpha
  const c = color.replace("#", "");
  const hex = c.length === 8 ? c.slice(0, 6) : c;
  const alpha = c.length === 8 ? parseInt(c.slice(6, 8), 16) : 255;
  const [rgba, setRgba] = useState({
    r: parseInt(hex.slice(0, 2), 16) || 0,
    g: parseInt(hex.slice(2, 4), 16) || 0,
    b: parseInt(hex.slice(4, 6), 16) || 0,
    a: alpha / 255,
  });
  const popupRef = useRef<HTMLDivElement>(null);
  // Prevent unnecessary re-renders by only updating state if value actually changed
  useEffect(() => {
    const c = color.replace("#", "");
    const hex = c.length === 8 ? c.slice(0, 6) : c;
    const alpha = c.length === 8 ? parseInt(c.slice(6, 8), 16) : 255;
    setRgba({
      r: parseInt(hex.slice(0, 2), 16) || 0,
      g: parseInt(hex.slice(2, 4), 16) || 0,
      b: parseInt(hex.slice(4, 6), 16) || 0,
      a: alpha / 255,
    });
  }, [color]);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  // Convert to hex, percent, hex8
  const hex8 = rgbaToHex8({ ...rgba, a: Math.round((rgba.a ?? 1) * 255) });
  console.log(hex8);
  // Handlers for manual input
  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
    if (!v.startsWith("#")) v = "#" + v;
    if (v.length === 7) {
      setRgba((prev) => ({ ...prev, ...hexToRgbObj(v) }));
      onChange(
        // v,
        // Math.round((rgba.a ?? 1) * 100),
        v +
          Math.round((rgba.a ?? 1) * 255)
            .toString(16)
            .padStart(2, "0")
            .toUpperCase()
      );
    }
  };
  const handleAlphaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9]/g, "");
    const n = Math.max(0, Math.min(100, Number(v)));
    setRgba((prev) => {
      const newRgba = { ...prev, a: n / 100 };
      onChange(
        // rgbaToHex(newRgba),
        // n,
        rgbaToHex8({ ...newRgba, a: Math.round((newRgba.a ?? 1) * 255) })
      );
      return newRgba;
    });
  };
  return (
    <div
      ref={popupRef}
      style={{
        width: 260,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
        padding: 16,
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: 210,
          height: 210,
          borderRadius: 12,
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <RgbaColorPicker
          color={rgba}
          onChange={(newRgba) => {
            setRgba(newRgba);
            // const hex = rgbaToHex(newRgba);
            // const percent = Math.round((newRgba.a ?? 1) * 100);
            const hex8 = rgbaToHex8({
              ...newRgba,
              a: Math.round((newRgba.a ?? 1) * 255),
            });
            onChange(hex8);
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* Inputs row */}
      <div style={{ display: "flex", gap: 8, width: "100%", marginTop: 16 }}>
        <input
          type="text"
          value={rgbaToHex(rgba)}
          onChange={handleHexInput}
          maxLength={7}
          style={{
            flex: 1,
            border: "1px solid #E0E0E0",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 16,
            fontWeight: 500,
            color: "#222",
            background: "#F8F8F8",
            outline: "none",
          }}
        />
        <input
          type="text"
          value={Math.round((rgba.a ?? 1) * 100) + "%"}
          onChange={handleAlphaInput}
          maxLength={4}
          style={{
            width: 60,
            border: "1px solid #E0E0E0",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 16,
            fontWeight: 500,
            color: "#222",
            background: "#F8F8F8",
            outline: "none",
            textAlign: "right",
          }}
        />
      </div>
      <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
        8-digit hex:{" "}
        {rgbaToHex8({ ...rgba, a: Math.round((rgba.a ?? 1) * 255) })}
      </div>
    </div>
  );
}

export default function CustomizationPanel() {
  const orgLogo = useNavbarDesignStore((s) => s.orgLogo);
  const setOrgLogo = useNavbarDesignStore((s) => s.setOrgLogo);
  const colors = useNavbarDesignStore((s) => s.colors);
  const setColor = useNavbarDesignStore((s) => s.setColor);
  const [modalOpen, setModalOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState<{
    [k: string]: boolean;
  }>({});
  const Logo = orgLogo ?? "/assets/images/logo.png";

  return (
    <aside className="flex w-72 flex-col gap-6 divide-y border-r bg-white pb-8 pt-4">
      <h2 className="text-textPrimary flex px-4 text-[16px] font-bold leading-[24px]">
        Customization Panel
      </h2>
      <div className="space-y-3 px-4 py-2">
        <label className="text-textPrimary mb-1 block text-[16px] font-bold">
          Organizational Logo{" "}
          <span className="pl-2">
            <Icon name="info-circle" width={14} height={14} />
          </span>
        </label>
        <p className="text-textPrimary text-[10px] font-normal leading-[16px]">
          Maximum file dimension: 100 x 100 pixels
        </p>

        <div className="mb-2 flex items-center space-x-3">
          <Image src={Logo} alt="Logo preview" width={80} height={80} />
          <button
            type="button"
            className="text-baz-primary text-[12px] font-medium leading-[18px]"
            onClick={() => setModalOpen(true)}
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

      {(["primary", "secondary", "tertiary"] as const).map((key) => (
        <div className="space-y-3 px-4 py-2" key={key}>
          <label className="text-textPrimary mb-1 block text-[16px] font-bold">
            {colorLabels[key].label}{" "}
            <span className="pl-2">
              <Icon name="info-circle" width={14} height={14} />
            </span>
          </label>

          <div className="text-textPrimay mb-2 text-[10px]">
            {colorLabels[key].desc}
          </div>
          <div className="relative flex items-center gap-2">
            <span className="text-textPrimary text-[12px]">Color</span>
            <div className="flex items-center space-x-3 rounded-md border border-[#EBEBEB] bg-[#F5F5F5] px-3 py-1">
              <div className="relative">
                <div
                  className="h-8 w-8 cursor-pointer rounded border"
                  style={{ background: colors[key] }}
                  onClick={() =>
                    setColorPickerOpen((o) => ({ ...o, [key]: !o[key] }))
                  }
                />
                {colorPickerOpen[key] && (
                  <div className="absolute left-0 top-10 z-20">
                    <ColorPickerPopup
                      color={colors[key]}
                      onChange={(hex8) => setColor(key, hex8)}
                      onClose={() =>
                        setColorPickerOpen((o) => ({ ...o, [key]: false }))
                      }
                    />
                  </div>
                )}
              </div>
              <input
                type="text"
                value={colors[key]}
                onChange={(e) =>
                  setColor(key, e.target.value.replace(/[^#0-9A-Fa-f#]/g, ""))
                }
                maxLength={7}
                className="text-textPrimary w-16 bg-transparent text-[12px] font-medium leading-[18px] outline-none"
                pattern="#?[0-9A-Fa-f]{6}"
              />
              <span className="text-textPrimary border-l-2 pl-2 text-[12px] font-medium leading-[18px]">
                100 %
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="relative mb-4 h-[0.5px] w-full self-stretch bg-[#ebebeb]" />
      <ImageUploadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUpload={(url) => setOrgLogo(url)}
        initialPreview={orgLogo}
        title="Upload Logo"
      />
    </aside>
  );
}

function rgbaToHex({ r, g, b }: { r: number; g: number; b: number }) {
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function rgbaToHex8({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a: number;
}) {
  return (
    "#" +
    [r, g, b, a]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

// --- Utility functions ---
function hexToRgbObj(hex: string) {
  hex = hex.replace("#", "");
  return {
    r: parseInt(hex.slice(0, 2), 16) || 0,
    g: parseInt(hex.slice(2, 4), 16) || 0,
    b: parseInt(hex.slice(4, 6), 16) || 0,
  };
}
