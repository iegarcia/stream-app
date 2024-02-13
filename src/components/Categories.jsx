import { useState } from "react";
import ContentCategory from "./ContentCategory";

//Assets
import family from "../assets/disney.png";
import fantasy from "../assets/marvel.png";
import animation from "../assets/pixar.png";
import fiction from "../assets/star_wars.png";
import documentary from "../assets/national_geographic.png";

//Style
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Categories = () => {
  const genres = [
    {
      id: 10751,
      name: "Family",
      image: family,
    },
    {
      id: 16,
      name: "Animation",
      image: animation,
    },
    {
      id: 14,
      name: "Fantasy",
      image: fantasy,
    },
    {
      id: 878,
      name: "Science Fiction",
      image: fiction,
    },
    {
      id: 99,
      name: "Documentary",
      image: documentary,
    },
  ];
  const [modalShow, setModalShow] = useState(false);
  const [genre, setGenre] = useState(genres);

  return (
    <div>
      <CardGroup
        style={{
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        {genres.map((genre) => {
          return (
            <Card
              key={genre.id}
              style={{
                border: 0,
                backgroundColor: "unset",
                width: "fit-content",
                cursor: "pointer",
              }}
              onClick={() => {
                setModalShow(true);
                setGenre(genre);
              }}
            >
              <Card.Body>
                <Card.Img variant="top" src={genre.image} />
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
      <ContentCategory
        title={genre.name}
        genre_id={genre.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Categories;
