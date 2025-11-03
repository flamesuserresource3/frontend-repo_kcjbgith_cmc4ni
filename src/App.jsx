import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />

      {/* Main content */}
      <main className="pt-28">
        <Hero />
        <Sections />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
