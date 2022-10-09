import { useEffect, useState } from "react";
import { getData } from "../functions";

//Estilo
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const NowPlaying = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getData("now_playing");
      setmovies(data.results);
    }
    run();
  }, []);

  return (
    <div>
      <Container>
        <h2 style={{ color: "white", textAlign: "left" }}>Continue Watching</h2>
        <hr />
        <Carousel interval={null} indicators={false}>
          <Carousel.Item>
            <Row
              xs={1}
              md={6}
              className="g-4"
              style={{ justifyContent: "center" }}
            >
              {movies.slice(0, 5).map((movie) => {
                return (
                  <Col key={movie.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${movie.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            <br />
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
            <Row
              xs={1}
              md={6}
              className="g-4"
              style={{ justifyContent: "center" }}
            >
              {movies.slice(5, 10).map((movie) => {
                return (
                  <Col key={movie.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${movie.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            <br />
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
            <Row
              xs={1}
              md={6}
              className="g-4"
              style={{ justifyContent: "center" }}
            >
              {movies.slice(10, 15).map((movie) => {
                return (
                  <Col key={movie.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${movie.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            <br />
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
        </Carousel>
      </Container>
    </div>
  );
};

export default NowPlaying;
