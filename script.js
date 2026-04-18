async function generateVoice() {
  const text = document.getElementById("text").value;

  if (!text) {
    alert("Text डालो पहले");
    return;
  }

  const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID/stream", {
    method: "POST",
    headers: {
      "xi-api-key": "YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2"
    })
  });

  if (!response.ok) {
    alert("API Error: " + response.status);
    return;
  }

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);

  const audio = new Audio(audioUrl);
  audio.play();
}
