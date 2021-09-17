# Pet Store Demo

Pet Store is a comprehensive demo application. Built to show different cloud-native workloads working in a cloud environment.

Pet Store is used for:

* Base Example of Cloud-Native app in the cloud
* Showing multiple languages working together with feature parity
* Deploying to a Kubenetes cluster
* Interactive testing features and functionalty

---

## Base Example

This app at the end of the day is a demo app. We want to show some of the best practices around building a cloud-native application. And have a way for community users to have an app to deploy, extend or just experiment with.

Why a pet store? E-Commerce is a typical use case for a scable cloud-native application.

---

## Multiple Languages

Pet Store is intended to showcase a set of popular languages such as:

* [NodeJS](https://nodejs.org/en/) / [Express](https://expressjs.com/)
* [Java](https://www.java.com/en/) / [Spring](https://spring.io/)
* [.NET](https://dotnet.microsoft.com/) / [Steeltoe](https://steeltoe.io/)
* [Python](https://www.python.org/) / [Flask](https://flask.palletsprojects.com/en/2.0.x/)

These are the first set of languages we are focused on building the back end services out. This project is to have realitive feature parity between each of these.

Languages and frameworks need to align to the latest stable LTS versions.

### Frontend

Pet Store will have a unified frontend. That can interact with any of the supported back end projects.

### Architecture

TBD

### Project Structure

```
root
│    README.md
│    .gitignore
│
└─── webui
└─── java
└─── dotnet
└─── nodejs
└─── python

```

---

## Deploying

This project is inteded to support deploying and will need the necessary files to help support this.

---

## Interactive Testing

With this being a demo application. We want the ability to test from the applications common failures of a cloud-native application.

---
