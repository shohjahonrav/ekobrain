import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { AIAnalytics } from './components/AIAnalytics';
import { YoungEcologists } from './components/YoungEcologists';
import { Impact } from './components/Impact';
import { Investors } from './components/Investors';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="project">
          <Problem />
        </section>
        <section id="solution">
          <Solution />
        </section>
        <section id="ai">
          <AIAnalytics />
        </section>
        <section id="youth">
          <YoungEcologists />
        </section>
        <Impact />
        <section id="investors">
          <Investors />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
