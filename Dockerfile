FROM node:18-alpine

ENV HOST='0.0.0.0'
ENV PORT='3000'

WORKDIR /dogs

COPY ./ /dogs

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]