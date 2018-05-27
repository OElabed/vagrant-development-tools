#!/usr/bin/env bash

# see : https://ec.haxx.se/usingcurl-verbose.html

curl_format='{
  "time_total": %{time_total},
  "http_code": %{http_code},
  "url_effective": "%{url_effective}",
  "time_connect": %{time_connect},
  "speed_download": %{speed_download},
  "size_download": %{size_download}
}'

TODAY_DATE=`date '+%Y_%m_%d__%H_%M_%S'`;

source config.cfg

COUNTER=0
while [ "$COUNTER" != "$REQUEST_NUMBER" ]
do
    COUNTER=$[$COUNTER +1]
    RESULT_JSON="$(curl $HOST:$PORT -w "$curl_format" -o /dev/null -s)"
    # SERVER_TYPE="$(curl localhost:8888 | grep -oPm1 '(?<=<h1>)[^<]+')"
    TOTAL_TIME="$(echo $RESULT_JSON | jq .time_total)"
    
    if [ "$COUNTER" == 1 ]; then
        echo "[$RESULT_JSON," >> results/$LOG_FILE_NAME-$TODAY_DATE.json
    elif [ "$COUNTER" == "$REQUEST_NUMBER" ]; then
        echo "$RESULT_JSON]" >> results/$LOG_FILE_NAME-$TODAY_DATE.json
    else
        echo "$RESULT_JSON," >> results/$LOG_FILE_NAME-$TODAY_DATE.json
    fi
    echo "REQUEST [$COUNTER] - $TOTAL_TIME" 
    sleep $DELTA_TIME
done