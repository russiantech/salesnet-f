import React from 'react';

const ImagesAndVideos = ({ onChange }) => {
  return (
    <div className="tab-pane fade">
      <h2 className="h4 mb-3">Photos / Videos</h2>
      {/* File upload logic goes here */}
      <input type="file" name="images" multiple onChange={onChange} />
    </div>
  );
}

export default ImagesAndVideos;
