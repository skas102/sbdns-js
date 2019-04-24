# sbdns-js
Simple PowerDNS Javascript Scripts

The goal of this project is to have several scripts that call the PowerDNS API to send or 
retrieve information.

Currently only one script is provided: list-zones

## Requirements
* Node >= 11.6.0 is suggested
* yarn >= 1.15.2 is suggested

## Setup
To install the dependencies perform the following command:
`yarn install`.

## Add new script command to yarn
To add a new command to yarn you need to edit the package.json file in the root directory of the project:

Add a new script to the `scripts` section.

Example:
```json
"scripts": {
    "build": "babel src -d built",
    "list-zones": "node built/scripts/list-zones.js"
  },
```

## Run project
To be able to successfully run the project, you need to perform the following commands:
```bash
export POWERDNS_HOST=<Host> 
export POWERDNS_PORT=<Port>
export POWERDNS_API_KEY=<API_KEY>
```

As ES6 is supported, the code first needs to be transpiled. This can be done using the following command:
```bash
yarn build
```

As soon as the code has been transpiled you can run the scripts:
``` bash
yarn <scriptname>
```

Example:
``` bash
yarn list-zones
```
