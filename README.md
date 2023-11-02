# Software 3 - DB02

## Overview

'SpottedCharts'

- [Software 3 - DB02](#software-3---db02)
  - [Overview](#overview)
  - [Maintainers](#maintainers)
  - [Description](#description)
  - [Project overview](#project-overview)
  - [Getting started](#getting-started)
  - [Definition of Done](#definition-of-done)

## Maintainers

- [Morris](https://github.com/MorrisHannessen)
- [Joris](https://github.com/theartcher)

## Description

SpottedCharts is an application made to give users more insight into their listening activities, favourites songs, artists and genres. Features (W.I.P):

- Your historical rankings of songs, artists & genres.
- See your top 50 songs, artists & genres.
- Interesting statistics about your listening activity.
- Discover new music.
- & much more to come!

## Project overview

![The C4 system context diagram](../monorepo/documentation/diagrams-exported/C4-system-context.svg)

In this diagram you can see the C4 system context diagram for our project. Offering a high level overview of the application including external components, in this case this is only the Spotify Web-API.

## Getting started

The SpottedCharts application is built upon a few components, reading the README's in those folders will explain more about the component, their relevance and their connections.

- [Frontend](./backend/README.md)
- [Backend](./frontend/README.md)

The way to get the general local developing environment up and running is done by using the [Dockerfile](./docker-compose.yml), open a terminal at the root of the project and run. _(Note this does assume that you have installed the proper packages/external software required for the applications. See the references above for more information.)_

> docker-compose up -d

## Definition of Done

- [ ] **All Functional Requirements Met:** All user stories, features, and functional requirements have been implemented and tested successfully.

- [ ] **Non-Functional Requirements Addressed:** Non-functional requirements such as performance, security, and scalability have been verified and meet the project's goals.

- [ ] **Code Quality Assurance:** The codebase adheres to coding standards and best practices. Code has been reviewed, and all issues addressed. Code is well-documented with inline comments for complex sections.

- [ ] **Testing and Quality Assurance:** Comprehensive unit tests have been written and passed for all significant code components. Integration tests have been conducted to ensure system-wide functionality.

- [ ] **Documentation:** All necessary documentation has been updated, including user guides, installation guides, and API documentation. Release notes are prepared and describe the changes in this release.

- [ ] **Deployment and Environment Readiness:** The project is successfully deployed to staging environments for final testing. All necessary environments (e.g., development, staging, production) are properly configured and ready for deployment. Continuous integration and continuous delivery (CI/CD) pipelines are working flawlessly.

- [ ] **Security Compliance:** Security assessments and penetration testing have been conducted, and any identified vulnerabilities have been mitigated.

- [ ] **Performance and Scalability:** Performance testing has been carried out, and the application meets performance requirements. The system can handle anticipated user loads and scalability requirements.
