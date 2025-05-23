
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-purple">Doe<span className="text-brand-purple-dark">&</span>Ajude</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Conectando pessoas com espírito de solidariedade e instituições que precisam de doações.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-purple">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-600 hover:text-brand-purple">
                  Locais de doação
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-brand-purple">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-purple">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-purple">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-purple">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-purple">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Doe&Ajude. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social Media Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
