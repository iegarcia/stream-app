import { useState } from "react";
import { getDataByGenre } from "../functions";

import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContentCategory = (props) => {
  const [moviesByGenre, setmoviesByGenre] = useState([]);

  async function run() {
    const data = await getDataByGenre(props.genre_id);
    setmoviesByGenre(data.results);
  }

  const clear = () => setmoviesByGenre([]);
  const fill = () => run();
  return (
    <Modal
      onExited={clear}
      onEnter={fill}
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Carousel interval={3000} indicators={false}>
            <Carousel.Item>
              <Row xs={1} md={5} style={{ justifyContent: "center" }}>
                {moviesByGenre.slice(0, 4).map((movie) => {
                  return (
                    <Col key={movie.id}>
                      <a
                        style={{ textDecoration: 0, color: "black" }}
                        href={`/movie/details/${movie.id}`}
                      >
                        <Card style={{ border: 0 }}>
                          <Card.Body>
                            <Card.Img
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            />
                            <Card.Title style={{ textAlign: "center" }}>
                              {movie.title}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row xs={1} md={5} style={{ justifyContent: "center" }}>
                {moviesByGenre.slice(4, 8).map((movie) => {
                  return (
                    <Col key={movie.id}>
                      <a
                        style={{ textDecoration: 0, color: "black" }}
                        href={`/movie/details/${movie.id}`}
                      >
                        <Card style={{ border: 0 }}>
                          <Card.Body>
                            <Card.Img
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            />
                            <Card.Title style={{ textAlign: "center" }}>
                              {movie.title}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row xs={1} md={5} style={{ justifyContent: "center" }}>
                {moviesByGenre.slice(8, 12).map((movie) => {
                  return (
                    <Col key={movie.id}>
                      <Card style={{ border: 0 }}>
                        <Card.Body>
                          <Card.Img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          />
                          <Card.Title style={{ textAlign: "center" }}>
                            {movie.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContentCategory;
