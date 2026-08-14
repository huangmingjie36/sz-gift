import { useEffect } from "react";
import { ChapterBar } from "./components/ChapterBar";
import { Cursor } from "./components/Cursor";
import { Grain } from "./components/Grain";
import { destroyLenis, initLenis } from "./lib/scroll";
import { Bayern } from "./sections/Bayern";
import { Ending } from "./sections/Ending";
import { Fragments } from "./sections/Fragments";
import { Friends } from "./sections/Friends";
import { Opening } from "./sections/Opening";
import { Sound } from "./sections/Sound";
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
        <Sound />
        <Friends />
        <Bayern />
        <Fragments />
        <You />
        <Ending />
      </main>
    </>
  );
}
