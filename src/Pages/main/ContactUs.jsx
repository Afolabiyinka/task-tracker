import { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import undrawPDF from "../../Assets/undraw_feedback_ebmx.svg";
import useToastMessage from "../../libs/useToastMsg";
import { CustomInput } from "../../Components/custom/Input";
import { Mail, User } from "lucide-react";
import CustomBtn from "../../Components/custom/CustomBtn";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toastError, toastSuccess } = useToastMessage();

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
        "Yd4XI2oMRgjpPJKF5",
      )
      .then(() => {
        toastSuccess("Message sent succesfully");
      })
      .catch(() => {
        toastError("Failed to send message. Please try again.");
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
          className="text-2xl "
        >
          Help us improve! Share your thoughts with us.
        </motion.h1>

        <motion.div
          className="w-full max-w-md lg:max-w-[25rem] rounded-xl p-4 border-[2px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col  justify-center items-center gap-4"
          >
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="name" className=" font-mono text-lg">
                Your Name
              </label>

              <CustomInput
                icon={User}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email" className=" font-mono text-lg">
                Your Email
              </label>

              <CustomInput
                icon={Mail}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className=" font-mono text-lg">
                How can we assist you better?
              </label>
              <Textarea
                name="message"
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                variants={slideUpVariants}
                className=" rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <motion.div
              className="w-full flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CustomBtn
                className={`w-full`}
                disabled={isSending}
                loading={isSending}
                children={isSending ? "Sending..." : "Submit"}
              />
            </motion.div>
          </form>
        </motion.div>
      </div>
      <motion.img
        src={undrawPDF}
        alt="Feedback Illustration"
        className="w-[60%] rounded-xlshadow-md  object-cover h-[80%] hidden lg:block p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </div>
  );
};

export default Form;
