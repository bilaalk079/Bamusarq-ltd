import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='bg-slate-900 text-xl text-white '>
        <section className='max-w-4xl flex flex-col mx-auto p-4 sm:flex-row sm:justify-between'>
            <address>
            <h2>Bamusarq Solutions ltd.</h2>
            111,Abule Iroko,Itoki Road,Itoki Ogun state<br />
            Email:bamusarq@yahoo.com <br />
            Phone:08170667705, 08033909524.
            </address>
            <br />
            <nav className="hidden md:flex flex-col  text-xl " aria-label="main">
                <a href="#about" className="hover:opacity-90">About</a>
                <a href="#Solutions" className="hover:opacity-90">Solutions</a>
                <a href="#contact" className="hover:opacity-90">Contact us</a>
           </nav>
           <div className='flex flex-col'>
            <p className='text-right'>
              Copyright&copy;
              <span id='year'>2024</span>
            </p>
            <p className="text-right">
              All Rights Reserved
            </p>
           </div>
        </section>
    </footer>
  )
}

export default Footer
