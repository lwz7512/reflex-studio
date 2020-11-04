#!/bin/bash

# TO RUN THIS SCRIPT:
# concurrently install required: 
# npm install -g concurrently

# USAGE EXAMPLE:
# % ./themes-starter.sh RED


# [me@linuxbox me]$ some_program word1 word2 word3

# $0 would contain "some_program"
# $1 would contain "word1"
# $2 would contain "word2"
# $3 would contain "word3"


# RED    - PRIMARY / PRIMARY_HOVER : #f44336 / #b71c1c
# PINK   - PRIMARY / PRIMARY_HOVER : #e91e63 / #880e4f
# PURPLE - PRIMARY / PRIMARY_HOVER : #9c27b0 / #4a148c
# INDIGO - PRIMARY / PRIMARY_HOVER : #3f51b5 / #1a237e
# BLUE   - PRIMARY / PRIMARY_HOVER : #2196f3 / #0d47a1
# CYAN   - PRIMARY / PRIMARY_HOVER : #00bcd4 / #006064
# GREEN  - PRIMARY / PRIMARY_HOVER : #4caf50 / #1b5e20
# LIME   - PRIMARY / PRIMARY_HOVER : #cddc39 / #827717
# YELLOW - PRIMARY / PRIMARY_HOVER : #ffeb3b / #f57f17
# ORANGE - PRIMARY / PRIMARY_HOVER : #ff9800 / #e65100
# BROWN  - PRIMARY / PRIMARY_HOVER : #795548 / #3e2723
# BLUGREY- PRIMARY / PRIMARY_HOVER : #607d8b / #263238

# CURRENT_COLOR=(${RED[0]} ${RED[1]})
# echo ">>>>>> STARTING WITH: ${CURRENT_COLOR[0]}, ${CURRENT_COLOR[1]}"

if [ -z "$1" ]
then
    echo ERROR: Failed to start workspace with color type,  Please append the variable like: RED/PINK/...
    exit 1 # terminate and indicate error
fi

node ./themejs-gen.js $1

# start all the theme with different port 
 
concurrently \
  "yarn workspace reflex-starter-base preview -p 8001" \
  "yarn workspace reflex-starter-biz preview -p 8002"  \
  "yarn workspace reflex-starter-blog preview -p 8003" \
  "yarn workspace reflex-starter-bost preview -p 8004" \
  "yarn workspace reflex-starter-expe preview -p 8005" \
  "yarn workspace reflex-starter-hero preview -p 8006" \
  "yarn workspace reflex-starter-vdes preview -p 8007" \
  "yarn workspace reflex-starter-vdrc preview -p 8008" \
  "yarn workspace reflex-starter-acdm preview -p 8009" \