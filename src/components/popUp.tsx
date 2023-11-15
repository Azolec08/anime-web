import { useContext } from "react";
import "../style/popStyle.scss";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ReactPlayer from "react-player";
import { userContext } from "../store/createContextStore";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactAudioPlayer from "react-audio-player";

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

const CardComponents = ({
  id,
  img,
  title,
  year,
  text,
  song,
  video,
}: listType) => {
  const { deleteSongFavorites } = useContext(userContext);
  return (
    <>
      <div style={{ margin: "-15px 0 5px 0" }}>
        <div className="delete" onClick={() => deleteSongFavorites(id)}>
          <DeleteIcon />
        </div>
        <Card className="card_border">
          <Card.Img variant="top" src={img} className="card_img" />
          <Card.Body className="card_body">
            <Card.Title className="card_title">{title}</Card.Title>
            <Card.Title className="card_title">{year}</Card.Title>
            <Card.Text className="card_text">{text}</Card.Text>
            <div className="audioContainer" style={{ width: "100%" }}>
              <div className="audio">
                <audio
                  controls
                  autoPlay
                  className="audio"
                  style={{ width: "100%" }}
                >
                  <source src={song} type="audio/mp3" />
                </audio>
              </div>
            </div>
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
export default CardComponents;
