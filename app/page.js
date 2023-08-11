"use client"
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";


export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
        <div className="mt-200px">
        <Stats />
        </div>
        <Services />
        <Projects />
      </main>
      
      
    </div>
  )
}
