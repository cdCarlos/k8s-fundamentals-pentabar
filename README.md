# Kubernetes Fundamentals - PentaBar

- [Environment](#environment)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Create minikube cluster](#create-minikube-cluster)
- [Usage](#usage)
  - [App](#app)
- [Deployment](#deployment)
  - [Build Docker Images](#build-docker-images)
    - [App](#app-1)

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

### App

To run the app, run the following command:

```bash
$ npm run start:app
```

## Deployment

### Build Docker Images

> **IMPORTANT**: If using minkube make sure to run `eval $(minikube docker-env)` to configure the environment variables in your terminal to target your minikube cluster, otherwise kubernetes will not find your local images when deploying your resources.

#### App

```bash
$ npm run build:images:app
```

Once the image has been built, you can run a quick test by running a app container with:

```bash
$ docker run -it -p 80:3000 k8sf-app:latest
```

### Deploy Application in Kubernetes Cluster

Now that you have built your docker images, deploy your application into Kubernetes by running the following command:

```bash
$ kubectl create -f app/ks-app.yaml
```

#### Get object status

You can get the status of your object in kubernetes by running the following command:

```bash
$ kubectl get <object-type>
```

where `<object-type>` could be any of these: **service**, **deployment**, **rs**, **pod**

Additionally, you can get more detailed information by running: `kubectl describe <object-type> <object-name>`

### Access App from browser

In order to access our application from the browser we can follow the next steps:

1. Get the IP of the node where the application has been deployed:

```bash
$ kubectl describe node k8s-fundamentals
```

As part of the output, you should be able locate the IP under `Addresses>InternalIP`.

Another option is to describe any pod that is part of your deployment with `kubectl describe pod <pod-name>`. In the output, you will find the node IP under `Node`.

2. Get the port where your service got attached to the node:

```bash
$ kubectl describe service ks-app
```

The port number is under `NodePort`.

3. In your browser, navigate to `<node-ip>:<service-node-port>`

### Scale your application Up or Down

In the `app/ks-app.yaml` file, update your `replicas` to `4`. Now scale your application by running:

```bash
$ kubectl apply -f app/ks-app.yaml
```

Now you can verify your pods by running: `kubectl get pods`

### Environment Clean Up

If you want to restart everything again from scratch, you can delete your cluster with minikube by running: `minikube stop && minikube delete`.

If you only want to destroy your deployment, you can run: `kubectl delete -f app/ks-app.yaml`
