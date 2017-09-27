FROM node
RUN mkdir -p /var/www
WORKDIR /var/www
VOLUME /var/www
RUN npm install -g create-react-app
EXPOSE 3000

