function Footer(){
    return(
        <footer className="w-full bg-gray-800 text-white py-8 px-16 items-center">
            <p className="w-full text-center">&copy; {new Date().getFullYear()} FilmMash</p>
        </footer>
    );
}

export default Footer