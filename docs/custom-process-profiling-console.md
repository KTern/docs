---
id: custom-process-profiling-console
title: Custom Process Profiling Console
sidebar_label: Custom Process Profiling Console
---

Analytical wizards for custom process profiling by objects, stakeholders, application, scope of optimization, impact and custom to standard process adaptation insights in S/4HANA.

KTern helps the users generate a list of findings where the custom code does not comply with the scope and data structure of SAP S/4HANA. Also used in the management of WRICEF objects and tracking to adapt customizations for business.

## Custom Code Adaptation

The custom code related process basically consists of two major phases:

### Before SAP S/4HANA system conversion:

During the assessment and preparation phase of the conversion, you can assess your system and get rid of the unused custom codes and objects. You can also determine the custom codes which should be adapted to S/4HANA in this stage.

### During the SAP S/4HANA system conversion:

During the realize phase of the system conversion, you must adapt or remediate your custom code to suit the new SAP S/4HANA software. You must also optimize the code performance for the HANA database.

Let’s see how KTern automates the SAP custom code impact analysis process and provides actionable insights to plan your SAP S/4HANA system conversion. KTern performs this action in the Discover phase of the Activate Methodology and it is part of the Impact Analysis module.

## Custom Code Impact

KTern is an all-in-one product suite built for SAP Digital Transformations. With decades worth of SAP Tribal knowledge combined with automation, governance and collaboration capabilities, KTern is built to help the existing ECC customers migrate to S/4HANA. KTern covers the entire lifecycle and guides you before, during and after the conversion. Its inbuilt S/4HANAPEDIA rule engine combined with several modules eases the transition from SAP ECC to SAP S/4HANA.

Using the custom code impact analysis feature of KTern, you can assess and analyze the syntactical change impact of all the custom Z tables, Z programs, and Z objects. It is a pre-requisite to check the impact on the standard SAP code and the custom code before moving to S/4HANA. Without completing this step, you cannot proceed further in the system conversion process.

### Example:

One of the simple examples of the impact of custom code in S/4HANA is the material length field extension from 18 to 40. So, what is the impact of this field length extension? If the custom-developed material numbers of 18-character length are used along with the new material number of 40-character length, then one of the following will happen:

1. Data may be lost while moving the material number from 18 to 40 characters
2. Type conflicts may occur if the material number field is passed as a parameter to a program
3. Length conflicts at comparison with SAP material number
4. Length conflicts at concatenation with SAP material number

In all the above cases, the custom code is incompatible. You must modify and redefine your custom material number and code to the new S/4HANA material number type.

This is just one example. Similarly, there are several changes and simplifications that occur while moving to S/4HANA. There may be changes in the field type, field length and tables. Also, some fields or tables may have been removed altogether, some tables may have been merged etc. It is necessary to determine the amount and impact of such changes before moving to S/4HANA. Later, during the actual conversion, you must remediate the custom code so that it is compatible with S/4HANA.

In case of an SAP S/4HANA system conversion, you must analyze the existing custom code with respect to SAP S/4HANA readiness, and of course with respect to business needs and requirements.

KTern automates the process of SAP custom code impact analysis. As a result, this section gives you an analytical view of the custom code present in an SAP ECC system. After connecting an ECC system, KTern runs the custom code impact analytics check and analyzes the custom programs and objects present in a system.

KTern helps you generate a list of findings where your custom code does not comply with the scope and data structure of SAP S/4HANA. It also helps in estimating the effort required for custom code adaptation.

![](https://storage.googleapis.com/ktern-docs-files/custom-process-1.png)

The key activities that can be performed using KTern with respect to the custom code are:

1. Identification of affected custom objects
2. Scope definition of custom code migration
3. Define which custom code needs to be taken to S/4HANA
4. Define usage frequency
5. Custom code analysis parameters
6. Syntactically incompatible change of existing functionality
7. Functionality not available but functional equivalent available
8. Functionality not available
9. Change of existing functionality with a performance impact

## Custom Code Dashboard

The custom code dashboard then gives an overview of the custom objects present in the connected SAP system. The analytics dashboard depicts the following KPIs.

1. Custom code impact level
2. Number of custom objects
3. Number of impacted custom objects
4. Custom objects by remediation types (simplified objects, S/4HANA syntax errors, database operations, critical statements, field length extensions, SELECT without ORDERBY)
5. Impact score of each custom object

KTern’s AI-powered rule engine automatically calculates the impact score of a custom program based on its analysis parameters and the number of impact cases. For example, if the custom program has many impact cases and its equivalent functionality is not available in S/4HANA, then it is given a high impact score.

![](https://storage.googleapis.com/ktern-docs-files/custom-process-2.png)

The Custom Code Dashboard also provides a chart depicting a usage vs impact score of the custom objects. This helps in prioritizing the high impact code with high frequency of usage. You can eliminate the low usage custom programs and objects after taking a call with the business stakeholders.

![](https://storage.googleapis.com/ktern-docs-files/custom-process-3.png)

## Custom Object Information

KTern provides the basic information on each custom program and object in the custom code information wizard. It consists of the following basic information:

1. Impact and Optimization score
2. Security Score
3. Usage Frequency and Priority
4. Stakeholders
5. References and relevant discussions

![](https://storage.googleapis.com/ktern-docs-files/custom-process-4.png)
