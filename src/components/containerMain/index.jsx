import Header from '../header'
import Footer from '../footer'

export default function ContainerMain({ children }) {
  return (
    <div className="min-h-screen bg-color-secondary-light dark:bg-color-secondary-dark text-gray-900 dark:text-gray-100 flex flex-col">
      <Header />           
      <main className="container mx-auto flex-grow flex items-center justify-center gap-4">
        {children}
      </main>        
      <Footer />
    </div>
  )
}