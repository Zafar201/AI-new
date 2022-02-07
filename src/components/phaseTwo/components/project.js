import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload as FileDownloadOutlinedIcon } from "react-icons/md"
import DropField from "./DropField";

export default function Project() {
  const [numberMini, setNumberMini] = useState(0);

  useEffect(() => {
    clickMiniPro(numberMini);
  }, []);

  const clickMiniPro = (numberMini) => {
    let displayArray;

    if (numberMini === 0) {
      displayArray = (
        <div className="card border-0">
          <div className="ai-project-card-header d-flex align-items-center justify-content-end p-4">
            <div
              className=""
              style={{ cursor: "pointer", marginRight: "20px" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "1.43",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="m-0"
              >
                <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
                Download Resources
              </p>
            </div>

            <div className="" style={{ cursor: "pointer" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "1.43",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="m-0"
              >
                <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
                Download Breif
              </p>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h3>Instructions</h3>
                <div className="ai-instruction">
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">01</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">02</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">03</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">04</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">05</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">06</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">01</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">02</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">03</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">04</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">05</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">06</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">01</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">02</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">03</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">04</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">05</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                  <div className="d-flex ai-instruction-points mt-2">
                    <p className="m-0 pe-2">06</p>
                    <p className="m-0">
                      Go through the Project Brief which you can also download
                      the brief from the link below
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ai-frequently p-3">
                <h6>Frequently Asked questions</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </div>
            <div className="" style={{ textAlign: "right", marginTop: "10px" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setNumberMini(1)}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      );
    } else if (numberMini === 1) {
      displayArray = (
        <div className="card-body ai-miniproject-canvas px-0">
          <div className="p-3 d-flex justify-content-between">
            <div>
              <h6 style={{ fontWeight: "bold" }}>Upload Project Files</h6>
            </div>
          </div>
          <div className="px-3 pb-3">
            <DropField></DropField>
            <div className="my-3">
              <span>Status: Pending Upload</span>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div
            className=""
            style={{ position: "absolute", bottom: "2%", right: "3%" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setNumberMini(2)}
            >
              Save & Next
            </button>
          </div>
        </div>
      );
    } else if (numberMini === 2) {
      displayArray = (
        <div className="card-body ai-miniproject-canvas px-0">
          <div className="p-3 d-flex justify-content-between">
            <div>
              <h6 style={{ fontWeight: "bold" }}>Upload Insights</h6>
            </div>
          </div>

          <div className="px-3 pb-3">
            <DropField></DropField>
            <div className="my-3">
              <span>Status: Pending Upload</span>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div
            className=""
            style={{ position: "absolute", bottom: "2%", right: "3%" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setNumberMini(2)}
            >
              Save & Next
            </button>
          </div>
        </div>
      );
    }

    return displayArray;
  };

  return (
    <div className="ai-right-panel ms-5">
      <div className="d-flex align-items-center">
        <div
          className={`d-flex align-items-center justify-content-center ai-project-breadcrub-${
            numberMini === 0 ? "active" : "complete"
          } `}
        >
          <p className="m-0">A</p>
        </div>
        <div className="ai-project-line"> </div>
        <div
          className={`d-flex align-items-center justify-content-center ai-project-breadcrub-${
            numberMini === 1
              ? "active"
              : numberMini === 2
              ? "complete"
              : "current"
          }`}
        >
          <p className="m-0">B</p>
        </div>
        <div className="ai-project-line"> </div>

        <div
          className={`d-flex align-items-center justify-content-center ai-project-breadcrub-${
            numberMini === 2 ? "active" : "current"
          }`}
        >
          <p className="m-0">C</p>
        </div>
      </div>

      <div className="card border-0 mt-10">{clickMiniPro(numberMini)}</div>
    </div>
  );
}
