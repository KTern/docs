---
id: api-security
title: API Security
sidebar_label: API Security
---

All IP related services of KTern.AI are managed through a secured global API gateway infrastructure. This API-serving
infrastructure is only accessible over encrypted SSL/TLS channels, and every request must include a time-limited
authentication token generated via human login or private key-based secrets through the authentication system described
above. All platform API requests are logged and services are secured through HTTPS protocol and always encrypt customer
content that is stored at rest.

Encryption is automatic, and no customer action is required. One or more encryption mechanisms are used. For example, any
new data stored in persistent disks is encrypted under the 256-bit Advanced Encryption Standard (AES-256), and each
encryption key is itself encrypted with a regularly rotated set of master keys. Cloud Interconnect and managed VPN allow you
to create encrypted channels between your private IP environment on premises and KTern.AI IP Engine hosted hypercloud
network.

The hypercloud’s intrusion detection involves tightly controlling the size and make-up of attack surface through preventative
measures, employing intelligent detection controls at data entry points, and employing technologies that automatically
remedy certain dangerous situations. It identifies the most common vulnerabilities, specifically cross-site scripting (XSS) and
mixed content, in the web applications. KTern.AI managed hypercloud’s state-of-the-art security and privacy features can help
our customers secure genetic data and support compliance with applicable data privacy/protection regulations.
