import {
  Menu,
  FolderCode,
  MessageSquareMore,
  Globe,
  Check,
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

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isLightMode, setIsLightMode] = useState<boolean>(false)
  const [isMoreProjectsOpen, setIsMoreProjectsOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function toggleMoreProjects() {
    setIsMoreProjectsOpen(!isMoreProjectsOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-indigo-950 h-14   flex items-center justify-center border-b-[0.5px] border-indigo-50 z-20">
        <div className="w-full px-4 py-3.5 flex items-center justify-between">
          <a href="/">
            <h2 className="text-xl">FABIO.DEV</h2>
          </a>
          <nav>
            <section className="flex relative md:hidden">
              <button type="button" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="size-8 transition" />
                ) : (
                  <Menu className="size-8" />
                )}
              </button>

              {isMenuOpen && (
                <div className="absolute -right-4 top-11 z-20">
                  <ul className="bg-indigo-950 flex flex-col">
                    <li>
                      <a
                        className="flex items-center gap-2 p-5 cursor-pointer hover:bg-indigo-900 "
                        href="#projetos"
                      >
                        <FolderCode />
                        <h3>Projetos</h3>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-2 p-5 cursor-pointer hover:bg-indigo-900 "
                        href="#contatos"
                      >
                        <MessageSquareMore />
                        <h3>Contatos</h3>
                      </a>
                    </li>
                    <li className="flex items-center gap-2 p-5">
                      <Globe />
                      <div className="flex items-center justify-between border-[0.2px] border-indigo-50 rounded-full w-36 h-8 overflow-hidden">
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1 w-[50%] h-[100%] rounded-l-full bg-indigo-50 text-indigo-950 cursor-pointer"
                        >
                          <Check className="size-4" />
                          <span className="text-xs">PT-BR</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center w-[50%] h-[100%] rounded-r-full cursor-pointer"
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
                        className={`flex items-center transition ease-in-out rounded-xl w-[48px] h-[24px] cursor-pointer ${isLightMode ? 'bg-indigo-100 justify-end' : 'bg-indigo-500 justify-start'}`}
                      >
                        <Circle
                          className={`size-4 bg-white rounded-[50%] m-1 text-white ${isLightMode ? 'shadow-small-active' : 'shadow-small'} shadow-black/30`}
                        />
                      </button>
                      <Sun />
                    </li>
                  </ul>
                </div>
              )}
              {isMenuOpen && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  onClick={toggleMenu}
                  className="fixed inset-0 bg-black/60 flex items-center justify-center z-10 mt-14"
                />
              )}
            </section>
            <div className="hidden md:block ">
              <nav className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <FolderCode />
                  <h3>Projetos</h3>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquareMore />
                  <h3>Contatos</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Globe />
                  <div className="flex items-center justify-between border rounded-full w-36 h-8 overflow-hidden">
                    <div className="flex items-center justify-center gap-1 w-[50%] h-[100%] bg-indigo-50 text-indigo-950">
                      <Check className="size-4" />
                      <span className="text-xs">PT-BR</span>
                    </div>
                    <div className="flex items-center justify-center w-[50%] h-[100%]">
                      <span className="text-xs">EN</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <Moon />
                    <div className="flex items-center bg-indigo-500 rounded-xl w-[48px] h-[24px]">
                      <Circle className="size-4 bg-white rounded-[50%] m-1" />
                    </div>
                    <Sun />
                  </div>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl flex flex-col items-center justify-center m-auto mt-16">
        <section className="mx-5 my-6">
          <div className="flex flex-col items-center gap-6">
            <div className="relative select-none">
              <img
                src="../public/backProfilePhoto.svg"
                alt="back-profile-photo"
              />
              <img
                className="absolute top-7 right-6"
                src="../public/profilePhoto.svg"
                alt="profile-photo"
              />
            </div>
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
          <div className="flex justify-between items-center gap-1 flex-wrap mt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-indigo-500 px-4 py-[10px] rounded-xl hover:bg-indigo-600"
            >
              <Download className="size-[18px]" />
              <span className="font-medium">Download CV</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-indigo-500 px-4 py-[10px] rounded-xl hover:bg-zinc-800"
            >
              <Mail className="size-[18px]" />
              <span className="font-medium">Fale Comigo</span>
            </button>
          </div>
        </section>

        <section className="bg-indigo-950 flex flex-col items-center gap-6 py-3 w-full">
          <h2 className="text-xl font-bold">HABILIDADES</h2>
          <ul className="flex flex-wrap gap-3 sm:gap-6 items-center justify-center px-5 select-none">
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/html-icon.svg"
                alt="html-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/css-icon.svg"
                alt="css-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/js-icon.svg"
                alt="javaScript-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/tailwind-icon.svg"
                alt="tailwind-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/bootstrap-icon.svg"
                alt="bootstrap-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/reactjs-icon.svg"
                alt="reactjs-icon"
              />
            </li>
            <li>
              <img
                className="size-8 celulares-menores:size-9 sm:size-10"
                src="./public/git-icon.svg"
                alt="git-icon"
              />
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
          <h2 className="text-xl font-bold text-center">CONTATOS</h2>

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
