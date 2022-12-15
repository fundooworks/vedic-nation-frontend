import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import css from "./pdf-viewer.module.scss"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFViewer = ({ url }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  const pdfAction = (
    <div className={css.viewer__actions}>
      <button
        className={[css.viewer.cta, css.viewer.ctaPrev]}
        type="button"
        disabled={pageNumber <= 1}
        onClick={previousPage}
      >
        Previous
      </button>

      <p className={css.viewer__pageNumber}>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </p>

      <button
        className={[css.viewer.cta, css.viewer.ctaNext]}
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  )

  return (
    <div className={css.viewer}>
      <div className={css.viewer__container}>
        {/* {numPages > 1 && pdfAction} */}
        <Document
          loading="Please Wait..."
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page className={css.pdf} pageNumber={pageNumber} height={1600} />
        </Document>
        {numPages > 1 && pdfAction}
      </div>
    </div>
  )
}
export default PDFViewer
