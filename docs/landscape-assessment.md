---
id: landscape-assessment
title: Landscape Assessment
sidebar_label: Landscape Assessment
---

Landscape Assessment gives detailed information of the type of SAP system connected to KTern. It gives information such as the Database type, Operating System, ECC version, Processor type etc.

### Active vs Inactive Users

In the case of S/4HANA system conversion, you must analyse the existing SAP ERP users and their license types. KTern automates this process. It finds out the total number of SAP ERP users and also classifies them into active and inactive users based on their activity. As a result, this section gives you an analytical view of all the users present in the system and helps you make the right decision with respect license purchase before moving to S/4HANA

![](https://storage.googleapis.com/ktern-docs-files/landscape-1.png)

KTern also provides the below information about each and every particular user in the ECC system:

1. Name of the user
2. User type (Communication user, Dialog User or System User)
3. License type (Professional, Limited Professional, Test or ESS user)
4. Type of Admin user
5. System to which the User belongs
6. Last Login date of the User
7. User status (Active or Inactive

With the Archiving Recommendations feature, KTern automatically analyses the system and identifies the documents, tables and custom programs which can be archived. You can then archive these data to any other third-party storage databaseIn the case of S/4HANA system conversion, you must analyse the existing SAP ERP users and their license types. KTern automates this process. It finds out the total number of SAP ERP users and also classifies them into active and inactive users based on their activity. As a result, this section gives you an analytical view of all the users present in the system and helps you make the right decision with respect license purchase before moving to S/4HANA.

This feature of KTern is essentially used by the Project Managers and key stakeholders of the customer side. It enables them to have a thorough understanding of their ECC landscape and their licensing model. The main purpose of this feature is to determine the number and type of licenses you need to purchase before moving to S/4HANA. Doing this analysis before moving provides a significant advantage in planning your system conversion. That’s why this feature is included in the Discover phase itself.

A Digital Transformation project is not dependent only on data and process flows alone. One of the critical factors for the success of any Digital Transformation project is the active collaboration of the stakeholders. And, KTern provides a single platform where everyone can collaborate and have a clear view of the happenings of the project. KTern provides the option of downloading the user analysis report. You can sort and search this table by each column and perform the relevant analysis. In addition, you can also post it in the forum, assign stakeholders and collaborate.

![](https://storage.googleapis.com/ktern-docs-files/landscape-2.png)

### Add-on Analytics

Your transition from ECC to S/4HANA can stop in its tracks if there is an incompatible add-on. All add-ons must be certified in order to run on S/4HANA. For SAP’s own add-ons or the ones sold through SAP’s pricelist, you can directly request the status of add-ons and additional packages from SAP themselves. However, SAP is not responsible for the independent third-party add-ons.

KTern automates the process of add-on compatibility check during the SAP S/4HANA assessment and does not require the installation of any SAP Notes in the system. After connecting the system, KTern runs the check and automatically classifies the installed add-ons into compatible and incompatible add-ons.

![](https://storage.googleapis.com/ktern-docs-files/landscape-3.jpg)

#### Process of Add-on Analytics

1. First, you need to check the add-ons which are compatible and incompatible for the S/4HANA version you are targeting. The compatible add-ons can be migrated to S/4HANA without any trouble.
2. For incompatible add-ons, you must notify SAP or third-party vendors. Advance notification will enhance the chances of your add-ons certification in time for your implementation/ deployment.
3. You can contact third-party software vendors of incompatible add-ons and ask them to accelerate their certification process.
4. You can uninstall the add-ons which are not in use.

Add-on compatibility check is one of the most important and decisive features in KTern’s Impact Analysis module. It is part of the Discover phase in the SAP Activate methodology. KTern automates the process of add-on compatibility check. The main objective of this feature is to determine the add-ons incompatible with S/4HANA, and how it impacts the transition process.

KTern automates the process of add-on compatibility check and does not require the installation of any SAP Notes in the system. After connecting the system, KTern runs the check and automatically classifies the installed add-ons into compatible and incompatible add-ons. KTern also goes a step further and classifies the add-ons into three broad categories. They are:

1. Software components
2. Installed products
3. Correction packages

The add-on compatibility check is one of the most important pre-checks before the move to S/4HANA. You can safely migrate the compatible add-ons to S/4HANA. However, if one of your critical add-ons is not compatible with S/4HANA, then your entire business could be at risk. In such cases, you will have to wait for SAP’s roadmap to make that particular add-on compatible with S/4HANA. Only then, you can plan your transition from ECC to S/4HANA.

This add-on compatibility check is performed by the Basis consultants and the results are evaluated by the respective functional consultants. For example, in SAP ECC treasure management is part of the Finance (FI) module. But, in S/4HANA, it is a separate add-on and treasury management cannot function on its own. So, the finance consultants will evaluate this particular impact.

### Archiving Recommendations

With the Archiving Recommendations feature, KTern automatically analyses the system and identifies the documents, tables and custom programs which can be archived. You can then archive these data to any other third-party storage database.

![](https://storage.googleapis.com/ktern-docs-files/landscape-4.png)

SAP Data Archiving Process essentially involves three major steps:

1. Creating archive files
2. Running delete programs
3. Storing the archive file

KTern provides a detailed report on archiving recommendations. The results are as follows:

1. Documents archiving potential
2. Tables archiving potential
3. Custom programs archiving potential

![](https://storage.googleapis.com/ktern-docs-files/landscape-5.png)

#### Documents Archiving Potential

KTern determines the potential documents in an SAP ECC system that you can archive. All types of documents such as Material Ledger documents, change documents, purchase documents can be archived. Archiving documents means that you delete data from the database and archive it in the file system. You can then store the data from the file system in external archives. You can thereby relieve the burden on your database at regular intervals.

Archiving takes place in two steps. The first step is to write the data to an archive file in the file system. Then you delete the data from the database based on this archive. You can still access data that you have archived to the archive file in the file system. If you need the data on the database again (for example, because you have to make changes to it or because you archived it by mistake), you can also reload archives.

#### Table Archiving Potential

KTern determines which objects archive the data records from a specific table or enables you to display all the tables for a specific archiving object. You can also call various statistics for the amount of used database space.

![](https://storage.googleapis.com/ktern-docs-files/landscape-6.png)

#### Custom programs archiving potential

All Standard SAP tables have corresponding archiving objects that can be configured to perform archiving based on the required conditions and at specific time periods. Since the development of SAP objects generally involves the creation of custom Z-Tables there may arise a need for the creation of custom archiving objects for the newly created tables.

All archiving objects have the following reports linked to them to achieve end-to-end archiving.

1. **Write Program**– To create an archive file and write the database table entries into it based on the selection criteria specified in the variant
2. **Delete Program**– The Delete program is used to delete the records that are successfully archived and stored
3. **Reload Program**– The reload program is used to retrieve the data stored in the selected archive file and update the records back into the table
4. **Pre-Processing Program** – This program may contain some functionality to be carried out before data is archived and deleted from the database
5. **Post-Processing Program** – This program may contain some functionality to be carried out after data is archived and deleted from the database

Project Managers, Solution Architects and the key Stakeholders from the customer side use this feature predominantly. In some countries, it is mandatory to store 5 years of system data or 7 years of system data. The customer can decide to archive their data based on KTern’s archiving recommendations and their country’s legal compliance.

Moving to S/4HANA with minimal amount of data will not only ease the transition process but also reduce significant costs in the future.

### Interfaces Review

SAP Interfaces offer the possibility of connecting external systems to ECC. When you transition from ECC to S/4HANA, you are only changing the Digital Core. Hence, these interfaces should work in the same way as they were before. Therefore, KTern performs the Interface Review check to determine whether the connection to S/4HANA is compatible.

![](https://storage.googleapis.com/ktern-docs-files/landscape-7.png)

### Glimpses from the KTern.AI’s Landscape Assessment

#### 1. System Information

![](https://storage.googleapis.com/ktern-docs-files/landscape-8.png)

#### 2. Database Size

![](https://storage.googleapis.com/ktern-docs-files/landscape-9.png)

#### 3. Landscape Client Information

![](https://storage.googleapis.com/ktern-docs-files/landscape-10.png)

#### 4. User types to be license

![](https://storage.googleapis.com/ktern-docs-files/landscape-11.png)
