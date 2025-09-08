import { PlayCircle } from "lucide-react";

export const CallToActionVideo = () => {
  return (
    <section
      className="relative py-48 bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center z-10">
        <h3 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Agriculture Matters to the Future of Bangladesh
        </h3>
        <div className="mt-8 flex flex-col items-center">
          <button className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-colors">
            <PlayCircle className="w-16 h-16 text-white" />
          </button>
          <p className="mt-4 text-lg">Watch the video</p>
        </div>
      </div>
    </section>
  );
};