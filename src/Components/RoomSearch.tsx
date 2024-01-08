import DatePickerComponent from "./Common/DatePicker";
import { Badge } from "@/Components/ui/badge";
import { DropDown } from "./Common/DropDown";
import { Button } from "@/Components/ui/button";

export default function RoomSearch() {
  return (
    <>
      <div
        className="flex flex-wrap items-center justify-evenly pt-10"
        id="roomSearch"
      >
        <div className="grid space-y-1">
          <Badge className="w-fit">Check-in Date</Badge>
          <DatePickerComponent />
        </div>
        <div className="grid space-y-1">
          <Badge className="w-fit">Check-out Date</Badge>
          <DatePickerComponent />
        </div>
        <div className="grid space-y-1">
          <Badge className="w-fit">Room Type</Badge>
          <DropDown label="Select a room type" name="Room Type" />
        </div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <Button variant="outline">Search</Button>
      </div>
    </>
  );
}
