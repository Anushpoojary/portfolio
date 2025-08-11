import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay,
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
