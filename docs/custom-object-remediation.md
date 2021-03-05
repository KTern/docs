---
id: custom-object-remediation
title: Custom Object Remediation
sidebar_label: Custom Object Remediation
---

Custom Code Remediation is the most crucial and the most time-consuming activity in an S/4HANA system conversion project. It can make or break your Digital Transformation project itself. Hence, it is essential to get it right.

KTern stores the results of the SAP Custom Code Impact Analysis from the Assessment phase in the Custom Code Catalog. You can also auto-import the custom objects to perform the initial analysis. Once you have this list, you can start the SAP custom code remediation during the Explore phase.

## Custom Object Wizard

Each custom object object and program has its own Custom Code information wizard. The Information Wizard further has three tabs:

1. Custom Code Center
2. Custom Code Lab
3. AI-powered Remediation Engine

## Custom Code Center

KTern provides the basic information on each custom program in the custom code center. It consists of the following basic information:

1. Impact and Optimization score
2. Security Score
3. Usage Frequency and Priority
4. Module to which the custom code belongs
5. Custom Code type
6. References and relevant discussions

In addition, the ABAP lead or the Project Manager can assign these custom codes to relevant ABAPERs (stakeholders) to perform the remediation from the Custom Code Center itself. The stakeholders can also upload files and have discussions. In short, the custom code center provides a 360-degree view on a custom program and provides a platform to collaborate seamlessly with the other project stakeholders.

![](https://storage.googleapis.com/ktern-docs-files/remediation-1.png)

## Remediation Engine

KTern’s AI-powered auto-recommendation engine provides the technical consultants with a list of remediation recommendations. Based on their assent, they can auto-remediate the code by just clicking on the auto-remediate button. The code will then be pushed into the SAP system and is recorded as a transport request.

In addition, KTern also provides the option of remediating many custom programs in one go. This can be done using the Bulk Remediation option. You just have to choose the custom programs which you wish to remediate and click on the Bulk Remediation button. As simple as that.

## Code Editor

This is the ABAP code editor, where the ABAPERs and technical consultants can manually remediate the code and push the code to the Transport Request. If the technical consultants want to make additional changes, in addition to those by KTern itself, they can do so from the code editor itself.

![](https://storage.googleapis.com/ktern-docs-files/code-editor.png)

## Benefits

As discussed so far, KTern can be used in the entire lifecycle of custom code remediation – starting from custom code analysis, custom code remediation to custom code optimization. Few of the key benefits of using KTern for custom code remediation include:

1. Reduction in:

   1. Development effort for functional (mandatory) adaptations
   2. Development effort for performance adaptations
   3. Project cost tied to custom code adaptations
   4. Number of custom code violations

2. Complete ownership of custom ABAP remediation project
3. Automated code fixes eliminating the risks of new errors being introduced by manual modifications
4. Articulation of impacted application areas using interactive dashboards
5. Improved application performance by remediating SQL statements
6. Enhanced application stability
7. Complete project management and governance
8. Reduction in effort and resource utilization
