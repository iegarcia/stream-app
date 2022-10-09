import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataById } from "../functions";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import arrow from "../assets/arrow.svg";

const ContentDetails = () => {
  const location = useLocation();
  const id = location.pathname.slice(15);

  const [details, setDetails] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getDataById(id);
      const { results } = data.videos;
      const trailer = await results.find(validateVideo);

      async function validateVideo(v) {
        return v.type === "Trailer";
      }

      setVideo(trailer);
      setDetails(data);
    }
    run();
  }, [id]);

  return (
    <div key={details.id}>
      <Container>
        <Row className="content-details">
          <h2>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <img className="arrow-back" src={arrow} alt="arrow" />{" "}
              {details.title}
            </a>
          </h2>
          <hr />
          <Col sm={6}>
            <img
              src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
              alt={details.title}
            />
            <p className="content-description">{details.overview}</p>
          </Col>
          <Col md={6}>
            <h2>Trailer</h2>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentDetails;
