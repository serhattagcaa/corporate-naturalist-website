import React from "react";
import "../scss/EntryOne.scss";

const EntryOne: React.FC = () => {
  return (
    <>
      <aside className="entryContainer">
        <div className="videoTable">
          <video className="videoTables" autoPlay muted>
            <source
              src="https://videos.pexels.com/video-files/6554654/6554654-uhd_1440_2732_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="videoTables" autoPlay muted>
            <source
              src="https://videos.pexels.com/video-files/6554654/6554654-uhd_1440_2732_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="videoTables" autoPlay muted>
            <source
              src="https://videos.pexels.com/video-files/6554654/6554654-uhd_1440_2732_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="certificateBox">
          <div className="certificateBoxİn"></div>
          <div></div>
        </div>
      </aside>
    </>
  );
};

export default EntryOne;
