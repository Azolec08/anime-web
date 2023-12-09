import { useContext } from "react";
import "../style/card.scss";
import Card from "react-bootstrap/Card";
import { userContext } from "../store/createContextStore";
import { Button } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

const CardComponents = ({ id, title, year, text, img }: listType) => {
  const { addSongFavorites, addFavorite, favorite } = useContext(userContext);

  return (
    <>
      <div style={{ margin: "5px 0 5px 0" }}>
        <Card className="card_border">
          <Card.Img variant="top" src={img} className="card_img" />
          <Card.Body className="card_body">
            <Card.Title className="card_title">{title}</Card.Title>
            <Card.Title className="year">{year}</Card.Title>
            <Card.Text className="card_text">{text}</Card.Text>
            <div className="audioContainer">
              <Button
                className="bt_n"
                variant="primary"
                onClick={() => addSongFavorites(id)}
              >
                Music And Trailer
              </Button>
              {favorite[id] == 0 ? (
                <Button
                  className="bt_n"
                  variant="dark"
                  onClick={() => addFavorite(id)}
                >
                  <FavoriteIcon />
                </Button>
              ) : (
                <Button className="bt_n" variant="dark">
                  <FavoriteIcon style={{ color: "red" }} />
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default CardComponents;
