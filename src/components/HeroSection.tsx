
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Faça a diferença na sua comunidade
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Conectamos pessoas que querem doar com quem realmente precisa. Encontre locais de doação próximos a você para roupas, alimentos, produtos de higiene e muito mais.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="button-primary">
                <Link to="/map">Encontrar Locais</Link>
              </Button>
              <Button asChild className="button-secondary">
                <Link to="/login">Fazer Uma Doação</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 animate-pulse-slow">
            <div className="absolute inset-0 bg-white/80 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 p-6 flex flex-col">
                <p className="text-2xl font-bold mb-2 text-brand-purple">Impacto Real</p>
                <p className="text-gray-600 mb-4">Nos últimos meses:</p>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-brand-purple">1200+</p>
                    <p className="text-sm text-gray-600">Peças de roupas doadas</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-brand-purple">350+</p>
                    <p className="text-sm text-gray-600">Kits de higiene entregues</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-brand-purple">42</p>
                    <p className="text-sm text-gray-600">Instituições cadastradas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
