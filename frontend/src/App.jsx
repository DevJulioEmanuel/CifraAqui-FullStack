import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import InputMusic from "./components/InputMusic";
import ImageLeft from "./components/ImageLeft";
import ImageRight from "./components/ImageRight";
import Footer from "./components/Footer";
import TopArtist from "./components/TopMusicasComponent/TopArtist";
import TopMusicas from "./components/TopMusicasComponent/TopMusicas";

function App() {
  return (
    <div>
      <div className="flex">
        <Title></Title>
        <InputMusic></InputMusic>
        <NavBar></NavBar>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col ml-32">
          <TopMusicas></TopMusicas>
          <ImageLeft></ImageLeft>
        </div>
        <div className="flex flex-col ml-auto mr-32">
          <ImageRight></ImageRight>
          <TopArtist></TopArtist>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
