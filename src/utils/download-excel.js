// src/utils/download-excel.js
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export function downloadExcelFile(workbook, filename) {
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  const buf = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buf);

  for (let i = 0; i < wbout.length; i++) {
    view[i] = wbout.charCodeAt(i) & 0xff;
  }

  const blob = new Blob([buf], { type: "application/octet-stream" });
  saveAs(blob, filename);
}
