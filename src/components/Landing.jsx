import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="h-screen w-full bg-pink-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Happy Birthday 🎉
      </h1>

      <button
        onClick={() => nav("/cake")}
        className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition"
      >
        Start
      </button>
    </div>
  );
}
