---
id: UiPath-ktern-ai
title: UiPath and KTern.AI
sidebar_label: UiPath and KTern.AI
---

# UiPath and KTern.AI

Have you ever wanted to test the testcases that only needs testing when you are preparing for a release ? Or may be you have found yourself testing all of your testcases (may be 1000 or 3000 or 10,000) for a single release cycle. Now you can test only what needs to be tested using _UiPath Integration Bot available in KTern_

Using this you will be able to :

1. Create Test Sets from the identified testcases from KTern.
2. Create Test Requirements from the identified testcases from KTern.

# Introduction

Before we move into the "How to", it is important to understand the terms in the current scenario. There can be 1000s of test cases available in a given environment, With constant change requests from the business, the number of transport requests going into the production system demands long, time consuming, redundant testing processes. KTern's Automated Enterprise Release Impact (AERI) will help identify the list of impacted processes for a given transport request which inturn can be autonomously tested using UiPath's Test Bots.

## Fits and Test Sets

Imagine a list of process that requires testing from KTern's AERI results, The Platform intelligently proposes the testcases for the identified processes with sampled test data. Had the testcases be maintained in UiPath's Test Manager, the platform can identify the testcases in UiPath that require testing. The Identified Test Cases appear as **Fits**. These Fits can inturn be created as [Test Sets](https://docs.UiPath.com/orchestrator/lang-ru/docs/test-sets) in UiPath for automated execution.

## Gaps and Test Requirements

There can be instances where the identified processes that require testing, may or may not have testcases maintained in UiPath. In these cases, The recommended testcases from KTern appear as **Gaps**. These Gaps can inturn be created as [Test Requirements](https://docs.UiPath.com/test-suite/docs/requirements)
