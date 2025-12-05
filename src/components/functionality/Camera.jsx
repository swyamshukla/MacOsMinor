import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]); // Array to store multiple pics

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages(prev => [imageSrc, ...prev]); // Add new pic at the start
  };

  const clearAll = () => setImages([]); // Optional: clear gallery

  return (
    <div className="p-4 flex flex-col items-center gap-4">

      {/* Webcam Screen */}
      <div
        className="rounded-xl shadow-xl border border-gray-500 bg-black"
        style={{
          width: "1000px",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={capture}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Capture
        </button>

        {images.length > 0 && (
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Captured Images Gallery */}
      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`captured-${index}`}
              className="rounded-xl shadow-md border border-gray-500"
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Camera;
