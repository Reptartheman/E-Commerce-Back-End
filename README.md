# E-Commerce Back End
 
## Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

The task for this project is to build the back end for an e-commerce site by modifying starter code and to configure a working Express.js API to use Sequelize to interact with a MySQL database.

## Video Demonstration

[Link to Video Demonstration](https://drive.google.com/file/d/1_cyfk3q74ASoshQCYWpORQl_jy_kDgIv/view)

## How To Use
Please be advised that Insomnia was used to test the API requests for this application. It is recommended that the user install Insomnia to test this application. You will also need MySQL server and npm to successfully test this application.

While in VS code, click on the cloned repository name "E-Commerce-Back-End". Next you will need to right click on the folder entitled "Develop" and then select "Open in Integrated terminal". And run the following commands..

Install node packages
```
npm i
```
Then start MySql and create the database using...
```
source db/schema.sql
```
Seed the database by using either of the following...
```
npm run seed OR node seeds/index.js
```
Next start the server by using...
```
npm start OR node server.js
```


Once the server has started, the user can perform RESTful CRUD operations to Create data (POST), Retrieve data (GET), Update data (PUT), Delete data (DELETE). 

You can use the GET method to request an item in the database by a specific ID. However, PUT and DELETE need a specified path such as...
```
api/categories/:id OR api/products/:id OR api/tags/:id
```
IMPORTANT: You must use JSON format when using the POST or PUT method to add or change data.

##Technologies
- npm package Express.js
- npm package Sequelize
- npm package dotenv
- npm package MySQL 2
- Insomnia


