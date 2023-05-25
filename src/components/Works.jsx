import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const projectCard = () => {
  
}


const Works = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.dev> 

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" 
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse neque quas nemo rerum placeat, labore mollitia nam amet! Odio, facere inventore numquam totam, ipsa maxime corrupti minus, libero quod quidem delectus voluptatibus? Quam quia ipsam, aut tempora ducimus harum cum ut quod est. Iste, voluptate omnis, fuga ut similique quis hic nemo enim exercitationem soluta excepturi impedit, cumque natus.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) =>(
          <projectCard 
          key={`project-${index}`}
          index={index}
          {...project}/>
          
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");
