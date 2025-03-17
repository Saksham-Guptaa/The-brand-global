import React, { useState } from "react";
import { Magazine } from "./MagazineList";
import { Button } from "@/components/ui/button";
import { X, Download, ExternalLink } from "lucide-react";

interface PDFViewerProps {
  magazine: Magazine;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ magazine, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    window.open(magazine.pdfUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-lg p-4 flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 p-2">
          <h2 className="text-2xl font-bold truncate">{magazine.title}</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center overflow-auto bg-gray-100 rounded-lg">
          {isLoading && (
            <div className="flex items-center justify-center h-64 w-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          )}

          <div className="w-full h-full flex flex-col items-center justify-center">
            <iframe
              src={`${magazine.pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-[80vh] border-0 rounded-lg"
              onLoad={() => setIsLoading(false)}
              style={{ display: isLoading ? "none" : "block" }}
              title={magazine.title}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
              referrerPolicy="no-referrer"
            />

            {!isLoading && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  If the PDF doesn't display correctly:
                </p>
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => window.open(magazine.pdfUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Open in New Tab
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
