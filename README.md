
1. docker-compose.ymlのマウント先を変更
    volumes:
      - ./{frontend~}:/usr/src/app

2. docker-compose run --rm --service-ports study_react_service sh -c "npm install --legacy-peer-deps"

3. docker-compose run --rm --service-ports study_react_service sh -c "npm run start"
