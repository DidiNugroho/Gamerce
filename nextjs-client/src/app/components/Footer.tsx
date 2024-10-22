import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Gamerce</h2>
          <p className="text-gray-400">
            Gamerce is your ultimate destination for gaming products and gear. We combine the thrill of gaming with the convenience of e-commerce, offering everything from games, accessories, and merchandise to the latest gaming hardware.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Shop</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-400 mb-2">Follow us on social media for the latest updates and offers:</p>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Discord" className="hover:text-indigo-500">
              <FaDiscord size={24} />
            </a>
          </div>

          <p className="text-gray-400">
            <strong>Email:</strong> support@gamerce.com
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Gamerce. All Rights Reserved.
      </div>
    </footer>
  );
}
