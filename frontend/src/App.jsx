import "./App.css";
import Title from "./components/Title";
import InputMusic from "./components/InputMusic";
import ImageLeft from "./components/ImageLeft";
import ImageRight from "./components/ImageRight";
import TopMusicas from "./components/TopMusicasComponent/TopMusicas";

function App() {
  return (
    <div>
      <div className="flex">
        <Title></Title>
        <InputMusic></InputMusic>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col ml-32">
          <TopMusicas></TopMusicas>
          <ImageLeft></ImageLeft>
        </div>
        <div className="flex flex-col ml-auto mr-32">
          <ImageRight></ImageRight>
          <TopMusicas></TopMusicas>
        </div>
      </div>
    </div>
  );
}

export default App;
