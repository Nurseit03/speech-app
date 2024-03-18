import { useEffect, useRef, useState } from "react";
import useNotificationStore from "../stores/notification";

interface SpeechRecognitionOptions {
  interimResults?: boolean;
  lang?: string;
  continuous?: boolean;
}

const useSpeechToText = (options: SpeechRecognitionOptions = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recgonitionRef = useRef<any>(null);

  const setNotification = useNotificationStore(
    (state) => state.setNotification
  );

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Web speeaach api is not supported");
      setNotification("Web speeaach api is not supported", "error");
      return;
    }

    recgonitionRef.current = new (window as any).webkitSpeechRecognition();
    const recognition = recgonitionRef.current;
    recgonitionRef.current.interimResults = options.interimResults || true;
    recgonitionRef.current.lang = options.lang || "en-US";
    recgonitionRef.current.continuous = options.continuous || false;

    if ("webkitSpeechGrammarList" in window) {
      const grammar =
        "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;";
      const speechRecognitionList = new (
        window as any
      ).webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = (event: any) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setNotification(`Speech recognition error: ${event.error}`, "error");
      return;
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscript("");
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (recgonitionRef.current && !isListening) {
      recgonitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recgonitionRef.current && isListening) {
      recgonitionRef.current.stop();
      setIsListening(false);
    }
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
  };
};

export default useSpeechToText;
