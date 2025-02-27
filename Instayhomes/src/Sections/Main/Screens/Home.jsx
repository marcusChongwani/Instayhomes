import Hero from '../Components/HomePage/Hero';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Logos from "../Components/HomePage/Logos";


export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container, // Ensure useScroll gets a valid ref
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
     <motion.div
       className="pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
    <main ref={container} className="relative h-[200vh] ">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
     </motion.div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress || 0, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] rounded-lg"
    >
      <Hero/>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Logos/>
   
    </motion.div>
  );
};