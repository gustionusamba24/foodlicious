import Popular from "../components/Popular";
import Vegetable from "../components/Vegetable";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vegetable />
      <Popular />
    </motion.div>
  );
};

export default Home;
