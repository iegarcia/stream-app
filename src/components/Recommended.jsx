import axios from "axios";
import React, { useEffect, useState } from "react";

//Estilo
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Recommended = () => {
  const [popular, setpopular] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: process.env.REACT_APP_KEY,
          },
        }
      );
      const data = response.data;

      setpopular(data.results);
    }
    getData();
  }, []);

  return (
    <div>
      <Container>
        <h2 style={{ color: "white", textAlign: "left" }}>
          Recommended for you
        </h2>
        <hr />
        <Carousel interval={null} indicators={false}>
          <Carousel.Item>
            <Row
              xs={1}
              md={6}
              className="g-4"
              style={{ justifyContent: "center" }}
            >
              {popular.slice(5, 10).map((p) => {
                return (
                  <Col key={p.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${p.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${p.backdrop_path}`}
                          />
                          <br />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            {p.title}
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
              {popular.slice(10, 15).map((p) => {
                return (
                  <Col key={p.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${p.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${p.backdrop_path}`}
                          />
                          <br />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            {p.title}
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
              {popular.slice(15, 20).map((p) => {
                return (
                  <Col key={p.id}>
                    <a
                      style={{ textDecoration: 0, color: "black" }}
                      href={`/movie/details/${p.id}`}
                    >
                      <Card style={{ border: 0, backgroundColor: "#141622" }}>
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${p.backdrop_path}`}
                          />
                          <br />
                          <Card.Title
                            style={{ textAlign: "center", color: "white" }}
                          >
                            {p.title}
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

export default Recommended;
