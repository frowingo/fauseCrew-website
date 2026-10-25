FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY index.html tsconfig.json vite.config.ts ./
COPY public ./public
COPY src ./src
COPY scripts ./scripts
COPY PRODUCT.md DESIGN.md README.md fly.toml ./
COPY .impeccable/design.json ./.impeccable/design.json

# Vite embeds these public settings at build time.
ARG VITE_API_BASE_URL=""
ARG VITE_APP_STORE_URL=""
ARG VITE_PLAY_STORE_URL=""
RUN npm run build

FROM nginx:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
