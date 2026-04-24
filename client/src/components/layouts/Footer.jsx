export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold">
              E
            </div>
            <span className="font-semibold text-lg">Engyne</span>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            A unified platform to observe, debug, and understand your engineering systems in real-time.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">Features</a></li>
            <li><a href="#" className="hover:text-black">Pricing</a></li>
            <li><a href="#" className="hover:text-black">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">Docs</a></li>
            <li><a href="#" className="hover:text-black">API</a></li>
            <li><a href="#" className="hover:text-black">Support</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Engyne. All rights reserved.
      </div>
    </footer>
  );
}