FROM alpine:latest as base
WORKDIR /app
RUN mkdir client
RUN mkdir server
COPY . .
RUN cd client && npm install
ENV VITE_BASE_URL=/app/client/
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
RUN cd server && npm install
ENV MONGO_URL=/app/server/ PORT=8080
EXPOSE 8080


# See https://docs.docker.com/go/dockerfile-user-best-practices/

ENTRYPOINT [ "/app" ]
