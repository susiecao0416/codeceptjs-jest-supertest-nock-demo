FROM codeception/codeceptjs

COPY ./package.json ./package.json
RUN npm install

COPY ./codecept.json ./codecept.json
COPY ./ui/helpers/steps_file.js ./ui/helpers/steps_file.js
COPY ./ui/tests ./ui/tests
COPY ./ui/pages ./ui/pages
COPY ./ui/screenshots/base ./ui/screenshots/base

COPY ./scripts/entrypoint.sh ./entrypoint.sh
COPY ./scripts/wait-for-it.sh ./wait-for-it.sh

ENTRYPOINT ["./entrypoint.sh"]
