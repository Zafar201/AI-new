import React, { useState, useEffect } from "react";


import { 
  MdOutlineSmartDisplay as SmartDisplayOutlinedIcon,
  MdOutlinePictureAsPdf as PictureAsPdfOutlinedIcon,
  MdOutlineVideoCameraFront as VideoCameraFrontOutlinedIcon,
  MdOutlineWidgets as WidgetsOutlinedIcon,
  MdOutlineEmojiEvents as EmojiEventsOutlinedIcon,
  MdOutlineLockClock as LockClockOutlinedIcon,
  MdAutoAwesome as InterestsOutlinedIcon,
} from 'react-icons/md';

import Listing from "./Listing";

function ModuleListing({ data, sectionTypeFunction }) {
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

  const [listView, setListView] = useState({});

  const onClickDropDown = (moduleId) => {
    console.log({ moduleId });
    setListView({ [moduleId]: !listView[moduleId] });
  };

  const onClickMiniProject = () => {
    console.log("click");
  };

  console.log({ data });
  return (
    <div>
      {data?.map((item, index) => (
        <div style={{ marginBottom: "20px" }}>
          <div
            className="col-md-12 ai-panel-bg p-3s"
            style={{
              background: "#d5e2fe",
              // background: "#eaffec",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                Module 1
              </span>
              <div
                style={{
                  background: "#53c57f",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {/* <EmojiEventsOutlinedIcon
                  sx={{ fontSize: 18, color: "white" }}
                /> */}
                <LockClockOutlinedIcon
                  size={18} color={"white" }
                />
              </div>
            </div>
            <span
              style={{ fontSize: "13px", fontWeight: "500" }}
              onClick={() => console.log("fd")}
            >
              Module {index + 1}
            </span>
            <br />
            <div
              style={{ fontSize: "10px", fontWeight: "600", marginTop: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
                <div
                  style={{
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%",
                    // border: "1px solid gray",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    cursor: "pointer",
                    background: "#edf3fe",
                  }}
                  onClick={() => onClickDropDown(item.moduleId)}
                >
                  <i class="fas fa-chevron-down" />
                </div>
                <span style={{ marginLeft: "10px" }}>
                  5 Sections &nbsp;&nbsp;|
                </span>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    alignItems: "center",
                  }}
                >
                  <SmartDisplayOutlinedIcon size={24} />
                  &nbsp;15hrs
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    alignItems: "center",
                  }}
                >
                  <PictureAsPdfOutlinedIcon size={24} /> &nbsp;35hrs
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    alignItems: "center",
                  }}
                >
                  <VideoCameraFrontOutlinedIcon size={24} />
                  35hrs
                </div>
              </div>
            </div>
          </div>

          {listView[item?.moduleId] &&
            item?.sections.map((item, index) => (
              <Listing
                listData={item}
                moduleIndex={index}
                index={index}
                sectionTypeFunction={sectionTypeFunction}
              />
            ))}

          {listView[item?.moduleId] && (
            <div style={{ display: "flex", marginLeft: "13px" }}>
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
              <div
                className="col-md-11 ai-panel-bg p-2.5"
                style={{
                  height: "50px",
                  margin: "26px 0 20px 14px",
                  padding: "26px 21px 26px 24px",
                  borderRadius: "12px",
                  backgroundColor: "#6e9efb",
                  opacity: "0.7",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => sectionTypeFunction("MINIPROJECT")}
              >
                <InterestsOutlinedIcon size={18} color={"white" } />
                <div
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  0.5 Mini Project
                </div>

                <div
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginLeft: "45px",
                  }}
                >
                  25:00
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ModuleListing;
