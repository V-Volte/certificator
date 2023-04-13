const htmlToImage = require('node-html-to-image');
const fs = require('fs');
const {
    argv,
    exit
} = require('process');

const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));

const inputs = argv[2];

let template = config['template'];
let html = template['html'];
let styles = template['styles'];


let styleString = `<style> ${fs.readFileSync(styles[0])} </style>`;

htmlText = fs.readFileSync(html).toString();

htmlText = htmlText.replace('{{styles}}', styleString);
let JSONObj;
try {
    JSONObj = JSON.parse(fs.readFileSync(inputs));
} catch (err) {
    console.error("Please provide a valid JSON file that matches your template as input.");
    exit(1);
}

let details = [{
    "Name": "John Doe",
    "Section": "A",
}]

let content = {
    ...JSONObj,
    ...details[0]
}

promises = []

for (const detail of details) {
    let content = {
        ...JSONObj,
        ...detail,
    }
    promises.push(htmlToImage({
        html: htmlText,
        content: content,
        output: __dirname + '/' + content['Name'].replace(/\s/g, "") + '.png',
    }));
}

Promise.all(promises).then(() => {
    console.log("Done");
});