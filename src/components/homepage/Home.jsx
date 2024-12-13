//importanto components
import BarNavegation from '../navegation/Navegation'
import Content from '../content/Content';

//Importando imagens
import logoback from '../../img/logoback.png';



export default function Home(){
    return(
        <div  className="App bg-black">
            <div className='fixed h-screen w-full flex justify-center items-center'>
                <img src={logoback} alt="****" className='blur-md'/>
            </div>
      
            <section className='min-w-52 w-full h-screen flex justify-start items-center flex-col'>
                <BarNavegation />
                <Content />
            </section>
        </div>
    )
}