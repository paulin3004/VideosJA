import goldisc from './stylecomponents/cdgoldx110.png';
import {Fade} from "react-awesome-reveal";

function BarNavegation() {
    return(
        <><section className='w-11/12 pt-6 pb-6 z-0 flex justify-between items-center '>

            <Fade direction='down'><img src={goldisc} alt="" className='animate-spinlow w-16 xl:w-24 sm:w-20 ' /></Fade>
            <nav className='text-white font-game xl:text-2xl sm:text-xl text-lg flex'>
                <Fade direction='down' cascade>
                    <a href="https://www.behance.net/jota71?fbclid=PAZXh0bgNhZW0CMTEAAaZUyx2N-UDVzhNYWzaGXXZJ_6oB5RN39yJf6SNK10yLVqmwD5uOXizimYA_aem_Nt-Y17lpH-Wv-wnIa3vzQA" rel="noreferrer" target='_blank' className='mr-8 hover:underline hover:animate-pulse decoration-purple-600 underline-offset-4 decoration-2'>HIRE</a>

                    <a href="https://www.instagram.com/jota.videos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="rel="noreferrer" target='_blank' className=' hover:underline hover:animate-pulse decoration-purple-600 underline-offset-4 decoration-2'>SEE MORE</a>
                </Fade>
            </nav>

        </section></>
    )
}
export default BarNavegation