const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    © 2023 Your Company. All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

