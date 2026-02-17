function sendReminders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var message = data[i][1];
    MailApp.sendEmail(email, "Reminder", message);
  }
}