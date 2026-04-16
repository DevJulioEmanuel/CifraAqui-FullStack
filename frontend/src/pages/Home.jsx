import Title from "../components/Core/Title";
import NavBar from "../components/Core/NavBar";
import InputMusic from "../components/Core/InputMusic";
import ImageLeft from "../components/HomeComponents/ImageLeft";
import ImageRight from "../components/HomeComponents/ImageRight";
import Footer from "../components/Core/Footer";
import TopArtist from "../components/TopMusicasComponent/TopArtist";
import TopMusicas from "../components/TopMusicasComponent/TopMusicas";

function Home() {
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

export default Home;
