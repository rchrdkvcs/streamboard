FROM node:22 as builder

WORKDIR /app

RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN node ace build --ignore-ts-errors

FROM node:22

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 8080

CMD ["node", "./bin/server.js"]