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


The routes to acces the frontend app are:

GET http://localhost:3000/items for getting the all the items besides belonging a folder
GET http://localhost:3000/folders for getting the all the folders

GET http://localhost:3000  -> screen of Welcome To the App not developed yet.


The routes to acces the backend app are:

  @GetMapping("/folders")
  @PostMapping("/folders")
  @GetMapping("/folders/{id}")
  @PutMapping("/folders/{id}")
  @DeleteMapping("/folders/{id}")

  @GetMapping("/items")
  @PostMapping("/items")
  @GetMapping("/items/{id}")
  @PutMapping("/items/{id}")
  @DeleteMapping("/items/{id}")


  Anotations: In case that a port is being used with lsof -wni tcp:8080 find the process(pid) and with kill -9 XXX  you can kill the process and initialize the apps.