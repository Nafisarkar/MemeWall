import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navbar = () => {
  return (
    <div className="h-24 bg-[#000000] flex flex-row items-center justify-between pl-11 pr-11">
      <h1
        className="font-extrabold lg:text-5xl
        text-3xl
        font-notobangla  bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] text-transparent bg-clip-text animate-gradient
        md:pl-10
        "
      >
        MEMEদেয়াল.top
        <p className="text-white font-mono text-xs">
          From{" "}
          <a
            href="https://github.com/Nafisarkar"
            className="underline
          bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] text-transparent bg-clip-text animate-gradient
          text-bold
          hover:text-white
          "
          >
            Shaon An Nafi
          </a>
        </p>
      </h1>

      <Avatar
        onClick={() => {
          window.location.href = "https://github.com/Nafisarkar";
        }}
        className="cursor-pointer shadow-lg transition-all duration-500 hover:transform hover:scale-[1.3] md:mr-11"
      >
        <AvatarImage src="https://i.ibb.co.com/SBGmPsk/github-logo.png" />
        <AvatarFallback>Github</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default navbar;
