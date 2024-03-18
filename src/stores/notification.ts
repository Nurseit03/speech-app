import { create } from "zustand";

interface INotificationState {
  notification: string | null;
  severity: "error" | "warning" | "info" | "success" | null;
  setNotification: (
    notification: string | null,
    severity?: "error" | "warning" | "info" | "success" | null
  ) => void;
}

const useNotificationStore = create<INotificationState>((set) => ({
  notification: null,
  severity: null,
  setNotification: (notification, severity) => set({ notification, severity }),
}));

export default useNotificationStore;
