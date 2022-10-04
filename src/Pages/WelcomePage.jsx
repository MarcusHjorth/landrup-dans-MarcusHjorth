import { Link } from "react-router-dom"
/* import { ReactComponent as DanceIcon } from "../Assets/SVG/DanceIcon.svg" */
import Baggrund from "../Assets/Baggrund.png"
import Icon from "../Assets/Logo.png"
import { motion } from "framer-motion"

const WelcomePage = () => {
    return ( 
        <main className="">
            <figure className="relative h-screen ">
                <img src={Baggrund} alt="" className="h-full w-auto object-cover" />
                <div className="absolute top-[50vh]">
                    <div className="">
                        <img src={Icon} alt="" className="ml-[40px] mr-[10px]"/>
                        <div className="p-[8px] bg-Theme2 shadow-2xl"></div>
                    </div>
                </div>
                <Link to="/Activities">
                    <motion.button className="absolute bottom-[10vh] inset-x-[50px] py-[20px] object-center text-Secondary bg-Primary rounded-[10px] shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 0.5,
                        delay: 1.5
                    }}
                    >
                        Kom i gang
                    </motion.button>
                </Link>
            </figure>
        </main>
     );
}
 
export default WelcomePage;