import React from "react"
import { Container, Content } from "./styles"


export const Localization = () => {
  return (
    <Container>
      <Content>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810779084!2d-0.24168048758363828!3d51.52877184055496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres!5e0!3m2!1spt-BR!2suk!4v1665410244581!5m2!1spt-BR!2suk"
          ></iframe>
        </div>
        <div >
          <p>Postcode: XX00-0XX</p>
          <p>Road: Xxxxxx, 99</p>
          <p>City: Xxxxxx</p>
        </div>
      </Content>
    </Container>
  )
}