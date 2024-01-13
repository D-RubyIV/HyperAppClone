import React, { useEffect, useRef, useState } from "react";

const DragFilesComponent = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("Files", file));
    console.log(formData.getAll("Files"));
  };

  useEffect(() => {
    console.log("Hello");
  }, [files]);

  return (
    <div>
      {files ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
          <div className="flex justify-between">
            <button className="px-5 py-2" onClick={() => setFiles(null)}>Cancel</button>
            <button className="px-5 py-2" onClick={handleUpload}>Upload</button>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center h-screen"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div>
            <h1>Drag and Drop Files to Upload</h1>
          </div>
          <div>
            <h1>Or</h1>
          </div>
          <div>
            <input
              type="file"
              multiple
              onChange={(event) => setFiles(event.target.files)}
              hidden
              ref={inputRef}
            />
          </div>
          <div>
            <button onClick={() => inputRef.current.click()}>Browse</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragFilesComponent;
