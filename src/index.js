const htmlToImage = require('node-html-to-image');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));

let template = config['template'];
let html = template['html'];
let styles = template['styles'];

console.log(html);

let styleString = `<style> ${fs.readFileSync(styles[0])} </style>`;

htmlText = fs.readFileSync(html).toString();

htmlText = htmlText.replace('{{styles}}', styleString);

htmlToImage({
    html: htmlText,
    content: {
        Name: "Hello",
        Age: "World",
    },
    output: __dirname + '/outputs.png'
}).then(() => console.log('The image was created successfully!'));

console.log(styles);