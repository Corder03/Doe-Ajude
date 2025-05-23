
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Box, Gift, Hand, Heart, Home, ShoppingCart, User } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "Roupas e Calçados",
      description: "Doe peças em bom estado para quem precisa.",
      icon: <Box size={32} className="text-brand-purple" />,
      link: "/categories/clothing"
    },
    {
      title: "Produtos de Higiene",
      description: "Itens essenciais para higiene pessoal e limpeza.",
      icon: <Heart size={32} className="text-brand-purple" />,
      link: "/categories/hygiene"
    },
    {
      title: "Alimentos",
      description: "Doe alimentos não-perecíveis para quem precisa.",
      icon: <ShoppingCart size={32} className="text-brand-purple" />,
      link: "/categories/food"
    },
    {
      title: "Voluntariado",
      description: "Ofereça seu tempo e habilidades como voluntário.",
      icon: <Hand size={32} className="text-brand-purple" />,
      link: "/categories/volunteer"
    },
    {
      title: "Brinquedos",
      description: "Doe brinquedos para crianças carentes.",
      icon: <Gift size={32} className="text-brand-purple" />,
      link: "/categories/toys"
    },
    {
      title: "Móveis e Eletrodomésticos",
      description: "Doe móveis e eletrodomésticos em bom estado.",
      icon: <Home size={32} className="text-brand-purple" />,
      link: "/categories/furniture"
    },
    {
      title: "Material Escolar",
      description: "Contribua com a educação doando material escolar.",
      icon: <User size={32} className="text-brand-purple" />,
      link: "/categories/school"
    },
    {
      title: "Outros",
      description: "Diversos tipos de doações que não se encaixam nas categorias anteriores.",
      icon: <Gift size={32} className="text-brand-purple" />,
      link: "/categories/others"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Categorias de Doação</h1>
            <p className="mt-2 text-lg text-gray-600">
              Escolha uma categoria para ver detalhes e necessidades atuais
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
