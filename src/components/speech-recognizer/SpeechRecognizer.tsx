import React from "react";
import { Box } from "@mui/material";
import VoiceInput from "../voice-input/VoiceInput";

export default function SpeechRecognizerContent() {
  const handleGetText = (text: string) => {
    console.log(text);
  };

  return (
    <Box>
      <VoiceInput getText={handleGetText} />
    </Box>
  );
}
