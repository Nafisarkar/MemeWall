import Imagecard from "@/components/ui/imagecard";
import { useEffect, useState } from "react";
const Homepage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchmemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        setCards(data.data.memes);
        console.log(data.data.memes);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchmemes();
  }, []);

  return (
    // Outer container: Full width, min height of screen, responsive padding, background styles
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-[#090b0e] bg-[linear-gradient(to_bottom,rgba(8,39,64,0.5)_1px,transparent_1px),_linear-gradient(to_right,rgba(8,39,64,0.5)_1px,transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
      {/* Inner container: Responsive columns with consistent gap */}
      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4">
        {cards.map((card) => (
          <Imagecard
            key={card.id}
            id={card.id}
            name={card.name}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
