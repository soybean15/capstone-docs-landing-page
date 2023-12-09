#!/bin/bash

VUE_APP_LAST_COMMIT_DATE=$(git log -1 --format="%at" | xargs -I{} date -d @{} +%Y/%m/%d_%H:%M:%S)
echo "VUE_APP_LAST_COMMIT_DATE=${VUE_APP_LAST_COMMIT_DATE}" > .env
