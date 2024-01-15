FROM alpine:latest as base

# running the app as non root user following best practices
RUN addgroup app && adduser -S -G app app

# set the user
USER app

WORKDIR /app
ENV VITE_BASE_URL=http://localhost:8080
COPY package.json package-lock.json ./
USER root
RUN chown -R app:app
USER app
RUN npm install
COPY . .
ENV VITE_BASE_URL=/app/client/
EXPOSE 5173
CMD [ "npm", "run", "dev" ]


