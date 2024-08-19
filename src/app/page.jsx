import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <head>
        <link rel="shortcut icon" href="" />
      </head>
      <section className="min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
        <Header />
        <section className="max-w-5xl mx-auto ">
          <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-5 min-h-screen scroll-mt-36">
            <article className="sm:w-1/2">
              <h2 className="font-bold text-4xl max-w-md text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">We Find <span className="text-green-700 dark:text-green-600">Solutions to Problems</span> Majority of People are facing in Health aspects.</h2>
              <p className="max-w-md text-slate-700 mt-4 text-center dark:text-zinc-600 sm:text-left text-xl">
                Check us out and see the difference
              </p>
            </article>
            <Image src="/logo.jpg"
             
              alt="dab"
              width={400}
              height={400}
              priority />
          </section>
          <hr className="bg-black mx-auto dark:bg-white  w-1/2 mb-5"></hr>
          <section id="about" className="max-w-4xl mx-auto p-4 scroll-mt-20 min-h-screen">
            <h1 className="text-4xl text-center p-4 font-bold">About us</h1>
            <h1 className="text-xl text-center text-zinc-600 mb-5 lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur odio ullam voluptatibus at hic, amet voluptate commodi cumque. Blanditiis accusantium eveniet eius animi aliquam corporis a possimus totam corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus repellat neque. Laboriosam quam, repellat nostrum ullam aspernatur ipsam beatae mollitia iure cupiditate dolorem consequuntur voluptate in? Repellat, illo natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit doloremque aliquam unde, dolores excepturi porro possimus deserunt fuga cum veniam error quasi? Quas exercitationem sequi aperiam velit consectetur veniam itaque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis totam dicta consequatur, officia nulla vitae fuga expedita! Laborum expedita dignissimos accusamus debitis eos soluta exercitationem, perferendis eveniet, amet voluptates nostrum!</h1>
          </section>
          <hr className="bg-black mx-auto dark:bg-white  w-1/2"></hr>
          <section id="Solutions" className="p-6 my-12 scroll-mt-20 ">
            <h2 className="font-bold text-4xl text-center sm:mb-6 text-slate-900 dark:text-white">
              Our Solutions
            </h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
              <div  className="w-2/3">
                <li className="flex flex-col items-center border border-solid border-slate-900 dark:border-gray-400 py-6 px-2 rounded-3xl shadow-xl cursor-pointer md:h-96 hover:opacity-50">
                  <Image src="/jttea.jpg"
                    className="rounded-2xl m-3"
                    alt=""
                    width={200}
                    height={200} />
                  <h3 className="text-3xl font-bold text-center">JT Tea</h3>
                  <p className="text-zinc-600 p-5 text-center font-bold">A herbal tea that boosts immunity</p>
                </li>
              </div>
              <div className="w-2/3">
                <li className=" flex flex-col items-center border border-solid border-slate-900 dark:border-gray-400 py-6 px-2 rounded-3xl shadow-xl cursor-pointer md:h-96 hover:opacity-50">
                  <Image src="/affordable.jpg"
                    className="rounded-2xl m-3"
                    alt=""
                    width={200}
                    height={200} />
                  <h3 className="text-3xl font-bold text-center">Affordable Water</h3>
                  <p className="text-zinc-600 text-center font-bold p-5">A well-treated drinking water</p>
                </li>
              </div>
              <div className="w-2/3 h-auto">
                <li className="flex flex-col items-center border border-solid border-slate-900 dark:border-gray-400 py-6 px-2 rounded-3xl shadow-xl cursor-pointer md:h-96 hover:opacity-50">
                  <Image src="/recreation.jpg"
                    className="rounded-2xl m-3"
                    alt=""
                    width={200}
                    height={200} />
                  <h3 className="text-xl font-bold text-center">Bamusarq Recreation and Wellness Center</h3>
                  <p className="text-zinc-600 text-center text-lg font-bold p-5 ">A center that provides Recreational Services</p>
                </li>
              </div>

            </ul>
          </section>
          <hr className="bg-black mx-auto dark:bg-white  w-1/2"></hr>
          <section id="contact" className="p-3 my-12 scroll-mt-20 min-h-screen">
            <h2 className="font-bold text-4xl text-center sm:mb-6 text-slate-900 dark:text-white">
              Contact us
            </h2>
            <form action="" className="max-w-4xl text-xl flex flex-col gap-4 items-start ">
              <label htmlFor="" className="font-bold">Name:</label>
              <input type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                minLength={4}
                maxLength={60}
                required
                className="w-full text-black rounded-2xl p-3 border border-solid h-12 border-slate-900 dark:border-none" />
              <label htmlFor="" className="font-bold">Subject:</label>
              <input type="text"
                placeholder="Your Subject"
                id="subject"
                name="subject"
                minLength={4}
                maxLength={60}
                required
                className="w-full text-black rounded-2xl p-3 border border-solid h-12 border-slate-900 dark:border-none"
              />
              <label htmlFor="" className="font-bold">Message:</label>
              <textarea name="message"
                id="message"
                rows={10}
                cols={30}
                placeholder="Your Message"
                required
                className="w-full text-black rounded-2xl p-3 border border-solid border-slate-900 dark:border-none"
              />
              <button className="w-full rounded-3xl h-12 p-2 bg-green-700 hover:bg-green-800 active:bg-green-900 border border-solid border-slate-900 dark:border-none" >
                Submit
              </button>
            </form>
          </section>
        </section>
        <Footer />
      </section>

    </main>

  );
}
