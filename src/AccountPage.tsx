import { AccountManagement } from "./Components/Common/AccountManagement";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";

export default function AccountPage() {
  return (
    <>
      <div className="mx-10 h-[100vh]">
        <Navbar home={false} />
        <div className="flex items-center justify-center mt-10">
          <AccountManagement />
        </div>
        <Footer />
      </div>
    </>
  );
}
