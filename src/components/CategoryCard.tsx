
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const CategoryCard = ({ title, description, icon, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="h-full card-hover">
        <CardHeader className="flex flex-col items-center pb-2">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-purple-light mb-4">
            {icon}
          </div>
          <CardTitle className="text-center text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
