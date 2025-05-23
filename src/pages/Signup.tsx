
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup - in a real app this would call an authentication API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Conta criada!",
        description: "Sua conta foi criada com sucesso.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen hero-gradient flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-4 left-4 text-2xl font-bold text-brand-purple">
        Doe<span className="text-brand-purple-dark">&</span>Ajude
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-gray-600">Junte-se à nossa comunidade de doadores</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-gray-500">
              A senha deve ter pelo menos 8 caracteres
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-purple hover:bg-brand-purple-dark"
            disabled={isLoading}
          >
            {isLoading ? "Criando conta..." : "Criar conta"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-brand-purple hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
