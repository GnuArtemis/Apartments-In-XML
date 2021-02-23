# Apartments-In-XML
## Description
### Deployed link: https://nameless-spire-32350.herokuapp.com/
An API that grabs data from an external XML source and parses it to produce a JSON object with desired information.  Users can, optionally, save that data to a database, and retrieve savedlistings from that database. JSON information can be retrieved via a GET to "/listings", information can be saved to the database through a POST to "/save", and items saved in the database can be retrieved via a GET to "/savedListings".

## Table of Contents
1. [Description](#-Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [Questions](#Questions)
1. [License](#License)

## Technologies 

[Node.js](https://nodejs.org/en/)

[Mongo](https://www.mongodb.com/)

[Express](https://www.npmjs.com/package/express)

[Mongoose](https://mongoosejs.com/)

[xml2js](https://www.npmjs.com/package/xml2js)

[xmlhttprequest](https://www.npmjs.com/package/xmlhttprequest)

## Installation
1.  Ensure Node.js is installed according to the specifications on its current documentation.  
1.  Clone this repository to a local machine.  
1.  Run "npm install" to install dependencies.  
1.  To enable database functions:  install Mongo DB according the specifications on its current documentation, then initialize mongo in the terminal.
1.  Use the command "npm start" to start the server.  Local information can be accessed at "http://localhost:3001/listings", and if necessary the port number can be changed in the server file.

## Usage
Anyone can use, according to the terms of the license.
    
## Contributing
Contributions are welcome, please open a pull request with proposed changes for review by repo owners.

## Questions
Please direct questions to:
Github account GnuArtemis
annmguinee@gmail.com 

## License 

![GitHub](https://img.shields.io/github/license/GnuArtemis/Apartments-In-XML) 

MIT License

Copyright (c) 2020
    
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.