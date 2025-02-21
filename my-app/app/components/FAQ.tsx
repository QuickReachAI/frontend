"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  title: string
  icon: React.ReactNode
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: "E-commerce Website Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    items: [
      {
        question: "What are the best platforms for building an e-commerce website?",
        answer:
          "The best platforms for e-commerce websites include Shopify, WooCommerce (for WordPress), Magento, and custom-built solutions using frameworks like Next.js. The choice depends on your specific needs, budget, and technical expertise.",
      },
      {
        question: "How much does it cost to develop an e-commerce website?",
        answer:
          "The cost of developing an e-commerce website can vary widely, ranging from a few hundred dollars for a basic Shopify store to tens of thousands for a custom-built solution. Factors affecting the cost include features, design complexity, and integration requirements.",
      },
      {
        question: "What is the difference between Shopify, WooCommerce, and custom-built websites?",
        answer:
          "Shopify is a hosted, all-in-one solution that's easy to set up but less customizable. WooCommerce is a free WordPress plugin offering more flexibility but requires separate hosting. Custom-built websites offer complete control and customization but are more expensive and time-consuming to develop.",
      },
      {
        question: "Why does my e-commerce website need a chatbot?",
        answer:
          "Chatbots help improve customer satisfaction, reduce abandoned carts, and drive conversions by addressing queries instantly.",
      },
    ],
  },
  {
    title: "AI Chatbot Integration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    items: [
      {
        question: "How can AI chatbots improve customer support?",
        answer:
          "AI chatbots can improve customer support by providing 24/7 availability, instant responses, handling multiple queries simultaneously, and freeing up human agents for more complex issues. They can also learn from interactions to improve over time.",
      },
      {
        question: "How do I integrate a chatbot into my e-commerce store?",
        answer:
          "Integrating a chatbot into your e-commerce store typically involves selecting a chatbot platform, customizing the bot's responses and functionality, and adding a chat widget to your website. Many e-commerce platforms offer chatbot integrations or plugins to simplify this process.",
      },
      {
        question: "What are the benefits of using AI chatbots for lead generation?",
        answer:
          "AI chatbots can help with lead generation by engaging visitors 24/7, qualifying leads through conversations, collecting contact information, and providing personalized product recommendations. They can also nurture leads by following up and answering questions promptly.",
      },
      {
        question: "Why should I use a chatbot for my business?",
        answer:
          "Chatbots can reduce response time, improve customer satisfaction, and increase lead conversion, offering 24/7 support to streamline your operations.",
      },
      {
        question: "How do AI chatbots boost business revenue?",
        answer:
          "By handling customer queries instantly and qualifying leads 40% faster, AI chatbots save time and enhance conversion rates, driving growth.",
      },
      {
        question: "Can your chatbot work for different industries?",
        answer:
          "Yes, our AI chatbots are tailored for e-commerce, healthcare, real estate, education, and more to meet specific industry needs.",
      },
      {
        question: "What features does your chatbot offer for e-commerce?",
        answer:
          "Our chatbot automates customer support, tracks orders, and suggests products to improve the shopping experience and boost sales.",
      },
      {
        question: "How do chatbots save small businesses time and money?",
        answer:
          "Chatbots automate repetitive tasks, handle multiple inquiries simultaneously, and reduce the need for large customer support teams.",
      },
    ],
  },
  {
    title: "Marketing & Growth",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    items: [
      {
        question: "How can an AI chatbot help in e-commerce marketing?",
        answer:
          "AI chatbots can assist in e-commerce marketing by personalizing product recommendations, sending targeted promotions, re-engaging customers through messaging apps, and collecting valuable customer data for marketing insights.",
      },
      {
        question: "What are the best strategies for increasing sales through chatbots?",
        answer:
          "Effective strategies include personalizing product recommendations, offering exclusive discounts through the chatbot, providing detailed product information, assisting with the checkout process, and re-engaging abandoned cart customers.",
      },
      {
        question: "How do I analyze the performance of my chatbot?",
        answer:
          "To analyze chatbot performance, track metrics such as engagement rate, conversion rate, customer satisfaction scores, and resolution time. Many chatbot platforms offer built-in analytics tools to help you monitor these metrics and improve your bot's performance.",
      },
      {
        question: "How can I improve my Meta Ads for better ROI?",
        answer:
          "We analyze your current setup, suggest optimizations, and provide a trial campaign to maximize performance and returns.",
      },
      {
        question: "How soon can I see results from your marketing strategies?",
        answer:
          "Our structured timeline ensures initial results within weeks, with significant growth by the third month.",
      },
    ],
  },
  {
    title: "Pricing & Packages",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    items: [
      {
        question: "What are the different service packages available?",
        answer:
          "We offer various packages tailored to different business needs, including Basic (chatbot integration), Pro (e-commerce development + chatbot), and Enterprise (custom solutions). Please contact our sales team for detailed package information.",
      },
      {
        question: "Do you offer monthly subscriptions or one-time pricing?",
        answer:
          "We offer both monthly subscriptions and one-time pricing options. Monthly subscriptions are available for ongoing services like chatbot maintenance and updates, while one-time pricing is typically used for website development projects.",
      },
      {
        question: "Can I get a free trial for chatbot integration?",
        answer:
          "Yes, we offer a 14-day free trial for our chatbot integration service. This allows you to experience the benefits of AI chatbots and assess how they can improve your customer support and sales processes.",
      },
      {
        question: "What packages do you offer?",
        answer:
          "We offer Basic, Growth, and Premium packages tailored to website creation, Meta Ads, chatbot integration, and full-stack services.",
      },
      {
        question: "Can I try your services before committing?",
        answer:
          "Yes, we offer trial periods for campaigns and services so you can evaluate their impact before scaling.",
      },
    ],
  },
  {
    title: "General",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    items: [
      {
        question: "Can I get a free website audit?",
        answer:
          "Yes, we provide free audits for outdated or poorly optimized websites to identify areas of improvement and increase leads.",
      },
      {
        question: "How does your AI content generation tool work?",
        answer:
          "Our tool generates product descriptions in bulk by processing product names and delivering them in an Excel format for convenience.",
      },
      {
        question: "How can I start with you? What’s the onboarding process?",
        answer:
          "Getting started is easy! Book a free consultation with us. We'll discuss your business needs, create a tailored plan, and start delivering results right away.",
      },
      {
        question: "How can I book a consultation?",
        answer:
          "You can book a consultation by contacting us directly via email or phone. Alternatively, use the 'Get a Free Consultation' button on our website to schedule a session.",
      },
    ],
  },
];

const FAQ: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<number[]>([])
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: number[] }>({})

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setOpenQuestions((prev) => {
      const categoryQuestions = prev[categoryIndex] || []
      const updatedCategoryQuestions = categoryQuestions.includes(questionIndex)
        ? categoryQuestions.filter((i) => i !== questionIndex)
        : [...categoryQuestions, questionIndex]
      return { ...prev, [categoryIndex]: updatedCategoryQuestions }
    })
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <span className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </span>
                {openCategories.includes(categoryIndex) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <AnimatePresence>
                {openCategories.includes(categoryIndex) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 space-y-4"
                  >
                    {category.items.map((item, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
                      >
                        <button
                          className="w-full text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex justify-between items-center"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <span>{item.question}</span>
                          {openQuestions[categoryIndex]?.includes(questionIndex) ? (
                            <ChevronUp className="w-5 h-5 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 flex-shrink-0" />
                          )}
                        </button>
                        <AnimatePresence>
                          {openQuestions[categoryIndex]?.includes(questionIndex) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

