import { toast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle } from "./card";
import { Copy, Download } from "lucide-react"; // Import Download icon

const imagecard = ({ id, name, url }) => {
  // Function to handle image download
  const handleDownload = async (e) => {
    e.stopPropagation(); // Prevent card click
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      // Suggest a filename (e.g., based on meme name or id)
      link.download = `${name.replace(/\s+/g, "_") || "meme"}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl); // Clean up
      toast({
        duration: 2000,
        description: "Download started!",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        variant: "destructive",
        duration: 3000,
        description: "Download failed. Please try again.",
      });
    }
  };

  return (
    <div className="relative group break-inside-avoid mb-4">
      <div className="absolute -inset-1 w-full">
        <div
          className="h-full max-w mx-auto lg:mx-0 opacity-20 blur-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600   
        filter: blur(12px) contrast(2) brightness(1.5);
        "
        ></div>
      </div>
      <Card
        className="relative z-1 h-min w-full bg-transparent border-none cursor-pointer overflow-hidden rounded-lg" // Added overflow-hidden and rounded-lg here
        onClick={() => window.open(url, "_blank")}
      >
        <CardHeader className="p-0 relative">
          <img
            src={url}
            alt={name}
            // Removed rounded-lg from img as parent Card now handles clipping/rounding
            className="object-cover w-full h-auto border-4 border-black"
          />
          {/* Container for buttons - Adjusted positioning slightly */}
          <div className="absolute bottom-14 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Copy Button - Modernized style */}
            <button
              title="Copy URL"
              className="text-white bg-zinc-900/70 hover:bg-zinc-900/90 backdrop-blur-sm p-2 rounded-lg transition-all duration-200 ease-in-out hover:scale-105" // Modernized classes
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(url).then(() => {
                  toast({
                    duration: 2000,
                    description: "Copied to clipboard!",
                  });
                });
              }}
            >
              <Copy className="size-5" /> {/* Use Lucide Icon */}
            </button>
            {/* Download Button - Modernized style */}
            <button
              title="Download Image"
              className="text-white bg-zinc-900/70 hover:bg-zinc-900/90 backdrop-blur-sm p-2 rounded-lg transition-all duration-200 ease-in-out hover:scale-105" // Modernized classes
              onClick={handleDownload} // Use the download handler
            >
              <Download className="size-5" /> {/* Use Lucide Icon */}
            </button>
          </div>
          <CardTitle className="text-white text-lg sm:text-xl font-poppins mt-2 px-1 pb-3">
            {name}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default imagecard;
