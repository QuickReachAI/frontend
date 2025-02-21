"use client"

import { motion } from "framer-motion"
import { Globe, Megaphone, MessageSquare } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description:
      "Custom-built websites using Next.js, React, and Shopify, optimized for e-commerce, SaaS, and corporate businesses.",
    icon: Globe,
  },
  {
    title: "Brand Marketing",
    description:
      "Data-driven SEO strategies, Google Ads, AI-powered social media campaigns, and content marketing automation.",
    icon: Megaphone,
  },
  {
    title: "AI Chatbot Integration",
    description:
      "Personalized AI chatbots for websites and WhatsApp, focusing on automated customer support and lead generation.",
    icon: MessageSquare,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon size={48} className="text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

