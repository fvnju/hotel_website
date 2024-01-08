import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import { RoomManagement } from "./Components/RoomManagement";

export default function ManageRooms() {
  return (
    <>
      <div className="mx-10 h-[100vh]">
        <Navbar home={false} />
        <div>
          <RoomManagement />
        </div>
        <Footer />
      </div>
    </>
  );
}
