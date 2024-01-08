import { Route, Routes } from "react-router-dom";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/Components/ui/context-menu";
import App from "./App.tsx";
import ManageRooms from "./ManageRooms.tsx";
import BrowseAllRoomsPage from "./BrowseAllRoomsPage.tsx";
import AccountPage from "./AccountPage.tsx";
import { FindMyBooking } from "./FindMyBookingPage.tsx";

export default function WebRounting() {
  return (
    <>
      {/* Replaces the right click */}
      <ContextMenu>
        <ContextMenuTrigger>
          <Routes>
            <Route path="/" element={<App />} /> {/*Home Page*/}
            <Route path="/manage-rooms" element={<ManageRooms />} />
            <Route path="/browse-all-rooms" element={<BrowseAllRoomsPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/find-my-booking" element={<FindMyBooking />} />
          </Routes>
          {/*List that shows up when you right click⬇️*/}
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenuTrigger>
      </ContextMenu>
    </>
  );
}
