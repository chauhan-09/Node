const fs = require('fs');

fs.writeFile('greeting.txt',"Hello bro.....\n",()=>{
    console.log('file is created');
})

fs.readFile('./greeting.txt' , () => {
    console.log('file reading..')
});


//appendFile --> creates a new file if greeting.txt is not present then appends the data at the last of the file.
//If file is present already it justs append the data in that file
//writeFile --> overwrites any previous data in the file 