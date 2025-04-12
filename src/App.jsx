import Navbar from "./components/ui/navbar";
import { useEffect, useRef } from "react";
import Homepage from "./pages/homepage";
import { Toaster } from "@/components/ui/toaster";
import Lenis from "lenis";
function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    lenis.current.scrollTo(element);
  };
  return (
    <>
      <Navbar />
      <Homepage />
      <Toaster />
    </>
  );
}

export default App;
