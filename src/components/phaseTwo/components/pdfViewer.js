import React from 'react'
import PDFViewer from 'mgr-pdf-viewer-react'

export default function PdfViewer(props) {
    return (
        <div className="ai-right-panel ms-5">
            <div className="ai-breadcrumb d-flex align-items-center">
                <p className="m-0">Home</p>
                <i className="fas fa-chevron-right m-0 px-1"></i>
                <p className="m-0">{props.courseDetails.sectionType}</p>
            </div>

            <div className="ai-right-panel-content mt-3">
                <h5>{props.courseDetails.sectionType}</h5>
                <div className="d-flex justify-content-between ai-estimated">
                    {/* <p>Estimated time to complete : 20m</p> */}
                </div>            <PDFViewer
                    document={{
                        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                    }}
                />
            </div>
        </div>
    )
}
