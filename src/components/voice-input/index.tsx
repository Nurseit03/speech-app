import { Box } from "@mui/material";
import { useState } from "react";
import Button from "../ui/Button";

export const VoiceInput = () => {
  const [textInput, setTextInput] = useState("");

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
        sx={{
          backgroundColor: "#008744",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3 ease",
        }}
      >
        Button
      </Button>
      <textarea
        style={{
          marginTop: "20px",
          width: "100%",
          height: "150px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          transition: "border-color 0.3s ease",
          resize: "none",
          backgroundColor: "#f8f8f8",
          color: "#333",
        }}
        value={textInput}
        onChange={(e: any) => {
          setTextInput(e.target.value);
        }}
      />
    </Box>
  );
};
