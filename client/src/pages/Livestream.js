import React from "react";

const Livestream = () => {
  return (
    <div className="Stream">
      <iframe
        src="https://kolbe-live.de/embed/video"
        title="Owncast"
        height="350px"
        width="550px"
        referrerpolicy="origin"
        scrolling="no"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://kolbe-live.de/embed/chat/readwrite"
        title="Chat"
        height="350px"
        width="300px"
        referrerpolicy="origin"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Livestream;
