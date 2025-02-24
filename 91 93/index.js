// You have to write Node.js program to clear clutter inside of a directory and organize the content of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6 .cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// zip/harry.zip, zip/Rohan.zip
// pdf/this.pdf, pdf/harry.pdf

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\Dell\\Desktop\\WebDev\\91 93"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log('running for', item);

    let ext = item.split(".")[item.split(".").length - 1]

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(basepath, ext))) {
            // MOve the file to this directory if it not a JS or JSON File
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }

        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))

        }
    }
}