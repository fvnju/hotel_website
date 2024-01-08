import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";

export function FindMyBooking() {
  return (
    <>
      <div className="mx-10 h-[100vh]">
        <Navbar home={false} />
        Sign in first
        <Footer />
      </div>
    </>
  );
}
