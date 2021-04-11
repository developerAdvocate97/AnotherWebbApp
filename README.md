# AnotherWebbApp

For initilize this project you 'll need:

- Java 8
- Maven
- Mysql 5.7
- React 17.0.2
- npm

The database need to have the user root and password: 'password', in case you have another password you should change it to this or update the application.properties inside backend/anotherWebbApp/src/main/resources/application.properties

spring.datasource.username=root
spring.datasource.password=password

To start the backend and front end with the script you have to download the project and get inside the repo and execute .script.sh
For manually initialization you have to enter to backend project backend/anotherWebbApp and execute mvn spring-boot:run and inside the frontend/frontend-app npm start.