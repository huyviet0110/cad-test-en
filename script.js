// Dữ liệu câu hỏi
const quizData = [
    {
        question: "Regarding Form Designer, which of the following is correct?",
        type: "single",
        options: ["a, b, c, d", "b, c, d", "a, b, d", "a, b, c"],
        correct: [3],
        explanation:
            "In Form Designer, fields are dragged from the Fields tab (a), new fields are created by dragging from Field Types and configuring (b), and fields are deleted by hovering and clicking Delete (c). Adding sections is done via the Form Layout, not Field Types (d is incorrect). Reference: ServiceNow Form Designer documentation.",
    },
    {
        question: "Which of the following are configured in Email Notification?",
        type: "single",
        options: ["a, b, c", "a, b, d", "b, c, d", "a, c, d"],
        correct: [0],
        explanation:
            "Email Notifications configure who receives the notification (a), the content (b), and when it is sent (c). How it is sent (d) is managed by system settings, not notification configuration. Reference: ServiceNow Email Notification setup.",
    },
    {
        question:
            "How can you review the scripts, reports, and other application artifacts included in a published application?",
        type: "single",
        options: [
            "Enter the application name in the global search field.",
            "Open the instance’s update set list.",
            "Check the 'Application Files Related List' of the published application.",
            "Open each artifact’s record individually and check the application field value.",
        ],
        correct: [2],
        explanation:
            "The Application Files Related List in the application record lists all artifacts (scripts, reports, etc.) included in the application. Reference: ServiceNow Application Management.",
    },
    {
        question: "Which of the following is not a client-side script debugging strategy?",
        type: "single",
        options: ["g_form.addInfoMessage()", "Field Watcher", "jslog()", "gs.log()"],
        correct: [3],
        explanation:
            "gs.log() is a server-side debugging method. Client-side debugging uses g_form.addInfoMessage(), Field Watcher, and jslog(). Reference: ServiceNow Client-Side Scripting.",
    },
    {
        question:
            "Which application access configuration field is unavailable if the 'Readable' setting field is not selected?",
        type: "single",
        options: [
            "All access to this table via web services",
            "Can create, update, delete",
            "The readable setting does not affect the availability of other application access fields.",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "If 'Readable' is not selected, the 'Can create, update, delete' option is disabled as it depends on read access. Reference: ServiceNow Application Access Configuration.",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Outbound Email", "Application", "Record", "Schedule"],
        correct: [0],
        explanation:
            "Flow Designer supports Application, Record, and Schedule triggers. Outbound Email is not a trigger type. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question:
            "When creating a new application file in a scoped application, which of the following has cross-scope access enabled by default?",
        type: "single",
        options: ["REST Message", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation:
            "Tables in scoped applications have cross-scope access enabled by default to allow data sharing, unless restricted. Reference: ServiceNow Scoped Application Access.",
    },
    {
        question:
            "Which of the following is an incorrect statement about the 'Weight' field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest Weight is sent for the same record and recipient.",
            "If the Weight value is 0, the email is not sent.",
            "The Weight value is 0 by default.",
            "If the Weight value is 0, the notification is always sent when the sending condition is met.",
        ],
        correct: [1],
        explanation:
            "A Weight value of 0 does not prevent sending; notifications with Weight 0 are sent if conditions are met. Reference: ServiceNow Email Notification Weight.",
    },
    {
        question: "Which object is inaccessible to a Display Business Rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation:
            "The 'previous' object is not available in Display Business Rules, which run before the form loads. Reference: ServiceNow Business Rule documentation.",
    },
    {
        question: "Which of the following are available in a global application? (Select two)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer",
        ],
        correct: [0, 3],
        explanation:
            "Global applications support Automated Test Framework and Flow Designer. Source Control and Delegated Development are scoped application features. Reference: ServiceNow Global vs. Scoped Applications.",
    },
    {
        question: "Which of the following is not a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [3],
        explanation:
            "Form Choice is not a UI Action type. Valid types include List Choice, Form Button, and List Banner Button. Reference: ServiceNow UI Actions.",
    },
    {
        question: "Which of the following is not supported by Flow Designer?",
        type: "single",
        options: [
            "Calling a subflow from a flow",
            "Testing a flow with rollback",
            "Using delegated development",
            "Executing a flow from a MetricBase trigger",
        ],
        correct: [1],
        explanation:
            "Flow Designer does not support testing with rollback. Other options are supported. Reference: ServiceNow Flow Designer limitations.",
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
        question: "Modules require a link type. Which of the following are link types?",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [2],
        explanation:
            "Valid link types include List of Records, Content Page, Order, and URL (from Arguments). Reference: ServiceNow Module Configuration.",
    },
    {
        question:
            "If the 'Allow configuration' application access option is selected, which of the following is correct?",
        type: "single",
        options: [
            "Only scripts from in-scope applications can create business rules for the table.",
            "Users with the application’s user role can modify scripts.",
            "Out-of-scope applications can create business rules for the table.",
            "Out-of-scope applications can add new tables to the scoped application.",
        ],
        correct: [2],
        explanation:
            "Allow configuration permits out-of-scope applications to create business rules for the table. Reference: ServiceNow Application Access.",
    },
    {
        question:
            "When configuring a field label for a child table in Form Designer, which table’s label is changed?",
        type: "single",
        options: ["Base table", "Child table", "Parent table", "All tables"],
        correct: [1],
        explanation:
            "Field label changes in Form Designer apply only to the child table. Reference: ServiceNow Form Designer.",
    },
    {
        question: "Which of the following is correct?",
        type: "single",
        options: [
            "UI Policy actions are executed before the UI Policy script.",
            "The execution order of UI Policy scripts and actions is determined at runtime.",
            "UI Policy scripts are executed before UI Policy actions.",
            "UI Policy actions and scripts are executed simultaneously.",
        ],
        correct: [0],
        explanation:
            "UI Policy actions execute before the script to enforce field behaviors. Reference: ServiceNow UI Policy documentation.",
    },
    {
        question:
            "The following is a business rule script template: This type of JavaScript function is known as which of the following?",
        type: "single",
        options: ["Constructor", "Scope", "Anonymous", "Self-executing"],
        correct: [3],
        explanation:
            "A self-executing function runs immediately upon definition, commonly used in Business Rules. Reference: ServiceNow Scripting.",
    },
    {
        question:
            "Which method returns true only if the currently logged-in user has the 'catalog_admin' role?",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')",
        ],
        correct: [1],
        explanation:
            "g_user.hasRoleExactly() checks for the exact role without including inherited roles like admin. Reference: ServiceNow GlideUser API.",
    },
    {
        question:
            "There are basic steps to create a Utils Script Include. Identify the step that is not included.",
        type: "single",
        options: [
            "Identify the table",
            "Script the function",
            "Create a class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation:
            "Creating a Script Include does not involve identifying a table; it requires scripting functions and creating a class. Reference: ServiceNow Script Include.",
    },
    {
        question:
            "Which roles allow access to source control repository operations (importing an application from source control or linking an application to source control)? (Select two)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles grant access to source control operations. Reference: ServiceNow Source Control documentation.",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax is used to reference the properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property name>}",
            "${current.<property name>}",
            "${<property name>.getDisplayValue()}",
            "${gs.<property name>}",
        ],
        correct: [0],
        explanation:
            "${event.<property name>} is used to reference event properties in notifications. Reference: ServiceNow Notification Syntax.",
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
        question: "Which of the following is a correct statement about GlideUser (g_user) methods?",
        type: "single",
        options: [
            "Can only be used in client scripts and UI policies.",
            "Can only be used in business rules.",
            "Can be used in client scripts, UI policies, and UI actions.",
            "Can be used in business rules and Script Includes.",
        ],
        correct: [2],
        explanation:
            "GlideUser (g_user) is used in client-side scripts like client scripts, UI policies, and UI actions. Reference: ServiceNow GlideUser API.",
    },
    {
        question:
            "When configuring a module, what does the 'Override Application Menu Roles' configuration option do?",
        type: "single",
        options: [
            "Allows users with the module role but no access to the application menu to access the module.",
            "Allows self-service users to access the module without a role.",
            "Allows admins to access the module even when access is normally restricted.",
            "Allows users with access to the application menu to view the module without the module role.",
        ],
        correct: [0],
        explanation:
            "Override Application Menu Roles allows module access for users with the module role, bypassing menu restrictions. Reference: ServiceNow Module Configuration.",
    },
    {
        question:
            "Which platform feature is used to determine the relationship between fields in an import set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Source",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "Transform Maps define field mappings for data imports. Reference: ServiceNow Import Sets.",
    },
    {
        question: "When configuring a REST message, what is an endpoint?",
        type: "single",
        options: [
            "A command to stop the execution of a REST script.",
            "The URI of the data to be accessed, queried, or modified.",
            "Information about the format of the returned data.",
        ],
        correct: [1],
        explanation:
            "An endpoint is the URI for accessing or modifying data in a REST message. Reference: ServiceNow REST Message Configuration.",
    },
    {
        question: "When evaluating access controls, how does ServiceNow search and evaluate them?",
        type: "single",
        options: [
            "Only those matching the current table.",
            "Only those matching the current field.",
            "From the most specific match to the most general match.",
            "From the most general match to the most specific match.",
        ],
        correct: [2],
        explanation:
            "ServiceNow evaluates access controls from most specific to most general. Reference: ServiceNow Access Control Evaluation.",
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
            "gs.hasRole('admin') checks if the user has the admin role, including inherited roles. Reference: ServiceNow GlideSystem API.",
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
        question: "Identify the incorrect statement about Delegated Development in ServiceNow.",
        type: "single",
        options: [
            "Admins can grant non-admin users the ability to develop global applications.",
            "Admins can specify the types of application files developers can access.",
            "Admins can grant developers access to script fields.",
            "Admins can grant developers access to security records.",
        ],
        correct: [3],
        explanation:
            "Admins cannot grant access to security records via Delegated Development. Reference: ServiceNow Delegated Development.",
    },
    {
        question: "What is one purpose of the ServiceNow REST API Explorer?",
        type: "single",
        options: [
            "Practicing REST interactions with public data providers.",
            "Finding web resources for learning about REST.",
            "Converting SOAP message functions to REST methods.",
            "Creating sample code for sending REST requests to ServiceNow.",
        ],
        correct: [3],
        explanation:
            "REST API Explorer generates sample code for ServiceNow REST requests. Reference: ServiceNow REST API Explorer.",
    },
    {
        question: "Which of the following is a correct statement about Application Scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope.",
            "Applications downloaded from ServiceNow third-party developers cannot have name conflicts.",
            "All developers can edit any application.",
            "Developers can choose the namespace prefix for the scope.",
        ],
        correct: [1],
        explanation:
            "Third-party applications use unique namespaces to avoid conflicts. Reference: ServiceNow Application Scope.",
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
        question: "Which of the following is not a purpose of Application Scope?",
        type: "single",
        options: [
            "Providing relationships between application artifacts.",
            "Providing a way to track the user who developed the application.",
            "Providing a namespace (prefix and scope name) to prevent name conflicts between applications.",
            "Controlling how scripts from another scope can modify tables in the scoped application.",
        ],
        correct: [1],
        explanation:
            "Application Scope does not track developers; it manages artifacts, namespaces, and access. Reference: ServiceNow Application Scope.",
    },
    {
        question:
            "As part of application development planning, which of the following should be documented as part of the business process?",
        type: "single",
        options: [
            "Business challenge, data input/output, users/stakeholders, and process steps.",
            "Business challenge, data input/output, project schedule, and process steps.",
            "Business challenge, data input/output, users/stakeholders, and database capacity.",
            "Business challenge, users/stakeholders, available licenses, and database capacity.",
        ],
        correct: [0],
        explanation:
            "Business process documentation includes challenges, data, stakeholders, and steps. Reference: ServiceNow Application Development Best Practices.",
    },
    {
        question: "Which of the following is not true when extending an existing table?",
        type: "single",
        options: [
            "Access controls from the parent table are evaluated when determining access to records and fields in the new table.",
            "The new table inherits functionality built into the parent table.",
            "The new table inherits all fields from the parent table.",
            "All required behavior must be scripted and configured.",
        ],
        correct: [3],
        explanation:
            "Inherited functionality reduces the need for scripting all behaviors. Reference: ServiceNow Table Extension.",
    },
    {
        question: "Which of the following cannot be debugged using Field Watcher?",
        type: "single",
        options: ["Business Rule", "Script Include", "Client Script", "Access Control"],
        correct: [1],
        explanation:
            "Field Watcher debugs field changes in Business Rules, Client Scripts, and Access Controls, but not Script Includes. Reference: ServiceNow Field Watcher.",
    },
    {
        question: "Which objects can be used in an Inbound Action script?",
        type: "single",
        options: [
            "current and previous",
            "current and email",
            "current and event",
            "current and producer",
        ],
        correct: [1],
        explanation:
            "Inbound Action scripts use 'current' (target record) and 'email' (email details). Reference: ServiceNow Inbound Email Actions.",
    },
    {
        question: "Which of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "GlideUser (g_user) is a client-side API for user information. Reference: ServiceNow Client-Side APIs.",
    },
    {
        question:
            "When a developer configures ServiceNow using industry-standard JavaScript, what do they do?",
        type: "single",
        options: [
            "Right-click applications in the Navigator to edit the context menu.",
            "Extend and add functionality.",
            "Customize the organization’s company logo or banner text.",
            "Set the display name for outbound emails.",
        ],
        correct: [1],
        explanation:
            "JavaScript in ServiceNow is used to extend and add functionality. Reference: ServiceNow Scripting.",
    },
    {
        question: "How many application menus can be created?",
        type: "single",
        options: [
            "Three: one for application user modules, one for application admins, and one for ServiceNow admins.",
            "As many as needed for the application design.",
            "Two: one for application user modules and one for admins.",
            "Only one, used by all application modules.",
        ],
        correct: [1],
        explanation:
            "Application menus are created as needed for the application design. Reference: ServiceNow Application Menus.",
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
        question:
            "What is the syntax for accessing the value of a form field in a Record Producer script?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "producer.variablename accesses Record Producer form field values. Reference: ServiceNow Record Producer Scripting.",
    },
    {
        question:
            "Which method displays a message with a blue background at the top of the current form by default?",
        type: "single",
        options: [
            "g_form.addInfoMsg()",
            "g_form.addInfoMessage()",
            "g_form.showFieldMessage()",
            "g_form.showFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.addInfoMessage() displays a blue info message at the form’s top. Reference: ServiceNow GlideForm API.",
    },
    {
        question:
            "A scoped application containing Flow Designer content specific to a particular application is called what?",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A Spoke is a scoped application with Flow Designer content. Reference: ServiceNow Flow Designer Spokes.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu (e.g., opening a content frame or a page in a new tab/window).",
            "A group of menus or pages providing information or functionality to end users.",
            "A method to filter items in the Application Navigator to allow users to quickly access information or services.",
            "A method to provide software to end users via the web.",
        ],
        correct: [0],
        explanation:
            "A module is a navigational function within an application menu. Reference: ServiceNow Modules.",
    },
    {
        question:
            "Which source control operation is available in both Studio and a Git repository?",
        type: "single",
        options: [
            "Create Branch",
            "Apply Remote Changes",
            "Stash Local Changes",
            "Edit Repository Configurations",
        ],
        correct: [0],
        explanation:
            "Creating a branch is supported in both Studio and Git. Reference: ServiceNow Source Control.",
    },
    {
        question:
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application Name"],
        correct: [3],
        explanation:
            "Linking to a Git repository requires a URL, username, and password, but not the application name. Reference: ServiceNow Source Control Linking.",
    },
    {
        question:
            "Which report types can be created by right-clicking a column header in a table list?",
        type: "single",
        options: ["Bar, Pie, Histogram, and Line", "Bar", "Bar, Pie, and Histogram", "Bar and Pie"],
        correct: [3],
        explanation:
            "Right-clicking a column header allows creating Bar and Pie reports. Reference: ServiceNow Reporting.",
    },
    {
        question:
            "Which method is not used to log messages in server-side scripts for private scope applications?",
        type: "single",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "gs.log() is not used in private scope applications; gs.error(), gs.warn(), and gs.debug() are used. Reference: ServiceNow Scoped Application Logging.",
    },
    {
        question:
            "When the 'Create module' field is selected while creating a table, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to create a new record.",
            "Opens a link to a Wiki article about customizing the module’s behavior.",
            "Displays the application’s empty homepage.",
            "Displays a list of all records in the table.",
        ],
        correct: [3],
        explanation:
            "The default module behavior is to display a list of table records. Reference: ServiceNow Table Module Creation.",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should application access be configured?",
        type: "single",
        options: [
            "Create an access control to prevent other application scopes from creating configuration records instead of using application access.",
            "Set the 'Accessible from' field value to 'All application scopes' and deselect the 'Can create' option.",
            "Set the 'Accessible from' field value to 'This application scope only' and deselect the 'Allow access to this table via web services' option.",
            "Set the 'Accessible from' field value to 'This application scope only.'",
        ],
        correct: [3],
        explanation:
            "Setting 'Accessible from' to 'This application scope only' restricts access to the application’s scope. Reference: ServiceNow Application Access.",
    },
    {
        question:
            "What are the benefits of extending an existing table, such as the Task table, when creating a new application?",
        type: "single",
        options: ["a, b, c, and d", "a and b", "b and c", "a, b, and c"],
        correct: [3],
        explanation:
            "Extending a table reuses fields (a, b) and applies parent logic (c), but does not copy records (d). Reference: ServiceNow Table Extension.",
    },
    {
        question:
            "When configuring an access control without conditions or scripts, which of the following is an incorrect statement?",
        type: "single",
        options: [
            "table.* grants access to all fields in the record.",
            "table.None grants access to all records in the table.",
            "table.field grants access to a specific field in the record.",
            "table.id grants access to a specific record in the table.",
        ],
        correct: [1],
        explanation:
            "table.None denies access to records; it does not grant access. Reference: ServiceNow Access Control Syntax.",
    },
    {
        question: "Which methods are useful in an access control script?",
        type: "single",
        options: [
            "g_user.hasRole() and current.isNewRecord()",
            "gs.hasRole() and current.isNewRecord()",
            "g_user.hasRole() and current.isNew()",
            "gs.hasRole() and current.isNew()",
        ],
        correct: [1],
        explanation:
            "gs.hasRole() and current.isNewRecord() are server-side methods for access control scripts. Reference: ServiceNow Access Control Scripting.",
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
        question:
            "When a ServiceNow instance requests information from a web service, what role does ServiceNow play?",
        type: "single",
        options: ["Publisher", "Specialist", "Provider", "Consumer"],
        correct: [3],
        explanation:
            "ServiceNow acts as a consumer when requesting data from a web service. Reference: ServiceNow Web Services.",
    },
    {
        question: "What is the fastest way to create and configure a Record Producer?",
        type: "single",
        options: [
            "Create a catalog category, open the category, and select the 'Add New Record Producer' button.",
            "Use the Record Producer module to manually add and configure all variables.",
            "Open the 'Table records' for a table and select 'Add to Service Catalog Related Link.'",
            "Open a table’s form, right-click the form header, and select 'Create Record Producer.'",
        ],
        correct: [2],
        explanation:
            "The 'Add to Service Catalog Related Link' is the fastest method to create a Record Producer. Reference: ServiceNow Record Producer Creation.",
    },
    {
        question:
            "Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current",
        ],
        correct: [2],
        explanation:
            "Scheduled Jobs use GlideSystem and GlideRecord for server-side operations. Reference: ServiceNow Scheduled Jobs.",
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
        question: "What are application files in a ServiceNow application?",
        type: "single",
        options: [
            "An XML export of the application’s table records.",
            "A CSV file containing data imported into the application.",
            "ServiceNow artifacts that make up the application.",
            "An XML export of the application’s update set.",
        ],
        correct: [2],
        explanation:
            "Application files are the artifacts (scripts, forms, etc.) that compose the application. Reference: ServiceNow Application Files.",
    },
    {
        question: "Which of the following is an incorrect statement about modules?",
        type: "single",
        options: [
            "Modules open content pages.",
            "Access to modules is controlled by roles.",
            "All modules must be part of an application menu.",
            "All modules must be associated with a table.",
        ],
        correct: [3],
        explanation:
            "Modules are not required to be associated with a table; they can link to other content. Reference: ServiceNow Modules.",
    },
    {
        question: "What graphically displays the relationships between tables?",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation:
            "Schema Map visually shows table relationships. Reference: ServiceNow Schema Map.",
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
            "When creating an application using Guided Application Creator, which of the following is a user experience option?",
        type: "single",
        options: ["Portal", "Mobile", "Self-Service", "Workspace"],
        correct: [1],
        explanation:
            "Mobile is a user experience option in Guided Application Creator. Reference: ServiceNow Guided Application Creator.",
    },
    {
        question:
            "When writing a client script to provide feedback for a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.showFieldMsg() displays feedback for a specific field. Reference: ServiceNow GlideForm API.",
    },
    {
        question: "Which action can a Business Rule perform without using a script?",
        type: "single",
        options: [
            "Set a field value and write to the system log.",
            "Set a field value and generate an event.",
            "Set a field value and add a message.",
            "Set a field value and query the database.",
        ],
        correct: [2],
        explanation:
            "Business Rules can set field values and add messages without scripting. Reference: ServiceNow Business Rules.",
    },
    {
        question:
            "When writing scripts in a private scope application, which server-side object provides methods for manipulating dates?",
        type: "single",
        options: ["GlideDateTime", "GlideRecord", "GlideSystem", "current"],
        correct: [0],
        explanation:
            "GlideDateTime handles date manipulations in server-side scripts. Reference: ServiceNow GlideDateTime API.",
    },
    {
        question:
            "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            "Create an application property to store the URL",
            "Configure the page in the Module that opens the Record Producer UI",
            'Write a script in the Record Producer\'s Script field: producer.redirect = "<URL>";',
            'Write an after Business Rule script for the Record Producer\'s table: window.redirect = "<URL>";',
        ],
        correct: [2],
        explanation:
            'The redirect page is set using producer.redirect = "<URL>" in the Record Producer’s script field. Reference: ServiceNow Record Producer documentation.',
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
        question:
            "Which server-side API debug logging method is available in a scoped application?",
        type: "single",
        options: ["gs.log()", "gs.info()", "gs.debuglog()", "gs.print()"],
        correct: [3],
        explanation:
            "gs.print() is available for debug logging in scoped applications. Reference: ServiceNow Scoped Application Logging.",
    },
    {
        question: "Which script types run on the server? (Select three)",
        type: "multiple",
        options: ["Business Rule", "Client Script", "UI Policy", "Script Action", "Scheduled Job"],
        correct: [0, 3, 4],
        explanation:
            "Business Rules, Script Actions, and Scheduled Jobs run on the server. Reference: ServiceNow Server-Side Scripting.",
    },
    {
        question: "What is the optimal UX format for lists or forms?",
        type: "single",
        options: ["Form", "List", "Standard", "Classic"],
        correct: [2],
        explanation:
            "Standard is the optimal UX format for lists and forms. Reference: ServiceNow UX Formats.",
    },
    {
        question:
            "When creating a table in a private scope application, which four access controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
        ],
        correct: [1],
        explanation:
            "Default access controls are Create, Delete, Read, and Write. Reference: ServiceNow Table Access Controls.",
    },
    {
        question:
            "Which of the following is a correct statement about the script fragment: g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "The g_user.hasRole() method does not exist.",
            "The method returns false only if the currently logged-in user does not have the x_my_app_user role.",
            "The method returns true only if the currently logged-in user has the x_my_app_user role.",
            "The method returns true if the currently logged-in user has the x_my_app_user role or the admin role.",
        ],
        correct: [3],
        explanation:
            "g_user.hasRole() returns true for the specified role or admin role. Reference: ServiceNow GlideUser API.",
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
            "The application access setting 'Allow access to this table via web services' exists. Which is a correct statement when this option is selected?",
        type: "single",
        options: [
            "This option restricts record deletion via web services, but record reading is always possible.",
            "Even if not selected, users with appropriate permissions can access table records using web services.",
            "This option restricts SOAP web service access only, not REST.",
            "Users executing queries via web services must have appropriate permissions to access table records.",
        ],
        correct: [3],
        explanation:
            "Web service access requires appropriate permissions. Reference: ServiceNow Web Services Access.",
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
        question: "What is a workflow context?",
        type: "single",
        options: [
            "The table where the workflow is defined and conditions like 'Active is true.'",
            "Generated from a workflow version, executes activities, and follows transitions.",
            "The business reason or process for which the workflow was designed.",
            "A workflow that is checked out and being edited.",
        ],
        correct: [1],
        explanation:
            "Workflow context is the runtime instance executing activities. Reference: ServiceNow Workflow Context.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application during development?",
        type: "single",
        options: [
            "Application properties allow developers to override properties inherited from ServiceNow.",
            "The application properties page serves as an excellent landing page for the application.",
            "Application properties allow developers or admins to change application behavior without modifying application artifacts.",
            "Application users know to access the application properties page to change the application’s appearance.",
        ],
        correct: [2],
        explanation:
            "Properties enable behavior changes without altering artifacts. Reference: ServiceNow Application Properties.",
    },
    {
        question:
            "When does an application not need to use a Scheduled Script Execution (Scheduled Job)?",
        type: "single",
        options: [
            "When the application needs to send weekly reminder emails to requesters about all records in a table.",
            "When the application needs to run a cleanup script on the last day of each month.",
            "When the application needs to query the database daily to find unassigned records.",
            "When the application needs to run a client-side script daily at the same time.",
        ],
        correct: [3],
        explanation:
            "Client-side scripts do not use Scheduled Jobs, which are server-side. Reference: ServiceNow Scheduled Jobs.",
    },
    {
        question: "Which object cannot be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation:
            "The 'previous' object is not available in Script Actions. Reference: ServiceNow Script Actions.",
    },
    {
        question: "How does ServiceNow match inbound emails to existing records?",
        type: "single",
        options: ["Watermark", "Record Link", "Subject Line", "sys_id"],
        correct: [0],
        explanation:
            "Watermarks in emails match them to records. Reference: ServiceNow Inbound Email Processing.",
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
    {
        question: "What is a web service?",
        type: "single",
        options: [
            "A method for creating and managing UI pages.",
            "A method for connecting to other software applications over a network.",
            "A method for discovering various systems or applications.",
            "A customer-facing view of available services and product offerings provided by departments within an organization.",
        ],
        correct: [1],
        explanation:
            "Web services connect applications over networks. Reference: ServiceNow Web Services.",
    },
    {
        question: "Which method is not part of the ServiceNow REST API?",
        type: "single",
        options: ["COPY", "GET", "DELETE", "POST"],
        correct: [0],
        explanation:
            "COPY is not a REST API method; GET, DELETE, and POST are. Reference: ServiceNow REST API.",
    },
    {
        question:
            "You are developing the MyApp application, which has a table called Table A. When this application is installed on an instance, you want Table A’s records to be installed as part of the application. Under what condition will Table A’s records be installed?",
        type: "single",
        options: [
            "If Table A is active and extends the Task table.",
            "If Table A’s records are added to the application record using the 'Create Application Files' context menu item.",
            "If Table A has an auto-number counter for new records.",
            "If Table A is not included in the 'System Clone > Exclude Tables' list.",
        ],
        correct: [1],
        explanation:
            "Records are included via the 'Create Application Files' menu. Reference: ServiceNow Application Installation.",
    },
    {
        question: "How can an application behind a firewall be linked to a repository?",
        type: "single",
        options: [
            "This option is not supported.",
            "Link the application to source control via a MID Server.",
            "Link the application to source control using an access token.",
            "Link the application to source control using multi-factor authentication.",
        ],
        correct: [1],
        explanation:
            "A MID Server enables linking to repositories behind firewalls. Reference: ServiceNow Source Control.",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A content archive of downloadable ServiceNow scripts.",
            "An alias for the ServiceNow Developer Share site.",
            "A source of developer content created by the ServiceNow community.",
            "A marketplace for free and paid certified ServiceNow applications and integrations.",
        ],
        correct: [3],
        explanation:
            "The ServiceNow Store is a marketplace for applications and integrations. Reference: ServiceNow Store.",
    },
    {
        question: "What happens when a table extends another table?",
        type: "single",
        options: [
            "The application scope is automatically updated.",
            "It does not inherit the parent table’s fields.",
            "It may inherit the parent table’s fields in some cases.",
            "It inherits the parent table’s fields.",
        ],
        correct: [3],
        explanation:
            "Extended tables inherit all parent fields. Reference: ServiceNow Table Extension.",
    },
    {
        question:
            "When using Guided Application Creator to create an application, which option is not available for creating a table?",
        type: "single",
        options: [
            "Create a table from a template.",
            "Create a table from scratch.",
            "Extend a table.",
            "Upload a spreadsheet.",
        ],
        correct: [0],
        explanation:
            "Tables cannot be created from templates in Guided Application Creator. Reference: ServiceNow Guided Application Creator.",
    },
    {
        question: "What do server-side scripts manage?",
        type: "single",
        options: ["Database and backend", "Playbook access", "User access", "Forms and fields"],
        correct: [0],
        explanation:
            "Server-side scripts manage database and backend operations. Reference: ServiceNow Server-Side Scripting.",
    },
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
        question: "Which statement about Form Designer is incorrect?",
        type: "single",
        options: [
            "To add a section to the form layout, drag it from the Field Types tab to the desired location.",
            "To add a field to the form layout, drag the field from the Fields tab to the desired location.",
            "To remove a field from the form layout, hover over the field to enable the action button and select the 'Delete (X)' button.",
            "To create a new field in the form’s table, drag the appropriate data type from the Field Types tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Sections are added via Form Layout, not Field Types. Reference: ServiceNow Form Designer.",
    },
    {
        question:
            "What record is used to track cross-scope applications or scripts requesting access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted Caller Access Record",
            "Caller Tracking Record",
            "Access Control Level Record",
            "Cross-Scope Access Record",
        ],
        correct: [0],
        explanation:
            "Restricted Caller Access Records track cross-scope access requests. Reference: ServiceNow Cross-Scope Access.",
    },
    {
        question:
            "In an ATF (Automated Test Framework) test step, which step creates a user with assigned roles and groups for testing?",
        type: "single",
        options: ["Create Group", "Impersonation", "Create User", "Create Role"],
        correct: [2],
        explanation:
            "The Create User step assigns roles and groups for testing. Reference: ServiceNow ATF documentation.",
    },
    {
        question: "Which plugin enables Guided Application Creator?",
        type: "single",
        options: [
            "com.glide.sn-guided-app-creator",
            "com.glide.service_creator",
            "com.glide.snc.apps_creator",
            "com.snc.apps_creator_template",
        ],
        correct: [0],
        explanation:
            "The com.glide.sn-guided-app-creator plugin enables Guided Application Creator. Reference: ServiceNow Plugins.",
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
        question: "Which features are available in Studio? (Select two)",
        type: "multiple",
        options: [
            "Push to update set",
            "Merge branch",
            "Search code",
            "Push to external source control",
        ],
        correct: [2, 3],
        explanation:
            "Studio supports code searching and pushing to external source control. Reference: ServiceNow Studio Features.",
    },
    {
        question: "The Task table is an example of which of the following? (Select two)",
        type: "multiple",
        options: ["Parent class", "Legacy class", "Child class", "Base class"],
        correct: [0, 3],
        explanation:
            "The Task table is a parent and base class for tables like Incident. Reference: ServiceNow Task Table.",
    },
    {
        question: "Which statement is correct when deleting a field from a table?",
        type: "single",
        options: [
            "Deleting a field also deletes the table’s records.",
            "User-defined, non-inherited fields can be deleted.",
            "Any field on a table can be deleted.",
            "Inherited fields can be deleted.",
        ],
        correct: [1],
        explanation:
            "Only user-defined, non-inherited fields can be deleted. Reference: ServiceNow Table Field Management.",
    },
    {
        question: "Why build a custom app? (Select two)",
        type: "multiple",
        options: [
            "To avoid using code repositories like GitHub or GitLab.",
            "To replace ServiceNow base tables.",
            "To meet specific use cases for internal processes.",
            "To create custom integrations with third-party systems.",
        ],
        correct: [2, 3],
        explanation:
            "Custom apps address internal processes and integrations. Reference: ServiceNow Custom Applications.",
    },
    {
        question: "How can a table be created in ServiceNow? (Select three)",
        type: "multiple",
        options: [
            "Using legacy workflows",
            "Uploading a spreadsheet to convert to a custom table",
            "Using Flow Designer",
            "Using Now Experience Table Creator",
            "Extending a table",
            "Creating a custom table",
        ],
        correct: [1, 4, 5],
        explanation:
            "Tables can be created by uploading spreadsheets, extending tables, or creating custom tables. Reference: ServiceNow Table Creation.",
    },
    {
        question:
            "When selecting a data type for a field displayed on a form, which statement is incorrect?",
        type: "single",
        options: [
            "Use the String data type for free-form text fields.",
            "Use the Phone Number data type to automate phone number validation.",
            "Use the Choice data type to restrict options in a field.",
            "Use the Date data type for entering dates and times.",
        ],
        correct: [3],
        explanation:
            "Date/Time data type, not Date, is used for dates and times. Reference: ServiceNow Field Data Types.",
    },
    {
        question: "Which is not included in Form Designer?",
        type: "single",
        options: ["Page Header", "Schema Map", "Field Navigator", "Form Layout"],
        correct: [1],
        explanation:
            "Schema Map is not part of Form Designer. Reference: ServiceNow Form Designer.",
    },
    {
        question: "Which class is not part of the client-side scoped API?",
        type: "single",
        options: ["GlideDialogWindow", "GlideAjax", "GlideRecord", "GlideForm"],
        correct: [2],
        explanation:
            "GlideRecord is a server-side API, not client-side. Reference: ServiceNow Client-Side APIs.",
    },
    {
        question: "When designing and creating a form, what is created to organize fields?",
        type: "single",
        options: ["Button", "Tab", "Section", "Related List"],
        correct: [2],
        explanation: "Sections organize fields on a form. Reference: ServiceNow Form Design.",
    },
    {
        question: "What is a good way to add instructions to a form?",
        type: "single",
        options: [
            "A related link to a Wiki page",
            "A context menu UI action",
            "An annotation",
            "Setting a read-only field",
        ],
        correct: [2],
        explanation:
            "Annotations provide instructions on forms. Reference: ServiceNow Form Annotations.",
    },
    {
        question:
            "Which GlideRecord methods execute queries against a database table? (Select three)",
        type: "multiple",
        options: ["_get()", "runQuery()", "query()", "_query()", "get()"],
        correct: [2, 3, 4],
        explanation:
            "query(), _query(), and get() execute database queries. Reference: ServiceNow GlideRecord API.",
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
        question:
            "Within a Business Rule, which method returns the sys_id of the currently logged-in user?",
        type: "single",
        options: [
            "g_form.getUserID()",
            "gs.getUserSysID()",
            "gs.getUserID()",
            "g_form.getUserSysID()",
        ],
        correct: [2],
        explanation:
            "gs.getUserID() returns the user’s sys_id in a Business Rule. Reference: ServiceNow GlideSystem API.",
    },
    {
        question:
            "Access Control debug information identifies whether each element grants or denies access. In what order are Access Control elements evaluated?",
        type: "single",
        options: [
            "Condition, Role, Script",
            "Condition, Script, Role",
            "Role, Condition, Script",
            "Script, Condition, Role",
        ],
        correct: [2],
        explanation:
            "Access Controls evaluate Role, Condition, then Script. Reference: ServiceNow Access Control Evaluation.",
    },
    {
        question:
            "Given a table named 'table' with three fields—field1, field2, and field3—and the following Access Control list, which fields can a user with the itil role read?",
        type: "single",
        options: [
            "All fields except field3",
            "field1, field2, and field3",
            "field1 and field3",
            "field3 only",
        ],
        correct: [3],
        explanation:
            "The specific table.field3 ACL for itil role overrides others, allowing only field3 read access. Reference: ServiceNow Access Control Specificity.",
    },
    {
        question:
            "With the same Access Control list, which fields can a user with the itil role read?",
        type: "single",
        options: ["field3 only", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "The table.None ACL grants itil role read access to all fields, but table.field3 restricts to field3, so others are readable. Reference: ServiceNow Access Control Specificity.",
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
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation:
            "gs.getProperty() retrieves application property values. Reference: ServiceNow GlideSystem API.",
    },
    {
        question: "What type of module link is used to access an application properties page?",
        type: "single",
        options: [
            "Single Record",
            "HTML (from Arguments)",
            "URL (from Arguments)",
            "Script (from Arguments)",
        ],
        correct: [2],
        explanation:
            "URL (from Arguments) links to application properties pages. Reference: ServiceNow Module Links.",
    },
    {
        question:
            "Identify how an application can respond to an event generated by the gs.eventQueue() method.",
        type: "single",
        options: ["b and c", "c", "a and d", "a and c"],
        correct: [2],
        explanation:
            "Script Actions and Email Notifications respond to gs.eventQueue() events. Reference: ServiceNow Event Management.",
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
        question:
            "What is the benefit of storing the majority of an application’s server-side scripts in a Script Include?",
        type: "single",
        options: ["a, b, and d", "a, b, c, and d", "b, c, and d", "a, b, and c"],
        correct: [2],
        explanation:
            "Script Includes execute when called (b), hide logic in Store apps (c), and centralize edits (d). Reference: ServiceNow Script Includes.",
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
        question:
            "When creating a SOAP message, which syntax indicates a variable passed when the function is called?",
        type: "single",
        options: [
            "current.variable_name",
            "${variable_name}",
            "<variable_name>.do?WSDL",
            "<variable_name>",
        ],
        correct: [1],
        explanation:
            "${variable_name} passes variables in SOAP messages. Reference: ServiceNow SOAP Message Configuration.",
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
        question:
            "Flow Designer supports variable data types for storing record data or complex data. Which variable data types are supported? (Select three)",
        type: "multiple",
        options: [
            "Choice data type",
            "Array.Reference data type",
            "Integer data type",
            "Freedom data type",
            "Array.Boolean data type",
            "Label data type",
        ],
        correct: [0, 1, 4],
        explanation:
            "Choice, Array.Reference, and Array.Boolean are supported variable types. Reference: ServiceNow Flow Designer Variables.",
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
        question:
            "How can a data table be specified using Guided Application Creator (GAC)? (Select three)",
        type: "multiple",
        options: [
            "Uploading an existing PDF",
            "Creating a new table on the platform",
            "Using a free-form database",
            "Uploading an existing spreadsheet",
            "Using an existing table on the platform",
            "Uploading an existing word processing document",
        ],
        correct: [1, 3, 4],
        explanation:
            "GAC supports creating new tables, uploading spreadsheets, and using existing tables. Reference: ServiceNow Guided Application Creator.",
    },
    {
        question: "What is the Event Registry?",
        type: "single",
        options: [
            "A workflow triggered each time an event is generated, used to debug events.",
            "An event log listing all generated events.",
            "A method used in server-side scripts to generate events and pass parameters.",
            "A table storing records of all events recognized by the ServiceNow system, enabling appropriate responses when events are generated.",
        ],
        correct: [3],
        explanation:
            "The Event Registry is a table for managing system events. Reference: ServiceNow Event Registry.",
    },
    {
        question:
            "Identify how an application can respond to an event generated by the gs.eventQueue() method. (Select two)",
        type: "multiple",
        options: [
            "Client Script",
            "Email Notification",
            "Scheduled Script Execution",
            "Script Action",
            "UI Policy",
        ],
        correct: [1, 3],
        explanation:
            "Email Notifications and Script Actions respond to gs.eventQueue() events. Reference: ServiceNow Event Management.",
    },
    {
        question: "Is it possible to change an application’s scope?",
        type: "single",
        options: [
            "No, it is not possible.",
            "Yes, it is possible.",
            "Yes, but only from global scope to private scope.",
            "Yes, but only from private scope to global scope.",
        ],
        correct: [1],
        explanation:
            "Application scope can be changed with admin privileges. Reference: ServiceNow Application Scope.",
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
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "User access",
            "Database and backend",
            "Playbook access",
            "Forms and form fields",
        ],
        correct: [3],
        explanation:
            "Client-side scripts manage forms and fields. Reference: ServiceNow Client-Side Scripting.",
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
        question: "When a scoped application contains flow actions, what is it called?",
        type: "single",
        options: ["Action", "Spoke", "Bundle", "Flow"],
        correct: [1],
        explanation:
            "A Spoke is a scoped application with flow actions. Reference: ServiceNow Flow Designer Spokes.",
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
            "What is required to link a ServiceNow application to a Git repository? (Choose 3 answers)",
        type: "multiple",
        options: ["URI", "ACL", "User name", "URL", "Application name", "Password"],
        correct: [2, 3, 5],
        explanation:
            "To link a ServiceNow application to a Git repository, you need the user name, URL, and password of the Git account. The URL is the repository address, and user name/password are credentials (or a personal access token). Reference: Link an application to source control - ServiceNow Docs",
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
        question:
            "When adding instructions to a form, which of the following is an appropriate method?",
        type: "single",
        options: [
            "Populated read-only field",
            "Annotation",
            "Related link to a Wiki page",
            "Context menu UI action",
        ],
        correct: [1],
        explanation:
            "Annotations are used to add instructional text or descriptions to a form in ServiceNow, providing a clear and appropriate method for including guidance. Reference: ServiceNow Form Designer documentation.",
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
            "When an application is ready to be shared, which of the following publishing methods are supported by ServiceNow? (Choose three answers)",
        type: "multiple",
        options: [
            "Publish to the ServiceNow Store",
            "Publish to a local USB device",
            "Publish to a local drive",
            "Publish to an application repository",
            "Publish to an update set",
            "Publish to a spreadsheet",
        ],
        correct: [0, 3, 4],
        explanation:
            "ServiceNow supports publishing applications to the ServiceNow Store, application repository, or update sets for sharing customizations. Local drives, USB devices, or spreadsheets are not supported methods. Reference: ServiceNow Application Publishing documentation.",
    },
    {
        question:
            "A scoped application that includes Flow Designer content dedicated to a specific application is called:",
        type: "single",
        options: ["Flow", "Bundle", "Spoke", "Action"],
        correct: [2],
        explanation:
            "A scoped application with dedicated Flow Designer content is called a Spoke, which provides reusable flow components for specific applications. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question: "To access an application properties page, which module link type is used?",
        type: "single",
        options: [
            "URL (from Arguments)",
            "HTML (from Arguments)",
            "Script (from Arguments)",
            "Single Record",
        ],
        correct: [0],
        explanation:
            "The URL (from Arguments) link type is used to access an application properties page, allowing navigation to the properties configuration. Reference: ServiceNow Module Configuration documentation.",
    },
    {
        question:
            "Which of the following is true about the Application Picker and application scope?",
        type: "single",
        options: [
            "Global is a reserved application that does not appear in the Application Picker",
            "Selecting an application from the Application Picker does not set the application scope",
            "Selecting an application from the Application Picker sets the application scope",
            "Selecting Global from the Application Picker sets the application scope to Incident",
        ],
        correct: [2],
        explanation:
            "Selecting an application from the Application Picker sets the application scope, determining the context for development and configuration. Reference: ServiceNow Application Scope documentation.",
    },
    {
        question:
            "When the 'Create Module' field is selected during table creation, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form so a new record can be created",
            "Displays a list of all records for the table",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior",
            "Displays an empty homepage for the application",
        ],
        correct: [1],
        explanation:
            "When the 'Create Module' field is selected, the new module defaults to displaying a list of all records for the table. Reference: ServiceNow Table Creation documentation.",
    },
    {
        question:
            "The source control operation used to save local changes to an instance for later application is called a(n):",
        type: "single",
        options: ["Stash", "Branch", "Tag", "Update set"],
        correct: [0],
        explanation:
            "A stash is used in ServiceNow source control to save local changes temporarily for later application. Note: The provided answer (Branch) seems incorrect based on standard ServiceNow terminology. Reference: ServiceNow Source Control documentation.",
    },
    {
        question: "What are application files in a ServiceNow application?",
        type: "single",
        options: [
            "ServiceNow artifacts that constitute an application",
            "CSV files containing data imported into an application",
            "An XML export of application table records",
            "An XML export of an application’s update set",
        ],
        correct: [0],
        explanation:
            "Application files are the ServiceNow artifacts (e.g., scripts, tables, UI elements) that make up an application. Reference: ServiceNow Application Development documentation.",
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
            "When configuring a module, what does the 'Override Application Menu Roles' option do?",
        type: "single",
        options: [
            "Administrators are allowed access to the module even if access control would normally prevent access",
            "Users who can access the application menu can see the module even without module roles",
            "Self-service users can access the module without roles",
            "Users with module roles but without access to the application menu can access the module",
        ],
        correct: [3],
        explanation:
            "The 'Override Application Menu Roles' option allows users with module-specific roles to access the module, even if they lack access to the application menu. Reference: ServiceNow Module Configuration documentation.",
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
        question:
            "When an application is ready to be shared, which of the following publishing methods are supported by ServiceNow? (Choose three answers)",
        type: "multiple",
        options: [
            "Publish to a spreadsheet",
            "Publish to an application repository",
            "Publish to a local drive",
            "Publish to a local USB device",
            "Publish to an update set",
            "Publish to the ServiceNow Store",
        ],
        correct: [1, 4, 5],
        explanation:
            "ServiceNow supports publishing to an application repository, update set, or the ServiceNow Store for sharing applications. Reference: ServiceNow Application Publishing documentation.",
    },
    {
        question:
            "Which of the following features are available in the Global application? (Choose two answers)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Delegated Development",
            "Flow Designer",
            "Source Control",
        ],
        correct: [0, 2],
        explanation:
            "The Global application supports the Automated Test Framework and Flow Designer. Delegated Development and Source Control are not exclusive to the Global scope. Reference: ServiceNow Global Scope documentation.",
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
        question: "Which of the following are configured in an email notification?",
        type: "single",
        options: ["a, b, c", "a, b, d", "b, c, d", "a, c, d"],
        correct: [0],
        explanation:
            "Email notifications configure who receives the notification (a), the content (b), and when it is sent (c). The delivery method (d) is managed separately. Reference: ServiceNow Email Notification documentation.",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application:",
        type: "single",
        options: [
            "Enter the application’s name in the global search field",
            "Open the list of update sets for the instance",
            "Examine the Application Files related list for the application being published",
            "Open artifact records individually and check the value of the Application field",
        ],
        correct: [2],
        explanation:
            "The Application Files related list provides a comprehensive view of all artifacts (scripts, reports, etc.) included in a published application. Reference: ServiceNow Application Publishing documentation.",
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
            "If the 'Readable' configuration field is not selected, which application access configuration field becomes unavailable?",
        type: "single",
        options: [
            "Can access this table via web services",
            "Can create, can update, and can delete",
            "Readable does not affect the availability of other application access fields",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "If 'Readable' is not selected, the 'Can create, can update, and can delete' options become unavailable, as read access is a prerequisite. Reference: ServiceNow Application Access documentation.",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Outbound Email", "Application", "Record", "Schedule"],
        correct: [0],
        explanation:
            "Flow Designer supports Application, Record, and Schedule triggers, but Outbound Email is not a trigger type. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question:
            "When creating a new application file in a scoped application, which of the following has cross-scope access enabled by default?",
        type: "single",
        options: ["REST Message", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation:
            "Tables in scoped applications have cross-scope access enabled by default to allow broader access control. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question:
            "Which of the following is incorrect about the 'Weight' field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest weight is sent for the same record and recipient",
            "If the weight value is 0, the email is not sent",
            "The weight value defaults to 0",
            "If the weight value is 0, the notification is always sent when the criteria for sending the notification are met",
        ],
        correct: [1],
        explanation:
            "A weight value of 0 does not prevent email notifications from being sent; they are sent if conditions are met. Reference: ServiceNow Email Notification documentation.",
    },
    {
        question: "Which object is not accessible to a display business rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [1],
        explanation:
            "Display business rules cannot access GlideSystem, but they can access previous, g_scratchpad, and current objects. Reference: ServiceNow Business Rule documentation.",
    },
    {
        question: "Which features are available in the Global application? (Choose two answers)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer",
        ],
        correct: [0],
        explanation:
            "The provided answer only lists Automated Test Framework, but both Automated Test Framework and Flow Designer are available in the Global application. Reference: ServiceNow Global Scope documentation.",
    },
    {
        question: "Which of the following is not a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [3],
        explanation:
            "Form Choice is not a valid UI Action type. Valid types include List Choice, Form Button, and List Banner Button. Reference: ServiceNow UI Action documentation.",
    },
    {
        question: "Which of the following is not supported in Flow Designer?",
        type: "single",
        options: [
            "Calling a subflow from a flow",
            "Using rollback to test a flow",
            "Using delegated developers",
            "Running a flow from a MetricBase trigger",
        ],
        correct: [1],
        explanation:
            "Flow Designer does not support rollback for testing flows. Other options like subflows, delegated developers, and MetricBase triggers are supported. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question:
            "Which of the following are true about ServiceNow reports? (Choose three answers)",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "Can represent data graphically",
            "All users can generate reports on any table",
            "Can be run on-demand by approved users",
            "Can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "ServiceNow reports can represent data graphically, be run on-demand by approved users, and be scheduled for email distribution. Not all users can view shared reports or generate reports on any table. Reference: ServiceNow Reporting documentation.",
    },
    {
        question: "Modules require a link type. Which of the following is a list of link types?",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [1],
        explanation:
            "Valid link types for modules include Assessment, List of Records, Separator, and Timeline Page. Reference: ServiceNow Module Configuration documentation.",
    },
    {
        question:
            "For a table with the 'Allow configuration' application access option selected, which of the following is true?",
        type: "single",
        options: [
            "Only scripts from applications in scope can create business rules for the table",
            "All users with the application’s user role can modify the application’s scripts",
            "Out-of-scope applications can create business rules for the table",
            "Out-of-scope applications can add new tables to the scoped application",
        ],
        correct: [2],
        explanation:
            "The 'Allow configuration' option permits out-of-scope applications to create business rules for the table. Reference: ServiceNow Application Access documentation.",
    },
    {
        question:
            "When configuring the label of a field on a child table while working in Form Designer, which table’s label is modified?",
        type: "single",
        options: ["Base table", "Child table", "Parent table", "All tables"],
        correct: [1],
        explanation:
            "Configuring a field label on a child table in Form Designer modifies only the child table’s label. Reference: ServiceNow Form Designer documentation.",
    },
    {
        question: "Which of the following is true?",
        type: "single",
        options: [
            "UI Policy actions are executed before the UI Policy script",
            "The execution order of UI Policy scripts and actions is determined at runtime",
            "UI Policy scripts are executed before UI Policy actions",
            "UI Policy actions and scripts are executed simultaneously",
        ],
        correct: [0],
        explanation:
            "UI Policy actions are executed before the UI Policy script to enforce form behavior. Reference: ServiceNow UI Policy documentation.",
    },
    {
        question:
            "The business rule script template is as follows: [Image1] This type of JavaScript function is called:",
        type: "single",
        options: ["Constructor", "Scoped", "Anonymous", "Self-invoking"],
        correct: [3],
        explanation:
            "The script template represents a self-invoking JavaScript function, which executes immediately upon definition. Reference: ServiceNow Scripting documentation.",
    },
    {
        question:
            "Which method call returns true only if the currently logged-in user has the catalog_admin role and does not return true otherwise?",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')",
        ],
        correct: [1],
        explanation:
            "g_user.hasRoleExactly('catalog_admin') returns true only if the user has the catalog_admin role and no other roles affect the outcome. Reference: ServiceNow GlideUser documentation.",
    },
    {
        question:
            "When creating a Utils Script Include, there are basic strategies. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the functions",
            "Create the class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation:
            "Identifying the table is not a step in creating a Utils Script Include, which focuses on scripting functions and creating classes. Reference: ServiceNow Script Include documentation.",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control? (Choose two answers)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles grant access to source control operations like importing or linking applications. Reference: ServiceNow Source Control documentation.",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference the properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property name>}",
            "${current.<property name>}",
            "${<property name>.getDisplayValue()}",
            "${gs.<property name>}",
        ],
        correct: [0],
        explanation:
            "${event.<property name>} is the correct syntax to reference event properties in email notifications. Reference: ServiceNow Email Notification documentation.",
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
            "A Protected Script Include’s protection policy applies only when the application is downloaded from the ServiceNow App Store. Reference: ServiceNow Script Include documentation.",
    },
    {
        question: "Which of the following is true about GlideUser (g_user) methods?",
        type: "single",
        options: [
            "Can only be used in client scripts and UI policies",
            "Can only be used in business rules",
            "Can be used in client scripts, UI policies, and UI actions",
            "Can be used in business rules and Script Includes",
        ],
        correct: [2],
        explanation:
            "GlideUser (g_user) methods are used in client-side scripts, including client scripts, UI policies, and UI actions. Reference: ServiceNow GlideUser documentation.",
    },
    {
        question:
            "When configuring a module, what does the override application menu roles configuration option do?",
        type: "single",
        options: [
            "Users with module roles but without access to the application menu can access the module",
            "Self-service users can access the module without roles",
            "Administrators are granted access to the module even if access control would normally prevent access",
            "Users who can access the application menu can see the module even without module roles",
        ],
        correct: [0],
        explanation:
            "The override option allows users with module roles to access the module despite lacking application menu access. Reference: ServiceNow Module Configuration documentation.",
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
            "Transform Maps define field relationships between Import Set tables and existing ServiceNow tables. Reference: ServiceNow Import Set documentation.",
    },
    {
        question: "When configuring a REST message, the endpoint is:",
        type: "single",
        options: [
            "A command to stop the execution of the REST script",
            "The URI of the data to be accessed, queried, or modified",
            "Information about the format of the returned data",
            "A response from the provider indicating no data was returned",
        ],
        correct: [1],
        explanation:
            "The endpoint in a REST message is the URI specifying the data to access, query, or modify. Reference: ServiceNow REST Message documentation.",
    },
    {
        question: "When evaluating access controls, ServiceNow searches for and evaluates:",
        type: "single",
        options: [
            "Matches on the current table only",
            "Matches on the current field only",
            "From the most specific match to the most generic match",
            "From the most generic match to the most specific match",
        ],
        correct: [2],
        explanation:
            "ServiceNow evaluates access controls from the most specific to the most generic match to determine permissions. Reference: ServiceNow Access Control documentation.",
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
            "gs.hasRole('admin') returns true if the logged-in user has the admin role. Reference: ServiceNow GlideSystem documentation.",
    },
    {
        question:
            "From the following list, identify one reason an application would not be suitable for ServiceNow. The application:",
        type: "single",
        options: [
            "Requires workflows to manage processes",
            "Requires low-level programming libraries to be used as-is",
            "Requires reporting capabilities",
            "Heavily uses forms to manipulate data",
        ],
        correct: [1],
        explanation:
            "ServiceNow is not suited for applications requiring low-level programming libraries as-is, as it focuses on high-level workflows and forms. Reference: ServiceNow Application Development documentation.",
    },
    {
        question: "Identify the incorrect statement about ServiceNow delegated development.",
        type: "single",
        options: [
            "Administrators can grant non-admin users permission to develop global applications",
            "Administrators can specify the types of application files developers can access",
            "Administrators can allow developers access to script fields",
            "Administrators can allow developers access to security records",
        ],
        correct: [0],
        explanation:
            "Non-admin users cannot be granted permission to develop global applications, as this is restricted to admins. Reference: ServiceNow Delegated Development documentation.",
    },
    {
        question: "One of the uses of the ServiceNow REST API Explorer is:",
        type: "single",
        options: [
            "To practice interacting with public data providers using REST",
            "To search for web resources to learn about REST",
            "To convert SOAP message functions to REST methods",
            "To create sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "The REST API Explorer generates sample code for sending REST requests to ServiceNow. Reference: ServiceNow REST API Explorer documentation.",
    },
    {
        question: "Which of the following is true about application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope",
            "Applications downloaded from third-party ServiceNow application developers will never have name conflicts",
            "Any developer can edit any application",
            "Developers can choose the namespace prefix for the scope",
        ],
        correct: [1],
        explanation:
            "Third-party ServiceNow applications are designed to avoid name conflicts through unique scoping. Reference: ServiceNow Application Scope documentation.",
    },
    {
        question: "The basic behavior of a table in a private scope application is:",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services",
            "All business rules can read, write, delete, and update from the table",
            "Only artifacts within the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "In a private scope application, all application scopes can read from the table by default. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question: "Which of the following is not a purpose of application scope?",
        type: "single",
        options: [
            "Provide relationships among application artifacts",
            "Provide a way to track the user who developed an application",
            "Provide a namespace (prefix and scope name) to prevent name collisions between applications",
            "Control how scripts from another scope can modify a scoped application’s tables",
        ],
        correct: [1],
        explanation:
            "Application scope does not track the user who developed an application; it manages artifacts, namespaces, and access control. Reference: ServiceNow Application Scope documentation.",
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
            "You are developing a MyApp application with Table A. When the MyApp application is installed on an instance, records from Table A need to be installed as part of the application. Records from Table A will be installed when:",
        type: "single",
        options: [
            "Table A is active and extends the Task table",
            "Table A’s records have been added to the application record using the 'Create Application File' context menu item",
            "Table A has an auto-number counter for new records",
            "Table A is not included in the System Clone > Exclude Tables list",
        ],
        correct: [1],
        explanation:
            "Records are included in the application when added via the 'Create Application File' context menu item. Reference: ServiceNow Application File documentation.",
    },
    {
        question:
            "Application developers can specify the ServiceNow page that users see after submitting a new record using the Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            "Write an after Business Rule script for the Record Producer's table: window.redirect = '<URL>';",
            "Create an application property to store the URL",
            "Write a script in the Record Producer's Script field: producer.redirect = '<URL>';",
            "Configure the page in the Module that opens the Record Producer UI",
        ],
        correct: [2],
        explanation:
            "Application developers can specify the redirect page by writing a script in the Record Producer's Script field using producer.redirect = '<URL>'. For example, producer.redirect = 'home.do'; redirects the user to the homepage. Reference: /bundle record producer data and redirect users",
    },
    {
        question:
            "What is required to link a ServiceNow application to a Git repository? (Choose 3 answers)",
        type: "multiple",
        options: ["URI", "ACL", "User name", "URL", "Application name", "Password"],
        correct: [2, 3, 5],
        explanation:
            "To link a ServiceNow application to a Git repository, you need the user name, URL, and password of the Git account. The URL is the repository address, and user name/password are credentials (or a personal access token). Reference: Link an application to source control - ServiceNow Docs",
    },
    {
        question: "What is the ServiceNow app repository?",
        type: "single",
        options: [
            "A request table",
            "An alias for an update set",
            "A database containing ServiceNow apps",
            "A collection of files in a Git database",
        ],
        correct: [2],
        explanation:
            "The ServiceNow app repository is a database containing ServiceNow applications for installation and management. Reference: ServiceNow Application Repository documentation.",
    },
    {
        question: "The basic behavior of a table in a private scope application is:",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services",
            "All business rules can read, write, delete, and update from the table",
            "Only artifacts within the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "In a private scope application, all application scopes can read from the table by default. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu that opens a page in the content frame or in a new tab or window",
            "A group of menus or pages that provide related information and functionality to end users",
            "A way to filter items in the Application Navigator to enable users to quickly access information and services",
            "A web-based method for delivering software to end users",
        ],
        correct: [2],
        explanation:
            "A module is a navigational item in the Application Navigator that filters and provides quick access to information and services. Reference: ServiceNow Module documentation.",
    },
    {
        question:
            "What syntax is used to access the value of a Record Producer form field in a Record Producer script?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "producer.variablename is used to access Record Producer form field values in scripts. Reference: ServiceNow Record Producer documentation.",
    },
    {
        question:
            "Which of the following is incorrect about the 'Weight' field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest weight is sent for the same record and recipient",
            "If the weight value is 0, the email is not sent",
            "The weight value defaults to 0",
            "If the weight value is 0, the notification is always sent when the conditions for sending the notification are met",
        ],
        correct: [1],
        explanation:
            "A weight value of 0 does not prevent email notifications from being sent; they are sent if conditions are met. Reference: ServiceNow Email Notification documentation.",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control? (Choose two answers)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles grant access to source control operations like importing or linking applications. Reference: ServiceNow Source Control documentation.",
    },
    {
        question:
            "When creating a scoped application that includes flow actions, what is that application called?",
        type: "single",
        options: ["Bundle", "Flow", "Action", "Spoke"],
        correct: [3],
        explanation:
            "A scoped application with flow actions is called a Spoke, providing reusable flow components. Reference: ServiceNow Flow Designer documentation.",
    },
    {
        question:
            "From the following list, identify one reason an application would not be suitable for ServiceNow. The application:",
        type: "single",
        options: [
            "Requires workflows to manage processes",
            "Requires low-level programming libraries to be used as-is",
            "Requires reporting capabilities",
            "Heavily uses forms to manipulate data",
        ],
        correct: [1],
        explanation:
            "ServiceNow is not suited for applications requiring low-level programming libraries as-is, as it focuses on high-level workflows and forms. Reference: ServiceNow Application Development documentation.",
    },
    {
        question:
            "a. Replace outdated and inadequate custom business applications and processes b. Extend service delivery and management to all enterprise departments c. Allow users to have full access to all ServiceNow tables, records, and fields d. Increase the value of ServiceNow",
        type: "single",
        options: ["a, b, c", "a, b, c, d", "b, c, d", "a, b, d"],
        correct: [3],
        explanation:
            "ServiceNow aims to replace outdated applications (a), extend service delivery (b), and increase value (d), but not provide full access to all tables (c). Reference: ServiceNow Platform documentation.",
    },
    {
        question:
            "Which of the following are true about ServiceNow reports? (Choose three answers)",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "Can represent data graphically",
            "All users can generate reports on any table",
            "Can be run on-demand by approved users",
            "Can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "ServiceNow reports can represent data graphically, be run on-demand by approved users, and be scheduled for email distribution. Not all users can view shared reports or generate reports on any table. Reference: ServiceNow Reporting documentation.",
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
        question: "Which of the following is true about application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope",
            "Applications downloaded from third-party ServiceNow application developers will never have name conflicts",
            "Any developer can edit any application",
            "Developers can choose the namespace prefix for the scope",
        ],
        correct: [1],
        explanation:
            "Third-party ServiceNow applications are designed to avoid name conflicts through unique scoping. Reference: ServiceNow Application Scope documentation.",
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
            "When creating a Utils Script Include, there are basic strategies. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the functions",
            "Create the class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation:
            "Identifying the table is not a step in creating a Utils Script Include, which focuses on scripting functions and creating classes. Reference: ServiceNow Script Include documentation.",
    },
    {
        question: "Which objects can be used in an inbound action script?",
        type: "single",
        options: [
            "Current object and previous object",
            "Current object and email",
            "Current object and event",
            "Current object and producer",
        ],
        correct: [1],
        explanation:
            "Inbound action scripts can use the current object and email object to process incoming emails. Reference: ServiceNow Inbound Action documentation.",
    },
    {
        question:
            "When creating a SOAP message, what syntax indicates variables to be passed when the function is called?",
        type: "single",
        options: [
            "current.variable_name",
            "${variable_name}",
            "<variable_name>",
            "<variable_name>.do?WSDL",
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
        question: "What is the REST API Explorer used for?",
        type: "single",
        options: [
            "To practice interacting with public data providers using REST",
            "To search for web resources to learn about REST",
            "To convert SOAP message functions to REST methods",
            "To create sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "The REST API Explorer generates sample code for sending REST requests to ServiceNow. Reference: ServiceNow REST API Explorer documentation.",
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
            "The Application Picker displays all custom application scopes and the global scope. Reference: ServiceNow Application Picker documentation.",
    },
    {
        question: "Which class is not part of the client-side scoped API?",
        type: "single",
        options: ["GlideDialogWindow", "GlideAjax", "GlideRecord", "GlideForm"],
        correct: [2],
        explanation:
            "GlideRecord is a server-side class, not part of the client-side scoped API. Reference: ServiceNow Client-Side API documentation.",
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
        question: "Which of the following client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "Catalog Client Scripts and Catalog UI Policies",
            "UI Scripts and UI Actions",
            "UI Scripts and Record Producer Scripts",
            "Client Scripts and UI Policies",
        ],
        correct: [0],
        explanation:
            "Catalog Client Scripts and Catalog UI Policies apply to Record Producers for client-side behavior. Reference: ServiceNow Record Producer documentation.",
    },
    {
        question: "When evaluating access controls, ServiceNow searches for and evaluates:",
        type: "single",
        options: [
            "Matches on the current table only",
            "Matches on the current field only",
            "From the most specific match to the most generic match",
            "From the most generic match to the most specific match",
        ],
        correct: [2],
        explanation:
            "ServiceNow evaluates access controls from the most specific to the most generic match to determine permissions. Reference: ServiceNow Access Control documentation.",
    },
    {
        question: "What is a workflow context?",
        type: "single",
        options: [
            "A checked-out workflow being edited",
            "Generated from a workflow version, executes activities, and follows transitions",
            "The table where the workflow is defined and conditions such as 'Active is true'",
            "The business reason or process for which the workflow is designed",
        ],
        correct: [1],
        explanation:
            "A workflow context is generated from a workflow version and executes activities and transitions. Reference: ServiceNow Workflow documentation.",
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
            "What record is used to track cross-scope applications or scripts requesting access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted Caller Access record",
            "Caller Tracking record",
            "Access Control Level record",
            "Cross-Scope Access record",
        ],
        correct: [0],
        explanation:
            "Restricted Caller Access records track cross-scope access requests. Reference: ServiceNow Scoped Application documentation.",
    },
    {
        question: "Which object is not accessible to a display business rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation:
            "Display business rules cannot access the previous object, but they can access g_scratchpad and current. Reference: ServiceNow Business Rule documentation.",
    },
    {
        question:
            "Which of the following GlideRecord methods execute a query against a database table? (Choose three answers)",
        type: "multiple",
        options: ["_query()", "runQuery()", "query()", "_get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "_query(), query(), and get() are GlideRecord methods that execute database queries. Reference: ServiceNow GlideRecord documentation.",
    },
    {
        question:
            "An application developer uses industry-standard JavaScript to configure ServiceNow and perform which of the following?",
        type: "single",
        options: [
            "Enable editing of an application’s context menu in the Navigator via right-click",
            "Extend and add functionality",
            "Customize the organization’s company logo and banner text",
            "Configure the display name of outbound emails",
        ],
        correct: [1],
        explanation:
            "JavaScript is used to extend and add functionality to ServiceNow applications. Reference: ServiceNow Scripting documentation.",
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
            "g_form.addInfoMessage() displays a blue-background message at the top of the form. Reference: ServiceNow GlideForm documentation.",
    },
    {
        question:
            "Which business requirements and processes should be documented as part of an application development plan? (Choose four answers)",
        type: "multiple",
        options: [
            "Data input/output",
            "Business issue",
            "Project schedule",
            "Process steps",
            "Database capacity",
            "Users/stakeholders",
            "Available licenses",
        ],
        correct: [0, 1, 3, 5],
        explanation:
            "Document business issue, data input/output, process steps, and users/stakeholders for the application plan. Reference: ServiceNow Application Development Best Practices.",
    },
    {
        question: "Which of the following is true about GlideUser (g_user) methods?",
        type: "single",
        options: [
            "Can only be used in client scripts and UI policies",
            "Can only be used in business rules",
            "Can be used in client scripts, UI policies, and UI actions",
            "Can be used in business rules and Script Includes",
        ],
        correct: [2],
        explanation:
            "GlideUser (g_user) methods are used in client-side scripts, including client scripts, UI policies, and UI actions. Reference: ServiceNow GlideUser documentation.",
    },
    {
        question: "The Task table is an example of which of the following? (Choose two answers)",
        type: "multiple",
        options: ["Legacy class", "Child class", "Base class", "Parent class"],
        correct: [2, 3],
        explanation:
            "The Task table is a base class and parent class for other tables like Incident. Reference: ServiceNow Table Hierarchy documentation.",
    },
    {
        question:
            "Which determines the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Data Source",
            "Schema Map Relationship Builder",
            "Business Service Management Map",
            "Transform Map",
        ],
        correct: [3],
        explanation:
            "Transform Maps define field relationships between Import Set tables and existing ServiceNow tables. Reference: ServiceNow Import Set documentation.",
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
        question:
            "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
        type: "single",
        options: ["Publisher", "Specialist", "Provider", "Consumer"],
        correct: [3],
        explanation:
            "ServiceNow acts as a consumer when requesting information from a web service. Reference: ServiceNow Web Services documentation.",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference the properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property name>}",
            "${current.<property name>}",
            "${<property name>.getDisplayValue()}",
            "${gs.<property name>}",
        ],
        correct: [0],
        explanation:
            "${event.<property name>} is the correct syntax to reference event properties in email notifications. Reference: ServiceNow Email Notification documentation.",
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
            "gs.hasRole('admin') returns true if the logged-in user has the admin role. Reference: ServiceNow GlideSystem documentation.",
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
        question: "When configuring a REST message, the endpoint is:",
        type: "single",
        options: [
            "A command to stop the execution of the REST script",
            "The URI of the data to be accessed, queried, or modified",
            "Information about the format of the returned data",
            "A response from the provider indicating no data was returned",
        ],
        correct: [1],
        explanation:
            "The endpoint in a REST message is the URI specifying the data to access, query, or modify. Reference: ServiceNow REST Message documentation.",
    },
    {
        question:
            "The business rule script template is as follows: [Image2] This type of JavaScript function is called:",
        type: "single",
        options: ["Constructor", "Scoped", "Anonymous", "Self-invoking"],
        correct: [3],
        explanation:
            "The script template represents a self-invoking JavaScript function, which executes immediately upon definition. Reference: ServiceNow Scripting documentation.",
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
        question: "Identify the incorrect statement about ServiceNow delegated development.",
        type: "single",
        options: [
            "Administrators can grant non-admin users permission to develop global applications",
            "Administrators can specify the types of application files developers can access",
            "Administrators can allow developers access to script fields",
            "Administrators can allow developers access to security records",
        ],
        correct: [0],
        explanation:
            "Non-admin users cannot be granted permission to develop global applications, as this is restricted to admins. Reference: ServiceNow Delegated Development documentation.",
    },
    {
        question:
            "When debugging email notifications, what should you check in the user record? (Choose two answers)",
        type: "multiple",
        options: [
            "The user must not be locked out",
            "Delegation must be enabled",
            "Active must be true",
            "First and last name fields must have values set",
            "The email field must have a valid value set",
        ],
        correct: [2, 4],
        explanation:
            "The user record must have Active set to true and a valid email address for notifications to work. Reference: ServiceNow Email Notification documentation.",
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
    {
        question: "Which statement is true about the Guided Application Creator?",
        type: "single",
        options: [
            "The global scope option is enabled by default",
            "The scoped application user role is automatically created",
            "Default access controls are automatically created",
            "A welcome screen is displayed every time a new application is created",
        ],
        correct: [3],
        explanation:
            "The Guided Application Creator displays a welcome screen for each new application created. Reference: ServiceNow Guided Application Creator documentation.",
    },
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
    {
        question:
            "A scoped application that includes Flow Designer content dedicated to a specific application is called:",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A scoped application with dedicated Flow Designer content is called a Spoke. Reference: ServiceNow Flow Designer documentation.",
    },
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
        question: "When removing a field from a table, which of the following is true?",
        type: "single",
        options: [
            "Any field on the table can be removed",
            "User-defined, non-inherited fields can be detected",
            "Inherited fields can be detected",
            "When the field is detected, the table record is deleted",
        ],
        correct: [1],
        explanation:
            "User-defined, non-inherited fields can be detected and removed from a table. Reference: ServiceNow Table Configuration documentation.",
    },
    {
        question:
            "When creating a new application file in a scoped application, which of the following has cross-scope access enabled by default?",
        type: "single",
        options: ["REST Message", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation:
            "Tables in scoped applications have cross-scope access enabled by default to allow broader access control. Reference: ServiceNow Scoped Application documentation.",
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
        question: "How does ServiceNow match inbound emails to existing records?",
        type: "single",
        options: ["Watermark", "Record link", "Subject", "sys_id"],
        correct: [0],
        explanation:
            "ServiceNow uses watermarks in emails to match them to existing records. Reference: ServiceNow Inbound Email documentation.",
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
            "If the 'Readable' configuration field is not selected, which application access configuration field becomes unavailable?",
        type: "single",
        options: [
            "Can access this table via web services",
            "Can create, can update, and can delete",
            "Readable does not affect the availability of other application access fields",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "If 'Readable' is not selected, the 'Can create, can update, and can delete' options become unavailable. Reference: ServiceNow Application Access documentation.",
    },
    {
        question: "Which of the following is true?",
        type: "single",
        options: [
            "UI Policy actions are executed before the UI Policy script",
            "The execution order of UI Policy scripts and actions is determined at runtime",
            "UI Policy scripts are executed before UI Policy actions",
            "UI Policy actions and scripts are executed simultaneously",
        ],
        correct: [0],
        explanation:
            "UI Policy actions are executed before the UI Policy script to enforce form behavior. Reference: ServiceNow UI Policy documentation.",
    },
    {
        question:
            "How is a data table specified in the Guided Application Creator (GAC)? (Choose three answers)",
        type: "multiple",
        options: [
            "Upload an existing PDF",
            "Create a new table in the platform",
            "Use an existing table in the platform",
            "Upload an existing spreadsheet",
            "Upload an existing word processor document",
            "Use a freeform database",
        ],
        correct: [0, 1, 3],
        explanation:
            "The Guided Application Creator allows specifying data tables by uploading PDFs, creating new tables, or uploading spreadsheets. Reference: ServiceNow Guided Application Creator documentation.",
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
    {
        question: "How many application menus does an application have?",
        type: "single",
        options: [
            "Three (one for application user modules, one for application admin modules, one for ServiceNow admin modules)",
            "As many as needed for the application’s design",
            "Two (one for application user modules, one for application admin modules)",
            "One (used for all application modules)",
        ],
        correct: [1],
        explanation:
            "An application can have as many menus as needed for its design. Reference: ServiceNow Application Menu documentation.",
    },
    {
        question:
            "For a table with the 'Allow configuration' application access option selected, which of the following is true?",
        type: "single",
        options: [
            "Only scripts from applications in scope can create business rules for the table",
            "All users with the application’s user role can modify the application’s scripts",
            "Out-of-scope applications can create business rules for the table",
            "Out-of-scope applications can add new tables to the scoped application",
        ],
        correct: [2],
        explanation:
            "The 'Allow configuration' option permits out-of-scope applications to create business rules for the table. Reference: ServiceNow Application Access documentation.",
    },
    {
        question:
            "Assume a table named 'table' exists with three fields (field1, field2, field3). You examine the access control list for the table: [Image3] Which fields can a user with the itil role read?",
        type: "single",
        options: ["field3 only", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "Without specific ACL details, the itil role typically has read access to all fields except where restricted, such as field3. Reference: ServiceNow Access Control documentation.",
    },
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
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application name"],
        correct: [3],
        explanation:
            "The application name is not required to link to a Git repository; username, URL, and password are needed. Reference: ServiceNow Source Control documentation.",
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
            "When configuring the label of a field on a child table while working in Form Designer, which table’s label is modified?",
        type: "single",
        options: ["Base table", "Child table", "Parent table", "All tables"],
        correct: [1],
        explanation:
            "Configuring a field label on a child table in Form Designer modifies only the child table’s label. Reference: ServiceNow Form Designer documentation.",
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
            "Which source control operation is available from both Studio and a Git repository?",
        type: "single",
        options: [
            "Create a branch",
            "Apply remote changes",
            "Save local changes",
            "Edit repository configuration",
        ],
        correct: [0],
        explanation: "Creating a branch is available in both Studio and Git repositories",
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
        question:
            "When extending an existing table, which of the following statements is not true?",
        type: "single",
        options: [
            "Access controls on the parent table are evaluated when determining access to the new table’s records and fields",
            "The new table inherits functionality built into the parent table",
            "The new table inherits all fields from the parent table",
            "All required behaviors must be scripted and configured",
        ],
        correct: [3],
        explanation:
            "When extending a table, not all required behaviors need to be scripted and configured, as the new table inherits fields and functionality from the parent table. Reference: ServiceNow Table Extension documentation.",
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
            "The source control operation used to save local changes to an instance for later application is called a(n):",
        type: "single",
        options: ["Branch", "Tag", "Stash", "Update set"],
        correct: [2],
        explanation:
            "A stash is used in ServiceNow source control to save local changes temporarily for later application. Note: The provided answer (Branch) in the original document is incorrect; the correct term is Stash. Reference: ServiceNow Source Control documentation.",
    },
    {
        question:
            "When an application is ready to be shared, which of the following publishing methods are supported by ServiceNow? (Choose three answers)",
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
            "ServiceNow supports publishing applications to an application repository, update sets, or the ServiceNow Store for sharing. Spreadsheets, USB devices, and local drives are not valid methods. Reference: ServiceNow Application Publishing documentation.",
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
        question:
            "Debug information for access controls identifies whether each element granted or denied access. The elements are displayed in the debug information in the order they are evaluated. In which order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles",
        ],
        correct: [2],
        explanation:
            "Access control elements are evaluated in the order of Roles, Conditions, and Script to determine access permissions. Reference: ServiceNow Access Control documentation.",
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
            "A Transform Map defines the field mappings between an Import Set table and a target ServiceNow table, enabling data transformation during import. Reference: ServiceNow Docs - Transform Maps",
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
        question: "Which of the following is not a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [0],
        explanation:
            "List Choice is not a UI Action type. Valid types include Form Button, List Banner Button, and others like List Context Menu. Reference: ServiceNow Docs - UI Actions",
    },
    {
        question:
            "When designing and creating a form, what do you create to organize fields on the form?",
        type: "single",
        options: ["Related List", "Tab", "Section", "Button"],
        correct: [2],
        explanation:
            "Sections are used to group and organize fields on a form for better layout and user experience. Reference: ServiceNow Docs - Form Designer",
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
            "Which method call returns true only if the currently logged-in user has the catalog_admin role and returns false otherwise?",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')",
        ],
        correct: [1],
        explanation:
            "g_user.hasRoleExactly('catalog_admin') returns true only if the user has the catalog_admin role and no other roles. Reference: ServiceNow Docs - GlideUser API",
    },
    {
        question:
            "Access control debugging information identifies whether each access control element allowed or denied access. In what order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Script, Roles",
            "Script, Conditions, Roles",
            "Conditions, Roles, Script",
            "Roles, Conditions, Script",
        ],
        correct: [3],
        explanation:
            "Access controls are evaluated in the order of Roles, Conditions, and then Script for specificity. Reference: ServiceNow Docs - Access Control Evaluation",
    },
    {
        question:
            "When configuring an access control without conditions or scripts, which of the following statements is not true?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record",
            "table.None grants access to all records in a table",
            "table.field grants access to a specific field in a record",
            "table.id grants access to a specific record in a table",
        ],
        correct: [3],
        explanation:
            "table.id does not grant access to a specific record; access controls are defined at the table or field level, not by record ID. Reference: ServiceNow Docs - Access Control Rules",
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
            "The Event Registry (sys_event) stores all recognized events, allowing the system to trigger actions like notifications or scripts. Reference: ServiceNow Docs - Event Management",
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
            "The Application Files related list in the application record lists all artifacts included in the application. Reference: ServiceNow Docs - Application Files",
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
            "Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current object",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current object",
        ],
        correct: [2],
        explanation:
            "Scheduled Scripts use GlideSystem (gs) for system functions and GlideRecord for database operations. Reference: ServiceNow Docs - Scheduled Script Execution",
    },
    {
        question: "Which of the following statements is not true about the Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag a section from the Field Types tab to the desired location on the form.",
            "To add a field to the form layout, drag a field from the Fields tab to the desired location on the form.",
            "To remove a field from the form layout, hover over the field to enable the action buttons and select the Delete (X) button.",
            "To create a new field on the form’s table, drag the appropriate data type from the Field Types tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Sections are added via the Form Designer’s layout options, not by dragging from the Field Types tab. Reference: ServiceNow Docs - Form Designer",
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
        question: "What is the fastest way to create and configure a Record Producer?",
        type: "single",
        options: [
            "Create a catalog category, open the category, and select the Add New Record Producer button",
            "Use the Record Producer module to manually add and configure all variables",
            "Open the table in the table records, and select the Add to Service Catalog related link",
            "Open the table’s form, right-click the form header, and select the Create Record Producer menu item",
        ],
        correct: [2],
        explanation:
            "The Add to Service Catalog related link quickly generates a Record Producer for a table. Reference: ServiceNow Docs - Record Producer",
    },
    {
        question:
            "Which method is not used to log messages in server-side scripts for a private scope application?",
        type: "single",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "gs.log() is not available in scoped applications; use gs.error(), gs.warn(), or gs.debug() instead. Reference: ServiceNow Docs - Scoped API Logging",
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
        question: "What are three ways to create a table in ServiceNow? (Select three)",
        type: "multiple",
        options: [
            "Use a legacy workflow",
            "Upload a spreadsheet and convert it to a custom table",
            "Use Flow Designer",
            "Use the Now Experience Table Creator",
            "Extend a table",
            "Create a custom table",
        ],
        correct: [1, 4, 5],
        explanation:
            "Tables can be created by uploading a spreadsheet, extending an existing table, or creating a custom table in Studio or Table Creator. Reference: ServiceNow Docs - Table Creation",
    },
    {
        question: "A graphical view of relationships between tables is a <blank>.",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation:
            "A Schema Map visually displays table relationships and dependencies. Reference: ServiceNow Docs - Schema Map",
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
            "The Application Picker sets the current application scope for development tasks. Reference: ServiceNow Docs - Application Picker",
    },
    {
        question: "Which of the following is not a purpose of application scoping?",
        type: "single",
        options: [
            "Provide relationships between application artifacts",
            "Provide a way to track the user who developed an application",
            "Provide a namespace (prefix and scope name) to prevent application name collisions",
            "Control how scripts from another scope can modify the scoped application’s tables",
        ],
        correct: [1],
        explanation:
            "Application scoping does not track the developer; it manages namespaces, access, and artifact relationships. Reference: ServiceNow Docs - Application Scoping",
    },
    {
        question:
            "When right-clicking a column header in a table’s list, which report types can be created?",
        type: "single",
        options: ["Bar, Pie, Histogram, and Line", "Bar", "Bar, Pie, and Histogram", "Bar and Pie"],
        correct: [3],
        explanation:
            "Right-clicking a column header allows creating Bar or Pie reports from the list view. Reference: ServiceNow Docs - Reports",
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
            "Override Application Menu Roles allows module-specific role access without requiring application menu access. Reference: ServiceNow Docs - Modules",
    },
    {
        question:
            "Which of the following is the baseline behavior of a table in a private scope application?",
        type: "single",
        options: [
            "All business rules can read, write, delete, and update from the table",
            "The table and its data cannot be accessed using web services",
            "Only artifacts in the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "By default, all application scopes can read from a private scope table unless restricted by access controls. Reference: ServiceNow Docs - Scoped Application Tables",
    },
    {
        question: "Which statements are true about the Form Designer?",
        type: "multiple",
        options: [
            "To add a field to the form layout, drag a field from the Fields tab to the desired location on the form.",
            "To create a new field on the form’s table, drag the appropriate data type from the Field Types tab to the form and configure the new field.",
            "To remove a field from the form layout, hover over the field to enable the Action button and select the Delete (X) button.",
            "To add a section to the form layout, drag a section from the Field Types tab to the desired location on the form.",
        ],
        correct: [0, 1, 2],
        explanation:
            "Form Designer allows dragging fields, creating new fields, and removing fields, but sections are not added via the Field Types tab. Reference: ServiceNow Docs - Form Designer",
    },
    {
        question: "A module requires a link type. Which of the following is a list of link types?",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments:)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [2],
        explanation:
            "Valid link types include List of Records, Content Page, Order, and URL (from Arguments:). Reference: ServiceNow Docs - Module Link Types",
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
        question: "Which methods are useful in access control scripts?",
        type: "single",
        options: [
            "g_user.hasRole() and current.isNewRecord()",
            "gs.hasRole() and current.isNewRecord()",
            "g_user.hasRole() and current.isNew()",
            "gs.hasRole() and current.isNew()",
        ],
        correct: [1],
        explanation:
            "gs.hasRole() and current.isNewRecord() are server-side methods suitable for access control scripts. Reference: ServiceNow Docs - GlideSystem API",
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
            "Extending a table inherits fields and logic, allowing reuse or relabeling, but does not copy records. Reference: ServiceNow Docs - Table Extension",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Outbound Email", "Application", "Record", "Schedule"],
        correct: [0],
        explanation:
            "Flow Designer supports Application, Record, and Schedule triggers, but not Outbound Email. Reference: ServiceNow Docs - Flow Designer Triggers",
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
            "Flow Designer does not support rollback for testing; it supports subflows, delegated developers, and MetricBase triggers. Reference: ServiceNow Docs - Flow Designer",
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
            "Email notifications configure recipients, content, and timing, but the delivery method is handled by the email system. Reference: ServiceNow Docs - Email Notifications",
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
        question: "Which of the following client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "UI Script and UI Action",
            "UI Script and Record Producer Script",
            "Client Script and UI Policy",
            "Catalog Client Script and Catalog UI Policy",
        ],
        correct: [3],
        explanation:
            "Catalog Client Scripts and Catalog UI Policies apply to Record Producers in the Service Catalog. Reference: ServiceNow Docs - Record Producer Scripts",
    },
    {
        question: "Which of the following is not a client-side script debugging strategy?",
        type: "single",
        options: ["g_form.addInfoMessage()", "Field Watcher", "jslog()", "gs.log()"],
        correct: [3],
        explanation:
            "gs.log() is a server-side method; client-side debugging uses g_form.addInfoMessage(), Field Watcher, or jslog(). Reference: ServiceNow Docs - Client Script Debugging",
    },
    {
        question: "Which of the following is part of the client-side script API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current object and previous object",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "The GlideUser (g_user) object is part of the client-side API for user information. Reference: ServiceNow Docs - GlideUser API",
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
            "By default, all application scopes can read from a private scope table unless restricted. Reference: ServiceNow Docs - Scoped Application Tables",
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
        question:
            "Which of the following are features available in a global application? (Select three)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer",
        ],
        correct: [0, 1, 3],
        explanation:
            "Global applications support Automated Test Framework, Source Control, and Flow Designer. Delegated Development is scoped. Reference: ServiceNow Docs - Global Applications",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in a content frame or a separate tab or window",
            "A group of menus or pages that provide related information and functionality to end users",
            "A method to help users quickly access information and services by filtering items in the Application Navigator",
            "A web-based method for delivering software to end users",
        ],
        correct: [0],
        explanation:
            "A module is a navigational link in an application menu that opens specific content or functionality. Reference: ServiceNow Docs - Modules",
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
            "As part of an application development plan, it is a best practice to define the business requirements and processes the application will manage. What considerations should be documented as part of the business process?",
        type: "single",
        options: [
            "Business problem, data input/output, users/stakeholders, and process steps",
            "Business problem, data input/output, project schedule, process steps",
            "Business problem, data input/output, users/stakeholders, and database capacity",
            "Business problem, users/stakeholders, available licenses, database capacity",
        ],
        correct: [0],
        explanation:
            "Documenting the business problem, data, stakeholders, and process steps ensures a clear application plan. Reference: ServiceNow Docs - Application Development Best Practices",
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
        question: "Which of the following cannot be debugged using a Field Watcher?",
        type: "single",
        options: ["Business Rule", "Script Include", "Client Script", "Access Control"],
        correct: [1],
        explanation:
            "Field Watchers monitor field changes on forms, debugging Business Rules, Client Scripts, and Access Controls, but not Script Includes. Reference: ServiceNow Docs - Field Watcher",
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
            "Reports can be graphical, run on demand by authorized users, and scheduled for email distribution. Not all users can view or generate reports. Reference: ServiceNow Docs - Reports",
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
            "When configuring an access control without conditions or scripts, which of the following statements is not true?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record",
            "table.None grants access to all records in a table",
            "table.field grants access to a specific field in a record",
            "table.id grants access to a specific record in a table",
        ],
        correct: [3],
        explanation:
            "table.id is not a valid access control syntax for specific records. Reference: ServiceNow Docs - Access Control Rules",
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
            "A weight of zero means the notification is sent if criteria are met, not suppressed. Reference: ServiceNow Docs - Email Notifications",
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
        question: "A module requires a link type. Which of the following is a list of link types?",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments:)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [2],
        explanation:
            "Link types include List of Records, Content Page, Order, and URL (from Arguments:). Reference: ServiceNow Docs - Module Link Types",
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
        question:
            "Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current",
        ],
        correct: [2],
        explanation:
            "Scheduled Scripts use GlideSystem and GlideRecord for system and database operations. Reference: ServiceNow Docs - Scheduled Script Execution",
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
            "When creating a Utils Script Include, there are basic strategies. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the function",
            "Create the class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation:
            "Script Includes do not require identifying a table; they involve creating classes and functions. Reference: ServiceNow Docs - Script Includes",
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
            "producer.variablename accesses variable values in a Record Producer script. Reference: ServiceNow Docs - Record Producer Scripts",
    },
    {
        question: "Which of the following is true about application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope",
            "Applications downloaded from third-party ServiceNow application developers cannot have name conflicts",
            "Any developer can edit any application",
            "Developers can choose the namespace prefix for the scope",
        ],
        correct: [1],
        explanation:
            "Third-party applications use unique namespaces to avoid conflicts. Reference: ServiceNow Docs - Application Scoping",
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
            "Which application access configuration field is not available if the Can read field is not selected?",
        type: "single",
        options: [
            "All access to this table via web services",
            "Can create, Can update, Can delete",
            "Can read does not affect the availability of other application access fields",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "If Can read is not selected, Can create, update, and delete are disabled. Reference: ServiceNow Docs - Application Access",
    },
    {
        question: "Which of the following client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "Catalog Client Script and Catalog UI Policy",
            "UI Script and UI Action",
            "UI Script and Record Producer Script",
            "Client Script and UI Policy",
        ],
        correct: [0],
        explanation:
            "Catalog Client Scripts and Catalog UI Policies are used for Record Producers. Reference: ServiceNow Docs - Record Producer Scripts",
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
        question: "Which of the following is not a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [3],
        explanation:
            "Form Choice is not a UI Action type; valid types include Form Button and List Banner Button. Reference: ServiceNow Docs - UI Actions",
    },
    {
        question: "Which of the following is not a purpose of application scoping?",
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
            "Which of the following is true for a table with the Allow configuration application access option selected?",
        type: "single",
        options: [
            "Only scripts from the in-scope application can create business rules for the table",
            "Users with the application’s user role can modify the application’s scripts",
            "Out-of-scope applications can create business rules for the table",
            "Out-of-scope applications can add new tables to the scoped application",
        ],
        correct: [2],
        explanation:
            "Allow configuration permits out-of-scope applications to create business rules. Reference: ServiceNow Docs - Application Access",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property name>}",
            "${current.<property name>}",
            "${<property name>.getDisplayValue()}",
            "${gs.<property name>}",
        ],
        correct: [0],
        explanation:
            "${event.<property name>} accesses event properties in notification content. Reference: ServiceNow Docs - Email Notifications",
    },
    {
        question:
            "A scoped application that contains Flow Designer content specific to a particular application is called a(n):",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A Spoke is a scoped application with Flow Designer actions for a specific purpose. Reference: ServiceNow Docs - Flow Designer Spokes",
    },
    {
        question:
            "The source control operation used to save local changes to an instance for later application is called a(n) <blank>.",
        type: "single",
        options: ["Branch", "Tag", "Stash", "Update set"],
        correct: [2],
        explanation:
            "Stashing saves local changes for later application in source control. Reference: ServiceNow Docs - Source Control Integration",
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
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control? (Select two)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles grant access to source control operations. Reference: ServiceNow Docs - Source Control Roles",
    },
    {
        question: "Which of the following is not a client-side script debugging strategy?",
        type: "single",
        options: ["g_form.addInfoMessage()", "Field Watcher", "jslog()", "gs.log()"],
        correct: [3],
        explanation:
            "gs.log() is server-side; client-side debugging uses g_form.addInfoMessage(), Field Watcher, or jslog(). Reference: ServiceNow Docs - Client Script Debugging",
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
            "The default module behavior is to display a list of all records in the table. Reference: ServiceNow Docs - Module Creation",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "Three: one for application user modules, one for application admin modules, and one for ServiceNow admin modules",
            "As many as needed for the application design",
            "Two: one for application user modules and one for application admin modules",
            "One: used for all application modules",
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
        question:
            "When importing data into ServiceNow, which utility is used to determine if the field names in the import set match the field names in the target table?",
        type: "single",
        options: [
            "Transform Map",
            "Auto Map Matching Fields",
            "CI Relationship Builder",
            "Business Service Management Map",
        ],
        correct: [1],
        explanation:
            "Auto Map Matching Fields automatically matches import set fields to target table fields. Reference: ServiceNow Docs - Data Import",
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
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in a content frame or a separate tab or window",
            "A group of menus or pages that provide related information and functionality to end users",
            "A method to help users quickly access information and services by filtering items in the Application Navigator",
            "A web-based method for delivering software to end users",
        ],
        correct: [0],
        explanation:
            "A module is a navigational link in an application menu. Reference: ServiceNow Docs - Modules",
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
        question:
            "When creating a scoped application that includes flow actions, what is that application called?",
        type: "single",
        options: ["Bundle", "Flow", "Action", "Spoke"],
        correct: [3],
        explanation:
            "A Spoke is a scoped application with Flow Designer actions. Reference: ServiceNow Docs - Flow Designer Spokes",
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
        question: "Which of the following is not an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Rights"],
        correct: [3],
        explanation:
            "Caller Rights is not a Caller Access field option; valid options are Caller Tracking, Caller Restriction, and None. Reference: ServiceNow Docs - Caller Access",
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
        question: "When debugging email delivery, where should you look to view the logs?",
        type: "single",
        options: [
            "[System Logs] -> [Email]",
            "[System Logs] -> [Push Notifications]",
            "[System Logs] -> [Events]",
        ],
        correct: [0],
        explanation:
            "Email logs are found under System Logs > Email. Reference: ServiceNow Docs - Email Debugging",
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
            "When designing and creating a form, what do you create to organize the form's fields?",
        type: "single",
        options: ["Button", "Related List", "Section", "Tab"],
        correct: [2],
        explanation: "Sections are created to organize fields on a form in ServiceNow.",
    },
    {
        question:
            "You are developing a MyApp application with a table, Table A. When installing the MyApp application on an instance, the records of Table A need to be installed as part of the application. The records of Table A will be installed when:",
        type: "single",
        options: [
            "Table A is active and extends the Task table.",
            "The records of Table A are added to the application record using the [Create application file] context menu item.",
            "Table A has an auto-number counter for new records.",
            "Table A is not included in the [System Clone] > [Exclude Tables] list.",
        ],
        correct: [1],
        explanation:
            "Records of Table A are installed when added to the application record using the [Create application file] context menu item.",
    },
    {
        question: "Name three ways to create a ServiceNow table.",
        type: "multiple",
        options: [
            "Using a classic workflow",
            "Uploading a spreadsheet and converting it to a custom table",
            "Using Flow Designer",
            "Using the Now Experience Table Creator",
            "Extending a table",
            "Creating a custom table",
        ],
        correct: [1, 4, 5],
        explanation:
            "ServiceNow tables can be created by uploading a spreadsheet, extending a table, or creating a custom table.",
    },
    {
        question: "Which of the following features can be used in a global application?",
        type: "multiple",
        options: [
            "Delegated Development",
            "Automated Test Framework",
            "Source Control",
            "Flow Designer",
        ],
        correct: [1, 3],
        explanation: "Global applications can use the Automated Test Framework and Flow Designer.",
    },
    {
        question:
            "Which of the following is NOT used to log messages in server-side scripts of a private scope application?",
        type: "single",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "gs.log() is not used for logging in private scope application server-side scripts.",
    },
    {
        question: "Which types of scripts run on the server?",
        type: "multiple",
        options: ["Business Rule", "Client Script", "UI Policy", "Script Action", "Scheduled Job"],
        correct: [0, 3, 4],
        explanation: "Business Rules, Script Actions, and Scheduled Jobs run on the server.",
    },
    {
        question:
            "When creating a table in a private scope application, which four access controls are created for the table?",
        type: "single",
        options: [
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
            "Create, Delete, Read, Write",
            "Insert, Delete, Query, Write",
        ],
        correct: [2],
        explanation:
            "The four access controls created for a table in a private scope application are Create, Delete, Read, and Write.",
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
        explanation: "gs.hasRole('admin') returns true if the logged-in user has the admin role.",
    },
    {
        question:
            "What are the ways to specify a data table in the Guided Application Creator (GAC)?",
        type: "multiple",
        options: [
            "Upload an existing spreadsheet",
            "Use a freeform database",
            "Upload an existing word processing document",
            "Create a new table on the platform",
            "Use an existing table on the platform",
            "Upload an existing PDF",
        ],
        correct: [0, 3, 5],
        explanation:
            "In the Guided Application Creator, data tables can be specified by uploading a spreadsheet, creating a new table, or uploading a PDF.",
    },
    {
        question:
            "Which of the following steps can be used to import new data from a spreadsheet into ServiceNow?",
        type: "single",
        options: [
            "Load data, create a transform map, run the most-voted transform",
            "Select an import set, select a transform map, run the transform",
            "Define a data source, select a transform map, run the transform",
            "Select a data source, schedule the transform",
        ],
        correct: [0],
        explanation:
            "To import data from a spreadsheet, load the data, create a transform map, and run the most-voted transform.",
    },
    {
        question:
            "The business rule script template is as follows: This type of JavaScript function is known as:",
        type: "single",
        options: ["Constructor", "Scope", "Anonymous", "Self-invoking"],
        correct: [3],
        explanation: "The business rule script template is a self-invoking JavaScript function.",
    },
    {
        question:
            "Assume a table named 'table' exists with three fields: field1, field2, and field3. Examining the table's access control list: Which fields can a user with the itil role read?",
        type: "single",
        options: ["field3 only", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "A user with the itil role can read all fields except field3 based on the access control list.",
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
    {
        question:
            "When using the Guided Application Creator to create an application, which of the following is NOT an option for creating a table?",
        type: "single",
        options: [
            "Upload a spreadsheet",
            "Create a table from a template",
            "Extend a table",
            "Create a table from scratch",
        ],
        correct: [1],
        explanation:
            "Creating a table from a template is not an option in the Guided Application Creator.",
    },
    {
        question:
            "As part of an application development plan, it is recommended to define the business requirements and processes managed by the application. What should be considered when documenting a business process?",
        type: "single",
        options: [
            "Business problem, data input/output, users/stakeholders, and process steps",
            "Business problem, data input/output, project schedule, and process steps",
            "Business problem, data input/output, users/stakeholders, and database capacity",
            "Business problem, users/stakeholders, available licenses, and database capacity",
        ],
        correct: [0],
        explanation:
            "Documenting a business process involves considering the business problem, data input/output, users/stakeholders, and process steps.",
    },
    {
        question: "A module requires a link type. Which of the following are link types?",
        type: "single",
        options: [
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from arguments:)",
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [0],
        explanation:
            "Valid link types for a module include Assessment, List of Records, Separator, and Timeline Page.",
    },
    {
        question: "Which of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation: "The GlideUser object (g_user) is part of the client-side scripting API.",
    },
    {
        question: "Which of the following is true about the application picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope appear in the application picker.",
            "All ServiceNow applications, including baseline applications like Incident, appear in the application picker.",
            "Only custom applications appear in the application picker.",
            "Only downloaded applications appear in the application picker.",
        ],
        correct: [0],
        explanation:
            "The application picker displays all custom application scopes and the global scope.",
    },
    {
        question:
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation:
            "The gs.getProperty() method is used to retrieve the value of an application property.",
    },
    {
        question: "Which of the following statements is NOT true about the Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag the section from the [Field Types] tab to the desired location on the form.",
            "To add a field to the form layout, drag the field from the [Fields] tab to the desired location on the form.",
            "To remove a field from the form layout, hover over the field to enable the [Actions] button and select the [Remove] (X) button.",
            "To create a new field on the form’s table, drag the appropriate data type from the [Field Types] tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Sections are not added by dragging from the [Field Types] tab in the Form Designer.",
    },
    {
        question:
            "Which method call returns true only if the currently logged-in user has the catalog_admin role and no other roles?",
        type: "single",
        options: [
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
        ],
        correct: [3],
        explanation:
            "g_user.hasRoleExactly('catalog_admin') returns true only if the user has the catalog_admin role and no other roles.",
    },
    {
        question: "Which of the following is true regarding application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope.",
            "Applications downloaded from third-party ServiceNow application developers cannot cause naming conflicts.",
            "All developers can edit any application.",
            "Developers can choose the namespace prefix for the scope.",
        ],
        correct: [1],
        explanation: "Third-party ServiceNow applications are designed to avoid naming conflicts.",
    },
    {
        question:
            "Identify the ways an application can respond to events generated by the gs.eventQueue() method.",
        type: "multiple",
        options: [
            "Script Action",
            "Scheduled Script Execution (Scheduled Job)",
            "UI Policy",
            "Email Notification",
        ],
        correct: [0, 3],
        explanation:
            "Applications can respond to gs.eventQueue() events via Script Actions and Email Notifications.",
    },
    {
        question: "Which of the following is true about removing a field from a table?",
        type: "single",
        options: [
            "Any field in the table can be removed.",
            "Inherited fields can be detected.",
            "When a field is detected, the table records are deleted.",
            "User-defined non-inherited fields can be detected.",
        ],
        correct: [3],
        explanation:
            "User-defined non-inherited fields can be detected when removing fields from a table.",
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
        correct: [2],
        explanation: "Client-side scripts manage the database and backend.",
    },
    {
        question: "What is the best UX format for use with lists and forms?",
        type: "single",
        options: ["Form", "List", "Standard", "Classic"],
        correct: [3],
        explanation: "The Classic UX format is best for lists and forms.",
    },
    {
        question: "Which of the following are true about ServiceNow reports?",
        type: "multiple",
        options: [
            "All users can view shared reports.",
            "Data can be represented graphically.",
            "All users can generate reports on any table.",
            "Authorized users can run them on demand.",
            "They can be scheduled to run and distributed via email.",
        ],
        correct: [1, 3, 4],
        explanation:
            "ServiceNow reports can represent data graphically, be run on demand by authorized users, and be scheduled for email distribution.",
    },
    {
        question: "Which of the following is NOT supported in Flow Designer?",
        type: "single",
        options: [
            "Running a flow from a MetricBase trigger",
            "Testing a flow using rollback",
            "Using delegated developers",
            "Calling a subflow from a flow",
        ],
        correct: [1],
        explanation: "Testing a flow using rollback is not supported in Flow Designer.",
    },
    {
        question:
            "When configuring access control without conditions or scripts, which of the following statements is NOT correct?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record.",
            "table.None denies access to all records in the table.",
            "table.field grants access to a specific field in a record.",
            "table.id grants access to a specific record in the table.",
        ],
        correct: [3],
        explanation: "table.id does not grant access to a specific record in the table.",
    },
    {
        question:
            "Which of the following applies to a Script Include with a protection policy value of Protected?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the Script Include",
            "The protection policy option can only be enabled by users with the admin role",
            "The protection policy is applied only when the glide.app.apply_protection system property value is true",
            "The protection policy is applied only when the application is downloaded from the ServiceNow App Store",
        ],
        correct: [3],
        explanation:
            "A Script Include with a protection policy value of Protected is only applied when the application is downloaded from the ServiceNow App Store.",
    },
    {
        question:
            "Which of the following is NOT a method to install an application on a ServiceNow instance?",
        type: "single",
        options: [
            "Install an application from the Application Repository",
            "Select the Copy button on a request record",
            "Download and install an application from the ServiceNow Share website",
            "Download and install a third-party application from the ServiceNow Store",
        ],
        correct: [1],
        explanation:
            "Selecting the Copy button on a request record is not a method to install an application on a ServiceNow instance.",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application, follow these steps:",
        type: "single",
        options: [
            "Enter the application name in the global search field",
            "Open the list of update sets for the instance",
            "Examine the Application Files related list for the application to be published",
            "Open artifact records individually and check the value of the Application field",
        ],
        correct: [2],
        explanation:
            "To review application artifacts, examine the Application Files related list for the application to be published.",
    },
    {
        question: "A module requires a link type. Which of the following are link types?",
        type: "single",
        options: [
            "Record, Separator, Catalog Type, List of Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments:)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [1],
        explanation:
            "The valid link types for a module are Assessment, List of Records, Separator, and Timeline Page.",
    },
    {
        question:
            "A scoped application that includes Flow Designer content specific to a particular application is called a(n):",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A scoped application with Flow Designer content specific to a particular application is called a Spoke.",
    },
    {
        question: "Which of the following is NOT part of Form Designer?",
        type: "single",
        options: ["Form Layout", "Page Header", "Schema Map", "Field Navigator"],
        correct: [2],
        explanation: "Schema Map is not part of Form Designer.",
    },
    {
        question: "Which of the following applies to the GlideUser (g_user) method?",
        type: "single",
        options: [
            "Can only be used in client scripts and UI policies",
            "Can only be used in business rules",
            "Can be used in client scripts, UI policies, and UI actions",
            "Can be used in business rules and included in scripts",
        ],
        correct: [2],
        explanation:
            "The GlideUser (g_user) method can be used in client scripts, UI policies, and UI actions.",
    },
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
        question:
            "When configuring access control without conditions or scripts, which of the following statements is NOT correct?",
        type: "single",
        options: [
            "table.* allows access to all fields in a record",
            "table.None does not allow access to any records on the table",
            "table.field allows access to a specific field in a record",
            "table.id allows access to a specific record on the table",
        ],
        correct: [3],
        explanation: "table.id does not allow access to a specific record on the table.",
    },
    {
        question: "Which of the following is correct?",
        type: "single",
        options: [
            "UI policy actions are executed before the UI policy script",
            "The execution order of UI policy scripts and actions is determined at runtime",
            "UI policy scripts are executed before UI policy actions",
            "UI policy actions and scripts are executed simultaneously",
        ],
        correct: [0],
        explanation: "UI policy actions are executed before the UI policy script.",
    },
    {
        question:
            "Which ATF test step allows you to create a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create User", "Create Role", "Create Group", "Impersonate"],
        correct: [0],
        explanation:
            "The Create User ATF test step allows creating a user with specified roles and groups for testing.",
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
        question: "Which of the following cannot be debugged using the Field Watcher?",
        type: "single",
        options: ["Business Rules", "Script Includes", "Client Scripts", "Access Controls"],
        correct: [1],
        explanation: "Script Includes cannot be debugged using the Field Watcher.",
    },
    {
        question: "When evaluating access controls, ServiceNow searches and evaluates:",
        type: "single",
        options: [
            "Matches for the current table only",
            "Matches for the current field only",
            "From the most specific match to the most general match",
            "From the most general match to the most specific match",
        ],
        correct: [2],
        explanation:
            "ServiceNow evaluates access controls from the most specific match to the most general match.",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "May inherit the parent’s fields",
            "Automatically updates the application scope",
            "Does not inherit the parent’s fields",
            "Inherits the parent’s fields",
        ],
        correct: [3],
        explanation: "A table that extends another table inherits the parent’s fields.",
    },
    {
        question:
            "Which of the following does NOT apply to the Weight field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest weight for the same record and recipient is sent",
            "A weight value of zero means the email is not sent",
            "The default weight value is zero",
            "A weight value of zero means the notification is always sent when the notification’s sending criteria are met",
        ],
        correct: [1],
        explanation: "A weight value of zero does not mean the email is not sent.",
    },
    {
        question:
            "Which report types can be created by right-clicking a column header in a table’s list?",
        type: "single",
        options: ["Bar, Pie, Histogram, and Line", "Bar", "Bar, Pie, and Histogram", "Bar and Pie"],
        correct: [3],
        explanation:
            "Bar and Pie reports can be created by right-clicking a column header in a table’s list.",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference the properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property_name>}",
            "${current.<property_name>}",
            "${<property_name>.getDisplayValue()}",
            "${gs.<property_name>}",
        ],
        correct: [0],
        explanation:
            "The syntax ${event.<property_name>} is used to reference event properties in email notifications.",
    },
    {
        question:
            "What is the benefit of creating an Application Properties page for each application being developed?",
        type: "single",
        options: [
            "The Application Properties page is the proper landing page for the application",
            "Application Properties allow developers to override application properties inherited from ServiceNow",
            "Application users know to navigate to the Application Properties page to change the application’s appearance",
            "Application Properties allow developers or administrators to change the application’s behavior without modifying application artifacts",
        ],
        correct: [3],
        explanation:
            "Application Properties allow developers or administrators to change the application’s behavior without modifying application artifacts.",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "Transform Map is used to determine the relationship between fields in an Import Set table and an existing ServiceNow table.",
    },
    {
        question: "Which of the following is NOT a method in the ServiceNow REST API?",
        type: "single",
        options: ["Copy", "Post", "Get", "Delete"],
        correct: [0],
        explanation: "Copy is not a method in the ServiceNow REST API.",
    },
    {
        question: "Which of the following is NOT an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation: "Caller Permission is not an option for the Caller Access field.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or a separate tab or window",
            "A group of menus or pages providing related information and functionality to end users",
            "A method to allow users to quickly access information and services by filtering items in the Application Navigator",
            "A web-based method to provide software to end users",
        ],
        correct: [0],
        explanation:
            "A module is a function within an application menu, such as opening a page in the content frame or a separate tab or window.",
    },
    {
        question:
            "When creating a new application file in a scoped application, cross-scope access is enabled by default for which of the following?",
        type: "single",
        options: ["REST Messages", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation: "Cross-scope access is enabled by default for Tables in a scoped application.",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community",
            "A marketplace for free and paid certified ServiceNow applications and integrations",
            "A downloadable content ServiceNow script archive",
            "An alternate name for the ServiceNow Developer Share site",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a marketplace for free and paid certified ServiceNow applications and integrations.",
    },
    {
        question: "Which of the following is NOT supported in Flow Designer?",
        type: "single",
        options: [
            "Calling a subflow from a flow",
            "Testing a flow using rollback",
            "Using delegated developers",
            "Running a flow from a MetricBase trigger",
        ],
        correct: [1],
        explanation: "Testing a flow using rollback is not supported in Flow Designer.",
    },
    {
        question:
            "Which of the following GlideRecord methods execute a query against a database table?",
        type: "multiple",
        options: ["-query()", "runQuery()", "query()", "-get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "The GlideRecord methods -query(), query(), and get() execute a query against a database table.",
    },
    {
        question:
            "When selecting the data type for a field displayed on a form, which of the following statements is NOT correct?",
        type: "single",
        options: [
            "The Choice data type is used to limit a field’s options",
            "The Date data type is used to enter dates and times",
            "The Phone Number data type is used to automate validation of phone number data",
            "The String data type is used for free-form text fields",
        ],
        correct: [1],
        explanation:
            "The Date data type statement is incorrect as it refers to both dates and times, whereas it is specific to dates.",
    },
    {
        question:
            "Which of the following database operations CANNOT be controlled by Application Access?",
        type: "single",
        options: ["Update", "Delete", "Create", "Query"],
        correct: [3],
        explanation: "Query operations cannot be controlled by Application Access.",
    },
    {
        question:
            "If the Can Read field is NOT selected, which Application Access configuration field becomes unavailable?",
        type: "single",
        options: [
            "All access to this table via web services",
            "Can create, update, delete",
            "Can read does not affect the availability of other Application Access fields",
            "Allow configuration",
        ],
        correct: [1],
        explanation:
            "If Can Read is not selected, the Can create, update, delete field becomes unavailable.",
    },
    {
        question:
            "When creating a table in a private scope application, which four access controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
        ],
        correct: [1],
        explanation:
            "The four access controls created for a table in a private scope application are Create, Delete, Read, Write.",
    },
    {
        question: "Which of the following apply to reports in ServiceNow? (Select three.)",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "Can represent data graphically",
            "All users can generate reports on any table",
            "Can be run on-demand by authorized users",
            "Can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "Reports in ServiceNow can represent data graphically, can be run on-demand by authorized users, and can be scheduled to run and distributed via email.",
    },
    {
        question: "Which of the following statements does NOT apply to Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag a section from the Field Types tab to the desired location on the form",
            "To add a field to the form layout, drag a field from the Fields tab to the desired location on the form",
            "To remove a field from the form layout, hover over the field to enable the Action button and select the Delete (X) button",
            "To create a new field on the form’s table, drag the appropriate data type from the Field Types tab to the form and configure the new field",
        ],
        correct: [0],
        explanation:
            "Sections are not added to the form layout by dragging from the Field Types tab in Form Designer.",
    },
    {
        question:
            "Which of the following is a correct statement about the Guided Application Creator?",
        type: "single",
        options: [
            "The global scope option is enabled by default",
            "A scoped application user role is automatically created",
            "Default access controls are automatically created",
            "A welcome screen is displayed every time a new application is created",
        ],
        correct: [3],
        explanation:
            "A welcome screen is displayed every time a new application is created in the Guided Application Creator.",
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
            "gs.hasRole('admin') returns true if the currently logged-in user has the admin role.",
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
            "gs.hasRole() and current.isNewRecord() are useful methods in access control scripts.",
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
        question: "Which of the following objects CANNOT be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation: "The previous object cannot be used in a Script Action script.",
    },
    {
        question: "Which of the following is NOT a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [3],
        explanation: "Form Choice is not a UI Action type.",
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
            "What record is used to track cross-scope applications or scripts requesting access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted Caller Access record",
            "Caller Tracking record",
            "Access Control Level record",
            "Cross-Scope Access record",
        ],
        correct: [0],
        explanation: "Restricted Caller Access record tracks cross-scope access requests.",
    },
    {
        question: "The Task table is an example of which of the following? (Select two.)",
        type: "multiple",
        options: ["Legacy Class", "Child Class", "Base Class", "Parent Class"],
        correct: [2, 3],
        explanation: "The Task table is both a Base Class and a Parent Class.",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records on an application’s data table, how should Application Access be configured?",
        type: "single",
        options: [
            "Instead of using Application Access, create access controls to prevent other application scopes from creating configuration records on the application’s data table",
            "Set the Accessible from field to All application scopes and deselect the Can create option",
            "Set the Accessible from field to This application scope only and deselect the Allow access to this table via web services option",
            "Set the Accessible from field to This application scope only",
        ],
        correct: [3],
        explanation:
            "Set the Accessible from field to This application scope only to prevent other scopes from creating configuration records.",
    },
    {
        question: "What are application files in a ServiceNow application?",
        type: "single",
        options: [
            "An XML export of the application’s table records",
            "ServiceNow artifacts that make up the application",
            "An XML export of the application’s update set",
            "A CSV file containing data imported into the application",
        ],
        correct: [1],
        explanation: "Application files are ServiceNow artifacts that make up the application.",
    },
    {
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "Forms and form fields",
            "Access to playbooks",
            "Database and backend",
            "User access",
        ],
        correct: [0],
        explanation: "Client-side scripts manage forms and form fields.",
    },
    {
        question:
            "Which of the following is NOT required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application name"],
        correct: [3],
        explanation:
            "Application name is not required to link a ServiceNow application to a Git repository.",
    },
    {
        question: "Which action can a business rule perform without using a script?",
        type: "single",
        options: [
            "Set a field value and query the database",
            "Set a field value and generate an event",
            "Set a field value and write to the system log",
            "Set a field value and add a message",
        ],
        correct: [1],
        explanation:
            "A business rule can set a field value and generate an event without using a script.",
    },
    {
        question: "Which object is NOT accessible to a Display Business Rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation: "The previous object is not accessible to a Display Business Rule.",
    },
    {
        question:
            "Which source control operation is available from both Studio and a Git repository?",
        type: "single",
        options: [
            "Create Branch",
            "Apply Remote Changes",
            "Stash Local Changes",
            "Edit Repository Configuration",
        ],
        correct: [0],
        explanation: "Create Branch is available from both Studio and a Git repository.",
    },
    {
        question:
            "When creating a client script to provide feedback for a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.showFieldMsg() is used to provide feedback for a specific field in a client script.",
    },
    {
        question: "One use of the ServiceNow REST API Explorer is to:",
        type: "single",
        options: [
            "Practice interacting with public data providers using REST",
            "Find resources on the web to learn about REST",
            "Convert SOAP message functions to REST methods",
            "Create sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "The ServiceNow REST API Explorer is used to create sample code for sending REST requests to ServiceNow.",
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
    {
        question: "Which of the following client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "Catalog Client Scripts and Catalog UI Policies",
            "UI Scripts and UI Actions",
            "UI Scripts and Record Producer Scripts",
            "Client Scripts and UI Policies",
        ],
        correct: [0],
        explanation: "Catalog Client Scripts and Catalog UI Policies apply to a Record Producer.",
    },
    {
        question: "Which of the following is not an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation:
            "The Caller Access field options are Caller Tracking, Caller Restriction, and None. Caller Permission is not a valid option.",
    },
    {
        question: "Which of the following statements apply to the Form Designer?",
        type: "single",
        options: ["a, b, c, and d", "b, c, and d", "a, b, and d", "a, b, c"],
        correct: [3],
        explanation:
            "The Form Designer allows dragging fields from the Fields tab, creating new fields by dragging data types from the Field Types tab, and removing fields using the Delete (X) button. Adding sections is not done by dragging from the Field Types tab.",
    },
    {
        question:
            "Suppose a table named 'table' exists and contains three fields: field1, field2, and field3. You examine the table’s Access Control List: Which fields can a user with the itil role read?",
        type: "single",
        options: ["field3 only", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "Based on the Access Control List, users with the itil role can read all fields except field3.",
    },
    {
        question:
            "What is the benefit of storing the majority of an application’s server-side script logic in Script Includes?",
        type: "single",
        options: ["a, b, d", "a, b, c, and d", "b, c, d", "a, b, c"],
        correct: [2],
        explanation:
            "Script Includes execute only when called, can be hidden in the ServiceNow Store, and allow changes in one place, improving maintainability.",
    },
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
        question: "How can an application link to a repository behind a firewall?",
        type: "single",
        options: [
            "This option is not supported.",
            "Link the application to source control through a MID Server.",
            "Link the application to source control through an access token.",
            "Link the application to source control using multi-factor authentication.",
        ],
        correct: [1],
        explanation:
            "A MID Server enables linking an application to a repository behind a firewall by facilitating secure communication.",
    },
    {
        question: "What are application files in a ServiceNow application?",
        type: "single",
        options: [
            "An XML export of the application’s table records",
            "ServiceNow artifacts that make up the application",
            "An XML export of the application’s update set",
            "A CSV file containing data imported into the application",
        ],
        correct: [1],
        explanation:
            "Application files are the ServiceNow artifacts (e.g., scripts, tables, forms) that constitute the application.",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "It may inherit the parent’s fields.",
            "It automatically updates the application scope.",
            "It does not inherit the parent’s fields.",
            "It inherits the parent’s fields.",
        ],
        correct: [3],
        explanation:
            "A table that extends another inherits all fields from the parent table, along with its functionality.",
    },
    {
        question: "Which of the following objects cannot be accessed by a Display Business Rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation:
            "Display Business Rules cannot access the 'previous' object, as they run before the form is displayed.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "Application properties allow developers to override application properties inherited from ServiceNow.",
            "The application properties page is the appropriate landing page for the application.",
            "Application users know they need to navigate to the [Application Properties] page to change the application’s appearance.",
            "Application properties allow developers or administrators to change the application’s behavior without modifying application artifacts.",
        ],
        correct: [3],
        explanation:
            "Application properties enable behavior changes without altering artifacts, providing flexibility.",
    },
    {
        question:
            "Which of the following is not used to log messages in server-side scripts for a private scope application?",
        type: "luor",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "In private scope applications, gs.log() is not used for logging; gs.error(), gs.warn(), and gs.debug() are preferred.",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "Three: one for the application’s user modules, one for the application’s admin modules, and one for ServiceNow admin modules",
            "As many as needed for the application’s design",
            "Two: one for the application’s user modules and one for the application’s admin modules",
            "One, which is used for all application modules",
        ],
        correct: [1],
        explanation: "An application can have as many menus as required by its design.",
    },
    {
        question: "A graphical view of relationships between tables is a <blank>.",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation: "A Schema Map provides a graphical view of table relationships.",
    },
    {
        question:
            "Access control debug information identifies whether each access control element granted or denied access. In which order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles",
        ],
        correct: [2],
        explanation:
            "Access control elements are evaluated in the order: Roles, Conditions, Script.",
    },
    {
        question: "What is a workflow context?",
        type: "single",
        options: [
            "A checked-out and actively edited workflow",
            "Generated from a workflow version, executes activities, and follows transitions",
            "A condition added to the table where the workflow is defined, such as 'active is true'",
            "The business reason or process for which the workflow was designed",
        ],
        correct: [1],
        explanation:
            "A workflow context is generated from a workflow version and manages activity execution and transitions.",
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
            "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
        type: "single",
        options: [
            "Select data source, schedule transformation",
            "Load data, create transform map, run the most-voted transformation",
            "Define data source, select transform map, run transformation",
            "Select import set, select transform map, run transformation",
        ],
        correct: [1],
        explanation:
            "The process involves loading data, creating a transform map, and running the transformation.",
    },
    {
        question: "How does ServiceNow match incoming emails to existing records?",
        type: "single",
        options: ["Watermark", "Record Link", "Subject", "sys_id"],
        correct: [0],
        explanation: "ServiceNow uses watermarks in emails to match them to existing records.",
    },
    {
        question: "One use of the ServiceNow REST API Explorer is:",
        type: "single",
        options: [
            "To practice interacting with public data providers using REST",
            "To find web resources for learning about REST",
            "To convert SOAP message functions to REST methods",
            "To generate sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation: "The REST API Explorer generates sample code for REST requests to ServiceNow.",
    },
    {
        question:
            "Application developers can specify the ServiceNow page displayed to users after submitting a new record using a Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            'Write an after Business Rule script for the Record Producer’s table: window.redirect = "<URL>";',
            "Create an application property to store the URL",
            'Write a script in the Record Producer’s Script field: producer.redirect = "<URL>";',
            "Configure the page in the Module that opens the Record Producer UI",
        ],
        correct: [2],
        explanation:
            'Application developers can specify the redirect page by writing a script in the Record Producer\'s Script field using producer.redirect = "<URL>".',
    },
    {
        question:
            "Which of the following applies to a Script Include with a protection policy value of Protected?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the Script Include.",
            "The protection policy option can only be enabled by users with the admin role.",
            "The protection policy applies only if the glide.app.apply_protection system property value is true.",
            "The protection policy applies only if the application was downloaded from the ServiceNow App Store.",
        ],
        correct: [3],
        explanation:
            "A protected Script Include is only restricted if the application is from the ServiceNow App Store.",
    },
    {
        question:
            "Which of the following is true about the application picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the application picker does not set the application scope.",
            "Selecting global in the application picker sets the application scope to Incident.",
            "Global is a reserved application that does not appear in the application picker.",
            "Selecting an application from the application picker sets the application scope.",
        ],
        correct: [3],
        explanation:
            "The application picker sets the application scope when an application is selected.",
    },
    {
        question:
            "A scoped application containing Flow Designer content specific to a particular application is called a(n):",
        type: "single",
        options: ["Spoke", "Bundle", "Action", "Flow"],
        correct: [0],
        explanation:
            "A Spoke is a scoped application with Flow Designer content for a specific application.",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Outbound Email", "Application", "Record", "Schedule"],
        correct: [0],
        explanation: "Outbound Email is not a trigger type in Flow Designer.",
    },
    {
        question: "Modules require a link type. Which of the following is a list of link types?",
        type: "single",
        options: [
            "Record, Separator, Catalog Type, List of Roles",
            "Assessment, Record List, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from arguments:)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [1],
        explanation:
            "Valid link types include Assessment, Record List, Separator, and Timeline Page.",
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
    {
        question: "Which of the following is not part of the Form Designer?",
        type: "single",
        options: ["Form Layout", "Page Header", "Schema Map", "Field Navigator"],
        correct: [2],
        explanation: "Schema Map is not part of the Form Designer; it is a separate tool.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "The application properties page is the appropriate landing page for the application.",
            "Application properties allow developers to override application properties inherited from ServiceNow.",
            "Application users know they need to navigate to the [Application Properties] page to change the application’s appearance.",
            "Application properties allow developers or administrators to change the application’s behavior without modifying application artifacts.",
        ],
        correct: [3],
        explanation: "Application properties enable behavior changes without altering artifacts.",
    },
    {
        question:
            "From the list below, identify one reason an application might not be suitable for ServiceNow.",
        type: "single",
        options: [
            "Requires workflows to manage processes",
            "Requires low-level programming libraries to be used 'as-is'",
            "Requires reporting capabilities",
            "Extensively uses forms to manipulate data",
        ],
        correct: [1],
        explanation:
            "ServiceNow is not suited for applications requiring low-level programming libraries used 'as-is'.",
    },
    {
        question:
            "Access control debug information indicates whether each access control element granted or denied access. In which order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Script, Roles",
            "Script, Conditions, Roles",
            "Conditions, Roles, Script",
            "Roles, Conditions, Script",
        ],
        correct: [3],
        explanation:
            "Access control elements are evaluated in the order: Roles, Conditions, Script.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or in a new tab or window",
            "A group of menus or pages providing related information and functionality to end users",
            "A method for users to quickly access information or services by filtering items in the Application Navigator",
            "A web-based method for delivering software to end users",
        ],
        correct: [0],
        explanation:
            "A module is a function within an application menu that opens pages or performs actions.",
    },
    {
        question: "Which statement about the Guided Application Creator is true?",
        type: "single",
        options: [
            "The global scope option is enabled by default.",
            "A scoped application user role is automatically created.",
            "Default access controls are automatically created.",
            "A welcome screen is displayed each time a new application is created.",
        ],
        correct: [3],
        explanation:
            "The Guided Application Creator displays a welcome screen for each new application.",
    },
    {
        question: "Which of the following statements does not apply to the Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag the section from the [Field Types] tab to the desired location on the form.",
            "To add a field to the form layout, drag the field from the [Fields] tab to the desired location on the form.",
            "To remove a field from the form layout, hover over the field, enable the [Actions] button, and select the [Delete] (X) button.",
            "To create a new field on the form’s table, drag the appropriate data type from the [Field Types] tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Sections are not added by dragging from the Field Types tab in Form Designer.",
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
        explanation: "The GlideUser object (g_user) is part of the client-side script API.",
    },
    {
        question:
            "Which of the following applies to a table with the [Allow configuration] application access option selected?",
        type: "single",
        options: [
            "Only scripts from applications in the same scope can create business rules for the table.",
            "All users with the application’s user role can modify the application’s scripts.",
            "Applications outside the scope can create business rules for the table.",
            "Applications outside the scope can add new tables to the scoped application.",
        ],
        correct: [2],
        explanation:
            "The [Allow configuration] option allows out-of-scope applications to create business rules.",
    },
    {
        question:
            "a. Replace outdated and inappropriate custom business applications and processes b. Extend service delivery and management to all enterprise departments c. Allow users full access to all ServiceNow tables, records, and fields d. Extend the value of ServiceNow",
        type: "single",
        options: ["a, b, c", "a, b, c, d", "b, c, d", "a, b, d"],
        correct: [3],
        explanation:
            "ServiceNow’s value includes replacing outdated applications, extending services, and enhancing value, but not granting full access to all tables.",
    },
    {
        question: "The Task table is an example of which of the following?",
        type: "multiple",
        options: ["Legacy Class", "Child Class", "Base Class", "Parent Class"],
        correct: [2, 3],
        explanation:
            "The Task table is both a Base Class and a Parent Class, as it is extended by other tables.",
    },
    {
        question: "Which of the following is true regarding application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope.",
            "Applications downloaded from third-party ServiceNow application developers cannot cause naming conflicts.",
            "All developers can edit any application.",
            "Developers can choose the namespace prefix for the scope.",
        ],
        correct: [1],
        explanation: "Third-party applications are scoped to avoid naming conflicts.",
    },
    {
        question: "Which action can be performed in a business rule without using a script?",
        type: "single",
        options: [
            "Set a field value and query the database.",
            "Set a field value and generate an event.",
            "Set a field value and write to the system log.",
            "Set a field value and add a message.",
        ],
        correct: [1],
        explanation:
            "A business rule can set a field value and generate an event without scripting.",
    },
    {
        question:
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation: "The gs.getProperty() method retrieves application property values.",
    },
    {
        question: "What is the purpose of the application picker?",
        type: "single",
        options: [
            "To select the application to run",
            "To select applications as favorites in the Application Navigator",
            "To select the application to edit and set the application scope",
            "To select applications to download and install",
        ],
        correct: [2],
        explanation: "The application picker selects the application to edit and sets the scope.",
    },
    {
        question:
            "When designing and creating a form, what do you create to organize the form’s fields?",
        type: "single",
        options: ["Related List", "Tab", "Section", "Button"],
        correct: [2],
        explanation: "Sections are used to organize fields on a form.",
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
        explanation: "Flow Designer does not support testing flows using rollback.",
    },
    {
        question:
            "Which method prints a message with a blue background at the top of the current form by default?",
        type: "single",
        options: [
            "g_form.addInfoMsg()",
            "g_form.addInfoMessage()",
            "g_form.showFieldMessage()",
            "g_form.showFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.addInfoMessage() displays a blue background message at the top of the form.",
    },
    {
        question:
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application Name"],
        correct: [3],
        explanation:
            "The application name is not required to link to a Git repository; username, URL, and password are needed.",
    },
    {
        question:
            "When selecting the data type for fields displayed on a form, which of the following statements is incorrect?",
        type: "single",
        options: [
            "Use the Choice data type to restrict the field’s options.",
            "Use the Date data type to enter dates and times.",
            "Use the Phone Number data type to automate validation of phone number data.",
            "Use the String data type for free-form text fields.",
        ],
        correct: [1],
        explanation:
            "The Date data type is used for dates only; Date/Time is used for both dates and times.",
    },
    {
        question:
            "An application developer configures ServiceNow using industry-standard JavaScript to...",
        type: "single",
        options: [
            "Enable right-click to edit the application’s context menu in the Navigator",
            "Extend and add functionality",
            "Customize the organization’s company logo and banner text",
            "Set the display name for outbound emails",
        ],
        correct: [1],
        explanation: "JavaScript is used to extend and add functionality in ServiceNow.",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should application access be configured?",
        type: "single",
        options: [
            "Instead of using application access, create an access control to prevent other application scopes from creating configuration records in the application’s data table.",
            "Set the [Accessible from] field value to [All application scopes] and deselect the [Can create] option.",
            "Set the [Accessible from] field value to [This application scope only] and deselect the [Allow access to this table via web services] option.",
            "Set the [Accessible from] field value to [This application scope only].",
        ],
        correct: [3],
        explanation:
            "Setting [Accessible from] to [This application scope only] restricts access to the current scope.",
    },
    {
        question: "Which features are available in Studio?",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branches",
            "Merge branches",
            "Push and update sets",
        ],
        correct: [1, 2],
        explanation:
            "Studio supports searching and merging branches for source control management.",
    },
    {
        question: "Which statement does not apply when extending an existing table?",
        type: "single",
        options: [
            "The parent table’s access controls are evaluated when determining access to the new table’s records and fields.",
            "The new table inherits functionality built into the parent table.",
            "The new table inherits all fields from the parent table.",
            "All required behavior must be scripted and configured.",
        ],
        correct: [3],
        explanation:
            "Extending a table inherits fields and functionality; behavior does not need to be fully scripted.",
    },
    {
        question:
            "When configuring an access control without conditions or scripts, which of the following statements is incorrect?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record.",
            "table.None denies access to all records on the table.",
            "table.field grants access to a specific field in a record.",
            "table.id grants access to a specific record on the table.",
        ],
        correct: [3],
        explanation: "table.id is not a valid syntax for granting access to a specific record.",
    },
    {
        question: "Which types of scripts run on the server?",
        type: "multiple",
        options: ["Business Rule", "Client Script", "UI Policy", "Script Action", "Scheduled Job"],
        correct: [0, 3, 4],
        explanation: "Business Rules, Script Actions, and Scheduled Jobs run on the server.",
    },
    {
        question:
            "If the [Create module] field is selected when creating a table, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to allow creating a new record",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior",
            "Displays the application’s empty homepage",
            "Displays a list of all records in the table",
        ],
        correct: [3],
        explanation: "The default behavior is to display a list of all records in the table.",
    },
    {
        question:
            "For a user to pass an access control, which of the following statements must evaluate to true?",
        type: "multiple",
        options: [
            "Other access controls matching the record evaluate to true.",
            "The conditions set in the access control must evaluate to true.",
            "The user must be granted access through a business rule.",
            "The user must have one of the roles specified in the [Required roles] related list.",
            "The script configured in the access control must evaluate to true.",
        ],
        correct: [1, 3, 4],
        explanation:
            "Conditions, required roles, and scripts in the access control must evaluate to true.",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community",
            "A marketplace for free and paid certified ServiceNow applications and integrations",
            "A downloadable content ServiceNow script archive",
            "An alternative name for the ServiceNow Developer Share site",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a marketplace for certified applications and integrations.",
    },
    {
        question:
            "When creating a Utils Script Include, there is a basic strategy. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the function",
            "Create the class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation: "Identifying the table is not part of creating a Utils Script Include.",
    },
    {
        question:
            "When setting the label of a field in a child table while working in Form Designer, which table’s label is modified?",
        type: "single",
        options: ["Base Table", "Child Table", "Parent Table", "All Tables"],
        correct: [1],
        explanation: "The label is modified for the child table only.",
    },
    {
        question: "Identify the incorrect statement about delegated development in ServiceNow.",
        type: "single",
        options: [
            "Administrators can grant non-admin users the ability to develop global applications.",
            "Administrators can specify the types of application files developers can access.",
            "Administrators can allow developers access to script fields.",
            "Administrators can allow developers access to security records.",
        ],
        correct: [0],
        explanation:
            "Non-admin users cannot be granted the ability to develop global applications.",
    },
    {
        question:
            "When creating a Utils Script Include, there is a basic strategy. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Write the script for the function",
            "Create a class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation:
            "Identifying the table is not a step in creating a Utils Script Include, as it typically involves defining functions and optionally creating classes or prototype objects.",
    },
    {
        question:
            "Which of the following database operations cannot be controlled by Application Access?",
        type: "single",
        options: ["Update", "Delete", "Create", "Query"],
        correct: [3],
        explanation:
            "Application Access controls Create, Read, Update, and Delete (CRUD) operations, but Query operations are not directly controlled by Application Access settings.",
    },
    {
        question:
            "Which of the following GlideRecord methods execute a query against a database table?",
        type: "multiple",
        options: ["_query()", "runQuery()", "query()", "_get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "The _query(), query(), and get() methods execute queries against a database table in GlideRecord. runQuery() and _get() are not standard GlideRecord methods for querying.",
    },
    {
        question: "Which of the following is not a purpose of application scope?",
        type: "single",
        options: [
            "Provide relationships between application artifacts",
            "Provide a way to track the user who developed the application",
            "Provide a namespace (prefix and scope name) to prevent collisions between application names",
            "Control how scripts from another scope can modify the tables of a scoped application",
        ],
        correct: [1],
        explanation:
            "Application scope does not track the user who developed the application. It manages artifact relationships, namespaces, and cross-scope access control.",
    },
    {
        question: "Which of the following statements is not true about Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag the section from the [Field Types] tab to the desired location on the form.",
            "To add a field to the form layout, drag the field from the [Fields] tab to the desired location on the form.",
            "To remove a field from the form layout, hover over the field to enable the [Actions] button, then select the [Delete] (X) button.",
            "To create a new field on the form’s table, drag the appropriate data type from the [Field Types] tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Sections are added via the form layout configuration, not by dragging from the [Field Types] tab, which is used for field types.",
    },
    {
        question:
            "Which of the following is true about this script snippet? g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "The method returns true if the currently logged-in user has the x_my_app_user role or the admin role.",
            "The method returns false only if the currently logged-in user has the x_my_app_user role.",
            "There is no g_user.hasRole() method.",
            "The method returns true only if the currently logged-in user has the x_my_app_user role.",
        ],
        correct: [0],
        explanation:
            "g_user.hasRole() returns true if the user has the specified role or the admin role, as admins inherit all roles.",
    },
    {
        question:
            "When the [Create Module] field is selected during table creation, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to allow creating a new record",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior",
            "Displays the empty homepage of the application",
            "Displays a list of all records in the table",
        ],
        correct: [3],
        explanation:
            "The default behavior of a new module created with a table is to display a list of all records in that table.",
    },
    {
        question: "Which of the following is not a debugging strategy for client-side scripts?",
        type: "single",
        options: ["g_form.addInfoMessage()", "Field Watcher", "jslog()", "gs.log()"],
        correct: [3],
        explanation:
            "gs.log() is a server-side debugging method, not used for client-side scripts, unlike the other options.",
    },
    {
        question:
            "Which ATF test step allows you to create a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create User", "Create Role", "Create Group", "Impersonate"],
        correct: [0],
        explanation:
            "The 'Create User' ATF test step allows creating a user with specified roles and groups for testing purposes.",
    },
    {
        question:
            "Application developers use industry-standard JavaScript to configure ServiceNow for...",
        type: "single",
        options: [
            "Enabling right-click to edit the application’s context menu in the Navigator",
            "Extending and adding functionality",
            "Customizing the organization’s company logo and banner text",
            "Setting the display name for outbound emails",
        ],
        correct: [1],
        explanation:
            "JavaScript is primarily used in ServiceNow to extend and add functionality through scripting.",
    },
    {
        question:
            "Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current",
        ],
        correct: [2],
        explanation:
            "Scheduled Scripts can use GlideSystem (gs) and GlideRecord objects to perform operations.",
    },
    {
        question:
            "Which of the following does not apply to the Weight field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest weight for the same record and recipient is sent.",
            "A weight value of zero means no email will be sent.",
            "The default weight value is zero.",
            "A weight value of zero means the notification will always be sent when the criteria for sending are met.",
        ],
        correct: [1],
        explanation:
            "A weight of zero does not prevent email sending; it means the notification will be sent if criteria are met.",
    },
    {
        question:
            "What is the benefit of extending an existing table, such as the Task table, when creating a new application?",
        type: "single",
        options: ["a, b, c, and d", "a and b", "b and c", "a, b, c"],
        correct: [0],
        explanation:
            "Extending a table allows reusing fields (with or without label changes), inheriting logic, and copying parent records.",
    },
    {
        question: "Why build a custom app?",
        type: "single",
        options: [
            "To meet specific use cases for internal processes.",
            "To avoid using code repositories like GitHub or GitLab.",
            "To create custom integrations with third-party systems.",
            "To replace ServiceNow base tables.",
        ],
        correct: [0],
        explanation: "Custom apps are built to address specific internal process use cases.",
    },
    {
        question:
            "When selecting the data type for a field displayed on a form, which of the following statements is incorrect?",
        type: "single",
        options: [
            "Use the Choice data type to restrict the field’s options.",
            "Use the Date data type to enter dates and times.",
            "Use the Phone Number data type to automate validation of phone number data.",
            "Use the String data type for free-form text fields.",
        ],
        correct: [1],
        explanation:
            "The Date data type is for dates only; Date/Time is used for both dates and times.",
    },
    {
        question: "Which of the following is true about the Application Picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope are displayed in the Application Picker.",
            "All ServiceNow applications, including baseline applications like Incident, are displayed in the Application Picker.",
            "Only custom applications are displayed in the Application Picker.",
            "Only downloaded applications are displayed in the Application Picker.",
        ],
        correct: [0],
        explanation:
            "The Application Picker shows all custom application scopes and the global scope.",
    },
    {
        question:
            "Which of the following is true about the Application Picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the Application Picker does not set the application scope.",
            "Selecting Global in the Application Picker sets the application scope to Incident.",
            "Global is a reserved application that does not appear in the Application Picker.",
            "Selecting an application from the Application Picker sets the application scope.",
        ],
        correct: [3],
        explanation:
            "Selecting an application in the Application Picker sets the current application scope.",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "Three: one for the application’s user modules, one for the application’s admin modules, and one for ServiceNow admin modules.",
            "As many as needed for the application’s design.",
            "Two: one for the application’s user modules and one for the application’s admin modules.",
            "One, which is used for all application modules.",
        ],
        correct: [1],
        explanation: "An application can have as many menus as needed for its design.",
    },
    {
        question:
            "When creating a new application file in a scoped application, which of the following has cross-scope access enabled by default?",
        type: "single",
        options: ["REST Message", "Table", "Script Include", "Workflow"],
        correct: [1],
        explanation: "Tables have cross-scope access enabled by default in scoped applications.",
    },
    {
        question: "Which server-side API debugging log method can be used in a scoped application?",
        type: "single",
        options: ["gs.print()", "gs.log()", "gs.debuglog()", "gs.info()"],
        correct: [3],
        explanation: "gs.info() is the recommended debugging log method for scoped applications.",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "It may inherit the parent’s fields.",
            "It automatically updates the application scope.",
            "It does not inherit the parent’s fields.",
            "It inherits the parent’s fields.",
        ],
        correct: [3],
        explanation: "A table that extends another inherits all the parent’s fields.",
    },
    {
        question:
            "Which of the following is the fastest way to create and configure a Record Producer?",
        type: "single",
        options: [
            "Create a catalog category, open the category, and select the [Add New Record Producer] button.",
            "Use the Record Producer module to manually add and configure all variables.",
            "Open the table’s record in the table, and select the [Add to Service Catalog] related link.",
            "Open the table’s form, right-click the form header, and select the [Create Record Producer] menu item.",
        ],
        correct: [2],
        explanation:
            "The [Add to Service Catalog] related link is the fastest way to create a Record Producer.",
    },
    {
        question:
            "Which of the following applies to a Script Include with a protection policy value of Protected?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the Script Include.",
            "The protection policy option can only be enabled by users with the admin role.",
            "The protection policy is applied only if the glide.app.apply_protection system property is set to true.",
            "The protection policy is applied only if the application was downloaded from the ServiceNow App Store.",
        ],
        correct: [3],
        explanation:
            "Protected Script Includes are restricted for apps downloaded from the ServiceNow App Store.",
    },
    {
        question: "Which of the following features are available in Studio?",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branches",
            "Merge branches",
            "Push and update set",
        ],
        correct: [1, 2],
        explanation:
            "Studio supports searching and merging branches for source control management.",
    },
    {
        question: "How does ServiceNow match inbound emails to existing records?",
        type: "single",
        options: ["Watermark", "Record link", "Subject", "sys_id"],
        correct: [0],
        explanation: "ServiceNow uses watermarks in emails to match them to existing records.",
    },
    {
        question: "Which of the following objects cannot be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation: "The 'previous' object is not available in Script Action scripts.",
    },
    {
        question: "How can an application link to a repository behind a firewall?",
        type: "single",
        options: [
            "This option is not supported.",
            "Link the application to source control through a MID Server.",
            "Link the application to source control through an access token.",
            "Link the application to source control using multi-factor authentication.",
        ],
        correct: [1],
        explanation: "A MID Server is used to link to a repository behind a firewall.",
    },
    {
        question: "Which of the following features are available in the global application?",
        type: "multiple",
        options: [
            "Source control",
            "Delegated development",
            "Automated Test Framework",
            "Flow Designer",
        ],
        correct: [2, 3],
        explanation: "The global application supports Automated Test Framework and Flow Designer.",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or a separate tab or window.",
            "A group of menus or pages providing related information and functionality to end users.",
            "A method for users to quickly access information or services by filtering items in the Application Navigator.",
            "A web-based method for providing software to end users.",
        ],
        correct: [0],
        explanation:
            "A module is a specific function within an application menu, such as opening a page.",
    },
    {
        question: "Which of the following cannot be debugged using Field Watcher?",
        type: "single",
        options: ["Business Rule", "Script Include", "Client Script", "Access Control"],
        correct: [1],
        explanation:
            "Field Watcher cannot debug Script Includes, as it focuses on field-level changes.",
    },
    {
        question: "The graphical view of relationships between tables is a <blank>.",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation: "A Schema Map provides a graphical view of table relationships.",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should Application Access be configured?",
        type: "single",
        options: [
            "Instead of using Application Access, create an access control to prevent all other application scopes from creating configuration records in the application’s data table.",
            "Set the [Accessible from] field value to [All application scopes] and uncheck the [Can create] option.",
            "Set the [Accessible from] field value to [This application scope only] and uncheck the [Allow access to this table via web services] option.",
            "Set the [Accessible from] field value to [This application scope only].",
        ],
        correct: [3],
        explanation:
            "Setting [Accessible from] to [This application scope only] restricts access to the current scope.",
    },
    {
        question:
            "Access control debug information identifies whether each access control element grants or denies access. In what order are access control elements evaluated?",
        type: "single",
        options: [
            "Condition, Role, Script",
            "Condition, Script, Role",
            "Role, Condition, Script",
            "Script, Condition, Role",
        ],
        correct: [2],
        explanation: "Access controls are evaluated in the order: Role, Condition, Script.",
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
            "The com.glide.sn-guided-app-creator plugin enables the Guided Application Creator.",
    },
    {
        question: "Which class is not part of the client-side scoped API?",
        type: "single",
        options: ["GlideDialogWindow", "GlideAjax", "GlideRecord", "GlideForm"],
        correct: [2],
        explanation: "GlideRecord is a server-side API, not part of the client-side scoped API.",
    },
    {
        question:
            "As part of an application development plan, what should be considered when documenting as part of the business process?",
        type: "single",
        options: [
            "Business problem, data input/output, users/stakeholders, and process steps",
            "Business problem, data input/output, project schedule, and process steps",
            "Business problem, data input/output, users/stakeholders, and database capacity",
            "Business problem, users/stakeholders, available licenses, and database capacity",
        ],
        correct: [0],
        explanation:
            "Business process documentation should include the problem, data, users/stakeholders, and steps.",
    },
    {
        question:
            "From the list below, identify one reason an application might not be suitable for ServiceNow.",
        type: "single",
        options: [
            "Requires workflows to manage processes.",
            "Must use low-level programming libraries 'as is.'",
            "Requires reporting capabilities.",
            "Extensively uses forms to manipulate data.",
        ],
        correct: [1],
        explanation:
            "Using low-level programming libraries 'as is' is not suitable for ServiceNow’s platform.",
    },
    {
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "Forms and form fields",
            "Access to playbooks",
            "Database and backend",
            "User access",
        ],
        correct: [0],
        explanation: "Client-side scripts manage forms and form fields in the user interface.",
    },
    {
        question: "Which action can be performed in a Business Rule without using a script?",
        type: "single",
        options: [
            "Set field values and query the database.",
            "Set field values and generate an event.",
            "Set field values and write to the system log.",
            "Set field values and add a message.",
        ],
        correct: [1],
        explanation: "Business Rules can set field values and generate events without scripting.",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "Transform Maps define field relationships between Import Set and ServiceNow tables.",
    },
    {
        question: "Which of the following is true about deleting a field from a table?",
        type: "single",
        options: [
            "Any field in the table can be deleted.",
            "User-defined, non-inherited fields can be deleted.",
            "Inherited fields can be deleted.",
            "When a field is deleted, the table’s records are deleted.",
        ],
        correct: [1],
        explanation: "Only user-defined, non-inherited fields can be deleted from a table.",
    },
    {
        question: "Identify the characteristics of a Record Producer.",
        type: "multiple",
        options: [
            "The user interface can include graphics.",
            "All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
            "The behavior of fields in the user interface can be scripted.",
            "It must be scripted.",
            "Each field prompts the user with a question rather than a field label.",
        ],
        correct: [0, 2, 4],
        explanation:
            "Record Producers can include graphics, script field behavior, and use questions instead of labels.",
    },
    {
        question:
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation: "gs.getProperty() is used to retrieve application property values.",
    },
    {
        question:
            "What syntax is used in a Record Producer script to access a value from a Record Producer form field?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variable_name",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "producer.variable_name is the syntax to access Record Producer form field values.",
    },
    {
        question:
            "a. Replace outdated and inappropriate custom business applications and processes. b. Extend service delivery and management to all enterprise departments. c. Allow users full access to all ServiceNow tables, records, and fields. d. Extend the value of ServiceNow.",
        type: "single",
        options: ["a, b, c", "a, b, c, d", "b, c, d", "a, b, d"],
        correct: [3],
        explanation:
            "ServiceNow’s value is extended by replacing outdated apps, extending services, and enhancing platform use, but not by granting full access.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "The application properties page is the appropriate landing page for the application.",
            "Application properties allow developers to override application properties inherited from ServiceNow.",
            "Application users know to navigate to the [Application Properties] page to change the application’s appearance.",
            "Application properties allow developers or administrators to change the application’s behavior without modifying application artifacts.",
        ],
        correct: [3],
        explanation: "Application properties enable behavior changes without altering artifacts.",
    },
    {
        question:
            "When using the Guided Application Creator to create an application, which of the following is not an option for creating a table?",
        type: "single",
        options: [
            "Upload a spreadsheet",
            "Create a table from a template",
            "Extend a table",
            "Create a table from scratch",
        ],
        correct: [1],
        explanation:
            "Creating a table from a template is not an option in Guided Application Creator.",
    },
    {
        question:
            "When configuring an access control without conditions or scripts, which of the following statements is incorrect?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record.",
            "table.None denies access to all records in the table.",
            "table.field grants access to a specific field in a record.",
            "table.id grants access to a specific record in the table.",
        ],
        correct: [3],
        explanation: "table.id is not a valid syntax for granting access to a specific record.",
    },
    {
        question: "Which of the following is not a UI Action type?",
        type: "single",
        options: ["List Choice", "Form Button", "List Banner Button", "Form Choice"],
        correct: [3],
        explanation: "Form Choice is not a valid UI Action type.",
    },
    {
        question: "When configuring a REST message, the endpoint is:",
        type: "single",
        options: [
            "A command to the REST script to stop execution.",
            "The URI of the data to be accessed, queried, or modified.",
            "Information about the format of the returned data.",
            "A response from the provider indicating no data to return.",
        ],
        correct: [1],
        explanation: "The endpoint is the URI of the data to be accessed or modified.",
    },
    {
        question: "Which of the following client-side scripts apply to a Record Producer?",
        type: "single",
        options: [
            "Catalog Client Script and Catalog UI Policy",
            "UI Script and UI Action",
            "UI Script and Record Producer Script",
            "Client Script and UI Policy",
        ],
        correct: [0],
        explanation: "Catalog Client Scripts and Catalog UI Policies apply to Record Producers.",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application, follow these steps:",
        type: "single",
        options: [
            "Enter the application name in the global search field.",
            "Open the list of update sets for the instance.",
            "Examine the application files related list for the application to be published.",
            "Open each artifact record individually and check the value of the [Application] field.",
        ],
        correct: [2],
        explanation:
            "To review application artifacts, examine the application files related list for the published application, as it contains the relevant scripts, reports, and other artifacts. Reference: ServiceNow Application Publishing Documentation",
    },
    {
        question: "What is the Event Registry?",
        type: "single",
        options: [
            "A table containing records of all events recognized by the ServiceNow system, enabling ServiceNow to react when events are generated.",
            "A workflow triggered each time an event is generated, used for debugging events.",
            "A method used in server-side scripts to generate events and pass parameters.",
            "An event log listing all generated events.",
        ],
        correct: [0],
        explanation:
            "The Event Registry is a table that stores records of all recognized events, allowing ServiceNow to respond to event triggers. Reference: ServiceNow Event Management Documentation",
    },
    {
        question:
            "Which of the following steps can be used to import new data from a spreadsheet into ServiceNow?",
        type: "single",
        options: [
            "Select data source, schedule transformation.",
            "Load data, create transformation map, run the most-voted transformation.",
            "Define data source, select transformation map, run transformation.",
            "Select import set, select transformation map, run transformation.",
        ],
        correct: [1],
        explanation:
            "To import data from a spreadsheet, load the data, create a transformation map, and run the transformation to map and import the data correctly. Reference: ServiceNow Data Import Documentation",
    },
    {
        question: "Why build a custom app?",
        type: "multiple",
        options: [
            "To address specific use cases for internal processes.",
            "To avoid using code repositories like GitHub or GitLab.",
            "To create custom integrations with third-party systems.",
            "To replace ServiceNow base tables.",
        ],
        correct: [0, 2],
        explanation:
            "Custom apps are built to address specific internal process needs and to create tailored integrations with third-party systems. Reference: ServiceNow Custom Application Development Documentation",
    },
    {
        question:
            "As part of the application development plan, it is recommended to define the business requirements and processes managed by the application. What should be considered when documenting as part of the business process?",
        type: "single",
        options: [
            "Business problem, data input/output, users/stakeholders, and process steps.",
            "Business problem, data input/output, project schedule, and process steps.",
            "Business problem, data input/output, users/stakeholders, and database capacity.",
            "Business problem, users/stakeholders, available licenses, and database capacity.",
        ],
        correct: [0],
        explanation:
            "Documenting a business process involves identifying the business problem, data input/output, users/stakeholders, and process steps to ensure clarity and alignment. Reference: ServiceNow Application Development Best Practices",
    },
    {
        question:
            "Which of the following features can be used in a global application? (Select two.)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer",
        ],
        correct: [0, 3],
        explanation:
            "Global applications can utilize the Automated Test Framework and Flow Designer for testing and workflow automation, respectively. Reference: ServiceNow Global Application Features",
    },
    {
        question:
            "When a ServiceNow instance requests information from a web service, ServiceNow is the:",
        type: "single",
        options: ["Publisher", "Specialist", "Provider", "Consumer"],
        correct: [3],
        explanation:
            "ServiceNow acts as a consumer when requesting information from a web service, as it is the entity consuming the service. Reference: ServiceNow Web Services Documentation",
    },
    {
        question:
            "What is the benefit of storing the majority of an application’s server-side script logic in Script Includes?",
        type: "multiple",
        options: [
            "It executes faster.",
            "It executes only when called from a script.",
            "When installing an application from the ServiceNow Store, the script logic can be hidden.",
            "Changes to some application logic require editing in only one place.",
        ],
        correct: [1, 2, 3],
        explanation:
            "Storing logic in Script Includes allows execution only when called, hides logic in Store apps, and centralizes edits for easier maintenance. Reference: ServiceNow Script Includes Best Practices",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "A Transform Map defines the field mappings between an Import Set table and a ServiceNow table for data import. Reference: ServiceNow Transform Map Documentation",
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
            "g_user.hasRoleExactly('catalog_admin') returns true only if the user has exactly the catalog_admin role and no others. Reference: ServiceNow GlideUser API Documentation",
    },
    {
        question: "Which of the following objects cannot be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation:
            "The 'previous' object is not available in Script Action scripts, as they are event-driven and do not track record changes like business rules. Reference: ServiceNow Script Action Documentation",
    },
    {
        question: "Which of the following extend the value of ServiceNow?",
        type: "multiple",
        options: [
            "Replace outdated and inappropriate custom business applications and processes.",
            "Extend service delivery and management to all enterprise departments.",
            "Allow users full access to all ServiceNow tables, records, and fields.",
            "Extend the value of ServiceNow.",
        ],
        correct: [0, 1, 3],
        explanation:
            "Replacing outdated apps, extending services to departments, and enhancing ServiceNow’s value are key benefits. Full access to tables is not a goal. Reference: ServiceNow Platform Benefits",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community.",
            "A marketplace for free and paid certified ServiceNow applications and integrations.",
            "Downloadable content ServiceNow script archive.",
            "An alternate name for the ServiceNow Developer Share site.",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a marketplace for certified applications and integrations, both free and paid. Reference: ServiceNow Store Documentation",
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
            "gs.hasRole('admin') returns true if the user has the admin role, including inherited roles. Reference: ServiceNow GlideSystem API Documentation",
    },
    {
        question: "A module requires a link type. Which of the following are link types?",
        type: "single",
        options: [
            "Record, Separator, Catalog Type, Roles List",
            "Assessment, Record List, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from Arguments:)",
            "Assessment, List of Records, Content Page, Roles",
        ],
        correct: [1],
        explanation:
            "Link types for modules include Assessment, Record List, Separator, and Timeline Page, defining the module’s behavior. Reference: ServiceNow Module Configuration Documentation",
    },
    {
        question:
            "Which ATF test step allows creating a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create User", "Create Role", "Create Group", "Impersonation"],
        correct: [0],
        explanation:
            "The 'Create User' ATF test step allows creating a user with specified roles and groups for testing purposes. Reference: ServiceNow Automated Test Framework Documentation",
    },
    {
        question:
            "Which business requirements and processes should be documented as part of the application development plan? (Select four.)",
        type: "multiple",
        options: [
            "Data input/output",
            "Business problem",
            "Project schedule",
            "Process steps",
            "Database capacity",
            "Users/stakeholders",
            "Available licenses",
        ],
        correct: [0, 1, 3, 5],
        explanation:
            "Documenting data input/output, business problem, process steps, and users/stakeholders ensures a comprehensive development plan. Reference: ServiceNow Application Development Best Practices",
    },
    {
        question:
            "To prevent other private application scopes from creating configuration records in an application’s data tables, how should application access be configured?",
        type: "single",
        options: [
            "Instead of using application access, create access controls to prevent other application scopes from creating configuration records in the application’s data tables.",
            "Set the [Accessible from] field value to [All application scopes] and deselect the [Can create] option.",
            "Set the [Accessible from] field value to [This application scope only] and deselect the [Allow access to this table via web services] option.",
            "Set the [Accessible from] field value to [This application scope only].",
        ],
        correct: [3],
        explanation:
            "Setting [Accessible from] to [This application scope only] restricts access to the application’s scope, preventing other scopes from creating records. Reference: ServiceNow Application Access Documentation",
    },
    {
        question:
            "In an email notification, which of the following does not apply to the Weight field?",
        type: "single",
        options: [
            "Only the notification with the highest weight for the same record and recipient is sent.",
            "A weight value of zero means the email will not be sent.",
            "The default weight value is zero.",
            "A weight value of zero means the notification is always sent when the notification’s conditions are met.",
        ],
        correct: [1],
        explanation:
            "A weight value of zero does not prevent sending; it means the notification is sent if conditions are met. Reference: ServiceNow Email Notification Documentation",
    },
    {
        question:
            "Which of the following methods is not used to log messages in server-side scripts for a private scope application?",
        type: "single",
        options: ["gs.log()", "gs.error()", "gs.warn()", "gs.debug()"],
        correct: [0],
        explanation:
            "gs.log() is not used in private scope applications; gs.error(), gs.warn(), and gs.debug() are used for logging. Reference: ServiceNow Logging API Documentation",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "The application properties page serves as the appropriate landing page for the application.",
            "Application properties allow developers to override application properties inherited from ServiceNow.",
            "Application users know to navigate to the application properties page to change the application’s appearance.",
            "Application properties allow developers or administrators to modify application behavior without changing application artifacts.",
        ],
        correct: [3],
        explanation:
            "Application properties enable behavior modification without altering artifacts, providing flexibility. Reference: ServiceNow Application Properties Documentation",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control? (Select two.)",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles grant access to source control operations like importing or linking applications. Reference: ServiceNow Source Control Documentation",
    },
    {
        question: "Which of the following is true regarding application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope.",
            "Applications downloaded from third-party ServiceNow application developers cannot cause name conflicts.",
            "All developers can edit any application.",
            "Developers can choose the namespace prefix for the scope.",
        ],
        correct: [1],
        explanation:
            "Third-party apps are scoped to prevent name conflicts, ensuring unique namespaces. Reference: ServiceNow Application Scope Documentation",
    },
    {
        question:
            "Which of the following GlideRecord methods execute a query against a database table? (Select three.)",
        type: "multiple",
        options: ["_query()", "runQuery()", "query()", "_get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "_query(), query(), and get() are GlideRecord methods that execute database queries. Reference: ServiceNow GlideRecord API Documentation",
    },
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
        question: "Which features are available in Studio? (Select two.)",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branches",
            "Merge branches",
            "Push and update set",
        ],
        correct: [0, 1],
        explanation:
            "Studio supports pushing to external source control and searching branches for development tasks. Reference: ServiceNow Studio Documentation",
    },
    {
        question: "Which of the following client-side scripts apply to a record producer?",
        type: "single",
        options: [
            "Catalog Client Scripts and Catalog UI Policies",
            "UI Scripts and UI Actions",
            "UI Scripts and Record Producer Scripts",
            "Client Scripts and UI Policies",
        ],
        correct: [0],
        explanation:
            "Catalog Client Scripts and Catalog UI Policies are used for client-side scripting in record producers. Reference: ServiceNow Record Producer Documentation",
    },
    {
        question:
            "Assume a table named 'table' exists with three fields: field1, field2, and field3. Reviewing the table’s access control list: which fields can a user with the itil role read?",
        type: "single",
        options: ["field3 only", "field1 and field3", "All fields", "All fields except field3"],
        correct: [3],
        explanation:
            "The itil role can read all fields except field3, based on the access control list configuration. Reference: ServiceNow Access Control Documentation",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "Three: one for application user modules, one for application admin modules, and one for ServiceNow admin modules.",
            "As many as required by the application’s design.",
            "Two: one for application user modules and one for application admin modules.",
            "One, used for all application modules.",
        ],
        correct: [1],
        explanation:
            "An application can have as many menus as needed, based on its design requirements. Reference: ServiceNow Application Menu Documentation",
    },
    {
        question:
            "What is required to link a ServiceNow application to a Git repository? (Select three.)",
        type: "multiple",
        options: ["URI", "ACL", "Username", "URL", "Application name", "Password"],
        correct: [2, 3, 5],
        explanation:
            "To link a ServiceNow application to a Git repository, you need the username, URL, and password of the Git account. Reference: ServiceNow Source Control Documentation",
    },
    {
        question: "Which of the following is not a purpose of application scope?",
        type: "single",
        options: [
            "Provides relationships between application artifacts.",
            "Provides a way to track the user who developed the application.",
            "Provides a namespace (prefix and scope name) to prevent name collisions between applications.",
            "Controls how scripts from another scope can modify a scoped application’s tables.",
        ],
        correct: [1],
        explanation:
            "Application scope does not track the developer; it manages artifacts, namespaces, and access control. Reference: ServiceNow Application Scope Documentation",
    },
    {
        question: "Which of the following is true about the Application Picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope appear in the Application Picker.",
            "All ServiceNow applications, including baseline applications like Incident, appear in the Application Picker.",
            "Only custom applications appear in the Application Picker.",
            "Only downloaded applications appear in the Application Picker.",
        ],
        correct: [0],
        explanation:
            "The Application Picker shows all custom application scopes and the global scope for scope selection. Reference: ServiceNow Application Picker Documentation",
    },
    {
        question: "How does ServiceNow match incoming emails to existing records?",
        type: "single",
        options: ["Watermark", "Record Link", "Subject", "sys_id"],
        correct: [0],
        explanation:
            "ServiceNow uses watermarks in emails to match them to existing records. Reference: ServiceNow Email Handling Documentation",
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
    {
        question: "Which of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "The GlideUser object (g_user) is part of the client-side scripting API for user-related operations. Reference: ServiceNow Client-Side API Documentation",
    },
    {
        question: "Which of the following are true about ServiceNow reports? (Select three.)",
        type: "multiple",
        options: [
            "All users can view shared reports.",
            "They can graphically represent data.",
            "All users can generate reports on any table.",
            "Authorized users can run them on demand.",
            "They can be scheduled to run and distributed via email.",
        ],
        correct: [1, 3, 4],
        explanation:
            "Reports can graphically represent data, be run on demand by authorized users, and be scheduled for email distribution. Reference: ServiceNow Reporting Documentation",
    },
    {
        question:
            "When selecting the data type for fields displayed on a form, which of the following statements is incorrect?",
        type: "single",
        options: [
            "Use the Choice data type to limit field options.",
            "Use a data type for entering dates and times.",
            "Use the Phone Number data type to automate validation of phone number data.",
            "Use the String data type for free-form text fields.",
        ],
        correct: [2],
        explanation:
            "There is no specific Phone Number data type in ServiceNow for automatic validation; validation is typically scripted. Reference: ServiceNow Field Data Types Documentation",
    },
    {
        question:
            "When creating a client script to provide feedback for a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [1],
        explanation:
            "g_form.showFieldMsg() is used to display feedback messages for a specific field in a client script. Reference: ServiceNow GlideForm API Documentation",
    },
    {
        question:
            "Which of the following is true about this script snippet? g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "The method returns true if the currently logged-in user has the x_my_app_user role or the admin role.",
            "The method returns false only if the currently logged-in user has the x_my_app_user role.",
            "There is no g_user.hasRole() method.",
            "The method returns true only if the currently logged-in user has the x_my_app_user role.",
        ],
        correct: [0],
        explanation:
            "g_user.hasRole('x_my_app_user') returns true if the user has the x_my_app_user role or admin role, as admin inherits all roles. Reference: ServiceNow GlideUser API Documentation",
    },
    {
        question: "Identify the incorrect statement about delegated development in ServiceNow.",
        type: "single",
        options: [
            "Administrators can grant non-admin users the ability to develop global applications.",
            "Administrators can specify the types of application files developers can access.",
            "Administrators can allow developers access to script fields.",
            "Administrators can allow developers access to security records.",
        ],
        correct: [0],
        explanation:
            "Non-admin users cannot be granted access to develop global applications; delegated development is scope-specific. Reference: ServiceNow Delegated Development Documentation",
    },
    {
        question:
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [0],
        explanation:
            "gs.getProperty() retrieves the value of an application property in server-side scripts. Reference: ServiceNow GlideSystem API Documentation",
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
            "gs.getUserID() returns the sys_id of the currently logged-in user in a business rule. Reference: ServiceNow GlideSystem API Documentation",
    },
    {
        question: "What is a workflow context?",
        type: "single",
        options: [
            "A workflow that is checked out and being edited.",
            "Generated from a workflow version, executes activities, and follows transitions.",
            "A workflow with conditions like 'active is true' added to the table where it is defined.",
            "The business reason or process for which the workflow was designed.",
        ],
        correct: [1],
        explanation:
            "A workflow context is an instance of a workflow version that executes activities and follows transitions. Reference: ServiceNow Workflow Documentation",
    },
    {
        question: "Which of the following does not apply to a module?",
        type: "single",
        options: [
            "Access to a module is controlled by roles.",
            "A module opens a content page.",
            "All modules must be associated with a table.",
            "All modules must be part of an application menu.",
        ],
        correct: [2],
        explanation:
            "Modules are not required to be associated with a table; they can link to various content types. Reference: ServiceNow Module Configuration Documentation",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference properties of the event that triggers the notification?",
        type: "single",
        options: [
            "${event.<property_name>}",
            "${current.<property_name>}",
            "${<property_name>.getDisplayValue()}",
            "${gs.<property_name>}",
        ],
        correct: [0],
        explanation:
            "${event.<property_name>} is used to reference event properties in email notifications. Reference: ServiceNow Email Notification Documentation",
    },
    {
        question:
            "When the [Create Module] field is selected while creating a table, what is the default behavior of the new module?",
        type: "single",
        options: [
            "Opens an empty form to allow creating a new record.",
            "Opens a link to a Wiki article explaining how to customize the new module’s behavior.",
            "Displays the application’s empty homepage.",
            "Displays a list of all records in the table.",
        ],
        correct: [3],
        explanation:
            "The default behavior of a new module is to display a list of all records in the table. Reference: ServiceNow Table Module Documentation",
    },
    {
        question:
            "When configuring an access control without conditions or scripts, which of the following statements is incorrect?",
        type: "single",
        options: [
            "table.* allows access to all fields in a record.",
            "table.None denies access to all records in the table.",
            "table.field allows access to a specific field in a record.",
            "table.id allows access to a specific record in the table.",
        ],
        correct: [3],
        explanation:
            "table.id is not a valid access control syntax for specifying a single record. Reference: ServiceNow Access Control Documentation",
    },
    {
        question: "What is the best UX format for use with lists and forms?",
        type: "single",
        options: ["Form", "List", "Standard", "Classic"],
        correct: [3],
        explanation:
            "The Classic UX format is optimized for lists and forms in ServiceNow. Reference: ServiceNow UX Documentation",
    },
    {
        question:
            "What record is used to track cross-scope applications or scripts requesting access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted Caller Access Record",
            "Caller Tracking Record",
            "Access Control Level Record",
            "Cross-Scope Access Record",
        ],
        correct: [0],
        explanation:
            "Restricted Caller Access Records track cross-scope access requests. Reference: ServiceNow Cross-Scope Access Documentation",
    },
    {
        question:
            "When debugging email notifications, what should be checked in the user record? (Select two.)",
        type: "multiple",
        options: [
            "The user must not be locked out.",
            "Delegation must be enabled.",
            "Active must be true.",
            "The First Name and Last Name fields must have values.",
            "The Email field must have a valid value.",
        ],
        correct: [2, 4],
        explanation:
            "For email notifications, the user must be active, and the Email field must have a valid value. Reference: ServiceNow Email Notification Debugging Documentation",
    },
    {
        question: "Which of the following cannot be debugged using a field watcher?",
        type: "single",
        options: ["Business Rules", "Script Includes", "Client Scripts", "Access Controls"],
        correct: [3],
        explanation:
            "Field watchers cannot debug access controls, as they focus on field-level changes, not security rules. Reference: ServiceNow Field Watcher Documentation",
    },
    {
        question: "Which of the following are configured in an email notification?",
        type: "multiple",
        options: [
            "Who receives the notification.",
            "What content the notification includes.",
            "When the notification is sent.",
            "How the notification is sent.",
        ],
        correct: [0, 1, 2],
        explanation:
            "Email notifications configure the recipient, content, and timing, but not the delivery method. Reference: ServiceNow Email Notification Documentation",
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
            "Inbound action scripts use the 'current' and 'email' objects to process incoming emails. Reference: ServiceNow Inbound Email Action Documentation",
    },
    {
        question:
            "When an application table is created, the user role is automatically added to table records. What other role is typically included in the application?",
        type: "single",
        options: [
            "Application Manager",
            "Application Fulfiller",
            "Application Super User",
            "Application Admin",
        ],
        correct: [3],
        explanation:
            "The Application Admin role is typically included for managing application table access. Reference: ServiceNow Application Role Documentation",
    },
    {
        question:
            "Access control debugging information identifies whether each access control element grants or denies access. In which order are access control elements evaluated?",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles",
        ],
        correct: [2],
        explanation:
            "Access controls are evaluated in the order of Roles, Conditions, and Script. Reference: ServiceNow Access Control Evaluation Documentation",
    },
    {
        question:
            "Identify the ways an application can respond to an event generated by the gs.eventQueue() method.",
        type: "multiple",
        options: [
            "Script Action",
            "Scheduled Script Execution (Scheduled Job)",
            "UI Policy",
            "Email Notification",
        ],
        correct: [0, 3],
        explanation:
            "Events generated by gs.eventQueue() can trigger Script Actions and Email Notifications. Reference: ServiceNow Event Handling Documentation",
    },
    {
        question:
            "The source control operation used to save local changes to an instance for later application is called a(n):",
        type: "single",
        options: ["Branch", "Tag", "Stash", "Update Set"],
        correct: [0],
        explanation:
            "A Branch is used to save local changes in source control for later application. Reference: ServiceNow Source Control Documentation",
    },
    {
        question:
            "Application developers can specify the ServiceNow page displayed to a user after submitting a new record using a Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            "Write an after Business Rule script for the Record Producer’s table: window.redirect = '<URL>';",
            "Create an application property to store the URL.",
            "Write a script in the Record Producer’s Script field: producer.redirect = '<URL>';",
            "Configure the page in the Module that opens the Record Producer UI.",
        ],
        correct: [2],
        explanation:
            "Application developers can specify the redirect page by writing a script in the Record Producer's Script field using producer.redirect = '<URL>'. Reference: ServiceNow Record Producer Documentation",
    },
    {
        question: "What is the purpose of the",
        type: "single",
        options: [
            "Select the application to run.",
            "Select applications as favorites in the Application Navigator.",
            "Select the application to edit and set the application scope.",
            "Select applications to download and install.",
        ],
        correct: [2],
        explanation:
            "The Application Picker is used to select the application to edit and set the application scope for development. Reference: ServiceNow Application Picker Documentation",
    },
    {
        question:
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application name"],
        correct: [3],
        explanation:
            "The application name is not required to link a ServiceNow application to a Git repository; username, URL, and password are needed. Reference: ServiceNow Source Control Documentation",
    },
    {
        question:
            "For a user to pass an access control, which of the following statements must evaluate to true? (Select three.)",
        type: "multiple",
        options: [
            "Other access controls matching the record evaluate to true.",
            "The conditions configured in the access control must evaluate to true.",
            "The user must be granted access through a business rule.",
            "The user must have one of the roles specified in the [Required Roles] related list.",
            "The script configured in the access control must evaluate to true.",
        ],
        correct: [1, 3, 4],
        explanation:
            "Access control requires true conditions, a required role, and a true script evaluation. Reference: ServiceNow Access Control Documentation",
    },
    {
        question:
            "Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current",
        ],
        correct: [2],
        explanation:
            "Scheduled Script Execution scripts can use GlideSystem and GlideRecord objects. Reference: ServiceNow Scheduled Script Execution Documentation",
    },
    {
        question: "Identify the characteristics of a Record Producer. (Select three.)",
        type: "multiple",
        options: [
            "The user interface can include graphics.",
            "All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
            "The behavior of fields in the user interface can be scripted.",
            "It must be scripted.",
            "Each field prompts the user with a question rather than a field label.",
        ],
        correct: [0, 2, 4],
        explanation:
            "Record Producers can include graphics, script field behavior, and use questions instead of labels. Reference: ServiceNow Record Producer Documentation",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or a separate tab or window.",
            "A group of menus or pages providing related information and functionality to end users.",
            "A way for users to quickly access information or services by filtering items in the Application Navigator.",
            "A web-based method of providing software to end users.",
        ],
        correct: [2],
        explanation:
            "A module filters items in the Application Navigator for quick access to information or services. Reference: ServiceNow Module Documentation",
    },
    {
        question:
            "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variable_name",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "producer.variable_name is used to access form field values in a Record Producer script. Reference: ServiceNow Record Producer Script Documentation",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "It may inherit the parent’s fields.",
            "It automatically updates the application scope.",
            "It does not inherit the parent’s fields.",
            "It inherits the parent’s fields.",
        ],
        correct: [3],
        explanation:
            "A table that extends another inherits all of the parent table’s fields. Reference: ServiceNow Table Extension Documentation",
    },
    {
        question: "Which of the following does not apply to a module?",
        type: "single",
        options: [
            "Access to a module is controlled by roles",
            "A module opens a content page",
            "All modules must be associated with a table",
            "All modules must be part of an application menu",
        ],
        correct: [2],
        explanation:
            "The correct answer is determined based on ServiceNow module characteristics. Reference: ServiceNow Documentation on Modules",
    },
    {
        question: "Which server-side API debugging log method can be used in a scoped application?",
        type: "single",
        options: ["gs.print()", "gs.log()", "gs.debuglog()", "gs.info()"],
        correct: [3],
        explanation:
            "The correct answer is based on ServiceNow scoped application debugging methods. Reference: ServiceNow Documentation on Server-Side APIs",
    },
    {
        question: "When evaluating access controls, ServiceNow searches and evaluates:",
        type: "single",
        options: [
            "Matches for the current table only",
            "Matches for the current field only",
            "From the most specific match to the most general match",
            "From the most general match to the most specific match",
        ],
        correct: [2],
        explanation:
            "Access control evaluation follows ServiceNow’s rule processing logic. Reference: ServiceNow Documentation on Access Controls",
    },
    {
        question: "When debugging email notifications, what should you check in the user record?",
        type: "multiple",
        options: [
            "The user must not be locked out",
            "Delegation must be enabled",
            "Active must be true",
            "The first name and last name fields must have values",
            "The email field must have a valid value",
        ],
        correct: [2, 4],
        explanation:
            "User record settings impact email notifications. Reference: ServiceNow Documentation on Email Notifications",
    },
    {
        question: "Which of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "Client-side APIs are specific to ServiceNow’s scripting environment. Reference: ServiceNow Documentation on Client-Side APIs",
    },
    {
        question:
            "Which of the following is not required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: ["Password", "URL", "Username", "Application name"],
        correct: [3],
        explanation:
            "Git repository linking requires specific credentials. Reference: ServiceNow Documentation on Source Control Integration",
    },
    {
        question: "Which of the following are configured in email notifications?",
        type: "single",
        options: ["a, b, c", "a, b, and d", "b, c, d", "a, c, d"],
        correct: [0],
        explanation:
            "Email notification configuration includes multiple aspects. Reference: ServiceNow Documentation on Email Notifications",
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
            "Source control operations vary by platform. Reference: ServiceNow Documentation on Studio and Git Integration",
    },
    {
        question: "How does ServiceNow match inbound emails to existing records?",
        type: "single",
        options: ["Watermark", "Record link", "Subject", "sys_id"],
        correct: [0],
        explanation:
            "Inbound email processing uses specific identifiers. Reference: ServiceNow Documentation on Inbound Email",
    },
    {
        question: "Which of the following apply to reports in ServiceNow? (Choose three)",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "Data can be represented graphically",
            "All users can generate reports on any table",
            "Authorized users can run them on demand",
            "They can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "Reporting features are defined in ServiceNow. Reference: ServiceNow Documentation on Reporting",
    },
    {
        question: "What is the baseline behavior of a table in a private scope application?",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services",
            "All business rules can read, write, delete, and update from the table",
            "Only artifacts within the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "Private scope table behavior is defined by ServiceNow. Reference: ServiceNow Documentation on Application Scoping",
    },
    {
        question: "Which of the following cannot be debugged using a field watcher?",
        type: "single",
        options: ["Business rules", "Script includes", "Client scripts", "Access controls"],
        correct: [3],
        explanation:
            "Field watcher limitations are outlined in ServiceNow. Reference: ServiceNow Documentation on Debugging",
    },
    {
        question: "Identify characteristics of a record producer",
        type: "multiple",
        options: [
            "It can include graphics in the user interface",
            "All records created using this strategy are inserted into the Requested Item [sc_req_item] table",
            "The behavior of fields in the user interface can be scripted",
            "It must be scripted",
            "Each field prompts the user with a question rather than a field label",
        ],
        correct: [0, 2, 4],
        explanation:
            "Record producer features are specific to ServiceNow. Reference: ServiceNow Documentation on Record Producers",
    },
    {
        question:
            "The Application Access configuration includes an option to 'Allow access to this table via web services.' When this option is selected, which of the following statements is true?",
        type: "single",
        options: [
            "This option restricts the ability to delete records via web services, but records can be read at any time",
            "Users querying via web services must have appropriate permissions to access the table’s records",
            "Even if not selected, users with appropriate permissions can access the table’s records via web services",
            "This option restricts access to SOAP web services only, not REST",
        ],
        correct: [1],
        explanation:
            "Web service access is governed by permissions. Reference: ServiceNow Documentation on Application Access",
    },
    {
        question:
            "Which business requirements and processes should be documented as part of an application development plan?",
        type: "multiple",
        options: [
            "Data input/output",
            "Business problem",
            "Project schedule",
            "Process steps",
            "Database capacity",
            "Users/stakeholders",
            "Available licenses",
        ],
        correct: [0, 1, 3, 5],
        explanation:
            "Application development planning requires specific documentation. Reference: ServiceNow Documentation on Application Development",
    },
    {
        question:
            "What determines the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Data source",
            "Schema map relationship builder",
            "Business service management map",
            "Transform map",
        ],
        correct: [3],
        explanation:
            "Field relationships are managed via transform maps. Reference: ServiceNow Documentation on Import Sets",
    },
    {
        question:
            "What syntax is used in a record producer script to access values from record producer form fields?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current.variable_name",
            "current.field_name",
        ],
        correct: [1],
        explanation:
            "Record producer scripts use specific syntax. Reference: ServiceNow Documentation on Record Producers",
    },
    {
        question: "Which of the following is true about deleting a field from a table?",
        type: "single",
        options: [
            "Any field in the table can be deleted",
            "User-defined non-inherited fields can be detected",
            "Inherited fields can be detected",
            "When a field is detected, table records are deleted",
        ],
        correct: [1],
        explanation:
            "Field deletion behavior is defined in ServiceNow. Reference: ServiceNow Documentation on Table Management",
    },
    {
        question:
            "Which data types are supported for Flow Designer variables to store record data and complex data?",
        type: "multiple",
        options: ["Label data type", "Integer", "Array.Reference", "Choice", "String"],
        correct: [1, 2, 4],
        explanation:
            "Flow Designer supports specific data types. Reference: ServiceNow Documentation on Flow Designer",
    },
    {
        question:
            "Which ATF test step allows you to create a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create user", "Create role", "Create group", "Impersonate"],
        correct: [0],
        explanation:
            "ATF test steps are specific to testing scenarios. Reference: ServiceNow Documentation on Automated Test Framework",
    },
    {
        question:
            "Which of the following does not apply to the weight field in email notifications?",
        type: "single",
        options: [
            "Only the notification with the highest weight for the same record and recipient is sent",
            "A weight value of zero means the email is not sent",
            "The default weight value is zero",
            "A weight value of zero means the notification is always sent when the notification’s sending criteria are met",
        ],
        correct: [1],
        explanation:
            "Email notification weights determine priority. Reference: ServiceNow Documentation on Email Notifications",
    },
    {
        question:
            "Which of the following is true about the application picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the application picker does not set the application scope",
            "Selecting global in the application picker sets the application scope to Incident",
            "Global is a reserved application that does not appear in the application picker",
            "Selecting an application from the application picker sets the application scope",
        ],
        correct: [3],
        explanation:
            "The application picker controls scope. Reference: ServiceNow Documentation on Application Picker",
    },
    {
        question:
            "When working in Form Designer, setting the label of a field on a child table changes the label on which table?",
        type: "single",
        options: ["Base table", "Child table", "Parent table", "All tables"],
        correct: [1],
        explanation:
            "Form Designer label changes are specific to tables. Reference: ServiceNow Documentation on Form Designer",
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
            "Flow Designer has specific limitations. Reference: ServiceNow Documentation on Flow Designer",
    },
    {
        question:
            "When creating a SOAP message, what syntax indicates a variable passed when calling a function?",
        type: "single",
        options: [
            "current.variable_name",
            "${variable_name}",
            "<variable_name>",
            "<variable_name>.do?WSDL",
        ],
        correct: [1],
        explanation:
            "SOAP message syntax is specific to ServiceNow. Reference: ServiceNow Documentation on SOAP Messages",
    },
    {
        question: "Which of the following is true about the application picker?",
        type: "single",
        options: [
            "All custom application scopes and the global scope appear in the application picker",
            "All ServiceNow applications, including baseline applications like Incident, appear in the application picker",
            "Only custom applications appear in the application picker",
            "Only downloaded applications appear in the application picker",
        ],
        correct: [0],
        explanation:
            "The application picker displays specific scopes. Reference: ServiceNow Documentation on Application Picker",
    },
    {
        question: "What is the best UX format for use with lists and forms?",
        type: "single",
        options: ["Form", "List", "Standard", "Classic"],
        correct: [3],
        explanation:
            "UX formats impact user experience. Reference: ServiceNow Documentation on UI Formats",
    },
    {
        question: "What is the REST API Explorer used for?",
        type: "single",
        options: [
            "Practicing interaction with public data providers using REST",
            "Searching for web resources to learn about REST",
            "Converting SOAP message functions to REST methods",
            "Generating sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "REST API Explorer facilitates API development. Reference: ServiceNow Documentation on REST API Explorer",
    },
    {
        question: "Why build a custom app?",
        type: "multiple",
        options: [
            "To address specific use cases for internal processes",
            "To avoid using code repositories like GitHub or GitLab",
            "To create custom integrations with third-party systems",
            "To replace ServiceNow base tables",
        ],
        correct: [0, 2],
        explanation:
            "Custom apps serve specific purposes. Reference: ServiceNow Documentation on Custom Applications",
    },
    {
        question:
            "What are the ways to specify a data table in the Guided Application Creator (GAC)?",
        type: "multiple",
        options: [
            "Upload an existing PDF",
            "Create a new table on the platform",
            "Use an existing table on the platform",
            "Upload an existing spreadsheet",
            "Upload an existing word processing document",
            "Use a freeform database",
        ],
        correct: [0, 1, 3],
        explanation:
            "GAC supports specific table creation methods. Reference: ServiceNow Documentation on Guided Application Creator",
    },
    {
        question:
            "For a user to pass an access control, which of the following statements must evaluate to true?",
        type: "multiple",
        options: [
            "Other access controls matching the record evaluate to true",
            "Conditions set in the access control must evaluate to true",
            "The user must be granted access through a business rule",
            "The user must have one of the roles specified in the [Required roles] related list",
            "The script configured in the access control must evaluate to true",
        ],
        correct: [1, 3, 4],
        explanation:
            "Access control evaluation requires specific conditions. Reference: ServiceNow Documentation on Access Controls",
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
            "GAC table creation options are specific. Reference: ServiceNow Documentation on Guided Application Creator",
    },
    {
        question: "Which of the following applies to the GlideUser (g_user) methods?",
        type: "single",
        options: [
            "They can only be used in client scripts and UI policies",
            "They can only be used in business rules",
            "They can be used in client scripts, UI policies, and UI actions",
            "They can be used in business rules and script includes",
        ],
        correct: [2],
        explanation:
            "GlideUser methods have specific use cases. Reference: ServiceNow Documentation on GlideUser",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business service management map",
            "Data source",
            "Transform map",
            "CI relationship builder",
        ],
        correct: [2],
        explanation:
            "Field relationships are managed via transform maps. Reference: ServiceNow Documentation on Import Sets",
    },
    {
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "Three: one for the application’s user modules, one for the application’s admin modules, and one for ServiceNow admin modules",
            "One, which is used for all application modules",
            "Two: one for the application’s user modules and one for the application’s admin modules",
            "As many as needed for the application’s design",
        ],
        correct: [3],
        explanation:
            "Application menus are flexible in ServiceNow. Reference: ServiceNow Documentation on Application Menus",
    },
    {
        question:
            "Which of the following GlideRecord methods execute a query against a database table?",
        type: "multiple",
        options: ["_query()", "runQuery()", "query()", "_get()", "get()"],
        correct: [0, 2, 4],
        explanation:
            "GlideRecord methods interact with the database. Reference: ServiceNow Documentation on GlideRecord",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should Application Access be configured?",
        type: "single",
        options: [
            "Instead of using Application Access, create access controls to prevent other application scopes from creating configuration records in the application’s data table",
            "Set the [Accessible from] field to [All application scopes] and deselect the [Can create] option",
            "Set the [Accessible from] field to [This application scope only] and deselect the [Allow access to this table via web services] option",
            "Set the [Accessible from] field to [This application scope only]",
        ],
        correct: [3],
        explanation:
            "Application Access controls scope permissions. Reference: ServiceNow Documentation on Application Access",
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
        question: "What is the baseline behavior of a table in a private scope application?",
        type: "single",
        options: [
            "Any business rule can read, write, delete, and update from the table",
            "Only artifacts within the table’s application can read from the table",
            "All application scopes can read from the table",
            "The table and its data cannot be accessed using web services",
        ],
        correct: [2],
        explanation:
            "Private scope table behavior is defined by ServiceNow. Reference: ServiceNow Documentation on Application Scoping",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community",
            "A marketplace for free and paid certified ServiceNow applications and integrations",
            "A downloadable content ServiceNow script archive",
            "An alternate name for the ServiceNow Developer Share site",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a specific platform feature. Reference: ServiceNow Documentation on ServiceNow Store",
    },
    {
        question: "Which object is not accessible to a display business rule?",
        type: "single",
        options: ["previous", "GlideSystem", "g_scratchpad", "current"],
        correct: [0],
        explanation:
            "Display business rules have specific object access. Reference: ServiceNow Documentation on Business Rules",
    },
    {
        question: "What is a module?",
        type: "single",
        options: [
            "A function within an application menu, such as opening a page in the content frame or a separate tab or window",
            "A group of menus or pages providing related information and functionality to end users",
            "A method for users to quickly access information or services by filtering items in the Application Navigator",
            "A web-based method for providing software to end users",
        ],
        correct: [2],
        explanation:
            "Modules are defined components in ServiceNow. Reference: ServiceNow Documentation on Modules",
    },
    {
        question: "The Task table is an example of which of the following?",
        type: "multiple",
        options: ["Legacy class", "Child class", "Base class", "Parent class"],
        correct: [2, 3],
        explanation:
            "The Task table has a specific role in ServiceNow’s table hierarchy. Reference: ServiceNow Documentation on Table Hierarchy",
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
        question:
            "Which of the following applies to a script include with a protection policy value of Protected?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the script include",
            "The protection policy option can only be enabled by users with the admin role",
            "The protection policy only applies if the glide.app.apply_protection system property is true",
            "The protection policy only applies if the application was downloaded from the ServiceNow App Store",
        ],
        correct: [3],
        explanation:
            "Protection policies are specific to app distribution. Reference: ServiceNow Documentation on Script Includes",
    },
    {
        question: "What is an appropriate way to add instructions to a form?",
        type: "single",
        options: [
            "Annotation",
            "Related link to a wiki page",
            "Context menu UI action",
            "Populated read-only field",
        ],
        correct: [0],
        explanation:
            "Form instructions are added via specific methods. Reference: ServiceNow Documentation on Forms",
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
        question:
            "When configuring an access control with no conditions or scripts, which of the following statements is incorrect?",
        type: "single",
        options: [
            "table.* grants access to all fields in a record",
            "table.None does not grant access to any records on the table",
            "table.field grants access to a specific field in a record",
            "table.id grants access to a specific record on the table",
        ],
        correct: [3],
        explanation:
            "Access control syntax is specific. Reference: ServiceNow Documentation on Access Controls",
    },
    {
        question:
            "Application developers use industry-standard JavaScript to configure ServiceNow to…",
        type: "single",
        options: [
            "Enable right-click to edit the application’s context menu in the navigator",
            "Extend and add functionality",
            "Customize the organization’s company logo and banner text",
            "Set the display name for outbound emails",
        ],
        correct: [1],
        explanation:
            "JavaScript is used for customization. Reference: ServiceNow Documentation on Scripting",
    },
    {
        question: "Which of the following is not part of the Form Designer?",
        type: "single",
        options: ["Form layout", "Page header", "Schema map", "Field navigator"],
        correct: [2],
        explanation:
            "Form Designer includes specific components. Reference: ServiceNow Documentation on Form Designer",
    },
    {
        question: "Which features are available in Studio?",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branch",
            "Merge branch",
            "Push and update set",
        ],
        correct: [0, 1],
        explanation:
            "Studio supports specific development features. Reference: ServiceNow Documentation on Studio",
    },
    {
        question:
            "Which of the following is true about this script snippet? g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "The method returns true if the currently logged-in user has the x_my_app_user role or the admin role",
            "The method returns false only if the currently logged-in user has the x_my_app_user role",
            "There is no g_user.hasRole() method",
            "The method returns true only if the currently logged-in user has the x_my_app_user role",
        ],
        correct: [0],
        explanation:
            "The g_user.hasRole() method evaluates roles. Reference: ServiceNow Documentation on GlideUser",
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
        question:
            "What is the benefit of storing the majority of an application’s server-side script logic in a script include?",
        type: "single",
        options: ["a, b, d", "a, b, c, and d", "b, c, d", "a, b, c"],
        correct: [2],
        explanation:
            "Script includes provide specific benefits. Reference: ServiceNow Documentation on Script Includes",
    },
    {
        question: "Which of the following is not a UI action type?",
        type: "single",
        options: ["List choice", "Form button", "List banner button", "Form choice"],
        correct: [0],
        explanation:
            "UI action types are specific to ServiceNow. Reference: ServiceNow Documentation on UI Actions",
    },
    {
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "Forms and form fields",
            "Access to playbooks",
            "Database and backend",
            "User access",
        ],
        correct: [0],
        explanation:
            "Client-side scripts control UI elements. Reference: ServiceNow Documentation on Client-Side Scripting",
    },
    {
        question: "Which of the following is not an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation:
            "Caller Access field options are specific. Reference: ServiceNow Documentation on Table Configuration",
    },
    {
        question: "A graphical view of relationships between tables is a <blank>",
        type: "single",
        options: ["Schema map", "Dependency view", "Graphical user interface", "Map source report"],
        correct: [0],
        explanation:
            "Schema maps visualize table relationships. Reference: ServiceNow Documentation on Schema Maps",
    },
    {
        question: "Which of the following client-side scripts apply to a record producer?",
        type: "single",
        options: [
            "Catalog client scripts and catalog UI policies",
            "UI scripts and UI actions",
            "UI scripts and record producer scripts",
            "Client scripts and UI policies",
        ],
        correct: [0],
        explanation:
            "Record producers use specific client-side scripts. Reference: ServiceNow Documentation on Record Producers",
    },
    {
        question: "Which of the following objects cannot be used in a script action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation:
            "Script actions have specific object access. Reference: ServiceNow Documentation on Script Actions",
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
    {
        question: "What is the event registry?",
        type: "single",
        options: [
            "A table containing records of all events recognized by the ServiceNow system, enabling ServiceNow to react when events are generated",
            "A workflow triggered every time an event is generated, used for debugging events",
            "A method used in server-side scripts to generate events and pass parameters",
            "An event log listing all generated events",
        ],
        correct: [0],
        explanation:
            "The event registry manages system events. Reference: ServiceNow Documentation on Event Management",
    },
    {
        question:
            "Suppose a table named 'table' exists with three fields: field1, field2, and field3. You examine the table’s access control list: table.None read access control for users with admin and itil roles, table.* read access control for users with admin role, table.field3 read access control for users with itil role. Which fields can a user with the itil role read?",
        type: "single",
        options: [
            "field1, field2, and field3",
            "field3 only",
            "field1 and field3",
            "All fields except field3",
        ],
        correct: [1],
        explanation:
            "Access controls determine field access. Reference: ServiceNow Documentation on Access Controls",
    },
    {
        question:
            "Which of the following database operations cannot be controlled by Application Access?",
        type: "single",
        options: ["Update", "Delete", "Create", "Query"],
        correct: [3],
        explanation:
            "Application Access controls specific operations. Reference: ServiceNow Documentation on Application Access",
    },
    {
        question: "What is the purpose of the application picker?",
        type: "single",
        options: [
            "To select the application to execute",
            "To select applications as favorites in the application navigator",
            "To select the application to edit and set the application scope",
            "To select applications to download and install",
        ],
        correct: [2],
        explanation:
            "The application picker sets the scope. Reference: ServiceNow Documentation on Application Picker",
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
            "A specific plugin enables GAC. Reference: ServiceNow Documentation on Guided Application Creator",
    },
    {
        question:
            "When creating a table in a private scope application, which four access controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
        ],
        correct: [1],
        explanation:
            "Default access controls are created for tables. Reference: ServiceNow Documentation on Application Scoping",
    },
    {
        question:
            "Which of the following is a true statement about the Guided Application Creator?",
        type: "single",
        options: [
            "The global scope option is enabled by default",
            "A scoped application user role is automatically created",
            "Default access controls are automatically created",
            "A welcome screen is displayed every time a new application is created",
        ],
        correct: [3],
        explanation:
            "GAC has specific behaviors. Reference: ServiceNow Documentation on Guided Application Creator",
    },
    {
        question:
            "Which of the following returns the sys_id of the currently logged-in user in a Business Rule?",
        type: "single",
        options: [
            "g_form.getUserID()",
            "g_form.getUserSysID()",
            "gs.getUserSysID()",
            "gs.getUserID()",
        ],
        correct: [3],
        explanation:
            "The gs.getUserID() method returns the sys_id of the currently logged-in user in a Business Rule.",
    },
    {
        question: "Reasons for creating an application in ServiceNow:",
        type: "single",
        options: ["a, b, and c", "a, b, c, and d", "b, c, and d", "a, b, and d"],
        correct: [3],
        explanation:
            "Creating an application in ServiceNow is typically to replace outdated custom business applications, extend service delivery to all departments, and extend the value of ServiceNow.",
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
            "The Guided Application Creator does not provide an option to create a table from a template.",
    },
    {
        question: "Identify the incorrect statement regarding delegated development in ServiceNow.",
        type: "single",
        options: [
            "Administrators can grant non-admin users the ability to develop global applications.",
            "Administrators can specify the types of application files developers can access.",
            "Administrators can allow developers access to script fields.",
            "Administrators can allow developers access to security records.",
        ],
        correct: [0],
        explanation:
            "Administrators cannot grant non-admin users the ability to develop global applications, making this statement incorrect.",
    },
    {
        question: "Which of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)",
        ],
        correct: [1],
        explanation:
            "The GlideUser object (g_user) is part of the client-side scripting API in ServiceNow.",
    },
    {
        question: "Which of the following statements is not true about the Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag the section from the [Field Types] tab to the desired location on the form.",
            "To add a field to the form layout, drag the field from the [Fields] tab to the desired location on the form.",
            "To remove a field from the form layout, hover over the field, enable the [Actions] button, and select the [Delete] (X) button.",
            "To create a new field on the form’s table, drag the appropriate data type from the [Field Types] tab to the form and configure the new field.",
        ],
        correct: [0],
        explanation:
            "Adding a section in Form Designer is not done by dragging from the [Field Types] tab, making this statement incorrect.",
    },
    {
        question: "What is the purpose of the Application Picker?",
        type: "single",
        options: [
            "Select the application to execute",
            "Select applications as favorites in the Application Navigator",
            "Select the application to edit and set the application scope",
            "Select applications to download and install",
        ],
        correct: [2],
        explanation:
            "The Application Picker is used to select the application to edit and set the application scope.",
    },
    {
        question:
            "When creating a table in a private scope application, which four access controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update",
        ],
        correct: [1],
        explanation:
            "The four access controls created for a table in a private scope application are Create, Delete, Read, and Write.",
    },
    {
        question: "Which of the following is not true about modules?",
        type: "single",
        options: [
            "Access to modules is controlled by roles",
            "Modules open content pages",
            "All modules must be associated with a table",
            "All modules must be part of an application menu",
        ],
        correct: [2],
        explanation:
            "Not all modules must be associated with a table, making this statement incorrect.",
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
        question: "What is the baseline behavior for tables in a private scope application?",
        type: "single",
        options: [
            "The table and its data cannot be accessed using web services",
            "All business rules can read, write, delete, and update from the table",
            "Only artifacts within the table’s application can read from the table",
            "All application scopes can read from the table",
        ],
        correct: [3],
        explanation:
            "The baseline behavior allows all application scopes to read from tables in a private scope application.",
    },
    {
        question:
            "Which of the following is true for a Script Include with a protection policy value of Protected?",
        type: "single",
        options: [
            "All users with the protected_edit role can view and edit the Script Include",
            "The protection policy option can only be enabled by users with the admin role",
            "The protection policy is only applied when the glide.app.apply_protection system property value is true",
            "The protection policy is only applied when the application is downloaded from the ServiceNow App Store",
        ],
        correct: [3],
        explanation:
            "The protection policy for a Script Include is only applied when the application is downloaded from the ServiceNow App Store.",
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
            "The source control operation used to save local changes to an instance for later application is called a(n) <blank>.",
        type: "single",
        options: ["Branch", "Tag", "Stash", "Update Set"],
        correct: [2],
        explanation:
            "The stash operation saves local changes to an instance for later application.",
    },
    {
        question:
            "Which platform feature can be used to determine the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "CI Relationship Builder",
        ],
        correct: [2],
        explanation:
            "A Transform Map determines the relationship between fields in an Import Set table and an existing ServiceNow table.",
    },
    {
        question: "What is the appropriate way to add instructions to a form?",
        type: "single",
        options: [
            "Annotation",
            "Related link to a wiki page",
            "Context Menu UI Action",
            "Populated read-only field",
        ],
        correct: [0],
        explanation: "Annotations are the appropriate way to add instructions to a form.",
    },
    {
        question: "Which of the following are configured in an email notification?",
        type: "single",
        options: ["a, b, c", "a, b, and d", "b, c, d", "a, c, d"],
        correct: [0],
        explanation:
            "Email notifications configure who receives the notification, what is included, and when it is sent.",
    },
    {
        question:
            "When configuring the content of an email notification, which syntax should be used to reference properties of the event that triggered the notification?",
        type: "single",
        options: [
            "${event.<property_name>}",
            "${current.<property_name>}",
            "${<property_name>.getDisplayValue()}",
            "${gs.<property_name>}",
        ],
        correct: [0],
        explanation:
            "The ${event.<property_name>} syntax is used to reference event properties in email notifications.",
    },
    {
        question:
            "Which source control operation is available from both Studio and a Git repository?",
        type: "single",
        options: [
            "Create a branch",
            "Apply remote changes",
            "Stash local changes",
            "Edit repository configurations",
        ],
        correct: [0],
        explanation: "Creating a branch is available in both Studio and a Git repository.",
    },
    {
        question:
            "Which of the following is true about the Application Picker and application scope?",
        type: "single",
        options: [
            "Selecting an application from the Application Picker does not set the application scope.",
            "Selecting global from the Application Picker sets the application scope to Incident.",
            "Global is a reserved application that does not appear in the Application Picker.",
            "Selecting an application from the Application Picker sets the application scope.",
        ],
        correct: [3],
        explanation:
            "Selecting an application from the Application Picker sets the application scope.",
    },
    {
        question:
            "When creating scripts in a private scope application, which server-side object provides methods for working with dates?",
        type: "single",
        options: ["GlideDateTime", "current", "GlideRecord", "GlideSystem"],
        correct: [0],
        explanation:
            "GlideDateTime provides methods for working with dates in server-side scripts.",
    },
    {
        question:
            "What are the benefits of storing the majority of an application’s server-side script logic in a Script Include?",
        type: "single",
        options: ["a, b, d", "a, b, c, and d", "b, c, d", "a, b, c"],
        correct: [2],
        explanation:
            "Storing script logic in a Script Include allows execution only when called, hides logic in the ServiceNow Store, and centralizes changes.",
    },
    {
        question:
            "When creating an application table, a user role is automatically added to the table records. What other role is typically included with the application?",
        type: "single",
        options: [
            "Application Manager",
            "Application Fulfiller",
            "Application Super User",
            "Application Admin",
        ],
        correct: [3],
        explanation: "The Application Admin role is typically included with an application table.",
    },
    {
        question:
            "Which report types can be created by right-clicking a column header in a table’s list?",
        type: "single",
        options: ["Bar, Pie, Histogram, and Line", "Bar", "Bar, Pie, and Histogram", "Bar and Pie"],
        correct: [3],
        explanation: "Bar and Pie reports can be created by right-clicking a column header.",
    },
    {
        question:
            "What determines the relationship between fields in an Import Set table and fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Data Sources",
            "Schema Map Relationship Builder",
            "Business Service Management Map",
            "Transform Map",
        ],
        correct: [3],
        explanation:
            "A Transform Map determines the field relationships between an Import Set table and an existing ServiceNow table.",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control?",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [0, 2],
        explanation:
            "The source_control and admin roles allow access to source control repository operations.",
    },
    {
        question:
            "Identify how an application can respond to an event generated by the gs.eventQueue() method.",
        type: "single",
        options: ["b and c", "c", "a and d", "a and c"],
        correct: [2],
        explanation:
            "Applications can respond to gs.eventQueue() events via Script Actions and Email Notifications.",
    },
    {
        question:
            "Which of the following is true for a table with the [Can Configure] application access option selected?",
        type: "single",
        options: [
            "Only scripts from applications in the same scope can create business rules for the table",
            "All users with the application’s user role can modify the application’s scripts",
            "Out-of-scope applications can create business rules for the table",
            "Out-of-scope applications can add new tables to the scoped application",
        ],
        correct: [2],
        explanation:
            "The [Can Configure] option allows out-of-scope applications to create business rules for the table.",
    },
    {
        question: "A graphical view of relationships between tables is a <blank>.",
        type: "single",
        options: ["Schema Map", "Dependency View", "Graphical User Interface", "Map Source Report"],
        correct: [0],
        explanation: "A Schema Map provides a graphical view of relationships between tables.",
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
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community",
            "A marketplace for free and paid certified ServiceNow applications and integrations",
            "A downloadable content ServiceNow script archive",
            "An alternate name for the ServiceNow Developer Share site",
        ],
        correct: [1],
        explanation:
            "The ServiceNow Store is a marketplace for certified applications and integrations.",
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
            "The com.glide.sn-guided-app-creator plugin enables the Guided Application Creator.",
    },
    {
        question: "Which of the following is true about application scope?",
        type: "single",
        options: [
            "All applications automatically become part of the global scope",
            "Applications downloaded from third-party ServiceNow application developers cannot cause name conflicts",
            "All developers can edit any application",
            "Developers can choose the namespace prefix for the scope",
        ],
        correct: [1],
        explanation:
            "Third-party applications downloaded from ServiceNow developers are designed to avoid name conflicts.",
    },
    {
        question: "Which of the following are true about ServiceNow reports?",
        type: "multiple",
        options: [
            "All users can view shared reports",
            "They can graphically represent data",
            "All users can generate reports on any table",
            "Authorized users can run them on demand",
            "They can be scheduled to run and distributed via email",
        ],
        correct: [1, 3, 4],
        explanation:
            "ServiceNow reports can graphically represent data, be run on demand by authorized users, and be scheduled for email distribution.",
    },
    {
        question: "Which roles are required to impersonate a user?",
        type: "multiple",
        options: ["System Admin", "Security Admin", "Admin", "Impersonator", "sys_user"],
        correct: [2, 3],
        explanation: "The Admin and Impersonator roles are required to impersonate a user.",
    },
    {
        question: "Reasons for creating an application in ServiceNow:",
        type: "single",
        options: ["a, b, c", "a, b, c, d", "b, c, d", "a, b, d"],
        correct: [3],
        explanation:
            "Applications are created to replace outdated processes, extend service delivery, and enhance ServiceNow’s value.",
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
        question:
            "Which of the following database operations cannot be controlled by Application Access?",
        type: "single",
        options: ["Update", "Delete", "Create", "Query"],
        correct: [3],
        explanation: "Query operations cannot be controlled by Application Access.",
    },
    {
        question:
            "When creating a Utils Script Include, there are basic strategies. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the function",
            "Create a class",
            "Create a prototype object from the new class",
        ],
        correct: [0],
        explanation: "Identifying the table is not a step in creating a Utils Script Include.",
    },
    {
        question:
            "You are developing a MyApp application with a table, Table A. When installing the MyApp application to an instance, records from Table A need to be installed as part of the application. Table A records are installed when:",
        type: "single",
        options: [
            "Table A is active and extends the Task table",
            "Table A records are added to the application record using the [Create Application File] context menu item",
            "Table A has an auto-number counter for new records",
            "Table A is not included in the [System Clone] > [Tables to Exclude] list",
        ],
        correct: [1],
        explanation:
            "Table A records are installed when added to the application record via the [Create Application File] context menu.",
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
        question: "Which of the following is correct?",
        type: "single",
        options: [
            "UI Policy actions are executed before UI Policy scripts",
            "The execution order of UI Policy scripts and actions is determined at runtime",
            "UI Policy scripts are executed before UI Policy actions",
            "UI Policy actions and scripts are executed simultaneously",
        ],
        correct: [0],
        explanation: "UI Policy actions are executed before UI Policy scripts.",
    },
    {
        question:
            "For Application Access, there is a configuration option to [Allow access to this table via web services]. When this option is selected, which of the following statements is true?",
        type: "single",
        options: [
            "This option restricts the ability to delete records via web services but allows reading records at any time",
            "Users running queries via web services must have the appropriate permissions to access the table’s records",
            "Even if not selected, users with appropriate permissions can access table records using web services",
            "This option restricts access to SOAP web services only, not REST",
        ],
        correct: [3],
        explanation: "The option restricts access to SOAP web services only, not REST.",
    },
    {
        question: "What is the best UX format for use with lists and forms?",
        type: "single",
        options: ["Forms", "Lists", "Standard", "Classic"],
        correct: [3],
        explanation: "The Classic UX format is best for lists and forms.",
    },
    {
        question: "What is the Event Registry?",
        type: "single",
        options: [
            "A table containing records of all events recognized by the ServiceNow system, enabling ServiceNow to react when events are generated",
            "A workflow triggered each time an event is generated, used for debugging events",
            "A method used in server-side scripts to generate events and pass parameters",
            "An event log listing all generated events",
        ],
        correct: [0],
        explanation:
            "The Event Registry is a table containing records of all recognized events in ServiceNow.",
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
        question: "When evaluating access controls, ServiceNow searches and evaluates:",
        type: "single",
        options: [
            "Matches on the current table only",
            "Matches on the current field only",
            "From the most specific match to the most generic match",
            "From the most generic match to the most specific match",
        ],
        correct: [2],
        explanation:
            "ServiceNow evaluates access controls from the most specific to the most generic match.",
    },
    {
        question: "What is the name of the string that displays filter conditions?",
        type: "single",
        options: ["Menu", "Selection", "Topic", "Breadcrumb"],
        correct: [3],
        explanation: "The string displaying filter conditions is called a Breadcrumb.",
    },
    {
        question: "As an admin, what do you need to do to access high-security settings features?",
        type: "single",
        options: [
            "Use the System Administration > Elevate Roles module",
            "Add the security_admin role to your user account",
            "Select Elevate Roles",
            "Impersonate a security admin",
        ],
        correct: [2],
        explanation: "Selecting Elevate Roles is required to access high-security settings.",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application, follow these steps:",
        type: "single",
        options: [
            "Enter the application name in the global search field",
            "Open the list of update sets for the instance",
            "Examine the Application Files related list for the application to be published",
            "Open artifact records individually and check the value in the [Application] field",
        ],
        correct: [1],
        explanation:
            "Reviewing update sets for the instance allows inspection of application artifacts.",
    },
    {
        question: "Which statement does not apply when extending an existing table?",
        type: "single",
        options: [
            "Access controls from the parent table are evaluated when determining access to records and fields in the new table",
            "The new table inherits functionality built into the parent table",
            "The new table inherits all fields from the parent table",
            "All required behavior must be scripted and configured",
        ],
        correct: [3],
        explanation:
            "Not all behavior must be scripted when extending a table, as functionality is inherited.",
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
            "Which of the following is not a method to install an application in a ServiceNow instance?",
        type: "single",
        options: [
            "Install an application from the Application Repository",
            "Select the Copy button on the application record",
            "Download and install an application from the ServiceNow Share website",
            "Download and install a third-party application from the ServiceNow Store",
        ],
        correct: [1],
        explanation: "Selecting the Copy button is not a method to install an application.",
    },
    {
        question: "Which of the following objects cannot be used in a Script Action script?",
        type: "single",
        options: ["previous", "GlideRecord", "event", "current"],
        correct: [0],
        explanation: "The previous object is not available in Script Action scripts.",
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
        explanation: "Only user-defined, non-inherited fields can be deleted from a table.",
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
        question: "Which of the following is not an option for the Caller Access field?",
        type: "single",
        options: ["Caller Tracking", "Caller Restriction", "None", "Caller Permission"],
        correct: [3],
        explanation: "Caller Permission is not an option for the Caller Access field.",
    },
    {
        question:
            "Which ATF test step allows creating a user with specified roles and groups for testing?",
        type: "single",
        options: ["Create User", "Create Role", "Create Group", "Impersonation"],
        correct: [0],
        explanation:
            "The Create User test step allows creating a user with specified roles and groups.",
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
            "All custom application scopes and the global scope appear in the Application Picker.",
    },
    {
        question:
            "To prevent all other private application scopes from creating configuration records in an application’s data table, how should Application Access be configured?",
        type: "single",
        options: [
            "Instead of using Application Access, create an access control to prevent other application scopes from creating configuration records in the application’s data table",
            "Set the [Accessible from] field value to [All application scopes] and deselect the [Can create] option",
            "Set the [Accessible from] field value to [This application scope only] and deselect the [Allow access to this table via web services] option",
            "Set the [Accessible from] field value to [This application scope only]",
        ],
        correct: [3],
        explanation:
            "Setting [Accessible from] to [This application scope only] prevents other scopes from creating records.",
    },
    {
        question:
            "Which data types are supported for Flow Designer variables to store record data and complex data?",
        type: "multiple",
        options: ["Label data type", "Integer", "Array.Reference", "Choice", "String"],
        correct: [1, 2, 4],
        explanation:
            "Integer, Array.Reference, and String data types are supported for Flow Designer variables.",
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
        question: "What is the ServiceNow App Repository?",
        type: "single",
        options: [
            "Request Table",
            "Alias for Update Sets",
            "Database containing ServiceNow apps",
            "Collection of files in a Git database",
        ],
        correct: [2],
        explanation: "The ServiceNow App Repository is a database containing ServiceNow apps.",
    },
    {
        question:
            "When creating a client script to provide feedback targeted to a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [1],
        explanation:
            "The g_form.showFieldMsg() method provides feedback targeted to a specific field.",
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
    {
        question: "What is the REST API Explorer used for?",
        type: "single",
        options: [
            "Practice interacting with public data providers using REST",
            "Search for web resources to learn about REST",
            "Convert SOAP message functions to REST methods",
            "Create sample code for sending REST requests to ServiceNow",
        ],
        correct: [3],
        explanation:
            "The REST API Explorer creates sample code for sending REST requests to ServiceNow.",
    },
    {
        question: "Which of the following is not a method in the ServiceNow REST API?",
        type: "single",
        options: ["Copy", "Post", "Get", "Delete"],
        correct: [0],
        explanation: "Copy is not a method in the ServiceNow REST API.",
    },
    {
        question:
            "What is the benefit of creating an application properties page for each application being developed?",
        type: "single",
        options: [
            "The application properties page is the proper landing page for the application",
            "Application properties allow developers to override application properties inherited from ServiceNow",
            "Application users know to navigate to the [Application Properties] page to change the application’s appearance",
            "Application properties allow developers or administrators to change application behavior without modifying application artifacts",
        ],
        correct: [3],
        explanation:
            "Application properties allow changing application behavior without modifying artifacts.",
    },
    {
        question: "Which of the following methods is not part of the ServiceNow REST API?",
        type: "single",
        options: ["Copy", "Post", "Get", "Delete"],
        correct: [1],
        explanation:
            "The ServiceNow REST API includes methods like POST, GET, and DELETE, but COPY is not a valid method. Reference: ServiceNow REST API documentation",
    },
    {
        question: "Which of the following is not a trigger type in Flow Designer?",
        type: "single",
        options: ["Application", "Record", "Schedule", "Outbound Email"],
        correct: [4],
        explanation:
            "Flow Designer supports triggers like Application, Record, and Schedule, but Outbound Email is not a trigger type. Reference: Flow Designer documentation",
    },
    {
        question: "How many application menus does an application have?",
        type: "single",
        options: [
            "3: one for application user modules, one for application admin modules, and one for ServiceNow admin modules",
            "2: one for application user modules and one for application admin modules",
            "1: used for all application modules",
            "As many as needed for the application design",
        ],
        correct: [4],
        explanation:
            "An application can have as many application menus as required by its design. Reference: Application menu configuration in ServiceNow",
    },
    {
        question: "Which of the following statements apply to the Form Designer?",
        type: "single",
        options: ["a, b, c, and d", "b, c, and d", "a, b, and d", "a, b, c"],
        correct: [4],
        explanation:
            "Form Designer allows dragging fields and sections, creating new fields, and removing fields as described in a, b, c, but not d. Reference: Form Designer documentation",
    },
    {
        question:
            "What is the benefit of storing the majority of an application’s server-side script logic in a Script Include?",
        type: "single",
        options: ["a, b, d", "a, b, c, and d", "b, c, d", "a, b, c"],
        correct: [3],
        explanation:
            "Script Includes allow execution on call, hide logic in the ServiceNow Store, and centralize edits (b, c, d). Reference: Script Include best practices",
    },
    {
        question:
            "Which method is used to retrieve the value of an application property in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()",
        ],
        correct: [1],
        explanation:
            "The gs.getProperty() method retrieves application property values in scripts. Reference: GlideSystem API documentation",
    },
    {
        question: "What does a table that extends another table do?",
        type: "single",
        options: [
            "It may inherit the parent’s fields.",
            "It automatically updates the application scope.",
            "It does not inherit the parent’s fields.",
            "It inherits the parent’s fields.",
        ],
        correct: [4],
        explanation:
            "A table extending another inherits all parent fields. Reference: Table extension in ServiceNow",
    },
    {
        question:
            "Which data types are supported for Flow Designer variables to store record data and complex data?",
        type: "multiple",
        options: ["Label data type", "Integer", "Array.Reference", "Choice", "String"],
        correct: [2, 3, 5],
        explanation:
            "Flow Designer supports Integer, Array.Reference, and String for record and complex data. Reference: Flow Designer variable types",
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
        correct: [2],
        explanation:
            "gs.hasRole() and current.isNewRecord() are used in access control scripts. Reference: Access control script methods",
    },
    {
        question:
            "Application developers can specify the ServiceNow page displayed to users after submitting a new record using the Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            'Create a script in a Business Rule after the Record Producer’s table: window.redirect = "<URL>";',
            "Create an application property to store the URL.",
            'Write a script in the [Record Producer Script] field: producer.redirect = "<URL>";',
            "Set the page in the module that opens the Record Producer UI.",
        ],
        correct: [2],
        explanation:
            "An application property is used to store the redirect URL for a Record Producer. Reference: Record Producer redirect configuration",
    },
    {
        question:
            "In a private scope application, which methods are used to log messages in server-side scripts?",
        type: "multiple",
        options: ["gs.debug()", "gs.logError()", "gs.error()", "gs.warn()", "gs.log()"],
        correct: [1, 3],
        explanation:
            "gs.debug() and gs.error() are used for logging in private scope server-side scripts. Reference: Logging in scoped applications",
    },
    {
        question:
            "Access control rules apply to a specific table, such as the Incident table. What is the object name for a rule applied to the entire Incident table (all rows and fields)?",
        type: "single",
        options: ["incident.all", "incident!", "incidentNone", "incident"],
        correct: [4],
        explanation:
            "The object name 'incident' applies to the entire Incident table. Reference: Access control rule naming",
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
        correct: [4],
        explanation:
            "Data Policies enforce field rules like read-only and mandatory. Reference: Data Policy documentation",
    },
    {
        question:
            "When configuring a module, what does the [Override Application Menu Roles Configuration] option do?",
        type: "single",
        options: [
            "Users with the module role but without access to the application menu can access the module.",
            "Self-service users can access the module without a role.",
            "Admins are granted access to the module even if access control would normally prevent it.",
            "Users who can access the application menu can view the module even without the module role.",
        ],
        correct: [1],
        explanation:
            "The override option allows module role holders to access the module without application menu access. Reference: Module configuration",
    },
    {
        question: "Which database operations can be controlled in Application Access?",
        type: "multiple",
        options: ["Update", "Create", "Execute", "Query"],
        correct: [1, 2],
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
        correct: [1],
        explanation:
            "Non-admins cannot develop global applications. Reference: Delegated development documentation",
    },
    {
        question: "Which of the following cannot be debugged using a Field Watcher?",
        type: "single",
        options: ["Business Rules", "Script Includes", "Client Scripts", "Access Controls"],
        correct: [2],
        explanation:
            "Field Watcher cannot debug Script Includes. Reference: Field Watcher documentation",
    },
    {
        question:
            "Which roles allow access to source control repository operations, such as importing an application from source control or linking an application to source control?",
        type: "multiple",
        options: ["source_control", "source_control_admin", "admin", "git_admin"],
        correct: [1, 3],
        explanation:
            "The source_control and admin roles allow source control operations. Reference: Source control roles",
    },
    {
        question: "What happens when an existing table is extended in ServiceNow?",
        type: "single",
        options: [
            "The new table inherits functionality built into the parent table.",
            "The parent table’s access controls are ignored when determining access to the new table’s records and fields.",
            "The new table does not inherit fields from the parent table.",
            "All required behavior must be scripted and configured.",
        ],
        correct: [1],
        explanation:
            "Extended tables inherit parent table functionality. Reference: Table extension documentation",
    },
    {
        question: "When debugging email notifications, what should be checked in the user record?",
        type: "multiple",
        options: [
            "The user must not be locked out.",
            "Delegation must be enabled.",
            "Active must be true.",
            "The First Name and Last Name fields must have values.",
            "The Email field must have a valid value.",
        ],
        correct: [3, 5],
        explanation:
            "Active must be true and the Email field must have a valid value for email notifications. Reference: Email notification debugging",
    },
    {
        question: "What is the REST API Explorer used for?",
        type: "single",
        options: [
            "Practice interacting with public data providers using REST.",
            "Search for web resources to learn about REST.",
            "Convert SOAP message functions to REST methods.",
            "Generate sample code for sending REST requests to ServiceNow.",
        ],
        correct: [4],
        explanation:
            "REST API Explorer generates sample code for ServiceNow REST requests. Reference: REST API Explorer documentation",
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "A source of developer content created by the ServiceNow community.",
            "A marketplace for free and paid certified ServiceNow applications and integrations.",
            "A downloadable content ServiceNow script archive.",
            "An alternate name for the ServiceNow Developer Share site.",
        ],
        correct: [2],
        explanation:
            "The ServiceNow Store is a marketplace for certified applications and integrations. Reference: ServiceNow Store overview",
    },
    {
        question:
            "When creating a client script to provide feedback for a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()",
        ],
        correct: [2],
        explanation:
            "g_form.showFieldMsg() provides feedback for a specific field. Reference: Client script methods",
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
        correct: [2, 5, 6],
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
        correct: [2, 4, 5],
        explanation:
            "Access controls require true conditions, required roles, and true scripts. Reference: Access control evaluation",
    },
    {
        question:
            "As part of the application development plan, it is recommended to define the business requirements and processes that the application will manage. What should be considered when documenting as part of the business process?",
        type: "single",
        options: [
            "Business problems, users/stakeholders, available licenses, and database capacity",
            "Business problems, data input/output, users/stakeholders, and process steps",
            "Business problems, data input/output, project schedule, and process steps",
            "Business problems, data input/output, users/stakeholders, and database capacity",
        ],
        correct: [1],
        explanation:
            "When documenting business processes, you should consider business problems, data input/output, users/stakeholders, and process steps.",
    },
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
        question: "Which server-side API debug log method can be used in scoped applications?",
        type: "single",
        options: ["gs.info()", "gs.log()", "gs.print()", "gs.debuglog()"],
        correct: [0],
        explanation: "In scoped applications, use gs.info() to write debug logs.",
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
        question: "How many application menus can an application have?",
        type: "single",
        options: [
            "3: one for the application's user module, one for the administrator module, and one for the ServiceNow administrator module",
            "1, used for all application modules",
            "2: one for the application's user module and one for the administrator module",
            "As many as needed based on application design",
        ],
        correct: [3],
        explanation: "An application can have as many menus as needed based on its design.",
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
        question: "What do client-side scripts manage?",
        type: "single",
        options: [
            "Database and backend",
            "Access to Playbooks",
            "User access",
            "Forms and form fields",
        ],
        correct: [3],
        explanation: "Client-side scripts manage forms and form fields.",
    },
    {
        question:
            "Which of the following is true about the Application Picker and Application Scope?",
        type: "single",
        options: [
            "Global is a reserved application that does not appear in the application picker",
            "Selecting an application from the Application Picker does not set the application scope",
            "Selecting an application from the Application Picker sets the application scope",
            "Selecting Global in the Application Picker sets the application scope to Incident",
        ],
        correct: [2],
        explanation:
            "Selecting an application from the Application Picker sets the application scope.",
    },
    {
        question:
            "To review scripts, reports, and other application artifacts included in a published application, you should:",
        type: "single",
        options: [
            "Open each artifact record individually and check the value in the Application field",
            "Enter the application's name into the global search field",
            "Review the Application Files related list for the application to be published",
            "Open the list of update sets for the instance",
        ],
        correct: [2],
        explanation: "Review the Application Files related list to check included artifacts.",
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
            "Which of the following features are available for global applications? (Select 2 answers.)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Delegated Development",
            "Source Control",
            "Flow Designer",
        ],
        correct: [0, 3],
        explanation:
            "Automated Test Framework and Flow Designer are available for global applications.",
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
        question:
            "When creating a scoped application that includes flow actions, what is the application called?",
        type: "single",
        options: ["Action", "Spoke", "Flow", "Bundle"],
        correct: [1],
        explanation: "Applications that include flow actions are called Spokes.",
    },
    {
        question: "Which of the following does not apply to modules?",
        type: "single",
        options: [
            "Modules can open content pages",
            "All modules must be associated with a table",
            "All modules must be part of an application menu",
            "Access to modules is controlled by roles",
        ],
        correct: [1],
        explanation: "Not all modules must be associated with a table.",
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
