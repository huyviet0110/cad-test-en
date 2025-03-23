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
    {
        question: "Which of the following objects does a Display Business Rule NOT have access to?",
        type: "single",
        options: [
            "previous",
            "GlideSystem",
            "g_scratchpad",
            "current"
        ],
        correct: [0],
        explanation: "A Display Business Rule has access to the current, g_scratchpad, and GlideSystem objects, but not the previous object. The previous object is only available to Before Business Rules. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/script/business-rules/concept/c_Busine"
    },
    {
        question: "Which of the following GuideRecord methods run a query against a database table? (Choose 3 answers)",
        type: "multiple",
        options: [
            "query()",
            "runQuery()",
            "query()",
            "get()",
            "get()"
        ],
        correct: [0, 2, 4],
        explanation: "The GuideRecord methods that run a query against a database table are query() and get(). Note that options A and C are duplicates, and options D and E are duplicates. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/app-store/dev_portal/API_reference/G"
    },
    {
        question: "Application developers configure ServiceNow using industry standard JavaScript to...",
        type: "single",
        options: [
            "Enable the right-click to edit the context menus on applications in the navigator",
            "Extend and add functionality",
            "Customize the organization's company logo and banner text",
            "Configure the outgoing email display name"
        ],
        correct: [1],
        explanation: "Application developers use JavaScript to extend and add functionality to ServiceNow applications, leveraging APIs and frameworks like client scripts and business rules. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/script/general-scripting/concept/c_ScriptingInServiceNow"
    },
    {
        question: "Which of the following methods prints a message on a blue background to the top of the current form by default?",
        type: "single",
        options: [
            "g_form.addInfoMsg()",
            "g_form.addInfoMessage()",
            "g_form.showFieldMessage()",
            "g_form.showFieldMsg()"
        ],
        correct: [1],
        explanation: "The method g_form.addInfoMessage() displays a message on a blue background at the top of the form by default. Reference: https://docs.servicenow.com/bundle/paris-application-development/page/script/general-scripting/reference"
    },
    {
        question: "Which business requirements and process(es) should be documented as part of the application development plan? (Choose 4 answers)",
        type: "multiple",
        options: [
            "Data input/output",
            "Business problem",
            "Project schedule",
            "Process steps",
            "Database capacity",
            "Users/stakeholders",
            "Available licenses"
        ],
        correct: [0, 1, 3, 5],
        explanation: "The application development plan should document data input/output, business problem, process steps, and users/stakeholders to define the scope and requirements. Reference: Application Development Lifecycle: Phases, Steps and Process"
    },
    {
        question: "Which one of the following is true for GlideUser (g_user) methods?",
        type: "single",
        options: [
            "Can be used in Client Scripts and UI Policies only",
            "Can be used in Business Rules only",
            "Can be used in Client Scripts, UI Policies, and UI Actions",
            "Can be used in Business Rules, and Scripts Includes"
        ],
        correct: [2],
        explanation: "GlideUser (g_user) methods are client-side and can be used in Client Scripts, UI Policies, and UI Actions to access user information. Reference: Client-Side Scripting APIs"
    },
    {
        question: "The task table is an example of which of the following? (Choose 2 answers)",
        type: "multiple",
        options: [
            "Legacy class",
            "Child class",
            "Base class",
            "Parent class"
        ],
        correct: [2, 3],
        explanation: "The Task table is a base class and parent class, as other tables like Incident extend it. Reference: https://docs.servicenow.com/en-US/bundle/tokyo-platform-administration/page/administer/table-administ"
    },
    {
        question: "Which determines the relationships between fields in an Import Set table to fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Data Sources",
            "Schema Map Relationship Builder",
            "Business Service Management Map",
            "Transform Map"
        ],
        correct: [3],
        explanation: "A Transform Map defines the relationships between fields in an Import Set table and an existing ServiceNow table. Reference: What Exactly is an Import Set? - ServiceNow Developers"
    },
    {
        question: "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
        type: "single",
        options: [
            "An Application Properties page is a good landing page for an application",
            "Application Properties allow a developer to override the application properties inherited from ServiceNow",
            "Application users know to go to the Application Properties page to change the appearance of an application",
            "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts"
        ],
        correct: [3],
        explanation: "Application Properties allow changes to an application's behavior without modifying its artifacts, enhancing flexibility. Reference: Working with System Properties"
    },
    {
        question: "Which one of the following is NOT true for Modules?",
        type: "single",
        options: [
            "Access to Modules is controlled with roles",
            "Modules open content pages",
            "Every Module must be associated with a table",
            "Every Module must be part of an Application Menu"
        ],
        correct: [2],
        explanation: "Modules do not need to be associated with a table; they can link to various content types like dashboards or scripts. Reference: Modules"
    },
    {
        question: "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
        type: "single",
        options: [
            "Publisher",
            "Specialist",
            "Provider",
            "Consumer"
        ],
        correct: [3],
        explanation: "ServiceNow acts as a web service consumer when requesting information from a web service. Reference: Web services"
    },
    {
        question: "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
        type: "single",
        options: [
            "${event.<property name>}",
            "${current.<property name>}",
            "${property name>.getDisplayValue()}",
            "${gs.<property name>}"
        ],
        correct: [0],
        explanation: "The correct syntax to reference event properties in an Email Notification is ${event.<property name>}. Reference: https://www.servicenow.com/community/it-service-management-forum/email-notification/mp/695221"
    },
    {
        question: "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
        type: "single",
        options: [
            "g_form.hasRoleExactly('admin')",
            "gs.hasRole('admin')",
            "g_form.hasRole('admin')",
            "gs.hasRoleExactly('admin')"
        ],
        correct: [1],
        explanation: "In a Business Rule (server-side), gs.hasRole('admin') returns true if the user has the admin role. Reference: Business Rules, GlideSystem"
    },
    {
        question: "Which one of the following is NOT part of the Form Designer?",
        type: "single",
        options: [
            "Form layout",
            "Page header",
            "Schema map",
            "Field navigator"
        ],
        correct: [2],
        explanation: "The Schema map is not part of the Form Designer; it is a separate tool for viewing table relationships. Reference: https://developer.servicenow.com/dev.do#!/learn/courses/sandiego/app_store_learnv2_learnmore_sandiego_learn"
    },
    {
        question: "It is best practice to define the business requirements and the process(es) an application will manage as part of the application development plan. What are some of the considerations to document as part of the business process?",
        type: "single",
        options: [
            "Business problem, data input/output, users/stakeholders, and process steps",
            "Business problem, data input/output, project schedule, and process steps",
            "Business problem, data input/output, users/stakeholders, and database capacity",
            "Business problem, users/stakeholders, available licenses, and database capacity"
        ],
        correct: [0],
        explanation: "The business process should document the business problem, data input/output, users/stakeholders, and process steps. Reference: Application Development Process"
    },
    {
        question: "When configuring a REST Message, the Endpoint is:",
        type: "single",
        options: [
            "The commands to the REST script to stop execution",
            "The URI of the data to be accessed, queried, or modified",
            "Information about the format of the returned data",
            "The response from the provider indicating there is no data to send back"
        ],
        correct: [1],
        explanation: "The Endpoint in a REST Message is the URI of the data to be accessed, queried, or modified. Reference: REST Messages"
    },
    {
        question: "Here is the Business Rule script template: This type of JavaScript function is known as:",
        type: "single",
        options: [
            "Constructor",
            "Scoped",
            "Anonymous",
            "Self-invoking"
        ],
        correct: [3],
        explanation: "The Business Rule script template uses a self-invoking (immediately-invoked function expression, IIFE) function to create a local scope. Reference: W3Schools - JavaScript Function Definitions"
    },
    {
        question: "Which script types execute on the server? (Choose three.)",
        type: "multiple",
        options: [
            "Business Rule",
            "Client Scripts",
            "UI Policies",
            "Script Actions",
            "Scheduled Jobs"
        ],
        correct: [0, 3, 4],
        explanation: "Business Rules, Script Actions, and Scheduled Jobs execute on the server. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/script/server-scripting/concept/c_Serve"
    },
    {
        question: "For Application Access there is a configuration option called Allow access to this table via web services. Which one of the following statements is true when this option is selected?",
        type: "single",
        options: [
            "This option restricts the ability to delete records via web services but records can always be read",
            "The user performing the query via web services must have the correct permissions to access the table's records",
            "Even when not selected, users with the correct permissions can use web services to access the table's records",
            "This option restricts access only to SOAP web services but does not apply to REST"
        ],
        correct: [1],
        explanation: "When the option is selected, users must still have the correct permissions to access the table via web services. Reference: Application Access"
    },
    {
        question: "What are the features of Flow Designer? (Choose 3 answers)",
        type: "multiple",
        options: [
            "Add stages to a flow",
            "Call a flow from another flow or subflow",
            "Test a flow using the 'Run as' feature",
            "Support Java Scripting code to test conditions that trigger the flow",
            "Perform form field data validation at client side"
        ],
        correct: [0, 1, 2],
        explanation: "Flow Designer supports adding stages, calling flows/subflows, and testing with the 'Run as' feature. Reference: Flow Designer - ServiceNow"
    },
    {
        question: "Identify the incorrect statement about Delegated Development in ServiceNow.",
        type: "single",
        options: [
            "Administrators can grant non-admin users the ability to develop global applications",
            "Administrators can specify which application file types the developer can access",
            "Administrators can grant the developer access to script fields",
            "Administrators can grant the developer access to security records"
        ],
        correct: [0],
        explanation: "Delegated Development is for scoped applications only, not global applications. Reference: Delegated Development"
    },
    {
        question: "When debugging Email Notifications, what must you check on a user record? (Choose 2 answers)",
        type: "multiple",
        options: [
            "The user must not be locked out",
            "Delegation must be enabled",
            "Active must be true",
            "The First name and Last name fields must have values",
            "The Email field must have a valid value"
        ],
        correct: [2, 4],
        explanation: "The user must be active and have a valid email address to receive notifications. Reference: Create an email notification"
    },
    {
        question: "When creating application tables, a user role is automatically added to the table record. Which other role does an application typically have?",
        type: "single",
        options: [
            "Application Manager",
            "Application Fulfiller",
            "Application Super User",
            "Application Admin"
        ],
        correct: [3],
        explanation: "An application typically has an Application Admin role for full access to its components. Reference: Application administration - ServiceNow Docs"
    },
    {
        question: "Which of the following statements is true about Guided Application Creator?",
        type: "single",
        options: [
            "The global scope option is turned on by default",
            "A scope application user role is automatically created",
            "Default access controls are automatically created",
            "The welcome screen appears every time a new application is created"
        ],
        correct: [3],
        explanation: "The welcome screen appears each time a new application is created in Guided Application Creator. Reference: Guided App Creator"
    },
    {
        question: "Which one of the following objects CANNOT be used in a Script Action script?",
        type: "single",
        options: [
            "previous",
            "GlideRecord",
            "event",
            "current"
        ],
        correct: [0],
        explanation: "The previous object is not available in Script Action scripts. Reference: https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/platform-events/reference/r_"
    },
    {
        question: "Identify characteristic(s) of a Record Producer. (Choose 3 answers)",
        type: "multiple",
        options: [
            "Graphics can be included on the user interface",
            "All records created using this strategy are inserted into the Requested Item [sc_req_item] table",
            "You can script behaviors of fields in the user interface",
            "They must be scripted",
            "Each field prompts the user with a question rather than a field label"
        ],
        correct: [0, 2, 4],
        explanation: "Record Producers can include graphics, script field behaviors, and use questions instead of labels. Reference: Record Producers"
    },
    {
        question: "Why would you build a custom app? (Choose 2 answers)",
        type: "multiple",
        options: [
            "To fulfill a specific use case on internal processes",
            "To avoid using a code repository like GitHub or GitLab",
            "To create a custom integration for a 3rd party system",
            "To replace ServiceNow base tables"
        ],
        correct: [0, 2],
        explanation: "Custom apps are built to address specific internal use cases or integrate with 3rd party systems. Reference: Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
        type: "single",
        options: [
            "Spoke",
            "Bundle",
            "Action",
            "Flow"
        ],
        correct: [0],
        explanation: "A spoke is a scoped application with Flow Designer content for a specific application. Reference: https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/spokes.ht"
    },
    {
        question: "Which of the following CANNOT be debugged using the Field Watcher?",
        type: "single",
        options: [
            "Business Rules",
            "Script Includes",
            "Client Scripts",
            "Access Controls"
        ],
        correct: [1],
        explanation: "Field Watcher cannot debug Script Includes as they are not tied to specific fields or forms. Reference: Field Watcher"
    },
    {
        question: "Tables that extend a table do what?",
        type: "single",
        options: [
            "Sometimes inherit the parent's fields",
            "Automatically update the application scope",
            "Do not inherit the parent's fields",
            "Inherit the parent's fields"
        ],
        correct: [3],
        explanation: "Tables that extend another table inherit all fields from the parent table. Reference: Table extension and classes"
    },
    {
        question: "Why create Applications in ServiceNow? (Choose 3 answers)",
        type: "multiple",
        options: [
            "To replace outdated inadequate custom business applications and processes",
            "To extend service delivery and management to all enterprise departments",
            "To allow users full access to all ServiceNow tables, records and fields",
            "To extend the value of ServiceNow"
        ],
        correct: [0, 1, 3],
        explanation: "Applications in ServiceNow replace outdated processes, extend service delivery, and enhance platform value. Reference: Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "Which of the following is true about deleting fields from a table?",
        type: "single",
        options: [
            "Any field on a table can be deleted",
            "User-defined non-inherited fields can be deleted",
            "Inherited fields can be deleted",
            "Table records are deleted when a field is deleted"
        ],
        correct: [1],
        explanation: "Only user-defined non-inherited fields can be deleted from a table. Reference: Delete fields"
    },
    {
        question: "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
        type: "single",
        options: [
            "REST messages",
            "Table",
            "Script Include",
            "Workflow"
        ],
        correct: [1],
        explanation: "Cross scope access is turned on by default for tables in a scoped application. Reference: https://developer.servicenow.com/dev.do#!/learn/learning-plans/tokyo/servicenow_administrator/app"
    },
    {
        question: "Which of the following are available features in Studio? (Choose 2 answers)",
        type: "multiple",
        options: [
            "Push to external source control",
            "Search branch",
            "Merge branches",
            "Push to update set"
        ],
        correct: [1, 2],
        explanation: "Studio supports searching and merging branches. Reference: Studio"
    },
    {
        question: "What Module Link type is used to access an Application Properties page?",
        type: "single",
        options: [
            "URL (from Arguments)",
            "HTML (from Arguments)",
            "Script (from Arguments)",
            "Single Record"
        ],
        correct: [0],
        explanation: "The URL (from Arguments) link type is used to access an Application Properties page. Reference: Module link types - ServiceNow Docs"
    },
    {
        question: "How does ServiceNow match inbound email to existing records?",
        type: "single",
        options: [
            "Watermark",
            "Record link",
            "Subject line",
            "sys_id"
        ],
        correct: [0],
        explanation: "ServiceNow uses a watermark in emails to match inbound emails to existing records. Reference: https://developer.servicenow.com/dev.do#!/learn/courses/tokyo/app_store_learnv2_flowdesigner_tokyo_flow_de"
    },
    {
        question: "What is the best UX format to use for lists and forms?",
        type: "single",
        options: [
            "Forms",
            "Lists",
            "Standard",
            "Classic"
        ],
        correct: [3],
        explanation: "Classic UX format is best for managing records via lists and forms. Reference: N/A"
    },
    {
        question: "Which of the following is NOT a way to install an application on a ServiceNow instance?",
        type: "single",
        options: [
            "Install an application from the Application Repository",
            "Select the Copy button on the application record",
            "Download and install an application from the ServiceNow Share web site",
            "Download and install a third-party application from the ServiceNow Store"
        ],
        correct: [1],
        explanation: "There is no 'Copy' button on the application record for installation. Reference: https://docs.servicenow.com/bundle/sandiego-application-development/page/build/applications/reference/r_"
    },
    {
        question: "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
        type: "single",
        options: [
            "All access to this table via web services",
            "Can create, Can update, and Can delete",
            "Can read does not affect the availability of other Application Access fields",
            "Allow configuration"
        ],
        correct: [1],
        explanation: "If Can read is not selected, Can create, Can update, and Can delete fields are not available. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/reference"
    },
    {
        question: "Which one of the following is true?",
        type: "single",
        options: [
            "A UI Policy's Actions execute before the UI Policy's Scripts",
            "The execution order for a UI Policy's Scripts and Actions is determined at runtime",
            "A UI Policy's Scripts execute before the UI Policy's Actions",
            "A UI Policy's Actions and Scripts execute at the same time"
        ],
        correct: [0],
        explanation: "A UI Policy's Actions execute before its Scripts. Reference: ServiceNow Docs - UI policy actions"
    },
    {
        question: "What are the ways to designate data tables when Guided Application Creator (GAC)? (Choose 3 answers)",
        type: "multiple",
        options: [
            "Upload an existing PDF",
            "Create a new table on the platform",
            "Use an existing table on the platform",
            "Upload an existing spreadsheet",
            "Upload an existing word processing document",
            "Use a freeform database"
        ],
        correct: [0, 1, 3],
        explanation: "GAC allows designating tables by uploading a PDF, creating a new table, or uploading a spreadsheet. Reference: Guided Application Creator"
    },
    {
        question: "What data types of Flow Designer variables are supported to store record data and complex data? (Choose 3 answers)",
        type: "multiple",
        options: [
            "Label data type",
            "Integer",
            "Array.Reference",
            "Choice",
            "String"
        ],
        correct: [1, 2, 4],
        explanation: "Flow Designer supports Integer, Array, and String for storing record and complex data. Reference: Define and Use Data Types in a Flow (Flow Designer)"
    },
    {
        question: "How many applications menus can an application have?",
        type: "single",
        options: [
            "3, one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules",
            "As many as the application design requires",
            "2, one for an application's user modules and one for an application's administrator modules",
            "1, which is used for all application modules"
        ],
        correct: [1],
        explanation: "An application can have as many application menus as required by its design. Reference: N/A"
    },
    {
        question: "Which one of the following is true for a table with the 'Allow configuration' Application Access option selected?",
        type: "single",
        options: [
            "Only the in scope application's scripts can create Business Rules for the table",
            "Any user with the application's user role can modify the application's scripts",
            "Out of scope applications can create Business Rules for the table",
            "Out of scope applications can add new tables to the scoped application"
        ],
        correct: [2],
        explanation: "With 'Allow configuration' selected, out of scope applications can create Business Rules for the table. Reference: Application Access"
    },
    {
        question: "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
        type: "single",
        options: [
            "field3 only",
            "field1 and field3",
            "All fields",
            "All fields except field3"
        ],
        correct: [0],
        explanation: "Based on the Access Control list, a user with the itil role can only read field3. Reference: https://docs.servicenow.com/bundle/tokyo-platform-security/page/administer/contextual-security/concept/access"
    },
    {
        question: "How can an application link to a repository behind a firewall?",
        type: "single",
        options: [
            "This option is not supported",
            "Link an application to source control through a MID Server",
            "Link an application to source control through an access token",
            "Link an application to source control with multi-factor authentication"
        ],
        correct: [1],
        explanation: "A MID Server can be used to link an application to a repository behind a firewall. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/concept/c_"
    },
    {
        question: "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
        type: "single",
        options: [
            "Password",
            "URL",
            "User name",
            "Application name"
        ],
        correct: [3],
        explanation: "The application name is not required to link to a Git repository; URL, user name, and password are needed. Reference: Link an application to a Git repository"
    },
    {
        question: "When writing a Client Script to provide feedback targeted at a specific field, which method should be used?",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()"
        ],
        correct: [1],
        explanation: "g_form.showFieldMsg() is used to provide feedback targeted at a specific field. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/script/useful-scripts/reference/r_Displa"
    },
    {
        question: "In a Business Rule, which one of the following returns the sys_id of the currently logged in user?",
        type: "single",
        options: [
            "g_form.getUserID()",
            "g_form.getUserSysy",
            "gs.getUserSysID()",
            "gs.getUserID()"
        ],
        correct: [3],
        explanation: "gs.getUserID() returns the sys_id of the currently logged in user in a Business Rule. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/app-store/dev_portal/API_reference/gl"
    },
    {
        question: "Which of the following is NOT a caller access field option?",
        type: "single",
        options: [
            "Caller Tracking",
            "Caller Restriction",
            "None",
            "Caller Permission"
        ],
        correct: [3],
        explanation: "Caller Permission is not a valid caller access field option. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/set-RCA-level"
    },
    {
        question: "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
        type: "single",
        options: [
            "base table",
            "child table",
            "parent table",
            "all tables"
        ],
        correct: [1],
        explanation: "Configuring a field label in a child table only changes the label in that child table. Reference: ServiceNow Docs - Table extension"
    },
    {
        question: "Which of the following is a good practice for adding instructions to a form?",
        type: "single",
        options: [
            "Annotations",
            "Related links to wiki pages",
            "A context Menu UI Action",
            "A population read-only field"
        ],
        correct: [0],
        explanation: "Annotations are a good practice for adding instructions to a form. Reference: https://docs.servicenow.com/bundle/sandiego-application-development/page/administer/form-builder/ta"
    },
    {
        question: "Which source control operation is available from BOTH Studio and the Git Repository?",
        type: "single",
        options: [
            "Create Branch",
            "Apply Remote Changes",
            "Stash Local Changes",
            "Edit Repository Configurations"
        ],
        correct: [0],
        explanation: "Create Branch is available in both Studio and the Git Repository. Reference: Create a branch"
    },
    {
        question: "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
        type: "single",
        options: [
            "Any user with the protected_edit role can see and edit the Script Include",
            "The Protection policy option can only be enabled by a user with the admin role",
            "The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
            "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
        ],
        correct: [3],
        explanation: "The Protection Policy is applied only for applications downloaded from the ServiceNow App Store. Reference: https://docs.servicenow.com/bundle/rome-application-development/page/build/applications/concept/c_ScriptProt"
    },
    {
        question: "Which of the following statements does NOT apply when extending an existing table?",
        type: "single",
        options: [
            "The parent table's Access Controls are evaluated when determining access to the new table's records and fields",
            "The new table inherits the functionality built into the parent table",
            "The new table inherits all of the fields from the parent table",
            "You must script and configure all required behaviors"
        ],
        correct: [3],
        explanation: "You do not need to script all behaviors as they are inherited from the parent table. Reference: Table Extension"
    },
    {
        question: "What plugin enables the Guided Application Creator?",
        type: "single",
        options: [
            "com.glide.sn-guided-app-creator",
            "com.glide.service_creator",
            "com.glide.snc.apps_creator",
            "com.snc.apps_creator_template"
        ],
        correct: [0],
        explanation: "The com.glide.sn-guided-app-creator plugin enables the Guided Application Creator. Reference: https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/build/guided-app-creator/conce"
    },
    {
        question: "The source control operation used to store local changes on an instance for later application is called a(n):",
        type: "single",
        options: [
            "Branch",
            "Tag",
            "Stash",
            "Update set"
        ],
        correct: [2],
        explanation: "Stash is used to store local changes temporarily for later application. Reference: ServiceNow Docs - Stash local changes"
    },
    {
        question: "Once an application is ready to share, which of the following methods of publishing are supported by ServiceNow? (Choose 3 answers)",
        type: "multiple",
        options: [
            "Publish to an application repository",
            "Publish to a spreadsheet",
            "Publish to a local USB device",
            "Publish to a local drive",
            "Publish to an Update Set",
            "Publish to the ServiceNow Store"
        ],
        correct: [0, 4, 5],
        explanation: "ServiceNow supports publishing to an application repository, Update Set, or the ServiceNow Store. Reference: Publish an application to the application repository"
    },
    {
        question: "Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose 3 answers)",
        type: "multiple",
        options: [
            "Other matching Access Controls for the records evaluate to true",
            "Conditions configured in the Access Control must evaluate to true",
            "The user must be granted access through a business rule",
            "The user has one of the roles specified in the Required roles related list",
            "Scripts configured in the Access Control must evaluate to true"
        ],
        correct: [1, 3, 4],
        explanation: "For a user to pass an Access Control, conditions, roles, and scripts must evaluate to true. Reference: Access control rules"
    },
    {
        question: "Access Control debug information identifies whether each element of an Access Control granted or denied access. The elements appear in the debug information in the order of evaluation. In which order are the elements of an Access Control evaluated?",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles"
        ],
        correct: [2],
        explanation: "Access Control elements are evaluated in the order: Roles, Conditions, Script. Reference: https://www.servicenow.com/community/grc-forum/order-of-execution-of-an-acl/mp/1311962/highlight/tru"
    },
    {
        question: "Which method is used to retrieve a property value in a script?",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()"
        ],
        correct: [0],
        explanation: "gs.getProperty() is used to retrieve a property value in a script. Reference: https://developer.servicenow.com/dev.do#!/learn/learning-plans/tokyo/new_to_servicenow/app_store_learnv2_a"
    },
    {
        question: "Which one of the following database operations cannot be controlled with Application Access?",
        type: "single",
        options: [
            "Update",
            "Delete",
            "Create",
            "Query"
        ],
        correct: [3],
        explanation: "Query is not a database operation controlled by Application Access; it is a GlideRecord method. Reference: Application Access"
    },
    {
        question: "Which platform feature can be used to determine the relationships between fields in an Import Set table to fields in an existing ServiceNow table?",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "Cl Relationship Builder"
        ],
        correct: [2],
        explanation: "A Transform Map determines the relationships between fields in an Import Set table and an existing ServiceNow table. Reference: N/A"
    },
    {
        question: "Which of the following features are available to Global applications? (Choose two.)",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer"
        ],
        correct: [0, 3],
        explanation: "Global applications can use Automated Test Framework and Flow Designer. Reference: Global vs Scoped Applications"
    },
    {
        question: "When creating an application through the Guided Application Creator, which of the following is a user experience option?",
        type: "single",
        options: [
            "Portal",
            "Mobile",
            "Self-service",
            "Workspace"
        ],
        correct: [1],
        explanation: "Mobile is a user experience option in Guided Application Creator. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/guided-app-creator/concept/guid"
    },
    {
        question: "Which one of the following is NOT a UI Action type?",
        type: "single",
        options: [
            "List choice",
            "Form button",
            "List banner button",
            "Form choice"
        ],
        correct: [0],
        explanation: "List choice is not a UI Action type; it is a field type. Reference: UI Actions"
    },
    {
        question: "When designing and creating a form, what do you create to organize fields on a form?",
        type: "single",
        options: [
            "Related lists",
            "Tabs",
            "Sections",
            "Buttons"
        ],
        correct: [2],
        explanation: "Sections are used to organize fields on a form. Reference: Form sections"
    },
    {
        question: "Which actions can a Business Rule take without scripting?",
        type: "single",
        options: [
            "Set field values and query the database",
            "Set field values and generate an event",
            "Set field values and write to the system log",
            "Set field values and add message"
        ],
        correct: [1],
        explanation: "A Business Rule can set field values and generate an event without scripting. Reference: Use business rules and client scripts to control field values"
    },
    {
        question: "Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')"
        ],
        correct: [1],
        explanation: "g_user.hasRoleExactly('catalog_admin') returns true only if the user has exactly the catalog_admin role. Reference: ServiceNow Docs - GlideUser API"
    },
    {
        question: "Access Control debug information identification whether each element of an Access Control granted or denied access. The elements of an Access Control evaluated?",
        type: "single",
        options: [
            "Conditions, Script, Roles",
            "Script, Conditions, Roles",
            "Conditions, Roles, Script",
            "Roles, Conditions, Script"
        ],
        correct: [3],
        explanation: "Access Control elements are evaluated in the order: Roles, Conditions, Script. Reference: Access control rules"
    },
    {
        question: "When configuring an Access Control which has no condition or script, which one of the following statements is NOT true?",
        type: "single",
        options: [
            "table.* will grant access to every field in a record",
            "table.None will grant access to every record on the table",
            "table.field will grant access to a specific field in a record",
            "table.id will grant access to a specific record on the table"
        ],
        correct: [3],
        explanation: "table.id does not grant access to a specific record; a condition or script is needed to match the record ID. Reference: Access Control rules"
    },
    {
        question: "What is the Event Registry?",
        type: "single",
        options: [
            "A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated",
            "A Workflow which is launched every time an Event is generated; used to debug Events",
            "The method used in server side scripts to generate Events and pass parameters",
            "The Event Log which lists all Events that have been generated"
        ],
        correct: [0],
        explanation: "The Event Registry is a table storing definitions of all Events in ServiceNow. Reference: Event Registry - ServiceNow Docs"
    },
    {
        question: "To see what scripts, reports, and other application artifacts will be in a published application:",
        type: "single",
        options: [
            "Enter the name of the Application in the Global search field",
            "Open the list of Update Sets for the instance",
            "Examine the Application Files Related List in the application to be published",
            "Open the artifact records individually to verify the value in the Application field"
        ],
        correct: [2],
        explanation: "The Application Files Related List shows all artifacts in a published application. Reference: Publish an Application"
    },
    {
        question: "When creating a table in a privately-scoped application, which four Access Controls are created for the table?",
        type: "single",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update"
        ],
        correct: [1],
        explanation: "The four Access Controls created are Create, Delete, Read, and Write. Reference: Access Control rules"
    },
    {
        question: "Which server-side API debug log method is available for scoped applications?",
        type: "single",
        options: [
            "gs.print()",
            "gs.log()",
            "gs.debuglog()",
            "gs.info()"
        ],
        correct: [3],
        explanation: "gs.info() is available for logging in scoped applications. Reference: Debugging best practices"
    },
    {
        question: "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
        type: "single",
        options: [
            "GlideRecord and current",
            "GlideUser and GlideRecord",
            "GlideSystem and GlideRecord",
            "GlideSystem and current"
        ],
        correct: [2],
        explanation: "GlideSystem and GlideRecord can be used in Scheduled Script Execution scripts. Reference: https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_administrator/app_store_lea"
    },
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
        explanation: "Sections are not added by dragging from the Field Types tab; you use the Add Section button instead. Reference: https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/form-administration/concept"
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
        explanation: "The 'Create a user' test step in ATF creates a temporary user with specified roles and groups. Reference: Automated Test Framework test steps"
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
        explanation: "Using the 'Add to Service Catalog' Related Link is the fastest way to create a Record Producer. Reference: Create a record producer"
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
        explanation: "There is no 'Data' data type; the correct type for date and time is Date/Time. Reference: Field types"
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
        explanation: "Tables can be created by uploading a spreadsheet, extending a table, or creating a custom table. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/app-engine-studio/task/create-tab"
    },
    {
        question: "Which of the following provides a graphical representation of the relationships between tables?",
        type: "single",
        options: [
            "Schema map",
            "Dependency view",
            "Graphical User Interface",
            "Map source report"
        ],
        correct: [0],
        explanation: "The Schema map provides a graphical representation of table relationships. Reference: https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/table-administration/concept"
    },
    {
        question: "Which of the following is true for the Application Picker and Application Scope?",
        type: "single",
        options: [
            "Selecting application from the Application Picker does not set the Application Scope",
            "Selecting Global in the Application Picker sets the Application Scope to incident",
            "Global is a reserved application which does not appear in the Application Picker",
            "Selecting an application from the Application Picker sets the Application Scope"
        ],
        correct: [3],
        explanation: "Selecting an application from the Application Picker sets the Application Scope. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_Sele"
    },
    {
        question: "Which one of the following is NOT a purpose of application scoping?",
        type: "single",
        options: [
            "Provide a relationship between application artifacts",
            "Provide a way of tracking the user who developed an application",
            "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
            "Provide controls for how scripts from another scope can alter tables in a scoped application"
        ],
        correct: [1],
        explanation: "Application scoping does not track the user who developed an application. Reference: Product Documentation | ServiceNow"
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
        explanation: "An application can respond to events via Script Actions or Email Notifications. Reference: https://developer.servicenow.com/dev.do#!/learn/learning-plans/tokyo/new_to_servicenow/app_store_learnv2_a"
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
        explanation: "Client-side scripts manage forms and form fields, controlling UI behavior. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/script/server-scripting/concept/c_Serve"
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
        question: "How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?",
        type: "single",
        options: [
            "You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access",
            "Set the Accessible from field value to All application scopes and de-select the Can create option",
            "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option",
            "Set the Accessible from field value to This application scope only"
        ],
        correct: [3],
        explanation: "Setting Accessible from to 'This application scope only' prevents other scopes from creating records. Reference: Application Access"
    },
    {
        question: "Which of the following methods are useful in Access Control scripts?",
        type: "single",
        options: [
            "g_user.hasRole() and current.isNewRecord()",
            "gs.hasRole() and current.isNewRecord()",
            "g_user.hasRole() and current.isNew()",
            "gs.hasRole() and current.isNew()"
        ],
        correct: [1],
        explanation: "gs.hasRole() and current.isNewRecord() are server-side methods useful in Access Control scripts. Reference: Access Control scripts"
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
        explanation: "Outbound Email is an action, not a trigger type in Flow Designer. Reference: Flow Designer Trigger Types"
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
        explanation: "Scheduled Script Executions are server-side and cannot run client-side scripts. Reference: Scheduled Script Execution"
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
        explanation: "Testing a flow with rollback is supported by ATF, not Flow Designer. Reference: Flow Designer"
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
        explanation: "The Application Picker allows users to choose an application to edit and set its scope. Reference: https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/concept/c_Applicati"
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
        explanation: "Email Notifications configure the recipients, content, and timing. Reference: https://docs.servicenow.com/bundle/tokyo-servicenow-platform/page/administer/notification/task/t_CreateANoti"
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
        explanation: "gs.log() is a server-side debugging method, not for client-side scripts. Reference: Debugging Client Scripts"
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
        explanation: "GlideUser (g_user) is a client-side API for user information. Reference: GlideUser object (g_user)"
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
    },
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
            ? `<span class="correct">Correct: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}</span><br><div class="explanation">${item.explanation}</div>`
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
