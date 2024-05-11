FROM node:20.11.0-alpine as build
WORKDIR /app

 # ARG NGX_API_URL

# Set the environment variables
# ENV NGX_API_URL=$NGX_API_URL

RUN npm install -g @angular/cli

COPY ./package.json .
COPY . .
RUN npm install --force
# RUN npx ng add @ngx-env/builder --skip-confirmation
# In your own project, you would rather have the configuration in the angular.json file
# Some sample code to show that the environment variable is available
# RUN echo 'console.log("NGX_API_URL", import.meta.env["NGX_API_URL"])' >>src/main.ts
#RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build && yarn install --production --ignore-scripts --prefer-offline
RUN ng build 
#RUN node_modules/.bin/ng build --prod

FROM nginx as runtime
COPY --from=build /app/dist/ecommerce-angular /usr/share/nginx/html