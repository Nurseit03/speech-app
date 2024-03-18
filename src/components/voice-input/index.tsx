import React, { useState } from "react";

export const VoiceInput = () => {
  const [textInput, setTextInput] = useState("");

  return (
    <div
      style={{
        display: "block",
        margin: "0 auto",
        width: "400px",
        textAlign: "center",
        marginTop: "200px",
      }}
    >
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
    </div>
  );
};
