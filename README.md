# Kubernetes Fundamentals - PentaBar

- [Environment](#environment)
    - [Requirements](#requirements)
    - [Setup](#setup)
        - [Create minikube cluster](#create-minikube-cluster)
- [Usage](#usage)
    - [Frontend](#frontend)
- [Deployment](#deployment)
    - [Build Docker Images](#build-docker-images)
        - [Frontend](#frontend-1)

## Environment

### Requirements

- Node.js: 12.18.3
- NPM: 6.14.6
- Minikube: 1.12.1
- Kubernetes:

```json
{
  "clientVersion": {
    "major": "1",
    "minor": "18",
    "gitVersion": "v1.18.6",
    "gitCommit": "dff82dc0de47299ab66c83c626e08b245ab19037",
    "gitTreeState": "clean",
    "buildDate": "2020-07-15T16:58:53Z",
    "goVersion": "go1.13.9",
    "compiler": "gc",
    "platform": "linux/amd64"
  },
  "serverVersion": {
    "major": "1",
    "minor": "18",
    "gitVersion": "v1.18.3",
    "gitCommit": "2e7996e3e2712684bc73f0dec0200d64eec7fe40",
    "gitTreeState": "clean",
    "buildDate": "2020-05-20T12:43:34Z",
    "goVersion": "go1.13.9",
    "compiler": "gc",
    "platform": "linux/amd64"
  }
}

```

### Setup

#### Create minikube cluster

```bash
$ minikube start --cpus=8 --nodes=1 --profile=k8s-fundamentals --driver=docker
```

Once your profile has been created, set it as default profile for minkube:

```bash
$ minikube profile k8s-fundamentals
```

## Usage

### Frontend

To run the frontend application, run the following command:

```bash
$ npm run start:frontend
```

## Deployment

### Build Docker Images

> **IMPORTANT**: If using minkube make sure to run `eval $(minikube docker-env)` to configure the environment variables in your terminal to target your minikube cluster, otherwise kubernetes will not find your local images when deploying your resources.

#### Frontend

```bash
$ npm run build:images:frontend
```

Once the image has been built, you can run a quick test by running a frontend container with:

```bash
$ docker run -it -p 80:3000 k8sf-front:latest
```