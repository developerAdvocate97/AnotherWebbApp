


##########################################
#VARS
###########################################

#name of console istalled in your linux distro
CONSOLE="konsole --noclose -e"

CURRENT_DIR="$PWD"
cd "$CURRENT_DIR/frontend/frontend-app"
$CONSOLE "npm start " 


###########################################

###########################################

###########################################
###########################################
cd ..
cd ..
cd "$CURRENT_DIR/backend/anotherWebbApp"
#screen npm install && npm start && exit
mvn spring-boot:run 

