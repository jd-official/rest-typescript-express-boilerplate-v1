version: '3.8'

services:
  redis_db:
    image: 'redis:alpine'
    ports:
      - 6379:6379
    container_name: redis_db
    command: redis-server
    volumes:
      - ./redis-data:/data