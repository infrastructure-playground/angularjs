FROM infrastructureplayground/angularjs:latest as project

FROM node:9.3.0
WORKDIR /usr/src/app
EXPOSE 4200
RUN apt-get update &&     apt-get install vim -y &&     npm install -g @angular/cli

COPY --from=project /usr/src/app/node_modules node_modules
COPY package.json package.json
RUN npm install

COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
