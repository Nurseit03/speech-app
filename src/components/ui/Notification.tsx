import { Alert, Slide, Snackbar, SnackbarCloseReason, SnackbarProps } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { SyntheticEvent } from "react";

export interface INotificationProps extends SnackbarProps {
  title: string;
  severity?: "error" | "warning" | "info" | "success";
  variant?: "filled" | "outlined" | "standard";
  onCloseAlert: () => void;
}

// const SlideTransition = (props: TransitionProps) => <Slide {...props} direction="down" />;

const Notification = ({
  title,
  autoHideDuration = 3000,
  onClose,
  open,
  severity,
  variant,
  anchorOrigin,
  onCloseAlert,
  ...rest
}: INotificationProps) => {
  const handleCloseSnackbar = (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason): void => {
    if (reason === "clickaway") {
      return;
    }
    onCloseAlert();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={handleCloseSnackbar}
      // TransitionComponent={SlideTransition}
      {...rest}
    >
      <Alert
        severity={severity}
        variant={variant}
        onClose={onCloseAlert}
        sx={{ alignItems: "center", color: "white", fontSize: { md: "1.25rem" } }}
      >
        {title}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
