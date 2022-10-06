import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ContentDetails = () => {
  const location = useLocation();
  const id = location.pathname.slice(15);

  const [details, setDetails] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: "",
            append_to_response: "videos",
          },
        }
      );
      const data = response.data;
      const { results } = data.videos;
      const trailer = await results.find(validateVideo);

      async function validateVideo(v) {
        return v.type === "Trailer";
      }

      setVideo(trailer);
      setDetails(data);
    }
    getDetails();
  }, [id]);

  return (
    <div key={details.id}>
      <Container>
        <Row className="content-details">
          <h2>{details.title}</h2>
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
              width="600"
              height="500"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentDetails;
