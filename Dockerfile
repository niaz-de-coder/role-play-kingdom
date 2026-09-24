FROM php:8.2-apache

# Copy source code
COPY . /var/www/html/

# Install MySQL extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Change Apache default port from 80 to 8080
RUN sed -i 's/80/8080/g' /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf

EXPOSE 8080
