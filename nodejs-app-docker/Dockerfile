FROM ubuntu

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
