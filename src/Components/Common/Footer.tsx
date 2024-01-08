//import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-light text-center text-lg-start mt-10">
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © {new Date().getFullYear()} Prosper's website
    </div>
  </footer>
);

export default Footer;
