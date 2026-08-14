import { useEffect } from "react";
import { ChapterBar } from "./components/ChapterBar";
import { Cursor } from "./components/Cursor";
import { Grain } from "./components/Grain";
import { destroyLenis, initLenis } from "./lib/scroll";
import { Core } from "./sections/Core";
import { DeepCuts } from "./sections/DeepCuts";
import { Dna } from "./sections/Dna";
import { Ending } from "./sections/Ending";
import { LivingRoom } from "./sections/LivingRoom";
import { Matchday } from "./sections/Matchday";
import { Opening } from "./sections/Opening";
import { RecordRoom } from "./sections/RecordRoom";
import { You } from "./sections/You";
import "./styles/global.css";

export default function App() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <>
      <Grain />
      <Cursor />
      <ChapterBar />
      <main>
        <Opening />
        <Core />
        <RecordRoom />
        <LivingRoom />
        <Matchday />
        <DeepCuts />
        <Dna />
        <You />
        <Ending />
      </main>
    </>
  );
}
