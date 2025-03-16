interface Advertisement {
  imageUrl: string;
  altText: string;
  link: string;
}

interface RightSectionProps {
  advertisements: Advertisement[];
}

const AdvertisementBanner: React.FC<RightSectionProps> = ({
  advertisements = [],
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-bold text-lg mb-2">Sponsored</h3>
      {advertisements.map((ad, index) => (
        <a
          key={index}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={ad.imageUrl}
              alt={ad.altText}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="p-2 bg-white">
              <p className="text-sm font-medium">{ad.altText}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AdvertisementBanner;
