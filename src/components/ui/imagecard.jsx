import { toast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle } from "./card";

const imagecard = ({ id, name, url }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 w-full">
        <div
          className="h-full max-w mx-auto lg:mx-0 opacity-20 blur-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600   
        filter: blur(12px) contrast(2) brightness(1.5);
        "
        ></div>
      </div>
      <Card
        className="relative z-1 h-min w-full bg-transparent border-none cursor-pointer"
        onClick={() => window.open(url, "_blank")}
      >
        <CardHeader>
          <img
            src={url}
            alt={name}
            className="object-cover border-4 border-black rounded-4 lg:w-[630px]"
          />

          <CardTitle className="text-white text-2xl font-poppins">
            {name}
          </CardTitle>
        </CardHeader>
      </Card>

      <div>
        <button
          className="absolute bottom-20 right-12 mb-4 mr-4 text-white bg-black bg-opacity-0  p-2 transition-opacity duration-500 hover:bg-opacity-20"
          style={{ opacity: 0 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = 0;
          }}
          onClick={() =>
            navigator.clipboard.writeText(url).then(() => {
              toast({
                duration: 2000,
                description: "Copied to clipboard!",
                status: "success",
                style: {
                  background: "black",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              });
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default imagecard;
