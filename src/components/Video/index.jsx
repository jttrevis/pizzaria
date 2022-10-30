import React from "react";
import { Container, Content } from "./styles";

export const Video = () => {
  return (
    <Container>
      <Content>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/Fbrg90LGSs8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Content>
    </Container>
  );
};
