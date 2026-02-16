const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

 export const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-IN"; // works for Telugu-English mix
  recognition.interimResults= false;

  export const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = "te-IN"; // works for Telugu-English mix
    utter.rate= 1;
    window.speechSynthesis.speak(utter)
  }