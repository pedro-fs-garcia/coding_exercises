
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/authContext';

function App() {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className='flex-grow container mx-auto p-4'>
                  <AuthProvider>
                    <AppRoutes/>
                  </AuthProvider>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App
