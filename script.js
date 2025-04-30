// Dữ liệu câu hỏi
const quizData = [
    // CAD(2023_1)
    {
        question:
            "Which of the following applies to a table where the [Allow configuration] application access option is selected?",
        type: "single",
        options: [
            "Out-of-scope applications can create business rules for the table",
            "Only scripts from in-scope applications can create business rules for the table",
            "Out-of-scope applications can add new tables to a scoped application",
            "All users with the application's user role can modify the application's scripts",
        ],
        correct: [0],
        explanation:
            "When the [Allow configuration] application access option is selected, out-of-scope applications can create business rules for the table.",
    },
    {
        question:
            "What record is used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted Caller Access Record",
            "Caller Tracking Record",
            "Access Control Level Record",
            "Cross-Scope Access Record",
        ],
        correct: [0],
        explanation:
            "Restricted Caller Access Records are used to track cross-scope applications or scripts requesting access to an application, resource, or event.",
    },
    {
        question: "Which of the following is NOT a UI action type?",
        type: "single",
        options: ["List Choice", "Form Choice", "List Banner Button", "Form Button"],
        correct: [1],
        explanation: "Form Choice is not a valid UI action type in ServiceNow.",
    },
    {
        question:
            "What is the benefit of storing the majority of an application's server-side script logic in a Script Include?",
        type: "multiple",
        options: [
            "It allows for faster execution.",
            "It executes only when called from a script.",
            "When installing an application from the ServiceNow Store, the script logic can be hidden.",
            "For some changes to application logic, there is only one place to make edits.",
        ],
        correct: [1, 2, 3],
        explanation:
            "Storing server-side script logic in a Script Include allows execution only when called, hides logic in the ServiceNow Store, and centralizes edits.",
    },
    {
        question:
            "When creating a Utils Script Include, there is a basic strategy. Identify the step that does not belong.",
        type: "single",
        options: [
            "Create a class",
            "Create a prototype object from the new class",
            "Identify a table",
            "Script the functions",
        ],
        correct: [2],
        explanation:
            "Identifying a table is not part of the strategy for creating a Utils Script Include.",
    },

    // CAD(2024_1)
    {
        question:
            "Which of the following applies to a table with the Allow Configuration application access option selected?",
        type: "single",
        options: [
            "Only scripts from applications in the same scope can create business rules for the table",
            "All users with the application’s user role can modify the application’s scripts",
            "Applications outside the scope can create business rules for the table",
            "Applications outside the scope can add new tables to the scoped application",
        ],
        correct: [2],
        explanation:
            "Applications outside the scope can create business rules for a table with the Allow Configuration option selected.",
    },
    {
        question: "What is the purpose of the Application Picker?",
        type: "single",
        options: [
            "Select the application to execute",
            "Select an application as a favorite in the Application Navigator",
            "Select the application to edit and set the application scope",
            "Select the application to download and install",
        ],
        correct: [3],
        explanation:
            "The Application Picker is used to select the application to download and install.",
    },
    {
        question: "Which of the following is NOT an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation: "Caller Permission is not an option for the Caller Access field.",
    },
    {
        question:
            "Access control debug information identifies whether each access control element granted or denied access. Elements are displayed in the debug information in the order they are evaluated. In which order are access control elements evaluated?",
        type: "single",
        options: [
            "Condition, Role, Script",
            "Condition, Script, Role",
            "Role, Condition, Script",
            "Script, Condition, Role",
        ],
        correct: [2],
        explanation:
            "Access control elements are evaluated in the order of Role, Condition, Script.",
    },
    {
        question:
            "When creating a new application, what is the benefit of extending an existing table, such as the Task table?",
        type: "single",
        options: ["a, b, c, and d", "a and b", "b and c", "a, b, c"],
        correct: [3],
        explanation:
            "Extending an existing table allows reusing existing fields by changing labels, using fields without modification, and automatically applying parent table logic.",
    },
    {
        question:
            "Which of the following is correct about the Application Picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the Application Picker does not set the application scope",
            "Selecting global in the Application Picker sets the application scope to Incident",
            "Global is a reserved application that does not appear in the Application Picker",
            "Selecting an application from the Application Picker sets the application scope",
        ],
        correct: [3],
        explanation:
            "Selecting an application from the Application Picker sets the application scope.",
    },



    // CAD(20242_2)
    {
        question:
            "Which of the following GuideRecord methods execute a query against a database table?",
        type: "multiple",
        options: ["-query()", "runQuery()", "query()", "-get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "The GuideRecord methods -query(), query(), and get() execute queries against a database table. runQuery() and -get() are not valid methods for this purpose.",
    },
    {
        question: "Which class is not part of the client-side scoped API?",
        type: "single",
        options: ["GuideDialogWindow", "GuideAjax", "GuideRecord", "GuideForm"],
        correct: [2],
        explanation:
            "GuideRecord is not part of the client-side scoped API; the others are valid classes.",
    },
    {
        question:
            "Which of the following is not a method for installing an application on a ServiceNow instance?",
        type: "single",
        options: [
            "Install the application from the Application Repository",
            "Select the Copy button on the application record",
            "Download and install the application from the ServiceNow Share website",
            "Download and install a third-party application from the ServiceNow Store",
        ],
        correct: [1],
        explanation:
            "Selecting the Copy button on an application record is not a method for installing an application.",
    },

    // CAD(2024_3)
    {
        question:
            "What is the benefit of extending an existing table, such as the Task table, when creating a new application?",
        type: "single",
        options: ["a, b, c, and d", "a and b", "b and c", "a, b, c"],
        correct: [0],
        explanation:
            "Extending a table allows reusing fields (with or without label changes), inheriting logic, and copying parent records.",
    },

    // CAD(2024_4)
    {
        question:
            "A scoped application containing Flow Designer content dedicated to a specific application is called a(n):",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A Spoke is a scoped application with Flow Designer content for a specific purpose. Reference: ServiceNow Flow Designer Documentation",
    },
    {
        question:
            "When ready to share an application, which of the following publishing methods are supported in ServiceNow? (Select three.)",
        type: "multiple",
        options: [
            "Publish to an application repository",
            "Publish to a spreadsheet",
            "Publish to a local USB device",
            "Publish to a local drive",
            "Publish to an update set",
            "Publish to the ServiceNow Store",
        ],
        correct: [0, 4, 5],
        explanation:
            "Supported methods include publishing to an application repository, update set, or the ServiceNow Store. Reference: ServiceNow Application Publishing Documentation",
    },

    // CAD(2024_5)
    {
        question: "Which of the following are configured in email notifications?",
        type: "single",
        options: ["a, b, c", "a, b, and d", "b, c, d", "a, c, d"],
        correct: [0],
        explanation:
            "Email notification configuration includes multiple aspects. Reference: ServiceNow Documentation on Email Notifications",
    },
    {
        question: "Which of the following extend the value of ServiceNow?",
        type: "single",
        options: ["a, b, c", "a, b, c, d", "b, c, d", "a, b, d"],
        correct: [3],
        explanation:
            "ServiceNow’s value is extended through specific actions. Reference: ServiceNow Documentation on Platform Value",
    },
    {
        question: "What is a workflow context?",
        type: "single",
        options: [
            "A workflow that is checked out and being edited",
            "A workflow version that is generated, executes activities, and follows transitions",
            "A condition added to the table where the workflow is defined, such as 'active is true'",
            "The business reason or process for which the workflow was designed",
        ],
        correct: [1],
        explanation:
            "Workflow context is a runtime concept. Reference: ServiceNow Documentation on Workflows",
    },
    {
        question: "Which object can be used in an inbound action script?",
        type: "single",
        options: [
            "current and previous",
            "current and email",
            "current and event",
            "current and producer",
        ],
        correct: [1],
        explanation:
            "Inbound action scripts use specific objects. Reference: ServiceNow Documentation on Inbound Actions",
    },
    {
        question:
            "If the [Can read] configuration field is not selected, which Application Access configuration field is unavailable?",
        type: "single",
        options: [
            "All access to this table via web services",
            "Can create, update, delete",
            "Can read does not affect the availability of other Application Access fields",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "Application Access fields are interdependent. Reference: ServiceNow Documentation on Application Access",
    },
    {
        question: "Which steps can be used to import new data from a spreadsheet into ServiceNow?",
        type: "single",
        options: [
            "Select data source, schedule transform",
            "Load data, create transform map, run the most voted transform",
            "Define data source, select transform map, run transform",
            "Select import set, select transform map, run transform",
        ],
        correct: [1],
        explanation:
            "Data import follows a specific process. Reference: ServiceNow Documentation on Import Sets",
    },
    {
        question: "A module requires a link type. Which of the following are link types?",
        type: "single",
        options: [
            "Assessment, List of Records, Content Page, Roles",
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from arguments:)",
        ],
        correct: [2],
        explanation:
            "Module link types are specific. Reference: ServiceNow Documentation on Modules",
    },



    // CAD(2025_1)
    {
        question: "Which object can be used in an inbound action script?",
        type: "single",
        options: [
            "current and previous",
            "current and email",
            "current and event",
            "current and producer",
        ],
        correct: [1],
        explanation:
            "The current and email objects are available for use in inbound action scripts.",
    },
    {
        question:
            "In which part of the ServiceNow instance is there an option to impersonate a user?",
        type: "single",
        options: ["User Menu", "Application Navigator", "Module", "Content Frame"],
        correct: [0],
        explanation: "The option to impersonate a user is available in the User Menu.",
    },
    {
        question:
            "Which ServiceNow feature provides assistance to help users retrieve information, make decisions, and perform common work tasks via a messaging interface?",
        type: "single",
        options: [
            "Agent Workspace",
            "Virtual Agent",
            "Knowledge Chat",
            "ServiceNow Messenger",
            "Support Start",
        ],
        correct: [3],
        explanation:
            "ServiceNow Messenger provides assistance via a messaging interface for user tasks.",
    },
    {
        question:
            "Assume a table exists with three fields (field1, field2, field3). Examining the table’s Access Control List, which fields can a user with the itil role read?",
        type: "single",
        options: ["Only field3", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "A user with the itil role can read all fields except field3 based on the Access Control List.",
    },
    {
        question:
            "Which statement correctly describes the difference between client scripts and business rules?",
        type: "single",
        options: [
            "Client scripts execute before a record is loaded, and business rules execute after a record is updated.",
            "Client scripts execute before a record is loaded, and business rules execute after a record is loaded.",
            "Client scripts execute on the client side, and business rules execute on the server side.",
            "Client scripts execute on the server side, and business rules execute on the client side.",
        ],
        correct: [2],
        explanation:
            "Client scripts run on the client side, while business rules run on the server side.",
    },
    {
        question: "Which action can be performed in a business rule without using a script?",
        type: "single",
        options: [
            "Set field values and query the database",
            "Set field values and generate an event",
            "Set field values and write to the system log",
            "Set field values and add a message",
        ],
        correct: [1],
        explanation:
            "A business rule can set field values and generate an event without requiring a script.",
    },
    {
        question:
            "On a form, which field type has an icon that, when clicked, displays a preview of the associated record?",
        type: "single",
        options: ["Quick View", "Lookup", "Reference", "Preview", "Snapshot", "Drilldown"],
        correct: [2],
        explanation:
            "Reference fields have an icon that displays a preview of the associated record.",
    },
    {
        question:
            "When the [Create Module] field is selected during table creation, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to allow creating a new record",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior",
            "Displays the application’s empty homepage",
            "Displays a list of all records in the table",
        ],
        correct: [3],
        explanation:
            "The default behavior of a new module is to display a list of all records in the table.",
    },
    {
        question: "Which roles are required to impersonate a user?",
        type: "multiple",
        options: ["System Admin", "Security Admin", "Admin", "Impersonator", "sys_user"],
        correct: [2, 3],
        explanation: "The Admin and Impersonator roles are required to impersonate a user.",
    },
    {
        question:
            "When building an extended table from a base table, which fields must be created?",
        type: "multiple",
        options: [
            "Mandatory fields from the base table",
            "Reference fields from the base table",
            "Fields that do not exist in the base table",
            "Fields unique to the extended table",
        ],
        correct: [2, 3],
        explanation:
            "Fields that do not exist in the base table and fields unique to the extended table must be created.",
    },
    {
        question:
            "When configuring an access control with no conditions or scripts, which statement is not correct?",
        type: "single",
        options: [
            "table.* allows access to all fields in a record",
            "table.None does not allow access to any records on the table",
            "table.field allows access to a specific field in a record",
            "table.id allows access to a specific record on the table",
        ],
        correct: [3],
        explanation:
            "table.id does not allow access to a specific record, making this statement incorrect.",
    },
    {
        question:
            "Which ServiceNow feature allows including data from secondary related tables in a report?",
        type: "single",
        options: ["Dot-walking", "Outer Join", "Join", "SQL"],
        correct: [0],
        explanation: "Dot-walking allows including data from secondary related tables in a report.",
    },
    {
        question:
            "A customer wants to create a new template to notify users affected by a network outage at their site. Which module should be used to create the new notification?",
        type: "single",
        options: [
            "System Notification > Email > Notifications",
            "Administration > Notification Overview",
            "Gear > Notifications > Click New",
            "System Properties > Email > Settings",
            "User Preferences > Email > Notifications",
        ],
        correct: [0],
        explanation:
            "The System Notification > Email > Notifications module is used to create a new notification.",
    },
    {
        question:
            "What setting is required to allow users to view knowledge base articles without logging in?",
        type: "single",
        options: ["Allow All Role", "ESS Role", "Public Setting", "View All Setting"],
        correct: [2],
        explanation:
            "The Public Setting allows users to view knowledge base articles without logging in.",
    },
    {
        question:
            "Which feature can track the time a task has been open to ensure it is completed within an allotted time?",
        type: "single",
        options: [
            "Response Time Clock",
            "Business Hours Remaining",
            "Service Level Agreement",
            "Task Escalation Clock",
            "Inactivity Monitor",
        ],
        correct: [2],
        explanation:
            "Service Level Agreements track the time a task is open to ensure timely completion.",
    },
    {
        question:
            "Which ServiceNow utility provides a modern, interactive graphical interface for visualizing configuration items and their relationships?",
        type: "single",
        options: ["Flow Designer", "Dependency Views", "Class Map", "Business Service Map"],
        correct: [1],
        explanation:
            "Dependency Views provide a graphical interface for visualizing configuration items and relationships.",
    },
    {
        question: "Name three ways to create a table in ServiceNow.",
        type: "multiple",
        options: [
            "Using traditional workflows",
            "Uploading a spreadsheet to convert to a custom table",
            "Using Flow Designer",
            "Using the Now Experience Table Creator",
            "Extending a table",
            "Creating a custom table",
        ],
        correct: [1, 4, 5],
        explanation:
            "Tables can be created by uploading a spreadsheet, extending a table, or creating a custom table.",
    },
    {
        question:
            "Flow Designer includes many actions, but what are some commonly used core actions?",
        type: "multiple",
        options: [
            "Look Up Record",
            "Wait for Match",
            "Wait for Condition",
            "Ask for Approval",
            "Create Record",
            "Look for Update",
        ],
        correct: [0, 2, 3, 4],
        explanation:
            "Commonly used core actions in Flow Designer include Look Up Record, Wait for Condition, Ask for Approval, and Create Record.",
    },
    {
        question: "What is the best UX format for use with lists and forms?",
        type: "single",
        options: ["Forms", "Lists", "Standard", "Classic"],
        correct: [3],
        explanation: "The Classic UX format is best for lists and forms.",
    },
    {
        question:
            "A customer has requested a change to the default layout of a task list, wanting the following columns in this order: Number, Task Type, Parent, Short Description, Assignment Group, Assignee, Updated. After navigating to the list, where should you click to meet this requirement?",
        type: "single",
        options: [
            "List context menu > Click Customize List",
            "Right-click any column header and select Context Menu > Configure > List Layout",
            "List context menu > Configure > Columns",
            "Right-click the gear icon in the list > Configure > Columns",
        ],
        correct: [1],
        explanation:
            "Right-clicking a column header and selecting Configure > List Layout allows customization of the task list columns.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or in a separate tab or window",
            "A group of menus or pages that provide related information and functionality to end users",
            "A method for users to quickly access information or services by filtering items in the Application Navigator",
            "A web-based method for delivering software to end users",
        ],
        correct: [2],
        explanation:
            "A module is a method for users to quickly access information or services via the Application Navigator.",
    },
    {
        question: "On an incident record, how do you add a “Special Handling” tag to the record?",
        type: "single",
        options: [
            "Check the box in the Special Handling field",
            "Click the More Options (...) icon, click Add Tag, type “Special Handling,” and press Enter",
            "Click the context menu, select Add Tag, type Special Handling, and press Enter",
            "In the Tags field, select “Special Handling” from the choice list",
        ],
        correct: [1],
        explanation:
            "Tags are added by clicking the More Options (...) icon, selecting Add Tag, and typing the tag name.",
    },
    {
        question: "What is the name of the string that displays filter conditions?",
        type: "single",
        options: ["Menu", "Selection", "Topic", "Breadcrumb"],
        correct: [3],
        explanation: "The string displaying filter conditions is called a Breadcrumb.",
    },
    {
        question:
            "For an implementation, the following tables extend each other: The Incident table extends the Task table, The Super Incident table extends the Incident table. In this scenario, which tables are the parent table, child table, and base table?",
        type: "multiple",
        options: [
            "The Incident table is the base table",
            "The Task table is the parent table",
            "The Super Incident table is the base table",
            "The Incident table is the child table",
            "The Task table is the child table",
            "The Super Incident table is the child table",
            "The Task table is the base table",
            "The Super Incident table is the parent table",
            "The Incident table is the parent table",
        ],
        correct: [1, 3, 5, 6, 8],
        explanation:
            "The Task table is the parent and base, Incident is a child and parent, and Super Incident is a child.",
    },
    {
        question:
            "When creating a custom table, which access control rules are automatically created?",
        type: "multiple",
        options: ["Create", "Delete", "Execute", "Read", "Write", "Update"],
        correct: [0, 1, 3, 4],
        explanation:
            "Create, Delete, Read, and Write access controls are automatically created for a custom table.",
    },
    {
        question: "How does ServiceNow match incoming emails to existing records?",
        type: "single",
        options: ["Watermark", "Record Link", "Subject", "sys_id"],
        correct: [0],
        explanation: "ServiceNow uses a watermark to match incoming emails to existing records.",
    },
    {
        question: "Which of the following statements are true about the Form Designer?",
        type: "single",
        options: ["a, b, c, and d", "b, c, and d", "a, b, and d", "a, b, c"],
        correct: [3],
        explanation:
            "The Form Designer allows adding fields, creating new fields, and removing fields as described in a, b, and c.",
    },
    {
        question: "Which path is used to access the table configuration page from a form?",
        type: "single",
        options: [
            "Form context menu > View > Table",
            "Form context menu > Configure > Dictionary",
            "Form context menu > View > Show Table",
            "Form context menu > Configure > Table",
        ],
        correct: [3],
        explanation:
            "The Configure > Table path in the form context menu accesses the table configuration page.",
    },
    {
        question:
            "Which feature can restrict users from posting or reading knowledge in a knowledge base?",
        type: "single",
        options: ["User Criteria", "Groups", "Categories", "Roles"],
        correct: [0],
        explanation:
            "User Criteria can restrict users from posting or reading knowledge in a knowledge base.",
    },


    // CAD (2025_2)
    {
        question:
            "In a private scope application, which methods are used to log messages in server-side scripts?",
        type: "multiple",
        options: ["gs.debug()", "gs.logError()", "gs.error()", "gs.warn()", "gs.log()"],
        correct: [0, 2],
        explanation:
            "gs.debug() and gs.error() are used for logging in private scope server-side scripts. Reference: Logging in scoped applications",
    },
    {
        question:
            "A customer has requested the following data quality measures: 1. The Incident Number must be read-only for all users in all lists and forms. 2. The Short Description field must be mandatory for all records, in all applications, upon insertion. Which type of policy should be used to meet these requirements?",
        type: "single",
        options: [
            "Dictionary Design Policy",
            "Field Criteria Policy",
            "Data Quality Policy",
            "Data Policy",
        ],
        correct: [3],
        explanation:
            "Data Policies enforce field rules like read-only and mandatory. Reference: Data Policy documentation",
    },
    {
        question: "Which database operations can be controlled in Application Access?",
        type: "multiple",
        options: ["Update", "Create", "Execute", "Query"],
        correct: [0, 1],
        explanation:
            "Application Access controls Update and Create operations. Reference: Application Access settings",
    },
    {
        question: "Identify the incorrect statement regarding ServiceNow delegated development.",
        type: "single",
        options: [
            "Admins can grant non-admin users the ability to develop global applications.",
            "Admins can specify the types of application files developers can access.",
            "Admins can allow developers access to script fields.",
            "Admins can allow developers access to security records.",
        ],
        correct: [0],
        explanation:
            "Non-admins cannot develop global applications. Reference: Delegated development documentation",
    },
    {
        question: "What are the three primary tables in the Enterprise CMDB?",
        type: "multiple",
        options: [
            "sn_cmdb_ci",
            "CMDB",
            "cmdb_bak",
            "sn_cmdb",
            "cmdb_rel_ci",
            "cmdb_ci",
            "sn_cmdb_bak",
        ],
        correct: [1, 4, 5],
        explanation:
            "The primary CMDB tables are CMDB, cmdb_rel_ci, and cmdb_ci. Reference: CMDB table structure",
    },
    {
        question:
            "For a user to pass an access control, which of the following statements must evaluate to true?",
        type: "multiple",
        options: [
            "Other access controls matching the record evaluate to true.",
            "Conditions configured in the access control must evaluate to true.",
            "The user must be granted access through a business rule.",
            "The user has one of the roles specified in the [Required Roles] related list.",
            "The script configured in the access control must evaluate to true.",
        ],
        correct: [1, 3, 4],
        explanation:
            "Access controls require true conditions, required roles, and true scripts. Reference: Access control evaluation",
    },



    // CAD(2025_3)
    {
        question:
            "When ready to share an application, which publishing methods does ServiceNow support? (Select 3 answers)",
        type: "multiple",
        options: [
            "Publish to spreadsheet",
            "Publish to local drive",
            "Publish to local USB device",
            "Publish to application repository",
            "Publish to update set",
            "Publish to ServiceNow Store",
        ],
        correct: [3, 4, 5],
        explanation:
            "ServiceNow supports publishing applications to an application repository, an update set, and the ServiceNow Store.",
    },
    {
        question: "Which of the following is true regarding application scopes?",
        type: "single",
        options: [
            "Applications downloaded from third-party ServiceNow application developers cannot cause naming conflicts",
            "All applications automatically become part of the global scope",
            "Developers can choose the namespace prefix for scopes",
            "All developers can edit any application",
        ],
        correct: [0],
        explanation:
            "Applications downloaded from third-party ServiceNow developers use scopes to avoid naming conflicts.",
    },
    {
        question:
            "When querying records from another table on a form, which field type should you select?",
        type: "single",
        options: [
            "Use a Date field type",
            "Use a Reference field type",
            "Use a Phone Number field type",
            "Use a String field type",
        ],
        correct: [1],
        explanation:
            "Use a Reference field type when you need to query records from another table.",
    },
    {
        question:
            "When creating a module to open a record producer UI for users instead of the ServiceNow form UI, which link type should you select?",
        type: "single",
        options: [
            "URL (from arguments:)",
            "HTML (from arguments:)",
            "Script (from arguments:)",
            "Content Page",
        ],
        correct: [0],
        explanation: "Select URL (from arguments:) to open a Record Producer UI from a module.",
    },
    {
        question:
            "Which database operations can be controlled by Application Access? (Select 2 answers)",
        type: "multiple",
        options: ["Query", "Execute", "Silver", "Create"],
        correct: [2, 3],
        explanation: "Application Access controls operations like Silver and Create.",
    },
    {
        question:
            "As an administrator, what must you do to access high security settings features?",
        type: "single",
        options: [
            "Impersonate the security administrator",
            "Use the System Administration > Elevate Roles module",
            "Add the security_admin role to your user account",
            "Select Elevate Roles",
        ],
        correct: [3],
        explanation: "Select Elevate Roles to access high security settings.",
    },
    {
        question:
            "ServiceNow includes resources that enable and support true service level reporting and multiple configuration strategies. What resource is being described?",
        type: "single",
        options: [
            "Configuration Management Database (CMDB)",
            "Information Technology Infrastructure Library (ITIL)",
            "Common Service Data Model (CSDM)",
            "Information Technology Service Management (ITSM)",
        ],
        correct: [2],
        explanation:
            "The Common Service Data Model (CSDM) supports service level reporting and configuration strategies.",
    },
    {
        question:
            "Access control rules apply to specific tables like the Incident table. For the entire Incident table (all rows and fields), which is correct?",
        type: "single",
        options: ["incidentNone", "incident'", "incident.all", "incident!"],
        correct: [1],
        explanation: "For the Incident table, the correct access control is 'incident'.",
    },
    {
        question: "Can inherited fields be removed from a table?",
        type: "single",
        options: [
            "Yes, select the red X in the leftmost column of the table definition",
            "Yes, but only for text fields",
            "Yes, but only if no saved field data exists",
            "No, inherited fields cannot be removed from child tables",
        ],
        correct: [3],
        explanation: "Inherited fields cannot be removed from child tables.",
    },
    {
        question: "Which of the following statements does not apply to the Form Designer?",
        type: "single",
        options: [
            "To create a new field for the form's table, drag the appropriate data type from the Field Types tab onto the form and configure the new field",
            "To add fields to the form layout, drag them from the Fields tab to the desired location on the form",
            "To remove fields from the form layout, hover over the field to enable the Action button and select the Delete (X) button",
            "To add a section to the form layout, drag the section from the Field Types tab to the desired location on the form",
        ],
        correct: [3],
        explanation:
            "You cannot drag a section from the Field Types tab; sections are created differently.",
    },
    {
        question: "Regarding Form Designer, which of the following is correct?",
        type: "single",
        options: ["a, b, c, d", "b, c, d", "a, b, d", "a, b, c"],
        correct: [3],
        explanation:
            "In Form Designer, fields are dragged from the Fields tab (a), new fields are created by dragging from Field Types and configuring (b), and fields are deleted by hovering and clicking Delete (c). Adding sections is done via the Form Layout, not Field Types (d is incorrect). Reference: ServiceNow Form Designer documentation.",
    },
    {
        question:
            "Which of the following are correct statements about reports in ServiceNow? (Select three)",
        type: "multiple",
        options: [
            "Shared reports can be viewed by all users.",
            "Graphical display of data is possible.",
            "All users can generate reports on any table.",
            "Can be executed on-demand by authorized users.",
            "Can be scheduled for email distribution.",
        ],
        correct: [1, 3, 4],
        explanation:
            "Reports support graphical displays, on-demand execution by authorized users, and scheduled email distribution. Shared reports are limited by permissions, and not all users can report on all tables. Reference: ServiceNow Reporting.",
    },
    {
        question:
            "Which of the following is a correct statement about a Script Include with a Protection Policy value set to 'Protected'?",
        type: "single",
        options: [
            "Users with the protected_edit role can view and edit the Script Include.",
            "The Protection Policy option can only be enabled by users with the admin role.",
            "The Protection Policy is applied only when the glide.app.apply_protection system property value is true.",
            "The Protection Policy applies only to applications downloaded from the ServiceNow App Store.",
        ],
        correct: [2],
        explanation:
            "Protection Policy depends on the glide.app.apply_protection property. Reference: ServiceNow Script Include Protection.",
    },
    {
        question:
            "Identify one reason from the list below why an application would not be suitable for ServiceNow. The application:",
        type: "single",
        options: [
            "Requires workflows to manage processes.",
            "Needs to use low-level programming libraries 'as is.'",
            "Requires reporting capabilities.",
            "Extensively uses forms to interact with data.",
        ],
        correct: [1],
        explanation:
            "Low-level programming libraries are not suitable for ServiceNow’s high-level platform. Reference: ServiceNow Application Development.",
    },
    {
        question:
            "Which of the following is a correct statement about the default behavior of tables in private scope applications?",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services.",
            "Any business rule can read, write, delete, or update from the table.",
            "Only artifacts within the table’s application can read from the table.",
            "All application scopes can read from the table.",
        ],
        correct: [2],
        explanation:
            "Private scope tables restrict read access to their own application’s artifacts by default. Reference: ServiceNow Scoped Application Tables.",
    },
    {
        question:
            "What is the source control operation called that saves local changes on an instance to be applied later?",
        type: "single",
        options: ["Branch", "Tag", "Stash", "Update Set"],
        correct: [2],
        explanation:
            "Stash saves local changes for later application in source control. Reference: ServiceNow Source Control.",
    },
    {
        question: "Which client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "Catalog Client Script and Catalog UI Policy",
            "UI Script and UI Action",
            "UI Script and Record Producer Script",
            "Client Script and UI Policy",
        ],
        correct: [0],
        explanation:
            "Catalog Client Scripts and Catalog UI Policies apply to Record Producers. Reference: ServiceNow Record Producer Scripting.",
    },
    {
        question: "Can inherited fields be deleted from a table?",
        type: "single",
        options: [
            "Yes, by selecting the red X in the leftmost column of the table definition.",
            "Yes, but only for text fields.",
            "Yes, but only if no field data has been saved.",
            "No, inherited fields cannot be deleted from a child table.",
        ],
        correct: [3],
        explanation:
            "Inherited fields cannot be deleted from child tables. Reference: ServiceNow Table Inheritance.",
    },
    {
        question: "How can a list filter be made available to everyone?",
        type: "single",
        options: [
            "Activate it, assign a name, and save.",
            "Assign a group, set visibility, and save.",
            "Assign a name, set visibility, and save.",
            "Activate it, set visibility, and save.",
        ],
        correct: [2],
        explanation:
            "Assigning a name and setting visibility makes a filter available to all. Reference: ServiceNow List Filters.",
    },
    {
        question: "Which of the following is a correct statement about the Application Picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope appear in the Application Picker.",
            "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker.",
            "Only custom applications appear in the Application Picker.",
            "Only downloaded applications appear in the Application Picker.",
        ],
        correct: [0],
        explanation:
            "The Application Picker shows all custom and global scopes. Reference: ServiceNow Application Picker.",
    },
    {
        question:
            "Which core table in the ServiceNow platform provides a set of standard fields used by tables that extend it, such as the [incident] or [problem] tables?",
        type: "single",
        options: [
            "Task [task]",
            "Assignment [assignment]",
            "Service [service]",
            "Workflow [workflow]",
        ],
        correct: [0],
        explanation:
            "The Task table provides standard fields for tables like Incident and Problem. Reference: ServiceNow Task Table.",
    },
    {
        question: "Which database operation cannot be controlled by application access?",
        type: "single",
        options: ["Query", "Update", "Create", "Delete"],
        correct: [0],
        explanation:
            "Query operations are not controlled by application access settings. Reference: ServiceNow Application Access.",
    },
    {
        question:
            "Which conditions must be true for a user to pass an access control? (Select three)",
        type: "multiple",
        options: [
            "The user must have one of the roles specified in the 'Required roles' related list.",
            "The script configured in the access control must return true.",
            "Other access controls matching the record must return true.",
            "The condition configured in the access control must return true.",
            "The user must be granted access through a business rule.",
        ],
        correct: [0, 1, 3],
        explanation:
            "Access controls require matching roles, true scripts, and true conditions. Reference: ServiceNow Access Control Evaluation.",
    },
    {
        question:
            "When debugging email notifications, what should be checked in the user record? (Select three)",
        type: "multiple",
        options: [
            "'Active' is true.",
            "The 'First Name' and 'Last Name' fields have values.",
            "The 'Notification' field is set to enabled.",
            "The user is not locked out.",
            "The 'Email' field has a value.",
        ],
        correct: [0, 2, 4],
        explanation:
            "Active status, enabled notifications, and a valid email are required. Reference: ServiceNow Email Notification Debugging.",
    },

    //todo4

    {
        question:
            "Which intuitive development interface guides users through the initial application development process?",
        type: "single",
        options: [
            "Guided Tour Designer",
            "Guided Application Creator",
            "ServiceNow Studio",
            "Flow Designer",
        ],
        correct: [1],
        explanation:
            "Guided Application Creator simplifies initial app development. Reference: ServiceNow Guided Application Creator.",
    },
    {
        question: "What are the benefits of developing a private scope application? (Select two)",
        type: "multiple",
        options: [
            "It does not use code repositories like GitHub or GitLab.",
            "It reduces the risk of code conflicts.",
            "It allows the application to be installed and uninstalled.",
            "It duplicates ServiceNow functionality in a private scope.",
        ],
        correct: [1, 2],
        explanation:
            "Private scope reduces code conflicts and allows installation/uninstallation. Reference: ServiceNow Scoped Applications.",
    },
    {
        question: "Which can be used as an external data source for a ServiceNow application?",
        type: "single",
        options: [
            "Microsoft Excel file",
            "Data from a public web service using SOAP or REST",
            "CSV file",
            "All of the above",
        ],
        correct: [3],
        explanation:
            "Excel, CSV, and web services (SOAP/REST) are valid data sources. Reference: ServiceNow Data Sources.",
    },
    {
        question: "Which statement about Application Picker and Application Scope is correct?",
        type: "single",
        options: [
            "Global is a reserved application that does not appear in the Application Picker.",
            "Selecting an application in the Application Picker does not set the Application Scope.",
            "Selecting an application in the Application Picker sets the Application Scope.",
            "Selecting Global in the Application Picker sets the Application Scope to Incident.",
        ],
        correct: [2],
        explanation:
            "Selecting an application in the Application Picker sets the scope. Reference: ServiceNow Application Picker.",
    },
    {
        question: "What is the GlideForm client-side script object?",
        type: "single",
        options: ["sn.form", "g_form", "gs.form", "gs_form"],
        correct: [1],
        explanation:
            "g_form is the GlideForm client-side object. Reference: ServiceNow GlideForm API.",
    },
    {
        question: "Which of the following is not included in the Caller Access Field Option?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation:
            "Caller Permission is not a Caller Access Field Option. Reference: ServiceNow Cross-Scope Access.",
    },
    {
        question:
            "When troubleshooting or debugging a notification, where do you check to see if an email was sent in response to an event?",
        type: "single",
        options: [
            "System Logs > Events",
            "System Logs > Emails",
            "System Logs > Push Notifications",
            "System Logs > ICE Logs",
        ],
        correct: [1],
        explanation:
            "System Logs > Emails shows sent email details. Reference: ServiceNow Email Notification Debugging.",
    },
    {
        question: "Which of the following is not a feature of Flow Designer?",
        type: "single",
        options: [
            "Running a flow from a catalog item",
            "Calling a flow from another flow or subflow",
            "Adding stages to a flow",
            "Testing a flow using the 'Run as' feature",
        ],
        correct: [1],
        explanation:
            "Flow Designer does not support direct flow-to-flow calls; subflows are used instead. Reference: ServiceNow Flow Designer.",
    },
    {
        question: "What is the purpose of the Coalesce field during data import?",
        type: "single",
        options: [
            "Updates an existing record if a matching record is not found.",
            "Determines whether a record matches an existing record or is a new record.",
            "Identifies and merges duplicate records.",
            "Inserts a new record if a matching record is found.",
        ],
        correct: [1],
        explanation:
            "Coalesce fields identify matching records for updates or new inserts. Reference: ServiceNow Import Sets.",
    },
    {
        question: "Which is not a method to install an application on a ServiceNow instance?",
        type: "single",
        options: [
            "Installing an application from the application repository",
            "Selecting the 'Copy' button on the application record",
            "Downloading and installing an application from the ServiceNow Share website",
            "Downloading and installing a third-party application from the ServiceNow Store",
        ],
        correct: [1],
        explanation:
            "The 'Copy' button does not install applications. Reference: ServiceNow Application Installation.",
    },
    {
        question:
            "In the Automated Test Framework (ATF), when using custom UI test steps, which page component cannot be tested?",
        type: "single",
        options: ["Buttons", "UI Controls", "UI Pages", "Form Field Values"],
        correct: [3],
        explanation:
            "Form Field Values cannot be directly tested in ATF UI steps. Reference: ServiceNow ATF Limitations.",
    },
    {
        question: "Which module is used to access available knowledge bases?",
        type: "single",
        options: [
            "Knowledge > Home",
            "Self Service > Knowledge",
            "Knowledge > All",
            "Knowledge > Knowledge Bases",
            "Knowledge > Overview",
        ],
        correct: [1],
        explanation:
            "Self Service > Knowledge accesses knowledge bases. Reference: ServiceNow Knowledge Management.",
    },
    {
        question: "Which statement about Guided Application Creator is correct?",
        type: "single",
        options: [
            "The global scope option is enabled by default.",
            "Default access controls are automatically created.",
            "A welcome screen is displayed each time a new application is created.",
            "A user role for the scoped application is automatically created.",
        ],
        correct: [1],
        explanation:
            "Default access controls are created in Guided Application Creator. Reference: ServiceNow Guided Application Creator.",
    },
    {
        question: "Which statements about g_scratchpad are correct? (Select two)",
        type: "multiple",
        options: [
            "Used to push information from the server to the client.",
            "Not available on mobile platforms.",
            "Has constructors and methods.",
            "Has default properties passed by client-side scripts.",
        ],
        correct: [0, 2],
        explanation:
            "g_scratchpad pushes server data to clients and supports methods. Reference: ServiceNow g_scratchpad.",
    },
    {
        question:
            "When debugging email notifications, what should be checked in the user record? (Select two)",
        type: "multiple",
        options: [
            "'Active' is true.",
            "The 'Email' field has a valid value.",
            "The user is not locked out.",
            "The 'First Name' and 'Last Name' fields have values.",
            "Delegation is enabled.",
        ],
        correct: [0, 1],
        explanation:
            "Active status and a valid email are critical for notifications. Reference: ServiceNow Email Notification Debugging.",
    },
    {
        question: "Why develop an application on the ServiceNow platform? (Select three)",
        type: "multiple",
        options: [
            "To use workflows to manage processes.",
            "To require reporting capabilities.",
            "To frequently interact with data using forms.",
            "To require low-level programming libraries.",
            "To use multimedia features.",
        ],
        correct: [0, 1, 2],
        explanation:
            "ServiceNow supports workflows, reporting, and form interactions. Reference: ServiceNow Application Development.",
    },
    {
        question:
            "After an application is ready to be shared, which publishing methods are supported in ServiceNow? (Select three)",
        type: "multiple",
        options: [
            "Publish to the application repository",
            "Publish to a local drive",
            "Publish to the ServiceNow Store",
            "Publish to an update set",
            "Publish to a spreadsheet",
            "Publish to a local USB device",
        ],
        correct: [0, 2, 3],
        explanation:
            "Supported methods include application repository, Store, and update sets. Reference: ServiceNow Application Publishing.",
    },
    {
        question:
            "Which ServiceNow feature helps users retrieve information, make decisions, and perform common tasks via a messaging interface?",
        type: "single",
        options: ["Agent Workspace", "Chatbot", "Virtual Agent", "Knowledge Chat", "Now Support"],
        correct: [2],
        explanation:
            "Virtual Agent provides a messaging interface for tasks. Reference: ServiceNow Virtual Agent.",
    },
    {
        question:
            "Which feature automates business logic for approvals, task notifications, and record operations for specific applications or processes?",
        type: "single",
        options: ["Flows", "Action Sequences", "Action Sets", "Task Flows", "Flow Diagrams"],
        correct: [0],
        explanation:
            "Flows automate business logic in ServiceNow. Reference: ServiceNow Flow Designer.",
    },
    {
        question: "Which are valid Caller Access field options? (Choose three answers)",
        type: "multiple",
        options: [
            "Accessible",
            "Allow configuration",
            "Caller Restriction",
            "None",
            "Caller Tracking",
            "Caller Allowed",
        ],
        correct: [2, 3, 4],
        explanation:
            "The valid Caller Access field options in ServiceNow are Caller Restriction, None, and Caller Tracking, which control how cross-scope access is managed for application files. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question:
            "You heard about a new ServiceNow application and want to try it to see if it would benefit your company’s ServiceNow implementation. What is the best way to experience the new application?",
        type: "single",
        options: [
            "Search for the sales demo request form on the Wiki",
            "Install the application plugin into your company’s production instance",
            "Install the application plugin into a personal developer instance",
            "Review the latest release notes at docs.servicenow.com",
        ],
        correct: [2],
        explanation:
            "Installing the application plugin in a personal developer instance is the safest way to test a new application without affecting production. Reference: ServiceNow Developer Instance documentation.",
    },
    {
        question:
            "The history of work recorded on a record is displayed in which section of the Notes tab?",
        type: "single",
        options: ["Audit Log", "Journal", "Timeline", "Activity Stream", "Journal"],
        correct: [3],
        explanation:
            "The Activity Stream in the Notes tab displays the history of work recorded on a record, including comments and work notes. Reference: ServiceNow Form Layout documentation.",
    },
    {
        question:
            "What is the best practice when using the default update set to move customizations between instances?",
        type: "single",
        options: [
            "Submit the default update set to the application repository",
            "Merge default update sets before moving between instances",
            "Do not use the default update set to move between instances",
            "Keep the default update set to a maximum of 20 records for troubleshooting",
        ],
        correct: [2],
        explanation:
            "Best practice is to avoid using the default update set for moving customizations between instances to prevent unintended changes. Reference: ServiceNow Update Set Best Practices.",
    },
    {
        question: "Which statements are true about Form Designer?",
        type: "single",
        options: ["a, b, c, d", "b, c, d", "a, b, d", "a, b, c"],
        correct: [3],
        explanation:
            "Form Designer allows dragging fields from the Fields tab (a), creating new fields from Field Types (b), and removing fields via the Remove button (c). Adding sections via drag-and-drop (d) is not supported. Reference: ServiceNow Form Designer documentation.",
    },
    {
        question: "Which of the following is not a debugging strategy for client-side scripts?",
        type: "single",
        options: ["g_form.addInfoMessage()", "Field Watcher", "jslog()", "gs.log()"],
        correct: [3],
        explanation:
            "gs.log() is a server-side debugging method, not applicable to client-side scripts. g_form.addInfoMessage(), Field Watcher, and jslog() are valid client-side debugging strategies. Reference: ServiceNow Debugging documentation.",
    },
    {
        question:
            "As part of an application development plan, it is a best practice to define the business requirements and processes the application will manage. What considerations should be documented as part of the business process?",
        type: "single",
        options: [
            "Business issue, data input/output, users/stakeholders, process steps",
            "Business issue, data input/output, project schedule, process steps",
            "Business issue, data input/output, users/stakeholders, database capacity",
            "Business issue, users/stakeholders, available licenses, database capacity",
        ],
        correct: [0],
        explanation:
            "Business process documentation should include the business issue, data input/output, users/stakeholders, and process steps. Reference: ServiceNow Application Development Best Practices.",
    },
    {
        question:
            "When the 'Create Module' field is selected during table creation, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form so a new record can be created",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior",
            "Displays an empty homepage for the application",
            "Displays a list of all records for the table",
        ],
        correct: [3],
        explanation:
            "The default behavior of a new module created during table creation is to display a list of all records for the table. Reference: ServiceNow Table Creation documentation.",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community",
            "A marketplace of free and paid certified ServiceNow applications and integrations",
            "A downloadable content ServiceNow script archive",
            "An alias for the ServiceNow Developer Share site",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a marketplace for free and paid certified applications and integrations. Reference: ServiceNow Store documentation.",
    },
    {
        question: "What is a web service?",
        type: "single",
        options: [
            "Displays available services and product offerings provided by departments within an organization to customers",
            "A method that enables applications to connect to other software applications over a network",
            "A method used to create and maintain UI pages",
            "A method used to discover various systems and applications",
        ],
        correct: [1],
        explanation:
            "A web service enables applications to connect to other software over a network, such as via REST or SOAP. Reference: ServiceNow Web Services documentation.",
    },
    {
        question: "How is access to application menus and modules controlled?",
        type: "single",
        options: ["Access control", "Application rules", "Client scripts", "Roles"],
        correct: [3],
        explanation:
            "Access to application menus and modules is controlled through roles assigned to users. Reference: ServiceNow Role-Based Access documentation.",
    },
    {
        question: "Is it possible to change an application’s scope?",
        type: "single",
        options: [
            "Yes, but only from global scope to private scope",
            "Yes, it is possible",
            "No, it is not possible",
            "Yes, but only from private scope to global scope",
        ],
        correct: [1],
        explanation:
            "An application’s scope can be changed between global and private scopes as needed. Reference: ServiceNow Application Scope documentation.",
    },
    {
        question:
            "Why can applications be developed on the ServiceNow platform? (Choose three answers)",
        type: "multiple",
        options: [
            "Heavily uses forms to interact with data",
            "Requires workflows to manage processes",
            "Requires reporting capabilities",
            "Requires low-level programming libraries",
            "Uses multimedia capabilities",
        ],
        correct: [0, 1, 2],
        explanation:
            "ServiceNow is ideal for applications using forms, workflows, and reporting, but not for low-level libraries or multimedia. Reference: ServiceNow Application Development documentation.",
    },
    {
        question: "What are application files in a ServiceNow application?",
        type: "single",
        options: [
            "An XML export of application table records",
            "ServiceNow artifacts that constitute an application",
            "An XML export of an application’s update set",
            "CSV files containing data imported into an application",
        ],
        correct: [1],
        explanation:
            "Application files are the ServiceNow artifacts (e.g., scripts, tables, UI elements) that make up an application. Reference: ServiceNow Application Development documentation.",
    },
    {
        question:
            "When creating a SOAP message, what syntax indicates variables to be passed when the function is called?",
        type: "single",
        options: [
            "current.variable_name",
            "${variable_name}",
            "< variable_name >",
            "< variable_name >.do?WSDL",
        ],
        correct: [1],
        explanation:
            "${variable_name} is the syntax used to indicate variables in SOAP messages. Reference: ServiceNow SOAP Message documentation.",
    },
    {
        question: "Which of the following methods is not part of the ServiceNow REST API?",
        type: "single",
        options: ["COPY", "POST", "GET", "DELETE"],
        correct: [0],
        explanation:
            "COPY is not a standard method in the ServiceNow REST API; GET, POST, and DELETE are supported. Reference: ServiceNow REST API documentation.",
    },
    {
        question:
            "Assume a table named 'table' exists with three fields (field1, field2, field3). You examine the access control list for the table: table.None read access for users with admin and itil roles, table.* read access for users with admin role, table.field3 read access for users with itil role. Which fields can a user with the itil role read?",
        type: "single",
        options: [
            "field1, field2, and field3",
            "field3 only",
            "field1 and field3",
            "All fields except field3",
        ],
        correct: [1],
        explanation:
            "The itil role has read access to field3 only, as specified in the access control list. Reference: ServiceNow Access Control documentation.",
    },
    {
        question:
            "Which server-side object provides methods to manipulate dates when writing scripts in a private scope application?",
        type: "single",
        options: ["GlideDateTime", "current", "GlideRecord", "GlideSystem"],
        correct: [0],
        explanation:
            "GlideDateTime provides methods for date manipulation in server-side scripts. Reference: ServiceNow GlideDateTime documentation.",
    },
    {
        question:
            "What are the benefits of storing the majority of an application’s server-side script logic in a Script Include?",
        type: "single",
        options: ["a, b, d", "a, b, c, d", "b, c, d", "a, b, c"],
        correct: [2],
        explanation:
            "Storing logic in Script Includes ensures execution only when called (b), hides logic in Store apps (c), and centralizes edits (d). Reference: ServiceNow Script Include documentation.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "The application properties page is an appropriate landing page for the application",
            "Application properties allow developers to override application properties inherited from ServiceNow",
            "Application users know to access the application properties page to change the application’s appearance",
            "Application properties allow developers or administrators to modify application behavior without changing application artifacts",
        ],
        correct: [3],
        explanation:
            "Application properties enable behavior modification without altering artifacts. Reference: ServiceNow Application Properties documentation.",
    },
    {
        question: "Which of the following is incorrect about modules?",
        type: "single",
        options: [
            "Access to modules is controlled by roles",
            "Modules open content pages",
            "All modules must be associated with a table",
            "All modules must be part of an application menu",
        ],
        correct: [2],
        explanation:
            "Modules are not required to be associated with a table; they can link to various content types. Reference: ServiceNow Module documentation.",
    },
    {
        question: "Which of the following is not part of the Form Designer?",
        type: "single",
        options: ["Form Layout", "Page Header", "Schema Map", "Field Navigator"],
        correct: [2],
        explanation:
            "Schema Map is not part of the Form Designer; it is a separate feature for table relationships. Reference: ServiceNow Form Designer documentation.",
    },
    {
        question: "Which types of scripts run on the server? (Choose three answers)",
        type: "multiple",
        options: ["Business Rule", "Client Script", "UI Policy", "Script Action", "Scheduled Job"],
        correct: [0, 3, 4],
        explanation:
            "Business Rules, Script Actions, and Scheduled Jobs run on the server, while Client Scripts and UI Policies are client-side. Reference: ServiceNow Scripting documentation.",
    },
    {
        question:
            "For application access, there is a configuration option to allow access to this table via web services. If this option is selected, which of the following statements is true?",
        type: "single",
        options: [
            "This option restricts the ability to delete records via web services, but records can always be read",
            "Users querying via web services require appropriate permissions to access the table’s records",
            "Even if not selected, users with appropriate permissions can access the table’s records using web services",
            "This option restricts access to SOAP web services only but does not apply to REST",
        ],
        correct: [1],
        explanation:
            "Users need appropriate permissions to access table records via web services, even if the option is enabled. Reference: ServiceNow Application Access documentation.",
    },
    {
        question: "What are the capabilities of Flow Designer? (Choose three answers)",
        type: "multiple",
        options: [
            "Add stages to a flow",
            "Call a flow from another flow or subflow",
            "Use the 'Run' capability to test a flow",
            "Support JavaScript code to test conditions that trigger a flow, e.g., running a flow from a Catalog Item",
            "Perform data validation for form fields on the client side",
        ],
        correct: [0, 1, 2],
        explanation:
            "Flow Designer supports adding stages, calling flows/subflows, and testing via the 'Run' capability. JavaScript triggers and client-side validation are not supported. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question:
            "When an application table is created, a user role is automatically added to the table record. What other role is typically included with an application?",
        type: "single",
        options: [
            "Application Manager",
            "Application Fulfillment",
            "Application Super User",
            "Application Admin",
        ],
        correct: [3],
        explanation:
            "An Application Admin role is typically included with an application table for administrative access. Reference: ServiceNow Application Role documentation.",
    },
    
    //todo3
    
    {
        question: "Which of the following objects cannot be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation:
            "Script Actions cannot access the previous object, but can use GlideRecord, event, and current. Reference: ServiceNow Script Action documentation.",
    },
    {
        question: "Identify the characteristics of a Record Producer. (Choose three answers)",
        type: "multiple",
        options: [
            "Can include graphics in the user interface",
            "All records created using this strategy are inserted into the Requested Item [sc_req_item] table",
            "Can script the behavior of fields in the user interface",
            "Must be scripted",
            "Each field displays a question to the user instead of a field label",
        ],
        correct: [0, 2, 4],
        explanation:
            "Record Producers can include graphics, script field behavior, and display questions instead of labels. They are not always inserted into sc_req_item and don’t require scripting. Reference: ServiceNow Record Producer documentation.",
    },
    {
        question: "Why build a custom app?",
        type: "single",
        options: [
            "To meet specific use cases in internal processes",
            "To avoid using code repositories like GitHub or GitLab",
            "To create custom integrations for third-party systems",
            "To replace ServiceNow base tables",
        ],
        correct: [0, 2],
        explanation:
            "Custom apps are built to meet specific internal use cases and create third-party integrations. Reference: ServiceNow Application Development documentation.",
    },

    //todo2

    {
        question: "Which of the following cannot be debugged using a Field Watcher?",
        type: "single",
        options: ["Business Rule", "Script Include", "Client Script", "Access Control"],
        correct: [3],
        explanation:
            "Field Watchers cannot debug Access Controls, but can debug Business Rules, Script Includes, and Client Scripts. Reference: ServiceNow Debugging documentation.",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "May inherit fields from the parent",
            "Automatically updates the application scope",
            "Does not inherit fields from the parent",
            "Inherits all fields from the parent",
        ],
        correct: [3],
        explanation:
            "A table that extends another inherits all fields from the parent table. Reference: ServiceNow Table Extension documentation.",
    },
    {
        question:
            "Reasons to create an application in ServiceNow: a) To replace outdated and inadequate custom business applications and processes b) To extend service delivery and management to all enterprise departments c) To allow users to have full access to all ServiceNow tables, records, and fields d) To increase the value of ServiceNow",
        type: "single",
        options: ["a, b, and c", "a, b, c, and d", "b, c, and d", "a, b, and d"],
        correct: [3],
        explanation:
            "ServiceNow aims to replace outdated applications (a), extend service delivery (b), and increase value (d), but not provide full access to all tables (c). Reference: ServiceNow Platform documentation.",
    },
    {
        question: "Which features are available in Studio? (Choose two answers)",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branches",
            "Merge branches",
            "Push to update set",
        ],
        correct: [0, 1],
        explanation:
            "Studio supports pushing to external source control and searching branches. Merging branches and pushing to update sets are not Studio features. Reference: ServiceNow Studio documentation.",
    },
    {
        question: "Which module link type is used to access an application properties page?",
        type: "single",
        options: [
            "URL (from Arguments)",
            "HTML (from Arguments)",
            "Script (from Arguments)",
            "Single Record",
        ],
        correct: [0],
        explanation:
            "The URL (from Arguments) link type is used to access an application properties page. Reference: ServiceNow Module Configuration documentation.",
    },
    {
        question: "What is the optimal UX format to use for lists and forms?",
        type: "single",
        options: ["Form", "List", "Standard", "Classic"],
        correct: [3],
        explanation:
            "The Classic UX format is optimal for lists and forms in ServiceNow for consistent user experience. Reference: ServiceNow UX documentation.",
    },
    {
        question:
            "Which of the following is not a method to install an application on a ServiceNow instance?",
        type: "single",
        options: [
            "Install an application from the application repository",
            "Select the Copy button on an application record",
            "Download and install an application from the ServiceNow Share website",
            "Download and install a third-party application from the ServiceNow Store",
        ],
        correct: [1],
        explanation:
            "Selecting the Copy button on an application record is not a method to install an application. Reference: ServiceNow Application Installation documentation.",
    },
    {
        question:
            "Which Flow Designer variable data types are supported for storing record data and composite data? (Choose three answers)",
        type: "multiple",
        options: ["Label data type", "Integer", "Array.Reference", "Choice", "String"],
        correct: [1, 2, 4],
        explanation:
            "Integer, Array.Reference, and String data types are supported for storing record and composite data in Flow Designer. Reference: ServiceNow Flow Designer documentation.",
    },
    
    //todo

    {
        question: "How can an application be linked to a repository behind a firewall?",
        type: "single",
        options: [
            "This option is not supported",
            "Link the application to source control through a MID Server",
            "Link the application to source control through an access token",
            "Link the application to source control using multi-factor authentication",
        ],
        correct: [1],
        explanation:
            "A MID Server is used to link an application to a repository behind a firewall. Reference: ServiceNow Source Control documentation.",
    },
    {
        question:
            "When writing a client script to provide feedback targeted at a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.showFieldMsg() provides feedback for a specific field in a client script. Reference: ServiceNow GlideForm documentation.",
    },
    {
        question:
            "In a business rule, which of the following returns the sys_id of the currently logged-in user?",
        type: "single",
        options: [
            "g_form.getUserID()",
            "g_form.getUserSys()",
            "gs.getUserSysID()",
            "gs.getUserID()",
        ],
        correct: [3],
        explanation:
            "gs.getUserID() returns the sys_id of the currently logged-in user in a business rule. Reference: ServiceNow GlideSystem documentation.",
    },
    {
        question: "Which of the following is not a Caller Access field option?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Allowed"],
        correct: [3],
        explanation:
            "Caller Allowed is not a valid Caller Access field option; the others are. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question:
            "When adding instructions to a form, which of the following is an appropriate method?",
        type: "single",
        options: [
            "Annotation",
            "Related link to a Wiki page",
            "Context menu UI action",
            "Populated read-only field",
        ],
        correct: [0],
        explanation:
            "Annotations are used to add instructional text or descriptions to a form in ServiceNow. Reference: ServiceNow Form Designer documentation.",
    },
    {
        question:
            "For a Script Include with a protection policy value of Protected, which of the following is true?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the Script Include",
            "The protection policy option can only be enabled by users with the admin role",
            "The protection policy is applied only when the glide.app.apply_protection system property value is true",
            "The protection policy is applied only when the application is downloaded from the ServiceNow App Store",
        ],
        correct: [3],
        explanation:
            "A Script Include with a 'Protected' protection policy is only restricted when the application is downloaded from the ServiceNow App Store, preventing external access to its logic. Reference: ServiceNow Script Include documentation.",
    },
    {
        question: "Which plugin enables the Guided Application Creator?",
        type: "single",
        options: [
            "com.glide.sn-guided-app-creator",
            "com.glide.service_creator",
            "com.glide.snc.apps_creator",
            "com.snc.apps_creator_template",
        ],
        correct: [0],
        explanation:
            "The com.glide.sn-guided-app-creator plugin enables the Guided Application Creator, which simplifies the process of creating new applications. Reference: ServiceNow Guided Application Creator documentation.",
    },
    {
        question:
            "For a user to pass an access control, which of the following statements must evaluate to true? (Choose three answers)",
        type: "multiple",
        options: [
            "Other matching access controls for the record evaluate to true",
            "The conditions set in the access control must evaluate to true",
            "The user must be granted access through a business rule",
            "The user has one of the roles specified in the required roles related list",
            "The script set in the access control must evaluate to true",
        ],
        correct: [1, 3, 4],
        explanation:
            "For a user to pass an access control, the conditions, required roles, and script (if present) must evaluate to true. Other access controls and business rules are not directly required. Reference: ServiceNow Access Control documentation.",
    },
    {
        question: "Which method is used to retrieve an application property value in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation:
            "The gs.getProperty() method is used to retrieve an application property value in server-side scripts. Reference: ServiceNow GlideSystem documentation.",
    },
    {
        question:
            "Which of the following database operations cannot be controlled by application access?",
        type: "single",
        options: ["Update", "Delete", "Create", "Query"],
        correct: [3],
        explanation:
            "Query operations cannot be directly controlled by application access settings, unlike Update, Delete, and Create, which are explicitly managed. Reference: ServiceNow Application Access documentation.",
    },
    {
        question:
            "Which of the following are features available in a global application? (Select two)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer",
        ],
        correct: [0, 3],
        explanation:
            "Global applications can leverage the Automated Test Framework and Flow Designer for testing and process automation, respectively. Source Control and Delegated Development are scoped application features. Reference: ServiceNow Docs - Application Scope",
    },
    {
        question:
            "When creating an application using the Guided Application Creator, which of the following is a user experience option?",
        type: "single",
        options: ["Portal", "Mobile", "Self-Service", "Workspace"],
        correct: [1],
        explanation:
            "Guided Application Creator allows selecting Mobile as a user experience option to tailor the application for mobile interfaces. Reference: ServiceNow Docs - Guided Application Creator",
    },
    {
        question: "Which action can a business rule perform without a script?",
        type: "single",
        options: [
            "Set a field value and query the database",
            "Set a field value and generate an event",
            "Set a field value and write to the system log",
            "Set a field value and add a message",
        ],
        correct: [1],
        explanation:
            "A business rule can set a field value and generate an event without scripting by using built-in actions in the rule configuration. Reference: ServiceNow Docs - Business Rules",
    },
    {
        question:
            "When creating a table in a private scope application, which access controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
        ],
        correct: [1],
        explanation:
            "By default, private scope tables get Create, Delete, Read, and Write access controls for the application scope. Reference: ServiceNow Docs - Scoped Application Tables",
    },
    {
        question: "Which server-side API debugging log method can be used in a scoped application?",
        type: "single",
        options: ["gs.print()", "gs.log()", "gs.debuglog()", "gs.info()"],
        correct: [3],
        explanation:
            "gs.info() is the recommended logging method for scoped applications, as gs.print() and gs.log() are restricted. Reference: ServiceNow Docs - Scoped API Logging",
    },
    {
        question:
            "Which ATF test step allows you to create a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create User", "Create Role", "Create Group", "Impersonate"],
        correct: [0],
        explanation:
            "The Create User test step in ATF allows creating a user with specified roles and groups for testing. Reference: ServiceNow Docs - Automated Test Framework",
    },
    {
        question:
            "When selecting the data type for a field displayed on a form, which of the following statements is not true?",
        type: "single",
        options: [
            "Use the Choice data type to limit the field’s options",
            "Use the Date data type to enter dates and times",
            "Use the Phone Number data type to automate validation of phone number data",
            "Use the String data type for free-form text fields",
        ],
        correct: [2],
        explanation:
            "ServiceNow does not have a specific Phone Number data type; phone numbers are typically stored as strings with validation scripts. Reference: ServiceNow Docs - Field Types",
    },
    {
        question:
            "Identify how an application responds to events generated by the gs.eventQueue() method.",
        type: "multiple",
        options: [
            "Script Action",
            "Scheduled Script Execution (Scheduled Job)",
            "UI Policy",
            "Email Notification",
        ],
        correct: [0, 3],
        explanation:
            "Events from gs.eventQueue() trigger Script Actions or Email Notifications based on the Event Registry. Reference: ServiceNow Docs - Event Management",
    },
    {
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "Forms and form fields",
            "Playbook access",
            "Database and backend",
            "User access",
        ],
        correct: [0],
        explanation:
            "Client-side scripts control form behavior and field interactions on the client side. Reference: ServiceNow Docs - Client Scripts",
    },
    {
        question:
            "When creating an application using the Guided Application Creator, which of the following is not an option for creating a table?",
        type: "single",
        options: [
            "Upload a spreadsheet",
            "Create a table from a template",
            "Extend a table",
            "Create a table from scratch",
        ],
        correct: [1],
        explanation:
            "Guided Application Creator does not offer a 'template' option; tables can be created from scratch, extended, or imported from spreadsheets. Reference: ServiceNow Docs - Guided Application Creator",
    },
    {
        question:
            "Which of the following is not an example of an application using a Scheduled Script Execution (Scheduled Job)?",
        type: "single",
        options: [
            "The application needs to send weekly email reminders to requesters for all records in a table",
            "The application needs to run a cleanup script on the last day of every month",
            "The application needs to query the database daily to find unassigned records",
            "The application needs to run a client-side script daily at the same time",
        ],
        correct: [3],
        explanation:
            "Scheduled Jobs run server-side scripts, not client-side scripts. Reference: ServiceNow Docs - Scheduled Script Execution",
    },
    {
        question: "What is the purpose of the Application Picker?",
        type: "single",
        options: [
            "Select an application to run",
            "Select applications as favorites in the Application Navigator",
            "Select an application to edit and set the application scope",
            "Select an application to download and install",
        ],
        correct: [2],
        explanation:
            "The Application Picker sets the scope for editing and developing applications. Reference: ServiceNow Docs - Application Picker",
    },
    {
        question:
            "Which of the following is true about this script fragment? g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "This method returns true if the currently logged-in user has the x_my_app_user role or the admin role",
            "This method returns false only if the currently logged-in user has the x_my_app_user role",
            "There is no g_user.hasRole() method",
            "This method returns true only if the currently logged-in user has the x_my_app_user role",
        ],
        correct: [0],
        explanation:
            "g_user.hasRole() returns true if the user has the specified role or is an admin. Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question: "To import new data into ServiceNow from a spreadsheet, which steps can be used?",
        type: "single",
        options: [
            "Select a data source, schedule the transformation",
            "Load the data, create a transform map, run the transformation",
            "Define a data source, select a transform map, run the transformation",
            "Select an import set, select a transform map, run the transformation",
        ],
        correct: [1],
        explanation:
            "Importing involves loading data into an import set, creating a transform map, and running the transformation. Reference: ServiceNow Docs - Data Import",
    },
    {
        question:
            "Which of the following is the fastest way to create and configure a Record Producer?",
        type: "single",
        options: [
            "Create a catalog category, open the category, and select the Add New Record Producer button",
            "Use the Record Producer module to manually add and configure all variables",
            "Open the table in the table records and select the Add to Service Catalog related link",
            "Open the table’s form, right-click the form header, and select the Create Record Producer menu item",
        ],
        correct: [2],
        explanation:
            "The Add to Service Catalog related link is the fastest way to create a Record Producer for a table. Reference: ServiceNow Docs - Record Producer",
    },
    {
        question:
            "When configuring a module, what does the Override Application Menu Roles configuration option do?",
        type: "single",
        options: [
            "Users with the module role but without access to the application menu can access the module",
            "Self-service users can access the module even without a role",
            "Administrators are granted access to the module even if access is normally prohibited by access controls",
            "Users who can access the application menu can see the module even without the module role",
        ],
        correct: [0],
        explanation:
            "Override Application Menu Roles allows module access based on module-specific roles. Reference: ServiceNow Docs - Modules",
    },
    {
        question: "Identify the incorrect statement about delegated development in ServiceNow.",
        type: "single",
        options: [
            "Administrators can grant non-admin users permission to develop global applications",
            "Administrators can specify which application file types a developer can access",
            "Administrators can grant developers access to script fields",
            "Administrators can allow developers access to security records",
        ],
        correct: [0],
        explanation:
            "Delegated development is for scoped applications, not global applications. Reference: ServiceNow Docs - Delegated Development",
    },
    {
        question:
            "A business rule script template is as follows: (function executeRule(current, previous /*null when async*/) { }) (current, previous); This type of JavaScript function is:",
        type: "single",
        options: ["Constructor", "Scope", "Anonymous", "Self-invoking"],
        correct: [3],
        explanation:
            "The script is a self-invoking (Immediately Invoked Function Expression) function, executed immediately with current and previous as arguments. Reference: ServiceNow Docs - Business Rules",
    },
    {
        question:
            "What are the benefits of extending an existing table, such as the Task table, when creating a new application?",
        type: "multiple",
        options: [
            "You can reuse existing fields by changing their labels.",
            "You can use existing fields without modifying them.",
            "Existing logic from the parent table is automatically applied to the new table.",
            "All records from the parent table are copied to the new table.",
        ],
        correct: [0, 1, 2],
        explanation:
            "Extending a table inherits fields and logic but does not copy records. Reference: ServiceNow Docs - Table Extension",
    },
    {
        question:
            "Which method call returns true only if the currently logged-in user has the catalog_admin role and no other roles?",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')",
        ],
        correct: [1],
        explanation:
            "g_user.hasRoleExactly() checks for the exact role without considering other roles. Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should application access be configured?",
        type: "single",
        options: [
            "Instead of using application access, create access controls to prevent all other application scopes from creating configuration records in the application’s data table",
            "Set the Accessible from field value to All application scopes and deselect the Can create option",
            "Set the Accessible from field value to This application scope only and deselect the Allow access to this table via web services option",
            "Set the Accessible from field value to This application scope only",
        ],
        correct: [3],
        explanation:
            "Setting Accessible from to This application scope only restricts creation to the application’s scope. Reference: ServiceNow Docs - Application Access",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application:",
        type: "single",
        options: [
            "Enter the application name in the global search field",
            "Open the list of update sets for the instance",
            "Examine the Application Files related list for the application to be published",
            "Open each artifact record individually and check the value in the Application field",
        ],
        correct: [2],
        explanation:
            "The Application Files related list shows all artifacts in the application. Reference: ServiceNow Docs - Application Files",
    },
    {
        question:
            "An application developer configures ServiceNow using industry-standard JavaScript to...",
        type: "single",
        options: [
            "Enable right-click to edit the context menu of applications in the navigator",
            "Extend and add functionality",
            "Customize the organization’s company logo and banner text",
            "Configure the display name for outbound emails",
        ],
        correct: [1],
        explanation:
            "JavaScript is used to extend and add functionality via scripts like Client Scripts and Script Includes. Reference: ServiceNow Docs - Scripting in ServiceNow",
    },
    {
        question: "Which of the following are configured in an email notification?",
        type: "multiple",
        options: [
            "Who receives the notification",
            "What content is included in the notification",
            "When the notification is sent",
            "How the notification is sent",
        ],
        correct: [0, 1, 2],
        explanation:
            "Notifications configure recipients, content, and timing; delivery method is system-managed. Reference: ServiceNow Docs - Email Notifications",
    },
    {
        question: "Which of the following is not supported in Flow Designer?",
        type: "single",
        options: [
            "Calling a subflow from a flow",
            "Testing a flow using rollback",
            "Using delegated developers",
            "Running a flow from a MetricBase trigger",
        ],
        correct: [1],
        explanation:
            "Flow Designer does not support rollback testing; other options are supported. Reference: ServiceNow Docs - Flow Designer",
    },
    {
        question:
            "Which of the following statements does not apply when extending an existing table?",
        type: "single",
        options: [
            "Access controls from the parent table are evaluated when determining access to records and fields in the new table",
            "The new table inherits functionality built into the parent table",
            "The new table inherits all fields from the parent table",
            "All required behavior must be scripted and configured",
        ],
        correct: [3],
        explanation:
            "Extending a table inherits fields, logic, and access controls; additional behavior is not always required. Reference: ServiceNow Docs - Table Extension",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Outbound Email", "Application", "Record", "Schedule"],
        correct: [0],
        explanation:
            "Flow Designer does not have an Outbound Email trigger; valid triggers include Application, Record, and Schedule. Reference: ServiceNow Docs - Flow Designer Triggers",
    },
    {
        question: "One use of the ServiceNow REST API Explorer is to:",
        type: "single",
        options: [
            "Practice interacting with public data providers using REST",
            "Find web resources to learn about REST",
            "Convert SOAP message functions to REST methods",
            "Create sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "REST API Explorer generates sample code for ServiceNow REST requests. Reference: ServiceNow Docs - REST API Explorer",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Source",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "Transform Maps map fields between Import Set and target tables. Reference: ServiceNow Docs - Transform Maps",
    },
    {
        question:
            "Which source control operation is available from both Studio and a Git repository?",
        type: "single",
        options: [
            "Create a branch",
            "Apply remote changes",
            "Stash local changes",
            "Edit repository configuration",
        ],
        correct: [0],
        explanation:
            "Creating a branch is supported in both Studio and Git repositories. Reference: ServiceNow Docs - Source Control Integration",
    },
    {
        question:
            "When creating a new application file in a scoped application, which of the following has cross-scope access turned on by default?",
        type: "single",
        options: ["REST Message", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation:
            "Tables in scoped applications have cross-scope access enabled by default for reading. Reference: ServiceNow Docs - Scoped Application Files",
    },
    {
        question: "Which of the following is correct?",
        type: "single",
        options: [
            "UI Policy actions are executed before UI Policy scripts",
            "The execution order of UI Policy scripts and actions is determined at runtime",
            "UI Policy scripts are executed before UI Policy actions",
            "UI Policy actions and scripts are executed simultaneously",
        ],
        correct: [0],
        explanation:
            "UI Policy actions (e.g., making fields mandatory) are applied before any associated scripts. Reference: ServiceNow Docs - UI Policies",
    },
    {
        question: "When evaluating access controls, ServiceNow searches and evaluates:",
        type: "single",
        options: [
            "Matches only in the current table",
            "Matches only in the current field",
            "From the most specific match to the most general match",
            "From the most general match to the most specific match",
        ],
        correct: [2],
        explanation:
            "Access controls are evaluated from most specific (e.g., field-level) to most general (e.g., table-level). Reference: ServiceNow Docs - Access Control Evaluation",
    },
    {
        question:
            "When right-clicking a column header in a table’s list, which report types can be created?",
        type: "single",
        options: ["Bar, Pie, Histogram, and Line", "Bar", "Bar, Pie, and Histogram", "Bar and Pie"],
        correct: [3],
        explanation:
            "Right-clicking a column header supports creating Bar and Pie reports. Reference: ServiceNow Docs - Reports",
    },
    {
        question:
            "When working in the Form Designer and configuring a field label for a child table, which table’s label is changed?",
        type: "single",
        options: ["Base table", "Child table", "Parent table", "All tables"],
        correct: [1],
        explanation:
            "Field label changes in a child table affect only that table, not the parent or base. Reference: ServiceNow Docs - Form Designer",
    },
    {
        question: "Which of the following methods are useful in access control scripts?",
        type: "single",
        options: [
            "g_user.hasRole() and current.isNewRecord()",
            "gs.hasRole() and current.isNewRecord()",
            "g_user.hasRole() and current.isNew()",
            "gs.hasRole() and current.isNew()",
        ],
        correct: [1],
        explanation:
            "gs.hasRole() and current.isNewRecord() are server-side methods for access control scripts. Reference: ServiceNow Docs - GlideSystem API",
    },
    {
        question: "Which of the following is part of the client-side script API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "GlideUser (g_user) is a client-side API for user information. Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question: "Which of the following is true about GlideUser (g_user) methods?",
        type: "single",
        options: [
            "Can only be used in client scripts and UI policies",
            "Can only be used in business rules",
            "Can be used in client scripts, UI policies, and UI actions",
            "Can be used in business rules and script includes",
        ],
        correct: [2],
        explanation:
            "GlideUser methods are available in client-side scripts, UI policies, and UI actions. Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question: "Which statements are true about the Form Designer?",
        type: "multiple",
        options: [
            "To add a field to the form layout, drag a field from the Fields tab to the desired destination on the form.",
            "To create a new field on the form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field.",
            "To remove a field from the form layout, hover over the field to enable the Action button and select the Delete (X) button.",
            "To add a section to the form layout, drag a section from the Field Types tab to the desired destination on the form.",
        ],
        correct: [0, 1, 2],
        explanation:
            "Form Designer supports dragging fields, creating fields, and removing fields; sections are not added via Field Types. Reference: ServiceNow Docs - Form Designer",
    },
    {
        question:
            "Which of the following methods prints a message with a blue background at the top of the current form by default?",
        type: "single",
        options: [
            "g_form.addInfoMsg()",
            "g_form.addInfoMessage()",
            "g_form.showFieldMessage()",
            "g_form.showFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.addInfoMessage() displays a blue info message at the top of the form. Reference: ServiceNow Docs - GlideForm API",
    },
    {
        question:
            "In a business rule, which of the following returns true if the currently logged-in user has the admin role?",
        type: "single",
        options: [
            "g_form.hasRoleExactly('admin')",
            "gs.hasRole('admin')",
            "g_form.hasRole('admin')",
            "gs.hasRoleExactly('admin')",
        ],
        correct: [1],
        explanation:
            "gs.hasRole('admin') checks if the user has the admin role in a server-side script. Reference: ServiceNow Docs - GlideSystem API",
    },
    {
        question:
            "When a ServiceNow instance requests information from a web service, what role does ServiceNow play in relation to the web service?",
        type: "single",
        options: ["Publisher", "Specialist", "Provider", "Consumer"],
        correct: [3],
        explanation:
            "ServiceNow acts as a consumer when requesting data from an external web service. Reference: ServiceNow Docs - Web Services",
    },
    {
        question: "Which object is not accessible to a Display business rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation:
            "The previous object is not available in Display business rules, which run before form display. Reference: ServiceNow Docs - Business Rules",
    },
    {
        question:
            "Which of the following methods is not used to log messages in server-side scripts for a private scope application?",
        type: "single",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "gs.log() is restricted in scoped applications; use gs.error(), gs.warn(), or gs.debug(). Reference: ServiceNow Docs - Scoped API Logging",
    },
    {
        question: "Which objects can be used in an inbound action script?",
        type: "single",
        options: [
            "current and previous",
            "current and email",
            "current and event",
            "current and producer",
        ],
        correct: [1],
        explanation:
            "Inbound email actions use current (the target record) and email (the inbound email object). Reference: ServiceNow Docs - Inbound Email Actions",
    },
    {
        question:
            "From the following list, identify one reason an application would not be suitable for ServiceNow.",
        type: "single",
        options: [
            "Requires a workflow to manage processes",
            "Requires the use of low-level programming libraries “as is”",
            "Requires reporting capabilities",
            "Uses forms extensively to manipulate data",
        ],
        correct: [1],
        explanation:
            "ServiceNow is not ideal for low-level programming library integration; it excels in workflows, forms, and reporting. Reference: ServiceNow Docs - Application Development",
    },
    {
        question: "Which of the following is not a purpose of application scope?",
        type: "single",
        options: [
            "Provide relationships between application artifacts",
            "Provide a way to track the user who developed an application",
            "Provide a namespace (prefix and scope name) to avoid application name collisions",
            "Control how scripts from another scope can modify the scoped application’s tables",
        ],
        correct: [1],
        explanation:
            "Scoping does not track developers; it manages namespaces and access. Reference: ServiceNow Docs - Application Scoping",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.< property name >}",
            "${current.< property name >}",
            "${< property name >.getDisplayValue()}",
            "${gs.< property name >}",
        ],
        correct: [0],
        explanation:
            "${event.< property name >} accesses event properties in notification content. Reference: ServiceNow Docs - Email Notifications",
    },
    {
        question:
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application name"],
        correct: [3],
        explanation:
            "Linking to a Git repository requires a URL, username, and password, but not the application name. Reference: ServiceNow Docs - Source Control Integration",
    },
    {
        question: "When configuring a REST message, the endpoint is:",
        type: "single",
        options: [
            "A command to a REST script to stop execution",
            "The URI of the data to be accessed, queried, or modified",
            "Information about the format of the returned data",
            "A response from the provider indicating there is no data to send back",
        ],
        correct: [1],
        explanation:
            "The endpoint is the URI specifying the resource for the REST request. Reference: ServiceNow Docs - REST Messages",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "3: one for application user modules, one for application admin modules, and one for ServiceNow admin modules",
            "As many as needed for the application design",
            "2: one for application user modules and one for application admin modules",
            "1: used for all application modules",
        ],
        correct: [1],
        explanation:
            "Applications can have multiple menus based on design needs. Reference: ServiceNow Docs - Application Menus",
    },
    {
        question:
            "You are creating an asynchronous business rule for a table in a different scope than the business rule record. Which of the following database operations cannot be included in the configuration of an asynchronous business rule?",
        type: "single",
        options: ["Query", "Update", "Delete", "Insert"],
        correct: [0],
        explanation:
            "Asynchronous business rules cannot include query operations; they support insert, update, and delete. Reference: ServiceNow Docs - Business Rules",
    },
    {
        question: "Which of the following is not a GlideUser (g_user) method?",
        type: "single",
        options: ["username()", "getFullName()", "hasRole()", "hasRoleExactly()"],
        correct: [0],
        explanation:
            "username() is not a GlideUser method; valid methods include getFullName(), hasRole(), and hasRoleExactly(). Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question:
            "To schedule a job to run on the last day of every month, how should it be configured?",
        type: "single",
        options: [
            "Set the Run field value to Periodically and the Repeat Interval value to 31",
            "Set the Run field value to Periodically and the Repeat Interval value to Last Day",
            "Set the Run field value to Monthly and the Day field value to Last Day",
            "Set the Run field value to Monthly and the Day value to Last Day",
        ],
        correct: [2],
        explanation:
            "Setting Run to Monthly and Day to Last Day schedules the job for the last day of each month. Reference: ServiceNow Docs - Scheduled Jobs",
    },
    {
        question: "When managing global application files, which of the following cannot be done?",
        type: "single",
        options: [
            "Add a file to a global application from the global scope",
            "Delete a file from a global application",
            "Move application files between global applications",
            "Move application files between a scoped application and a global application",
        ],
        correct: [3],
        explanation:
            "Files cannot be moved between scoped and global applications due to scope restrictions. Reference: ServiceNow Docs - Application Files",
    },
    {
        question:
            "You are developing a MyApp application with a table, Table A. When installing the MyApp application to an instance, the records in Table A need to be installed as part of the application. The records in Table A are installed when:",
        type: "single",
        options: [
            "Table A is active and extends the Task table",
            "The records in Table A are added to the application record using the Create Application File context menu item",
            "Table A has an auto-number counter for new records",
            "Table A is not included in the System Clone > Exclude Tables list",
        ],
        correct: [1],
        explanation:
            "Records are included in the application via the Create Application File context menu. Reference: ServiceNow Docs - Application Files",
    },
    {
        question:
            "Application developers can specify the ServiceNow page displayed to users after submitting a new record using the Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            'Write an after Business Rule script for the Record Producer\'s table: window.redirect = "<URL>";',
            "Create an application property to store the URL",
            'Write a script in the Record Producer\'s Script field: producer.redirect = "<URL>";',
            "Configure the page in the Module that opens the Record Producer UI",
        ],
        correct: [2],
        explanation:
            'The redirect page is set using producer.redirect = "<URL>" in the Record Producer’s Script field. Reference: ServiceNow Docs - Record Producer',
    },
    {
        question:
            "What is required to link a ServiceNow application to a Git repository? (Choose 3 answers)",
        type: "multiple",
        options: ["URI", "ACL", "User name", "URL", "Application name", "Password"],
        correct: [2, 3, 5],
        explanation:
            "Linking requires the Git repository URL, username, and password (or token). Reference: ServiceNow Docs - Source Control Integration",
    },
    {
        question: "What is a ServiceNow app repository?",
        type: "single",
        options: [
            "A request table",
            "An alias for an update set",
            "A database containing ServiceNow apps",
            "A collection of files in a Git database",
        ],
        correct: [2],
        explanation:
            "A ServiceNow app repository is a database storing application files for distribution. Reference: ServiceNow Docs - Application Repository",
    },
    {
        question: "What is the baseline behavior of a table in a private scope application?",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services",
            "All business rules can read, write, delete, and update the table",
            "Only artifacts in the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "All scopes can read from a private scope table by default unless restricted. Reference: ServiceNow Docs - Scoped Application Tables",
    },
    {
        question:
            "What syntax is used in a Record Producer script to access the value of a Record Producer form field?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "producer.variablename accesses Record Producer variable values. Reference: ServiceNow Docs - Record Producer Scripts",
    },
    {
        question:
            "Which of the following is not true about the Weight field in an email notification?",
        type: "single",
        options: [
            "Only the notification with the highest weight for the same record and recipient is sent",
            "A weight value of zero means the email is not sent",
            "The default weight value is zero",
            "A weight value of zero means the notification is always sent when the notification’s sending criteria are met",
        ],
        correct: [1],
        explanation:
            "A weight of zero allows the notification to be sent if criteria are met. Reference: ServiceNow Docs - Email Notifications",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control? (Select two)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "source_control and admin roles enable source control operations. Reference: ServiceNow Docs - Source Control Roles",
    },
    {
        question: "Why build a custom application in ServiceNow?",
        type: "multiple",
        options: [
            "Replace outdated and unsuitable custom business applications and processes",
            "Extend service delivery and management to all enterprise departments",
            "Allow users full access to all ServiceNow tables, records, and fields",
            "Extend the value of ServiceNow",
        ],
        correct: [0, 1, 3],
        explanation:
            "Custom applications replace outdated systems, extend services, and enhance platform value, but do not grant full table access. Reference: ServiceNow Docs - Custom Applications",
    },
    {
        question: "Which of the following are true about ServiceNow reports? (Select three)",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "They can represent data graphically",
            "All users can generate reports on any table",
            "Authorized users can run them on demand",
            "They can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "Reports support graphical display, on-demand execution by authorized users, and email scheduling. Reference: ServiceNow Docs - Reports",
    },
    {
        question:
            "When the Create module field is selected during table creation, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to create a new record",
            "Opens a link to a wiki article describing how to customize the new module’s behavior",
            "Displays the application’s empty homepage",
            "Displays a list of all records in the table",
        ],
        correct: [3],
        explanation:
            "The default module shows a list of table records. Reference: ServiceNow Docs - Module Creation",
    },
    {
        question:
            "As part of an application development plan, it is a best practice to define the business requirements and processes the application will manage. What considerations should be documented as part of the business process? (Select four)",
        type: "multiple",
        options: [
            "Business problem",
            "Data input/output",
            "Database capacity",
            "Process steps",
            "Project schedule",
            "Users/stakeholders",
            "Available licenses",
        ],
        correct: [0, 1, 3, 5],
        explanation:
            "Documenting business problem, data, process steps, and stakeholders ensures a comprehensive plan. Reference: ServiceNow Docs - Application Development Best Practices",
    },
    {
        question: "A module requires a link type. Which are link types? (Select all that apply)",
        type: "multiple",
        options: [
            "Assessment",
            "Content Page",
            "Order",
            "Document Link",
            "HTML (from Arguments:)",
            "List Filter",
            "List of Records",
            "Map Page",
            "New Record",
            "Roles",
            "Run a Report",
            "Script (from Arguments:)",
            "Search Screen",
            "Separator",
            "Single Record",
            "Survey",
            "Timeline Page",
            "URL (from Arguments:)",
        ],
        correct: [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17],
        explanation:
            "All listed options except Roles are valid module link types. Reference: ServiceNow Docs - Module Link Types",
    },
    {
        question: "What data types are used in the Record trigger in Flow Designer? (Select three)",
        type: "multiple",
        options: ["Choice", "Integer", "Array Reference", "String"],
        correct: [0, 1, 3],
        explanation:
            "Record triggers in Flow Designer use Choice, Integer, and String data types for conditions. Reference: ServiceNow Docs - Flow Designer Triggers",
    },
    {
        question: "What is the Event Registry?",
        type: "single",
        options: [
            "A table containing a record of all events recognized by the ServiceNow system, enabling ServiceNow to react when an event is generated",
            "A workflow that is triggered each time an event is generated, used for debugging events",
            "A method used in server-side scripts to generate events and pass parameters",
            "An event log listing all generated events",
        ],
        correct: [0],
        explanation:
            "The Event Registry (sys_event) stores all events for system reactions. Reference: ServiceNow Docs - Event Management",
    },
    {
        question:
            "When debugging an email notification, what should you check in the user record? (Select two)",
        type: "multiple",
        options: [
            "The user must not be locked out",
            "Delegation must be enabled",
            "Active must be true",
            "The First Name and Last Name fields must have values",
            "The Email field must have a valid value",
        ],
        correct: [2, 4],
        explanation:
            "The user must be active and have a valid email address for notifications. Reference: ServiceNow Docs - Email Notifications",
    },
    {
        question: "Which of the following are options for the Caller Access field? (Select three)",
        type: "multiple",
        options: ["Caller Tracking", "Caller Rights", "None", "Caller Restriction"],
        correct: [0, 2, 3],
        explanation:
            "Caller Tracking, None, and Caller Restriction are valid Caller Access options. Reference: ServiceNow Docs - Caller Access",
    },
    {
        question:
            "How do you specify a data table in the Guided Application Creator (GAC)? (Select three)",
        type: "multiple",
        options: [
            "Upload an existing spreadsheet",
            "Use a free-form database",
            "Upload an existing word processing document",
            "Create a new table on the platform",
            "Use an existing table on the platform",
            "Upload an existing PDF",
        ],
        correct: [0, 3, 4],
        explanation:
            "GAC allows creating new tables, using existing tables, or importing spreadsheets. Reference: ServiceNow Docs - Guided Application Creator",
    },
    {
        question: "The Task table is an example of which of the following? (Select two)",
        type: "multiple",
        options: ["Legacy Class", "Child Class", "Base Class", "Parent Class"],
        correct: [2, 3],
        explanation:
            "The Task table is a base and parent class, extended by tables like Incident. Reference: ServiceNow Docs - Table Hierarchy",
    },
    {
        question:
            "Access control debugging information identifies whether each access control element allowed or denied access. In what order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles",
        ],
        correct: [2],
        explanation:
            "Access controls evaluate Roles, then Conditions, then Script. Reference: ServiceNow Docs - Access Control Evaluation",
    },
    {
        question:
            "Which of the following is true about the Application Picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the Application Picker does not set the application scope",
            "Selecting global from the Application Picker sets the application scope to Incident",
            "Global is a reserved application that does not appear in the Application Picker",
            "Selecting an application from the Application Picker sets the application scope",
        ],
        correct: [3],
        explanation:
            "The Application Picker sets the scope for development. Reference: ServiceNow Docs - Application Picker",
    },
    {
        question: "Which of the following is true about the Application Picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope appear in the Application Picker",
            "All ServiceNow applications, including baseline applications like Incident, appear in the Application Picker",
            "Only custom applications appear in the Application Picker",
            "Only downloaded applications appear in the Application Picker",
        ],
        correct: [0],
        explanation:
            "The Application Picker shows all custom and global scopes. Reference: ServiceNow Docs - Application Picker",
    },
    {
        question: "Which of the following are part of the Form Designer? (Select three)",
        type: "multiple",
        options: ["Form Layout", "Page Header", "Schema Map", "Field Navigator"],
        correct: [0, 1, 3],
        explanation:
            "Form Designer includes Form Layout, Page Header, and Field Navigator for designing forms. Reference: ServiceNow Docs - Form Designer",
    },
    {
        question:
            "When designing and creating a form, what do you create to organize fields on the form?",
        type: "single",
        options: ["Related List", "Tab", "Section", "Button"],
        correct: [2],
        explanation:
            "Sections organize fields on a form. Reference: ServiceNow Docs - Form Designer",
    },
    {
        question:
            "From the following list, select reasons an application would be suitable for ServiceNow. (Select three)",
        type: "multiple",
        options: [
            "Requires a workflow to manage processes",
            "Requires the use of low-level programming libraries “as is”",
            "Requires reporting capabilities",
            "Uses forms extensively to manipulate data",
            "Supports multimedia",
        ],
        correct: [0, 2, 3],
        explanation:
            "ServiceNow is ideal for workflows, reporting, and form-based data manipulation. Reference: ServiceNow Docs - Application Development",
    },
    {
        question: "A graphical view of relationships between tables is a <blank>.",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation:
            "A Schema Map provides a graphical representation of table relationships and dependencies in ServiceNow. Reference: ServiceNow Docs - Schema Map",
    },
    {
        question: "Which of the following is true about deleting a field from a table?",
        type: "single",
        options: [
            "Any field in the table can be deleted",
            "User-defined, non-inherited fields can be deleted",
            "Inherited fields can be deleted",
            "When a field is deleted, the table records are deleted",
        ],
        correct: [1],
        explanation:
            "Only user-defined, non-inherited fields can be deleted from a table; inherited fields and records remain unaffected. Reference: ServiceNow Docs - Table Administration",
    },
    {
        question: "What do server-side scripts manage?",
        type: "single",
        options: [
            "Forms and form fields",
            "Playbook access",
            "Database and backend",
            "User access",
        ],
        correct: [2],
        explanation:
            "Server-side scripts manage database operations and backend logic, such as business rules and script includes. Reference: ServiceNow Docs - Server-Side Scripting",
    },
    {
        question: "Which class is not part of the client-side scoped API?",
        type: "single",
        options: ["GlideDialogWindow", "GlideAjax", "GlideRecord", "GlideForm"],
        correct: [2],
        explanation:
            "GlideRecord is a server-side API class, not available in client-side scoped APIs, unlike GlideDialogWindow, GlideAjax, and GlideForm. Reference: ServiceNow Docs - Client-Side APIs",
    },
];

