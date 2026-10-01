
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

# Drop root (SonarQube docker:S6471). The base image ships an unprivileged
# `nginx` user, and nginx.conf listens on 4173 — above 1024 — so nothing needs
# privileged ports. What DOES need to be writable is the cache/run state
# nginx creates at startup, which is root-owned out of the box; fix the
# ownership while we're still root, then drop privileges for the actual run.
RUN rm -rf /usr/share/nginx/html/* \
 && touch /var/run/nginx.pid \
 && chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx \
             /usr/share/nginx/html /etc/nginx/conf.d

# Copy custom Nginx configuration listening on port 4173
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static output from build stage
COPY --from=build /app/dist /usr/share/nginx/html

USER nginx

EXPOSE 4173

CMD ["nginx", "-g", "daemon off;"]