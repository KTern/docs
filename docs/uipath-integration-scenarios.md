---
id: uipath-integration-scenarios
title: UIPath Integration Scenarios
sidebar_label: UIPath Integration Scenarios
---

# Generate App ID and App Secret

In the UIPath Cloud Portal, Go to Admin / External Applications.

1. Click on **Add Application**
   ![Add Application](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.1%20.png 'Add Application')
2. Fill in the required information : App Name, App Type [Confidential Application]
   ![Fill Required Fields](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.2.png 'Fill Required Fields')
3. Edit Resource and Scope
   ![Edit Resource and Scope](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.3.png 'Edit Resource and Scope')
4. **Resource** : TestManager
5. **Scopes** : 'TM.TestCases TM.Requirements TM.Projects TM.TestSets'
6. Maintain the redirect URL as https://cloud.uipath.com/identity_/connect/token
   ![Add Redirect URL](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.4.png 'Add Redirect URL')
7. Click Add

The Created application contains **App ID** and **App Secret** need for the integration between KTern and UIPath

# Integrate UIPath and KTern

Now head to KTern.AI, Project Settings -> Integrations.

1. Select UIPath
2. Choose Scenario : Change Impact Analysis
3. Fill in the required fields
4. Paste the App ID and App Secret generated in the UIPath External Application
5. Choose the required UIPath Project
6. Complete the UIPath Integration.
