import { Cursor } from "./components/Cursor";
import { Deck } from "./components/Deck";
import { Grain } from "./components/Grain";
import { ActMusicScene } from "./scenes/ActMusicScene";
import { AfterScene } from "./scenes/AfterScene";
import { AlbumScene } from "./scenes/AlbumScene";
import { DeepCutsScene } from "./scenes/DeepCutsScene";
import { DeutschlandScene } from "./scenes/DeutschlandScene";
import { EndingScene } from "./scenes/EndingScene";
import { FriendsScene } from "./scenes/FriendsScene";
import { InterFootballScene, InterScreenScene } from "./scenes/InterScene";
import { MatchdayScene } from "./scenes/MatchdayScene";
import { MiaScene } from "./scenes/MiaScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { ScreenScene } from "./scenes/ScreenScene";
import { ThreeScene } from "./scenes/ThreeScene";
import { VoicesScene } from "./scenes/VoicesScene";
import "./styles/global.css";
import "./styles/scenes.css";

export default function App() {
  return (
    <>
      <Grain />
      <Cursor />
      <Deck>
        <OpeningScene />
        <ActMusicScene />
        <ThreeScene />
        <VoicesScene />
        <AlbumScene />
        <DeepCutsScene />
        <InterScreenScene />
        <FriendsScene />
        <AfterScene />
        <ScreenScene />
        <InterFootballScene />
        <MiaScene />
        <MatchdayScene />
        <DeutschlandScene />
        <EndingScene />
      </Deck>
    </>
  );
}
