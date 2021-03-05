---
id: create-issue
title: Create an Issue
sidebar_label: Create an Issue
---

To create a task in KTern.AI, perform the following operation:

1. If you are logged in within a Project, you can see a plus icon on the top bar as shown below:

   ![](https://storage.googleapis.com/ktern-docs-files/create-issue-1.png)

2. Clicking on the plus icon, you will get the list of work item options – Task, Issue, Test Case and Event. Click on Issue option.

   ![](https://storage.googleapis.com/ktern-docs-files/create-issue-2.png)

3. Clicking on ‘Issue’ option, the drawer will be opened to create a task as shown below:

   ![](https://storage.googleapis.com/ktern-docs-files/create-issue-3.png)

4. You can see three tabs in the ‘Create New Issue’ drawer. They are overview, stakeholder information and Planned vs Actual.

5. ### Overview tab

   1. **Issue title:** Enter an issue title. Task title can be short limited to 50 characters and non-ambiguous. This field is mandatory.

   2. **Description:** You can explain about the issue in detail. This field is mandatory for issue.

   3. **Status:** Select the status of the issue
      1. **New:** if the issue is new and about to start
      2. **Active:** if the issue activity is started and processing
      3. **Completed:** if the issue is resolved.
      4. **Approved:** if the issue is approved by the respective stakeholder. This field will be displayed based on the Project configuration (if you have enabled ‘work items to be approved by the stakeholder).
   4. **Issue type:** Choose the issue type from the options – Data, configuration, Development, Custom Code, Others. This field is optional. You can select multiple options.

   5. **Raised to Issue:** If the issue is escalated to SAP for resolving, select Yes. This field is not mandatory. If selected, you need to enter the incident number of the issue raised to SAP in SAP Partner Launchpad.

   6. **Issue Source:** Choose the issue source:
      1. **General:** if the issue is created manually
      2. **Defect captured from testing:** if the issue is created during testing. If any test is failed, it will be captured as defect.
   7. **Risk Link:** If you need to link this issue with the risk created in the risk register of Project control center, you can select the risk from the options provided.

   8. **Parent Name:** Choose the Parent name under which this new issue is to be linked up with. You can search for the Task ID / Task title. Since KTern.AI follows strict Activate methodology, you require to link the new task with any of the activate tasks.

   9. **Priority:** Choose the priority of the issue. This field is mandatory. We recommend choosing options based on the following scenarios:
      1. **Least:** If the issue is ambiguous
      2. **Low:** If the issue is unimportant, non-ambiguous and not urgent
      3. **Medium:** If the issue is important and not urgent
      4. **High:** If the issue is unimportant and urgent
      5. **Critical:** If the issue is both important and urgent

6. ### Stakeholder Information

   1. On selecting the stakeholder information tab, you can see the following screen:

      ![](https://storage.googleapis.com/ktern-docs-files/create-issue-4.png)

   2. Choose the main stakeholder who is responsible for the task completion using **‘Assigned to’** option.

   3. You can also select the other stakeholders who can contribute to completing this task using **‘Participants’** options. You can select multiple participants.

7. ### Planned vs Actual

   1. On selecting the Planned vs Actual tab, you can see as shown below:

      ![](https://storage.googleapis.com/ktern-docs-files/create-issue-5.png)

   2. Select the **planned start date** of the task. This field is mandatory.

   3. Only is the planned start date is selected, the **planned end date** field will be enabled. This field is also mandatory.

8. On filling the fields, the Submit button on the top right corner will be enabled. You can click on Submit button to create a new task.

9. If the task is created successfully, you can see the success toaster message.
