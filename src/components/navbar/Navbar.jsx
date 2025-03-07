import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="relative bg-gray-800">
        <div className=" px-4 py-3 bg-gray-800 text-white  absolute top-0 left-0 right-0 overflow-y-hidden">

           <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-lg font-bold text-white">
                <img src={logo} alt="logo" className="h-8 w-8 inline-block" />
            </a>
            <div className="flex items-center space-x-4">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
                    Home
                </a>
                <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
                    About
                </a>
                <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
                    Contact
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
                    Login
                </button>
            </div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
