const fs = require('fs/promises');

async function readFile(){
    let fileData;

    /*fileData = fs.readFile('data.txt', function(error, fileData){
        console.log("File parsing done");
        console.log(fileData.toString());
        //start another async task

    });*/

    fileData = await fs.readFile('data.txt')
        console.log("File parsing done");
        console.log(fileData.toString());
        console.log("Hi there!");
}

readFile();