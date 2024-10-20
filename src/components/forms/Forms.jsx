//Importando API de envio de email
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Forms() {
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
    return(
        <>
        <section className='w-full z-0'>

            <form onSubmit={SendEmail} className='mx-4 flex items-center flex-col'>
                
                <div class=" w-full max-w-md min-w-40 mb-3">
                    <input 
                    id='name' 
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your name..." 
                    class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow" 
                    />
                </div>

                <div class="w-full max-w-md min-w-40 mb-3 f">
                    <input 
                    id='email' 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Type your email..."
                    class="w-full  bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow" 
                     />
                </div>

                <div class="w-full max-w-md min-w-40 mb-6">
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

                <div className=' w-full max-w-md min-w-40'>
                    <button 
                    className='w-full bg-violet-950 placeholder:text-slate-200 text-white text-sm border border-violet-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 hover:border-violet-300 shadow-sm focus:shadow'>SEND</button>
                </div>

            </form>

        </section></>
    )
}
export default Forms