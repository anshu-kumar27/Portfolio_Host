import React, { useState, useEffect } from "react";
import axios from "axios";
import Links from "./Links";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isDark, setIsDark] = useState(false); // moved here

  // Detect theme using MutationObserver
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.getAttribute("data-theme");
      setIsDark(dark === "night")
    //   console.log()
    };

    checkTheme(); // initial

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "https://formspree.io/f/yourFormID",
        formData
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("There was an issue. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto mt-10 gap-8 mb-6 pt-2 p-10">
            {/* Social Icons */}
    <div className="lg:w-1/2 w-full">
            {/* contact lists icons */}
    <div className="">
    <h3 className="text-3xl font-bold text-left mb-6">💭 Get In Touch</h3>

    {/* Location / Email / LinkedIn */}
    <ul className="text-left space-y-2 pt-4">
      <li className="">📍 New Delhi, India</li>
      <li className="pt-2">📧 anshukumar3552@gmail.com</li>
    </ul>
    <Links 
    isDark = {isDark}
    />
    </div>
    </div>
  
    <div className="lg:w-1/2 w-full">
      <h2 className="text-3xl font-bold text-left mb-6">📬 Get In Touch </h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-white/10 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-white/10 rounded-md"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-white/10 rounded-md"
            rows="5"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`transition-all duration-300 ease-in-out px-6 py-2 rounded-md 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-black"
                  : `hover:bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 shadow-md shadow-emerald-300 ${
                      isDark ? "text-white" : "text-black"
                    }`
              }
            `}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-center font-semibold ${
            status.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>

    </div>
  );
}

export default Contact;
