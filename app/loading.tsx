import Navbar from "@/components/navbar"

export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center gap-6 h-screen bg-black">
        <Navbar/>
        <div className="text-white text-lg font-semibold">
          Fetching Video Data ...
        </div>
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
      </div>
    );
  }
  