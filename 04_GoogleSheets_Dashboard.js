function createChart() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var chart = sheet.newChart()
      .setChartType(Charts.ChartType.COLUMN)
      .addRange(sheet.getRange("A1:B10"))
      .setPosition(5, 5, 0, 0)
      .build();
  sheet.insertChart(chart);
}