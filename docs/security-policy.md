---
id: security-policy
title: Security policy
sidebar_label: Security policy
---

## Physical Security

The KTern development center in Chennai is under 24x7 security protection, at both premises level and floor level to ensure only authorized individuals have access to the building and the KTern office. At the premises level, the building’s perimeter is secured by barriers and guards. At the floor level, security guards and smartcard readers are present to authorize individuals before entry. Employees are granted access to the office only after authorization using smart cards. Critical locations in the office are accessible only to authorized individuals.
<br>

Important documents are stored in cabinets that can only be accessed by pre-authorized individuals. The office is equipped with surveillance cameras and their footage is monitored periodically by authorized individuals. Fire alarms and water sprinklers are in place to detect and mitigate damage in the unlikely event of a fire. A policy has been implemented to approve and regulate visitor access to the building. The office is provided with 24x7 power supply, supported by an alternative uninterrupted power supply system to ensure smooth functioning in the event of power failure.
<br>

KTern hosts its application and data in industry-leading <b><a target="_blank" style = "color: #9d0102" href="https://cloud.google.com/">Google Cloud Platform</a></b>, whose data centers have been thoroughly tested for security, availability and business continuity. For more details, please read the <b><a target="_blank" style = "color: #9d0102" href="https://cloud.google.com/security/overview/whitepaper/">GCP Whitepaper</a></b>, <b><a target="_blank" style = "color: #9d0102" href="https://cloud.google.com/security/">GCP Trust & Security</a></b>[]() and the [Forrester Report on Data Security Portfolio Vendors](https://cloud.google.com/forrester-data-security-portfolio-security-wave/).
<br>

## Application Security

All KTern products are hosted in <b><a target="_blank" style = "color: #9d0102" href="https://cloud.google.com/">Google Cloud Platform</a></b>. The infrastructure for databases and application servers is managed and maintained by the cloud service provider.

At KTern, we take a multifaceted approach to application security, to ensure everything from engineering to deployment, including architecture and quality assurance processes complies with our highest standards of security.
<br>

## Application Architecture

The application is initially protected by GCP’s firewall which is equipped to counter regular DDoS attacks and other network related intrusions. The second layer of protection is KTern’s own application firewall which monitors against offending IPs, users and spam. While the application can be accessed only by users with valid credentials, it should be noted that security in cloud-based products is a shared responsibility between the company and the businesses who own those accounts on the cloud. It should be noted that all account passwords that are stored in the application are one-way hashed and salted.
<br>

KTern uses a multi-tenant data model to host all its applications. Each application is serviced from an individual virtual private cloud and each customer is uniquely identified by a tenant ID. The application is engineered and verified to ensure that it always fetches data only for the logged-in tenant. Per this design, no customer has access to another customer’s data. Access to the application by the KTern development team is also controlled, managed and audited. Access to the application and the infrastructure are logged for subsequent audits.
<br>

## Application Engineering and Development

Our engineers are trained in industry-leading secure coding standards and guidelines to ensure our products are developed with security considerations from the ground-up. A security review is a mandatory part of application engineering (development and construction) process at KTern. The security review leverages static code analysis tools, in addition to manual reviews, to ensure adherence to our highest standards.
<br>

Different environments are in use for development and testing purposes, access to systems are strictly managed, based on the principles of need to do/know basis appropriate to the information classification, with Segregation of Duties built in, and reviewed on a quarterly basis.

## Quality Assurance

Besides functional validation and verification, the quality assurance process at KTern also subjects application updates to a thorough security validation. The validation process is performed by a dedicated app security team with ethical hackers whose goal is to discover and demonstrate vulnerabilities in the application. An update to the application does not get the stamp of approval from the quality assurance team if vulnerabilities (that can compromise either the application or data) are identified.

## Deployment & Post-Deployment

Deployments to production servers are performed only by trusted and authorized engineers. Only very few pre-authorized engineers have access to KTern production environment. In order to view and inspect access logs, engineers need to go through a committee of authorized employees, who will then deliver the logs to them after validating their purpose.
<br>

Post-deployment monitoring is done by a dedicated 24x7 Network Operations Center(NOC) team that monitors the application for suspicious activities or attacks. The application is engineered to detect and alert the Network Operations Center(NOC) and Security Operations Center(SOC) team about suspicious activities and abnormal load situations in the infrastructure. An escalation matrix up to two levels of engineers has been defined to address contingencies that might occur.
<br>

An information security team carries out periodic comprehensive application audits. The tests are performed with the help of static analysis tools and aided by manual analysis. Network penetration tests and other black box tests are performed to help identify security vulnerabilities in the application. The security team stays vigilant about common vulnerabilities and exposures and stays on top of updates to the <b><a target="_blank" style = "color: #9d0102" href="https://nvd.nist.gov/">US National Vulnerabilities Database</a></b>.
<br>

## Data Security

KTern takes the protection and security of its customers’ data very seriously. KTern manages the security of its application and customers’ data. However, provisioning and access management of individual accounts is at the discretion of individual business owners.
<br>

The KTern development team has no access to data on production servers. Changes to the application, infrastructure, web content and deployment processes are documented extensively as part of an internal change control process. The security review mandates that each version is compliant with the company’s internal Information Security Management System(ISMS) policies.
<br>

Our product collect limited information about customers - name, email address and phone - which are retained for account creation. KTern takes the integrity and protection of customers’ data very seriously. Data at rest is encrypted using AES-256 bit standards (key strength - 1024) with the keys being managed by AWS Key Management Service. All data in transit is encrypted using FIPS-140-2 standard encryption over a secure socket connection for all accounts hosted on ktern.com.
<br>

Application logs are maintained, incremental data recovery and consistent, cluster-wide snapshots of sharded clusters is offered. All database clusters are highly available and backed by an industry-leading uptime SLA of 99.995%. Google Cloud Platform Redundant architecture exists such that data is replicated in real-time to at least two geographically dispersed data centers. The data centers are connected through multiple encrypted network links andinterfaces. This provides high availability by dynamically load balancing across those sites.
<br>

## Data Access and Disposal

The hyperclouds in which KTern.AI IP engine is managed, the controls and practices are established to protect the security of
KTern.AI IP information. The layers of the application and storage stack require that requests coming from other components
are authenticated and authorized. Access by KTern.AI production application administrative engineers to production
environments is also controlled. A centralized group and role management system is used to define and control engineers’
access to production services, using a security protocol that authenticates engineers using short-lived personal public key
certificates; issuance of personal certificates is in turn guarded by two-factor authentication.

When the subscription period ends or in the event of a contract being terminated, the user access will be revoked, account will
be deleted and all associated data is destroyed within 50 business days with prior notification to the account stakeholders.
KTern.AI also offers data export options which businesses can use if they want a backup of their data before deletion.

## Data Deletion

When an account is deleted, all associated data is destroyed within 50 business days. KTern also offer data export options which businesses can use if they want a backup of their data before deletion. For more information regarding data deletion refer to our <b><a target="_blank" style = "color: #9d0102" href="https://www.ktern.com/privacy-policy/">Privacy Page</a></b>.
<br>

## Operational Security

KTern understands that formal procedures, controls and well-defined responsibilities need to be in place to ensure continued data security and integrity. The company has clear change management processes, logging and monitoring procedures, and fallback mechanisms which have been set up as part of its operational security directives. An information security committee is present to oversee and approve all organization-wide security policies.
<br>

Operational security starts right from recruiting an engineer to training and auditing their work products. The recruitment process includes standard background verification checks (including verification of academic records) on all new recruits. All employees are provided with adequate training about the information security policies of the company and are required to sign that they have read and understood the company’s security-related policies. onfidential information about the company is available for access only to select authorized KTern employees.
<br>

Employees are required to report any observed suspicious activities or threats. The human resources team takes appropriate disciplinary action against employees who violate organizational security policies. Security incidents (breaches and potential vulnerabilities) can be reported by customers through our email: <b><a target="_blank" style = "color: #9d0102" >info@ktern.com</a></b>.
<br>

KTern maintains an inventory of all information systems used by employees for development purposes in an internal service desk, aided by automated probing software that assists in tracking changes to these systems and their configurations. Only authorized and licensed software products are installed by employees. No third parties or contractors manage software or information facilities, and no development activity is outsourced. All employee information systems are authorized by the management before they are installed or put to use.
<br>

In order to test the resilience of the hosted application, the company employs an external security consultant and additional ethical hackers who perform penetration tests. This is always conducted in an architecturally equivalent copy of the system with no actual customer data present. The production system is never subject to such tests. Should an individual attempt such a test in the production environment, it will be detected as an intrusion, and the source IP will be blocked. An alert will then be raised to the NOC and SOC team who shall attend to the incident.
<br>

## Network Security

Network security is discussed in detail in this section from the perspective of the development center, and the GCP network where the application is hosted.
<br>

The KTern office network where updates are developed, deployed, monitored and managed is secured by industry-grade firewalls and antivirus software, to protect internal information systems from intrusion and to provide active alerts in the event of a threat or an incident. Firewall logs are stored and reviewed periodically. Access to the production environment is via SSH and remote access is possible only via the office network. Audit logs are generated for each remote user session and reviewed. Also, the access to production systems are always through a multi-factor authentication mechanism.
<br>

The NOC and SOC teams monitor the infrastructure 24x7 for stability, intrusions and spam using a dedicated alert system. Every three months, end-to-end vulnerability assessments and penetration tests are performed. The KTern application has an in-built spam protection system for businesses that use it, while the NOC team monitors and blocks individual accounts and IP addresses which attempt to access the KTern applications.
<br>

## Regulatory Compliance

All formal processes and security standards at KTern are designed to meet regulations at the industry, state, federal and international levels. KTern adheres to strict data security, access, integrity policies, among other principles defined in the safe harbor framework. We implement the industry standard security, technical, physical and administrative measures against unauthorized processing of such information and against loss, destruction of, or damage to, personal information as more fully described in KTern <b><a target="_blank" style = "color: #9d0102" href="https://www.ktern.com/privacy-policy?utm_source=product-documentation&utm_medium=help-ktern-com">Privacy Page</a></b>.
<br>

For information regarding our GDPR Compliance refer to this <b><a target="_blank" style = "color: #9d0102" href="https://ktern.com/gdpr-compliance?utm_source=product-documentation&utm_medium=help-ktern-com">link</a></b>.

## Reporting Issues & Threats

At KTern, we take the protection of our customer's data very seriously. If you have found any issues or flaws impacting the data security or privacy of KTern users, please write to info@ktern.com with the relevant information so we can get working on it right away.
<br>

We ask that you do not share or publicize an unresolved vulnerability with/to third parties. If you submit a vulnerability report, the KTern security team and associated development teams will use reasonable efforts to:

-  Respond in a timely manner, acknowledging receipt of your vulnerability report
-  Investigate the reported issue and provide an estimated time frame for addressing the vulnerability report. We might ask for your guidance in identifying or replicating the issue and understanding any means to resolving the threat right away
-  Notify you when the vulnerability has been fixed

## Get in touch with us

If you have any questions or doubts, feel free to get in touch with us at info@ktern.com, and we’ll get back to you right away.
