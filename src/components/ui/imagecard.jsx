import { Card, CardDescription, CardHeader, CardTitle } from "./card";

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
            className="object-cover border-4 border-black rounded-4"
          />
          <CardTitle className="text-white text-2xl font-poppins">
            {name}
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
      </Card>
    </div>
  );
};

export default imagecard;
