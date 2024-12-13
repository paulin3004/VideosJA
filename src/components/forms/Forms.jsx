//Input effects
import {Fade} from "react-awesome-reveal";
import {JackInTheBox} from "react-awesome-reveal";

//importing icons
import { TiArrowLeftThick } from "react-icons/ti";

//
import { Link } from "react-router-dom";

//Importando API de envio de email
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default  function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [popup, setPopup] = useState(false)
  
  
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
        setPopup(true)
        setEmail('')
        setName('')
        setMessage('')
      }, (err) => {
        alert('ERROR: ', err)
      }
    )
    }
    return(
        <main className='w-full min-h-screen flex justify-center items-center flex-col gap-20 lg:gap-40'>
            <Link to="/">
                <TiArrowLeftThick className=" fixed left-5 top-5 text-white text-5xl cursor-pointer ml-5"/>
            </Link>

        <section className='w-full z-0'>
            <JackInTheBox>
                <h1 className=' text-white text-center z-0 font-game text-5xl space-x-3 font-bold tracking-wider'>SEND YOUR MESSAGE</h1>
            </JackInTheBox>

            <form onSubmit={SendEmail} className='mx-4 mt-32 flex items-center flex-col'>
                
                <div class=" w-full max-w-md min-w-40 mb-3">
                    <Fade>
                        <div >
                            <input
                            id='name'
                            type='text'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Enter your name..."
                            class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow"
                            />
                        </div>
                    </Fade>
                </div>

                <div class="w-full max-w-md min-w-40 mb-3 f">
                    <Fade delay={100}>
                        <div>
                            <input
                            id='email'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Type your email..."
                            class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow"
                             />
                        </div>
                    </Fade>
                </div>

                <div class="w-full max-w-md min-w-40 mb-6">
                    <Fade delay={200}>
                        <div>
                            <textarea
                            id='message'
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            cols="30" rows="10"
                            placeholder="Type your message for me..."
                            className = "w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow">
                            </textarea>
                        </div>
                    </Fade>
                </div>

                <div className=' w-full max-w-md min-w-40'>
                    <Fade delay={300}>
                        <div>
                            <button
                            className='w-full bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow'>SEND</button>
                        </div>
                    </Fade>
                </div>

            </form>
        </section>
        { popup &&
            <div className="absolute bg-violet-700 border border-violet-950 text-white p-2 flex justify-center items-center flex-col gap-5">
                <h1 className="font-mono">Email has been send success</h1>
                <button className="bg-violet-950 p-1 rounded" onClick={()=>{setPopup(false)}}>done</button>
            </div>
        }
        </main>
    )
}