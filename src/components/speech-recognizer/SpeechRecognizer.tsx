import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import VoiceInput from "../voice-input/VoiceInput";
import ShareIcon from "@mui/icons-material/Share";
import ArchiveIcon from "@mui/icons-material/Archive";

export default function SpeechRecognizerContent() {
  const handleGetText = (text: string) => {
    console.log(text);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center", alignItems: "center" }}>
      <VoiceInput getText={handleGetText} />
      <Tooltip title="Поделиться" arrow>
        <IconButton onClick={() => console.log("Поделиться")}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="В архив" arrow>
        <IconButton onClick={() => console.log("архив")}>
          <ArchiveIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
