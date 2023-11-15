import Carousel from "react-bootstrap/Carousel";
import "../style/home.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CarouselFadeExample() {
  return (
    <div className="home-background">
      <div className="home-conatainer ">
        <Carousel className="" fade>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.alphacoders.com/846/thumbbig-84631.webp"
            />
            <Carousel.Caption>
              <h2>Enjoy Anime Music</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://images3.alphacoders.com/123/thumbbig-123189.webp"
            />
            <Carousel.Caption>
              <h3>Watch Anime Trailers</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://images2.alphacoders.com/742/thumbbig-742320.webp"
            />
            <Carousel.Caption>
              <h3>Download Music</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%" }}
              src="https://images8.alphacoders.com/634/thumbbig-634244.webp"
            />
            <Carousel.Caption>
              <h3>Anime Links</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ width: "100%" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src="https://w0.peakpx.com/wallpaper/225/914/HD-wallpaper-magic-emperor-manhua-black-dragon-blue-anime-boy-magic-emperor.jpg"
          alt=""
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-290px",
          }}
        >
          <Link to="/card">
            <Button
              style={{
                background: "url(./images/background.png)",
                padding: "10px",
                width: "200px",
              }}
            >
              Anime Music
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarouselFadeExample;
