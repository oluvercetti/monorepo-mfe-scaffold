import { create } from "zustand";

type Layout = "center" | "left" | "right";
type BackgroundType = "full" | "half";

interface LoginPageDesignState {
  orgLogo: string | null;
  backgroundImage: string | null;
  backgroundType: BackgroundType;
  layout: Layout;
  setOrgLogo: (logo: string | null) => void;
  setBackgroundImage: (img: string | null) => void;
  setBackgroundType: (type: BackgroundType) => void;
  setLayout: (layout: Layout) => void;
}

export const useLoginPageDesignStore = create<LoginPageDesignState>((set) => ({
  orgLogo: null,
  backgroundImage: null,
  backgroundType: "full",
  layout: "center",
  setOrgLogo: (logo) => set({ orgLogo: logo }),
  setBackgroundImage: (img) => set({ backgroundImage: img }),
  setBackgroundType: (type) => set({ backgroundType: type }),
  setLayout: (layout) => set({ layout }),
}));
