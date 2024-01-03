#!/bin/bash

# Get the current date and time
current_date_time=$(date +"%Y/%m/%d_%H:%M:%S")

# Update the environment variable in the .env file
echo "VUE_APP_LAST_COMMIT_DATE=$current_date_time" > .env
