import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Download } from "lucide-react";

interface PageProps {
  pageNumber: number;
  image: string;
  content?: string;
}

const Page: React.FC<PageProps> = ({ pageNumber, image, content }) => {
  return (
    <div className="page bg-white shadow-lg">
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={image}
          alt={`Page ${pageNumber}`}
          className="w-full h-full object-cover"
        />
        {content && (
          <div className="absolute inset-0 p-6 overflow-y-auto bg-black bg-opacity-30 text-white">
            <div className="prose prose-invert max-w-none">{content}</div>
          </div>
        )}
        <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
          {pageNumber}
        </div>
      </div>
    </div>
  );
};

interface MagazineViewerProps {
  title: string;
  coverImage: string;
  pages: {
    image: string;
    content?: string;
  }[];
  onClose: () => void;
}

const MagazineViewer: React.FC<MagazineViewerProps> = ({
  title,
  coverImage,
  pages,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);
  const totalPages = pages.length + 2; // +2 for cover and back

  const nextPage = () => {
    if (bookRef.current && currentPage < totalPages - 2) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF or provide a download link
    alert("Magazine download would start here");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-gray-100 rounded-lg p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="magazine-container h-[70vh] w-full max-w-4xl">
            <HTMLFlipBook
              width={550}
              height={733}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              ref={bookRef}
              onFlip={(e: any) => setCurrentPage(e.data)}
              className="mx-auto"
            >
              {/* Cover */}
              <div className="page cover">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={coverImage}
                    alt="Magazine Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <h1 className="text-4xl font-bold text-white text-center px-4">
                      {title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content Pages */}
              {pages.map((page, index) => (
                <Page
                  key={index}
                  pageNumber={index + 1}
                  image={page.image}
                  content={page.content}
                />
              ))}

              {/* Back Cover */}
              <div className="page back-cover">
                <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p>Thank you for reading</p>
                  </div>
                </div>
              </div>
            </HTMLFlipBook>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={nextPage}
            disabled={currentPage >= totalPages - 2}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-4 text-center">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default MagazineViewer;
