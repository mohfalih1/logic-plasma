import * as XLSX from "xlsx";

export function createExcelTemplate() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([
    ["Full Name", "Phone Number", "Blood Type"],
    ["", "", ""],
  ]);

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  return wb;
}
