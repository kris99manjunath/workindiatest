# workindiatest

## How to run:
 Clone and save it.<br>
### To run api:<br>
Install the package using npm install.<br>
Then go to .env file( uploaded with all field empty ) and define all the required the field like the field(Note: MySQL Database name must be unique and shouldn't exists before).<br>
Then run the SetUP using "npm test"( or nodemon) (sample env is uploaded)<br>
Once it runs without any erors, you can run index.js<br>

(NOTE: IT is not advised to upload .env i just uploaded for the template)

Login token must be sent throgh auth-token in headers. if token fails you cant access other todo functionalities.
