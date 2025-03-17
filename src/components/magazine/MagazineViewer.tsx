import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  ZoomIn,
  ZoomOut,
  FileText,
} from "lucide-react";
import { Magazine } from "./MagazineList";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "node_modules/pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

interface MagazineViewerProps {
  magazine: Magazine;
  onClose: () => void;
}

const MagazineViewer: React.FC<MagazineViewerProps> = ({
  magazine,
  onClose,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return numPages ? Math.min(Math.max(1, newPageNumber), numPages) : 1;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const zoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.2, 2.5));
  const zoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));

  const handleDownload = () => {
    window.open(magazine.pdfUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-lg p-4 flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 p-2">
          <h2 className="text-2xl font-bold truncate">{magazine.title}</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={zoomOut}
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={zoomIn}
              disabled={scale >= 2.5}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center overflow-auto">
          {isLoading && (
            <div className="flex items-center justify-center h-64 w-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          )}

          {error ? (
            <div className="flex flex-col items-center justify-center h-64 w-full text-center">
              <FileText className="h-16 w-16 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Error Loading PDF</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <p className="text-sm text-gray-500">
                You can still download the file and view it externally
              </p>
              <Button
                variant="default"
                className="mt-4 bg-red-600 hover:bg-red-700"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-2" /> Download PDF
              </Button>
            </div>
          ) : (
            <Document
              file={magazine.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => {
                console.error("Error loading PDF:", err);
                setIsLoading(false);
                setError(
                  "Could not load the PDF. The file might be inaccessible or in an unsupported format.",
                );
              }}
              loading={<div className="text-center py-10">Loading PDF...</div>}
              className="pdf-document"
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="pdf-page"
                loading={
                  <div className="text-center py-10">Loading page...</div>
                }
                error={
                  <div className="text-center py-10 text-red-500">
                    Error loading this page
                  </div>
                }
              />
            </Document>
          )}

          <div className="flex justify-center items-center space-x-4 mt-4 sticky bottom-0 bg-white p-2 w-full">
            <Button
              variant="outline"
              size="icon"
              onClick={previousPage}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <span className="text-sm">
              Page {pageNumber} of {numPages || "?"}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              disabled={numPages === null || pageNumber >= numPages}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineViewer;
