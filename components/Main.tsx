import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { Decor } from "@/components/Decor";
import { Buttons } from "./Buttons";

export default function Main() {
  return (
    <div className="p-32 pt-20 h-full w-full flex justify-between flex-col">
      <Info/>
      <Decor/>
      <Buttons/>
      <Footer />
    </div>
  );
}
