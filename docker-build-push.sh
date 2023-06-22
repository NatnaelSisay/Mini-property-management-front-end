#!/bin/bash
VERSION="1.0.0"

docker build -t waa-final-project-front-end:$VERSION .
docker tag  waa-final-project-front-end:$VERSION tinsae/waa-final-project-front-end:$VERSION
docker push tinsae/waa-final-project-front-end:$VERSION