import { useEffect, useState } from "react";
import { getData } from "../functions";

//Estilo
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getData("upcoming");

      setMovies(data.results);
    }
    run();
  }, []);

  return (
    <div>
      <Container>
        <h2 style={{ color: "white", textAlign: "left" }}>Upcoming Movies</h2>
        <hr />
        <Row xs={1} md={4} className="g-4" style={{ justifyContent: "center" }}>
          {movies.slice(0, 12).map((movie) => {
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
                      <br />
                      <br />
                      <Card.Title
                        style={{ textAlign: "center", color: "white" }}
                      >
                        {movie.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Upcoming;
