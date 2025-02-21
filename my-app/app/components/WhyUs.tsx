"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react"

const stats = [
  { label: "Websites Launched", value: 22, icon: Zap },
  { label: "AI Chatbots Integrated", value: 15, icon: Users },
  { label: "Leads Generated", value: 100000, icon: TrendingUp },
]

const WhyUs = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [countValues, setCountValues] = useState(stats.map((stat) => ({ ...stat, count: 0 })))

  useEffect(() => {
    const interval = setInterval(() => {
      setCountValues((prevCountValues) => {
        return prevCountValues.map((item) => {
          if (item.count < item.value) {
            return { ...item, count: Math.min(item.count + Math.ceil(item.value / 100), item.value) }
          }
          return item
        })
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section id="why-us" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Updated container class */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose QuickReach AI?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Elevate your digital presence with our unique approach
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {countValues.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon size={48} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <motion.div
                className="text-4xl font-bold mb-2 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                {stat.count.toLocaleString()}
                {stat.label === "Leads Generated" && "+"}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Rapid Project Delivery",
              description:
                "We understand the importance of time-to-market. Our streamlined processes ensure quick turnarounds without compromising on quality.",
            },
            {
              title: "AI-Driven Automation",
              description:
                "Leverage the power of AI to automate repetitive tasks, enhance customer interactions, and gain valuable insights.",
            },
            {
              title: "Data-Backed Strategies",
              description:
                "Every decision we make is informed by data. We use advanced analytics to craft strategies that deliver measurable results.",
            },
            {
              title: "Scalable Performance Solutions",
              description:
                "Our solutions are built to grow with your business, ensuring optimal performance even as your demands increase.",
            },
          ].map((item, index) => (
            <motion.div key={index} style={{ opacity }} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

