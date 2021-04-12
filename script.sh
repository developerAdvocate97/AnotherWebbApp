


##########################################
#VARS
###########################################

#name of console istalled in your linux distro
CONSOLE="konsole --noclose -e"

CURRENT_DIR="$PWD"
cd "$CURRENT_DIR/frontend/frontend-app"
$CONSOLE "npm start " &


###########################################

###########################################

###########################################
###########################################
cd ..
cd ..
cd "$CURRENT_DIR/backend/anotherWebbApp"
mvn spring-boot:run 
$CONSOLE "mvn spring-boot:run " 

