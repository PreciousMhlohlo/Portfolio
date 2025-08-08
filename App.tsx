import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 md:space-y-28">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;