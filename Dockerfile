FROM node:16.13.0 as node

WORKDIR /app

COPY . /app

RUN npm install -f
RUN npm install -g @angular/cli@14.1.3

EXPOSE 4200
CMD ["ng", "serve", "--host=0.0.0.0"]
