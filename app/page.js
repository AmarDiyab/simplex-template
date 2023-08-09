"use client"
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stat";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
         
        <Stats />
       
        <Services />
        <Projects />
        <Articles />
      </main>
    </div>
  )
}
