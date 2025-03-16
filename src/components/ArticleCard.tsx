import React, { FC } from "react";

interface ArticleCardProps {
  image?: string;
  title: string;
  description: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-full sm:w-32 h-40 sm:h-32 bg-gray-300 rounded-md overflow-hidden flex-shrink-0 relative">
        {image ? (
          <img src={image} alt={title} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18m-6 5h6"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h2 className="font-bold text-xl sm:text-2xl leading-tight mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
