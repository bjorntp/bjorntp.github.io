
function Header() {
    return (
        <div className="w-screen justify-center grid grid-cols-3 pt-4 pb-4">
            <nav className="flex flex-row justify-around col-start-2 bg-gray-200/30 backdrop-blur-md rounded-md pt-2 pb-2">
                <a href="/">Home</a>
                <a href="about">About</a>
            </nav> 
        </div>
    );
}

export default Header;