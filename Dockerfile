# Choose the base image
FROM node:22 as builder

# Create app directory
WORKDIR /app

RUN curl  -sL https://unpkg.com/@pnpm/self-installer | node

# Install app dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Bundle app source
COPY . .

RUN node ace build \
    --ignore-ts-errors \
    && cd build \
    && pnpm install --prod

FROM node:22

ENV TZ=UTC
ENV PORT=3333
ENV HOST=localhost
ENV LOG_LEVEL=info
ENV APP_KEY=UIftWVg2Slweu1eRN2VvObGvbZ-5KUdw
ENV NODE_ENV=production
ENV SESSION_DRIVER=cookie
ENV DB_HOST=127.0.0.1
ENV DB_PORT=5432
ENV DB_USER=postgres
ENV DB_PASSWORD=admin
ENV DB_DATABASE=jeanpormanove

WORKDIR /app

COPY --from=builder /app/build .

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD [ "node", "bin/server.js" ]