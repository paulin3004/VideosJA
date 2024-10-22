import './App.css';

import {JackInTheBox} from "react-awesome-reveal";

//importanto components
import BarNavegation from './components/navegation/Navegation';
import Content from './components/content/Content';
import Forms from './components/forms/Forms';

//Importando imagens
import logoback from './img/logoback.png';


function App() {
  return (
    <div className="App bg-black">

      <div className='fixed h-screen w-full flex justify-center items-center'>
          <img src={logoback} alt="****" className='blur-md'/>
      </div>
      
      <section className='min-w-52 w-full h-screen flex justify-start items-center flex-col'>
        <BarNavegation />
        <Content />
      </section>

      <main className='w-full min-h-screen flex justify-center items-center flex-col gap-44'>
        <JackInTheBox>
          <h1 className=' text-white text-center z-0 font-game text-5xl space-x-3 font-bold tracking-wider animate-bounce'>SEND YOUR MESSAGE</h1>
        </JackInTheBox>
        <Forms/>
      </main>

  </div>
  );
}

export default App;
