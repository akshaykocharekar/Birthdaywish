import { useEffect, useState } from "react";

export default function useMicDetector(threshold = 15) {
  const [isBlown, setIsBlown] = useState(false);

  useEffect(() => {
    let audioContext;
    let analyser;

    navigator.mediaDevices
      .getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false,
        },
      })
      .then((stream) => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();

        const mic = audioContext.createMediaStreamSource(stream);
        mic.connect(analyser);

        analyser.fftSize = 1024;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const detectBlow = () => {
          analyser.getByteTimeDomainData(dataArray);

          // Convert waveform to "air pressure level"
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            let v = (dataArray[i] - 128) / 128;
            sum += v * v;
          }

          const rms = Math.sqrt(sum / dataArray.length) * 100;

          // console.log("volume:", rms); // enable for debugging

          if (rms > threshold && !isBlown) {
            setIsBlown(true);
          }

          requestAnimationFrame(detectBlow);
        };

        detectBlow();
      })
      .catch((err) => {
        console.error("Mic error:", err);
      });

    return () => {
      if (audioContext) audioContext.close();
    };
  }, [threshold]);

  return isBlown;
}
