import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import VoiceInput from "../voice-input/VoiceInput";
import ShareIcon from "@mui/icons-material/Share";
import ArchiveIcon from "@mui/icons-material/Archive";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function SpeechRecognizerContent() {
  const [text, setText] = useState<string>("");

  const handleGetText = (text: string) => {
    setText(text);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VoiceInput getText={handleGetText} />
      <Box
        sx={{
          display: text ? "flex" : "none",
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
    </Box>
  );
}
