
function Header(){
    return(
        <div className="bg-gray-100 text-gray-900">
            <nav className="bg-gray-800 text-white top-0 left-0 w-full z-50" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between h-12">
                    <div className="md:block items-center">
                        <a href="/home" className="text-xl font-bold text-white flex items-center space-x-4">
                            <img className="object-scale-down h-16" src="/logo.jpg" alt=""/>
                            <span>FilmMash</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/battle"
                                className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Battle</a>
                            <a href="/ratings"
                                className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Ratings</a>
                            <a href="/dashboard"
                                className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                            <a href="/login"><button
                                    className="text-lg font-large hover:bg-gray-200 hover:text-black font-bold py-2 px-4 border hover:border-transparent">
                                    Login
                                </button></a>
                        </div>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu" aria-expanded="false" id="menu-button">
                            <span className="sr-only">Abrir Menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden px-6 h-screen" id="mobile-menu">
                <div className="space-y-1 px-4 pt-2 pb-3 sm:px-3">
                    <a href="/battle"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium menu-link">Battle</a>
                    <hr/>
                    <a href="/ratings"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium menu-link">Ratings</a>
                    <hr/>
                    <a href="/dashboard"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium menu-link">Dashboard</a>
                    <hr />
                    <a href="/login"><button
                            className="text-lg font-large w-full hover:bg-gray-200 hover:text-black font-bold py-2 px-4 border">
                            Login
                        </button></a>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;