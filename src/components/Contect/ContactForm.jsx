import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your data has been submitted successfully!");
    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
     <div className=' border-gray-300'>
        <Navbar/>
      <div className="py-5  m-20">
    <h1 className=" text-3xl md:text-7xl lg:text-[7rem] w-1/2 font-['Founders_Grotesk'] ">Contact Us</h1>

    
  
</div>
</div>

    <div className="flex flex-col md:flex-row justify-center items-center p-10 bg-white border-t-2 -mt-16">
      {/* Contact Information */}
      <div className="flex flex-col items-start p-6 space-y-4">
        <h2 className="text-xl font-bold">Contact Us:</h2>
        <div className="flex items-center space-x-2">
          <span className="text-pink-500 font-bold">PHONE:</span>
          <span>+92-42-3655020-Bloomix</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-pink-500 font-bold">EMAIL:</span>
          <span>info@bloomix.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-pink-500 font-bold">ADDRESS:</span>
          <span>
            Office 4, 2nd Floor, Queens Centre, 33 Queens Road, Lahore, Punjab,
            Pakistan, 54000
          </span>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/4 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border border-gray-300 p-2 rounded-md w-full"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-gray-300 p-2 rounded-md w-full"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white p-2 rounded-md shadow-md hover:bg-pink-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
    </>
  );
};

export default ContactForm;
