import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  console.log(props.courseDetails);
  return (
    <div className="ai-right-panel ms-5">
      <div className="ai-breadcrumb d-flex align-items-center">
        <p className="m-0">Home</p>
        <i className="fas fa-chevron-right m-0 px-1"></i>
        <p className="m-0">{props.courseDetails.sectionTitle}</p>
      </div>

      <div className="ai-right-panel-content mt-3">
        <h5> {props.courseDetails.sectionTitle}</h5>
        <div className="d-flex justify-content-between ai-estimated">
          {/* <p>Estimated time to complete : 20m</p> */}
        </div>
        <ReactPlayer
          playing={true}
          controls={true}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                onContextMenu: (e) => e.preventDefault(),
              },
            },
          }}
          height="500px"
          width="100%"
          url={props?.courseDetails.sectionContentUrl}
        />
      </div>
    </div>
  );
}
