/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image"
import inquirer from "inquirer";
import fs from "fs";

inquirer
.prompt([
   {message: "what is your URL: ",
    name: "URL"}
])
.then((answer) => {
    const url = answer.URL
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("JaeyongPortfolio.png"));
    fs.writeFile( "URL.txt",url, (err) => {
        if(err) throw err
        console.log("file has been saved!")
    })
})
.catch((error) => {
    if(error) throw error
    console.log("well done!")
});

