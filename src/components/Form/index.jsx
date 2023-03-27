import React from "react";

import { Content, FormContainer } from "./styles";
import { motion } from "framer-motion";

export const Form = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <FormContainer>
        <form>
          <label>Name</label>
          <input type="name" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Phone</label>
          <input type="phone" placeholder="Phone" />
          <textarea placeholder="Message..." type="message" rows="10" />
          <button>Send</button>
        </form>
        <div>
          <h1>Send a Feedback</h1>
          <p>Postcode: XXX XXX</p>
          <p>City: XXXXXX</p>
          <p>Phone: XXX XXX XXXX</p>
        </div>
      </FormContainer>
      <Content>
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810779084!2d-0.24168048758363828!3d51.52877184055496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres!5e0!3m2!1spt-BR!2suk!4v1665410244581!5m2!1spt-BR!2suk"
          ></iframe>
        </div>
      </Content>
    </motion.div>
  );
};
