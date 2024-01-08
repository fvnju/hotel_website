import { Button } from "@/Components/ui/button";
import { ChevronRight } from "lucide-react";
import BrowseRoomItem from "./BrowseRoomItem";
import { Link } from "react-router-dom";
import { RoomData } from "./Data/RoomData";

const { room_data } = RoomData();

export default function BrowseRooms() {
  return (
    <>
      <div className="mt-10">
        <Button variant="link">
          <Link to="/browse-all-rooms" className="no-underline">
            Browse All Rooms
          </Link>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="flex justify-start gap-5 flex-wrap">
          {room_data.map((item) => (
            <BrowseRoomItem
              key={item.id}
              roomType={item.roomType}
              price={item.price}
              imgURL=""
            />
          ))}
        </div>
      </div>
    </>
  );
}
