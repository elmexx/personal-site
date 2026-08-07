import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Research } from "./sections/Research";
import { Publications } from "./sections/Publications";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
