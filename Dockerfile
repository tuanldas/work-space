FROM node:20 AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

FROM build AS devd

# install and cache app dependencies
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY package.json /usr/src/app/package.json

RUN npm install

COPY . .

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O -t frisk | zsh || true

# start appdoc
CMD ["npm", "run", "dev"]


FROM build AS build-product

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.16.0-alpine AS production

COPY vhost.conf /etc/nginx/conf.d/default.conf
COPY --from=build-product /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
