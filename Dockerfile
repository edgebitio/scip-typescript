FROM node:hydrogen-alpine

RUN apk add --no-cache git curl jq

COPY . /app
RUN cd /app && npm install && npm run build

ENTRYPOINT ["/app/index.sh", "scip"]
