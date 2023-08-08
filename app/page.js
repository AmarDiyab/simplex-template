"use client"
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Articles from "./components/Articles";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="mt-2">
        <Header />
      </header>
      <main>
        <Main />
        {/* <Stats /> */}
        <div className="mt-[100px]">
        <Services />
        </div>
        <Projects />
        <Articles />
      </main>
    </div>
  )
}
