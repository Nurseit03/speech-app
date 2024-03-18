import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface IHeaderProps {
  title: string;
}

export default function Header({ title }: IHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#4450bc" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            {title}
          </Typography>
          <Button sx={{ color: "white" }}>Вход</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
