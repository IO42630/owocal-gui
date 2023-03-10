FROM node:16
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --force
RUN npm install -g @angular/cli@11.0.7
# add app
COPY . /app
# start app
EXPOSE 4220
CMD ng serve --host 0.0.0.0
