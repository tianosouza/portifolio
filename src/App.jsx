import Footer from './components/footer';
import Header from './components/header';
import { ProfileCard } from './components/profile';
import './Global.css';

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-grow flex items-center justify-center">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
}
