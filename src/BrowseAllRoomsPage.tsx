import Navbar from "./Components/Common/Navbar";
import { RoomData } from "./Components/Data/RoomData";
import BrowseRoomItem from "./Components/BrowseRoomItem";
import { Input } from "@/Components/ui/input";
import Footer from "./Components/Common/Footer";

const { room_data } = RoomData();

export default function BrowseAllRoomsPage() {
  return (
    <>
      <div className="mx-10 flex flex-col h-[100vh]">
        <Navbar home={false} />
        <div className="mt-5 flex items-center justify-center">
          <Input className="max-w-[500px] text-center" />
        </div>
        <div className="flex justify-start gap-5 flex-wrap mt-5">
          {room_data.map((item) => (
            <BrowseRoomItem
              key={item.id}
              roomType={item.roomType}
              price={item.price}
              imgURL=""
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
