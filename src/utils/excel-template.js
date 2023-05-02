import * as XLSX from "xlsx";

export function createExcelTemplate() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([
    ["name", "number", "blood_type"],
    ["", "", ""],
  ]);

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  return wb;
}
