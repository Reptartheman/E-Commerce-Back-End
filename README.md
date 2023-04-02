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
``
