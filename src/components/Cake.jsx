import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import useMicDetector from "../hooks/useMicDetector";
import cakeLit from "../assets/cake-lit.jpeg";
import cakeOut from "../assets/cake-lit.jpeg";

export default function Cake() {
  const blown = useMicDetector(45);
  const nav = useNavigate();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (blown && !done) {
      setDone(true);
      setTimeout(() => {
        nav("/montage");
      }, 3000);
    }
  }, [blown]);

  return (
    <div className="h-screen w-full bg-yellow-100 flex flex-col items-center justify-center relative">
      {done && <Confetti />}

      <h2 className="text-3xl font-semibold text-yellow-700 mb-4">
        Blow the candles!
      </h2>

      <img
        src={done ? cakeOut : cakeLit}
        alt="cake"
        className="w-64 transition-all"
      />

      <p className="text-gray-600 mt-4">
        Your mic will detect the blowing sound.
      </p>
    </div>
  );
}
