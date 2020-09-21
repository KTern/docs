---
id: ktern-release-management
title: KTern Release Management
sidebar_label: KTern Release Management
---

### Introduction

KTern.AI team follows a discipline in building and releasing new product releases. Each release comprises of Development, Configuration, Testing, Building and Deployment activities. As a team, KTern.AI defines best practices to ensure consistent and repeatable process and also develops the strategies for deployment.
<br>

### Philosophy

KTern's team philosophy is <br>
**1.** **Self-service Model**

- Team must be self-sufficient to work at scale.
- Team decide when and how often to release
- Release processes can be automated to the point of minimal effort
- Releases are truly automatic and not automated
  <br>

**2.** **High Velocity**

- Frequent builds have fewer changes between releases and so easier to troubleshoot problems.
  <br>

**3.** **Hermetic Builds**

- Build tools must ensure consistency and repeatability
- Build process is self-contained
- Build tools are versioned
  <br>

### Exodus – CI/CD System

KTern team has developed it's own automated release system named ‘Exodus’ using FOSS (Free and Open Source) technologies to deliver release processes that are scalable, hermetic and reliable.

### Product Innovation Cycle

KTern refers the release cycle as Product Innovation Cycle. There are six major releases every 12 months.

<center>
<img src = "https://storage.googleapis.com/ktern-public-files/product-documentation/product-innovation-cycle.png">
</center>

### Release Nomenclature

Releases are named after the seasons. KTern.AI follows bimester release schedule (two months once).

Release versions are named as

**{Year’s last two digits>} {Release Month in digits}**

E.g. In the year 2020, the Autumn release version number is 2010

| RELEASE |   NAME    |     TIMELINE      | RELEASE VERSION |
| ------- | :-------: | :---------------: | :-------------: |
| 1.      |  Summer   |    April-June     |      2006       |
| 2.      |  Monsoon  |    June-August    |      2008       |
| 3.      |  Autumn   |  August-October   |      2010       |
| 4.      |  Winter   | October-December  |      2012       |
| 5.      | Prevernal | December-February |      2102       |
| 6.      |  Spring   |  February-April   |      2104       |

<br>

### Product Backlog

KTern maintains a clear and vivid product backlog database using a distinguished SaaS product. This is used to prioritize KTern team’s responsibilities for the release planning.

Product backlog consists of:

- Feature / Module Request
- Defects
- Technical Debt
- Knowledge Acquisition (PoC, Prototype, Research, Experiment)
- Non-Functional Requirements
- Enhancements
- Modifications
- Change Request
  <br>

### Typical Release Phases

KTern's typical releases can be visually represented as below:

<center>
<img src = "https://storage.googleapis.com/ktern-public-files/product-documentation/release%20planning.png">
</center>
<br>

### Code Phase

<center>
<img src = "https://storage.googleapis.com/ktern-public-files/product-documentation/code-phase.png">
</center>
<br>

### Quality Gate

Each developer will have to undergo rigorous Peer code review before merging their changes to MASTER branch. Quality gate is visually represented below:

<center>
<img src = "https://storage.googleapis.com/ktern-public-files/product-documentation/quality-gate.png">
</center>
<br>

### Environment

**KTern.AI uses three environments – Development, Quality and Production.**

#### Development Environment

Release management is responsible for the following activities in the development environment:

- Planning and policy for new releases
- Designing the new software version and/or equipment or buying it from third parties
- Developing and configuring release
  <br>

#### Quality Environment

Release management is responsible for the following activities in the quality environment:

- Creating a realistic environment
- Planing the release
- informing and training users
  <br>

#### Production Environment

Release management is responsible for the following activities in the Production environment:

- Installing the new release in the live environment
- Supervising the quality of the new environment
  <br>

### Governing Principles of Release Management

KTern.AI follows Google’s 10 Commandments of Release Engineering

- Thou shalt use a source code control system:\_ Everything needed to build should be under source control i.e. source code, build files and build tools

- Thou shalt use the right tool(s) for the job\_: Complex projects may require multiple build tools

- Thou shalt write portable and low maintenance build files:\_ Plan to support multiple architectures and OS versions

- Thou shalt use a build process that is repeatable\_

- Thou shalt use a unique build ID\_

- Thou shalt use a package manager\_

- Thou shalt design an upgrade process before releasing version 1.0\_

- Thou shalt provide a detailed log of what thou hath done to my machine\_

- Thou shalt provide a complete install/upgrade/patch/uninstall process\_

- System Admin: Thou shalt apply these laws to thyself\_
