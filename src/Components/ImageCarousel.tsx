import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function ImageCarousel() {
  const imgStyle = {
    width: "100%",
    height: "40vw",
  };
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img
          style={imgStyle}
          src="SlideShow/photo (1).jpg"
          className="object-cover rounded-xl"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          style={imgStyle}
          src="SlideShow/photo (2).jpg"
          className="object-cover rounded-xl"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          style={imgStyle}
          src="SlideShow/photo (3).jpg"
          className="object-cover rounded-xl"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img
          style={imgStyle}
          src="SlideShow/photo (4).jpg"
          className="object-cover rounded-xl"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
