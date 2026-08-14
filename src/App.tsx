import { AudioDirector } from "./audio/AudioDirector";
import { SoundToggle } from "./components/SoundToggle";
import { Cursor } from "./components/Cursor";
import { Deck } from "./components/Deck";
import { Grain } from "./components/Grain";
import { ArtistScene } from "./scenes/ArtistScene";
import { DeutschlandScene } from "./scenes/DeutschlandScene";
import { EndingScene } from "./scenes/EndingScene";
import { FriendsScene } from "./scenes/FriendsScene";
import { InterFootballScene, InterScreenScene } from "./scenes/InterScene";
import { MatchdayScene } from "./scenes/MatchdayScene";
import { MiaScene } from "./scenes/MiaScene";
import { OliseScene } from "./scenes/OliseScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { RachelScene } from "./scenes/RachelScene";
import { SheetScene } from "./scenes/SheetScene";
import { ShelfScene } from "./scenes/ShelfScene";
import { artists } from "./data/scenes";
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
        <ArtistScene artist={artists[0]} index={0} />
        <ArtistScene artist={artists[1]} index={1} />
        <ArtistScene artist={artists[2]} index={2} />
        <SheetScene />
        <InterFootballScene />
        <MiaScene />
        <MatchdayScene />
        <OliseScene />
        <DeutschlandScene />
        <InterScreenScene />
        <FriendsScene />
        <RachelScene />
        <ShelfScene />
        <EndingScene />
      </Deck>
    </AudioDirector>
  );
}
