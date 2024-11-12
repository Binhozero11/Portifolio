import {
  Menu,
  FolderCode,
  MessageSquareMore,
  Moon,
  Sun,
  Circle,
  X,
  Download,
  Mail,
  Plus,
  Minus,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import 'animate.css'
import './animations.css'

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isLightMode, setIsLightMode] = useState<boolean>(false)
  const [isTheLanguageEnglish, setIsTheLanguageEnglish] =
    useState<boolean>(false)
  const [isMoreProjectsOpen, setIsMoreProjectsOpen] = useState<boolean>(false)
  const [isNotSmallMobile, setIsNotSmallMobile] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function changeTheLanguage(e: boolean) {
    if (e === false) {
      if (isTheLanguageEnglish === false) return
      setIsTheLanguageEnglish(false)
    }
    if (e === true) {
      if (isTheLanguageEnglish === true) return
      setIsTheLanguageEnglish(true)
    }
  }

  function checkScreenWidth() {
    if (window.innerWidth >= 768) {
      setIsNotSmallMobile(true)
    } else {
      setIsNotSmallMobile(false)
    }
  }

  function toggleMoreProjects() {
    setIsMoreProjectsOpen(!isMoreProjectsOpen)
  }

  return (
    <>
      <header className="sticky top-0 bg-indigo-950 h-14 flex items-center justify-center border-b-[0.5px] border-indigo-50 z-20">
        <div className="w-full px-4 h-full flex items-center justify-between">
          <a href="/">
            <h2 className="text-xl">FABIO.DEV</h2>
          </a>
          <nav className="h-full">
            <section className="flex relative h-full md:hidden">
              <button
                className="overflow-hidden"
                type="button"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="size-8 animate__animated animate__jello" />
                ) : (
                  <Menu className="size-8" />
                )}
              </button>

              {isMenuOpen && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  onClick={toggleMenu}
                  className="fixed inset-0 bg-black/60 flex items-start justify-end z-10 mt-14"
                >
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <div
                    className="z-20 animate__animated animate__fadeInRight"
                    onClick={e => e.stopPropagation()}
                  >
                    <ul className="bg-indigo-950 flex flex-col w-52">
                      <li>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <a
                          className="flex items-center gap-2 p-5 cursor-pointer hover:bg-indigo-900 "
                          href="#projetos"
                          onClick={toggleMenu}
                        >
                          <FolderCode />
                          <h3>Projetos</h3>
                        </a>
                      </li>
                      <li>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <a
                          className="flex items-center gap-2 p-5 cursor-pointer hover:bg-indigo-900 "
                          href="#contatos"
                          onClick={toggleMenu}
                        >
                          <MessageSquareMore />
                          <h3>Contatos</h3>
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center justify-center w-full h-16 gap-2">
                          <button
                            type="button"
                            onClick={() => changeTheLanguage(false)}
                            className={`flex items-center justify-center h-8 w-[40%] transition-all ease-in-out ${isTheLanguageEnglish ? '' : 'bg-indigo-50 rounded-xl text-indigo-950'} hover:opacity-80`}
                          >
                            <span className="text-xs">PT-BR</span>
                          </button>
                          <div className="border-l-2 border-indigo-50 h-8" />
                          <button
                            type="button"
                            onClick={() => changeTheLanguage(true)}
                            className={`flex items-center justify-center h-8 w-[40%] transition-all ease-in-out ${isTheLanguageEnglish ? 'bg-indigo-50 rounded-xl text-indigo-950' : ''} hover:opacity-80`}
                          >
                            <span className="text-xs">EN</span>
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-center gap-2 p-5">
                        <Moon />
                        <button
                          onClick={() => setIsLightMode(!isLightMode)}
                          type="button"
                          className={`flex items-center transition ease-in-out rounded-xl w-[52px] h-[24px] cursor-pointer ${isLightMode ? 'bg-indigo-50 justify-end' : 'bg-indigo-500 justify-start'}`}
                        >
                          <Circle
                            className={`size-4 bg-indigo-950 rounded-[50%] m-1 text-indigo-950 ${isLightMode ? 'shadow-small-active' : 'shadow-small'} shadow-black/30`}
                          />
                        </button>
                        <Sun />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            <section className="hidden md:block h-full">
              <ul className="flex items-center gap-6 h-full">
                <li className="h-full">
                  <a
                    className="flex items-center gap-2 cursor-pointer transition-opacity ease-in-out hover:opacity-80 h-full"
                    href="#projetos"
                  >
                    <FolderCode />
                    <h3>Projetos</h3>
                  </a>
                </li>
                <li className="h-full">
                  <a
                    className="flex items-center gap-2 cursor-pointer transition-opacity ease-in-out hover:opacity-80 h-full"
                    href="#contatos"
                  >
                    <MessageSquareMore />
                    <h3>Contatos</h3>
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-36 h-8 gap-2">
                    <button
                      type="button"
                      onClick={() => changeTheLanguage(false)}
                      className={`flex items-center justify-center h-8 w-[40%] transition-all ease-in-out ${isTheLanguageEnglish ? '' : 'bg-indigo-50 rounded-xl text-indigo-950'} hover:opacity-80`}
                    >
                      <span className="text-xs">PT-BR</span>
                    </button>
                    <div className="border-l-2 border-indigo-50 h-8" />
                    <button
                      type="button"
                      onClick={() => changeTheLanguage(true)}
                      className={`flex items-center justify-center h-8 w-[40%] transition-all ease-in-out ${isTheLanguageEnglish ? 'bg-indigo-50 rounded-xl text-indigo-950' : ''} hover:opacity-80`}
                    >
                      <span className="text-xs">EN</span>
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Moon />
                  <button
                    onClick={() => setIsLightMode(!isLightMode)}
                    type="button"
                    className={`flex items-center transition ease-in-out rounded-xl w-[52px] h-[24px] cursor-pointer ${isLightMode ? 'bg-indigo-50 justify-end' : 'bg-indigo-500 justify-start'}`}
                  >
                    <Circle
                      className={`size-4 bg-indigo-950 rounded-[50%] m-1 text-indigo-950 ${isLightMode ? 'shadow-small-active' : 'shadow-small'} shadow-black/30`}
                    />
                  </button>
                  <Sun />
                </li>
              </ul>
            </section>
          </nav>
        </div>
      </header>

      <main
        onLoad={checkScreenWidth}
        className=" flex flex-col items-center justify-center m-auto overflow-hidden"
      >
        <section
          className={`w-full px-5 my-6 md:flex md:flex-row-reverse md:items-center md:justify-between md:my-20 md:px-12 space-y-6 md:space-y-0 xl:px-[8%] ${isNotSmallMobile ? 'fadeInTop' : ''} `}
        >
          <div className="flex flex-col items-center">
            <div className="relative select-none">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="../public/backProfilePhotoLarge.svg"
                />
                <img
                  src="../public/backProfilePhoto.svg"
                  alt="back-profile-photo"
                  draggable="false"
                />
              </picture>
              <picture className="absolute top-7 lg:top-10 right-6 lg:right-10">
                <source
                  media="(min-width: 1024px)"
                  srcSet="../public/profilePhotoLarge.svg"
                />
                <img
                  src="../public/profilePhoto.svg"
                  alt="profile-photo"
                  draggable="false"
                />
              </picture>
            </div>
          </div>

          <div className="md:flex md:flex-col md:w-[65%] md:max-w-[560px] xl:pl-12">
            <div className="hidden md:block md:w-[85%]">
              <h3 className="text-zinc-400 text-lg lg:text-2xl">
                Sou{' '}
                <span className="text-indigo-100 font-bold">
                  Fábio de Jesus Xavier
                </span>
              </h3>
              <span className="text-zinc-400 text-base lg:text-xl">
                Desenvolvedor Front-End.
              </span>
            </div>
            <p className="text-zinc-400 text-sm sm:text-center md:hidden">
              Sou{' '}
              <span className="text-indigo-100 font-bold">
                Fábio de Jesus Xavier
              </span>
              , formado em{' '}
              <span className="text-indigo-100 font-bold">
                Ensino Técnico de informática 💻 📚 focado em Programação de
                Computadores 👨‍💻
              </span>
              . Sou um{' '}
              <span className="text-indigo-100 font-bold">
                Front-End Developer
              </span>
              , apaixonado por códigos reutilizáveis e automáticos ♻️ ⚙️ e um
              jovem em busca de conhecimento 🌱 ✨.
            </p>
            <p className="text-zinc-400 w-[85%] lg:text-base pt-8 hidden md:block">
              Um jovem formado em{' '}
              <span className="text-indigo-100 font-bold">
                Ensino Técnico de informática 💻 📚 focado em Programação de
                Computadores 👨‍💻.
              </span>{' '}
              Sou um{' '}
              <span className="text-indigo-100 font-bold">
                Front-End Developer
              </span>
              , apaixonado por códigos reutilizáveis e automáticos ♻️ ⚙️ e um
              jovem em busca de conhecimento 🌱 ✨.
            </p>
            <div className="flex justify-between sm:justify-around md:justify-between items-center gap-1 flex-wrap mt-6 md:w-[85%]">
              <a
                type="button"
                href="#portifolio"
                className="flex items-center gap-2 bg-indigo-500 px-4 py-[10px] rounded-xl hover:bg-indigo-600"
              >
                <Download className="size-[18px]" />
                <span className="font-medium">Download CV</span>
              </a>
              <a
                type="button"
                href="#contatos"
                className="flex items-center gap-2 border border-indigo-500 px-4 py-[10px] rounded-xl hover:bg-zinc-800"
              >
                <Mail className="size-[18px]" />
                <span className="font-medium">Fale Comigo</span>
              </a>
            </div>
          </div>
        </section>

        <section className={`bg-indigo-950 flex flex-col items-center gap-6 py-3 w-full md:gap-10 md:py-6 ${isNotSmallMobile ? 'fadeInLeft' : ''}`}>
          <h2 className="text-xl text-indigo-100 font-bold text-center">
            HABILIDADES
          </h2>
          <ul className="flex flex-wrap gap-3 sm:gap-6 items-center justify-center px-5 select-none md:pb-10 ">
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">HTML5</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/html-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/html-icon.svg"
                  alt="html-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">CSS3</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/css-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/css-icon.svg"
                  alt="css-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">JavaScript</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/js-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/js-icon.svg"
                  alt="javaScript-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">Tailwind</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/tailwind-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/tailwind-icon.svg"
                  alt="tailwind-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">Bootstrap</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/public/bootstrap-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/bootstrap-icon.svg"
                  alt="bootstrap-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">React.js</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/reactjs-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/reactjs-icon.svg"
                  alt="reactjs-icon"
                />
              </picture>
            </li>
            <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105">
              <p className="hidden md:block font-bold text-base">Git</p>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="./public/git-icon-md.svg"
                />
                <img
                  className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                  src="./public/git-icon.svg"
                  alt="git-icon"
                />
              </picture>
            </li>
          </ul>
        </section>

        <section
          id="projetos"
          className="mx-5 my-6 flex flex-col items-center gap-6"
        >
          <h2 className="text-xl font-bold">PROJETOS</h2>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-x-6 xl:gap-x-32">
            <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
              <div>
                <img
                  src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
              <div>
                <img
                  src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
              <div>
                <img
                  src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
              <div>
                <img
                  src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                  alt=""
                />
              </div>
            </li>

            {isMoreProjectsOpen && (
              <>
                <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
                  <div>
                    <img
                      src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
                  <div>
                    <img
                      src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="w-[70%] sm:w-[47%] min-w-60 max-w-md rounded-xl overflow-hidden shadow-default cursor-pointer shadow-indigo-50/5 hover:shadow-indigo-50/80 opacity-75 hover:opacity-100 hover:scale-105 transition ease-in-out delay-75 hover:-translate-y-1 duration-75 active:scale-105 active:opacity-100 active:shadow-indigo-50/80">
                  <div>
                    <img
                      src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                      alt=""
                    />
                  </div>
                </li>
              </>
            )}
          </ul>
          <button
            type="button"
            onClick={toggleMoreProjects}
            className="flex items-center gap-2 bg-indigo-500 px-4 py-[10px] rounded-xl hover:bg-indigo-600"
          >
            {isMoreProjectsOpen ? (
              <>
                <Minus className="size-[18px]" />
                <span className="font-medium">Menos Projetos</span>
              </>
            ) : (
              <>
                <Plus className="size-[18px]" />
                <span className="font-medium">Mais Projetos</span>
              </>
            )}
          </button>
        </section>

        <section
          id="contatos"
          className="flex flex-col gap-6 px-3 celulares-menores:px-5 mb-16 w-full"
        >
          <h2 className="text-xl text-indigo-100 font-bold text-center">
            CONTATOS
          </h2>

          <ul className="flex flex-col celulares-menores:pl-6 sm:pl-0 sm:flex-row sm:items-center sm:justify-between gap-6">
            <li className="flex flex-col gap-6">
              <a
                href="mailto:fabiodejesusxavier64@gmail.com"
                className="flex items-center gap-3 celulares-menores:gap-5"
              >
                <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                  <Mail className="size-6 text-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">E-mail</h3>
                  <span className="text-zinc-400">
                    fabiodejesusxavier64@gmail.com
                  </span>
                </div>
              </a>
              <a
                href="tel:+5577999993874"
                className="flex items-center gap-3 celulares-menores:gap-5"
              >
                <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                  <Phone className="size-6 text-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">Telefone</h3>
                  <span className="text-zinc-400">(77) 99999-3874</span>
                </div>
              </a>
            </li>

            <li className="flex flex-col gap-6">
              <a
                href="https://www.linkedin.com/in/Fábio-de-Jesus-Xavier"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-3 celulares-menores:gap-5"
              >
                <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                  <img
                    className="size-6"
                    src="./public/linkedin-icon.svg"
                    alt="linkedIn-icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">LinkedIn</h3>
                  <span className="text-zinc-400">@Fábio-de-Jesus-Xavier</span>
                </div>
              </a>
              <a
                href="https://github.com/Binhozero11"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-3 celulares-menores:gap-5"
              >
                <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                  <img
                    className="size-6 "
                    src="./public/github-icon.svg"
                    alt="Github-icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">GitHub</h3>
                  <span className="text-zinc-400">@Binhozero11</span>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className=" bg-indigo-950 h-16 flex items-center justify-center border-t-[0.5px] border-indigo-50 z-20">
        <span className="text-xs text-center">
          © 2024 Fábio de Jesus Xavier. Todos os direitos reservados.
        </span>
      </footer>
    </>
  )
}
