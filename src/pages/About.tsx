
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Sobre o Doe&Ajude</h1>
            <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
              Conectando doadores e instituições para construir uma comunidade mais solidária
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
                <p className="text-gray-700 mb-4">
                  O Doe&Ajude nasceu da percepção de que existem muitas pessoas dispostas a ajudar, 
                  mas que nem sempre sabem como ou onde fazer suas doações.
                </p>
                <p className="text-gray-700 mb-4">
                  Nossa missão é facilitar o processo de doação, conectando pessoas com espírito 
                  solidário às instituições que realmente precisam de ajuda, tornando o ato de 
                  doar mais acessível, transparente e eficiente.
                </p>
                <p className="text-gray-700">
                  Acreditamos que pequenas ações podem transformar vidas e comunidades inteiras.
                </p>
              </div>
              
              <div className="bg-brand-purple-light rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Nossos Valores</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-purple text-white font-medium mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Transparência</h4>
                      <p className="text-sm text-gray-600">
                        Informamos com clareza sobre as necessidades e o destino das doações.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-purple text-white font-medium mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Impacto</h4>
                      <p className="text-sm text-gray-600">
                        Buscamos maximizar o efeito positivo de cada doação na vida das pessoas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-purple text-white font-medium mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Acessibilidade</h4>
                      <p className="text-sm text-gray-600">
                        Tornamos o processo de doação simples e acessível a todos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-purple text-white font-medium mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Comunidade</h4>
                      <p className="text-sm text-gray-600">
                        Fortalecemos os laços comunitários através da solidariedade.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Nossa Equipe</h2>
              <p className="mt-2 text-lg text-gray-600">
                Conheça as pessoas por trás do Doe&Ajude
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team members would go here - using placeholder text for now */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-brand-purple-light"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Maria Silva</h3>
                  <p className="text-sm text-brand-purple">Fundadora & CEO</p>
                  <p className="mt-2 text-gray-600">
                    Apaixonada por impacto social e tecnologia para o bem comum.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-brand-purple-light"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">João Santos</h3>
                  <p className="text-sm text-brand-purple">CTO</p>
                  <p className="mt-2 text-gray-600">
                    Especialista em desenvolvimento de soluções tecnológicas para desafios sociais.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-brand-purple-light"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Ana Oliveira</h3>
                  <p className="text-sm text-brand-purple">Relações Institucionais</p>
                  <p className="mt-2 text-gray-600">
                    Responsável pelas parcerias e relacionamento com instituições.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Nosso Impacto</h2>
              <p className="mt-2 text-lg text-gray-600">
                Números que representam nossa contribuição para a comunidade
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-brand-purple-light rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-brand-purple">1200+</p>
                <p className="mt-2 text-gray-700 font-medium">Peças de roupas doadas</p>
              </div>
              
              <div className="bg-brand-pink rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-brand-purple">350+</p>
                <p className="mt-2 text-gray-700 font-medium">Kits de higiene entregues</p>
              </div>
              
              <div className="bg-brand-blue rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-brand-purple">42</p>
                <p className="mt-2 text-gray-700 font-medium">Instituições cadastradas</p>
              </div>
              
              <div className="bg-brand-purple-light rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-brand-purple">850+</p>
                <p className="mt-2 text-gray-700 font-medium">Doadores ativos</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-brand-purple-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Faça parte dessa mudança</h2>
            <p className="mt-4 text-lg text-gray-700">
              Junte-se a nós nessa missão de transformar comunidades através de doações.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="button-primary">
                <Link to="/map">Encontrar Locais</Link>
              </Button>
              <Button asChild className="button-secondary">
                <Link to="/signup">Criar Uma Conta</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
