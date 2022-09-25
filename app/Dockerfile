FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
RUN npx prisma generate
RUN npm run build
RUN npm prune --production

FROM node:18 AS production
WORKDIR /usr/src/app
USER node
COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD ["sh", "-c", "node dist/main"]
