FROM node:12.14.1-alpine	

WORKDIR /home/node	

# node ENV
ENV NODE_ENV=production

# run everything as node user	
USER node	

# packages to install	
COPY package.json .

# install packages, supress warnings
RUN yarn install

# copy app files after yarn init, so updates are faster	
COPY app.js .	
COPY build ./build

EXPOSE 8000	

CMD ["yarn", "start"] 
