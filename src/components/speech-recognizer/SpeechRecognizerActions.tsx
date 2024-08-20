import { FC } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArchiveIcon from "@mui/icons-material/Archive";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const SpeechRecognizerActions: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip title="В архив" arrow>
        <IconButton onClick={() => console.log("архив")}>
          <ArchiveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Скопировать" arrow>
        <IconButton onClick={() => console.log("копир")}>
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Поделиться" arrow>
        <IconButton onClick={() => console.log("Поделиться")}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SpeechRecognizerActions;
