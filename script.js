// Dữ liệu câu hỏi (141 câu)
const quizData = [
    {
        question: "You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:",
        type: "single",
        options: [
            "Table A is active and extends the Task table",
            "Table A's records are added to the application record using the Create Application Files context menu item",
            "Table A has an automatic number counter for new records",
            "Table A is not included in the System Gone > Exclude Tables list"
        ],
        correct: [1],
        explanation: "Table A's records will be installed as part of the application when they are explicitly added to the application record using the 'Create Application Files' context menu item. This ensures the records are packaged with the app. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_IncludeAppli"
    },
    {
        question: "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
        type: "single",
        options: [
            "Write an after Business Rule script for the Record Producer's table: window.redirect = \"<URL>\";",
            "Create an application property to store the URL",
            "Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";",
            "Configure the page in the Module that opens the Record Producer UI"
        ],
        correct: [2],
        explanation: "Application developers can specify the redirect page by writing a script in the Record Producer's Script field using producer.redirect = \"<URL>\". For example, producer.redirect = \"home.do\"; redirects the user to the homepage. Reference: /bundle record producer data and redirect users"
    },
    {
        question: "What is required to link a ServiceNow application to a Git repository? (Choose 3 answers)",
        type: "multiple",
        options: [
            "URI",
            "ACL",
            "User name",
            "URL",
            "Application name",
            "Password"
        ],
        correct: [2, 3, 5],
        explanation: "To link a ServiceNow application to a Git repository, you need the user name, URL, and password of the Git account. The URL is the repository address, and user name/password are credentials (or a personal access token). Reference: Link an application to source control - ServiceNow Docs"
    },
    {
        question: "What is the ServiceNow App Repository?",
        type: "single",
        options: [
            "A Request table",
            "Another name for update sets",
            "A database containing ServiceNow apps",
            "A collection of files in a Git database"
        ],
        correct: [2],
        explanation: "The ServiceNow App Repository is a central repository for all scoped applications published by ServiceNow customers, enabling upload and distribution with version control. Reference: ServiceNow application repository"
    },
    {
        question: "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
        type: "single",
        options: [
            "The table and its data are not accessible using web services",
            "Any Business Rule can read, write, delete, and update from the table",
            "Only artifacts in the table's application can read from the table",
            "All application scopes can read from the table"
        ],
        correct: [3],
        explanation: "In a privately-scoped application, the baseline behavior is that all application scopes can read from the table unless restricted by Access Control rules. Reference: https://docs.servicenow.com"
    },
    {
        question: "What is a Module?",
        type: "single",
        options: [
            "The functionality within an application menu such as opening a page in the content frame or a separate tab or window",
            "A group of menus, or pages, providing related information and functionality to end-users",
            "A way of helping users quickly access information and services by filtering the items in the Application Navigator",
            "A web-based way of providing software to end-users"
        ],
        correct: [0],
        explanation: "A module is the functionality within an application menu, such as opening a page in the content frame or a separate tab/window. For example, the 'Open' module under the Problem application opens a list of problem records. Reference: Modules | ServiceNow Tutorials"
    },
    {
        question: "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current seventeenth",
            "current.variable_name",
            "current.field_name"
        ],
        correct: [1],
        explanation: "The correct syntax is producer.variablename, where producer is the global object representing the Record Producer form, and variablename is the name of the variable. Reference: ServiceNow Docs - Record producers"
    },
    {
        question: "In an Email Notification, which one of the following is NOT true for the Weight field?",
        type: "single",
        options: [
            "Only Notifications with the highest weight for the same record and recipients are sent",
            "A Weight value of zero means that no email should be sent",
            "The Weight value defaults to zero",
            "A Weight value of zero means the Notification is always sent when the Notification's When to send criteria is met"
        ],
        correct: [1],
        explanation: "A Weight value of zero does not mean no email is sent; it means the notification is always sent when criteria are met. A weight of -1 prevents sending. Reference: Email Notification Weight"
    },
    {
        question: "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two.)",
        type: "multiple",
        options: [
            "source_control",
            "source_control_admin",
            "admin",
            "git_admin"
        ],
        correct: [0, 2],
        explanation: "The source_control role allows basic source control operations, and the admin role grants full access, including advanced operations. source_control_admin and git_admin are not valid roles. Reference: Source Control Roles"
    },
    {
        question: "When crafting a scoped application that contains flow actions, what is the application called?",
        type: "single",
        options: [
            "Bundle",
            "Row",
            "Action",
            "Spoke"
        ],
        correct: [3],
        explanation: "A spoke is a scoped application containing flow actions for use in Flow Designer, enabling reusable actions across applications. Reference: Spokes - Product Documentation: San Diego"
    },
    {
        question: "From the list below, identify one reason an application might NOT be a good fit with ServiceNow. The application:",
        type: "single",
        options: [
            "Needs workflow to manage processes",
            "Requires 'as-is' use of low-level programming libraries",
            "Requires reporting capabilities",
            "Uses forms extensively to interact with data"
        ],
        correct: [1],
        explanation: "ServiceNow abstracts low-level programming, making it unsuitable for applications requiring 'as-is' use of low-level libraries. Other options align with ServiceNow's strengths. Reference: N/A"
    },
    {
        question: "Which of the following are possible reasons to build custom applications on ServiceNow? (Choose three.)",
        type: "multiple",
        options: [
            "To replace outdated, inadequate, custom business applications and processes",
            "To extend service delivery and management to all enterprise departments",
            "To allow users full access to all ServiceNow tables, records, and fields",
            "To extend the value of ServiceNow"
        ],
        correct: [0, 1, 3],
        explanation: "Custom apps can replace legacy processes, extend service delivery, and leverage ServiceNow's platform capabilities. Allowing full access to all data is not a valid reason due to security concerns. Reference: Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "Which of the following are true for reports in ServiceNow? (Choose three.)",
        type: "multiple",
        options: [
            "Any user can see any report shared with them",
            "Can be a graphical representation of data",
            "All users can generate reports on any table",
            "Can be run on demand by authorized users",
            "Can be scheduled to be run and distributed by email"
        ],
        correct: [1, 3, 4],
        explanation: "Reports can be graphical, run on demand by authorized users, and scheduled for email distribution. Users need data access to view shared reports, and not all users can generate reports on any table. Reference: Reports, Report Security"
    },
    {
        question: "If the Create module field is selected when creating a table, what is the new module's default behavior?",
        type: "single",
        options: [
            "Open an empty form so new records can be created",
            "Open a link to a wiki article with instructions on how to customize the behavior of the new module",
            "Display an empty homepage for the application",
            "Display a list of all records from the table"
        ],
        correct: [3],
        explanation: "The default behavior of a new module is to display a list of all records from the table, which can be modified later. Reference: Create a table"
    },
    {
        question: "What is the ServiceNow Store?",
        type: "single",
        options: [
            "The source for ServiceNow Community created developer content",
            "Marketplace for free and paid certified ServiceNow applications and integrations",
            "Downloadable content ServiceNow script archive",
            "Alternate name for the ServiceNow Developer Share site"
        ],
        correct: [1],
        explanation: "The ServiceNow Store is a marketplace for certified free and paid applications and integrations that enhance ServiceNow functionality. Reference: ServiceNow Store"
    },
    {
        question: "What are web services?",
        type: "single",
        options: [
            "They provide a customer-facing view of available service and product offerings provided by departments within the organization",
            "Methods used to allow applications to connect to other software applications over a network",
            "Methods used to create and maintain UI Pages",
            "Methods used to discover a wide variety of systems and applications"
        ],
        correct: [1],
        explanation: "Web services enable applications to connect and exchange data over a network using standardized protocols like XML and HTTP. Reference: What are Web Services? - GeeksforGeeks"
    },
    {
        question: "Which one of the following is true regarding Application Scope?",
        type: "single",
        options: [
            "All applications are automatically part of the Global scope",
            "Applications downloaded from 3rd party ServiceNow application developers cannot have naming conflicts",
            "Any developer can edit any application",
            "Developers can choose the prefix for a scope's namespace"
        ],
        correct: [1],
        explanation: "Application Scope ensures that 3rd-party applications have unique namespaces, preventing naming conflicts. Reference: Product Documentation | ServiceNow"
    },
    {
        question: "How is access to Application Menus and Modules controlled?",
        type: "single",
        options: [
            "Access Controls",
            "Application Rules",
            "Client Scripts",
            "Roles"
        ],
        correct: [3],
        explanation: "Access to Application Menus and Modules is controlled by roles, which determine visibility based on user roles. Reference: Grant a role access to applications and modules"
    },
    {
        question: "Is it possible to change an application's scope?",
        type: "single",
        options: [
            "Yes, but only from global scope to private scope",
            "Yes it's possible",
            "No, it's not possible",
            "Yes, but only from private scope to global scope"
        ],
        correct: [1],
        explanation: "It is possible to change an application's scope (global to private or vice versa), but it requires thorough testing due to potential impacts. Reference: How To Change Application Scope In ServiceNow - YouTube"
    },
    {
        question: "Which are reasons an application could be developed on the ServiceNow platform? (Choose 3 answers)",
        type: "multiple",
        options: [
            "It uses forms extensively to interact with data",
            "It needs workflow to manage processes",
            "It requires reporting capabilities",
            "It requires low-level programming libraries",
            "It uses multimedia features"
        ],
        correct: [0, 1, 2],
        explanation: "ServiceNow is ideal for applications using forms, workflows, and reporting. It does not support low-level programming libraries or multimedia features natively. Reference: ServiceNow Certified Application Developer Exam Specification"
    },
    {
        question: "What are Application Files in a ServiceNow application?",
        type: "single",
        options: [
            "An XML export of an application's table records",
            "ServiceNow artifacts comprising an application",
            "XML exports of an application's Update Set",
            "CSV files containing data imported into an application"
        ],
        correct: [1],
        explanation: "Application Files are the artifacts (tables, scripts, forms, etc.) that make up a ServiceNow application. Reference: Application Files"
    },
    {
        question: "There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.",
        type: "single",
        options: [
            "Identify the table",
            "Script the function(s)",
            "Create a class",
            "Create a prototype object from the new class"
        ],
        correct: [0],
        explanation: "Identifying the table is not part of creating a Utils Script Include, as Script Includes are not tied to specific tables. Reference: ServiceNow Docs - Script Includes"
    },
    {
        question: "Which objects can be used in Inbound Action scripts?",
        type: "single",
        options: [
            "current and previous",
            "current and email",
            "current and event",
            "current and producer"
        ],
        correct: [1],
        explanation: "Inbound Action scripts use the current object (for the record) and email object (for email properties). Reference: Inbound Action scripts"
    },
    {
        question: "If you create a SOAP Message, what syntax indicates a variable to pass when the function is called?",
        type: "single",
        options: [
            "current variable_name",
            "\$[variable_name]",
            "<variable_name>",
            "<variable_name>.do?WSDL"
        ],
        correct: [1],
        explanation: "The syntax \$[variable_name] is used to indicate a variable in a SOAP Message. Reference: Tutorial: Handling a SOAP Response in ServiceNow"
    },
    {
        question: "Which of the following methods is NOT part of the ServiceNow REST API?",
        type: "single",
        options: [
            "COPY",
            "POST",
            "GET",
            "DELETE"
        ],
        correct: [0],
        explanation: "COPY is not a valid HTTP method in the ServiceNow REST API. Supported methods include POST, GET, DELETE, PUT, and PATCH. Reference: ServiceNow REST API methods"
    },
    {
        question: "What is the REST API Explorer used to do?",
        type: "single",
        options: [
            "Practice using REST to interact with public data providers",
            "Find resources on the web for learning about REST",
            "Convert SOAP Message functions to REST methods",
            "Create sample code for sending REST requests to ServiceNow"
        ],
        correct: [3],
        explanation: "The REST API Explorer generates sample code for sending REST requests to ServiceNow, aiding in API testing and development. Reference: Use the REST API Explorer"
    },
    {
        question: "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: table.None read Access Control for users with the admin and itil roles; table.* read Access Control for users with the admin role; table.field3 read Access Control for users with the itil role. Which field or fields can a user with the itil role read?",
        type: "single",
        options: [
            "field1, field2, and field3",
            "field3 only",
            "field1 and field3",
            "All fields except field3"
        ],
        correct: [1],
        explanation: "The itil role can only read field3 due to the specific table.field3 read ACL. The table.None rule denies read access to other fields. Reference: Access Control Lists - ServiceNow Docs"
    },
    {
        question: "Which one of the following is true for the Application Picker?",
        type: "single",
        options: [
            "All custom application scope and the Global scope appear in the Application Picker",
            "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker",
            "Only custom applications appear in the Application Picker",
            "Only downloaded applications appear in the Application Picker"
        ],
        correct: [0],
        explanation: "The Application Picker displays all custom application scopes and the Global scope. Reference: https://docs.servicenow.com"
    },
    {
        question: "Which class is NOT part of the Client side scoped APIs?",
        type: "single",
        options: [
            "GuideDialogWindow",
            "GuideAjax",
            "GuideRecord",
            "GuideForm"
        ],
        correct: [2],
        explanation: "GuideRecord is a server-side API, not a client-side scoped API. The others are client-side APIs for UI manipulation. Reference: Client side scoped APIs"
    },
    {
        question: "Which server-side object provides methods for working with dates when writing a script in a privately scoped application?",
        type: "single",
        options: [
            "GlideDateTime",
            "current",
            "GlideRecord",
            "GlideSystem"
        ],
        correct: [0],
        explanation: "GlideDateTime provides methods for working with dates in server-side scripts. Reference: https://developer.servicenow.com"
    },
    {
        question: "Which one of the following client-side scripts apply to Record Producers?",
        type: "single",
        options: [
            "Catalog Client Scripts and Catalog UI Policies",
            "UI Scripts and UI Actions",
            "UI Scripts and Record Producer Scripts",
            "Client Scripts and UI Policies"
        ],
        correct: [0],
        explanation: "Catalog Client Scripts and Catalog UI Policies are the client-side scripts that apply to Record Producers. Reference: Catalog client scripts"
    },
    {
        question: "When evaluating Access Controls, ServiceNow searches and evaluates:",
        type: "single",
        options: [
            "Only for matches on the current table",
            "Only for matches on the current field",
            "From the most specific match to the most generic match",
            "From the most generic match to the most specific match"
        ],
        correct: [2],
        explanation: "ServiceNow evaluates Access Controls from the most specific (field-level) to the most generic (global) match. Reference: Access Control Rules"
    },
    {
        question: "What is a workflow context?",
        type: "single",
        options: [
            "It is a checked out workflow which is being edited",
            "It is generated from a workflow version, executes activities, and follows transitions",
            "The table for which a workflow is defined plus any conditions such as 'Active is true'",
            "The business reason or process for which a workflow is designed"
        ],
        correct: [1],
        explanation: "A workflow context is an instance of a workflow that executes activities and follows transitions for a specific record. Reference: Workflow context"
    },
    {
        question: "What are the benefits of storing the majority of an Application's server-side script logic in a Script Include? (Choose three.)",
        type: "multiple",
        options: [
            "This makes execution faster",
            "Only run when called from a script",
            "The script logic can be hidden when the Application is installed from the ServiceNow Store",
            "For some changes to application logic there is only one place to make edits"
        ],
        correct: [1, 2, 3],
        explanation: "Script Includes run only when called, can be hidden in the ServiceNow Store, and centralize logic for easier edits. They do not inherently make execution faster. Reference: https://developer.servicenow.com"
    },
    {
        question: "What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
        type: "single",
        options: [
            "Restricted caller access records",
            "Caller tracking records",
            "Access control level records",
            "Cross-scope access records"
        ],
        correct: [0],
        explanation: "Restricted caller access records track cross-scope access requests. Reference: https://docs.servicenow.com"
    },
    // Câu 36-111 không có trong tài liệu, tôi sẽ tiếp tục từ câu 112
    {
        question: "Which of the following statements is NOT true for the Form Designer?",
        type: "single",
        options: [
            "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form",
            "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form",
            "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button",
            "To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field"
        ],
        correct: [0],
        explanation: "Sections are not added by dragging from the Field Types tab; you use the Add Section button instead. Other statements are correct. Reference: https://docs.servicenow.com"
    },
    {
        question: "Which ATF Test step allows you to create a user with specified roles and groups for the test?",
        type: "single",
        options: [
            "Create a user",
            "Create a role",
            "Create a group",
            "Impersonation"
        ],
        correct: [0],
        explanation: "The 'Create a user' test step in ATF creates a temporary user with specified roles and groups for testing. Reference: Automated Test Framework test steps"
    },
    {
        question: "Which one of the following is the fastest way to create and configure a Record Producer?",
        type: "single",
        options: [
            "Create a Catalog Category, open the category, and select the Add New Record Producer button",
            "Use the Record Producer module then add and configure all variables manually",
            "Open the table in the Table records and select the Add to Service Catalog Related Link",
            "Open the table's form, right-click on the form header, and select the Create Record Producer menu item"
        ],
        correct: [2],
        explanation: "Using the 'Add to Service Catalog' Related Link on the table automatically creates a Record Producer with the table's fields, making it the fastest method. Reference: Create a record producer"
    },
    {
        question: "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
        type: "single",
        options: [
            "gs.log()",
            "gs.error()",
            "gs.warn()",
            "gs.debug()"
        ],
        correct: [0],
        explanation: "gs.log() is not available in scoped applications; gs.error(), gs.warn(), and gs.debug() are used instead. Reference: N/A"
    },
    {
        question: "When selecting a data type for a field that will be displayed on a form, which of the following statements is NOT correct?",
        type: "single",
        options: [
            "Use the Choice data type to limit options in a field",
            "Use the Data data type to enter the date and time of day",
            "Use the Phone Number data type to automate phone number data validation",
            "Use the string data type for a free-form text field"
        ],
        correct: [1],
        explanation: "There is no 'Data' data type; the correct type for date and time is Date/Time. Other statements are correct. Reference: Field types"
    },
    {
        question: "What are three ServiceNow table creation methods? (Choose three.)",
        type: "multiple",
        options: [
            "Using legacy Workflows",
            "Upload and turn a spreadsheet into a custom table",
            "Using Flow Designer",
            "Use the Now Experience Table Creator",
            "Extend a table",
            "Create a custom table"
        ],
        correct: [1, 4, 5],
        explanation: "Tables can be created by uploading a spreadsheet, extending a table, or creating a custom table. Workflows and Flow Designer are not table creation methods. Reference: https://docs.servicenow.com"
    },
    {
        question: "What is NOT a purpose of application scoping?",
        type: "single",
        options: [
            "Provide a relationship between application artifacts",
            "Provide a way of tracking the user who developed an application",
            "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
            "Provide controls for how scripts from another scope can alter tables in a scoped application"
        ],
        correct: [1],
        explanation: "Application scoping does not track the user who developed an application; it focuses on artifact relationships, namespaces, and access controls. Reference: Product Documentation | ServiceNow"
    },
    {
        question: "Which Report Type(s) can be created by right-clicking on a column header in a table's list?",
        type: "single",
        options: [
            "Bar Chart, Pie Chart, Histogram, and Line",
            "Bar Chart",
            "Bar Chart, Pie Chart, and Histogram",
            "Bar Chart and Pie Chart"
        ],
        correct: [3],
        explanation: "Right-clicking a column header allows creating Bar Chart and Pie Chart reports. Reference: Create reports from lists"
    },
    {
        question: "Identify the way(s) an application can respond to an Event generated by the gs.eventQueue() method. (Choose two.)",
        type: "multiple",
        options: [
            "Script Action",
            "Scheduled Script Execution (Scheduled Job)",
            "UI Policy",
            "Email Notification"
        ],
        correct: [0, 3],
        explanation: "An application can respond to events via Script Actions or Email Notifications. Reference: https://developer.servicenow.com"
    },
    {
        question: "When configuring a module, what does the Override application menu roles configuration option do?",
        type: "single",
        options: [
            "Users with the module role but without access to the application menu access the module",
            "Self-Service users can access the module even though they do not have roles",
            "Admin is given access to the module even if Access Controls would ordinarily prevent access",
            "Users with access to the application menu can see the module even if they don't have the module role"
        ],
        correct: [0],
        explanation: "The Override option allows users with the module role to access the module, bypassing the application menu role requirement. Reference: N/A"
    },
    {
        question: "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
        type: "single",
        options: [
            "Any Business Rule can read, write, delete, and update from the table",
            "The table and its data are not accessible using web services",
            "Only artifacts in the table's application can read from the table",
            "All application scopes can read from the table"
        ],
        correct: [3],
        explanation: "In a privately-scoped application, all scopes can read from the table by default unless restricted. Reference: N/A"
    },
    {
        question: "Which of the following statements is true for the Form Designer? (Choose three.)",
        type: "multiple",
        options: [
            "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form",
            "To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field",
            "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button",
            "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form"
        ],
        correct: [0, 1, 2],
        explanation: "The Form Designer allows adding fields, creating new fields, and removing fields as described. Adding sections is done via the Add Section button, not by dragging. Reference: Form Designer"
    },
    {
        question: "Modules must have a Link type. Which one of the following is a list of Link types?",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from arguments:)",
            "Assessment, List of Records, Content Page, Roles"
        ],
        correct: [1],
        explanation: "Valid Link types include Assessment, List of Records, Separator, and Timeline Page. Reference: N/A"
    },
    {
        question: "Client-side scripts manage what?",
        type: "single",
        options: [
            "Forms and Form Fields",
            "Playbook access",
            "Database and backend",
            "User access"
        ],
        correct: [0],
        explanation: "Client-side scripts manage forms and form fields, controlling UI behavior. Reference: https://docs.servicenow.com"
    },
    {
        question: "When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?",
        type: "single",
        options: [
            "Upload spreadsheet",
            "Create table from template",
            "Extend a table",
            "Create table from scratch"
        ],
        correct: [1],
        explanation: "Create table from template is not an option in the Guided Application Creator. Reference: Create tables"
    },
    {
        question: "Which of the following methods are useful in Access Control scripts?",
        type: "single",
        options: [
            "gs.hasRole() and current.isNewRecord()",
            "g_user.hasRole() and current.isNew()",
            "gs.hasRole() and current.isNew()",
            "g_user.hasRole() and current.isNewRecord()"
        ],
        correct: [0],
        explanation: "gs.hasRole() and current.isNewRecord() are server-side methods useful in Access Control scripts. g_user and isNew() are client-side. Reference: Access Control scripts"
    },
    {
        question: "What are some of the benefits of extending an existing table such as the Task table when creating a new application? (Choose three.)",
        type: "multiple",
        options: [
            "You can repurpose existing fields by simply changing the label",
            "Use existing fields with no modifications",
            "Existing logic from the parent table will be automatically applied to the new table",
            "All of the parent table records are copied to the new table"
        ],
        correct: [0, 1, 2],
        explanation: "Extending a table allows repurposing fields, using fields as-is, and inheriting logic. Records are not copied. Reference: Extend a table"
    },
    {
        question: "Which of the following is NOT a trigger type in Flow Designer?",
        type: "single",
        options: [
            "Outbound Email",
            "Application",
            "Record",
            "Schedule"
        ],
        correct: [0],
        explanation: "Outbound Email is an action, not a trigger type. Flow Designer triggers include Application, Record, and Schedule. Reference: Flow Designer Trigger Types"
    },
    {
        question: "Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?",
        type: "single",
        options: [
            "The application needs to send weekly email reminders to requestors for all records on a table",
            "The application needs to run a clean up script on the last day of every month",
            "The application needs to query the database every day to look for unassigned records",
            "The application needs to run a client-side script at the same time every day"
        ],
        correct: [3],
        explanation: "Scheduled Script Executions are server-side and cannot run client-side scripts. Other options are valid use cases. Reference: Scheduled Script Execution"
    },
    {
        question: "Which of the following is NOT supported by Flow Designer?",
        type: "single",
        options: [
            "Call a subflow from a flow",
            "Test a flow with rollback",
            "Use Delegated Developer",
            "Run a flow from a MetricBase Trigger"
        ],
        correct: [1],
        explanation: "Testing a flow with rollback is supported by ATF, not Flow Designer. Other features are supported. Reference: Flow Designer"
    },
    {
        question: "What is the purpose of the Application Picker?",
        type: "single",
        options: [
            "Select an application to run",
            "Select an application as a favorite in the Application Navigator",
            "Choose an application to edit and set the Application Scope",
            "Choose an application to download and install"
        ],
        correct: [2],
        explanation: "The Application Picker allows users to choose an application to edit and set its scope. Reference: https://docs.servicenow.com"
    },
    {
        question: "Which of the following are configured in an Email Notification? (Choose three.)",
        type: "multiple",
        options: [
            "Who will receive the notification",
            "What content will be in the notification",
            "When to send the notification",
            "How to send the notification"
        ],
        correct: [0, 1, 2],
        explanation: "Email Notifications configure the recipients, content, and timing. 'How to send' is not a configurable aspect. Reference: https://docs.servicenow.com"
    },
    {
        question: "Which one of the following is true for this script fragment? g_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "The method returns true if the currently logged in user has the x_my_app_user role or the admin role",
            "The method returns false only if the currently logged in user has the x_my_app_user role",
            "There is no g_user.hasRole() method",
            "The method returns true only if the currently logged in user has the x_my_app_user role"
        ],
        correct: [0],
        explanation: "g_user.hasRole() returns true if the user has the specified role or the admin role. Reference: User Object Cheat Sheet"
    },
    {
        question: "Which one of the following client-side scripts apply to Record Producers?",
        type: "single",
        options: [
            "UI Scripts and UI Actions",
            "UI Scripts and Record Producer Scripts",
            "Client Scripts and UI Policies",
            "Catalog Client Scripts and Catalog UI Policies"
        ],
        correct: [3],
        explanation: "Catalog Client Scripts and Catalog UI Policies apply to Record Producers for form manipulation. Reference: Catalog client scripts"
    },
    {
        question: "Which one of the following is NOT a debugging strategy for client-side scripts?",
        type: "single",
        options: [
            "g_form.addInfoMessage()",
            "Field Watcher",
            "jslog()",
            "gs.log()"
        ],
        correct: [3],
        explanation: "gs.log() is a server-side debugging method, not for client-side scripts. Other options are valid for client-side debugging. Reference: Debugging Client Scripts"
    },
    {
        question: "Which one of the following is part of the client-side scripting API?",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "current and previous objects",
            "GlideSystem object (gs)"
        ],
        correct: [1],
        explanation: "GlideUser (g_user) is a client-side API for user information. Others are server-side or workflow-specific. Reference: GlideUser object (g_user)"
    },
    {
        question: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
        type: "single",
        options: [
            "Select Data Source, Schedule Transform",
            "Load Data, Create Transform Map, Run Transform",
            "Define Data Source, Select Transform Map, Run Transform",
            "Select Import Set, Select Transform Map, Run Transform"
        ],
        correct: [1],
        explanation: "The correct steps are Load Data, Create Transform Map, and Run Transform to import data from a spreadsheet. Reference: Import sets"
    }
];

