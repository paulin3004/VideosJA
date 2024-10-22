import bannerpc from './styelcomponents/oldlogo1.0.png';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {Slide} from "react-awesome-reveal";



function SideA() {
    const [text] = useTypewriter(
        {
          words: ['Editor de vídeos e especialista em motion graphics, com mais de 1 milhão de visualizações em projetos anteriores. Criação stories e vídeos animados envolventes para redes sociais, utilizando técnicas avançadas para maximizar o impacto visual e o engajamento. Transforme suas ideias em conteúdos dinâmicos e envolventes com o poder audiovisual!']
        }
      )
    return(
        <>
        <div id='LADO-A' className=' w-full h-full text-center flex justify-center items-center flex-col'>

            <div className='w-full h-full  flex justify-center items-end lg:justify-start'>
                <Slide triggerOnce><img src={bannerpc} alt="VideosLOGO" /></Slide>
            </div>

            <div className='h-full w-full'>
                <Slide triggerOnce>
                    <p className='text-white font-mono text-justify mt-12 h-full'>
                        {text}
                        <Cursor/>
                    </p>
                </Slide>
            </div>
        </div></>
    )
}
export default SideA