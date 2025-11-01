import { MessageCircle } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between p-4">
      {/* Logo */}
      <div className="flex space-x-2">
        <MessageCircle className="text-green-500" />
        <p className="text-xl font-bold text-green-500">Whatsapp</p>
      </div>

      {/* Links */}
      <div className="flex space-x-8">
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Join Our Team</p>
      </div>

      {/* Authentication */}
      <div className="flex space-x-2">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
export default Navbar;
