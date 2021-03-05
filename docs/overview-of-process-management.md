---
id: overview-of-process-management
title: Overview of Process Management
sidebar_label: Overview of Process Management
---

A process is a set of logically related activities performed to achieve a defined business Outcome.

The Digital Process Cockpit of KTern.AI enables you to manage your business processes in a holistic way: you can describe both business and IT perspective on processes, applications and system landscapes in one place. So business documentation and system reality are always synchronized.

## Process Hierarchy

Business processes can get quite complex and this makes it tough to model a real big process into just one graphical model. It makes no sense to model an end-to-end-process like "order to cash" into just one graphical model comprising everything like "article selection to shopping cart", "submission of purchase order", "money transfer", "packaging", "logistics" etc.

A process hierarchy is necessary to divide complex processes into smaller parts. A process hierarchy follows the "from abstract to concrete" principle. This means it provides information about the processes on different levels of granularity. Therefore, it is possible to get information about the abstract value chain (e.g. Purchasing, Production, Sales) or about very specific process steps and their logical order (e.g. create customer, approve purchase order). A process hierarchy is defined by its levels and the information given in these levels.

It is key to have a defined information base on each level (e.g. a process step is always performed by a specific role instead of an abstract organizational unit), otherwise process models won't be comparable at a later stage. The model below shows the process hierarchy model and provides an example for each level - the process model consists of six levels.

![](https://storage.googleapis.com/ktern-docs-files/process-1.png)

### Level 0 – Line of Business

A high-level aggregation of company functionality (core ore support functionalities, depending on the view of processes to be analyzed).

### Level 1 – Process Group

A bundle of processes that belong to the same area of responsibility dealing with similar tasks and activities for functional or other reasons.

### Level 2 – Scope Item

The Business Process is the level that aggregates business oriented functions or steps to a unit that is meaningful and comprehensive in the sense that the steps or functions incorporated are essential to fulfill a business mission related task. I. e. a Business Process is defined by steps that transform an input into an enriched output.

### Level 3 – Scope Item Variant

The Process Variant is meant to fulfill the same business mission but in a different manner or with a different application compared to a Business Process. I.e. Input and Output are more or less the same but the way to reach the output is different.
Each Business Process (or variant) consists of process steps. The steps itself contain activities performed by an user or a system in order to fulfill the business mission.

### Level 4 – Process Step

An activity performed by a user or a piece of software together with other Process Steps forming a Business Process or a Business Process Variant i. e. Business Processes do consist of more than one process step.

A Process Step is an activity that is related to exactly one object (e.g. human, sheet of paper, purchase order (system) ...).

A Process Step is typically executed by one person and documented using an appropriate representation of the object (paper, data in IT-system...).

From a user interaction point of view a Process Step is a single work task in a causal work flow without role change. A Process Step is typically identified by the fact that the task owner has got all necessary responsibilities to execute the task. A Process Step can be performed by a human being alone or by an interaction between human/system and system/system.
