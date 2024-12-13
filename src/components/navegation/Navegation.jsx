//Import images
import goldisc from './stylecomponents/cdgoldx110.png';

//
import { Link } from 'react-router-dom';
import {Fade} from "react-awesome-reveal";

//importing Icons from the react-icons
import { LuInstagram } from "react-icons/lu";
import { LuMail } from "react-icons/lu";

//Importing manual effects
import '../../App.css'

function BarNavegation() {
    return(
        <>
        <section className='w-11/12 pt-6 pb-6 z-0 flex justify-between items-center '>

            <Fade direction='down'><img src={goldisc} alt="" className='animate-spinlow w-16 xl:w-24 sm:w-20 ' /></Fade>

            <nav className='text-white font-game xl:text-2xl sm:text-xl text-lg flex items-center justify-center gap-8'>
                <Fade direction='down' cascade>
                    <a href="https://www.instagram.com/jota.videos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="rel="noreferrer" target='_blank' className='transition-all duration-500 hover:text-purple-600 hover:animate-pulse hover:bg-white hover:rounded-full flex items-center justify-center  h-10 w-10'>
                        <LuInstagram/>
                    </a>

                    <Link to="/Forms" className='transition-all duration-500 hover:text-purple-600 hover:animate-pulse hover:bg-white hover:rounded-full h-10 w-10 flex items-center justify-center '><LuMail/></Link>
                
                    <a href="https://www.behance.net/jota71?fbclid=PAZXh0bgNhZW0CMTEAAaZUyx2N-UDVzhNYWzaGXXZJ_6oB5RN39yJf6SNK10yLVqmwD5uOXizimYA_aem_Nt-Y17lpH-Wv-wnIa3vzQA" rel="noreferrer" target='_blank' className='un'>Contratar</a>
                </Fade>
            </nav>

        </section>
        </>
    )
}
export default BarNavegation