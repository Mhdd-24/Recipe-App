import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import {motion} from 'framer-motion'

function Home() {
  return (
  <motion.div
   animate={{opacity:1}}
   initial={{opacity:0}}
   exit={{opacity:0}}
   transition={{duration:0.5}}
   > 
      {/* <Categories /> */}
     <Veggie />
     <Popular />
  </motion.div>
  )
}




export default Home;
