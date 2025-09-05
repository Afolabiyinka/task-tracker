import React, { useState } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import { Button, Input, Textarea } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import undrawPDF from "../../Assets/undraw_feedback_ebmx.svg";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const formData = { name, email, message };

    emailjs
      .send(
        "service_ihm1kkq",
        "template_w17ojgm",
        formData,
        "Yd4XI2oMRgjpPJKF5"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          theme: "dark",
          transition: Slide,
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          theme: "dark",
          transition: Slide,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className=" py-2 flex justify-start items-center px-6 ">
      <div className="w-full lg:w-[50%] px-2 flex flex-col items-center gap-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl  "
        >
          Help us improve! Share your thoughts with us.
        </motion.h1>

        <motion.div
          className="w-full max-w-md lg:max-w-[25rem] rounded-xl p-4 border-[2px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className=" font-mono text-lg">
                Your Name
              </label>
              <Input
                className=" rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variants={slideUpVariants}
              />

              <label htmlFor="email" className=" font-mono text-lg">
                Your Email
              </label>
              <Input
                className=" rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variants={slideUpVariants}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className=" font-mono text-lg">
                How can we assist you better?
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                variants={slideUpVariants}
                className=" rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <motion.div
              className="w-full flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                color="blue"
                variant="gradient"
                size="md"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </Button>
            </motion.div>
          </form>

          <ToastContainer />
        </motion.div>
      </div>
      <motion.img
        src={undrawPDF}
        alt="Feedback Illustration"
        className="w-[60%] rounded-xlshadow-md  object-cover h-[80%] hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </div>
  );
};

export default Form;
