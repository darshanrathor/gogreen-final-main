import { useInView } from "react-cool-inview";
import AboutEco from "../components/old/abouteco";
import { motion,AnimatePresence  } from "framer-motion";




const App = () => {
  // const { observe, inView } = useInView({
  //   // Stop observe when the target enters the viewport, so the "inView" only triggered once
  //   unobserveOnEnter: true,
  //   // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
  //   rootMargin: "-100px 0px",
  // });

  const { observe } = useInView({
    // For an element to be considered "seen", we'll say it must be 100% in the viewport
    threshold: 1,
    onEnter: ({ unobserve }) => {
      alert("ffff");
      // Stop observe when the target enters the viewport, so the callback only triggered once
      unobserve();
    },
  });


  return (

    
    <div className="mt-[200px]">
    <AboutEco/>
    <div className="mt-[1000px]" ref={observe}>
    I'm a 🍋
      {/* <div className={inView ? "fade-in" : ""}>I'm a 🍟</div> */}
    </div>
    </div>
   
    
  );
};


export function Appp({ isFullscreen }) {
  return (
    <motion.div
      layout
      style={isFullscreen ?  fullscreen :    {}}
    >
     
    </motion.div>
  )
}




export default  App;