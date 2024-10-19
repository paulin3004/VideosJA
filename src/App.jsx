import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './App.css';

//Importando API de envio de email
import emailjs from '@emailjs/browser';
import { useState } from 'react';

//Importando imagens
import logoback from './img/logoback.png';
import goldisc from './img/cdgoldx110.png';
import bannerpc from './img/oldlogo1.0.png';
import cardfloat from './img/cardback.png';

function App() {

  const [text] = useTypewriter(
    {
      words: ['Editor de vídeos e especialista em motion graphics, com mais de 1 milhão de visualizações em projetos anteriores. Criação stories e vídeos animados envolventes para redes sociais, utilizando técnicas avançadas para maximizar o impacto visual e o engajamento. Transforme suas ideias em conteúdos dinâmicos e envolventes com o poder audiovisual!']
    }
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function SendEmail(e){
    e.preventDefault();

    if (name === '' || email === '' || message === ''){
        alert('Please, fill all field!!!');
        return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };
    
    emailjs.send('service_jwl0xtb', 'template_jl54qze', templateParams, 'B-lFDERW1haV1STil')
    .then(()=> {
      alert("Email has been send success")
      setEmail('')
      setName('')
      setMessage('')
    }, (err) => {
      alert('ERROR: ', err)
    }
  )
  }

  return (
    <div className="App bg-black">

      <section className='min-w-52 w-full h-screen flex justify-start items-center flex-col'>
        <div className='fixed h-screen w-full flex justify-center items-center'>
          <img src={logoback} alt="****" className='blur-md'/>
        </div>

        <section className='w-11/12 pt-6 pb-6 z-0 flex justify-between items-center '>
          <img src={goldisc} alt="" className='animate-spinlow w-16 xl:w-24 sm:w-20 ' />
          <nav className='text-white font-game xl:text-2xl sm:text-xl text-lg'>
            <a href="https://www.behance.net/jota71?fbclid=PAZXh0bgNhZW0CMTEAAaZUyx2N-UDVzhNYWzaGXXZJ_6oB5RN39yJf6SNK10yLVqmwD5uOXizimYA_aem_Nt-Y17lpH-Wv-wnIa3vzQA" rel="noreferrer" target='_blank' className='mr-8 hover:underline hover:animate-pulse decoration-purple-600 underline-offset-4 decoration-2'>HIRE</a>
            <a href="https://www.instagram.com/jota.videos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="rel="noreferrer" target='_blank' className=' hover:underline hover:animate-pulse decoration-purple-600 underline-offset-4 decoration-2'>SEE MORE</a>
          </nav>
        </section>

        <section className='z-0 w-11/12 h-full gap-5 flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-center'>

          <div id='LADO-A' className=' w-full h-full text-center flex justify-center items-center flex-col'>

            <div className='w-full h-full  flex justify-center items-end lg:justify-start'>
              <img src={bannerpc} alt="VideosLOGO" />
            </div>

            <div className='h-full'>
              <p className='text-white font-mono text-justify mt-12 h-full'>
                <span>
                  {text}
                </span>
                <Cursor/>
              </p>
            </div>
          </div>

          <div id='LADO-B' className=' w-full h-full hidden lg:block lg:flex lg:items-center lg:justify-center'>

            <div className='relative h-96 lg:h-fit flex justify-center items-start'>
              <img src={cardfloat} alt="cardART" className='rounded-2xl animate-pinglow z-10  h-auto w-52 lg:w-60 ' />
              <img src={cardfloat} alt="cardART" className='absolute rounded-2xl shadow-sm shadow-purple-700 h-auto w-52  lg:w-60 '/>
            </div>
        
          </div>
        </section>

      </section>

      <main className='w-full min-h-screen flex justify-center items-center flex-col gap-44'>

        <h1 className='text-white text-center z-0 font-game text-5xl space-x-3 font-bold tracking-wider animate-bounce'>SEND YOUR MESSAGE</h1>

        <section className='w-full z-0'>

          <form onSubmit={SendEmail} className='mx-4 flex items-center flex-col'>
            <div class=" w-full max-w-md min-w-40 mb-3">
              <input 
              id='name' 
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow" placeholder="Enter your name..." />
            </div>

            <div class="w-full max-w-md min-w-40 mb-3 f">
              <input 
              id='email' 
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
              class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow" placeholder="Type your email..." />
            </div>

            <div class="w-full max-w-md min-w-40 mb-6">
              <textarea 
              id='message' 
              name="message" 
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              cols="30" rows="10" 
              class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow" placeholder="Type your message for me..."></textarea>
            </div>
            <div className=' w-full max-w-md min-w-40'>
              <button 
              className='w-full bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow'>SEND</button>
            </div>
          </form>

        </section>
      </main>

  </div>
  );
}

export default App;
