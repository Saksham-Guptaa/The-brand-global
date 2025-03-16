interface Advertisement {
  imageUrl: string;
  altText: string;
  link: string;
}

interface RightSectionProps {
  advertisements: Advertisement[];
}

const AdvertisementBanner: React.FC<RightSectionProps> = ({
  advertisements,
}) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {advertisements.map((ad, index) => (
        <a
          key={index}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full h-96 shadow-md border rounded-lg overflow-hidden">
            <img
              src={ad.imageUrl}
              alt={ad.altText}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default AdvertisementBanner;
