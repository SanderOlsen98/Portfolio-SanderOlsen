import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Profilepic from "../public/parachute.png";
import Languages from "../public/languages.png";
import Game from "../public/game.png";
import Alpine from "../public/apline.png";
import Blog from "../public/blog.png";
import Homepic from "../public/home.png";
import Merchiee from "../public/merchiee.png";
import Science from "../public/science.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sander Olsen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-11 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" bg-white-300 min-h-screen dark:text-white">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" text-2xl font-Gemunu">Sander's Portfolio</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-teal-500 to-teal-300 text-white px-4 py-2 rounded-md ml-4"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-teal-500 to-teal-300 text-white px-4 py-2 rounded-md ml-4"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium md:text-5xl">
              Sander Lindberg Olsen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front-end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-900 md:text-xl max-w-lg mx-auto dark:text-white">
              Developer working for Posten
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md-h-96 md:w-96">
            <Image src={Profilepic} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl py-2 dark:text-teal-500">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              My name is Sander, I'm 24 years old and live in{" "}
              <span className="text-teal-500">Oslo</span>. Currently working at
              <span className="text-teal-500"> Posten</span> Norge.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              I started my intrest in computers when i was very young, but i
              recently finished a degree at Noroff as a{" "}
              <span className="text-teal-500">front-end developer</span>
            </p>
          </div>
          <div className="py-10">
            <h3 className="text-2xl py-2 dark:text-teal-500">My Skills</h3>
            <p className="dark:text-white text-md py-2 leading-8">
              Below is a list of coding languages{" "}
              <span className=" text-red-400">/</span> softwares I have
              experience in
            </p>
          </div>
          <div className=" lg:flex gap-10">
            <div className="text-center shadow-lg p-5 rounded-xl my-10 flex-1">
              <Image
                src={Languages}
                width={100}
                height={100}
                className="dark:text-white"
              />
              <h3 className="text-teal-500 py-4 font-bold text-lg pt-8 pb-2">
                Programming Languages
              </h3>
              <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              <p className="text-gray-800 py-1 dark:text-white">CSS</p>
              <p className="text-gray-800 py-1 dark:text-white">SASS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">TypeScript</p>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">Powershell</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={Languages} width={100} height={100} />
              <h3 className="text-teal-500 py-4 font-bold text-lg pt-8 pb-2">
                Programming Languages
              </h3>
              <p className="text-gray-800 py-1 dark:text-white">CSS</p>
              <p className="text-gray-800 py-1 dark:text-white">SASS</p>
              <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">TypeScript</p>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">Powershell</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={Languages} width={100} height={100} />
              <h3 className="text-teal-500 py-4 font-bold text-lg pt-8 pb-2">
                Programming Languages
              </h3>
              <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              <p className="text-gray-800 py-1 dark:text-white">CSS</p>
              <p className="text-gray-800 py-1 dark:text-white">SASS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">TypeScript</p>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">Powershell</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl dark:text-teal-500">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              My name is Sander, I'm 24 years old and live in{" "}
              <span className="text-teal-500">Oslo</span>. Currently working at
              <span className="text-teal-500"> Posten</span> Norge.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              I started my intrest in computers when i was very young, but i
              recently finished a degree at Noroff as a{" "}
              <span className="text-teal-500">front-end developer</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Science}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Alpine}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Game}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Homepic}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Merchiee}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
                src={Blog}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
