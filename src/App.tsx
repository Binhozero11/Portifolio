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
  Phone,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import './animations.css'

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isLightMode, setIsLightMode] = useState<boolean>(false)
  const [isTheLanguageEnglish, setIsTheLanguageEnglish] =
    useState<boolean>(false)
  const [isNotSmallMobile, setIsNotSmallMobile] = useState<boolean>(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false)
  const [elementsWithDataAnime, setElementsWithDataAnime] = useState<
    HTMLElement[]
  >([])

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function changeTheLanguage(e: boolean) {
    if (isTheLanguageEnglish !== e) {
      setIsTheLanguageEnglish(e)
    }
  }

  function checkScreenWidth() {
    if (window.innerWidth >= 768) {
      setIsNotSmallMobile(true)
    } else {
      setIsNotSmallMobile(false)
    }
  }

  function modalDownload() {
    setIsDownloadModalOpen(!isDownloadModalOpen)
  }

  useEffect(() => {
    const itens = document.querySelectorAll('[data-anime]')
    const filteredItems = Array.from(itens).filter(
      item => item instanceof HTMLElement
    ) as HTMLElement[]

    setElementsWithDataAnime(filteredItems)
  }, [])

  const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.8

    // biome-ignore lint/complexity/noForEach: <explanation>
    elementsWithDataAnime.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY

      if (windowTop > elementTop) {
        element.classList.add('animate')
      } else {
        element.classList.remove('animate')
      }
    })
  }

  window.addEventListener('scroll', animeScroll)

  return (
    <>
      <header className="sticky top-0 bg-indigo-950 h-14 flex items-center justify-center border-b-[0.5px] border-indigo-50 z-20">
        <div className="w-full px-4 h-full flex items-center justify-between lg:px-6">
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
                  <X className="size-8 opacityAnimation" />
                ) : (
                  <Menu className="size-8 opacityAnimation" />
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
                    className="z-20 fadeInRight"
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
        className="flex flex-col items-center justify-center m-auto gap-20 md:gap-28 overflow-hidden"
      >
        <section
          className={`w-full px-5 mt-16 md:mt-20 md:px-12 xl:px-[8%] ${isNotSmallMobile ? 'fadeInTop' : ''} `}
        >
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-12 md:gap-0">
            <div className="flex flex-col items-center">
              <div className="relative select-none">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="../public/images/backProfilePhotoLarge.svg"
                  />
                  <img
                    src="../public/images/backProfilePhoto.svg"
                    alt="back-profile-photo"
                    draggable="false"
                  />
                </picture>
                <picture className="absolute top-7 lg:top-10 right-6 lg:right-10">
                  <source
                    media="(min-width: 1024px)"
                    srcSet="../public/images/profilePhotoLarge.svg"
                  />
                  <img
                    src="../public/images/profilePhoto.svg"
                    alt="profile-photo"
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:w-[65%] md:max-w-[560px] xl:pl-12">
              <div className="hidden md:block">
                <div className="md:w-[85%]">
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
                <p className="text-zinc-400 w-[85%] lg:text-base pt-8">
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
              </div>

              <div className="md:hidden">
                <p className="text-zinc-400 text-sm sm:text-center">
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
              </div>

              <div className="flex justify-between sm:justify-around md:justify-between items-center gap-1 flex-wrap md:w-[85%]">
                <button
                  type="button"
                  onClick={modalDownload}
                  className="flex items-center gap-2 bg-indigo-500 px-4 py-[10px] rounded-xl hover:bg-indigo-600"
                >
                  <Download className="size-[18px]" />
                  <span className="font-medium">Download CV</span>
                </button>

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
          </div>
        </section>

        {isDownloadModalOpen && (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            onClick={modalDownload}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center mt-14"
          >
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-6 sm:gap-8 w-[85%] max-w-sm md:max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col justify-between gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg lg:text-xl">Concluir Download?</h3>
                  <button type="button" onClick={modalDownload}>
                    <X className="size-6 lg:size-7" />
                  </button>
                </div>
                <p className="text-xs md:text-sm text-zinc-400">
                  Confirme se realmente deseja baixar o currículo.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={modalDownload}
                  className="flex justify-center border border-indigo-500 px-4 py-[10px] rounded-xl hover:bg-zinc-80 w-32 md:w-36"
                >
                  <span className="font-medium">Cancelar</span>
                </button>

                <button
                  type="button"
                  
                  className="flex items-center justify-center gap-2 bg-indigo-500 px-4 py-[10px] rounded-xl hover:bg-indigo-600 w-32 md:w-36"
                >
                  <Download className="size-[18px]" />
                  <span className="font-medium">Download</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <section
          className={`bg-indigo-950 py-4 w-full md:py-8 ${isNotSmallMobile ? 'fadeInLeft' : ''}`}
        >
          <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
            <h2 className="text-xl lg:text-2xl text-indigo-100 font-bold text-center">
              HABILIDADES
            </h2>
            <ul className="flex flex-wrap gap-3 sm:gap-6 items-center justify-center px-4 select-none md:pb-10 ">
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">HTML5</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/html-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-10 sm:size-10 md:size-12"
                    src="./public/icons/html-icon.svg"
                    alt="html-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">CSS3</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/css-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/css-icon.svg"
                    alt="css-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">
                  JavaScript
                </p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/js-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/js-icon.svg"
                    alt="javaScript-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">Tailwind</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/tailwind-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/tailwind-icon.svg"
                    alt="tailwind-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">Bootstrap</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/public/icons/bootstrap-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/bootstrap-icon.svg"
                    alt="bootstrap-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">React.js</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/reactjs-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/reactjs-icon.svg"
                    alt="reactjs-icon"
                  />
                </picture>
              </li>
              <li className="md:w-28 lg:w-32 md:flex md:flex-col md:items-center md:gap-5 md:py-5 md:bg-zinc-950 md:rounded-tl-xl md:shadow-default md:shadow-indigo-500/50 hover:shadow-none hover:scale-105 cursor-pointer">
                <p className="hidden md:block font-bold text-base">Git</p>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="./public/icons/git-icon-md.svg"
                  />
                  <img
                    className="size-8 celulares-menores:size-9 sm:size-10 md:size-12"
                    src="./public/icons/git-icon.svg"
                    alt="git-icon"
                  />
                </picture>
              </li>
            </ul>
          </div>
        </section>

        <section id="projetos" className="mx-5 min-md:h-screen">
          <div
            className="flex flex-col items-center gap-6 md:gap-10 lg:gap-14"
            data-anime="left"
          >
            <h2 className="text-xl lg:text-2xl font-bold">PROJETOS</h2>
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-x-6 xl:gap-x-9">
              <li className="w-[80%] max-w-96 sm:w-[48%] min-w-60 sm:max-w-md rounded-2xl overflow-hidden shadow-projects cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition ease-in-out active:scale-105 active:opacity-100">
                <div>
                  <img
                    src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className="w-[80%] max-w-96 sm:w-[48%] min-w-60 sm:max-w-md rounded-2xl overflow-hidden shadow-projects cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition ease-in-out active:scale-105 active:opacity-100">
                <div>
                  <img
                    src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className="w-[80%] max-w-96 sm:w-[48%] min-w-60 sm:max-w-md rounded-2xl overflow-hidden shadow-projects cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition ease-in-out active:scale-105 active:opacity-100">
                <div>
                  <img
                    src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className="w-[80%] max-w-96 sm:w-[48%] min-w-60 sm:max-w-md rounded-2xl overflow-hidden shadow-projects cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition ease-in-out active:scale-105 active:opacity-100">
                <div>
                  <img
                    src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li className="w-[80%] max-w-96 sm:w-[48%] min-w-60 sm:max-w-md rounded-2xl overflow-hidden shadow-projects cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition ease-in-out active:scale-105 active:opacity-100">
                <div>
                  <img
                    src="https://live.staticflickr.com/8530/8559713311_2d823ff3ed_b.jpg"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contatos" className="px-5 mb-16 md:mb-60 w-full">
          <div className="flex flex-col gap-8 md:gap-16" data-anime="right">
            <h2 className="text-xl lg:text-2xl text-indigo-100 font-bold text-center">
              CONTATOS
            </h2>
            <ul className="flex flex-col celulares-menores:pl-6 sm:pl-0 sm:flex-row sm:items-center sm:justify-between gap-6 md:max-w-3xl md:m-auto md:gap-32 xl:gap-14 xl:max-w-none">
              <li className="flex flex-col gap-6 xl:flex-row xl:gap-14">
                <a
                  href="mailto:fabiodejesusxavier64@gmail.com"
                  className="flex items-center gap-3 celulares-menores:gap-5 hover:scale-105 transition ease-in-out delay-75 active:scale-105"
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
                  className="flex items-center gap-3 celulares-menores:gap-5 hover:scale-105 transition ease-in-out delay-75 active:scale-105"
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
              <li className="flex flex-col gap-6 xl:flex-row xl:gap-14">
                <a
                  href="https://www.linkedin.com/in/Fábio-de-Jesus-Xavier"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-3 celulares-menores:gap-5 hover:scale-105 transition ease-in-out delay-75 active:scale-105"
                >
                  <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                    <img
                      className="size-6"
                      src="./public/icons/linkedin-icon.svg"
                      alt="linkedIn-icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">LinkedIn</h3>
                    <span className="text-zinc-400">
                      @Fábio-de-Jesus-Xavier
                    </span>
                  </div>
                </a>
                <a
                  href="https://github.com/Binhozero11"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-3 celulares-menores:gap-5 hover:scale-105 transition ease-in-out delay-75 active:scale-105"
                >
                  <div className="bg-zinc-800 size-16 rounded-full flex items-center justify-center">
                    <img
                      className="size-6 "
                      src="./public/icons/github-icon.svg"
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
          </div>
        </section>
      </main>

      <footer className=" bg-indigo-950 h-16 flex items-center justify-center border-t-[0.5px] border-indigo-50 z-20">
        <span className="text-xs md:text-sm text-center">
          © 2024 Fábio de Jesus Xavier. Todos os direitos reservados.
        </span>
      </footer>
    </>
  )
}
