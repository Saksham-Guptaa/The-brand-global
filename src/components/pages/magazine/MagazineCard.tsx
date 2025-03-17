import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MagazineCardProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  date: string;
  onClick: () => void;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  title,
  coverImage,
  description,
  date,
  onClick,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-200">{date}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Button
          onClick={onClick}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Read Magazine
        </Button>
      </CardContent>
    </Card>
  );
};

export default MagazineCard;
