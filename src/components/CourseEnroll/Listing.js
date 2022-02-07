import React from "react";

import { 
  MdOutlineSmartDisplay as SmartDisplayOutlinedIcon,
  MdOutlinePictureAsPdf as PictureAsPdfOutlinedIcon,
  MdOutlineVideoCameraFront as VideoCameraFrontOutlinedIcon,
} from 'react-icons/md';


function Listing({ listData, moduleIndex, index, sectionTypeFunction }) {
  const styles = {
    videoViewed: {
      background: "#63c57b",
      borderColor: "#63c57b",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px dashed #63c57b",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
    },

    videoNotViewed: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px dashed gray",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
    },
  };

  return (
    <div
      style={{
        padding: "13px",
        display: "flex",
        alignItems: "flex-end",
        paddingTop: "0px",
        paddingBottom: "0px",
      }}
    >
      <div>
        <div
          style={{
            borderLeft: "1px dashed gray",
            height: "30px",
            marginLeft: "10px",
            borderColor: "#63c57b",
          }}
        />
        <div style={styles.videoNotViewed}>
          <i
            class="fas fa fa-check fa-sm"
            style={{ fontSize: "10px", color: "white" }}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => sectionTypeFunction(listData?.sectionType, listData)}
          style={{
            marginLeft: "30px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            color: "gray",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {listData?.sectionType === "VIDEO" ? (
            <SmartDisplayOutlinedIcon size={24} />
          ) : listData?.sectionType === "PDF" ? (
            <PictureAsPdfOutlinedIcon size={24} />
          ) : (
            <VideoCameraFrontOutlinedIcon size={24} />
          )}
          &nbsp; &nbsp;{moduleIndex}.{index}&nbsp;&nbsp;{listData?.sectionTitle}
        </div>
        <div
          style={{
            position: "absolute",
            right: "50px",
            fontSize: "13px",
            fontWeight: "400",
            color: "gray",
            // marginTop: "5px",
          }}
        >
          05.05
        </div>
      </div>
    </div>
  );
}

export default Listing;
