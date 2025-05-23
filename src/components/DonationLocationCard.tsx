
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DonationLocationCardProps {
  title: string;
  address: string;
  distance: string;
  needs: string[];
  phone?: string;
}

const DonationLocationCard = ({ title, address, distance, needs, phone }: DonationLocationCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin size={14} className="mr-1" />
          <span>{address}</span>
          <span className="ml-2 px-2 py-0.5 bg-brand-blue text-xs rounded-full">
            {distance}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription>
          <span className="font-medium text-xs block mb-1">NECESSIDADES:</span>
          <div className="flex flex-wrap gap-1">
            {needs.map((need, index) => (
              <span key={index} className="bg-brand-pink/60 text-xs px-2 py-0.5 rounded-full">
                {need}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Ver Detalhes</Button>
        <Button size="sm" className="bg-brand-blue-bright hover:bg-brand-blue-bright/90">
          Como Chegar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationLocationCard;
