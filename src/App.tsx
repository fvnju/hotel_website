import BrowseRooms from "./Components/BrowseRooms";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import ImageCarousel from "./Components/ImageCarousel";
import Resizable from "./Components/Resizable";
import RoomSearch from "./Components/RoomSearch";

function App() {
  const textShadow = {
    textShadow: "0px 0px 10px black",
  };
  return (
    <div className="mx-10">
      <Navbar home={true} />
      <div className="flex w-100 flex-col justify-center rounded-xl overflow-hidden">
        <ImageCarousel />
        <div
          className="absolute text-center place-self-center text-white"
          style={textShadow}
        >
          <h1>
            Welcome to{" "}
            <span className="text-blue-400 font-extrabold cursor-pointer">
              Prosper's
            </span>{" "}
            Hotel
          </h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elite</h2>
        </div>
      </div>
      <RoomSearch />
      <BrowseRooms />
      <div className="mt-10 pb-[100px] flex items-center justify-center nAn">
        <Resizable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
