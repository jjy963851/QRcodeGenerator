const fs = require("fs");

//fs.writeFile("message.txt", "hello This is Jaeyong", (error) => {
   // if(error) throw error;
   // console.log("file has been saved!")
//});


fs.readFile("./message.txt", "utf-8", (err, data) => {
    if(err) throw err
    console.log(data)
});