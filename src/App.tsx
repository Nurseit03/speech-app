import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";
import useNotificationStore from "./stores/notification";
import Notification from "./components/ui/Notification";
import Layout from "./modules/layout/Layout";

export default function App() {
  const notification = useNotificationStore((state) => state.notification);
  const severity = useNotificationStore((state) => state.severity);
  const setCloseNotification = useNotificationStore(
    (state) => state.setNotification
  );

  const handleCloseNotification = (): void => {
    setCloseNotification("", severity);
  };

  return (
    <BrowserRouter>
      <Notification
        open={!!notification}
        onClose={handleCloseNotification}
        onCloseAlert={handleCloseNotification}
        title={notification ?? "Oops"}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        variant="filled"
        severity={severity ?? "error"}
      />
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  );
}
