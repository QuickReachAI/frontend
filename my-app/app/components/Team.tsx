"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import udit from "../assets/udit_kau.jpg";
import aadi from "../assets/aditya.jpg";
import yasir from "../assets/yasir.jpg";

const teamMembers = [
  {
    name: "Udit",
    role: "Co-Founder",
    image: udit,
    quote: "With expertise in website development and AI model building, Udit helps brands achieve technical growth through innovative solutions. He specializes in developing advanced chatbots and eCommerce platforms, ensuring seamless digital experiences. Udit has also collaborated with researchers to drive AI-powered innovations, solving complex challenges and enabling businesses to scale efficiently in a competitive digital landscape.",
  },
  {
    name: "Aditya",
    role: "Co-Founder",
    image: aadi,
    quote: "Aditya is a results-driven marketing specialist with a proven track record of working with 150+ D2C brands, crafting high-impact Meta ad campaigns. He excels in driving growth through innovative strategies, precise brand positioning, and data-driven solutions, helping businesses scale efficiently and maximize their ROI.",
  },
  {
    name: "Yasir",
    role: "Co-Founder",
    image: yasir,
    quote: "With expertise in Meta Ads, Yasir has successfully helped 200+ D2C brands achieve remarkable growth through data-driven advertising strategies. Specializing in creative optimization, precise targeting, and strategic ad placements, Yasir drives impactful results that increase ROI and boost brand presence. With a focus on customer engagement and sustainable success, Yasir ensures that every Meta ad campaign contributes to the long-term growth of D2C brands.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Meet Our Founding Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;{member.quote}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