// Xuất dữ liệu để sử dụng trong script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}

const QUESTIONS_PER_PAGE = 10;
let currentPage = 1;
let selectedAnswers = {}; // Lưu trữ trạng thái đã chọn
let submittedResults = {}; // Lưu trữ kết quả sau khi submit

// Tạo giao diện câu hỏi
function loadQuiz(page = 1) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    const currentQuestions = quizData.slice(start, end);

    currentQuestions.forEach((item, index) => {
        const globalIndex = start + index;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3><span style="font-weight: bold;">Question ${globalIndex + 1}.</span> ${item.question}</h3>`;

        item.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            const inputType = item.type === 'multiple' ? 'checkbox' : 'radio';
            const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? 'checked' : '';
            optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}>
                <label for="q${globalIndex}o${optIndex}">${String.fromCharCode(65 + optIndex)}. ${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        const resultText = document.createElement('div');
        resultText.classList.add('result-text');
        resultText.id = `result-q${globalIndex}`;
        if (submittedResults[globalIndex]) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[globalIndex];
        }
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });

    loadPagination();
}

// Tạo phân trang
function loadPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            loadQuiz(currentPage);
            // checkAllAnswered();
        });
        paginationContainer.appendChild(pageBtn);
    }
}

// Cập nhật trạng thái đã chọn
function updateSelectedAnswers() {
    const allInputs = document.querySelectorAll('#quiz input');
    allInputs.forEach(input => {
        const questionIndex = parseInt(input.name.replace('q', ''));
        if (!selectedAnswers[questionIndex]) selectedAnswers[questionIndex] = [];
        
        if (input.checked) {
            const value = parseInt(input.value);
            if (!selectedAnswers[questionIndex].includes(value)) {
                if (quizData[questionIndex].type === 'single') {
                    selectedAnswers[questionIndex] = [value];
                } else {
                    selectedAnswers[questionIndex].push(value);
                }
            }
        } else {
            const value = parseInt(input.value);
            selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter(v => v !== value);
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
        const isCorrect = item.type === 'multiple'
            ? arraysEqual(selectedValues.sort(), item.correct.sort())
            : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

        submittedResults[index] = isCorrect
            ? `<span class="correct">Correct</span><br><div class="explanation">${item.explanation}</div>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}<br><div class="explanation">${item.explanation}</div>`;

        const resultText = document.getElementById(`result-q${index}`);
        if (resultText) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[index];
        }

        if (isCorrect) score++;
    });

    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = `Your Score: ${score}/${totalQuestions} (${(score / totalQuestions * 100).toFixed(2)}%)`;
}

// So sánh hai mảng
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz(currentPage);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    document.getElementById('quiz').addEventListener('change', () => {
        updateSelectedAnswers();
        // checkAllAnswered();
    });
});