// Xuất dữ liệu để sử dụng trong script.js
if (typeof module !== "undefined" && module.exports) {
    module.exports = quizData;
}

const QUESTIONS_PER_PAGE = 50;
let currentPage = 1;
let selectedAnswers = {}; // Lưu trữ trạng thái đã chọn
let submittedResults = {}; // Lưu trữ kết quả sau khi submit

// Tạo giao diện câu hỏi
function loadQuiz(page = 1) {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    const currentQuestions = quizData.slice(start, end);

    currentQuestions.forEach((item, index) => {
        const globalIndex = start + index;
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3><span style="font-weight: bold;">Question ${
            globalIndex + 1
        }.</span> ${item.question}</h3>`;

        item.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            const inputType = item.type === "multiple" ? "checkbox" : "radio";
            const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? "checked" : "";
            optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}>
                <label for="q${globalIndex}o${optIndex}">${String.fromCharCode(
                65 + optIndex
            )}. ${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        const resultText = document.createElement("div");
        resultText.classList.add("result-text");
        resultText.id = `result-q${globalIndex}`;
        if (submittedResults[globalIndex]) {
            resultText.style.display = "block";
            resultText.innerHTML = submittedResults[globalIndex];
        }
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });

    loadPagination();
}

// Tạo phân trang
function loadPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.classList.toggle("active", i === currentPage);
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            loadQuiz(currentPage);
            // checkAllAnswered();
        });
        paginationContainer.appendChild(pageBtn);
    }
}

// Cập nhật trạng thái đã chọn
function updateSelectedAnswers() {
    const allInputs = document.querySelectorAll("#quiz input");
    allInputs.forEach((input) => {
        const questionIndex = parseInt(input.name.replace("q", ""));
        if (!selectedAnswers[questionIndex]) selectedAnswers[questionIndex] = [];

        if (input.checked) {
            const value = parseInt(input.value);
            if (!selectedAnswers[questionIndex].includes(value)) {
                if (quizData[questionIndex].type === "single") {
                    selectedAnswers[questionIndex] = [value];
                } else {
                    selectedAnswers[questionIndex].push(value);
                }
            }
        } else {
            const value = parseInt(input.value);
            selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter(
                (v) => v !== value
            );
        }
    });
}

// Kiểm tra xem tất cả câu hỏi đã được trả lời chưa
// function checkAllAnswered() {
//     let allAnswered = true;

//     quizData.forEach((_, index) => {
//         const isAnswered = selectedAnswers[index] && selectedAnswers[index].length > 0;
//         if (!isAnswered) allAnswered = false;
//     });

//     document.getElementById('submit-btn').disabled = !allAnswered;
// }

// Xử lý submit và hiển thị kết quả
function submitQuiz() {
    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach((item, index) => {
        const selectedValues = selectedAnswers[index] || [];
        const isCorrect =
            item.type === "multiple"
                ? arraysEqual(selectedValues.sort(), item.correct.sort())
                : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

        submittedResults[index] = isCorrect
            ? `<span class="correct">Correct: ${item.correct
                  .map((i) => String.fromCharCode(65 + i))
                  .join(", ")}</span><br><div class="explanation">${item.explanation}</div>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct
                  .map((i) => String.fromCharCode(65 + i))
                  .join(", ")}<br><div class="explanation">${item.explanation}</div>`;

        const resultText = document.getElementById(`result-q${index}`);
        if (resultText) {
            resultText.style.display = "block";
            resultText.innerHTML = submittedResults[index];
        }

        if (isCorrect) score++;
    });

    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.innerHTML = `Your Score: ${score}/${totalQuestions} (${(
        (score / totalQuestions) *
        100
    ).toFixed(2)}%)`;
}

// So sánh hai mảng
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

// Khởi chạy
document.addEventListener("DOMContentLoaded", () => {
    loadQuiz(currentPage);
    document.getElementById("submit-btn").addEventListener("click", submitQuiz);
    document.getElementById("quiz").addEventListener("change", () => {
        updateSelectedAnswers();
        // checkAllAnswered();
    });
});
