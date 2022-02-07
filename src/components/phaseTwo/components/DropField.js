import React from "react";
import { useDropzone } from "react-dropzone";

export default function DropField(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div
      style={{
        backgroundColor: "#f7faff",
        border: "1px dashed gray",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // display: "flex",
        paddingTop: "30px",
        borderRadius:'10px'
      }}
    >
      <section
        className="container d-flex"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag & drop some files here, or click to select files</p>
        </div>
        <aside>
          <h6 style={{ color: "blue" }} className="ms-2">
            Browse
          </h6>
          <ul>{files}</ul>
        </aside>
      </section>
      <div
        style={{
          opacity: 0.32,
          fontSize: "14px",
          fontWeight: "500",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.36",
          letterSpacing: "normal",
          color: "#a9b0b7a",
        }}
      >
        File type supported : .pptx, .pdf, .docx
      </div>
    </div>
  );
}
