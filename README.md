# SpottedCharts - Music Insights Application

## Overview

- [SpottedCharts - Music Insights Application](#spottedcharts---music-insights-application)
  - [Overview](#overview)
  - [Description](#description)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
  - [Definition of Done](#definition-of-done)

## Description

_By [Morris](https://github.com/MorrisHannessen) and [Joris](https://github.com/theartcher)_

SpottedCharts is an application designed to provide users with valuable insights
into their listening activities, favorite songs, artists, and genres.
It's a work in progress (W.I.P) with features like:

- Historical rankings of songs, artists & genres.
- Top 50 songs, artists & genres.
- Interesting statistics about listening activity.
- Music discovery.
- And more to come!

## Project Overview

To give you a high-level perspective of our "SpottedCharts" application,
we've created a C4 system context diagram.
This diagram offers an overview of the application's
structure and its interaction with external components,
with the Spotify Web-API being the sole external component.

<img src="../monorepo/documentation/diagrams-exported/C4-system-context.svg"
  alt="C4 system context diagram"
  style="border: 2px solid gray; border-radius: 20px; background-color: white;">

In addition to the system context diagram, we've prepared a C4 container context
diagram to provide a more detailed view of the application's internal components.

<img src="../monorepo/documentation/diagrams-exported/C4-container-context.svg"
 alt="C4 container context diagram"
 style="border: 2px solid gray; border-radius: 20px; background-color: white;">

These diagrams are invaluable resources to understand how our application fits
into the broader system landscape and to grasp the internal organization of our components.
They play a crucial role in our project's architectural planning and development.

## Getting Started

The SpottedCharts application comprises a few components. You can learn more about
each component, its relevance, and connections by reading their respective READMEs:

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

To set up the local development environment, use the provided [Dockerfile](./docker-compose.yml).
Open a terminal at the project root and run the following command
_(assuming you have the required packages/external software installed)_:

```bash
docker-compose up -d
```

## Definition of Done

- [ ] **All Functional Requirements Met:** All user stories, features,
      and functional requirements have been implemented and tested successfully.

- [ ] **Non-Functional Requirements Addressed:** Non-functional requirements such
      as performance, security, and scalability have been verified and
      meet the project's goals.

- [ ] **Code Quality Assurance:** The codebase adheres to coding standards and
      best practices. Code has been reviewed, and all issues addressed.
      Code is well-documented with inline comments for complex sections.

- [ ] **Testing and Quality Assurance:** Comprehensive unit tests have been
      written and passed for all significant code components.
      Integration tests have been conducted to ensure system-wide functionality.

- [ ] **Documentation:** All necessary documentation has been updated,
      including user guides, installation guides, and API documentation.
      Release notes are prepared and describe the changes in this release.

- [ ] **Deployment and Environment Readiness:** The project is successfully
      deployed to staging environments for final testing.
      All necessary environments (e.g., development, staging, production) are properly
      configured and ready for deployment. Continuous integration and continuous
      delivery (CI/CD) pipelines are working flawlessly.

- [ ] **Security Compliance:** Security assessments and penetration testing have
      been conducted, and any identified vulnerabilities have been mitigated.

- [ ] **Performance and Scalability:** Performance testing has been carried out,
      and the application meets performance requirements. The system can handle
      anticipated user loads and scalability requirements.
