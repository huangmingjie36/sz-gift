import { AudioDirector } from "./audio/AudioDirector";
import { SoundToggle } from "./components/SoundToggle";
import { Cursor } from "./components/Cursor";
import { Deck } from "./components/Deck";
import { Grain } from "./components/Grain";
import { ArrivalScene } from "./scenes/ArrivalScene";
import { CheerScene } from "./scenes/CheerScene";
import { CrateScene } from "./scenes/CrateScene";
import { DeutschlandScene } from "./scenes/DeutschlandScene";
import { EndingScene } from "./scenes/EndingScene";
import { FriendsScene } from "./scenes/FriendsScene";
import { JayScene } from "./scenes/JayScene";
import { KhalilScene } from "./scenes/KhalilScene";
import { MiaScene } from "./scenes/MiaScene";
import { OliseScene } from "./scenes/OliseScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { RachelScene } from "./scenes/RachelScene";
import { ShelfScene } from "./scenes/ShelfScene";
import { TvScene } from "./scenes/TvScene";
import "./styles/global.css";
import "./styles/scenes.css";

export default function App() {
  return (
    <AudioDirector>
      <Grain />
      <Cursor />
      <SoundToggle />
      <Deck>
        <OpeningScene />
        <JayScene />
        <KhalilScene />
        <CheerScene />
        <CrateScene />
        <ArrivalScene />
        <MiaScene />
        <OliseScene />
        <DeutschlandScene />
        <TvScene />
        <FriendsScene />
        <RachelScene />
        <ShelfScene />
        <EndingScene />
      </Deck>
    </AudioDirector>
  );
}
