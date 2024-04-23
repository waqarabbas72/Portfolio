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
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col"
    >
      {/* Form fields to capture user input */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="border"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="border"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="border"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="text-white py-2 px-4 mr-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"
      >
        {isLoading ? "Sending..." : "Send Email"}
      </button>
      {isSuccess && <p className="success">Email sent successfully!</p>}
      {isError && (
        <p className="error">Error sending email. Please try again.</p>
      )}
    </form>
    // <form onSubmit={handleSubmit}>
    //   <div className="space-y-12">
    //     <div className="border-b border-gray-900/10 pb-12">
    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div className="sm:col-span-4">
    //           <label
    //             htmlFor="username"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Name
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="text"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 placeholder="Your Name"
    //                 required
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-4">
    //           <label
    //             htmlFor="username"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Email
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 placeholder="Your Email"
    //                 required
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label
    //             htmlFor="about"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Message
    //           </label>
    //           <div className="mt-2">
    //             <textarea
    //               name="message"
    //               value={formData.message}
    //               onChange={handleChange}
    //               placeholder="Your Message"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               defaultValue={""}
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             disabled={isLoading}
    //             className="text-white py-2 px-4 mr-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"
    //           >
    //             {isLoading ? "Sending..." : "Send Email"}
    //           </button>
    //           {isSuccess && <p className="success">Email sent successfully!</p>}
    //           {isError && (
    //             <p className="error">Error sending email. Please try again.</p>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
}

export default Contact;
