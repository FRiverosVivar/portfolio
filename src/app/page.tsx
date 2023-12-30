"use client";
import AboutMe from "@/components/AboutMe/AboutMe";
import Background from "@/components/Background/Background";
import Footer from "@/components/Footer/Footer";
import MyExperiences from "@/components/MyExperiences/MyExperiences";
import MyProjects from "@/components/MyProjects/MyProjects";
import TopSection from "@/components/TopSection/TopSection";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-36">
      <motion.div
        key="top"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.2 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <TopSection />
        </AnimatePresence>
      </motion.div>
      <motion.div
        key="aboutme"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.2 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <AboutMe />
        </AnimatePresence>
      </motion.div>
      <MyExperiences />
      <MyProjects />
      <motion.div
        key="footer"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.2 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <Footer />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
