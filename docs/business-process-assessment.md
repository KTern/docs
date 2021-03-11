---
id: business-process-assessment
title: Business Process Assessment
sidebar_label: Business Process Assessment
---

Without a proper understanding of the landscape and the knowledge of how each of the processes is getting affected, it is literally impossible to build a proper digital transformation plan. That is why KTern performs the Business Process Assessment.

## Process Profiler

KTern performs a materiality analysis of all the Functional Modules or the Lines of Business (LoBs) present in the system and finds out how they have been configured in the existing system

![](https://storage.googleapis.com/ktern-docs-files/bpa-1.png)

This will help you to find out the heavily used modules and the rarely used modules in the existing Landscape as KTern gives a percentage relevancy based on the usage. Not only that, KTern identifies the key stakeholders / users associated with each module and the sub-processes present under each Line of Business.

![](https://storage.googleapis.com/ktern-docs-files/bpa-2.png)

## Enterprise Structure Mining

In most SAP S/4HANA assessments, as the first step, organizations aim to find out the enterprise structure in SAP and drill down the hierarchy of each functional module. They find out answers to questions like - What is the type of the system? What is the orientation of the SAP system? How and who uses the system? What is the most effectively used process? How many company codes are there in the system? What are the most effectively used sales organizations / purchase organizations? And much more.

KTern’s Enterprise Structure Mining – Sales documents feature drills down the various organizational units. It drills down from company codes, sales organizations, distribution channels, plants and all the way up to the sales documents generated. In this way, KTern provides a clear hierarchy and evidently maps the organizational structure. Similarly, KTern also performs the same for purchase documents, billing and order documents as well.

### Enterprise Structure in SD

Each module in SAP has its own enterprise structure. An Enterprise Structure in SAP is nothing but the framework or structure according to which the whole business runs. And every organization has or at least should have some structure. There are several organizational units within an enterprise structure.

An enterprise structure in SAP clearly defines the numerous levels in an organization. Each level has a distinct functionality associated with it, and the levels are categorized according to some hierarchy. The levels, when combined, describe the working of an organization. The Sales and Distribution module in SAP has the following organizational units:

1. Sales Organization
2. Distribution Channel
3. Sales Office
4. Division
5. Sales Group
6. Company Code (maintained by Finance module)
7. Plant (maintained by MM module)
8. Storage location (maintained by PM module)
9. Sales Area

![](https://storage.googleapis.com/ktern-docs-files/bpa-3.png)

Typically, in most S/4HANA assessments, as the first step, organizations aim to find out the enterprise structure in SAP and drill down the hierarchy of each functional module. They find out answers to questions like - What is the type of the system? What is the orientation of the SAP system? How and who uses the system? What is the most effectively used process? How many company codes are there in the system? What are the most effectively used sales organizations? And much more.

Finding out answers to these questions is a very manual task. Many functional consultants are deployed for this purpose. The functional consultants then go through each T-Code, Table and Report to map the hierarchy of the enterprise structure in SAP and find out the complexity of the system. Sounds tiring, right? But this step is mandatory and cannot be skipped. Only after this step, you can proceed with the next step in the system conversion process.

With KTern, you can automate and find out the entire enterprise structure in SAP with just the click of a button. You can find the answers to the above crucial questions easily. This feature is in the Discover phase of the Activate Methodology and is covered in the Impact Analysis module of KTern.

![](https://storage.googleapis.com/ktern-docs-files/bpa-4.png)

As seen in the above picture, KTern’s Enterprise Structure Mining feature drills down the various organizational units. It drills down from company codes, sales organizations, distribution channels, plants and all the way up to the sales documents generated. In this way, KTern provides a clear hierarchy and evidently maps the organizational structure. The hierarchy of a sales organization is as follows:

**Company Code -> Sales Organization -> Distribution Channel -> Division -> Plant -> Number of Sales Documents Generated**

The functional consultants manually doing this task will definitely not be able to provide such clarity and accuracy in mapping the org structure. They have to go through each table, record and t-code to get this information. And even then, they will not be able to get the total picture. And, let’s not talk about the time required to complete the task. It may take several weeks or even months to complete it. KTern automates the task and provides the results in a span of few minutes.

![](https://storage.googleapis.com/ktern-docs-files/bpa-5.png)

Another important feature of KTern’s Enterprise Structure Mining is that you can sort and search the company codes, sales organizations, distribution channels, divisions, plants and the number of sales documents. This enables you to determine the most active company codes, sales organizations and so on. For example, if only two sales documents are generated for the past 5 years in one of the plants, then it can be inferred that that particular plant is not active. After taking a call with the business stakeholders, you need not move that particular plant to S/4HANA. You can gain such insights only when you have such detailed hierarchy and organizational mapping as provided by KTern. Such observations from KTern helps the functional consultants, business stakeholders from both the System Integrator side and the customer side, and the Solution Architects to have a clear picture of the landscape and take better data-driven decisions.

KTern also provides the option of downloading this report. In addition, you can also post it in the forum, assign stakeholders and collaborate. You can upload the files in KTern and subsequently use it any other stage of the system conversion process. Thus, KTern provides a platform to join forces and work together in determining the relevant enterprise structures in SAP and plan the path to S/4HANA.

### Enterprise Structure in MM

Each module in SAP has its own enterprise structure. An Enterprise Structure in SAP is nothing but the framework or structure according to which the whole business runs. And every organization has or at least should have some structure. There are several organizational units within an enterprise structure.

The Material Management (MM) module in SAP has the following organizational units:

1. Client
2. Company Code
3. Plant
4. Storage Location
5. Purchasing Organization
6. Purchasing Group

<!-- ![](https://storage.googleapis.com/ktern-docs-files/bpa-6.png) -->

#### Client:

From a business perspective, the client represents a corporate group. It is the highest hierarchical level in an SAP system. A client represents the highest node or hierarchy of an enterprise or organizational structure in SAP. Creation of a client in an SAP system is mandatory and a technical requirement. A client maintains several company codes within it. Data maintained at the client level is valid for all organizational levels.

#### Company Code:

A company code is created in the Finance (FI) module and it is linked to the Material Management (MM) module. The Company Code is an independent company. A company code, which is a legal entity and statutory requirement, maintains the balance sheets and P&L statements. In fact, the company code maintains all book of accounts.

#### Plant:

Plant in an SAP system is a broad term and has varying definitions in different modules. In SAP Material Management (MM) module, a plant refers to a facility where the material stock is kept, stored and the inventory is maintained. Activities within a company take place within a plant. A plant has a manufacturing facility, warehouse distribution center and a regional sales office.

#### Storage Location:

Storage location is an organizational unit, which actually differentiates between different material stocks in a plant. A storage location maintains the stock physically. A plant can have several storage locations. There are several types of storage location such as raw material storage location, finished goods storage location, return sales storage location, spares storage location, temperature-controlled storage location etc.

#### Purchasing Organization:

A purchasing organization is an organizational unit with SAP Material Management (MM), and it is responsible for all the purchasing activities within a company. It handles all the procurement activities and documentations such as Request for Quotations (RFQs), contracts, Purchase Orders (Pos) etc. A purchasing organization carries out all the procurement activities on behalf of the company. There are several types of purchasing organizations:

1. **Centralized Purchasing**
   A purchasing organization at the client level is called as centralized purchasing. For example, if a company has only one procurement department and it carries out all the procurement activities, then a centralized purchasing organization is created.
2. **Company-specific Purchasing:**
   In this case, a purchasing organization is assigned only to one company code. Only the plants belonging to this company code can procure and purchase through this purchasing organization.
3. **Plant specific Purchasing:**
   There are some cases where the size of the company is too large and having a centralized purchasing organization is not viable. Even company-specific purchasing organizations are too hard to handle. In such cases, each plant has a separate purchasing organization. These plant-specific purchasing organizations are responsible for the procurement of their own plant only.

#### Purchasing Group:

A purchasing group are individuals or group of individuals who are responsible for carrying out the purchasing activities. In other words, they are responsible for the everyday procurement activities of the organization. They are usually for reporting and approval procedures. They handle the Purchase Requisitions (PR), Request for Quotations (RFQs), Purchase Orders (POs), Contracts etc.

The main purpose of Enterprise Structure Mining before moving S/4HANA is to find out the relevant and active company codes, purchasing organizations, purchasing groups and the other organizational units. Most of these enterprise purchase organizations would have been modelled long back and the documentation might not be available today. The organizational units might have gone through several changes since the last update. And the ageing workforce of SAP does not make the situation any better.

It is necessary to give proper training and handover to the millennial workforce. However, with the disparate information and inconsistent documentation, it is not always possible. KTern can help you here by continuous monitoring and providing materiality of where the consultants should focus. Mostly this information or knowledge is with a privileged few or in the System Integrator's privy. KTern helps you to unearth the enterprise procurement and purchase structure and provide the information in an easy-to-consume format.

The findings from this tool, KTern, will help you determine the most useful/most used organizational units. Such insights can help you re-engineer your business process. Therefore, business stakeholders will have better clarity and make data-driven decisions with confidence.

![](https://storage.googleapis.com/ktern-docs-files/bpa-7.jpg)

As seen in the above picture, KTern’s Enterprise Structure Mining feature drills down the various organizational units. It drills down from company codes, purchasing organizations, purchasing groups, plant, storage location and all the way up to the number of purchase documents created. In this way, KTern provides a clear hierarchy and evidently maps the organizational structure. The hierarchy of a purchase organization is as follows:

**Company Code -> Purchasing Organization -> Purchasing Groups -> Plant -> Storage Location -> No. of Purchase Documents Created**

The functional consultants manually doing this task will definitely not be able to provide such clarity and accuracy in mapping the org structure. They have to go through each table, record and t-code to get this information. And even then, they will not be able to get the total picture. And, let’s not talk about the time required to complete the task. It may take several weeks or even months to complete it. KTern automates the task and provides the results in a span of a few minutes.

Another important feature of KTern’s Enterprise Structure Mining is that you can sort and search the company codes, purchasing organizations, purchasing groups, plant, storage location, and the number of purchase documents. This enables you to determine the most active company codes, purchasing organizations and so on. For example, if only two purchase documents are generated for the past 5 years in one of the plants, then it can be inferred that that particular plant is not active. After taking a call with the business stakeholders, you need not move that particular plant to S/4HANA.

You can gain such insights only when you have such detailed hierarchy and organizational mapping as provided by KTern. Such observations from KTern helps the MM functional consultants, business stakeholders from both the System Integrator side and the customer side, and the Solution Architects to have a clear picture of the landscape and take better data-driven decisions.

![](https://storage.googleapis.com/ktern-docs-files/bpa-8.jpg)

KTern also provides the option of downloading this report. In addition, you can also post it in the forum, assign stakeholders and collaborate. You can upload the files in KTern and subsequently use it any other stage of the system conversion process. Thus, KTern provides a platform to join forces and work together in determining the relevant enterprise structures in SAP and plan the path to S/4HANA.

One more important use case of this feature is that you that perform a pre-Go-Live check in a greenfield implementation. In a greenfield implementation, the customer usually provides the configuration requirement. The System Integrator then maps the enterprise structure according to the configuration and tests them accordingly. Enterprise Structure Mining feature of KTern can be used to audit the configured landscape. This allows the customer to Go-Live with the system without any apprehensions.

## Complexity Analysis

KTern also gives an analysis in terms of the Complexity of the system. It automatically finds out if the parameters like the New G/L, Special Purpose Ledger, Material Ledger, Multi-Currency model, Business Partners etc are active in the connected landscape.

![](https://storage.googleapis.com/ktern-docs-files/bpa-10.png)

## Simplification Item Check

The Simplification List describes the potential adaptation work that is required to convert your SAP ERP system to SAP S/4HANA at a functional level. Simplification list items (for short, Simplification Items) illustrate the business adaptation requirements and effects to custom developments for each function described. For more complex modifications, the Simplification Items provide the relevant guides to support your transformation.

The Simplification Item list is an essential early-stage tool used for planning an SAP S/4HANA Conversion project. Many necessary adaptations can be implemented on the existing SAP ERP source system itself. As a result, you will be able to begin an SAP S/4HANA Conversion Project even before installing the software in the first place. Consequently, the Simplification Item List is an essential source of information to organize crucial project tasks and assign the required resources.

### Components present in Simplification Item

A Simplification Item consists of the following elements:

1. **Business Impact Note**
   The Business Impact Note describes how that particular Simplification Item impacts the system as well as the business processes.
2. **Source Release and Target Release**
   The source and target release outline the basic relevant information; For instance, an item is said to be relevant if the customer comes from the source release and goes to the target release maintained in that Simplification Item.
3. **Check**
   Checks in a Simplification Item provides more relevant information like table checks for certain content, activated business functions etc. In addition, if a Simplification Item is relevant, you can also check the consistency. In other words, the check analyzes the prerequisite conditions in the system.

Typically, each Simplification Item consists of an SAP OSS Note. The OSS Note has the description and details on how to run that Simplification Item. You have to install the OSS Note into the system and run the Simplification Items Check. However, with KTern, you can automate the process of Simplification Item Check and it provides a comprehensive overview of all the relevant simplifications for SAP S/4HANA – that is, all mandatory solution adjustments in a system conversion project.

KTern covers the Simplification Item check in its Impact Analysis module. It is one of the preliminary and vital steps in a system conversion project and comes in the Discover phase itself. The Simplification Item check covers the relevancy of the Simplification Items in the target SAP S/4HANA system. This analysis, combined with the productivity and collaboration features of KTern such as forum, discussions and stakeholder management, forms a potent formula to get started with the SAP S/4HANA system conversion.

The forum provides a platform within KTern to collaborate, announce and have discussions regarding the simplification items and also assign them to the respective stakeholders. In addition, you can also upload files and track the work item hierarchy within KTern itself. Several useful Simplification Item links and references are also provided as part of the Knowledge Base called “S/4HANAPEDIA” within KTern.

KTern's Simplification Item check calculates the total number of Simplification Items in a system. It then classifies them into impacted and non-impacted Simplification Items. KTern also provides the status of each Simplification Item with SAP Note references. It also specifies why a particular Simplification Item is relevant or not relevant to your business.

![](https://storage.googleapis.com/ktern-docs-files/bpa-11.png)

Further, the impacted simplification items are classified based on the status as follows:

**Change of existing functionality**
Simplification items in this category refer to functions that are generally available in some form in SAP S/4HANA but have been adapted in such a way that might affect existing processes and custom programs.

**Functionality unavailable (equivalent exists)**
Simplification items in this category refer to functions that are not available in SAP S/4HANA. However, the equivalent functionality is available in SAP S/4HANA.

**Functionality unavailable (no equivalent)**
Simplification items in this category refer to functions that are not available in SAP S/4HANA. And, there is no equivalent functionality available. If you think that such impacted items are critical to your business, then it makes sense to wait until SAP releases that functionality and then make the move to S/4HANA.

**Non-Strategic Functions (equivalent exists)**
SAP has identified many of the existing core ECC modules/sub-modules/functionalities as "non-strategic" in S/4HANA. If current ECC-users or new businesses require these functionalities which are part of a "non-strategic module/functions" then they have to adopt the "strategic solution" as per S/4HANA roadmap. These "strategic-solutions" may or may not have its equivalent in S/4HANA. Generally, the non-strategic functions with equivalents can be classified into: oNew S/4HANA solutions part of extended S/4HANA product or oIn some cases, existing SAP products which are being enhanced/built for S/4HANA.

**Non-Strategic Functions (no equivalent):**
The Simplification Items where these "strategic-solutions" have no equivalent in S/4HANA are classified into this category.

## Business Function Analysis

SAP provides new features and enhancements for the existing SAP installations in self-contained units called business functions. You can use them for your various business processes. You can either switch on or switch off a business function. However, you cannot undo the activation of a business function.

For example, consider a certain business function to be part of an enhancement package. That business function can enable you to run your business better, but you don’t want to use all the functions of that enhancement package. Hence, you should install only the technical components required for that business function. After installation, you should activate only that particular business function.

KTern automates the process of analyzing business functions. After connecting the system, KTern runs the business functions analytics check and automatically classifies the installed business functions into active and inactive business functions. KTern also classifies the business functions into the following types:

**Enterprise Extensions:** These are the type of business functions which activate industry-independent and industry-specific applications and business processes.

**Enterprise Business Functions:** They can activate special features in SAP S/4HANA. They contain both industry-specific and industry-independent enterprise business functions.

**Industry Business Functions:** They contain functions specific to a particular industry and are part of the industry business function sets.

If one of your critical add-ons is not compatible with S/4HANA, then your entire business could be at risk. In such cases, you will have to wait for SAP’s roadmap to make that particular add-on compatible with S/4HANA. Only then, you can plan your transition from ECC to S/4HANA.

Before migrating to SAP S/4HANA, it is mandatory to assess the existing ECC landscape including your business processes, business functions, custom codes, architecture, and user interface. This enables you to take a data-driven approach to S/4HANA. KTern’s Business Function Analytics feature analyzes all the business functions installed in an ECC system in the Discover phase itself. It then classifies them into active and inactive business functions. The main objective of this feature is to analyze the impact of migrating these active business functions to S/4HANA. If any critical active business function is not compatible with S/4HANA, then you cannot migrate to S/4HANA. Business Function Analytics is part of the Impact Analysis module of KTern.

![](https://storage.googleapis.com/ktern-docs-files/bpa-12.png)

**Enterprise Extensions**
These are the type of business functions which activate industry-independent and industry-specific applications and business processes.

**Enterprise Business Functions**
They can activate special features in SAP S/4HANA. They contain both industry-specific and industry-independent enterprise business functions.

**Industry Business Functions**
They contain functions specific to a particular industry and are part of the industry business function sets.

After classifying the business functions into the above classifications, KTern also analyzes whether the business functions are compatible with S/4HANA or not. In addition, you can also sort and search the business functions according to the status, compatibility and types of business functions.

![](https://storage.googleapis.com/ktern-docs-files/bpa-13.jpg)

A business function in SAP ECC can have only two states, Active (ON) and Inactive (OFF). However, a business function usually has one of the following three states in S/4HANA:

1. Always ON
2. Always OFF
3. Customer Switchable

![](https://storage.googleapis.com/ktern-docs-files/bpa-14.png)

The above table indicates the various permutations and combinations with respect to the status of each business function. The following inferences can be made from the above table:

1. If a business function is switched on in your SAP ECC landscape, but the corresponding S/4HANA state is always OFF, then you cannot go for conversion. You will have to wait until SAP makes the business function compatible with S/4HANA or release a patch or have a look at the roadmap and then plan the transition.

2. If a business function is switched off in the ECC system, but the corresponding S/4HANA is always ON, then the conversion is possible and the business function will be switched on after the transition. You will have to assess the implications of such a business function being switched on in S/4HANA.

3. If the business function state in S/4HANA is customer switchable, then the conversion is possible and the state of the business function remains the same as before the transition, i.e these business functions keep their state after the conversion.

KTern makes this entire process simple by identifying the state of the business functions in SAP ECC and analyzing whether the functions are compatible with S/4HANA or not. With this information, the solution architects and the respective functional consultants can make the above inferences with ease.

## Training Recommendations

More often than not, we only focus on the day-to-day details and nuances of a system conversion project. We spend several months on the transformation project. In the meantime, we forget the actual people who are going to use the software after Go-Live. They are given just a few days of generic end-user training. But a complex project like S/4HANA conversion requires much more than that. It requires a mindset shift – from viewing a S/4HANA transformation as just a standard ERP upgrade to using it to succeed in the complex digital economy.

It is necessary to have all the end-users on board before the start of the implementation itself. You must train them right from the start and not keep them in the dark. This will help them appreciate the necessity of change. Once you convince the end-users and employees of how the change will make their lives simpler, the adoption, utilization and success of the new S/4HANA software will follow quickly.

Therefore, as the first step, KTern provides training scenario recommendations in the Discover phase of the Activate Methodology itself to help plan your transition and the change management better.

KTern’s Training Scenario Recommendations feature analyses the connected system. It automatically identifies the business processes which have undergone changes in S/4HANA. You must train the end-users to adopt these changes. KTern also identifies the relevant training scenarios along with the stakeholders who must be trained. This will enable the Project Managers to keep an eye on the training of the end-users and effectively govern the change management process.

The objective of the training scenario recommendations is to identify the enablement scope for end-user training. It involves the following steps:

1. Run the first assessment on the training requirements which arises from the SAP transition project
2. Gather information about the SAP S/4HANA system conversion project, and identify affected organizational units
3. Conduct interviews regarding training strategy elements
4. Identify training relevant user groups (Project Team, Key User, End User)
5. Evaluate the high-level enablement scope for End User Training

![](https://storage.googleapis.com/ktern-docs-files/bpa-15.png)

As seen in the above picture, KTern provides an analytical view of the number of training plans and the training scenarios. It also provides a distribution of the training scenarios by the respective modules. Hence, it gives a fair idea to the Project Managers about the most impacted modules and the most relevant modules for training.

KTern analyzes and documents the training requirements for the key users and end-users. KTern automatically provides the training scenarios for each module based on the impact of change in S/4HANA. It provides a clear description, status of each training scenario in S/4HANA, and the reference SAP Notes (which has all the changes with respect to that business process).

One of the most important features of KTern’s training scenario recommendation is that it identifies the key stakeholders of each business process. They are ranked based on their usage of each scenario. For example, all the MM consultants use Goods Withdrawal process of Material Management module. This functionality is unavailable in S/4HANA, but an equivalent exists. Hence, you must train the end-users to adopt the new process. KTern provides a list of all the users who use this process and ranks them hierarchically according to their usage. The consultant who uses this process/scenario the most receives Rank 1, the next user receives Rank 2 and so on. Hence, based on this analysis, you can design and execute a training plan in the subsequent phases of the project.

The stakeholders can then create a training event and assign it to the relevant functional and technical consultants. The training event will contain all the relevant training materials and documents for a particular scenario. Additionally, the stakeholders can also upload files and create CTA’s. Hence, they can monitor the training process throughout the duration of the system conversion project.

![](https://storage.googleapis.com/ktern-docs-files/bpa-16.png)

This initial enablement assessment is the analysis of learning and enablement related aspects of Digital Learning in general and with respect to your actual situation. The assessment helps to get an understanding of the general learning management situation, your enablement capabilities to support the digital transformation process and the alignment with the project scope and timeline. Based on the results of the training scenario recommendations, specific training management activities will be identified. KTern also provides recommendations to enable a successful enablement delivery. It is particularly relevant at the beginning of a project. Doing this analysis in the Discover phase itself helps the project managers to determine the timeline and effort required for training.

End-user training is a very manual process. All users are given generic training at the end of the project. But, with KTern, you can have a clear overview of who should be trained, when they should be trained and in what they should be trained. Even after the Go-Live of the system conversion project, users can undergo continuous training in the application itself. Hence, it saves a lot of time & effort and all the users are given relevant training only.

And, the best part is that no other contemporary product in the market offers Training Recommendations.

## Glimpses from the Business Process Assessment

### 1. Process Improvement

![](https://storage.googleapis.com/ktern-docs-files/bpa-17.png)

### 2. Optimized Process Suggestion

![](https://storage.googleapis.com/ktern-docs-files/bpa-18.png)

### 3. Process View

![](https://storage.googleapis.com/ktern-docs-files/bpa-19.png)

### 4. Process – Tree View

![](https://storage.googleapis.com/ktern-docs-files/bpa-20.png)
