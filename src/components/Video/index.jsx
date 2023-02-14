import React from "react";
import InViewSection from "../inViewSection/inViewSection";
import { Container, Content } from "./styles";

export const Video = () => {
  return (
    <Container>
      <Content>
        <InViewSection>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/Fbrg90LGSs8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </InViewSection>
      </Content>
    </Container>
  );
};
