---
id: connecting-to-sap-system
title: Connecting to the SAP System
sidebar_label: Connecting to the SAP System
---

To connect KTern with your SAP System, you should be within a Project. Look into previous section to create a project in KTern if you have no projects created.

1.	If you are logged into a Project, you will see a sidebar like below shown:
    
    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-1.png)

2.	In the sidebar, click on Landscape Management menu.

3.	You will be taken to Landscape Management screen. On the top right corner, you will find ‘Add new System’ button as shown below:

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-2.png)
    
4. First, you need to register your SAP system details in KTern.AI before connecting it to your SAP System. Click on ‘Add new system’ button. Clicking on that button, a popover form opens as shown below: 

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-3.png)

5.	In the popover form, you can create new system by performing the following operations:
    1.	**Type:** This field is mandatory. The options are SBX (Sandbox), DEV (Development), Quality (QAS), PRE-PRD (Pre-Production) and PRD (Production). Select the type of landscape in which the new system is to be associated.
    2.	**SAP System:** This field is mandatory. Select the new system to be created is either SAP ECC or SAP S/4HANA.
    3.	**System ID:** System ID is synonymous field which you add in SAP GUI Connection details. System ID is the unique identification code of the SAP installation.
    4.	**Application Server:** Application Server is the synonymous field which you add when you create a new connection in SAP GUI. Application server is the server name that was provided by the System Administrator.
    5.	**Instance:** Instance is the synonymous field which you add when you create a new connection in SAP GUI. Instance is a two-digit number since one SAP System can have different instances.
    6.	**Client:** Add client number to the system created.

6. On adding the above information, click on ‘Submit’ button. On successful submission, the new system will be added in Landscape management screen as shown below:
    
    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-4.png)
    
7.	You can see the list of systems created under each environment (SBX, DEV, QAS, PRE-PRD, PRD) as shown above. Hence, you have created a new system in KTern.AI successfully. Now, we need to connect the system created in KTern with your respective SAP System.

8.	To connect to your SAP System, you need to download KTern connector. You can access KTern connector in the same landscape management screen at the top left corner as shown below:

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-5.png)
    
9. KTern connector is an executable file which can be extracted and ran on a Windows system (v 10). Now let us see how to use KTern connector for getting connected with the SAP System.

10.	In order to ensure client-side connectivity with the SAP ECC & SAP S/4HANA systems, the 'KTern On-Premise Connector' is provided. **Please follow the 10-STEP procedure below to get started in 10-MINUTES:**
    1.	Click 'Download KTern Connector' and save it in a preferable location on your desktop/laptop.
    2.	Unzip the downloaded 'KTern.zip' file.
    3.	Open the 'KTern On Premise Connector.exe' application.
    4.	Kindly wait for few seconds for the app to launch and settle down in the taskbar system tray. At next, you can continue to use the KTern web application.
    5.	In web app, add a system in 'Landscape Management' by clicking on '+ New system' and enter with the required details.
    6.	Please note the following considerations:
        - Kindly ensure you are in the SAP client network (or) get connected to the corresponding network through 'Remote Access VPN or Site-to-Site VPN'.
        - Port 33xx must be accessible in client network as it is the default SAP Gateway port (where xx relates to the Instance number of SAP system, SAP Ports reference: https://help.sap.com/viewer/ports).
        - If translation of IP addresses is carried out using NAT, kindly refer to the SAP Note 148832 for further instructions.
        - The user must have authorization for RFC communication.
        - Wi-fi/LAN network bandwidth and stability must be ensured.
    7. Click 'Connect' for connecting onto the respective system.
    
        ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-6.png)
        
    8. Enter the username & password of the respective system. Click 'Submit' and hold on for few seconds for the result.
    
        ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-7.png)
        
    9. If connection is established, the system status will turn 'Connected' with the success message. If not, an error message will be displayed and please check the above instructions to try connecting once again. **If system connected, the system card looks like:** 
    
        ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-8.png)
        
        **If system is not connected, the system card looks like:**
    
        ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-9.png)
    
10.	You can now execute the KTern automated activities, thanks to the seamless experience offered by KTern for system connectivity.

*Kindly get in touch with our Customer Success Executive for any support or reach out to us at info@ktern.com*

11.	You can view the system information on clicking ‘info’ icon present at the top left corner of the respective System card as shown below:

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-10.png)

12.	You can also disconnect system by clicking on ‘Disconnect’ icon present at the top right corner of the System card as shown below:

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-11.png)

13.	On clicking, Ok button the system will be disconnected successfully.

14.	The data store in secure Cloud Platform is represented in the below diagram.

    ![](https://storage.googleapis.com/ktern-docs-files/sap-connection-12.png)




    


