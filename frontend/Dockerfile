FROM marcoturi/ionic
RUN mkdir app
WORKDIR app
COPY . .
RUN ionic build --prod

FROM httpd:2.4
COPY --from=0 /Sources/app/www/ /usr/local/apache2/htdocs/
