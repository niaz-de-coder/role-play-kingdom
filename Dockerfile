FROM php:8.2-apache

# Copy your source code into the web root
COPY . /var/www/html/

# Install MySQL extensions for PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Expose port 80 for web traffic
EXPOSE 80
