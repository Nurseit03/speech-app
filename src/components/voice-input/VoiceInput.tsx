import { Box } from "@mui/material";
import { useState } from "react";
import Button from "../ui/Button";
import useSpeechToText from "../../hooks/useSpeechToText";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import StopIcon from "@mui/icons-material/Stop";

export const VoiceInput = () => {
  const [textInput, setTextInput] = useState("");

  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText({ continuous: true });

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    setTextInput(
      (prevVal) =>
        prevVal +
        (transcript.length ? (prevVal.length ? "" : "") + transcript : "")
    );
    stopListening();
  };

  return (
    <Box
      sx={{
        display: "block",
        margin: "0 auto",
        width: { xs: "100%", md: "400px" },
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <Button
        onClick={() => {
          startStopListening();
        }}
        endIcon={!isListening ? <KeyboardVoiceIcon /> : <StopIcon />}
        sx={{
          backgroundColor: isListening ? "#d62d20" : "#008744",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3 ease",
          width: "min-content",
        }}
      >
        {isListening ? "Стоп" : "Записать"}
      </Button>
      <textarea
        style={{
          marginTop: "20px",
          width: "90%",
          height: "150px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          transition: "border-color 0.3s ease",
          resize: "none",
          backgroundColor: "#f8f8f8",
          color: "#333",
        }}
        placeholder="Ввод текста"
        disabled={isListening}
        value={
          isListening
            ? textInput +
              (transcript.length
                ? (textInput.length ? "" : "") + transcript
                : "")
            : textInput
        }
        onChange={(e: any) => {
          setTextInput(e.target.value);
        }}
      />
    </Box>
  );
};
