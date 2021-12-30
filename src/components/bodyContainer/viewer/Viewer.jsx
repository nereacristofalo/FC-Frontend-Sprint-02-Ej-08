import React from 'react';
import './Viewer.css';

const Viewer = () => {
  return (
    <iframe
      title="pdf-viewer"
      className="document-previewer"
      src="https://shriresume.com/sample-traditional-light-resume.pdf"
    ></iframe>
  );
};

export default Viewer;
