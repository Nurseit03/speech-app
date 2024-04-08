import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Недавно добавленные" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Избранные" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Архив" icon={<ArchiveIcon />} />
      </BottomNavigation>
    </Box>
  );
}
