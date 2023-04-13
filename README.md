# certificator
`certificator` is a tool that can be used to automatically generate certificates (merit/participation/etc ) for any event. 

## Usage
`certificator` is still in development, but you can use it to generate certificates for any event.
Create your own template with a HTML file and a corresponding CSS file. Then edit the `config.json` file to add your template and the corresponding files. 

First, run `npm install` to install the dependencies. 

Then, edit the `inputs.json` file to add the details of the event.

Participant details must currently be hardcoded, but this will be changed in the future.

`cd` to `/src/` and run `node certificator ../inputs.json` and it will generate the certificates for you.