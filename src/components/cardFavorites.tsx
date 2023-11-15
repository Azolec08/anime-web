import { useContext } from "react";
import "../style/card.scss";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ReactPlayer from "react-player";
import { userContext } from "../store/createContextStore";
import { Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

type listType = {
  id: number;
  img: string;
  title: string;
  year: number;
  text: string;
  song: any;
  trailer: string;
  info: string;
  genre: string;
  video: string;
};

export const CardFavorites = ({
  id,
  img,
  title,
  year,
  text,
  video,
}: listType) => {
  const { addSongFavorites, minusFavorite, handleMinus } =
    useContext(userContext);

  const handleMinusFavorite = () => {
    minusFavorite(id);
    handleMinus();
  };
  return (
    <>
      <div style={{ margin: "5px 0 5px 0" }}>
        <Card className="card_border">
          <Card.Img variant="top" src={img} className="card_img" />
          <Card.Body className="card_body">
            <Card.Title className="card_title">{title}</Card.Title>
            <Card.Title className="card_title">{year}</Card.Title>
            <Card.Text className="card_text">{text}</Card.Text>

            <div className="audioContainer">
              <Button
                className="bt_n"
                variant="primary"
                onClick={() => addSongFavorites(id)}
              >
                Music And Trailer
              </Button>

              <Button
                className="bt_n"
                id="btn"
                variant="light  "
                onClick={handleMinusFavorite}
              >
                <DeleteIcon className="btn2" />
              </Button>
            </div>
            <div></div>
          </Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0" className="accordion_item">
              <Accordion.Header className="accordion_header">
                <span className="video_text">Video Trailer</span>
              </Accordion.Header>
              <Accordion.Body className="accordion_info">
                <ReactPlayer url={video} controls width="100%" height="100%" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </div>
    </>
  );
};
