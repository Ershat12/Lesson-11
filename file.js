const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "text.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  // перезапись файла
  fs.writeFile(filePath, "5 6 7 8", (err) => {
    if (err) {
      console.log(err);
    }
    //  Считывание файла
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      // Добавьление файла
      fs.appendFile(filePath, "\n9 10 11 12", (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  });
});
