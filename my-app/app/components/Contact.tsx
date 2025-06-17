"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://quickend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 3000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">We&apos;d love to hear from you. Get in touch with us!</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 dark:bg-gray-700 dark:text-white" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
            {isSent && <p className="text-green-600 text-center mt-4">Email sent successfully!</p>}
            {error && <p className="text-red-600 text-center mt-4">Error sending email. Try again.</p>}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
{/*             <div className="flex items-center space-x-4">
              <Phone size={24} className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">+91 1234567890</span>
            </div> */}
            <div className="flex items-center space-x-4">
              <Mail size={24} className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">quickreach.ai@gmail.com</span>
            </div>
            <div className="pt-4">
              <p className="text-gray-600 dark:text-gray-400">We&apos;re available 24/7 to assist you. Don&apos;t hesitate to reach out!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
