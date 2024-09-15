FROM node:18.20.4
WORKDIR /altrpnjs
COPY . .

RUN npm install 
RUN APP_KEY=$(node ace generate:key) && \
    echo "APP_KEY=$APP_KEY" >> .env

ENV APP_ENV=development
ENV APP_URL=http://127.0.0.1
ENV NODE_ENV=development
ENV PATH_ENV=development
ENV APP_KEY=$APP_KEY
ENV HOST=0.0.0.0
ENV APP_NAME=localhost
ENV PORT=33331
ENV FORCE_HTTPS=false
ENV DRIVE_DISK=local
ENV DB_CONNECTION=pg
ENV PG_DB_HOST=postgres
ENV PG_DB_PORT=5432
ENV PG_DB_USERNAME=postgres
ENV PG_DB_PASSWORD=postgres
ENV PG_DB_DATABASE=altrp
ENV COOKIE_SECURE=false
ENV CACHE_DRIVER=file
ENV CACHE_PREFIX=altrp_
ENV CACHE_VIEWS=true
ENV QUEUE_CONNECTION=sync
ENV SESSION_DRIVER=cookie
ENV SESSION_LIFETIME=7200

# RUN node ace migration:run --force \
    # && node ace db:seed name=admin email=maior.andrey@gmail.com password=12345678

# CMD ["node" "ace" "serve" "--watch"]
EXPOSE 33331
CMD ["/altrpnjs/start.sh"]