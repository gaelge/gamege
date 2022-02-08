FROM node:erbium-alpine
RUN mkdir /gamege
WORKDIR /gamege
COPY . /gamege/
CMD ["node", "src/app.js"]