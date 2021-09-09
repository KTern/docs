---
id: UiPath-integration-scenarios
title: UiPath Integration Scenarios
sidebar_label: UiPath Integration Scenarios
---

# Generate App ID and App Secret

In the UiPath Cloud Portal, Go to Admin / External Applications.

1. Click on **Add Application**
   ![Add Application](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.1%20.png 'Add Application')
2. Fill in the required information : App Name, App Type [Confidential Application]
   ![Fill Required Fields](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.2.png 'Fill Required Fields')
3. Edit Resource and Scope
   ![Edit Resource and Scope](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.3.png 'Edit Resource and Scope')
4. **Resource** : TestManager
5. **Scopes** : 'TM.TestCases TM.Requirements TM.Projects TM.TestSets'
6. Maintain the redirect URL as https://cloud.UiPath.com/identity_/connect/token
   ![Add Redirect URL](https://storage.googleapis.com/ktern-public-files/product-documentation/aeri%201.4.png 'Add Redirect URL')
7. Click Add

The Created application contains **App ID** and **App Secret** need for the integration between KTern and UiPath

# Integrate UiPath and KTern

Now head to KTern.AI, Project Settings -> Integrations.

1. Select UiPath
2. Choose Scenario : Change Impact Analysis
3. Fill in the required fields
4. Paste the App ID and App Secret generated in the UiPath External Application
5. Choose the required UiPath Project
6. Complete the UiPath Integration.
