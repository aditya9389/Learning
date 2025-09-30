package org.example.Utility;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class ExcelUtility {

    private final String filePath;
    private final XSSFWorkbook workbook;

    public ExcelUtility(String filePath) throws IOException {
        this.filePath = filePath;
        File file = new File(filePath);
        FileInputStream fis = new FileInputStream(file);
        this.workbook = new XSSFWorkbook(fis);
    }

    public Map<String, String> getRowData(String sheetName, int rowNum) {
        Map<String, String> data = new HashMap<>();
        XSSFSheet sheet = workbook.getSheet(sheetName);

        if (sheet == null) {
            return data;
        }

        Row headerRow = sheet.getRow(0);
        Row dataRow = sheet.getRow(rowNum);

        if (headerRow == null || dataRow == null) {
            return data;
        }

        for (int i = 0; i < headerRow.getLastCellNum(); i++) {
            Cell headerCell = headerRow.getCell(i);
            Cell dataCell = dataRow.getCell(i);

            if (headerCell != null && dataCell != null) {
                data.put(headerCell.getStringCellValue(), getCellValueAsString(dataCell));
            }
        }
        return data;
    }

    private String getCellValueAsString(Cell cell) {
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();

            case NUMERIC:
                return DateUtil.isCellDateFormatted(cell)
                        ? cell.getDateCellValue().toString()
                        : String.valueOf(cell.getNumericCellValue());

            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());

            case FORMULA:
                return cell.getCellFormula();

            case BLANK:
            default:
                return "";
        }
    }

    public void close() throws IOException {
        workbook.close();
    }
}
