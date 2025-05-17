import { create } from "zustand";

export type NavbarThemeColorKey = "primary" | "secondary" | "tertiary";

interface NavbarDesignState {
  orgLogo: string | null;
  colors: Record<NavbarThemeColorKey, string>;
  setOrgLogo: (logo: string | null) => void;
  setColor: (key: NavbarThemeColorKey, color: string) => void;
}
export  const  Colors: Record<NavbarThemeColorKey, string>={
  primary: "#1659E6",
  secondary: "#E8EEFD",
  tertiary: "#8E44AD",
}

export const useNavbarDesignStore = create<NavbarDesignState>((set) => ({
  orgLogo: null,
  colors: Colors,
  setOrgLogo: (logo) => set({ orgLogo: logo }),
  setColor: (key, color) => set((state) => ({
    colors: { ...state.colors, [key]: color },
  })),
}));
