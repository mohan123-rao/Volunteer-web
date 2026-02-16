import { useEffect } from "react";
import { recognition, speak } from "./Voiceassistant";
import { useNavigate } from "react-router-dom";

function VoiceController() {
    const navigate = useNavigate();

    useEffect(() => {
        // Start recognition safely
        try {
            recognition.start();
        } catch (e) {
            console.log("Recognition already started");
        }

        recognition.onresult = (event) => {
            const lastIndex = event.results.length - 1;
            const speechText = event.results[lastIndex][0].transcript.toLowerCase();
            console.log("Global Listener heard:", speechText);

            // GLOBAL COMMANDS
            if (speechText.includes("home") || speechText.includes("mundhiki")) {
                navigate("/");
            } else if (speechText.includes("profile")) {
                navigate("/profile");
            } else if (speechText.includes("login")) {
                navigate("/loginchoice");
            } else if (speechText.includes("customer")|| speechText.includes("ko") || speechText.includes("konali")) {
                navigate("/login");
            } else if (speechText.includes("restaurant") || speechText.includes("res") || speechText.includes("food") || speechText.includes("am") || speechText.includes("groceries") || speechText.includes("ammali")) {
                navigate("/loginRes");
            }else if (speechText.includes("search for")) {
                const query = speechText.split("search")[1].trim();
                navigate("/search", { state: { query } });
            }
        };

        recognition.onend = () => {
            recognition.start(); // Keep it alive
        };

        return () => {
            recognition.onresult = null;
        };
    }, [navigate]);

    return null; 
}

export default VoiceController;