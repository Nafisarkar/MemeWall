import Navbar from "./components/ui/navbar";
import Homepage from "./pages/homepage";
import { Toaster } from "@/components/ui/toaster";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Toaster />
    </>
  );
}

export default App;
