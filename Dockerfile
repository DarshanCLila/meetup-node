FROM node:dubnium as dependencies

WORkDIR /app
COPY package.json .

RUN npm install

FROM node:dubnium-alpine as app
WORKDIR /app
COPY --from=dependencies /app/node_modules node_modules
COPY index.js .

EXPOSE 9000

CMD ["node", "index.js"]
