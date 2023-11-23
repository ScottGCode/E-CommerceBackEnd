# E-Commerce Back-End

## Description

I wanted to build a backend for an e-commerce website for my company that uses the latest technologies. This will help my company compete with other e-commerce companies. I needed to build an application that would allow my company to view and interact with information stored in the database. To do this, I took a working Express.js API and configured it to use Sequelize to interact with a MySQL database. Now you can successfully create, read, update, and delete data in the database. 

## Installation

To install this application and get the development enviroment up and running:

1. Fork and clone the code from the repository provided in the GitHub link.
2. Open the file and run the command `npm i` to install the dependencies needed.
3. To connect to the database using MySQL, run the command `mysql -u root`.
4. Run the command `SOURCE db/schema.sql;` to source the schema. Then `quit`.
5. To seed the database enter `node seeds`. 
6. To connect to the server `npm start`.
7. Use Insomnia to view data in the database. 

## Usage

To use this application and view the data in the database with Insomnia. Use your server (localhost:3001) and different endpoints of the express /api to see the data in the database. The endpoints `/api/products`, `/api/categores`, and `/api/tags` will show you the corresponding data. For example perform a GET request to `http://localhost:3001/api/products` to see all of the products in the database. Perform a POST request to add a product to the database. A PUT request will allow you to update a specific product given the id. A DELETE request will allow you to delete a product given its id.  With this application you are able to GET, POST, PUT, and DELETE any Product, Category, or Tag. 

Link To Video Demonstration --> https://drive.google.com/file/d/1WHzsqdRpPFjzvfNLpucPvAbzJM35jPSK/view 

-  Video Walkthrough

![GIF DEMO](/assets/Media/E-Commerce%20BackEnd%20Video%20Walkthrough.gif)

## Credits

University of Utah Coding Bootcamp Instructor and Teaching Assistants. NPM documentation on MySQL2 and Sequelize. Express.js documentation. MDN Web Docs. W3 Schools. FullStack Blog. Stack Overflow.

## License

MIT License

Copyright (c) [2023] [scottrutherford]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)
![Static Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Static Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## Questions 

Click [here](https://github.com/ScottGCode) to visit my GitHub profile.

Email for questions: scottrutherfords@gmail.com