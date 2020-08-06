# Kubernetes Fundamentals - PentaBar

## Environment

- Node.js: 12.18.3
- NPM: 6.14.6

## Usage

### Frontend

To run the frontend application, run the following command:

```bash
$ npm run start:frontend
```

## Build Docker Images

### Frontend

```bash
$ npm run build:images:frontend
```

Once the image has been built, you can run a frontend container with:

```bash
$ docker run -d -p 80:3000 k8sf-front:latest
```
