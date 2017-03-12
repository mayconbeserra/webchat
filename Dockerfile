FROM node:7.7.1-onbuild

ADD /package.json /usr/src/app
ADD /.babelrc /usr/src/app

RUN npm run server:build
RUN npm run client:build
