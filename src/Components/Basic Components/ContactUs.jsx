import React, { useState } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import { Button } from "@material-tailwind/react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_ihm1kkq",
        "template_w17ojgm",
        formData,
        "Yd4XI2oMRgjpPJKF5"
      )
      .then(
        () => {
          toast("Message sent successfully!", { position: "top-center" });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast("Failed to send message. Please try again.", {
            position: "top-center",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <StyledWrapper>
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label
              htmlFor="name"
              className="text-white font-poppins font-light text-xl"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label htmlFor="email" className="text-white font-poppins text-xl">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label
              htmlFor="message"
              className="text-white font-poppins text-xl"
            >
              How can we assist you better?
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>

          <Button
            className="text-white bg-blue-900 px-14 py-3"
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isSending ? "Sending" : "Submit"}
          </Button>
          <ToastContainer />
        </form>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 15px; /* Added space between fields and button */
  }

  .form-container .form-group label {
  }

  .form-container .form-group input,
  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #414141;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form-group textarea {
    resize: none; /* Disabled textarea resizing */
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  // .form-container .form-submit-btn {
  //   color: #717171;
  //   font-weight: 600;
  //   width: 40%;
  //   background: #313131;
  //   border: 1px solid #414141;
  //   padding: 12px 16px;
  //   cursor: pointer;
  //   border-radius: 6px;
  //   transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  // }

  // .form-container .form-submit-btn:hover {
  //   background-color: #fff;
  //   border-color: #fff;
  // }
`;

export default Form;
