import { useEffect, useState } from "react";

export default function useMicDetector(threshold = 40) {
  const [isBlown, setIsBlown] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioContext = new window.AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const detect = () => {
        analyser.getByteFrequencyData(dataArray);
        const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;

        if (volume > threshold) {
          setIsBlown(true);
        }
        requestAnimationFrame(detect);
      };

      detect();
    });
  }, []);

  return isBlown;
}
