import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await emailjs.send(
        "service_li2ogeh", // Replace with your EmailJS service ID
        "template_5ukv72p", // Replace with your EmailJS template ID
        formData,
        "kWbXdAd-x1po0LkwH" // Replace with your EmailJS user ID
      );
      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div id="contact">
      <p className="font-bold text-4xl text-center text-gray-800 tracking-widest mb-8">
       GET IN TOUCH!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        {/* Form fields to capture user input */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="my-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            cols={24}
            required
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="py-2 px-4 mr-3 font-bold my-4 border text-gray-700 cursor-pointer hover:border-gray-700 duration-300 rounded-lg"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        {isSuccess && <p className="success">Message sent successfully!</p>}
        {isError && (
          <p className="error">Error sending Message. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
