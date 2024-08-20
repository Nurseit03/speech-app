import { useState } from "react";
import { Box, Fade } from "@mui/material";
import VoiceInput from "../voice-input/VoiceInput";
import SpeechRecognizerActions from "./SpeechRecognizerActions";

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
      <Fade in={!!text} timeout={700}>
        <SpeechRecognizerActions />
      </Fade>
    </Box>
  );
}
