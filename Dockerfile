FROM node:20 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

FROM build AS dev

# install and cache app dependencies
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY package.json /usr/src/app/package.json

RUN yarn

COPY . .

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O -t frisk | zsh || true

# start appdoc
CMD ["yarn", "start"]


FROM build as build-product

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.16.0-alpine as production

COPY vhost.conf /etc/nginx/conf.d/default.conf
COPY --from=build-product /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
