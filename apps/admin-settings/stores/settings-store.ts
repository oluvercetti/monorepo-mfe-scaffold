import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SystemSettings } from "../types/settings";

interface SettingsState {
  activeTab: "general" | "users" | "roles" | "email";
  setActiveTab: (tab: SettingsState["activeTab"]) => void;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  pendingChanges: Partial<SystemSettings>;
  setPendingChange: <K extends keyof SystemSettings>(
    key: K,
    value: SystemSettings[K]
  ) => void;
  resetPendingChanges: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    (set) => ({
      activeTab: "general",
      setActiveTab: (activeTab) => set({ activeTab }),
      isDirty: false,
      setIsDirty: (isDirty) => set({ isDirty }),
      pendingChanges: {},
      setPendingChange: (key, value) =>
        set((state) => ({
          pendingChanges: { ...state.pendingChanges, [key]: value },
          isDirty: true,
        })),
      resetPendingChanges: () => set({ pendingChanges: {}, isDirty: false }),
    }),
    {
      name: "settings-store",
    }
  )
);
