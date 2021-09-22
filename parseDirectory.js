const path = require("path");
const fs = require("fs");

/* Utility to check through all files in directory of execution to check for 'TODO' and log the paths to flagged files on the console */

function parseDirectory(dir) {

    const directoryContents = fs.readdirSync(dir);
    if (directoryContents.length == 0) {
        console.log(`${dir} does not contain files.`);
    } else {
        directoryContents.forEach(file => {
            const fileAbsolutePath = path.join(dir, file);

            if (fs.statSync(fileAbsolutePath).isDirectory()) {
                return parseDirectory(fileAbsolutePath);
            } else {
                const content = fs.readFileSync(fileAbsolutePath, 'utf8');
                if(!fileAbsolutePath.includes('parseDirectory') && typeof content == "string" && content.includes("TODO")) {
                     console.log(fileAbsolutePath);
                }
            }
        });
    }
    
}

module.exports = parseDirectory;

parseDirectory(process.cwd());
