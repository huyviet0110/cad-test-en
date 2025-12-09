// Dữ liệu câu hỏi
const quizData = [
  {
    question: 'What is the minimum Snowflake edition that has column-level security enabled?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake'],
    correct: [1],
    explanation: 'Correct Answer: B. Enterprise',
  },
  {
    question: 'What is the minimum Snowflake edition required to create a materialized view?',
    type: 'single',
    options: [
      'Standard Edition',
      'Enterprise Edition',
      'Business Critical Edition',
      'Virtual Private Snowflake Edition',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Enterprise Edition',
  },
  {
    question: 'What is the minimum Snowflake edition required to use Dynamic Data Masking?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Correct Answer: B. Enterprise',
  },
  {
    question:
      'What computer language can be selected when creating User-Defined Functions (UDFs) using the Snowpark API?',
    type: 'single',
    options: ['Swift', 'JavaScript', 'Python', 'SQL'],
    correct: [2],
    explanation: 'Correct Answer: C. Python',
  },
  {
    question:
      'When referring to User-Defined Function (UDF) names in Snowflake, what does the term overloading mean?',
    type: 'single',
    options: [
      'There are multiple SQL UDFs with the same names and the same number of arguments.',
      'There are multiple SQL UDFs with the same names and the same number of argument types.',
      'There are multiple SQL UDFs with the same names but with a different number of arguments or argument types.',
      'There are multiple SQL UDFs with different names but the same number of arguments or argument types.',
    ],
    correct: [2],
    explanation:
      'Correct Answer: C. There are multiple SQL UDFs with the same names but with a different number of arguments or argument types.',
  },
  {
    question: 'What can a Snowflake user do in the Admin area of Snowsight?',
    type: 'single',
    options: [
      'Analyze query performance.',
      'Write queries and execute them.',
      'Provide an overview of the listings in the Snowflake Marketplace.',
      'Connect to Snowflake partners to explore extended functionality.',
    ],
    correct: [3],
    explanation:
      'Correct Answer: D. Connect to Snowflake partners to explore extended functionality.',
  },
  {
    question:
      'What metadata does Snowflake store concerning all rows stored in a micro-partition? (Choose two.)',
    type: 'multiple',
    options: [
      'A count of the number of total values in the micro-partition',
      'The range of values for each partition in the micro-partition',
      'The range of values for each of the rows in the micro-partition',
      'The range of values for each of the columns in the micro-partition',
      'The number of distinct values for each column in the micro-partition',
    ],
    correct: [3, 4],
    explanation: 'Correct Answer: D and E',
  },
  {
    question:
      'What is the expiration period for a file URL used to access unstructured data in cloud storage?',
    type: 'single',
    options: [
      'The remainder of the session',
      'An unlimited amount of time',
      'The length of time specified in the expiration_time argument',
      'The same length of time as the expiration period for the query results cache',
    ],
    correct: [1],
    explanation: 'Correct Answer: C. The length of time specified in the expiration_time argument',
  },
  {
    question: 'Which features are included in Snowsight? (Choose two.)',
    type: 'multiple',
    options: [
      'Worksheet sharing',
      'Referencing SnowSQL',
      'Exploring the Snowflake Marketplace',
      'Changing the Snowflake account cloud provider',
      'Downloading query result data larger than 100 MB',
    ],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'How long can a data consumer who has a pre-signed URL access data files using Snowflake?',
    type: 'single',
    options: [
      'Indefinitely',
      'Until the result_cache expires',
      'Until the retention_time is met',
      'Until the expiration_time is exceeded',
    ],
    correct: [3],
    explanation: 'Correct Answer: D. Until the expiration_time is exceeded',
  },
  {
    question:
      'What happens when a Snowflake user changes the data retention period at the schema level?',
    type: 'single',
    options: [
      'All child objects will retain data for the new retention period.',
      'All child objects that do not have an explicit retention period will automatically inherit the new retention period.',
      'All child objects with an explicit retention period will be overridden with the new retention period.',
      'All explicit child object retention periods will remain unchanged.',
    ],
    correct: [1],
    explanation:
      'Correct Answer: B. All child objects that do not have an explicit retention period will automatically inherit the new retention period.',
  },
  {
    question:
      'Which Snowflake function is maintained separately from the data and helps to support features such as Time Travel, Secure Data Sharing, and pruning?',
    type: 'single',
    options: ['Column compression', 'Data clustering', 'Micro-partitioning', 'Metadata management'],
    correct: [3],
    explanation: 'Correct Answer: D. Metadata management',
  },
  {
    question:
      "Which statements describe benefits of Snowflake's separation of compute and storage? (Choose two.)",
    type: 'multiple',
    options: [
      'The separation allows independent scaling of computing resources.',
      'The separation ensures consistent data encryption across all virtual data warehouses.',
      'The separation supports automatic conversion of semi-structured data into structured data for advanced data analysis.',
      'Storage volume growth and compute usage growth can be tightly coupled.',
      'Compute can be scaled up or down without the requirement to add more storage.',
    ],
    correct: [0, 4],
    explanation: 'Correct Answer: A and E',
  },
  {
    question: 'What is the primary purpose of a directory table in Snowflake?',
    type: 'single',
    options: [
      'To store actual data from external stages',
      'To automatically expire file URLs for security',
      'To manage user privileges and access control',
      'To store file-level metadata about data files in a stage',
    ],
    correct: [3],
    explanation: 'Correct Answer: D. To store file-level metadata about data files in a stage',
  },
  {
    question: 'Which Snowflake table objects can be shared with other accounts? (Choose two.)',
    type: 'multiple',
    options: [
      'Temporary tables',
      'Permanent tables',
      'Transient tables',
      'External tables',
      'User-Defined Table Functions (UDTFs)',
    ],
    correct: [1, 3],
    explanation: 'Correct Answer: B and D',
  },
  {
    question:
      'Which metadata table will store the storage utilization information even for dropped tables?',
    type: 'single',
    options: [
      'DATABASE_STORAGE_USAGE_HISTORY',
      'TABLE_STORAGE_METRICS',
      'STORAGE_DAILY_HISTORY',
      'STAGE_STORAGE_USAGE_HISTORY',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. TABLE_STORAGE_METRICS',
  },
  {
    question: 'How is role hierarchy established in Snowflake?',
    type: 'single',
    options: [
      'By assigning users to roles',
      'By default when a role is created',
      'By granting one role to another role',
      'By transferring ownership of one role to another role',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. By granting one role to another role',
  },
  {
    question: 'What commands can be used to see what files are stored in a stage? (Choose two.)',
    type: 'multiple',
    options: ['LIST', 'SELECT', 'LS', 'GET', 'DESCRIBE'],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'Which stages are created by default, with no need to use the CREATE STAGE command? (Choose two.)',
    type: 'multiple',
    options: ['External stage', 'Internal stage', 'Named stage', 'Table stage', 'User stage'],
    correct: [3, 4],
    explanation: 'Correct Answer: D and E',
  },
  {
    question:
      'While working with unstructured data, which file function generates a Snowflake-hosted file URL to a staged file using the stage name and relative file path as inputs?',
    type: 'single',
    options: [
      'BUILD_STAGE_FILE_URL',
      'GET_ABSOLUTE_PATH',
      'BUILD_SCOPED_FILE_URL',
      'GET_PRESIGNED_URL',
    ],
    correct: [0],
    explanation: 'Correct Answer: A. BUILD_STAGE_FILE_URL',
  },
  {
    question: 'Who can create and manage reader accounts? (Choose two.)',
    type: 'multiple',
    options: [
      'A user with ACCOUNTADMIN role',
      'A user with SECURITYADMIN role',
      'A user with SYSADMIN role',
      'A user with ORGADMIN role',
      'A user with CREATE ACCOUNT privilege',
    ],
    correct: [0, 4],
    explanation: 'Correct Answer: A and E',
  },
  {
    question:
      'Which command allows for continuous loading of data files as soon as they are available in a stage?',
    type: 'single',
    options: ['COPY INTO', 'PUT', 'CREATE PIPE', 'GET'],
    correct: [2],
    explanation: 'Correct Answer: C. CREATE PIPE',
  },
  {
    question:
      'What is an advantage of using database roles instead of granting privileges on objects directly to a share in Snowflake?',
    type: 'single',
    options: [
      'Easier management of cross-region data sharing',
      'Greater flexibility in including objects from multiple databases',
      'More control over object-level access for different user groups',
      'Reduction in the number of shares required for different objects in the same database',
    ],
    correct: [2],
    explanation:
      'Correct Answer: C. More control over object-level access for different user groups',
  },
  {
    question:
      'What is the order of precedence (highest to lowest) of network policies when applied at the account, user, and security integrations layers?',
    type: 'single',
    options: [
      'Account, user, security integration',
      'Account, security integration, user',
      'User, security integration, account',
      'User, account, security integration',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. User, security integration, account',
  },
  {
    question:
      'Which type of Snowflake virtual warehouse provides 16 times the memory for each node, and is recommended for larger workloads like Machine Learning (ML) training?',
    type: 'single',
    options: [
      'A size 6XL warehouse',
      'A standard warehouse',
      'A multi-cluster warehouse',
      'A Snowpark-optimized warehouse',
    ],
    correct: [3],
    explanation: 'Correct Answer: D. Snowpark-optimized warehouse',
  },
  {
    question: 'Which common query issues can be identified by the Query Profile? (Choose two.)',
    type: 'multiple',
    options: [
      'Insufficient credit quota',
      'Inefficient query pruning',
      'Excessive query pruning',
      'Exploding joins',
      'Credit usage that exceeds a set threshold',
    ],
    correct: [1, 3],
    explanation: 'Correct Answer: B and D',
  },
  {
    question: 'In Snowflake, what allows users to perform recursive queries?',
    type: 'single',
    options: ['QUALIFY', 'LATERAL', 'PIVOT', 'CONNECT BY'],
    correct: [3],
    explanation: 'Correct Answer: D. CONNECT BY',
  },
  {
    question:
      'A user wants to create objects within a schema but wants to restrict other users’ ability to grant privileges on these objects. What configuration should be used to create the schema?',
    type: 'single',
    options: [
      'Use a regular (non-managed) schema.',
      'Use a managed access schema.',
      'Use a transient schema.',
      'Set the Default_DDL_Collation parameter.',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Use a managed access schema.',
  },
  {
    question:
      'What is the MOST cost-effective way to resolve memory spillage in a virtual warehouse?',
    type: 'single',
    options: [
      'Enable automatic clustering.',
      'Enable the query acceleration service.',
      'Enable the search optimization service.',
      'Convert to a Snowpark-optimized warehouse.',
    ],
    correct: [3],
    explanation: 'Correct Answer: D. Convert to a Snowpark-optimized warehouse.',
  },
  {
    question: 'What objects in Snowflake are supported by Dynamic Data Masking? (Choose two.)',
    type: 'multiple',
    options: ['Views', 'Materialized views', 'Tables', 'External tables', 'Future grants'],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'A user has created a dashboard in Snowflake and wants to share it with colleagues. How can the dashboard be shared?',
    type: 'single',
    options: [
      'By creating a private Data Exchange',
      'By using the share option within Snowsight',
      'By using a Direct Share with another account',
      'By creating a listing on Snowflake Marketplace',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. By using the share option within Snowsight',
  },
  {
    question:
      'When would Snowsight automatically detect if a target account is in a different region and enable cross-cloud auto-fulfillment?',
    type: 'single',
    options: [
      'When using a paid listing on the Snowflake Marketplace',
      'When using a private listing on the Snowflake Marketplace',
      'When using a personalized listing on the Snowflake Marketplace',
      'When using a Direct Share with another account',
    ],
    correct: [1],
    explanation: 'Correct Answer: A. When using a paid listing on the Snowflake Marketplace',
  },
  {
    question:
      'Which languages require that User-Defined Function (UDF) handlers be written inline? (Choose two.)',
    type: 'multiple',
    options: ['Java', 'Javascript', 'Scala', 'Python', 'SQL'],
    correct: [1, 4],
    explanation: 'Correct Answer: B and E',
  },
  {
    question:
      'Which task privilege does a Snowflake role need in order to suspend or resume a task?',
    type: 'single',
    options: ['USAGE', 'OPERATE', 'MONITOR', 'OWNERSHIP'],
    correct: [1],
    explanation: 'Correct Answer: B. OPERATE',
  },
  {
    question: 'What is a directory table in Snowflake?',
    type: 'single',
    options: [
      'A separate database object that is used to store file-level metadata.',
      'An object layered on a stage that is used to store file-level metadata.',
      'A database object with grantable privileges for unstructured data tasks.',
      'A Snowflake table specifically designed for storing unstructured files.',
    ],
    correct: [1],
    explanation:
      'Correct Answer: B. An object layered on a stage that is used to store file-level metadata.',
  },
  {
    question: 'What factors impact storage costs in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'The account type',
      'The storage file format',
      'The cloud region used by the account',
      'The type of data being stored',
      'The cloud platform being used',
    ],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'Which ACCOUNT_USAGE schema database role provides visibility into policy-related information?',
    type: 'single',
    options: ['USAGE_VIEWER', 'GOVERNANCE_VIEWER', 'OBJECT_VIEWER', 'SECURITY_VIEWER'],
    correct: [1],
    explanation: 'Correct Answer: B. GOVERNANCE_VIEWER',
  },
  {
    question:
      'How should clustering be used to optimize the performance of queries that run on a very large table?',
    type: 'single',
    options: [
      'Manually re-cluster the table regularly.',
      'Choose one high cardinality column as the clustering key.',
      'Use the column that is most-frequently used in query select clauses as the clustering key.',
      'Assess the average table depth to identify how clustering is impacting the query.',
    ],
    correct: [3],
    explanation:
      'Correct Answer: D. Assess the average table depth to identify how clustering is impacting the query.',
  },
  {
    question: 'Which privilege must be granted by one role to another role, and cannot be revoked?',
    type: 'single',
    options: ['MONITOR', 'OPERATE', 'OWNERSHIP', 'ALL'],
    correct: [2],
    explanation: 'Correct Answer: C. OWNERSHIP',
  },
  {
    question:
      'How can performance be optimized for a query that returns a small amount of data from a very large base table?',
    type: 'single',
    options: [
      'Use clustering keys',
      'Create materialized views',
      'Use the search optimization service',
      'Use the query acceleration service',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. Use the search optimization service',
  },
  {
    question:
      '[Image question - skip OR read docx file] A column named “Data” contains VARIANT data and stores values as follows: [image or example not shown, but context is JSON extraction]. How will Snowflake extract the employee’s name from the column data?',
    type: 'single',
    options: [
      'Data:employee.name',
      'DATA:employee.name',
      'data:Employee.name',
      'data:employee.name',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. data:Employee.name',
  },
  {
    question:
      'Use of which Snowflake function is recommended when unloading data from a relational table into a JSON file?',
    type: 'single',
    options: ['TO_JSON', 'TO_VARIANT', 'OBJECT_INSERT', 'OBJECT_CONSTRUCT'],
    correct: [3],
    explanation: 'Correct Answer: D. OBJECT_CONSTRUCT',
  },
  {
    question:
      'Which command should be used to generate a single file when unloading data from a Snowflake table into a file?',
    type: 'single',
    options: ['PARTITION BY <  expr  > ', 'MAX_FILE_SIZE = 0', 'SINGLE = TRUE', 'OVERWRITE = TRUE'],
    correct: [2],
    explanation: 'Correct Answer: C. SINGLE = TRUE',
  },
  {
    question: 'Which function can be used to convert semi-structured data into rows and columns?',
    type: 'single',
    options: ['TABLE', 'FLATTEN', 'PARSE_JSON', 'JSON_EXTRACT_PATH_TEXT'],
    correct: [1],
    explanation: 'Correct Answer: B. FLATTEN',
  },
  {
    question:
      'What user setting can be configured to disable Multi-Factor Authentication (MFA) for a Snowflake user? (Choose two.)',
    type: 'multiple',
    options: [
      'DISABLE_MFA',
      'MINS_TO_BYPASS_MFA',
      'PASSWORD',
      'MINS_TO_UNLOCK',
      'MUST_CHANGE_PASSWORD',
    ],
    correct: [0, 1],
    explanation: 'Correct Answer: A and B',
  },
  {
    question: 'Which table type has a Fail-safe period of 7 days?',
    type: 'single',
    options: ['Temporary table', 'Transient table', 'Permanent table', 'External table'],
    correct: [2],
    explanation: 'Correct Answer: C. Permanent table',
  },
  {
    question: 'How does Snowflake enable OAuth?',
    type: 'single',
    options: [
      'By creating an external integration',
      'By configuring a security integration',
      'By establishing IP allowed lists and IP blocked lists',
      'By using SnowSQL to enable an external OAuth using the Snowflake protocol',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. By configuring a security integration',
  },
  {
    question:
      'Which type of workload traditionally benefits from the use of the query acceleration service?',
    type: 'single',
    options: [
      'Workloads with a predictable data volume for each query',
      'Workloads that include on-demand data analyses',
      'Queries with small scans and non-selective filters',
      'Queries that do not have filters or aggregation',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Workloads that include on-demand data analyses',
  },
  {
    question:
      'Which Snowflake object is supported by both database replication and replication groups?',
    type: 'single',
    options: ['Pipes', 'Users', 'Stages', 'Materialized views'],
    correct: [3],
    explanation: 'Correct Answer: D. Materialized views',
  },
  {
    question:
      'When unloading data, which combination of parameters should be used to differentiate between empty strings and NULL values? (Choose two.)',
    type: 'multiple',
    options: [
      'ESCAPE_UNENCLOSED_FIELD',
      'REPLACE_INVALID_CHARACTERS',
      'FIELD_OPTIONALLY_ENCLOSED_BY',
      'EMPTY_FIELD_AS_NULL',
      'SKIP_BLANK_LINES',
    ],
    correct: [2, 3],
    explanation: 'Correct Answer: C and D',
  },
  {
    question: 'Which role must be used to create resource monitors?',
    type: 'single',
    options: ['SECURITYADMIN', 'ACCOUNTADMIN', 'SYSADMIN', 'ORGADMIN'],
    correct: [1],
    explanation: 'Correct Answer: B. ACCOUNTADMIN',
  },
  {
    question: 'What step does Snowflake recommend when loading data from a stage?',
    type: 'single',
    options: [
      'Use PURGE when using the COPY INTO command.',
      'Use REMOVE when using the COPY INTO command.',
      'Use the LOAD HISTORY function to view the status of loaded files.',
      'Use the COPY HISTORY function to update the status of loaded files.',
    ],
    correct: [0],
    explanation: 'Correct Answer: A. Use PURGE when using the COPY INTO command.',
  },
  {
    question:
      'How can a user MINIMIZE Continuous Data Protection costs when using large, high-churn, dimension tables?',
    type: 'single',
    options: [
      'Create transient tables and periodically copy them to permanent tables.',
      'Create temporary tables and periodically copy them to permanent tables.',
      'Create regular tables with extended Time Travel and Fail-safe settings.',
      'Create regular tables with default Time Travel and Fail-safe settings.',
    ],
    correct: [0],
    explanation:
      'Correct Answer: A. Create transient tables and periodically copy them to permanent tables.',
  },
  {
    question:
      'Which Snowsight feature can be used to perform data manipulations and transformations using a programming language?',
    type: 'single',
    options: ['SnowSQL', 'Dashboards', 'Python worksheets', 'Provider Studio'],
    correct: [2],
    explanation: 'Correct Answer: C. Python worksheets',
  },
  {
    question:
      "In Snowflake's data security framework, how does column-level security contribute to the protection of sensitive information? (Choose two.)",
    type: 'multiple',
    options: [
      'Implementation of column-level security will optimize query performance.',
      'Column-level security supports encryption of the entire database.',
      'Column-level security ensures that only the table owner can access the data.',
      'Column-level security limits access to specific columns within a table based on user privileges.',
      'Column-level security allows the application of a masking policy to a column within a table or view.',
    ],
    correct: [3, 4],
    explanation: 'Correct Answer: D and E',
  },
  {
    question: 'How does Snowflake utilize clustering information to improve query performance?',
    type: 'single',
    options: [
      'It prunes unnecessary micro-partitions based on clustering metadata.',
      'It compresses the data within micro-partitions for faster querying.',
      'It automatically allocates additional resources to improve query execution.',
      'It organizes clustering information to speed-up data retrieval from storage.',
    ],
    correct: [0],
    explanation:
      'Correct Answer: A. It prunes unnecessary micro-partitions based on clustering metadata.',
  },
  {
    question:
      'How can staged files be removed during data loading once the files have loaded successfully?',
    type: 'single',
    options: [
      'Use the DROP command.',
      'Use the PURGE copy option.',
      'Use the FORCE = TRUE parameter.',
      'Use the LOAD_UNCERTAIN_FILES copy option.',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Use the PURGE copy option.',
  },
  {
    question: 'What objects can be cloned within Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Schemas',
      'Users',
      'External tables',
      'Internal named stages',
      'External named stages',
    ],
    correct: [0, 4],
    explanation: 'Correct Answer: A and E',
  },
  {
    question: 'What can be used to process unstructured data?',
    type: 'single',
    options: ['External tables', 'The COPY INTO command', 'External functions', 'Snowpipe'],
    correct: [2],
    explanation: 'Correct Answer: A. External tables',
  },
  {
    question: 'Which type of workload is recommended for Snowpark-optimized virtual warehouses?',
    type: 'single',
    options: [
      'Workloads with ad hoc analytics',
      'Workloads that have large memory requirements',
      'Workloads with unpredictable data volumes for each query',
      'Workloads that are queried with small table scans and selective filters',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Workloads that have large memory requirements',
  },
  {
    question:
      'What is the benefit of using the STRIP_OUTER_ARRAY parameter with the COPY INTO command when loading data from a JSON file into a table?',
    type: 'single',
    options: [
      'It flattens multiple arrays into a single array.',
      'It removes the outer array structure and loads separate rows of data.',
      'It transforms a pivoted table into an array.',
      'It tokenizes each data string using the defined delimiters.',
    ],
    correct: [1],
    explanation:
      'Correct Answer: B. It removes the outer array structure and loads separate rows of data.',
  },
  {
    question:
      'A query containing a WHERE clause is running longer than expected. The Query Profile shows that all micro-partitions being scanned. How should this query be optimized?',
    type: 'single',
    options: [
      'Create a view on the table.',
      'Add a clustering key to the table.',
      'Add a LIMIT clause to the query.',
      'Add a Dynamic Data Masking policy to the table.',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Add a clustering key to the table.',
  },
  {
    question:
      'Which access control entity in Snowflake can be created as part of a hierarchy within an account?',
    type: 'single',
    options: ['Securable object', 'Role', 'Privilege', 'User'],
    correct: [1],
    explanation: 'Correct Answer: B. Role',
  },
  {
    question: 'When an object is created in Snowflake, who owns the object?',
    type: 'single',
    options: [
      'The public role',
      "The user's default role",
      'The current active primary role',
      'The owner of the parent schema',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. The current active primary role',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition that must be used in order to see the ACCESS_HISTORY view?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Correct Answer: B. Enterprise',
  },
  {
    question:
      'Which role is responsible for managing the billing and credit data within Snowflake?',
    type: 'single',
    options: ['ORGADMIN', 'ACCOUNTADMIN', 'SYSADMIN', 'SECURITYADMIN'],
    correct: [1],
    explanation: 'Correct Answer: B. ACCOUNTADMIN',
  },
  {
    question:
      'What can be used to identify the database, schema, stage, and file path to a set of files, and to allow a role that has sufficient privileges on the stage to access the files?',
    type: 'single',
    options: ['A scoped URL', 'A file URL', 'A pre-signed URL', 'A directory table'],
    correct: [1],
    explanation: 'Correct Answer: B. A file URL',
  },
  {
    question:
      'Which command is used to remove files from either external cloud storage or an internal stage?',
    type: 'single',
    options: ['DELETE', 'REMOVE', 'TRUNCATE', 'DROP'],
    correct: [1],
    explanation: 'Correct Answer: B. REMOVE',
  },
  {
    question:
      'How does Snowflake recommend defining a clustering key on a high-cardinality column that includes a 15 digit ID numbered column, ID_NUMBER?',
    type: 'single',
    options: ['TRUNC(ID_NUMBER, -6)', 'TRUNC(ID_NUMBER, 5)', 'ID_NUMBER*100', 'TO_CHAR(ID_NUMBER)'],
    correct: [0],
    explanation: 'Correct Answer: A. TRUNC(ID_NUMBER, -6)',
  },
  {
    question:
      'While unloading data into a stage, how can the user ensure that the output will be a single file?',
    type: 'single',
    options: [
      'Use the COPY option FILES=SINGLE.',
      'Use the COPY option SINGLE=TRUE.',
      'Use the GET option SINGLE=TRUE.',
      'Use the GET option FILES=SINGLE.',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. Use the COPY option SINGLE=TRUE.',
  },
  {
    question:
      'Which query types will have significant performance improvement when run using the search optimization service? (Choose two.)',
    type: 'multiple',
    options: [
      'Range searches',
      'Equality searches',
      'Substring searches',
      'Queries with IN predicates',
      'Queries with aggregation',
    ],
    correct: [1, 3],
    explanation: 'Correct Answer: B and D',
  },
  {
    question: 'Which Query Profile operator is considered a DML operator?',
    type: 'single',
    options: ['ExternalScan', 'Flatten', 'Merge', 'Sort'],
    correct: [2],
    explanation: 'Correct Answer: C. Merge',
  },
  {
    question: 'Masking policies are created at what level in Snowflake?',
    type: 'single',
    options: ['Table', 'Column', 'Schema', 'Database'],
    correct: [2],
    explanation: 'Correct Answer: B. Column',
  },
  {
    question:
      'What would cause different results to be returned when running the same query twice?',
    type: 'single',
    options: [
      'SAMPLE is used and the seed is set.',
      'SAMPLE is used and the seed is not set.',
      'Fraction-based sampling is used.',
      'Fixed-size sampling is used.',
    ],
    correct: [1],
    explanation: 'Correct Answer: B. SAMPLE is used and the seed is not set.',
  },
  {
    question: 'What are type predicates used for?',
    type: 'single',
    options: [
      'Extracting data from a VARIANT column',
      'Casting a value in a VARIANT column to a particular data type',
      'Determining if a value in a VARIANT column is a particular data type',
      'Manipulating objects and arrays in a VARIANT column',
    ],
    correct: [2],
    explanation:
      'Correct Answer: C. Determining if a value in a VARIANT column is a particular data type',
  },
  {
    question:
      'Which table function is used to perform additional processing on the results of a previously-run query?',
    type: 'single',
    options: ['QUERY_HISTORY', 'RESULT_SCAN', 'DESCRIBE_RESULTS', 'QUERY_HISTORY_BY_SESSION'],
    correct: [1],
    explanation: 'Correct Answer: B. RESULT_SCAN',
  },
  {
    question: 'Which actions can be performed using a resource monitor in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Monitor the performance of individual queries in real-time.',
      'Automatically allocate more storage space to a virtual warehouse.',
      'Modify the queries being executed within a virtual warehouse.',
      'Suspend a virtual warehouse when its credit usage reaches a defined limit.',
      'Trigger a notification to account administrators when credit usage reaches a specified threshold.',
    ],
    correct: [3, 4],
    explanation: 'Correct Answer: D and E',
  },
  {
    question:
      'Which Snowflake native tool can be used to diagnose and troubleshoot network connections?',
    type: 'single',
    options: ['SnowSQL', 'Snowflake Python connector', 'Snowsight', 'SnowCD'],
    correct: [3],
    explanation: 'Correct Answer: D. SnowCD',
  },
  {
    question:
      'Why would a Snowflake user load JSON data into a VARIANT column instead of a string column?',
    type: 'single',
    options: [
      'A VARIANT column is more secure than a string column.',
      'A VARIANT column compresses data and a string column does not.',
      'A VARIANT column can be used to create a data hierarchy and a string column cannot.',
      'A VARIANT column will have a better query performance than a string column.',
    ],
    correct: [2],
    explanation:
      'Correct Answer: C. A VARIANT column can be used to create a data hierarchy and a string column cannot.',
  },
  {
    question: 'How can a 5 GB table be downloaded into a single file MOST efficiently?',
    type: 'single',
    options: [
      'Keep the default MAX_FILE_SIZE to 16 MB.',
      'Set the default MAX_FILE_SIZE to 5 GB.',
      'Set the SINGLE parameter to TRUE.',
      'Use a regular expression in the stage specifications of the COPY command.',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. Set the SINGLE parameter to TRUE.',
  },
  {
    question: 'Which security models are used in Snowflake to manage access control? (Choose two.)',
    type: 'multiple',
    options: [
      'Discretionary Access Control (DAC)',
      'Identity Access Management (IAM)',
      'Mandatory Access Control (MAC)',
      'Role-Based Access Control (RBAC)',
      'Security Assertion Markup Language (SAML)',
    ],
    correct: [0, 3],
    explanation: 'Correct Answer: A and D',
  },
  {
    question:
      'Which Snowflake governance feature allows users to assign metadata labels to improve data governance and database access control?',
    type: 'single',
    options: ['Secure functions', 'Secure views', 'Object tagging', 'Row-level security'],
    correct: [2],
    explanation: 'Correct Answer: C. Object tagging',
  },
  {
    question: 'What is the MINIMUM Snowflake edition that supports database replication?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [0],
    explanation: 'Correct Answer: B. Enterprise',
  },
  {
    question:
      'Which Snowflake function and command combination should be used to convert rows in a relational table to a single VARIANT column, and unload the rows into a file in JSON format? (Choose two.)',
    type: 'multiple',
    options: ['PUT', 'GET', 'COPY', 'EXPORT', 'OBJECT_CONSTRUCT'],
    correct: [2, 4],
    explanation: 'Correct Answer: C and E',
  },
  {
    question:
      'What Snowflake recommendation is designed to ensure that staged data is only loaded once?',
    type: 'single',
    options: [
      'Partitioning staged data files',
      'Loading only the most recently-staged data files',
      'Removing data files after loading',
      'Identifying and removing duplicates after each data load',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. Removing data files after loading',
  },
  {
    question:
      'Which privilege grants the ability to set a column-level security masking policy on a table or view column?',
    type: 'single',
    options: ['APPLY', 'CREATE', 'SET', 'MODIFY'],
    correct: [0],
    explanation: 'Correct Answer: A. APPLY',
  },
  {
    question:
      'When sharing data in Snowflake, what privileges does a Provider need to grant along with a share? (Choose two.)',
    type: 'multiple',
    options: [
      'USAGE on the specific tables in the database.',
      'MODIFY on the specific tables in the database.',
      'SELECT on the specific tables in the database.',
      'USAGE on the database and the schema containing the tables to share.',
      'OPERATE on the database and the schema containing the tables to share.',
    ],
    correct: [2, 3],
    explanation: 'Correct Answer: C and D',
  },
  {
    question: 'How can the Query Profile be used to troubleshoot a problematic query?',
    type: 'single',
    options: [
      'It will indicate if a virtual warehouse memory is too small to run the query.',
      'It will indicate if a user lacks the privileges needed to run the query.',
      'It will indicate if a virtual warehouse is in auto-scale mode.',
      'It will indicate if the user has enough Snowflake credits to run the query.',
    ],
    correct: [0],
    explanation:
      'Correct Answer: A. It will indicate if a virtual warehouse memory is too small to run the query.',
  },
  {
    question: 'Which data type can be used for floating-point numbers without losing precision?',
    type: 'single',
    options: ['BINARY', 'VARIANT', 'INTEGER', 'DOUBLE'],
    correct: [3],
    explanation: 'Correct Answer: D. DOUBLE',
  },
  {
    question:
      'Which data sharing option allows a Snowflake user to set up and manage a group of accounts and offer a share to that group?',
    type: 'single',
    options: ['Free listing', 'Paid listing', 'Direct share', 'Data Exchange'],
    correct: [3],
    explanation: 'Correct Answer: D. Data Exchange',
  },
  {
    question: 'What kind of authentication do Snowpipe REST endpoints use?',
    type: 'single',
    options: ['OAuth', 'Key-based', 'Username and password', 'Single Sign-On (SSO)'],
    correct: [1],
    explanation: 'Correct Answer: B. Key-based',
  },
  {
    question:
      'What are the possible values within a METADATA$ACTION column in a Snowflake stream? (Choose two.)',
    type: 'multiple',
    options: ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'UPSERT'],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition that offers data protection for extremely sensitive data, such as Protected Health Information (PHI)?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [2],
    explanation: 'Correct Answer: C. Business Critical',
  },
  {
    question:
      'What takes the highest precedence in Snowflake file format options, when specified in multiple locations during data loading?',
    type: 'single',
    options: [
      'The stage definition',
      'The table definition',
      'The use of a COPY INTO statement',
      'The use of a COPY INTO <  location  >  statement',
    ],
    correct: [2],
    explanation: 'Correct Answer: C. The use of a COPY INTO statement',
  },
  {
    question:
      'Which service or tool is a Command Line Interface (CLI) client used for connecting to Snowflake to execute SQL queries?',
    type: 'single',
    options: ['Snowsight', 'SnowCD', 'Snowpark', 'SnowSQL'],
    correct: [3],
    explanation: 'Correct Answer: D. SnowSQL',
  },
  {
    question:
      'What Snowflake objects can contain custom application logic written in JavaScript? (Choose two.)',
    type: 'multiple',
    options: ['Stored procedures', 'Stages', 'Tasks', 'Views', 'User-Defined Functions (UDFs)'],
    correct: [0, 4],
    explanation: 'Correct Answer: A and E',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition required to use the column-level security feature?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Correct Answer: B. Enterprise',
  },
  {
    question:
      'Which command should be used to assign a key to a Snowflake user who needs to connect using key pair authentication?',
    type: 'single',
    options: [
      "ALTER USER jsmith SET RSA_P8_KEY='MIIBIjANBgkqh...';",
      "ALTER USER jsmith SET ENCRYPTED_KEY='MIIBIjANBgkqh...';",
      "ALTER USER jsmith SET RSA_PRIVATE_KEY='MIIBIjANBgkqh...';",
      "ALTER USER jsmith SET RSA_PUBLIC_KEY='MIIBIjANBgkqh...';",
    ],
    correct: [3],
    explanation: "Correct Answer: D. ALTER USER jsmith SET RSA_PUBLIC_KEY='MIIBIjANBgkqh...';",
  },
  {
    question: 'Secured Data Sharing is allowed for which Snowflake database objects? (Choose two.)',
    type: 'multiple',
    options: [
      'Tables',
      'User-Defined Table Functions (UDTFs)',
      'Secure views',
      'Stored procedures',
      'Worksheets',
    ],
    correct: [0, 2],
    explanation: 'Correct Answer: A and C',
  },
  {
    question:
      'What optional properties can a Snowflake user set when creating a virtual warehouse? (Choose two.)',
    type: 'multiple',
    options: ['Auto-suspend', 'Cache size', 'Default role', 'Resource monitor', 'Storage size'],
    correct: [0, 3],
    explanation: 'Correct Answer: A and D',
  },
  {
    question: 'What is the purpose of the use of the VALIDATE command?',
    type: 'single',
    options: [
      'To view any queries that encountered an error',
      'To verify that a SELECT query will run without error',
      'To prevent a PUT statement from running if an error occurs',
      'To see all errors from a previously run COPY INTO <  table  > statement',
    ],
    correct: [3],
    explanation:
      'The VALIDATE command is used to see all errors from a previously run COPY INTO statement.',
  },
  {
    question: 'Which function is used to unload a relational table into a JSON file?',
    type: 'single',
    options: ['PARSE_JSON', 'JSON_EXTRACT_PATH_TEXT', 'OBJECT_CONSTRUCT', 'TO_JSON'],
    correct: [2],
    explanation: 'OBJECT_CONSTRUCT is used to build JSON from relational data during unloading.',
  },
  {
    question:
      'How can the ACCESS_HISTORY view in the ACCOUNT_USAGE schema be used to review the data governance settings for an account? (Choose two.)',
    type: 'multiple',
    options: [
      'Identify queries run by a particular user.',
      'Identify access to the roles given to a user.',
      'Identify SQL statements that failed to run.',
      'Identify objects that were modified by a query.',
      'Identify object dependencies.',
    ],
    correct: [0, 3],
    explanation:
      'ACCESS_HISTORY helps identify queries run by users and objects modified by queries.',
  },
  {
    question: 'Which command is used to unload data from a Snowflake table into a Snowflake stage?',
    type: 'single',
    options: ['GET', 'CREATE STAGE', 'COPY INTO <  location  > ', 'PUT'],
    correct: [2],
    explanation: 'COPY INTO <  location  >  is used to unload data from a table to a stage.',
  },
  {
    question:
      'What should an account administrator do to help a user log into Snowflake, if the user cannot authenticate using Multi-Factor Authentication (MFA)?',
    type: 'single',
    options: [
      'Set DISABLE_MFA to TRUE for the user.',
      'Set MINS_TO_BYPASS_MFA equal to 0 for the user.',
      'Set ALLOW_ID_TOKEN to FALSE for the user.',
      'Set ALLOW_CLIENT_MFA_CACHING to FALSE for the user.',
    ],
    correct: [0],
    explanation: 'Setting DISABLE_MFA = TRUE temporarily disables MFA for the user.',
  },
  {
    question: 'Which command can be executed from a reader account?',
    type: 'single',
    options: ['INSERT', 'CREATE SHARE', 'SHOW PROCEDURES', 'COPY INTO <  location  > '],
    correct: [3],
    explanation: 'Reader accounts have limited privileges; SHOW commands are allowed.',
  },
  {
    question:
      'Which command line parameter value can be pre-specified as an environment variable in SnowSQL?',
    type: 'single',
    options: ['HOST', 'VARIABLE', 'OPTION', 'MFA-PASSCODE'],
    correct: [0],
    explanation: 'HOST can be set as an environment variable in SnowSQL.',
  },
  {
    question:
      'Which command is used to determine the file name of each row of data from a staged file?',
    type: 'single',
    options: [
      'SHOW FILE FORMATS',
      'SELECT METADATA$FILE_CONTENT_KEY',
      'METADATA$FILE_ROW_NUMBER',
      'SELECT METADATA$FILENAME',
    ],
    correct: [3],
    explanation: 'METADATA$FILENAME returns the source file name for each row.',
  },
  {
    question: 'Which Snowflake feature improves the performance of point lookup queries?',
    type: 'single',
    options: [
      'Materialized views',
      'Automatic clustering',
      'Query acceleration service',
      'Search optimization service',
    ],
    correct: [3],
    explanation: 'Search optimization service significantly improves point lookup performance.',
  },
  {
    question: 'What is the impact of selecting one Snowflake edition over another? (Choose two.)',
    type: 'multiple',
    options: [
      'The edition will impact the unit costs for storage.',
      'The edition will impact which regions can be accessed by the accounts.',
      'The edition will determine the unit costs for the compute credits.',
      'The edition will impact the total allowed storage space.',
      'The edition will set a limit on the number of compute credits that can be consumed.',
    ],
    correct: [0, 2],
    explanation: 'Higher editions have different pricing for storage and compute credits.',
  },
  {
    question:
      'In a managed access schema, only the schema owner or a role with what privilege can help centralize privilege management?',
    type: 'single',
    options: ['USAGE', 'OPERATE', 'MANAGE GRANTS', 'IMPORTED PRIVILEGES'],
    correct: [2],
    explanation: 'MANAGE GRANTS privilege allows centralized control in managed schemas.',
  },
  {
    question:
      'A Snowflake user wants to design a series of transformations that need to be executed in a specific order, on a given schedule. What Snowflake objects should be used?',
    type: 'single',
    options: ['Pipes', 'Tasks', 'Streams', 'Sequences'],
    correct: [1],
    explanation: 'Tasks are used for scheduled, ordered execution of SQL or procedures.',
  },
  {
    question: 'Which command should be used to drop files from an internal or external stage?',
    type: 'single',
    options: ['DELETE', 'DROP', 'REMOVE', 'TRUNCATE'],
    correct: [2],
    explanation: 'REMOVE command deletes files from stages.',
  },
  {
    question:
      'Which parameters can be used together to ensure that a virtual warehouse never has a backlog of queued SQL statements? (Choose two.)',
    type: 'multiple',
    options: [
      'STATEMENT_QUEUED_TIMEOUT_IN_SECONDS',
      'STATEMENT_TIMEOUT_IN_SECONDS',
      'DATA_RETENTION_TIME_IN_DAYS',
      'MAX_CONCURRENCY_LEVEL',
      'MAX_DATA_EXTENSION_TIME_IN_DAYS',
    ],
    correct: [0, 3],
    explanation: 'These parameters control queue time and concurrency to prevent backlogs.',
  },
  {
    question:
      'What action should be taken if a large number of concurrent queries are queued in a virtual warehouse?',
    type: 'single',
    options: [
      'Scale-up by resizing the warehouse.',
      'Scale-out with a multi-cluster warehouse.',
      'Disable auto-suspend on the warehouse.',
      'Enable auto-resume on the warehouse.',
    ],
    correct: [1],
    explanation: 'Multi-cluster warehouses handle high concurrency by adding clusters.',
  },
  {
    question: 'Which feature is supported in column-level security in Snowflake?',
    type: 'single',
    options: [
      'Object tagging',
      'Data classification',
      'External tokenization',
      'Tag-based masking policies',
    ],
    correct: [3],
    explanation: 'Tag-based masking policies allow dynamic masking based on tags.',
  },
  {
    question:
      'A network policy applied at the user level takes precedence over a network policy applied to what Snowflake object?',
    type: 'single',
    options: ['A role', 'An account', 'A database', 'An organization'],
    correct: [1],
    explanation: 'User-level network policies override account-level policies.',
  },
  {
    question:
      'Which Snowflake storage object can be used to store data beyond a single session and will not incur Fail-safe costs?',
    type: 'single',
    options: ['Permanent table', 'External table', 'Temporary table', 'Transient table'],
    correct: [3],
    explanation: 'Transient tables persist beyond sessions but have no Fail-safe.',
  },
  {
    question:
      'Which data sharing mechanism can be used to share data privately or publicly within the Snowflake Marketplace?',
    type: 'single',
    options: ['Listing', 'Direct share', 'Reader account', 'Data Exchange'],
    correct: [0],
    explanation: 'Listings enable private or public sharing via the Marketplace.',
  },
  {
    question: 'What metrics will the SHOW TABLES command in Snowsight provide?',
    type: 'single',
    options: ['Time Travel bytes', 'Active bytes', 'Fail-safe bytes', 'Retained for clone bytes'],
    correct: [1],
    explanation: 'SHOW TABLES in Snowsight shows active bytes as a key metric.',
  },
  {
    question:
      'An external stage, my_stage, contains many directories, including one, app_files, that contains CSV files. How can all the CSV files from this directory be moved into table my_table without scanning files that are not needed?',
    type: 'single',
    options: [
      "COPY INTO my_table FROM @my_stage PATTERN='.[.]csv';",
      "COPY INTO my_table FROM @my_stage/app_files PATTERN='.[.]csv';",
      "COPY INTO my_table FROM @my_stage/app_files PATTERN='.[.]txt';",
      "COPY INTO my_table FROM @my_stage PATTERN='.[.]txt';",
    ],
    correct: [1],
    explanation: 'Specifying the subdirectory and correct pattern limits scanning.',
  },
  {
    question:
      'Using which object-level parameters will help limit query processing and concurrency slowdowns? (Choose two.)',
    type: 'multiple',
    options: [
      'MULTI_STATEMENT_COUNT',
      'ENABLE_QUERY_ACCELERATION',
      'STATEMENT_TIMEOUT_IN_SECONDS',
      'STATEMENT_QUEUED_TIMEOUT_IN_SECONDS',
      'QUERY_ACCELERATION_MAX_SCALE_FACTOR',
    ],
    correct: [2, 3],
    explanation: 'These timeout parameters prevent long-running or heavily queued queries.',
  },
  {
    question:
      'The ORDERS table contains 12,000 rows. Which query will return 10 rows that are randomly sampled from the table every time the query is run?',
    type: 'single',
    options: [
      'select * from ORDERS fetch 10;',
      'select * from ORDERS limit 10;',
      'select * from ORDERS sample (10);',
      'select * from ORDERS tablesample (10 rows);',
    ],
    correct: [3],
    explanation: 'TABLESAMPLE with row count returns a random fixed-size sample each time.',
  },
  {
    question:
      'Which function will convert semi-structured data to a relational data representation?',
    type: 'single',
    options: ['PARSE_JSON', 'FLATTEN', 'OBJECT_CONSTRUCT', 'OBJECT_AGG'],
    correct: [1],
    explanation: 'FLATTEN converts semi-structured data (e.g., JSON) into rows and columns.',
  },
  {
    question:
      "What triggers the automated maintenance of a table's clustering key after it has been defined?",
    type: 'single',
    options: [
      'A scheduled task established by the ORGADMIN.',
      'A time-based schedule set by the user.',
      'A Snowflake determination based on the table size.',
      'A Snowflake determination that the table will benefit from maintenance.',
    ],
    correct: [3],
    explanation: 'Automatic clustering runs when Snowflake determines benefit.',
  },
  {
    question:
      'Which Snowflake object will consume credits during automatic background maintenance?',
    type: 'single',
    options: ['View', 'Table', 'External table', 'Materialized view'],
    correct: [3],
    explanation: 'Materialized views are automatically refreshed and consume credits.',
  },
  {
    question: 'Snowflake users can create a resource monitor at which levels? (Choose two.)',
    type: 'multiple',
    options: [
      'User level',
      'Pipe level',
      'Account level',
      'Cloud services level',
      'Virtual warehouse level',
    ],
    correct: [2, 4],
    explanation: 'Resource monitors can be set at account and warehouse levels.',
  },
  {
    question: 'Which Snowflake objects can be secured to protect data privacy? (Choose two.)',
    type: 'multiple',
    options: ['Schemas', 'Stages', 'Views', 'Materialized views', 'Tags'],
    correct: [2, 3],
    explanation: 'Secure views and secure materialized views protect underlying data.',
  },
  {
    question:
      'How does Snowflake optimize queries on tables by leveraging the sorting and storage of data within micro-partitions?',
    type: 'single',
    options: [
      'The data is pruned by column to eliminate unnecessary micro-partitions, then the rows within the remaining micro-partitions are filtered.',
      'The data is pruned by micro-partitions based on column values, then rows within the remaining micro-partitions are filtered.',
      'Any micro-partitions that are not needed for the query are pruned, then the data within the remaining micro-partitions is pruned by column.',
      'The data within micro-partitions is sorted by rows, then the columns are filtered based on the query conditions.',
    ],
    correct: [1],
    explanation: 'Snowflake uses micro-partition pruning based on metadata before row filtering.',
  },
  {
    question:
      'Which resource monitor setting will cancel all active queries in a virtual warehouse when the threshold is met?',
    type: 'single',
    options: ['NOTIFY', 'NOTIFY_USERS', 'SUSPEND', 'SUSPEND_IMMEDIATE'],
    correct: [3],
    explanation: 'SUSPEND_IMMEDIATE cancels running queries and suspends the warehouse.',
  },
  {
    question: 'What role should be used when creating a new user?',
    type: 'single',
    options: ['ORGADMIN', 'SECURITYADMIN', 'USERADMIN', 'SYSADMIN'],
    correct: [2],
    explanation: 'USERADMIN role is responsible for user creation and management.',
  },
  {
    question: 'Which ACCOUNT_USAGE view will identify long-running queries?',
    type: 'single',
    options: ['DATA_TRANSFER_HISTORY', 'TASK_HISTORY', 'QUERY_HISTORY', 'METERING_DAILY_HISTORY'],
    correct: [2],
    explanation: 'QUERY_HISTORY shows execution time and helps identify long-running queries.',
  },
  {
    question:
      'When sharing data among multiple Snowflake accounts, what charges are incurred by a data consumer when viewing shared data using their own account?',
    type: 'single',
    options: [
      'Cloud services charges',
      'Compute charges',
      'Data storage charges',
      'Data egress charges',
    ],
    correct: [1],
    explanation: 'Consumers pay compute charges when querying shared data with their warehouses.',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition required to use the query acceleration service?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Query Acceleration Service requires Enterprise edition or higher.',
  },
  {
    question: 'Which objects can be cloned in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Virtual warehouses',
      'Internal named stages',
      'External named stages',
      'Dynamic tables',
      'External tables',
    ],
    correct: [2, 3],
    explanation: 'External named stages and dynamic tables can be cloned.',
  },
  {
    question: 'What happens to foreign key constraints when a table is cloned to another database?',
    type: 'single',
    options: [
      'All referenced tables will be cloned.',
      'The cloned table will reference the primary key in the source table.',
      'The cloned table will lose all references to the primary key.',
      'The cloned table will lose all references to the foreign and primary keys.',
    ],
    correct: [1],
    explanation:
      'Foreign key constraints in clones reference original primary keys (but are not enforced).',
  },
  {
    question:
      'What step must be taken to ensure that a user can only access Snowsight from a specific location, or when working from home?',
    type: 'single',
    options: [
      'Use a company Virtual Private Network (VPN) connection.',
      'Use Multi-Factor Authentication (MFA).',
      'Use Single Sign-On (SSO).',
      "Add the user's IP address to the network policy allowed list.",
    ],
    correct: [3],
    explanation: 'Network policies restrict access by IP address.',
  },
  {
    question: 'What actions will trigger a data pipe to load? (Choose two.)',
    type: 'multiple',
    options: [
      'Use of an INSERT statement',
      'Use of a COPY INTO statement',
      'Use of the insertFiles REST endpoint',
      'Use of the insertReport REST endpoint',
      'Set the pipe parameter to auto-ingest',
    ],
    correct: [2, 4],
    explanation: 'Snowpipe auto-ingest and insertFiles endpoint trigger loading.',
  },
  {
    question: 'What does a Query Profile metric that shows excessive spillage indicate?',
    type: 'single',
    options: [
      'Poor query optimization',
      'Expired temporary tables',
      'Improper virtual warehouse sizing',
      'Improper Common Table Expressions (CTEs)',
    ],
    correct: [2],
    explanation: 'Spillage occurs when warehouse memory is insufficient.',
  },
  {
    question:
      'A query is using more credits than expected. The Query Profile shows that a majority of the query execution is spent on remote disk I/O. How can this be prevented in the future?',
    type: 'single',
    options: [
      'Convert the virtual warehouse to Maximized mode.',
      'Increase the size of the virtual warehouse.',
      'Increase the auto suspend time in the virtual warehouse.',
      'Increase the number of clusters in the virtual warehouse.',
    ],
    correct: [1],
    explanation: 'Larger warehouse size provides more cache, reducing remote disk I/O.',
  },
  {
    question:
      'In a SPLIT_PART function, what will the returned value be if the partNumber is out of range?',
    type: 'single',
    options: ['−1', 'An empty string', 'The full string', 'An error'],
    correct: [1],
    explanation: 'SPLIT_PART returns an empty string when part number is out of range.',
  },
  {
    question:
      'From which locations can data files be downloaded using the GET command? (Choose two.)',
    type: 'multiple',
    options: ['External stage', 'Table stage', 'User stage', 'Directory table', 'Permanent table'],
    correct: [1, 2],
    explanation: 'GET downloads from internal stages only (user and table stages).',
  },
  {
    question:
      'What Snowflake features are recommended to restrict unauthorized users from accessing Personal Identifiable Information (PII)? (Choose two.)',
    type: 'multiple',
    options: [
      'Dynamic Data Masking',
      'Transient tables',
      'Secure views',
      'Multi-Factor Authentication (MFA)',
      'Data encryption',
    ],
    correct: [0, 2],
    explanation: 'Dynamic Data Masking and Secure Views protect PII at query time.',
  },
  {
    question:
      'Which Snowflake keywords help retrieve data without the need to completely scan a table? (Choose two.)',
    type: 'multiple',
    options: ['TOP <  n  > ', 'LIMIT', 'FETCH', 'SAMPLE', 'TABLESAMPLE'],
    correct: [3, 4],
    explanation: 'SAMPLE and TABLESAMPLE allow sampling without full table scans.',
  },
  {
    question:
      'A security review identified several roles that are no longer being used. Which of the roles can be dropped?',
    type: 'single',
    options: ['ACCOUNTADMIN', 'USERADMIN', 'FINANCEADMIN', 'PUBLIC'],
    correct: [2],
    explanation: 'Custom roles like FINANCEADMIN can be dropped; system roles cannot.',
  },
  {
    question:
      'A complex query has been running in Snowsight for more than one hour. At the same time, several other queries from other worksheets ran successfully. What is the FASTEST way to cancel the long-running query?',
    type: 'single',
    options: [
      'Immediately suspend the virtual warehouse that the query is running on.',
      'Return to the worksheet and abort the query.',
      'Set the auto_suspend virtual warehouse property to 0.',
      'Find the query in the query activity view and cancel the query.',
    ],
    correct: [1],
    explanation: 'Aborting directly in the worksheet is the fastest targeted method.',
  },
  {
    question:
      'How can a Snowflake user automate virtual warehouse operations for optimal credit consumption? (Choose two.)',
    type: 'multiple',
    options: [
      'Auto-resume when a query is in a queue.',
      'Auto-resume after a set time period.',
      'Auto-suspend while the query is being written.',
      'Auto-suspend after a set time period.',
      'Auto-suspend after a specified period of inactivity.',
    ],
    correct: [0, 4],
    explanation: 'Auto-resume on demand and auto-suspend after inactivity save credits.',
  },
  {
    question: 'Which Continuous Data Protection feature provides data recovery for up to 90 days?',
    type: 'single',
    options: ['Time Travel', 'Cloning', 'Replication', 'Fail-safe'],
    correct: [0],
    explanation: 'Time Travel supports up to 90 days recovery in Enterprise+ editions.',
  },
  {
    question:
      'A single cluster virtual warehouse has no free resources. What will happen to new queries that are run against this warehouse?',
    type: 'single',
    options: [
      'The queries will be assigned to another virtual warehouse.',
      'The queries will be skipped.',
      'The queries will be placed in a queue.',
      'The warehouse will automatically resize and execute the queries.',
    ],
    correct: [2],
    explanation: 'Queries queue when a single-cluster warehouse is fully utilized.',
  },
  {
    question: 'How does the search optimization service improve query performance?',
    type: 'single',
    options: [
      'By clustering the tables',
      'By creating a persistent data structure',
      'By using caching',
      'By optimizing the use of micro-partitions',
    ],
    correct: [1],
    explanation: 'Search optimization builds persistent data structures for fast lookups.',
  },
  {
    question:
      'Use of what parameter will allow files to be loaded even if the file metadata has expired?',
    type: 'single',
    options: [
      'MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE',
      'ENFORCE_LENGTH = TRUE',
      'PURGE = TRUE',
      'LOAD_UNCERTAIN_FILES = TRUE',
    ],
    correct: [3],
    explanation: 'LOAD_UNCERTAIN_FILES = TRUE bypasses expired metadata checks.',
  },
  {
    question:
      'How can a Data Exchange Administrator provide a user with account access to a Data Exchange?',
    type: 'single',
    options: [
      'Grant the user the USERADMIN role.',
      'Add the user to the Data Exchange.',
      'Enable the IMPORT SHARE privilege and grant this privilege to the user.',
      'Create a new database for the Data Exchange and provide access to the user.',
    ],
    correct: [1],
    explanation: 'Data Exchange admins add users directly to the exchange.',
  },
  {
    question: 'Which features can be used with the Snowflake Standard edition? (Choose two.)',
    type: 'multiple',
    options: [
      'Materialized views',
      'External functions',
      'Multi-cluster virtual warehouses',
      'Fail-safe',
      'Row-level security',
    ],
    correct: [3, 4],
    explanation: 'Standard edition includes Fail-safe and row-level security.',
  },
  {
    question: 'Which function will generate a URL that can be accessed by a non-Snowflake user?',
    type: 'single',
    options: [
      'GET_PRESIGNED_URL',
      'GET_STAGE_LOCATION',
      'BUILD_SCOPED_FILE_URL',
      'BUILD_STAGE_FILE_URL',
    ],
    correct: [0],
    explanation: 'GET_PRESIGNED_URL creates temporary public-access URLs.',
  },
  {
    question:
      'What are valid values for the FIELD_OPTIONALLY_ENCLOSED_BY option in the COPY INTO <  location  >  command used during data unloading? (Choose two.)',
    type: 'multiple',
    options: ["Single quote character (')", 'NULL', "'NULL'", 'NONE', "'NONE'"],
    correct: [0, 3],
    explanation: "Valid values are a single quote (') or NONE.",
  },
  {
    question:
      'What identifiers are supported when creating a Snowflake account hostname? (Choose two.)',
    type: 'multiple',
    options: [
      'Cloud region',
      'Snowflake domain',
      'Account name',
      'Account locator',
      'Account cloud platform',
    ],
    correct: [0, 3],
    explanation: 'Hostname format: <  account_locator  > .<  region  > .snowflakecomputing.com',
  },
  {
    question:
      'Which virtual warehouse auto-suspend configurations will result in a warehouse that runs continually, 24 hours a day, 7 days a week? (Choose two.)',
    type: 'multiple',
    options: ['−1', '0', '86400', '172800', 'NULL'],
    correct: [1, 4],
    explanation: 'AUTO_SUSPEND = 0 or NULL disables auto-suspend.',
  },
  {
    question: 'What kind of value does a User-Defined Function (UDF) return? (Choose two.)',
    type: 'multiple',
    options: ['Dictionary', 'List', 'Object', 'Scalar', 'Tabular'],
    correct: [3, 4],
    explanation: 'UDFs can return scalar values or tabular result sets.',
  },
  {
    question: 'Which command can be performed on a Snowflake secure view?',
    type: 'single',
    options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
    correct: [0],
    explanation: 'Secure views only allow SELECT operations.',
  },
  {
    question: 'Which database objects can be shared with Secure Data Sharing? (Choose two.)',
    type: 'multiple',
    options: [
      'Views',
      'Materialized views',
      'External stages',
      'External tables',
      'Dynamic tables',
    ],
    correct: [3, 4],
    explanation: 'Views and materialized views can be securely shared.',
  },
  {
    question: 'When a transient table in Snowflake is dropped, what happens to the table?',
    type: 'single',
    options: [
      'The table is no longer available for use.',
      'The table can be undropped using Fail-safe.',
      'The table can be recovered for 1 day only and after that it is no longer available.',
      'The table can be recovered only with the assistance of Snowflake Support.',
    ],
    correct: [2],
    explanation: 'Transient tables have Time Travel (up to 1 day) but no Fail-safe.',
  },
  {
    question:
      'A data provider needs to securely collaborate with data consumers who do not reside in the same region. What Snowflake sharing mechanism should be used?',
    type: 'single',
    options: ['Direct share', 'Data Exchange', 'Data replication', 'Listing'],
    correct: [3],
    explanation: 'Listings support cross-region sharing with auto-fulfillment.',
  },
  {
    question:
      'A user needs to know the maximum value of a date field in a table, and runs the following query: select max(o_orderdate) from ORDERS;. Which part of Snowflake architecture will this query use?',
    type: 'single',
    options: ['Database Storage', 'Query Processing', 'Cloud Services', 'Compute'],
    correct: [2],
    explanation: 'Aggregations like MAX require compute (virtual warehouse).',
  },
  {
    question:
      'A Snowflake user accidentally deleted a table. The table no longer exists but the session is within the data retention period. How can the table be restored using the LEAST amount of operational overhead?',
    type: 'single',
    options: [
      'Clone the table schema as it existed before the table was dropped.',
      'Clone the database as it existed before the table was dropped.',
      'Recreate the table and reload the data.',
      'Run the UNDROP command against the table.',
    ],
    correct: [3],
    explanation: 'UNDROP TABLE is the fastest and simplest recovery method.',
  },
  {
    question: 'When cloning a schema, which Snowflake object will not be included in the clone?',
    type: 'single',
    options: [
      'An external stage',
      'A named internal stage',
      'A task',
      'A User-Defined Function (UDF)',
    ],
    correct: [1],
    explanation: 'External stages are not cloned as they reference external storage.',
  },
  {
    question: 'Which command will change the name of shared database role r1 to r4?',
    type: 'single',
    options: [
      'ALTER ROLE d1.r1 RENAME TO d1.r4;',
      'ALTER ROLE d1.r1 RENAME TO d2.r4;',
      'ALTER DATABASE ROLE d1.r1 RENAME TO d2.r4;',
      'ALTER DATABASE ROLE d1.r1 RENAME TO d1.r4;',
    ],
    correct: [3],
    explanation: 'ALTER DATABASE ROLE is used for database-scoped roles.',
  },
  {
    question: 'What does the Remote Disk I/O statistic in the Query Profile indicate?',
    type: 'single',
    options: [
      'Time spent reading from the result cache.',
      'Time spent reading from the virtual warehouse cache.',
      'Time when the query processing was blocked by remote disk access.',
      'The level of network activity between the Cloud Services layer and the virtual warehouse.',
    ],
    correct: [2],
    explanation: 'Remote Disk I/O shows time spent fetching data from storage due to cache miss.',
  },
  {
    question:
      'Use of which virtual warehouse or warehouse configuration will improve the performance of workloads that have large memory requirements, such as Machine Learning (ML) training using a stored procedure?',
    type: 'single',
    options: [
      'Snowpark-optimized warehouse',
      'Standard warehouse',
      'Multi-cluster warehouse',
      'Serverless compute',
    ],
    correct: [0],
    explanation: 'Snowpark-optimized warehouses have extra memory for ML workloads.',
  },
  {
    question: 'Which role has the privileges to describe a share?',
    type: 'single',
    options: ['ORGADMIN', 'SECURITYADMIN', 'SYSADMIN', 'ACCOUNTADMIN'],
    correct: [3],
    explanation: 'ACCOUNTADMIN manages shares and can describe them.',
  },
  {
    question:
      'This command is executed: CREATE TABLE new_table CLONE existing_table COPY GRANT;. What will happen to the privileges of any cloned objects?',
    type: 'single',
    options: [
      'The clone will only inherit SELECT privileges from the source object.',
      'The clone will inherit all privileges, including OWNERSHIP, from the source object.',
      'The clone will inherit all privileges except OWNERSHIP from the source object.',
      'The clone will not inherit any privileges from the source object.',
    ],
    correct: [2],
    explanation: 'COPY GRANTS copies all privileges except ownership.',
  },
  {
    question:
      'Where does Snowflake store the data output from a query that was executed in the past 24 hours?',
    type: 'single',
    options: [
      'In a micro-partition',
      'In a remote disk',
      'In the result cache layer',
      'In the local disk cache layer',
    ],
    correct: [2],
    explanation: 'Query results are cached for 24 hours in the result cache.',
  },
  {
    question:
      'What is the default authenticator while using the JDBC driver connection in Snowflake?',
    type: 'single',
    options: ['externalbrowser', 'snowflake', 'username_password_mfa', 'snowflake_jwt'],
    correct: [1],
    explanation: 'JDBC defaults to username_password_mfa.',
  },
  {
    question: 'When will Snowflake charge credits for the use of the Cloud Services layer?',
    type: 'single',
    options: [
      'Credits will be charged whenever the Cloud Services layer is used.',
      'Credits will be charged only when running a Snowflake-provisioned compute warehouse COMPUTE_WH.',
      'Credits will be charged when the daily consumption of cloud services resources exceeds 10% of the daily warehouse usage.',
      'Credits will be charged only when a virtual warehouse consumes serverless compute services.',
    ],
    correct: [2],
    explanation: 'Cloud Services billing kicks in above 10% of daily warehouse usage.',
  },
  {
    question: 'What is the primary purpose of using a masking policy in Snowflake?',
    type: 'single',
    options: [
      'To protect sensitive data from unauthorized access when queries are run.',
      'To automatically encrypt sensitive data when data is stored in Snowflake.',
      'To protect multiple columns that have different data types in a given table.',
      'To protect both column-level and row-level data.',
    ],
    correct: [0],
    explanation: 'Masking policies hide sensitive data in query results.',
  },
  {
    question: 'How can the performance of queries run on external tables be optimized?',
    type: 'single',
    options: [
      'Cluster the tables',
      'Create materialized views on the tables',
      'Use the metadata cache',
      'Enable the search optimization service',
    ],
    correct: [1],
    explanation:
      'External table performance improves with metadata caching and materialized views.',
  },
  {
    question:
      'What are the recommended alternative data types in Snowflake for unsupported large object data types such as BLOB and CLOB? (Choose two.)',
    type: 'multiple',
    options: ['VARIANT', 'ARRAY', 'BINARY', 'OBJECT', 'VARCHAR'],
    correct: [2, 4],
    explanation: 'Use BINARY for BLOB and VARCHAR (or VARIANT) for CLOB-like data.',
  },
  {
    question: 'A network policy set at which level will override all other network policies?',
    type: 'single',
    options: ['Account', 'User', 'Security integration', 'Database'],
    correct: [1],
    explanation: 'User-level network policies have highest precedence.',
  },
  {
    question:
      'A company needs to share sales data with multiple marketing agency partners. Which Snowflake data share mechanism is recommended for this use case?',
    type: 'single',
    options: ['A shared Amazon S3 bucket', 'Direct share', 'A reader account', 'Data Exchange'],
    correct: [2],
    explanation: 'Data Exchange is designed for secure collaboration with multiple partners.',
  },
  {
    question: 'Which role can create and manage Snowflake accounts?',
    type: 'single',
    options: ['SYSADMIN', 'ACCOUNTADMIN', 'ORGADMIN', 'SECURITYADMIN'],
    correct: [2],
    explanation: 'ORGADMIN manages organizations and creates accounts.',
  },
  {
    question: 'Which security feature is available in all Snowflake editions?',
    type: 'single',
    options: [
      'Data masking policies',
      'Object-level access control',
      'Object tagging',
      'Customer-managed encryption keys',
    ],
    correct: [1],
    explanation: 'RBAC (object-level access control) is available in all editions.',
  },
  {
    question:
      '[Image question - skip OR read docx file] A table named car_sales contains a single VARIANT column named src. Which queries will return the element "phone number" from the data? (Choose two.)',
    type: 'multiple',
    options: [
      'SELECT src:customer.’phone number’ FROM car_sales;',
      'SELECT SRC:customer."phone number" FROM car_sales;',
      'SELECT src:customer."phone number" FROM car_sales;',
      'SELECT SRC:customer.phone number FROM car_sales;',
      'SELECT SRC:CUSTOMER."phone number" FROM car_sales;',
    ],
    correct: [1, 2],
    explanation:
      'Column names are case-insensitive, but object keys with spaces require double quotes.',
  },
  {
    question:
      'Which strings will be converted to TRUE using the TO_BOOLEAN() or CAST() functions when unloading data? (Choose two.)',
    type: 'multiple',
    options: ['0', 'n', 'no', 'on', 'yes'],
    correct: [3, 4],
    explanation: 'on and yes (case-insensitive) convert to TRUE.',
  },
  {
    question:
      "Which authentication method requires access to a secure file that is only stored on the user's local device?",
    type: 'single',
    options: [
      'Password authentication',
      'Key-pair authentication',
      'Multi-Factor Authentication (MFA)',
      'Federated authentication',
    ],
    correct: [1],
    explanation: 'Key-pair authentication uses a private key stored locally.',
  },
  {
    question: 'Which drivers or connectors are supported by Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Perl Connector',
      'MongoDB Rust Driver',
      'Go Snowflake Driver',
      'Cobol Driver',
      'Snowflake Connector for Python',
    ],
    correct: [2, 4],
    explanation: 'Go and Python are officially supported Snowflake connectors.',
  },
  {
    question:
      'If a source table is updated while cloning is in progress, what data will be included in the cloned table?',
    type: 'single',
    options: [
      'All data from the timestamp when the user runs the query.',
      'All data from the timestamp when the user session was created.',
      'All data from the timestamp when the clone statement was initiated.',
      'All data from the timestamp when the clone statement was completed.',
    ],
    correct: [2],
    explanation: 'Cloning captures a point-in-time snapshot at statement initiation.',
  },
  {
    question:
      'The CUSTOMER table in the T1 database is accidentally dropped. Which privileges are required to restore this table? (Choose two.)',
    type: 'multiple',
    options: [
      'SELECT privilege on the CUSTOMER table',
      'OWNERSHIP privilege on the CUSTOMER table',
      'All privileges on the CUSTOMER table',
      'All privileges on the T1 database',
      'CREATE TABLE privilege on the T1 database',
    ],
    correct: [1, 4],
    explanation: 'Ownership on dropped table + CREATE TABLE on database required for UNDROP.',
  },
  {
    question:
      'Which ACCOUNT_USAGE view can be used to identify the masking policy assigned to an object?',
    type: 'single',
    options: ['ACCESS_HISTORY', 'OBJECT_DEPENDENCIES', 'POLICY_REFERENCES', 'TAG_REFERENCES'],
    correct: [2],
    explanation: 'POLICY_REFERENCES shows which masking policies are applied to objects.',
  },
  {
    question: 'A stream object will advance its offset when it is used in which statement?',
    type: 'single',
    options: ['SELECT', 'INSERT', 'CREATE', 'COPY INTO <  location  > '],
    correct: [1],
    explanation: 'A stream advances when its changes are consumed via SELECT.',
  },
  {
    question: 'Where is metadata management handled in Snowflake?',
    type: 'single',
    options: ['Cloud Services', 'Compute', 'Database Storage', 'Query Processing'],
    correct: [0],
    explanation: 'Metadata (including micro-partition stats) is managed by Cloud Services.',
  },
  {
    question:
      'What does an integration between Snowflake and Microsoft Private Link or AWS PrivateLink support?',
    type: 'single',
    options: [
      'The isolation of data within a Snowflake account.',
      'The use of Secure Data Sharing among Snowflake accounts.',
      'A Virtual Private Network (VPN) between a user and Snowflake.',
      'A secure, direct connection to Snowflake that does not use the internet.',
    ],
    correct: [3],
    explanation: 'PrivateLink provides private connectivity bypassing the public internet.',
  },
  {
    question: 'Which type of URL gives permanent access to files in cloud storage?',
    type: 'single',
    options: ['Pre-signed URL', 'Account URL', 'Scoped URL', 'File URL'],
    correct: [3],
    explanation: 'File URLs (generated by BUILD_STAGE_FILE_URL) are permanent.',
  },
  {
    question: 'Which Snowflake data governance feature supports resource usage monitoring?',
    type: 'single',
    options: ['Data classification', 'Column lineage', 'Access history', 'Object tagging'],
    correct: [3],
    explanation: 'ACCESS_HISTORY tracks who accessed what and when.',
  },
  {
    question: 'Which steps will help optimize query performance? (Choose two.)',
    type: 'multiple',
    options: [
      'Using the query acceleration service',
      'Clustering a table',
      'Indexing a column',
      'Increasing the size of the micro-partitions',
      'Decreasing the size of the virtual warehouse',
    ],
    correct: [0, 1],
    explanation: 'Query acceleration and clustering improve performance.',
  },
  {
    question:
      'Which functions can be used to identify the data type stored in a VARIANT column? (Choose two.)',
    type: 'multiple',
    options: ['IS_NULL_VALUE', 'IS_DATE_VALUE', 'IS_GEOGRAPHY', 'IS_XML', 'IS_JSON'],
    correct: [0, 1],
    explanation: 'IS_NULL_VALUE and IS_DATE_VALUE are valid type predicates.',
  },
  {
    question: 'What is the MINIMUM Snowflake edition that supports data sharing?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [0],
    explanation: 'Secure Data Sharing is available starting with Standard edition.',
  },
  {
    question: 'Who can access the data published in a Data Exchange?',
    type: 'single',
    options: [
      'Only the data provider who published the data',
      'Any Snowflake user, regardless of their role or permissions',
      'Any user who has been provided with a unique Data Exchange URL',
      'Only the users that the data provider has invited to the Data Exchange',
    ],
    correct: [3],
    explanation: 'Access is invite-only in private Data Exchanges.',
  },
  {
    question: 'How can data be shared between two users who have different Snowflake accounts?',
    type: 'single',
    options: [
      'Create a share with the same name as the original database.',
      'Create a share and ensure the the proper role is assigned to the share.',
      'Ensure both users’ accounts are using the same cloud provider and region.',
      'Use the PUT command to create a shared account.',
    ],
    correct: [1],
    explanation: 'Secure Data Sharing requires creating a share object and granting privileges.',
  },
  {
    question:
      'Which view will show the MOST recent information about table-level storage utilization?',
    type: 'single',
    options: [
      'The TABLE_STORAGE_METRICS view in a Snowflake data share',
      'The TABLE_STORAGE_METRICS view in the ACCOUNT_USAGE schema',
      'The TABLE_STORAGE_METRICS view in the INFORMATION_SCHEMA',
      'The STORAGE_USAGE_HISTORY view in the INFORMATION_SCHEMA',
    ],
    correct: [2],
    explanation: 'ACCOUNT_USAGE.TABLE_STORAGE_METRICS has the most current data.',
  },
  {
    question:
      'A user executed a SELECT query in Snowsight which returned a 1 GB result set. The user then downloads the files. What will occur?',
    type: 'single',
    options: [
      'The result set will be successfully downloaded from Snowsight.',
      'The result set will be automatically compressed and the data will be downloaded as individual files.',
      'The download will fail because the result set needs to be broken up into files no greater than 50 MB before downloading.',
      'The download will result in an error because the filters of the SELECT query need to be changed so that Snowsight returns a smaller result set.',
    ],
    correct: [1],
    explanation: 'Snowsight allows download of result sets up to 10 GB.',
  },
  {
    question: 'Which command can be used to unload data from a Snowflake table to a stage?',
    type: 'single',
    options: ['PUT', 'CREATE <   object   > ', 'COPY INTO', 'COPY INTO <   location   > '],
    correct: [3],
    explanation:
      'COPY INTO <  location  >  unloads data from tables to stages or external locations.',
  },
  {
    question:
      'Which file format option should be used when unloading data into a stage to create a CSV or a JSON file?',
    type: 'single',
    options: ['PARSE_HEADER', 'TRIM_SPACE', 'FILE_EXTENSION', 'SKIP_HEADER'],
    correct: [2],
    explanation:
      'The FILE_EXTENSION option specifies the file extension (e.g., .csv or .json) for unloaded files.',
  },
  {
    question:
      'When creating a virtual warehouse, what setting should be used to avoid both over-provisioning resources and auto-scaling when there is increased concurrency?',
    type: 'single',
    options: [
      'WAREHOUSE_SIZE = LARGE',
      'WAREHOUSE_TYPE = SNOWPARK-OPTIMIZED',
      'MAX_CLUSTER_COUNT = 10',
      'ENABLE_QUERY_ACCELERATION = TRUE',
    ],
    correct: [2],
    explanation:
      'Using a fixed-size single-cluster warehouse (MAX_CLUSTER_COUNT = 1) avoids both over-provisioning and auto-scaling.',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition required to add masking policies to selectively mask plain-text data in a table or in view columns at query time?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Dynamic Data Masking (masking policies) requires Enterprise edition or higher.',
  },
  {
    question:
      'Which command can be used to determine if data from a file has been previously loaded?',
    type: 'single',
    options: [
      'COPY_HISTORY',
      'DATA_TRANSFER_HISTORY',
      'WAREHOUSE_LOAD_HISTORY',
      'STAGE_STORAGE_USAGE_HISTORY',
    ],
    correct: [0],
    explanation: 'COPY_HISTORY shows all COPY INTO operations, including which files were loaded.',
  },
  {
    question:
      'What does Snowflake recommend when configuring the auto-suspend parameter for a virtual warehouse?',
    type: 'single',
    options: [
      'Set auto-suspend to the maximum possible duration for optimal resource utilization.',
      'Enable auto-suspend to a high value to maximize warehouse availability.',
      'Enable auto-suspend to a low value to minimize credit consumption during inactivity.',
      'Disable auto-suspend to ensure continuous availability of the warehouse.',
    ],
    correct: [2],
    explanation:
      'Snowflake recommends a low auto-suspend value (e.g., 60–600 seconds) to minimize credit waste.',
  },
  {
    question:
      'Which URL identifies the database, schema, stage, and file path to a set of files for accessing the unstructured data files in Snowflake?',
    type: 'single',
    options: ['Scoped URL', 'File URL', 'Pre-signed URL', 'HTTPS URL'],
    correct: [1],
    explanation:
      'File URLs (scoped URLs) include full context: database, schema, stage, and file path.',
  },
  {
    question:
      'Which Snowflake feature or service is primarily used for managing and monitoring data and user activities?',
    type: 'single',
    options: ['Snowsight', 'SnowSQL', 'Snowflake Marketplace', 'Streamlit'],
    correct: [0],
    explanation:
      'Snowsight is the web interface for managing data, queries, users, and monitoring activity.',
  },
  {
    question:
      'Which URL type should be used for custom applications that need to access unstructured data files?',
    type: 'single',
    options: ['Scoped URL', 'File URL', 'Pre-signed URL', 'Relative URL'],
    correct: [1],
    explanation:
      'File URLs (also called scoped URLs) are designed for secure access by custom applications.',
  },
  {
    question:
      'When would creating and using a standard view be preferable to using a materialized view?',
    type: 'single',
    options: [
      'The underlying query of the view takes a lot of time to run.',
      'The underlying query of the view is resource-intensive.',
      'The underlying query of the view is run on large data sets.',
      'The view results change often.',
    ],
    correct: [3],
    explanation: 'Standard views are real-time and preferred when data changes frequently.',
  },
  {
    question:
      'When using a direct share, what privileges does a role need to control access to the objects that are in a share that is using database roles? (Choose two.)',
    type: 'multiple',
    options: ['CREATE PIPE', 'CREATE STREAM', 'CREATE TASK', 'CREATE SHARE', 'CREATE DATABASE'],
    correct: [3, 4],
    explanation:
      'CREATE SHARE and CREATE DATABASE are required to manage shares using database roles.',
  },
  {
    question: 'What actions can be performed by consumers of shared databases? (Choose two.)',
    type: 'multiple',
    options: [
      'Create a clone of the database.',
      'Edit the comments for the database.',
      'Query Time Travel data on the database.',
      'Create streams on objects in the database.',
      'Query data from the objects in the database.',
    ],
    correct: [3, 4],
    explanation:
      'Consumers can clone shared databases and query data, but cannot modify metadata or create streams.',
  },
  {
    question:
      "A Snowflake user is actively logged into Snowflake when a user-level network policy is assigned to that user. What will Snowflake do if the user's IP address does not match the user-level network policy rules?",
    type: 'single',
    options: [
      'Log the user out.',
      'Deactivate the network policy.',
      'Prevent the user from executing additional queries.',
      'Allow the user to continue until the session or login token expires.',
    ],
    correct: [2],
    explanation:
      'Network policy changes do not terminate active sessions; the user can continue until session/token expires.',
  },
  {
    question: 'At what level is the ALLOW_CLIENT_MFA_CACHING parameter configurable in Snowflake?',
    type: 'single',
    options: ['User', 'Session', 'Account', 'Virtual warehouse'],
    correct: [2],
    explanation: 'ALLOW_CLIENT_MFA_CACHING is a user-level parameter.',
  },
  {
    question: 'How can data be securely shared across regions and cloud platforms in Snowflake?',
    type: 'single',
    options: [
      'Use Cross-Cloud Auto-Fulfillment.',
      'Use replication.',
      'Use the CREATE SHARE command.',
      'Use the GRANT command to share selected objects.',
    ],
    correct: [1],
    explanation:
      'Cross-Cloud Auto-Fulfillment enables secure cross-region and cross-cloud sharing via Marketplace listings.',
  },
  {
    question:
      'What factors affect how many credits will be charged for virtual warehouse usage? (Choose two.)',
    type: 'multiple',
    options: [
      'Number of queries being run',
      'Number of users running queries',
      'Snowflake edition being used',
      'Size of the warehouse',
      'Length of time the warehouse runs',
    ],
    correct: [3, 4],
    explanation: 'Credits = Warehouse size × Runtime (in hours).',
  },
  {
    question: 'What privilege is required to view the load statistics on a virtual warehouse?',
    type: 'single',
    options: ['MODIFY', 'OPERATE', 'MONITOR', 'USAGE'],
    correct: [2],
    explanation:
      'The MONITOR privilege is required to view warehouse performance and load statistics.',
  },
  {
    question: 'Which command will indicate whether a materialized view is being used in a query?',
    type: 'single',
    options: ['SHOW', 'DESCRIBE', 'EXPLAIN', 'USE'],
    correct: [2],
    explanation: 'EXPLAIN shows the query plan and indicates if a materialized view is used.',
  },
  {
    question:
      'A size X-Small virtual warehouse ran for 90 seconds, and was shut down. The warehouse was then run for another 30 seconds before being shut down again. How many seconds will be billed?',
    type: 'single',
    options: ['90 seconds', '120 seconds', '150 seconds', '180 seconds'],
    correct: [2],
    explanation:
      'Snowflake bills in 60-second increments: 90 → 120 sec + 30 → 60 sec = 180 seconds total.',
  },
  {
    question:
      'Which virtual warehouse configuration is recommended specifically for a steady workload that has no execution lag?',
    type: 'single',
    options: [
      'AUTO_RESUME = FALSE',
      'AUTO_SUSPEND = 0',
      'STATEMENT_TIMEOUT_IN_SECONDS = 3600',
      'MIN_CLUSTER_COUNT = 1, MAX_CLUSTER_COUNT = 3',
    ],
    correct: [1],
    explanation:
      'AUTO_SUSPEND = 0 (or NULL) keeps the warehouse running continuously for zero lag.',
  },
  {
    question:
      'Which role allows a Snowflake user to view table-level storage utilization information from the TABLE_STORAGE_METRICS view by default?',
    type: 'single',
    options: ['ACCOUNTADMIN', 'SECURITYADMIN', 'SYSADMIN', 'USERADMIN'],
    correct: [0],
    explanation:
      'ACCOUNTADMIN has default access to all ACCOUNT_USAGE views, including TABLE_STORAGE_METRICS.',
  },
  {
    question:
      "This statement is run: SELECT { 'key' : { 'subkey': 'value' }} mycolumn;. What notations will retrieve the 'value' from the VARIANT column? (Choose two.)",
    type: 'multiple',
    options: [
      'mycolumn.key.subkey',
      'mycolumn.key:subkey',
      'mycolumn:key.subkey',
      "mycolumn['key'].subkey",
      'mycolumn:key:subkey',
    ],
    correct: [2, 3],
    explanation: 'Colon notation (key:subkey) works with unquoted keys; both are valid here.',
  },
  {
    question:
      'Which multi-cluster virtual warehouse setting will help process queued queries as quickly as possible?',
    type: 'single',
    options: [
      'An economy scaling policy',
      'A standard scaling policy',
      'Maximized mode',
      'Auto-scale mode',
    ],
    correct: [1],
    explanation: 'Maximized mode starts all clusters immediately, eliminating queuing.',
  },
  {
    question:
      'Which Snowflake tool provides detailed execution statistics of a query with no cost to the user?',
    type: 'single',
    options: [
      'Query Profile',
      'Query history',
      'Visualization chart',
      'Query acceleration service',
    ],
    correct: [0],
    explanation: 'Query Profile is free and provides deep execution insights.',
  },
  {
    question:
      'How can a Snowflake user access near real-time metrics that can be used to identify queries affected by disk spilling?',
    type: 'single',
    options: [
      'Use a load monitoring chart.',
      'Review the history section of the Query Profile.',
      'Implement a Snowsight dashboard.',
      'Use a worksheet.',
    ],
    correct: [1],
    explanation: 'Query Profile shows bytes spilled to local/remote disk in real time.',
  },
  {
    question:
      'Which table type is used in the file processing pipeline to process unstructured data in Snowflake?',
    type: 'single',
    options: ['Temporary', 'Directory', 'Standard', 'Transient'],
    correct: [1],
    explanation: 'Directory tables provide metadata about staged unstructured files.',
  },
  {
    question:
      'Which metrics in the QUERY_HISTORY Account_Usage View can be used to assess the pruning efficiency of a query? (Choose two.)',
    type: 'multiple',
    options: [
      'EXECUTION_TIME',
      'PARTITIONS_TOTAL',
      'COMPILATION_TIME',
      'TOTAL_ELAPSED_TIME',
      'PARTITIONS_SCANNED',
    ],
    correct: [1, 4],
    explanation: 'Pruning efficiency = PARTITIONS_SCANNED / PARTITIONS_TOTAL.',
  },
  {
    question:
      'How should a data provider securely share Snowflake objects with a data consumer who does not have a Snowflake account?',
    type: 'single',
    options: [
      "Give the consumer owner's rights on the provider's Snowflake account.",
      "Unload the data into the consumer's cloud storage.",
      'Create a reader account for the consumer.',
      'Create and replicate a share, then give the consumer access to the replication.',
    ],
    correct: [2],
    explanation: 'Reader accounts allow non-Snowflake users to securely access shared data.',
  },
  {
    question:
      'When unloading Snowflake relational data to a Parquet file format, why should the PARTITION BY clause be used?',
    type: 'single',
    options: [
      'It will provide a mechanism to encrypt each micro-partition with a unique key.',
      'It will guarantee data integrity by splitting the data into smaller, manageable chunks.',
      'It will increase storage efficiency by automatically compressing data based on access patterns.',
      'It will optimize query performance by filtering relevant partitions without scanning the entire dataset.',
    ],
    correct: [3],
    explanation: 'PARTITION BY creates physical partitions, enabling partition pruning downstream.',
  },
  {
    question:
      'How can a user access information about a query execution plan without consuming virtual warehouse compute resources?',
    type: 'single',
    options: [
      'Use the EXPLAIN function.',
      'Review the Query Profile metrics.',
      'Review the data in the Account_Usage view.',
      'Use the Snowsight dashboard.',
    ],
    correct: [0],
    explanation: 'EXPLAIN runs in the Cloud Services layer and consumes no warehouse credits.',
  },
  {
    question:
      'If a query is being used to unload a 1 TB table into a stage, which DML operator will be shown in the Query Profile?',
    type: 'single',
    options: ['INSERT', 'UNLOAD', 'COPY', 'UPDATE'],
    correct: [2],
    explanation:
      'Unloading via COPY INTO <  location  >  appears as an UNLOAD operator in Query Profile.',
  },
  {
    question: 'At what levels can network policies be defined in Snowflake? (Choose two.)',
    type: 'multiple',
    options: ['User', 'Account', 'Table', 'Schema', 'Database'],
    correct: [0, 1],
    explanation: 'Network policies can be applied at the account level or user level.',
  },
  {
    question:
      'A Snowflake table that is loaded using a Kafka connector has a schema consisting of which two VARIANT columns? (Choose two.)',
    type: 'multiple',
    options: [
      'RECORD_TIMESTAMP',
      'RECORD_CONTENT',
      'RECORD_KEY',
      'RECORD_SESSION',
      'RECORD_METADATA',
    ],
    correct: [1, 4],
    explanation:
      'Kafka connector creates RECORD_CONTENT (payload) and RECORD_METADATA (Kafka metadata) as VARIANT.',
  },
  {
    question:
      'When working with table MY_TABLE that contains 10 rows, which sampling query will always return exactly 5 rows?',
    type: 'single',
    options: [
      'SELECT * FROM MY_TABLE SAMPLE SYSTEM (5);',
      'SELECT * FROM MY_TABLE SAMPLE BERNOULLI (5);',
      'SELECT * FROM MY_TABLE SAMPLE (5 ROWS);',
      'SELECT * FROM MY_TABLE SAMPLE SYSTEM (1) SEED (5);',
    ],
    correct: [2],
    explanation: 'SAMPLE (n ROWS) guarantees exactly n rows (when possible).',
  },
  {
    question:
      'How can files in a stage be loaded after the file metadata has expired? (Choose two.)',
    type: 'multiple',
    options: [
      'Set the LOAD_UNCERTAIN_FILES option to TRUE.',
      'Remove the files from the stage and reload them.',
      'Set the FORCE parameter to TRUE.',
      'Truncate the target table and reload the files.',
      'Use the ALTER TABLE...REFRESH command',
    ],
    correct: [0, 2],
    explanation:
      'LOAD_UNCERTAIN_FILES = TRUE and FORCE = TRUE both bypass expired metadata checks.',
  },
  {
    question:
      'How should a Snowflake user access a third-party SaaS service to process unstructured data?',
    type: 'single',
    options: [
      'Use internal functions.',
      'Use external functions.',
      'Use process functions.',
      'Use an API gateway.',
    ],
    correct: [1],
    explanation: 'External functions enable calling third-party SaaS APIs from Snowflake.',
  },
  {
    question: 'What statement describes Snowflake data architecture?',
    type: 'single',
    options: [
      'NoSQL warehouse as a service',
      'Single-node, isolated data',
      'Multi-cluster, shared data',
      'Centralized data storage and processing',
    ],
    correct: [2],
    explanation: 'Snowflake uses multi-cluster compute with shared data storage.',
  },
  {
    question:
      'Which command will list all of the dropped accounts in an organization that have not been deleted?',
    type: 'single',
    options: [
      'SHOW MANAGED ACCOUNTS;',
      'SHOW ORGANIZATION ACCOUNTS;',
      'SHOW ORGANIZATION ACCOUNTS HISTORY;',
      "SHOW ORGANIZATION ACCOUNTS LIKE 'myaccounts%';",
    ],
    correct: [2],
    explanation: 'SHOW ORGANIZATION ACCOUNTS HISTORY lists recoverable dropped accounts.',
  },
  {
    question:
      'What privileges are required to activate a network policy for an individual user within a Snowflake account?',
    type: 'single',
    options: [
      'A user with a role that has been granted the global ATTACH POLICY privilege',
      'A user with a role that has been granted the CREATE SESSION POLICY privilege',
      'A user with a role that has been granted the CREATE NETWORK POLICY privilege',
      'A user with a role that has been granted the OWNERSHIP privilege on both the user and the network policy',
    ],
    correct: [3],
    explanation:
      'Only the owner of both the user and the network policy can attach a policy to a user.',
  },
  {
    question: 'How does Snowflake use Multi-Factor Authentication (MFA)?',
    type: 'single',
    options: [
      'MFA is an integrated feature powered by the Duo Security service.',
      'MFA is enabled by default for any user having the ACCOUNTADMIN role.',
      'An MFA login is designed to log in to Snowflake only through Snowsight.',
      'MFA is enabled by default for each user and does not require activation.',
    ],
    correct: [0],
    explanation: 'Snowflake MFA is powered by Duo Security and must be manually enrolled per user.',
  },
  {
    question: 'Which command is used to download data from Snowflake to a client machine?',
    type: 'single',
    options: ['COPY INTO <  location  > ', 'PUT', 'DROP', 'GET'],
    correct: [3],
    explanation: 'GET downloads staged files from Snowflake to the local client.',
  },
  {
    question:
      'Which function, when added to a SELECT statement, will return a randomly-selected, specified number of rows from a table?',
    type: 'single',
    options: [
      'AVERAGE(<  num  >  ROWS)',
      'MEDIAN(<  num  >  ROWS)',
      'SAMPLE(<  num  >  ROWS)',
      'RANDOM(<  num  >  ROWS)',
    ],
    correct: [2],
    explanation: 'SAMPLE(n ROWS) returns exactly n random rows.',
  },
  {
    question:
      'Which Snowflake data governance feature supports the tracking of sensitive data for compliance, discovery, protection, and resource usage?',
    type: 'single',
    options: [
      'Row access policies',
      'Data classification',
      'Object dependencies',
      'Object tagging',
    ],
    correct: [3],
    explanation:
      'Data classification automatically identifies and tags sensitive columns (PII, etc.).',
  },
  {
    question:
      'When an ACCOUNTADMIN gives a user a custom role, what privilege or privileges is the user granted by default?',
    type: 'single',
    options: [
      'All privileges that have been granted to the ACCOUNTADMIN',
      'All privileges on objects allowed by the custom role',
      'Access to the PUBLIC role',
      'Access to all the objects owned by the USERADMIN role',
    ],
    correct: [2],
    explanation: 'Every user automatically gets the PUBLIC role.',
  },
  {
    question: 'Which query metric can be used to monitor the health of a large table?',
    type: 'single',
    options: [
      'Clustering depth',
      'Clustering key',
      'Total partition count',
      'Total number of rows',
    ],
    correct: [0],
    explanation:
      'High clustering depth indicates poor clustering and potential performance issues.',
  },
  {
    question:
      'What function should be used to convert JSON NULL values to SQL NULL values when loading data into a Snowflake table?',
    type: 'single',
    options: ['STRIP_OUTER_ARRAYS', 'STRIP_NULL_VALUE', 'FLATTEN', 'PARSE_JSON'],
    correct: [1],
    explanation: 'STRIP_NULL_VALUE = TRUE converts JSON null to SQL NULL during load.',
  },
  {
    question: 'What is the recommended way to insert a VARIANT value into a Snowflake table?',
    type: 'single',
    options: [
      'Use a SELECT statement to convert data to a VARIANT data type before inserting it.',
      'Use the TO_VARIANT function in the INSERT statement.',
      'Cast the data to a VARIANT data type within the INSERT statement.',
      'Use a subquery to convert the data to a VARIANT data type and then insert it.',
    ],
    correct: [0],
    explanation: 'You can directly cast or use TO_VARIANT() in INSERT statements.',
  },
  {
    question:
      "Which process does Snowflake follow when a stored procedure with owner's rights is called within a session?",
    type: 'single',
    options: [
      'The procedure will be run with the privileges of the caller.',
      "The owner can set the caller's session variables.",
      "The owner will inherit the caller's current virtual warehouse.",
      "The owner can view the caller's session variables.",
    ],
    correct: [2],
    explanation:
      "Owner's rights procedures use the owner’s privileges but inherit the caller’s warehouse.",
  },
  {
    question:
      'Which view can be used to track the read and write operations that have been performed on a table?',
    type: 'single',
    options: ['COPY_HISTORY', 'ACCESS_HISTORY', 'QUERY_HISTORY', 'TASK_HISTORY'],
    correct: [1],
    explanation: 'ACCESS_HISTORY records all read/write access to tables.',
  },
  {
    question:
      'What object does Snowflake recommend using when planning to unload similarly-formatted data on a regular basis?',
    type: 'single',
    options: ['Stream', 'Task', 'Storage integration', 'Named file format'],
    correct: [3],
    explanation: 'Named file formats ensure consistent unloading format across sessions.',
  },
  {
    question: 'How should the SPLIT_TO_TABLE(<  string  > , <  delimiter  > ) function be called?',
    type: 'single',
    options: [
      "SELECT SPLIT_TO_TABLE(COL1, '.') FROM DUAL;",
      "SELECT SPLIT_TO_TABLE('a.b.c', '.');",
      "SELECT * FROM TABLE(SPLIT_TO_TABLE('a.b.c', '.'));",
      "SELECT * FROM SPLIT_TO_TABLE('a.b.c', '.');",
    ],
    correct: [2],
    explanation: 'SPLIT_TO_TABLE is a table function and must be used with TABLE().',
  },
  {
    question:
      'Which configuration of the function PARSE_JSON(<  expr  > ) will retrieve a valid SQL NULL value?',
    type: 'single',
    options: [
      'SELECT parse_json(NULL)',
      "SELECT parse_json('null')",
      "SELECT parse_json('[ null ]')",
      'SELECT parse_json(\'{"a": null}\'):a',
    ],
    correct: [3],
    explanation: 'Parsing JSON null and extracting it returns a SQL NULL.',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition that supports the periodic rekeying of encrypted data?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [1],
    explanation: 'Periodic data rekeying is available only in Business Critical and above.',
  },
  {
    question:
      'While preparing to unload data in Snowflake, the file format option can be specified in which commands? (Choose two.)',
    type: 'multiple',
    options: ['GET', 'CREATE STAGE', 'PUT', 'COPY INTO <  location  > ', 'CREATE PIPE'],
    correct: [1, 3],
    explanation:
      'File format can be defined in CREATE STAGE and overridden in COPY INTO <  location  > .',
  },
  {
    question: 'Which Query Profile operator provides information on pruning efficiency?',
    type: 'single',
    options: ['TableScan', 'ExternalScan', 'InternalObject', 'Generator'],
    correct: [0],
    explanation: 'TableScan shows partitions scanned vs total — the key pruning metric.',
  },
  {
    question: 'What metadata is stored for each micro-partition? (Choose two.)',
    type: 'multiple',
    options: [
      'The number of distinct values',
      'The clustering key used in the table',
      'The average depth of values for each of the columns',
      'The range of values for each of the columns in the full table',
      'The minimum and maximum values for each of the columns',
    ],
    correct: [0, 3],
    explanation: 'Micro-partitions store min/max values and distinct value counts per column.',
  },
  {
    question:
      'Which role has the HIGHEST precedence among roles that will serve as the owners of securable objects?',
    type: 'single',
    options: ['USERADMIN', 'SYSADMIN', 'SECURITYADMIN', 'ACCOUNTADMIN'],
    correct: [3],
    explanation:
      'ACCOUNTADMIN is the highest system role and takes precedence in ownership hierarchy.',
  },
  {
    question: 'How is data protected in Snowflake throughout its lifecycle? (Choose two.)',
    type: 'multiple',
    options: [
      'Users are responsible for encrypting data before uploading to Snowflake.',
      'Snowflake automatically tags and masks Personal Identifiable Information (PII).',
      'Snowflake automatically encrypts data locally before copying the data to the cloud over an encrypted connection.',
      'Snowflake automatically rotates key pairs regularly, using a hierarchical key model stored in a hardware security module.',
      'Users are responsible for uploading and configuring key pair rotation schedules and key sizes to encrypt stored data.',
    ],
    correct: [2, 3],
    explanation:
      'Snowflake handles encryption at rest and in transit automatically with managed key rotation.',
  },
  {
    question: 'Which Snowflake virtual warehouse configuration enables horizontal scaling?',
    type: 'single',
    options: [
      'Increasing the WAREHOUSE_SIZE.',
      'Increasing the MAX_CLUSTER_COUNT.',
      'Increasing the MAX_CONCURRENCY_LEVEL.',
      'Increasing the MIN_CLUSTER_COUNT.',
    ],
    correct: [1],
    explanation: 'Increasing MAX_CLUSTER_COUNT enables horizontal (multi-cluster) scaling.',
  },
  {
    question: 'Which Snowflake objects can execute both DDL and DML statements?',
    type: 'single',
    options: [
      'Increasing the MIN_CLUSTER_COUNT.',
      'Stored procedures',
      'User-Defined Functions (UDFs)',
      'User-Defined Table Functions (UDTFs)',
    ],
    correct: [1],
    explanation: 'Only stored procedures support full DDL and DML execution.',
  },
  {
    question: 'Which object consumes Snowflake credits for its maintenance?',
    type: 'single',
    options: ['Materialized view', 'View', 'External table', 'Table'],
    correct: [0],
    explanation: 'Materialized views are automatically refreshed and consume credits.',
  },
  {
    question:
      'When connecting to Snowflake using SnowSQL, what are ways to explicitly specify the password? (Choose two.)',
    type: 'multiple',
    options: [
      'Use public and private key pair authentication',
      'Run a web-based authorization flow',
      'Use an OAuth token',
      'Enter through an interactive prompt',
      'Specify using SNOWSQL_PWD environment variables',
    ],
    correct: [3, 4],
    explanation: 'Interactive prompt and SNOWSQL_PWD env variable are the two direct ways.',
  },
  {
    question:
      'A team is developing a machine learning model by training on the latest Snowflake features. The training is taking much longer than expected to complete. Which step will accelerate the model training?',
    type: 'single',
    options: [
      'Increase the size of the virtual warehouse.',
      'Add additional clusters to the virtual warehouse.',
      'Use a Snowpark-optimized virtual warehouse.',
      'Enable the query acceleration service.',
    ],
    correct: [2],
    explanation: 'Snowpark-optimized warehouses have significantly more memory for ML workloads.',
  },
  {
    question: 'Which object can be shared using Secure Data Sharing?',
    type: 'single',
    options: [
      'Secure view',
      'Materialized view',
      'External function',
      'User-Defined Function (UDF)',
    ],
    correct: [0],
    explanation:
      'Only secure views (and secure materialized views) can be shared via Secure Data Sharing.',
  },
  {
    question: 'How is Single Sign-On (SSO) authentication used in Snowflake?',
    type: 'single',
    options: [
      'SSO is an authentication method which uses a pair of keys, a public key and a private key, to verify the identity of a user.',
      'SSO is an authentication method that uses a username and password in the API request header.',
      'SSO is an authentication method that allows a user to sign into multiple applications with a single set of credentials.',
      'SSO is an integrated Snowflake feature, powered by the Duo Security service, which is managed completely by Snowflake.',
    ],
    correct: [2],
    explanation:
      'SSO allows single credential login across multiple applications via identity providers.',
  },
  {
    question:
      'Which clause is used to define a function that may return different values for different rows?',
    type: 'single',
    options: ['IMMUTABLE', 'RETURNS', 'COMMENT', 'VOLATILE'],
    correct: [3],
    explanation: 'VOLATILE indicates the function can return different results per row.',
  },
  {
    question: 'In Snowflake, where can query pruning information statistics be identified?',
    type: 'single',
    options: [
      'Partitions scanned',
      'Bytes scanned',
      'Bytes spilled to remote storage',
      'Percentage scanned from cache',
    ],
    correct: [0],
    explanation: 'Partitions scanned vs total shows pruning effectiveness.',
  },
  {
    question:
      'How does the authorization associated with a pre-signed URL work for an unstructured file?',
    type: 'single',
    options: [
      'Anyone who has the URL can access the referenced file for the life of the token.',
      'Only the user who generates the URL can use the URL to access the referenced file.',
      'Only the users who have roles with sufficient privileges on the URL can access the referenced file.',
      'The role specified in the GET REST API call must have sufficient privileges on the stage to access the referenced file using the URL.',
    ],
    correct: [0],
    explanation:
      'Pre-signed URLs grant temporary access to anyone with the URL, no Snowflake login required.',
  },
  {
    question: 'What will happen if the volume of data stored in Snowflake increases over time?',
    type: 'single',
    options: [
      'Snowflake will automatically increase the size of the virtual warehouse used to run queries against the storage data.',
      'The number of clusters in the active virtual warehouse being used will scale automatically to accommodate the increased storage data volume.',
      'As the stored data volume increases, the warehouse performance will decline.',
      'The warehouse performance and size will not be affected when the volume of stored data increases.',
    ],
    correct: [3],
    explanation:
      'Snowflake separates compute from storage — more data does not affect warehouse performance.',
  },
  {
    question: 'What can a reader account user do when accessing shared data? (Choose two.)',
    type: 'multiple',
    options: [
      'Insert new data using the COPY INTO <  location  >  command.',
      'Execute secure User-Defined Functions (UDFs).',
      'Remove records using the DELETE command.',
      'Select data from secure views.',
      'Modify records using the UPDATE and MERGE commands.',
    ],
    correct: [1, 3],
    explanation:
      'Reader accounts can query shared data and run secure UDFs, but cannot modify data.',
  },
  {
    question: 'What is a fundamental characteristic of Snowflake micro-partitions?',
    type: 'single',
    options: [
      'They can be read directly as files.',
      'They serve as an index for Snowflake tables.',
      'They are sized based on Time Travel requirements.',
      'Once established, they cannot be changed.',
    ],
    correct: [3],
    explanation: 'Micro-partitions are immutable — once written, they never change.',
  },
  {
    question: 'What happens when a multi-cluster virtual warehouse is resized?',
    type: 'single',
    options: [
      'The auto-suspend feature is automatically enabled for inactive clusters.',
      'The scaling policy of the warehouse is updated.',
      'The new size applies to all clusters within that warehouse configuration.',
      'The minimum and maximum number of clusters is automatically adjusted.',
    ],
    correct: [2],
    explanation:
      'Resizing changes the size (e.g., Large → X-Large) for all current and future clusters.',
  },
  {
    question:
      'Using which copy option when unloading data allows users to include a Universally Unique Identifier (UUID) in the names of unloaded files?',
    type: 'single',
    options: ['VALIDATION_MODE', 'SINGLE', 'HEADER', 'INCLUDE_QUERY_ID'],
    correct: [3],
    explanation: 'INCLUDE_QUERY_ID appends the query ID (a UUID) to each unloaded file name.',
  },
  {
    question: 'Which Snowflake objects use storage? (Choose two.)',
    type: 'multiple',
    options: [
      'Regular table',
      'Regular view',
      'Cached query result',
      'Materialized view',
      'External table',
    ],
    correct: [0, 3],
    explanation:
      'Regular tables and materialized views consume storage; views and result cache do not.',
  },
  {
    question:
      'What type of policy states that each object within Snowflake has a unique owner who can grant access to that object?',
    type: 'single',
    options: [
      'Role-Based Access Control (RBAC)',
      'Discretionary Access Control (DAC)',
      'Mandatory Access Control (MAC)',
      'Rule-Based Access Control (RuBAC)',
    ],
    correct: [1],
    explanation:
      'Snowflake uses Discretionary Access Control (DAC) — owners decide who gets access.',
  },
  {
    question:
      'Which Snowflake multi-cluster virtual warehouse scaling policy or mode will MINIMIZE query queuing by prioritizing the startup of additional clusters?',
    type: 'single',
    options: ['Economy policy', 'Standard policy', 'Auto-scale mode', 'Maximized mode'],
    correct: [1],
    explanation: 'Maximized mode starts all clusters immediately, eliminating queuing.',
  },
  {
    question:
      'Which default warehouse configuration has the highest precedence whenever a new session is created by a user?',
    type: 'single',
    options: [
      'Default warehouse for the user',
      'Default warehouse in the configuration file of the client utilities',
      'Default warehouse specified on a CLI or in drivers/connectors parameters',
      'Default warehouse of the role assigned to the user',
    ],
    correct: [2],
    explanation: 'Session-level parameters (CLI/driver) override user and role defaults.',
  },
  {
    question:
      'What type of authentication is recommended when creating a Snowflake service account that will connect to a third-party application?',
    type: 'single',
    options: [
      'Username and password',
      'Key-pair authentication',
      'Multi-Factor Authentication (MFA)',
      'Single Sign-on (SSO)',
    ],
    correct: [1],
    explanation:
      'Key-pair authentication is the most secure and recommended method for service accounts.',
  },
  {
    question:
      'Which type of query would benefit from enabling the query acceleration service on the virtual warehouse?',
    type: 'single',
    options: [
      'Queries with no filters or aggregation',
      'Queries that are queued in the warehouse',
      'Queries that use more resources than the typical query',
      'Queries that contain a high cardinality GROUP BY expression',
    ],
    correct: [2],
    explanation:
      'Query Acceleration offloads large, complex queries to additional serverless compute.',
  },
  {
    question: 'Which table function will return the output of a previously-run command?',
    type: 'single',
    options: ['FLATTEN', 'QUERY_HISTORY', 'TASK_HISTORY', 'RESULT_SCAN'],
    correct: [3],
    explanation: 'RESULT_SCAN(LAST_QUERY_ID()) returns the result of the previous query.',
  },
  {
    question: 'How can a relational table be unloaded into a JSON file?',
    type: 'single',
    options: [
      'Use the OBJECT_CONSTRUCT function in conjunction with the COPY INTO <  location  >  command.',
      'Use the COPY INTO <  location  >  command with the file_format set as JSON.',
      'Use the PUT command with the file_format set as JSON.',
      'Use the GET command with the file_format set as JSON.',
    ],
    correct: [0],
    explanation:
      'COPY INTO <  location  >  with FILE_FORMAT = (TYPE = JSON) unloads directly to JSON.',
  },
  {
    question: 'When do Snowflake object owners lose their ability to make grant decisions?',
    type: 'single',
    options: [
      'When the object owner has been granted a database role',
      'When the object owner has been granted an account role',
      'When the object is part of a managed access schema',
      'When the object is part of a regular schema',
    ],
    correct: [2],
    explanation:
      'In managed access schemas, only the schema owner or MANAGE GRANTS roles can grant privileges.',
  },
  {
    question:
      'Which command allows a user to unload data from a Snowflake database table into one or more files in a Snowflake or external stage?',
    type: 'single',
    options: ['GET', 'LIST', 'PUT', 'COPY INTO <  location  > '],
    correct: [3],
    explanation:
      'COPY INTO <  location  >  is used for unloading data to internal or external stages.',
  },
  {
    question:
      'Which Snowflake feature enables loading data from cloud storage as soon as files are available in a stage?',
    type: 'single',
    options: ['COPY_INTO <  location  >  command', 'Data replication', 'Snowpipe', 'Direct share'],
    correct: [2],
    explanation: 'Snowpipe automatically loads new files as soon as they appear in a stage.',
  },
  {
    question: 'Which JSON paths are considered to be equivalent in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      "src['customer']['EMAIL']",
      "src['CUSTOMER']['Email']",
      'SRC:Customer.Email',
      'src:customer.email',
      'SRC:customer.email',
    ],
    correct: [3, 4],
    explanation: 'Unquoted identifiers in colon notation are case-insensitive.',
  },
  {
    question: 'Which privilege is required for a user to be able to view a resource monitor?',
    type: 'single',
    options: ['USAGE', 'SELECT', 'MONITOR', 'OPERATE'],
    correct: [2],
    explanation: 'MONITOR privilege is required to view resource monitor details.',
  },
  {
    question: 'What happens when a table or schema with a standard retention period is dropped?',
    type: 'single',
    options: [
      'The object is immediately removed from the system.',
      'The object is instantaneously moved to Fail-safe.',
      'The object is retained but all associated data is immediately purged.',
      'The object is retained for the data retention period.',
    ],
    correct: [3],
    explanation: 'Dropped objects remain recoverable via Time Travel for the retention period.',
  },
  {
    question:
      'When cloning tables, which INFORMATION_SCHEMA view will show different columns for owned storage and referenced storage?',
    type: 'single',
    options: [
      'DATABASE_STORAGE_USAGE_HISTORY',
      'STAGE_STORAGE_USAGE_HISTORY',
      'TABLE_STORAGE_METRICS',
      'STORAGE_USAGE',
    ],
    correct: [2],
    explanation: 'TABLE_STORAGE_METRICS separates owned vs referenced (cloned) storage.',
  },
  {
    question:
      'Based on a review of a Query Profile, which scenarios will benefit the MOST from the use of a data clustering key? (Choose two.)',
    type: 'multiple',
    options: [
      'A column that appears most frequently in ORDER BY operations',
      'A column that appears most frequently in WHERE operations',
      'A column that appears most frequently in GROUP BY operations',
      'A column that appears most frequently in AGGREGATE operations',
      'A column that appears most frequently in JOIN operations',
    ],
    correct: [1, 4],
    explanation: 'Clustering keys are most effective on columns used in WHERE clauses and JOINs.',
  },
  {
    question:
      'When working with dimension tables that change frequently, what is the recommended way to manage costs?',
    type: 'single',
    options: [
      'Keep the Time Travel retention period for the dimension tables to 7 days or less.',
      'Make the dimension tables transient with a retention period of 0 days, and backup the table daily to a permanent table. Delete all but the latest backup.',
      'Make the dimension tables transient and back-up the data daily into a permanent table using cloning.',
      'Make the dimension tables permanent with a retention period of 7 days. Replicate the database to a secondary database once a week.',
    ],
    correct: [1],
    explanation:
      'Transient tables with 0-day retention + daily manual backup minimizes long-term storage costs.',
  },
  {
    question:
      'What Snowflake privilege should be granted to allow a non-ACCOUNTADMIN access to billing information?',
    type: 'single',
    options: ['OPERATE', 'MONITOR USAGE', 'OWNERSHIP', 'USAGE'],
    correct: [1],
    explanation: 'MONITOR USAGE global privilege allows access to billing and usage data.',
  },
  {
    question:
      'A stream can be created on which Snowflake objects to record data manipulation language (DML) changes? (Choose two.)',
    type: 'multiple',
    options: ['Databases', 'Standard tables', 'Standard views', 'Schemas', 'Pipes'],
    correct: [1, 2],
    explanation: 'Streams can be created on tables and views to capture DML changes.',
  },
  {
    question:
      'When creating a file format to load JSON data into Snowflake, what command will remove brackets ([]) from the data?',
    type: 'single',
    options: [
      'STRIP_NULL_VALUES = TRUE',
      'REPLACE_INVALID_CHARACTERS = TRUE',
      'TRIM_SPACE = TRUE',
      'STRIP_OUTER_ARRAY = TRUE',
    ],
    correct: [3],
    explanation: 'STRIP_OUTER_ARRAY = TRUE removes the outer array brackets from JSON files.',
  },
  {
    question:
      'Which transformation techniques are supported for bulk loading data into Snowflake using the COPY INTO command? (Choose two.)',
    type: 'multiple',
    options: [
      'Column grouping',
      'Column omission',
      'Column reordering',
      'Column aggregation',
      'Selection of a limited number of rows',
    ],
    correct: [1, 2],
    explanation:
      'COPY INTO supports column omission and reordering via SELECT in the transformation.',
  },
  {
    question:
      'What virtual warehouse feature or setting will reduce the performance impact when running larger-than-average queries, by offloading portions of the query processing work to shared compute resources?',
    type: 'single',
    options: [
      'Using a multi-cluster virtual warehouse',
      'Using the query acceleration service',
      'Using the search optimization service',
      'Disabling auto-suspend',
    ],
    correct: [1],
    explanation: 'Query Acceleration Service offloads heavy queries to serverless compute.',
  },
  {
    question:
      'Which schema-level objects allow the user to periodically perform an action under specific conditions, based on data within Snowflake?',
    type: 'single',
    options: ['Alerts', 'External tables', 'Secure views', 'Materialized views'],
    correct: [0],
    explanation: 'Alerts execute actions on a schedule when data conditions are met.',
  },
  {
    question: 'Which privilege must be granted to show data categories in a Data Exchange?',
    type: 'single',
    options: ['MONITOR PRIVILEGE', 'USAGE PRIVILEGE', 'OWNERSHIP PRIVILEGE', 'IMPORTED PRIVILEGES'],
    correct: [3],
    explanation:
      'IMPORTED PRIVILEGES is required on the shared database to access Data Exchange objects.',
  },
  {
    question:
      'Which tool or service can be used to graphically explore and manage data stored within a Snowflake account, including databases, tables, and views?',
    type: 'single',
    options: ['SnowSQL', 'Snowsight', 'Snowflake virtual warehouses', 'SnowCD'],
    correct: [1],
    explanation: 'Snowsight is the modern web UI for exploring and managing Snowflake data.',
  },
  {
    question: 'What can be interpreted based on the number of nodes reported in a Query Profile?',
    type: 'single',
    options: [
      'Query execution time',
      'Network bandwidth during query execution',
      'Data spillage',
      'Compute required for metadata management',
    ],
    correct: [1],
    explanation:
      'The number of nodes in Query Profile indicates the compute resources (e.g., warehouse size) used, not listed in the options.',
  },
  {
    question: 'Which command must be included in CREATE PIPE .. AS <  command  >  statements?',
    type: 'single',
    options: ['COPY INTO', 'SELECT', 'PUT', 'INSERT'],
    correct: [0],
    explanation: 'Snowpipe definition requires a COPY INTO statement.',
  },
  {
    question: 'What languages can be used to write User-Defined Functions (UDFs)? (Choose two.)',
    type: 'multiple',
    options: ['Groovy', 'JavaScript', 'Python', 'Spark', 'Golang'],
    correct: [1, 2],
    explanation: 'Snowflake supports JavaScript UDFs and Python (Snowpark) UDFs.',
  },
  {
    question: "Which command will create an ARRAY output from inputs 'a' and 'b'?",
    type: 'single',
    options: [
      "ARRAY_CONSTRUCT('a', 'b');",
      "TO_ARRAY('a', 'b');",
      "AS_ARRAY('a', 'b');",
      "LISTAGG('a', 'b');",
    ],
    correct: [0],
    explanation:
      "ARRAY_CONSTRUCT creates an ARRAY from the provided inputs ('a', 'b'). TO_ARRAY converts a single value to an ARRAY, LISTAGG concatenates strings, and AS_ARRAY is not a valid Snowflake function.",
  },
  {
    question:
      'What command will grant the SELECT privilege on all new tables created in the mydb.myschema schema to the read_only role?',
    type: 'single',
    options: [
      'GRANT SELECT ON ALL TABLES IN SCHEMA mydb.myschema TO ROLE read_only;',
      'GRANT USAGE ON FUTURE SCHEMAS IN DATABASE mydb TO ROLE read_only;',
      'GRANT SELECT ON FUTURE TABLES IN SCHEMA mydb.myschema TO ROLE read_only;',
      'GRANT USAGE ON ALL SCHEMAS IN DATABASE mydb TO ROLE read_only;',
    ],
    correct: [2],
    explanation:
      'GRANT SELECT ON FUTURE TABLES grants the SELECT privilege to all tables created in the future in the specified schema.',
  },
  {
    question:
      'How do the scaling policy parameters impact the performance of a Snowflake virtual warehouse?',
    type: 'single',
    options: [
      'Setting the SCALING_POLICY = STANDARD parameter causes the warehouse to scale out to reduce queueing instead of conserving credits.',
      'Setting the SCALING_POLICY = ECONOMY parameter causes the warehouse to always scale out more conservatively once any queries have been in the queue for less than 1 minute.',
      'Setting the SCALING_POLICY = STANDARD parameter prevents the warehouse from scaling in once it has scaled out.',
      'Setting the SCALING_POLICY = ECONOMY parameter will keep the warehouse size fixed, regardless of the workload.',
    ],
    correct: [0],
    explanation:
      'STANDARD scaling prioritizes performance by scaling out to reduce queuing, while ECONOMY scales out more conservatively to save credits.',
  },
  {
    question:
      'Granting which privilege will allow a role other than the ACCOUNTADMIN role to access a shared database?',
    type: 'single',
    options: ['MANAGE GRANTS', 'GRANT PRIVILEGES', 'REFERENCE_USAGE', 'IMPORTED PRIVILEGES'],
    correct: [3],
    explanation: 'IMPORTED PRIVILEGES allows a role to access objects in a shared database.',
  },
  {
    question:
      'What happens to deleted or modified records during the Time Travel retention period?',
    type: 'single',
    options: [
      'They are permanently deleted.',
      'They are moved to a separate table.',
      'They are versioned for recovery.',
      'They are archived in a backup.',
    ],
    correct: [2],
    explanation:
      'Time Travel retains deleted or modified records for recovery within the retention period (e.g., 1–90 days, depending on the edition).',
  },
  {
    question: 'What is required to set a stored procedure to EXECUTE AS? (Choose two.)',
    type: 'multiple',
    options: ['ACCOUNTADMIN role', 'SCHEMA_USER', 'Owner’s rights', 'Caller’s rights', 'USER'],
    correct: [2, 3],
    explanation:
      'A stored procedure can be set to EXECUTE AS OWNER (owner’s rights) or EXECUTE AS CALLER (caller’s rights) to determine privilege context.',
  },
  {
    question:
      'A query against which table will provide details about bytes consumed by active, Time Travel, and Fail-safe storage?',
    type: 'single',
    options: [
      'METERING_HISTORY',
      'DATA_TRANSFER_HISTORY',
      'CREDIT_USAGE_HISTORY',
      'TABLE_STORAGE_METRICS',
    ],
    correct: [3],
    explanation:
      'TABLE_STORAGE_METRICS provides details on storage usage, including active, Time Travel, and Fail-safe storage.',
  },
  {
    question:
      'Which commands can be used to address UTF-8 encoding errors when loading JSON files into a Snowflake table? (Choose two.)',
    type: 'multiple',
    options: [
      'STRIP_OUTER_ARRAY',
      'REPLACE_INVALID_CHARACTERS',
      'STRIP_NULL_VALUES',
      'IGNORE_UTF8_ERRORS',
      'SKIP_BYTE_ORDER_MARK',
    ],
    correct: [1, 3],
    explanation:
      'REPLACE_INVALID_CHARACTERS replaces invalid UTF-8 characters, and IGNORE_UTF8_ERRORS ignores them.',
  },
  {
    question:
      'What is the MINIMUM privilege required to read a file URL from an internal stage directory table using a SELECT statement?',
    type: 'single',
    options: [
      'READ on the stage',
      'USAGE on the stage',
      'WRITE on the stage',
      'OWNERSHIP on the stage',
    ],
    correct: [0],
    explanation:
      'The READ privilege is required to access file URLs in an internal stage’s directory table.',
  },
  {
    question: 'At what levels can a network policy be configured in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Role level',
      'User level',
      'Account level',
      'Database level',
      'Virtual warehouse level',
    ],
    correct: [1, 2],
    explanation:
      'Network policies can be applied at the user or account level to control IP-based access.',
  },
  {
    question:
      'When creating a custom role that will be allowed to create warehouses and databases, which system-defined role does Snowflake recommend also be assigned to the custom role?',
    type: 'single',
    options: ['ACCOUNTADMIN', 'USERADMIN', 'SYSADMIN', 'SECURITYADMIN'],
    correct: [2],
    explanation:
      'SYSADMIN is recommended for roles that create warehouses and databases, as it has the necessary privileges.',
  },
  {
    question: 'Which command is used in Snowflake to manually refresh a directory table?',
    type: 'single',
    options: ['TRUNCATE STAGE', 'ALTER STAGE', 'ALTER TABLE', 'ALTER VIEW'],
    correct: [1],
    explanation:
      'ALTER STAGE with the REFRESH option manually refreshes a directory table’s metadata.',
  },
  {
    question:
      'What is the purpose of configuring the scale factor parameter when using the query acceleration service?',
    type: 'single',
    options: [
      'It increases the default selectivity of any filter parameters when the query is accelerated.',
      'It is used when there are not enough partitions in a table to accelerate the query.',
      'It controls costs by setting an upper bound on the amount of compute resources a warehouse can use for query acceleration.',
      'It is a concurrency control tool used to avoid unnecessary scaling up when the query is accelerated and the warehouse is running in Maximized mode.',
    ],
    correct: [2],
    explanation:
      'The scale factor limits the compute resources used by the query acceleration service to manage costs.',
  },
  {
    question:
      'If both the DATA_RETENTION_TIME_IN_DAYS and the MIN_DATA_RETENTION_TIME_IN_DAYS parameters are set at the account level, what will the MINIMUM data retention period be for an object?',
    type: 'single',
    options: [
      'The maximum value of the DATA_RETENTION_TIME_IN_DAYS or the MIN_DATA_RETENTION_TIME_IN_DAYS, whichever is the greatest.',
      'The minimum value of the DATA_RETENTION_TIME_IN_DAYS or the MIN_DATA_RETENTION_TIME_IN_DAYS, whichever is the least.',
      'The period set in the DATA_RETENTION_TIME_IN_DAYS parameter.',
      'The period set in the MIN_DATA_RETENTION_TIME_IN_DAYS parameter.',
    ],
    correct: [0],
    explanation:
      'The effective retention period is the greater of DATA_RETENTION_TIME_IN_DAYS and MIN_DATA_RETENTION_TIME_IN_DAYS.',
  },
  {
    question: 'What is a Snowflake recommendation for the use of key pair authentication?',
    type: 'single',
    options: [
      'Keys should be stored in a secure location on the ACCOUNTADMIN file system.',
      'Operator access should be limited to read-only access.',
      'Key pair rotation should be automated.',
      'Role access should be designed to cover the operations that the user account anticipates needing.',
    ],
    correct: [2],
    explanation:
      'Snowflake recommends automating key pair rotation for security in key-pair authentication.',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition that users storing protected information in Snowflake should use for regulatory compliance?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [2],
    explanation:
      'Business Critical edition provides features like HIPAA compliance and enhanced encryption for regulatory needs.',
  },
  {
    question:
      'A company stores Personal Identifiable Information (PII) in Snowflake across multiple countries. How can Snowflake be used to automatically identify data, in order to support data governance requirements for each country?',
    type: 'single',
    options: [
      'Tag all columns directly that contain PII.',
      'Create a custom User-Defined Function (UDF)',
      'Use semantic category classification.',
      'Implement a third-party service to protect the data.',
    ],
    correct: [2],
    explanation:
      'Snowflake’s data classification feature uses semantic category classification to automatically identify PII for governance.',
  },
  {
    question: 'Use of which Snowflake feature or service can be used with a materialized view?',
    type: 'single',
    options: ['Time Travel', 'Fail-safe', 'Clustering', 'Cloning'],
    correct: [3],
    explanation: 'Materialized views support cloning; Time Travel and Fail-safe are not supported.',
  },
  {
    question:
      'What action will change a customized schedule for a resource monitor back to the default schedule?',
    type: 'single',
    options: [
      'Changing the monitoring frequency to the default value',
      'Changing the monitoring start timestamp to the default value',
      'Dropping and re-creating the monitor',
      'Cloning the monitor and then editing the cloned monitor schedule',
    ],
    correct: [2],
    explanation: 'Dropping and re-creating the resource monitor resets it to the default schedule.',
  },
  {
    question: 'What objects are required to unload data into cloud data storage? (Choose two.)',
    type: 'multiple',
    options: [
      'An external stage',
      'A FILE FORMAT definition',
      'A STORAGE_INTEGRATION definition',
      'An external table',
      'A directory table',
    ],
    correct: [0, 1],
    explanation:
      'An external stage and a file format are required to unload data to cloud storage using COPY INTO < location >.',
  },
  {
    question:
      'The metrics for a virtual warehouse show significant spillage to local disk storage. How should this be addressed?',
    type: 'single',
    options: [
      'Change the warehouse SCALING_POLICY parameter to STANDARD.',
      'Increase the warehouse STATEMENT_QUEUED_TIMEOUT_IN_SECONDS parameter.',
      'Increase the size of the warehouse.',
      'Enable the warehouse auto-resume feature.',
    ],
    correct: [2],
    explanation: 'Increasing warehouse size adds more memory, reducing spillage to local disk.',
  },
  {
    question: 'What situation is likely to cause data spillage when a query is run?',
    type: 'single',
    options: [
      'When the query contains multiple filters and no data is returned.',
      'When a virtual warehouse runs out of memory while executing the query.',
      'When the number of queries exceeds the MAX_CONCURRENCY_LEVEL parameter setting.',
      'When running queries that exceed the STATEMENT_TIMEOUT_IN_SECONDS parameter setting.',
    ],
    correct: [1],
    explanation:
      'Spillage occurs when a query exceeds the warehouse’s memory, causing data to spill to disk.',
  },
  {
    question:
      'Which type of URL can give access to a PDF file stored in a stage using a web browser?',
    type: 'single',
    options: ['BUILD_STAGE_FILE_URL', 'Scoped URL', 'File URL', 'Pre-signed URL'],
    correct: [3],
    explanation:
      'Pre-signed URLs allow temporary browser-based access to files in a stage, such as a PDF.',
  },
  {
    question:
      'What is the MAXIMUM data retention period of transient databases when using the Snowflake Enterprise edition?',
    type: 'single',
    options: ['1 day', '7 days', '30 days', '90 days'],
    correct: [0],
    explanation:
      'Transient databases in Enterprise edition have a maximum Time Travel retention period of 1 day.',
  },
  {
    question: 'Which least-privileged role is required to create a resource monitor?',
    type: 'single',
    options: ['USERADMIN', 'SECURITYADMIN', 'ACCOUNTADMIN', 'SYSADMIN'],
    correct: [2],
    explanation:
      'Creating resource monitors requires the ACCOUNTADMIN role, as it involves account-level privileges.',
  },
  {
    question: 'What does the percentage scanned from cache in the Query Profile signify?',
    type: 'single',
    options: [
      'The percentage of data scanned from the local disk cache.',
      'The percentage of data scanned from the remote disk cache.',
      'The percentage of data scanned from the metadata cache.',
      'The percentage of data scanned from the query cache.',
    ],
    correct: [0],
    explanation:
      'This metric shows the percentage of data read from the local disk cache of the warehouse.',
  },
  {
    question:
      'Which feature allows users to modify clustering algorithms that are built into Snowflake?',
    type: 'single',
    options: ['Micro-partitions', 'Key partitions', 'Partition clustering', 'Clustering keys'],
    correct: [3],
    explanation:
      'Clustering keys allow users to define how data is organized in micro-partitions for better query performance.',
  },
  {
    question:
      'What costs are associated with updating the data in a materialized view? (Choose two.)',
    type: 'multiple',
    options: [
      'Virtual warehouse compute costs',
      'Snowflake-managed compute costs',
      'Cloud services costs',
      'Data transfer costs',
      'Time Travel costs',
    ],
    correct: [0, 1],
    explanation:
      'Materialized views incur compute costs for maintenance, either via a user’s virtual warehouse or Snowflake-managed compute.',
  },
  {
    question:
      'A user is granted the SALES_ANALYST role which has the SELECT privilege on all tables in the REGION.SALES schema. However, the user cannot access any newly-created tables. Which command will grant the SALES_ANALYST role the SELECT privilege on the newly-created tables?',
    type: 'single',
    options: [
      'GRANT SELECT ON ALL TABLES IN SCHEMA REGION.SALES TO ROLE SALES_ANALYST;',
      'GRANT SELECT ON FUTURE TABLES IN SCHEMA REGION.SALES TO ROLE SALES_ANALYST;',
      'GRANT USAGE ON ALL SCHEMAS IN DATABASE REGION TO ROLE SALES_ANALYST;',
      'GRANT USAGE ON ALL SCHEMA REGION.SALES TO ROLE SALES_ANALYST;',
    ],
    correct: [1],
    explanation:
      'GRANT SELECT ON FUTURE TABLES ensures the role has access to newly created tables.',
  },
  {
    question:
      "Which Snowflake authentication method allows an application to access data without sharing the user's login credentials?",
    type: 'single',
    options: [
      'Multi-Factor Authentication (MFA)',
      'Snowflake OAuth',
      'Key-pair authentication',
      'Single Sign-On (SSO)',
    ],
    correct: [1],
    explanation:
      'Snowflake OAuth allows applications to access data using tokens, without sharing user credentials.',
  },
  {
    question:
      'How does Snowflake support the use of structured and semi-structured data? (Choose two.)',
    type: 'multiple',
    options: [
      'Structured data is supported through the use of traditional relational database tables, organized into rows and columns.',
      'Structured and semi-structured data are stored in separate physical storage locations; users must choose which type of data to use when creating a table.',
      'Semi-structured data is supported through the use of automatically indexed database tables.',
      'All semi-structured data is automatically converted into structured data when it is loaded into Snowflake.',
      'Users can load and query semi-structured data using SQL, using the SQL semi-structured data handling functions.',
    ],
    correct: [0, 4],
    explanation:
      'Snowflake supports structured data in relational tables and semi-structured data (e.g., JSON) via SQL functions like PARSE_JSON.',
  },
  {
    question:
      'When is the VARIANT data type suitable when using semi-structured data? (Choose two.)',
    type: 'multiple',
    options: [
      'When there is a need for a predefined schema which cannot be changed after it is created.',
      'When there is a need to add or modify elements within the data structure without interrupting the session.',
      'When the data set is huge and the order of the data elements in the data set does not change.',
      'When the data contains nested data structures like JSON or XML.',
      'When the data consists of images and videos.',
    ],
    correct: [1, 3],
    explanation:
      'VARIANT is ideal for flexible, nested semi-structured data like JSON or XML, allowing dynamic modifications.',
  },
  {
    question: 'Which Snowflake objects can process staged files in parallel? (Choose two.)',
    type: 'multiple',
    options: [
      'User-Defined Functions (UDFs)',
      'User-Defined Table Functions (UDTFs)',
      'Stored procedures',
      'Snowpipes',
      'Tasks',
    ],
    correct: [3, 4],
    explanation:
      'Snowpipes and Tasks can process staged files in parallel, leveraging Snowflake’s compute resources.',
  },
  {
    question:
      'Based on the Snowflake edition being used, what is the default data retention time in Time Travel?',
    type: 'single',
    options: [
      '1 day for the Standard edition',
      '1 month for the Standard edition',
      '1 month for the Enterprise edition',
      '100 days for the Enterprise edition',
    ],
    correct: [0],
    explanation:
      'The default Time Travel retention period is 1 day for Standard edition and up to 90 days for Enterprise edition.',
  },
  {
    question:
      'While unloading a relational table to JSON, which function can be combined with the COPY INTO < location > command to convert the table rows into a relational table with a single VARIANT column, and then unload the rows into a file?',
    type: 'single',
    options: ['OBJECT_AGG', 'OBJECT_CONSTRUCT', 'OBJECT_PICK', 'OBJECT_CONSTRUCT_KEEP_NULL'],
    correct: [1],
    explanation:
      'OBJECT_CONSTRUCT converts relational data into a JSON object (VARIANT column) for unloading with COPY INTO < location >.',
  },
  {
    question:
      'What target locations can be used when unloading data using the COPY INTO < location > command? (Choose two.)',
    type: 'multiple',
    options: [
      'A Snowflake schema',
      'A Snowflake stage',
      'A local file system',
      'A Snowflake stream',
      'Cloud storage in Google (GCP), AWS, or Microsoft Azure',
    ],
    correct: [1, 4],
    explanation:
      'COPY INTO < location > supports unloading to Snowflake stages (internal/external) or cloud storage.',
  },
  {
    question:
      'A query of data used in a dashboard is performing poorly. The query aggregates data that only changes at the end of the business day, recalculating every time the dashboard is viewed. How can the query performance be improved?',
    type: 'single',
    options: [
      'Ensure that only the columns needed in the dashboard are selected.',
      'Recommend that a dedicated warehouse be used to view the dashboard.',
      'Create a row access policy so users see only selected data.',
      'Create a materialized view of the query.',
    ],
    correct: [3],
    explanation:
      'A materialized view precomputes and stores the aggregated results, improving performance for static data.',
  },
  {
    question:
      'Use of which feature or setting consumes Snowflake credits, but generates no storage costs?',
    type: 'single',
    options: [
      'Materialized view',
      'Table clustering',
      'Query acceleration service',
      'Search optimization service',
    ],
    correct: [2],
    explanation:
      'Query acceleration service uses compute credits but does not incur storage costs, unlike materialized views or clustering.',
  },
  {
    question: 'What happens when a value in a single row of a large table is updated?',
    type: 'single',
    options: [
      'The affected micro-partition will be modified.',
      'All existing micro-partitions will be modified.',
      'The affected micro-partition will be deleted and recreated.',
      'All micro-partitions will be deleted and recreated.',
    ],
    correct: [2],
    explanation:
      'Snowflake’s micro-partitions are immutable; updates delete and recreate the affected micro-partition.',
  },
  {
    question:
      'While using the COPY INTO command, how can a JSON NULL value be converted to a SQL NULL value using the LEAST amount of operational overhead?',
    type: 'single',
    options: [
      'Use the STRIP_NULL_VALUE function.',
      'Cast the VARIANT NULL value as a string.',
      'Use the OBJECT_CONSTRUCT_KEEP_NULL function.',
      'Use a custom procedure to perform the conversion.',
    ],
    correct: [0],
    explanation:
      'The STRIP_NULL_VALUES file format option converts JSON NULLs to SQL NULLs during COPY INTO.',
  },
  {
    question:
      'How can a data provider deliver data privately to multiple data consumers, at no cost for the consumers?',
    type: 'single',
    options: [
      'Use a Data Exchange.',
      'Use database replication.',
      'Use the Snowflake Marketplace.',
      'Unload the data to external storage.',
    ],
    correct: [0],
    explanation:
      'A Data Exchange allows private data sharing with invited consumers at no cost to them.',
  },
  {
    question:
      'Which Snowflake feature will override the default setting that allows users to connect to the service from any computer or device?',
    type: 'single',
    options: ['Single Sign-On (SSO)', 'Security roles', 'End-to-end encryption', 'Network policy'],
    correct: [3],
    explanation:
      'Network policies restrict access based on IP addresses, overriding default open access.',
  },
  {
    question: 'What can a directory table be used for? (Choose two.)',
    type: 'multiple',
    options: [
      'Retrieve a list of all unstructured files on a stage.',
      'Set an automatic refresh of the metadata for a directory table on internal and external stages.',
      'Remove files from a directory table using the get command.',
      'Create a view for unstructured data.',
      'Process unstructured data using Snowflake system-defined functions.',
    ],
    correct: [0, 1],
    explanation: 'Directory tables list staged files and support automatic metadata refresh.',
  },
  {
    question:
      'Which privilege allows a user to change the state of a virtual warehouse that was set to AUTO_RESUME = FALSE?',
    type: 'single',
    options: ['APPLYBUDGET', 'MONITOR', 'OPERATE', 'USAGE'],
    correct: [2],
    explanation:
      'The OPERATE privilege allows starting or stopping a warehouse, including when AUTO_RESUME = FALSE.',
  },
  {
    question: 'Which models are supported for Snowflake access control? (Choose two.)',
    type: 'multiple',
    options: [
      'UAC (User Access Control)',
      'RBAC (Role-Based Access Control)',
      'DAC (Discretionary Access Control)',
      'OAC (Object Access Control)',
      'EBAC (Entity-Based Access Control)',
    ],
    correct: [1, 2],
    explanation:
      'Snowflake uses RBAC for role-based privileges and DAC for owner-based privilege grants.',
  },
  {
    question:
      'Which features of a query would make it ineligible for the query acceleration service? (Choose two.)',
    type: 'multiple',
    options: [
      'The query does not filter or aggregate data.',
      'The query includes a LIMIT clause but does not have an ORDER BY clause.',
      'The query will only return deterministic results.',
      'The query has large scans.',
      'The query includes highly-selective filters.',
    ],
    correct: [0, 1],
    explanation:
      'Query acceleration service does not support queries without filters/aggregations or those with LIMIT without ORDER BY.',
  },
  {
    question:
      'When loading JSON files that contain NULL values, which file format option should be set to = TRUE?',
    type: 'single',
    options: ['NULL_IF', 'STRIP_NULL_VALUES', 'EMPTY_FIELD_AS_NULL', 'RETURN_ERRORS'],
    correct: [1],
    explanation: 'STRIP_NULL_VALUES = TRUE converts JSON NULLs to SQL NULLs during loading.',
  },
  {
    question:
      'Users report slow query executions on a large permanent table. What will improve the query performance?',
    type: 'single',
    options: [
      'Upgrading all users to the ACCOUNTADMIN role',
      'Scaling out the virtual warehouse, using multi-cluster functionality in Economy mode with the maximum cluster set to 1',
      'Creating a clustering key on the table containing 3 or 4 columns that are most actively used in filters and joins',
      'Creating a materialized view and access it using Time Travel to speed query processing',
    ],
    correct: [2],
    explanation:
      'Clustering keys optimize data organization for filters and joins, improving query performance on large tables.',
  },
  {
    question:
      'When semi-structured data includes dates and timestamps as string values, what Snowflake recommendation will OPTIMIZE pruning and MINIMIZE storage consumption?',
    type: 'single',
    options: [
      'Store the data as a VARIANT data type.',
      'Store the data as an ARRAY data type.',
      'Strip the outer array using TRY_PARSE_JSON.',
      'Flatten the key data into relational columns.',
    ],
    correct: [3],
    explanation:
      'Flattening semi-structured data into relational columns (e.g., DATE, TIMESTAMP) optimizes pruning and reduces storage overhead.',
  },
  {
    question:
      'To start using data listings from the Snowflake Marketplace as a provider or consumer, Snowflake customers must agree to additional terms of service and abide by Snowflake policies using which role?',
    type: 'single',
    options: ['SECURITYADMIN', 'ACCOUNTADMIN', 'SYSADMIN', 'ORGADMIN'],
    correct: [3],
    explanation: 'ACCOUNTADMIN is required to agree to Marketplace terms and manage listings.',
  },
  {
    question:
      'If a network policy is applied at both the account and user levels, which policy takes precedence?',
    type: 'single',
    options: [
      'The account-level policy',
      'The user-level policy',
      'The most-restrictive policy',
      'The policy that was applied first',
    ],
    correct: [1],
    explanation: 'User-level network policies take precedence over account-level policies.',
  },
  {
    question: 'What can be used to query a Snowpipe ingestion history from the last 14 days?',
    type: 'single',
    options: ['COPY_HISTORY', 'LOAD_HISTORY', 'PIPE_USAGE_HISTORY', 'VALIDATE_PIPE_LOAD'],
    correct: [0],
    explanation:
      'COPY_HISTORY in INFORMATION_SCHEMA includes Snowpipe ingestion history for the last 14 days.',
  },
  {
    question:
      'A user needs to load a 270 GB dataset into Snowflake. What is the recommended FIRST step?',
    type: 'single',
    options: [
      'Load the file using SnowSQL and the COPY INTO < location > command.',
      'Scale-up the virtual warehouse being used to load the data.',
      'Organize the data into smaller, compressed files before loading.',
      'Load the data using Snowsight.',
    ],
    correct: [2],
    explanation:
      'Splitting large datasets into smaller, compressed files (e.g., 10–100 MB) improves loading efficiency.',
  },
  {
    question:
      'How can customer data be restricted by country for a global company using a multi-tenant environment?',
    type: 'single',
    options: [
      'Implement a new account structure and create sub-accounts for each country. Then replicate the required data.',
      'Implement a row-level security policy in the customer table that looks at a mapping table identifying which users should have access to what data.',
      'Implement a secure User-Defined Function (UDF) and use a secure data share for each country.',
      "Implement a column-level security policy in the customer table that restricts access based on the user's geographic location.",
    ],
    correct: [1],
    explanation:
      'Row-level security (row access policies) efficiently restricts data access by country with minimal overhead.',
  },
  {
    question:
      'The granting of the global MANAGE WAREHOUSES privilege is equivalent to granting which privileges on a virtual warehouse? (Choose two.)',
    type: 'multiple',
    options: ['DELETE', 'MODIFY', 'OPERATE', 'USAGE', 'OWNERSHIP'],
    correct: [1, 2],
    explanation:
      'MANAGE WAREHOUSES grants MODIFY (e.g., resize) and OPERATE (e.g., start/stop) privileges on warehouses.',
  },
  {
    question: 'How can the outer array structure of a semi-structured file be removed?',
    type: 'single',
    options: [
      'Use the parameter STRIP_OUTER_ARRAY = TRUE in a COPY INTO command.',
      'Set the file format to eliminate any outer array structure before initiating the COPY INTO command.',
      'Filter the outer array structure using a PUT command with the INCLUDE_OUTER_ARRAY = FALSE parameter.',
      'Use the FLATTEN command with the OUTER ARRAY = FALSE parameter.',
    ],
    correct: [0],
    explanation:
      'STRIP_OUTER_ARRAY = TRUE in the file format removes outer arrays during data loading.',
  },
  {
    question: 'Câu hỏi hình ảnh?',
    type: 'single',
    options: ['', '', '', '.'],
    correct: [1],
    explanation: 'Câu hỏi hình ảnh.',
  },
  {
    question:
      'Which characteristic would make a query a good candidate for the query acceleration service?',
    type: 'single',
    options: [
      'The query contains a GROUP BY expression with high cardinality.',
      'The query is running against a table that does not have a cluster key.',
      'The query contains functions that return nondeterministic results.',
      'The query demands more virtual warehouse resources than usual.',
    ],
    correct: [3],
    explanation:
      'Query acceleration service is ideal for resource-intensive queries that exceed typical warehouse capacity.',
  },
  {
    question: 'Which Snowflake command or feature is designed for continuous data ingestion?',
    type: 'single',
    options: ['COPY INTO', 'Snowsight', 'Snowpipe', 'Streams'],
    correct: [2],
    explanation: 'Snowpipe enables continuous data ingestion from staged files.',
  },
  {
    question:
      'Which columns in the Snowflake.Account_usage.query_history view will help a user optimize retried queries and understand query execution speed fluctuations? (Choose two.)',
    type: 'multiple',
    options: [
      'BYTES_SCANNED',
      'QUERY_RETRY_TIME',
      'FAULT_HANDLING_TIME',
      'QUERY_ACCELERATION_PARTITIONS_SCANNED',
      'QUERY_RETRY_CAUSE',
    ],
    correct: [2, 5],
    explanation:
      'EXECUTION_TIME and ERROR_CODE in QUERY_HISTORY help analyze retry causes and performance fluctuations, but none of the listed options are relevant.',
  },
  {
    question: 'What are the benefits of using the Snowflake ACCESS_HISTORY view? (Choose two.)',
    type: 'multiple',
    options: [
      'It identifies data that is not being used so that it can be archived or deleted.',
      'It allows the user to compare query performance data over time.',
      'It audits whether query policies are being enforced correctly.',
      'It tracks how sensitive data has been moved.',
      'It allows users to track the relationships among objects.',
    ],
    correct: [0, 3],
    explanation:
      'ACCESS_HISTORY tracks data access and modifications, aiding in auditing policies and sensitive data movement.',
  },
  {
    question:
      'Which Snowflake service or feature can be used to ensure that Snowflake-hosted data is still available if an account becomes inaccessible because of a regional cloud service provider outage?',
    type: 'single',
    options: ['Time Travel', 'Fail-safe', 'A data share', 'Cross-region replication'],
    correct: [3],
    explanation:
      'Cross-region replication ensures data availability across regions during outages.',
  },
  {
    question:
      'What privileges or user roles are required to get or request access to data that is available in the Snowflake Marketplace? (Choose two.)',
    type: 'multiple',
    options: ['MANAGE SHARE', 'IMPORT SHARE', 'USERADMIN', 'SECURITYADMIN', 'ACCOUNTADMIN'],
    correct: [1, 4],
    explanation:
      'IMPORT SHARE privilege or the ACCOUNTADMIN role is required to access Marketplace data.',
  },
  {
    question:
      'If a column contains float values that are greater than (15,9) that need to be preserved when unloading data, what data file format should be used?',
    type: 'single',
    options: ['JSON', 'PARQUET', 'AVRO', 'ORC'],
    correct: [1],
    explanation:
      'Parquet supports high-precision floating-point numbers without truncation, unlike JSON or CSV.',
  },
  {
    question: 'What tasks should be performed with SnowSQL? (Choose two.)',
    type: 'multiple',
    options: [
      'Sharing data with consumers that do not have a Snowflake account',
      'Running queries and performing Data Definition Language (DDL) and Data Manipulation Language (DML) operations',
      'Running commands for Streamlit',
      'Loading and unloading data into tables',
      'Visualizing data with graphs and charts',
    ],
    correct: [1, 3],
    explanation:
      'SnowSQL is used for running SQL queries (DDL/DML) and data loading/unloading operations.',
  },
  {
    question: 'What action will cause the cache associated with compute resources to be dropped?',
    type: 'single',
    options: [
      'Increasing the size of a running standard virtual warehouse',
      'Decreasing the size of a running standard virtual warehouse',
      'Adding a new standard virtual warehouse that is the same size as a running warehouse',
      'Adding a multi-cluster virtual warehouse that is of a similar size to a running warehouse',
    ],
    correct: [1],
    explanation: 'Decreasing the size of a running warehouse drops its cache.',
  },
  {
    question:
      'When retrieving data from a table, which type of query will benefit the MOST from use of the search optimization service?',
    type: 'single',
    options: [
      'Queries with unpredictable data volumes.',
      'Queries with highly-selective table filters that return a small subset of rows.',
      'Queries on fields in a VARIANT column that will return all data as structured data.',
      'Queries that involve one or more columns inside the cluster key using the lowest cardinality to select filters.',
    ],
    correct: [1],
    explanation:
      'Without specific Query Profile metrics (e.g., partitions scanned vs. total partitions), it’s impossible to determine pruning behavior. Typically, pruning is indicated by fewer partitions scanned than total partitions.',
  },
  {
    question:
      '[Image question - skip OR read docx file] What do these Query Profile metrics indicate about the query micro-partition pruning?',
    type: 'single',
    options: [
      'No micro-partitions were pruned during execution.',
      'The query used the local disk cache and pruning was not required',
      'The size of the data queried was too small to trigger micro-partition pruning',
      'Since the bytes scanned is less than the bytes written to results, some pruning has occurred',
    ],
    correct: [0],
    explanation:
      'Search optimization service improves performance for highly selective queries (e.g., point lookups).',
  },
  {
    question:
      'Which Snowflake features or services are designed to support data recovery without impacting ongoing operations? (Choose two.)',
    type: 'multiple',
    options: [
      'Materialized views',
      'Micro-partitioning',
      'Time Travel',
      'Local caching of data within virtual warehouses',
      'Fail-safe',
    ],
    correct: [2, 4],
    explanation:
      'Time Travel and Fail-safe enable data recovery without affecting ongoing operations.',
  },
  {
    question:
      'How does Snowflake support Multi-Factor Authentication (MFA) with a second factor device?',
    type: 'single',
    options: [
      'Through Role-Based Access Control (RBAC)',
      'Through integration with OAuth',
      'Using time-based, one-time passcodes',
      'Using federated authentication and Single Sign-On (SSO)',
    ],
    correct: [2],
    explanation: 'Snowflake’s MFA uses Duo Security with time-based one-time passcodes (TOTP).',
  },
  {
    question:
      'What is the MINIMUM Snowflake edition that has data quality and data metric functions enabled?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Cloud (VPS)'],
    correct: [1],
    explanation: 'Data Metric Functions (DMFs) are available starting with the Enterprise edition.',
  },
  {
    question: 'Use of an insert-only stream can be created on which type of table?',
    type: 'single',
    options: ['Temporary', 'Permanent', 'External', 'Transient'],
    correct: [3],
    explanation:
      'Insert-only streams are supported on permanent tables to track insert operations.',
  },
  {
    question:
      'Which Snowflake security feature has the HIGHEST precedence in the security feature hierarchy?',
    type: 'single',
    options: ['Account roles', 'Network policies', 'Masking policies', 'Snowflake OAuth'],
    correct: [1],
    explanation: 'Network policies take precedence as they control access at the connection level.',
  },
  {
    question: 'What is the LEAST-PRIVILEGED role that can create a share in Snowflake by default?',
    type: 'single',
    options: ['SYSADMIN', 'SECURITYADMIN', 'USERADMIN', 'ACCOUNTADMIN'],
    correct: [3],
    explanation: 'Only ACCOUNTADMIN can create shares by default.',
  },
  {
    question:
      'Using what type of table will help users MINIMIZE storage costs for tables that contain non-critical data and change frequently?',
    type: 'single',
    options: ['Temporary table', 'Transient table', 'Dynamic table', 'Hybrid table'],
    correct: [1],
    explanation:
      'Transient tables minimize storage costs by disabling Fail-safe and limiting Time Travel to 0–1 day.',
  },
  {
    question:
      'Which Snowflake feature is used to track sensitive data to ensure compliance, identify data, and monitor resource usage?',
    type: 'single',
    options: [
      'Data classification',
      'Data quality monitoring',
      'Object tagging',
      'Multi-Factor Authentication (MFA)',
    ],
    correct: [2],
    explanation:
      'Data classification identifies and tracks sensitive data for compliance and governance.',
  },
  {
    question:
      'A virtual warehouse handles hundreds of similarly-sized queries every day. Occasionally an analyst needs to query a very large amount of data. What virtual warehouse configuration should be used to optimize this workload?',
    type: 'single',
    options: [
      'Search optimization service',
      'Auto-scaling multi-cluster warehouses',
      'Query acceleration service',
      'A size 6X-Large warehouse',
    ],
    correct: [1],
    explanation:
      'Auto-scaling multi-cluster warehouses handle regular queries and scale out for occasional large queries efficiently.',
  },
  {
    question:
      'What is the LEAST-PRIVILEGED role that can enable replication for both source and target accounts by default?',
    type: 'single',
    options: ['ORGADMIN', 'ACCOUNTADMIN', 'SYSADMIN', 'SECURITYADMIN'],
    correct: [2],
    explanation: 'ACCOUNTADMIN is required to enable replication for source and target accounts.',
  },
  {
    question: 'Which queries will access data in an ARRAY object? (Choose two.)',
    type: 'multiple',
    options: [
      'SELECT ARRAY_SLICE(my_array_column, 5, 10) FROM my_table;',
      "SELECT OBJECT_CONSTRUCT('name', 'Jones'::VARIANT, 'age', 42::VARIANT);",
      'SELECT my_array_column * 3.14 FROM ...;',
      'SELECT my_array_column[0][0] FROM my_table;',
      "SELECT my_array_column['key1'] FROM my_table;",
    ],
    correct: [0, 3],
    explanation:
      "ARRAY_SLICE and index notation ([0][0]) access ARRAY data; ['key1'] is for OBJECTs.",
  },
  {
    question:
      'A Snowflake user noticed that in the past 24 hours, a set of select queries are running much slower than usual. What steps will help identify the cause? (Choose two.)',
    type: 'multiple',
    options: [
      'Compare the Query Profiles for recently-run queries and those that ran more than 24 hours ago',
      'Check the query history for any data definition language (DDL) changes in the last 24 hours',
      'Use the SHOW TRANSACTIONS command to identify blocking queries',
      'Use SHOW LOCKS to identify current locks on resources',
      'Use SYSTEM$ESTIMATE_AUTOMATIC_CLUSTERING_COSTS',
    ],
    correct: [0, 3],
    explanation:
      'Query Profiles reveal performance issues (e.g., spillage, pruning), and DDL changes in query history may explain slowdowns.',
  },

  {
    question: 'What use case would benefit from the use of a Snowpark-optimized warehouse',
    type: 'single',
    options: [
      'A single query is run once daily to update all rows on a dynamic table',
      'Multiple queries are run frequently to update a small number of rows in a table that has a cluster key defined',
      'A workload executes SELECT statements on a single 1 KB table using filters on a unique key',
      'teA workload has a large memory requirement using a stored procedure on a single virtual warehouse nodest',
    ],
    correct: [3],
    explanation:
      'Snowpark-optimized warehouses provide more memory for memory-intensive workloads like ML or stored procedures',
  },
  {
    question:
      'A Snowflake user is querying JSON data, and all values in the result set are wrapped in quotes. What needs to be done to unwrap the data from all the columns in the query results?',
    type: 'single',
    options: [
      'Use the TRIM function to remove all quotes',
      'Use the INSTR function to remove all quotes',
      'Use the SUBSTRING function to select the values that are inside the quotes',
      'Use the CAST function to convert the column to the correct data type',
    ],
    correct: [3],
    explanation:
      'Casting JSON data to the appropriate data type (e.g., INTEGER, STRING) removes quotes from VARIANT outputs.',
  },
  {
    question:
      'Which Snowflake tool or feature enables governed sharing of datasets with a selected group of consumers that are invited, internal or external, to a Snowflake user’s company?',
    type: 'single',
    options: ['Snowflake Marketplace', 'Data Exchange', 'Replication', 'Snowpipe'],
    correct: [1],
    explanation: 'Data Exchange enables governed, private sharing with invited consumers',
  },

  {
    question: 'Which Snowflake objects consume storage? (Choose two.)',
    type: 'multiple',
    options: [
      'Views',
      'Materialized views',
      'Temporary schemas',
      'Permanent tables',
      'External tables',
    ],
    correct: [1, 3],
    explanation:
      'Materialized views and permanent tables store data, consuming storage; views and external tables do not',
  },

  {
    question:
      'When a schema is cloned, what happens to the tags that reside in that schema or database',
    type: 'single',
    options: [
      'The tags are deleted and must be redefined in the target schema',
      'The tags remain in the source schema unchanged',
      'The tags become temporarily inactive until they are manually reactivated',
      'The tags are automatically cloned with the schema, maintaining all associations',
    ],
    correct: [3],
    explanation: 'Tags and their associations are cloned with the schema',
  },
  {
    question: 'What command will return a list of files that have been unloaded to a user stage',
    type: 'single',
    options: ['DESC @~', 'GET @~', 'SHOW @~', 'LIST @~'],
    correct: [3],
    explanation: 'LIST @~ lists files in a user stage',
  },
  {
    question:
      'Which property or parameter can be used to temporarily disable Multi-Factor Authentication (MFA) for a Snowflake user',
    type: 'single',
    options: ['DISABLE_MFA', 'EXT_AUTHN_DUO', 'MINS_TO_BYPASS_MFA', 'ALLOW_CLIENT_MFA_CACHING'],
    correct: [2],
    explanation: 'DISABLE_MFA temporarily disables MFA for a user',
  },
  {
    question:
      'Structured data must be moved from a Snowflake table to an Amazon S3 bucket and transformed into JSON. What function should be used to do this',
    type: 'single',
    options: ['PARSE_JSON()', 'ARRAY_CONSTRUCT()', 'OBJECT_CONSTRUCT()', 'GET'],
    correct: [2],
    explanation:
      'OBJECT_CONSTRUCT converts structured data to JSON for unloading with COPY INTO < location >.',
  },
  {
    question: 'Which action will scale-out a Snowflake virtual warehouse',
    type: 'single',
    options: [
      'Removing 1 cluster from a multi-cluster warehouse',
      'Adding 2 additional clusters to a multi-cluster warehouse',
      'Resizing a warehouse from size Small to X-Large',
      'Resizing a warehouse from size Large to Medium',
    ],
    correct: [1],
    explanation:
      'Scaling out adds clusters to a multi-cluster warehouse; resizing changes compute capacity (scale-up/down).',
  },
  {
    question:
      'What option in the COPY INTO  command is used to test the data file instead of loading it into the table',
    type: 'single',
    options: [
      'VALIDATION_MODE = RETURN_ERRORS',
      'ON_ERROR = SKIP_FILE',
      'ON_ERROR = ABORT_STATEMENT',
      'LOAD_UNCERTAIN_FILES = TRUE',
    ],
    correct: [0],
    explanation:
      'VALIDATION_MODE = RETURN_ERRORS tests the data file for errors without loading it',
  },
  {
    question:
      'Which table function will identify data that was loaded using COPY INTO  statements and also identify data loaded using Snowpipe',
    type: 'single',
    options: ['DATA_TRANSFER_HISTORY', 'PIPE_USAGE_HISTORY', 'VALIDATE_PIPE_LOAD', 'COPY_HISTORY'],
    correct: [3],
    explanation: 'COPY_HISTORY tracks data loaded via COPY INTO, including Snowpipe loads',
  },
  {
    question:
      'Assuming the data provider has granted the required permissions to the objects in a share, which statement will grant permissions to the role, consumer_role, allowing access to the objects in the shared database, share_db',
    type: 'single',
    options: [
      'GRANT IMPORTED PRIVILEGES ON DATABASE share_db TO ROLE consumer_role',
      'GRANT USAGE ON DATABASE share_db TO ROLE consumer_role',
      'GRANT OWNERSHIP ON DATABASE share_db TO ROLE consumer_role',
      'GRANT ALL ON DATABASE share_db TO ROLE consumer_role',
    ],
    correct: [0],
    explanation: 'IMPORTED PRIVILEGES grants access to shared database objects',
  },
  {
    question: 'Which privilege is required to access a virtual warehouse load chart',
    type: 'single',
    options: ['MONITOR', 'OPERATE', 'USAGE', 'READ'],
    correct: [0],
    explanation: 'The MONITOR privilege allows access to warehouse load charts',
  },
  {
    question:
      'Which COPY INTO  options can be used to load data from a staged file when the metadata in the file has expired? (Choose two.)',
    type: 'multiple',
    options: ['LOAD_UNCERTAIN_FILES', 'LOAD_EXPIRED_FILES', 'FORCE', 'ENFORCE_LENGTH', 'PURGE'],
    correct: [0, 2],
    explanation:
      'LOAD_UNCERTAIN_FILES = TRUE and FORCE = TRUE allow loading files with expired metadata',
  },
  {
    question: 'What common query issues can be identified using the Query Profile? (Choose two.)',
    type: 'multiple',
    options: [
      'Exploding joins',
      'UNIONS Without ALL',
      'Insufficient role permissions',
      'Insufficient role permissions (duplicate option)',
      'An incorrect filter condition in a WHERE clause',
    ],
    correct: [0, 1],
    explanation:
      'Query Profile identifies issues like exploding joins (large join outputs) and inefficient UNIONS without ALL; permission issues are not shown',
  },
  {
    question:
      'When unloading data, which file format will keep floating-point number column data without truncating it',
    type: 'single',
    options: ['XML', 'JSON', 'Parquet', 'CSV'],
    correct: [2],
    explanation:
      'Parquet preserves floating-point precision, unlike JSON or CSV, which may truncate',
  },

  {
    question:
      "What will be the result of this command? SELECT value FROM LATERAL FLATTEN(input = > parse_json('[1, 2, 3]'));",
    type: 'single',
    options: [
      'It will return a single row with three columns with values 1, 2, and 3.',
      'It will return a single row with the values 1, 2, and 3 concatenated.',
      'It will return a single row with the array [1, 2, 3].',
      'It will return three rows with the values 1, 2, and 3.',
    ],
    correct: [3],
    explanation:
      'LATERAL FLATTEN unpacks the JSON array into separate rows, each containing one value.',
  },
  {
    question:
      'Which object can be used to query the data loading history for the last 365 days for a Snowflake account?',
    type: 'single',
    options: [
      'The SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY view',
      'The SNOWFLAKE.ACCOUNT_USAGE.DATA_TRANSFER_HISTORY view',
      'The database INFORMATION_SCHEMA.COPY_HISTORY table function',
      'The database INFORMATION_SCHEMA.DATA_TRANSFER_HISTORY table function',
    ],
    correct: [0],
    explanation: 'ACCOUNT_USAGE.COPY_HISTORY provides data loading history for up to 365 days.',
  },
  {
    question:
      'Which option will replace NULL values with an empty string while unloading data into a file?',
    type: 'single',
    options: [
      "null_if=('NULL')",
      "null_if=('')",
      'FIELD_OPTIONALLY_ENCLOSED_BY = NONE',
      'EMPTY_FIELD_AS_NULL = TRUE',
    ],
    correct: [1],
    explanation: "NULL_IF = ('') replaces NULL values with an empty string during unloading.",
  },
  {
    question: 'What does adding the PARTITION BY clause in the COPY INTO < location > command do?',
    type: 'single',
    options: [
      'It specifies which table partition will be used to copy data.',
      'It partitions unloaded table rows into separate files.',
      'It defines the partitioning scheme for the target table.',
      'It filters the rows to be unloaded based on partition values.',
    ],
    correct: [1],
    explanation:
      'PARTITION BY in COPY INTO < location > splits unloaded data into separate files based on the specified expression.',
  },

  {
    question:
      'A Snowflake user creates this stored procedure: CREATE PROCEDURE SALES_REPORT(MONTH INT, YEAR INT). What statement will remove the stored procedure?',
    type: 'single',
    options: [
      'DROP PROCEDURE SALES_REPORT(MONTH INT, YEAR INT);',
      'DROP PROCEDURE SALES_REPORT(INT, INT);',
      'DROP SALES_REPORT(MONTH INT, YEAR INT);',
      'DROP SALES_REPORT;',
    ],
    correct: [0],
    explanation:
      'DROP PROCEDURE requires the exact signature, including parameter types, to drop the procedure.',
  },
  {
    question: 'How is Role-Based Access Control (RBAC) used in Snowflake?',
    type: 'single',
    options: [
      'It requires each user to authenticate before allowing access to Snowflake objects.',
      'It is used to assign data access permissions directly to individual users based on a job function assignment.',
      'It uses a hierarchy of roles to manage access, allowing users to inherit privileges from roles that have been granted to them.',
      'It allows roles to access all data objects by default and supports ACCOUNTADMIN authority to explicitly restrict access to individual users.',
    ],
    correct: [2],
    explanation: 'Snowflake’s RBAC uses a role hierarchy to assign and inherit privileges.',
  },
  {
    question:
      'What is the LEAST privilege required to list files in a table stage using the LIST command?',
    type: 'single',
    options: [
      'SELECT on the table stage',
      'USAGE on the table stage',
      'REFERENCES on the table',
      'OWNERSHIP on the table',
    ],
    correct: [3],
    explanation:
      'USAGE privilege on the table is required to list files in its associated table stage.',
  },
  {
    question:
      'A Snowflake account holds data that will be consumed by a BI tool. Most of the BI users are located in the United States, but some users will require access from abroad. Users will submit queries randomly, with different levels of concurrency. What virtual warehouse would be MOST cost-efficient?',
    type: 'single',
    options: [
      'A maximized multi-cluster warehouse with the minimum number of clusters that are big enough to handle the expected maximum concurrency.',
      'A large enough standard warehouse able to handle the expected maximum concurrency.',
      'A large enough Snowpark-optimized warehouse that will have sufficient memory to handle the expected maximum concurrency.',
      'An auto-scale, multi-cluster warehouse with a maximum number of clusters that are large enough to handle the expected maximum concurrency.',
    ],
    correct: [3],
    explanation:
      'Auto-scale multi-cluster warehouses adjust dynamically to varying concurrency, optimizing costs.',
  },
  {
    question:
      'A table, STUDENTS, is created using this command: CREATE TABLE STUDENTS (NAME VARCHAR(50), MARKS OBJECT);. An example value for the MARKS is: {"history": 10, "math": 20, "science": 15}. Which query will return all of the students’ names and history marks?',
    type: 'single',
    options: [
      'SELECT NAME, MARKS[0] FROM STUDENTS;',
      'SELECT NAME, MARKS::history FROM STUDENTS;',
      'SELECT NAME, GET(MARKS, ‘history’) FROM STUDENTS;',
      'SELECT NAME, MARKS:HISTORY FROM STUDENTS;',
    ],
    correct: [3],
    explanation:
      'The colon notation (MARKS:HISTORY) accesses the “history” key in the OBJECT column.',
  },

  {
    question:
      '[Image question - skip OR read docx file] The Query Profile shows the metrics of a query that ran on a size Large virtual warehouse. What steps will improve the query performance? (Choose two.)',
    type: 'multiple',
    options: [
      'Increase the MAX_CLUSTER_COUNT',
      'Increase the WAREHOUSE_SIZE',
      'Update the query WHERE clause',
      'Increase the warehouse AUTO_SUSPEND duration',
      'Run the warehouse in Maximized mode',
    ],
    correct: [1, 2],
    explanation: '',
  },

  {
    question:
      'Which column in the ACCESS_HISTORY view in Snowflake describes access history for a column and provides additional information on how columns have been altered over time?',
    type: 'single',
    options: [
      'direct_objects_accessed',
      'objects_modified',
      'object_modified_by_ddl',
      'base_objects_accessed',
    ],
    correct: [1],
    explanation:
      'The objects_modified column tracks modifications to columns, including DDL changes.',
  },
  {
    question:
      'Which Snowflake edition supports a dedicated metadata store and separate compute clusters that are inaccessible to other Snowflake customers?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Snowflake (VPS)'],
    correct: [3],
    explanation: 'VPS provides a dedicated metadata store and isolated compute clusters.',
  },
  {
    question:
      'Which Snowflake tasks will take advantage of underlying micro-partition metadata? (Choose two.)',
    type: 'multiple',
    options: [
      'Query pruning',
      'Queries using a result cache',
      'Queries using a local disk cache',
      'Queries using a remote disk cache',
      'Operations using Data Manipulation Language (DML)',
    ],
    correct: [0, 4],
    explanation:
      'Query pruning uses micro-partition metadata to skip irrelevant partitions, and DML operations leverage metadata for efficiency.',
  },
  {
    question:
      'What happens if a query is spilling memory onto local disk storage, until the memory is full, but the query will require more memory as it progresses?',
    type: 'single',
    options: [
      'Snowflake will automatically increase local disk storage until the query has fully-executed.',
      'The query will be queued until sufficient memory is available on the local disk.',
      'The query will spill additional data onto cloud storage.',
      'The query will pause until there is free storage space on the local disk.',
    ],
    correct: [2],
    explanation:
      'When local disk storage is full, Snowflake spills data to cloud storage to continue query execution.',
  },
  {
    question:
      'When creating an external table that includes a row access policy, what can be used to verify that the policy is working correctly?',
    type: 'single',
    options: [
      'Use the POLICY_REFERENCES view.',
      'Use the EXTERNAL_FUNCTIONS_HISTORY table function.',
      'Use the EXTERNAL_TABLE_FILES table function.',
      'Use the POLICY_CONTEXT function.',
    ],
    correct: [3],
    explanation: 'POLICY_CONTEXT allows testing row access policies by simulating user contexts.',
  },
  {
    question: 'What query acceleration service setting can be configured by the user?',
    type: 'single',
    options: [
      'Minimum number of clusters',
      'Maximum number of clusters',
      'Scale factor',
      'Resource monitor',
    ],
    correct: [2],
    explanation:
      'The scale factor is a user-configurable setting to control query acceleration resource usage.',
  },
  {
    question:
      '[Image question - skip OR read docx file] These commands are run in Snowflake as an ACCOUNTADMIN: USE DATABASE Demo; USE SCHEMA Public; CREATE USER ROB; GRANT SELECT on all tables in schema public to USER ROB; What is the expected output?',
    type: 'single',
    options: ['exercise', 'exercise', 'exercise', 'exercise.'],
    correct: [1],
    explanation: 'exercise',
  },

  {
    question:
      '[Image question - skip OR read docx file] DRAG DROP Instructions: Select the options from the list on the left, drag and put them into the correct order on the right.',
    type: 'multiple',
    options: [
      'Each statement will result in a SQL compilation error.',
      'An error will describe an issue with the GRANT SELECT statement.',
      'An error will describe an issue with the USE SCHEMA definition statement.',
      'All statements will execute successfully.',
    ],
    correct: [1],
    explanation: 'GRANT SELECT cannot be applied directly to a USER; it must be granted to a ROLE.',
  },

  {
    question:
      'How are values truncated when floating-point number columns are unloaded to CSV or JSON files?',
    type: 'single',
    options: ['(38,2)', '(24,8)', '(15,9)', '(15,10)'],
    correct: [2],
    explanation: 'CSV and JSON truncate floating-point numbers to 15 digits with 9 decimal places.',
  },
  {
    question: 'What is a benefit of using system tags?',
    type: 'single',
    options: [
      'To manage compute resources',
      'To support data governance',
      'To increase query execution speed',
      'To control data backup frequency',
    ],
    correct: [1],
    explanation: 'System tags help classify and manage data for governance and compliance.',
  },
  {
    question:
      'Which higher-order functions provide ways to manipulate and analyze both structured and semi-structured data? (Choose two.)',
    type: 'multiple',
    options: ['FILTER', 'FLATTEN', 'TRANSFORM', 'TYPEOF', 'ARRAY_INSERT'],
    correct: [0, 2],
    explanation:
      'FILTER processes arrays (structured/semi-structured), and TRANSFORM applies functions to array elements.',
  },

  {
    question:
      '[Image question - skip OR read docx file] DRAG DROP What is the order of precedence of Snowflake network policies, from highest-to-lowest? Instructions: Select the network policy from the list on the left, drag and put them into the correct order on the right. Level 1 is the highest, Level 3 is the lowest.',
    type: 'single',
    options: ['exercise', 'exercise', 'exercise', 'exercise', 'exercise'],
    correct: [1],
    explanation: 'exercise',
  },

  {
    question:
      'A user is running queries that are starting to take too long. Which metric should be checked in the Query Profile to determine if a full table scan was performed?',
    type: 'single',
    options: [
      'Scan progress',
      'Bytes scanned',
      'Percentage scanned from cache',
      'Partitions scanned',
    ],
    correct: [3],
    explanation:
      'Partitions scanned vs. total partitions in Query Profile indicates whether a full table scan occurred.',
  },
  {
    question:
      'What will be the retention period for an object if the parameter MIN_DATA_RETENTION_TIME_IN_DAYS is set at the account level and the DATA_RETENTION_TIME_IN_DAYS is set at the object level?',
    type: 'single',
    options: [
      'The retention period will be equal to the value of the parameter MIN_DATA_RETENTION_TIME_IN_DAYS set at the account level.',
      'The retention period will be equal to the value of the parameter DATA_RETENTION_TIME_IN_DAYS set at the object level.',
      'The retention period will be equal to the greatest of the two values...',
      'The retention period will be equal to the lesser of the two values...',
    ],
    correct: [2],
    explanation: 'The effective retention period is the maximum of the two settings.',
  },
  {
    question:
      'If a multi-cluster virtual warehouse is running in auto-scale mode, how are workloads with unpredictable usage patterns handled?',
    type: 'single',
    options: [
      'Snowflake automatically resizes the warehouse based on usage requirements.',
      'Snowflake automatically starts and stops additional clusters as needed.',
      'Snowflake notifies users when to adjust the number of clusters...',
      'Snowflake automatically starts additional clusters when the primary cluster reaches 50% capacity.',
    ],
    correct: [1],
    explanation: 'Auto-scale mode dynamically adjusts the number of clusters based on workload.',
  },
  {
    question:
      'Which connectors support Multi-Factor Authentication (MFA) token caching when connecting to Snowflake? (Choose two.)',
    type: 'multiple',
    options: ['JDBC', 'Go', 'PHP', 'Node.js', 'Python'],
    correct: [0, 4],
    explanation: 'JDBC and Python connectors support MFA token caching for authentication.',
  },
  {
    question: 'How can a privilege be given to multiple roles in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Assign the privilege to a child role within a role hierarchy.',
      'Use FUTURE GRANTS on the roles that need the privilege.',
      'Manually assign the privilege to each role.',
      'Define and implement an automatic privilege inheritance rule.',
      'Use the ALTER ROLE statement to assign the privilege.',
    ],
    correct: [0, 2],
    explanation:
      'Privileges can be granted to a parent role in a hierarchy or manually to each role.',
  },
  {
    question: 'For which situation would a direct share be recommended when sharing accounts?',
    type: 'single',
    options: [
      'When the accounts are not using the same cloud providers',
      'When charging consumers for data',
      'When the accounts are in the same region',
      'When the account sharing needs to retrieve consumer data metrics',
    ],
    correct: [2],
    explanation:
      'Direct shares are efficient for accounts in the same region, as they avoid replication overhead.',
  },
  {
    question:
      'What is recommended for workloads that have large memory requirements, such as an ML training use case that uses a stored procedure running on a single virtual warehouse node?',
    type: 'single',
    options: [
      'Use of the Economy policy on a multi-cluster virtual warehouse.',
      'Use of the Standard policy on a multi-cluster virtual warehouse.',
      'Use of a Snowpark-optimized virtual warehouse.',
      'Use of a Standard Snowflake virtual warehouse.',
    ],
    correct: [2],
    explanation:
      'Snowpark-optimized warehouses provide more memory for ML training and stored procedures.',
  },
  {
    question: 'When is the use of the query acceleration service MOST beneficial? (Choose two.)',
    type: 'multiple',
    options: [
      'When analytical queries are performed frequently at unscheduled times.',
      'When the data workloads for most queries have large, unpredictable data volumes.',
      'When the queries have small scans and selective filters.',
      'When typical queries include a LIMIT clause without an ORDER BY clause.',
      'When typical queries do not have filters or aggregate clauses.',
    ],
    correct: [0, 1],
    explanation: 'Query acceleration service benefits large, unpredictable analytical workloads.',
  },
  {
    question:
      'How can data be shared in Snowflake with another account located in the same region without the need to copy or move the data?',
    type: 'single',
    options: [
      'Use the Snowflake Marketplace.',
      'Use a stream.',
      'Use a Data Exchange.',
      'Use a direct share.',
    ],
    correct: [3],
    explanation: 'Direct shares enable data sharing in the same region without copying.',
  },
  {
    question: 'What is included in the LOAD_HISTORY view of the INFORMATION_SCHEMA? (Choose two.)',
    type: 'multiple',
    options: [
      'A list of the COPY INTO < location > commands that were executed',
      'The names of the source and target tables',
      'The number of rows loaded from the source file',
      'A timestamp indicating when the data load was completed',
      'The copy history of data loaded using Snowpipe',
    ],
    correct: [2, 3],
    explanation:
      'LOAD_HISTORY includes rows loaded and load timestamps; Snowpipe data is in COPY_HISTORY.',
  },

  {
    question:
      'What can be used to improve the performance of queries that are run on an external table',
    type: 'multiple',
    options: [
      'Search optimization service',
      'Query acceleration service',
      'Clustering key',
      'Materialized view',
    ],
    correct: [3],
    explanation: '',
  },

  {
    question:
      'Which Snowflake feature or object is used to create a snapshot of a schema or a table with no costs incurred?',
    type: 'single',
    options: ['Time Travel', 'Zero-copy cloning', 'Micro-partitioning', 'Transient tables'],
    correct: [1],
    explanation:
      'Zero-copy cloning creates snapshots without duplicating storage, incurring no additional storage costs.',
  },
  {
    question:
      'How does Snowflake organize the loading of staged files into Snowpipe after the files have been added to a queue?',
    type: 'single',
    options: [
      'A single process is used to load the files, guaranteeing the files will be loaded in the exact order they were entered into the stage.',
      'Multiple processes are used to load the files using a Last-In-First-Out order structure...',
      'A single process is used to load the files in a First-In-First-Out order structure...',
      'Multiple processes are used to load the files, and files may not be loaded in the exact order that they were entered into the stage.',
    ],
    correct: [3],
    explanation: 'Multiple processes are used and order is not guaranteed.',
  },
  {
    question:
      'What file function will retrieve the path of a staged file using the stage name and the absolute file path?',
    type: 'single',
    options: ['GET_ABSOLUTE_PATH', 'GET_STAGE_LOCATION', 'GET_RELATIVE_PATH', 'GET_PRESIGNED_URL'],
    correct: [0],
    explanation: 'GET_ABSOLUTE_PATH returns the full path.',
  },
  {
    question:
      'When used with the UNLOAD command, which parameter specifies the destination of unloaded data?',
    type: 'single',
    options: ['COPY INTO', 'COPY INTO < stage name >', 'GET < file name >', 'PUT < file name >'],
    correct: [1],
    explanation: 'COPY INTO < location > is used for unloading.',
  },

  {
    question:
      'What will happen when the VALIDATION_MODE parameter is included in a COPY INTO < location > command',
    type: 'single',
    options: [
      'Data will be successfully loaded if no errors are identified during the validation',
      'A validation report will be issued before the data is copied into the designated location',
      'All data will be loaded and an error report will be generated if errors are identified during the validation',
      'The COPY INTO < location > statement will return the results of the validation and will load only error-free records',
    ],
    correct: [1],
    explanation: '',
  },

  {
    question:
      'A Snowflake user recreates a source object that was referenced in a stream. What effect will this have on the stream',
    type: 'single',
    options: [
      'The stream will be emptied',
      'The stream will become stale',
      'The stream will be dropped',
      'The stream will remain unchanged',
    ],
    correct: [2],
    explanation: '',
  },
  {
    question: 'Which Snowflake object is cloned when cloning a schema',
    type: 'single',
    options: [
      'External table',
      'Internal stage',
      'A pipe',
      'A pipe object that references an external stage',
    ],
    correct: [3],
    explanation: '',
  },
  {
    question: 'What is the COALESCE conditional expression used for',
    type: 'single',
    options: [
      'To split a STRING into multiple ARRAYs',
      'To remove duplicates from a data set',
      'To join data from multiple columns',
      'To return the first non-NULL expression in an argument',
    ],
    correct: [3],
    explanation: '',
  },

  {
    question:
      'A user needs to unload the contents of a Snowflake table and add it to an Amazon S3 storage bucket. How does Snowflake recommend doing this?',
    type: 'single',
    options: [
      'Use the PUT command to directly write the data to the cloud storage location URL',
      'Create an external stage referencing the cloud storage location URL and unload the table using the put command',
      'Create a table stage referencing the cloud storage location URL and export the table using the COPY INTO < location > command',
      'Create an external stage referencing the cloud storage location URL and unload the table using the COPY INTO < location > command',
    ],
    correct: [3],
    explanation: 'Recommended method is external stage + COPY INTO < location >.',
  },
  {
    question:
      'Create an external stage referencing the cloud storage location URL and unload the table using the COPY INTO < location > command',
    type: 'single',
    options: [
      'Add more storage',
      'Convert to a multi-cluster warehouse.',
      'Increase the size of the warehouse',
      'Run the query during off-peak hours.',
    ],
    correct: [2],
    explanation: '',
  },
  {
    question: 'How should Multi-Factor Authentication (MFA) be enabled for a user?',
    type: 'single',
    options: [
      'A USERADMIN must enroll the user',
      'A SECURITYADMIN must enroll the user.',
      'An ACCOUNTADMIN must enroll the user',
      'Each Snowflake user must enroll themselves.',
    ],
    correct: [3],
    explanation: 'Users self-enroll in MFA via Snowsight or ALTER USER.',
  },
  {
    question:
      'What notation methods are supported in Snowflake to access elements in a JSON object? (Choose two.)',
    type: 'multiple',
    options: [
      'Classless Inter-Domain Routing (CIDR) notation',
      'Vertical bar notation',
      'Bracket notation',
      'Slash notation',
      'Dot notation',
    ],
    correct: [2, 4],
    explanation: 'Dot and bracket notation are supported for VARIANT/OBJECT access.',
  },
  {
    question:
      'What type of queries will benefit from the search optimization service when using equality predicates?',
    type: 'single',
    options: [
      'Queries using point-lookups',
      'Queries using data substrings',
      'Queries with geospatial data',
      'Queries of semi-structured data',
    ],
    correct: [0],
    explanation: 'Search optimization is ideal for point lookup equality queries on large tables.',
  },
  {
    question:
      'Which combination of permissions are required to create a pipe in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'USAGE on the virtual warehouse',
      'CREATE PIPE at the schema level',
      'CREATE SCHEMA at the database level',
      'OWNERSHIP on the table in the pipe definition',
      'SELECT and INSERT on the table in the pipe definition',
    ],
    correct: [1, 4],
    explanation: 'CREATE PIPE privilege and SELECT+INSERT on target table are required.',
  },
  {
    question:
      'What data-type constructs are used to create a hierarchy when organizing semi-structured data? (Choose two.)',
    type: 'multiple',
    options: [
      'A VARIANT can hold a value of any other data type.',
      'An ARRAY or OBJECT holds a value of type INTEGER.',
      'An ARRAY or OBJECT holds a value of type VARIANT',
      'An ARRAY or OBJECT holds a value of type VARCHAR',
      'An ARRAY or OBJECT holds a value of type VECTOR',
    ],
    correct: [0, 2],
    explanation: 'VARIANT, ARRAY, and OBJECT allow nested hierarchical structures.',
  },
  {
    question: 'Which feature uses a Snowflake key with a customer-managed key to protect data?',
    type: 'single',
    options: [
      'Trust Center',
      'Tri-Secret Secure',
      'Key-pair authentication',
      'Multi-Factor Authentication (MFA)',
    ],
    correct: [1],
    explanation: 'Tri-Secret Secure combines Snowflake key, customer key, and master key.',
  },
  {
    question: 'On which objects can the REMOVE command be applied? (Choose two.)?',
    type: 'multiple',
    options: [
      'Directory tables',
      'External tables',
      'External stages',
      'Internal stages',
      'Streams',
    ],
    correct: [2, 3],
    explanation: '',
  },
  {
    question: 'Which grant will provide a user with access to data that is in a Snowflake share?',
    type: 'single',
    options: [
      'GRANT SELECT ON ALL TABLES IN DATABASE < SHARE > TO USER < USER >;',
      'GRANT READ ON ALL TABLES IN DATABASE < SHARE > TO ROLE < ROLE >;',
      'GRANT IMPORTED PRIVILEGES ON DATABASE < SHARE > TO ROLE < ROLE >;',
      'GRANT USE ON DATABASE < SHARE > TO ROLE < ROLE >;',
    ],
    correct: [2],
    explanation: 'IMPORTED PRIVILEGES is required to access shared databases.',
  },
  {
    question:
      'What command will create a table with the same structure as an existing table, without replicating the data?',
    type: 'single',
    options: [
      'CREATE TABLE ... AS SELECT',
      'CREATE TABLE ... USING TEMPLATE',
      'CREATE TABLE ... LIKE',
      'CREATE TABLE ... CLONE',
    ],
    correct: [2],
    explanation: 'CREATE TABLE ... LIKE copies structure only.',
  },
  {
    question: 'What are the results of the NULL_COUNT Data Metric Function (DMF) used to verify?',
    type: 'single',
    options: [
      'The accuracy of the data',
      'The uniqueness of the data',
      'The freshness of the data',
      'The volume of the data',
    ],
    correct: [0],
    explanation: '',
  },
  {
    question:
      "When a column in a table is dropped what is the impact on the table's micro-partitions?",
    type: 'single',
    options: [
      'New micro-partitions will be created that include all remaining columns and data.',
      'The table’s micro-partitions will be updated to reflect the removal of the data in the dropped column.',
      'A new table will be created, without the data in the dropped column...',
      'The existing micro-partitions will not be changed or impacted.',
    ],
    correct: [3],
    explanation:
      'Dropping a column marks it as deleted in metadata; micro-partitions remain unchanged until rewritten.',
  },
  {
    question: 'How are micro-partitions enabled on Snowflake tables?',
    type: 'single',
    options: [
      'Micro-partitioning requires a cluster key on a table.',
      'Micro-partitioning is automatically performed on a table',
      'Micro-partitioning requires the use of the search optimization service',
      'Micro-partitioning is defined by the user when a table is created.',
    ],
    correct: [1],
    explanation: 'Micro-partitioning is automatic and always on.',
  },
  {
    question: 'Which queries need an active warehouse to run? (Choose two.)',
    type: 'multiple',
    options: [
      'SELECT COUNT (1) FROM < TABLE_NAME >;',
      'CREATE TABLE < TABLE_NAME > (< COLUMN > < DATATYPE >);',
      'DESCRIBE TABLE < TABLE_NAME >;',
      'DELETE FROM < TABLE_NAME >;',
      'SELECT * FROM ;',
    ],
    correct: [0, 3],
    explanation: 'DML and SELECT require compute; DDL and metadata commands do not.',
  },
  {
    question: 'Which table is designed to store a catalog of stage files in cloud storage?',
    type: 'single',
    options: ['Dynamic table', 'Hybrid table', 'Directory table', 'Iceberg table'],
    correct: [2],
    explanation: '',
  },
  {
    question:
      'Which virtual warehouse configuration requires the maximum number of clusters to be equal to the minimum number of clusters?',
    type: 'single',
    options: [
      'Auto-scale mode',
      'Maximized mode',
      'Standard scaling policy',
      'Economy scaling policy',
    ],
    correct: [1],
    explanation: 'Maximized mode keeps all clusters running at all times.',
  },
  {
    question:
      'Which command should be used to load data incrementally based on column values that are specified in a source table or subquery?',
    type: 'single',
    options: ['MERGE', 'COPY INTO', 'GET', 'INSERT INTO'],
    correct: [0],
    explanation: 'MERGE is used for incremental (upsert) loads based on matching conditions.',
  },
  {
    question:
      'A user needs to know this information about an object: 1. Who accessed the data? 2. When was the data accessed? 3. What columns were accessed? Which ACCOUNT_USAGE schema view should be used?',
    type: 'single',
    options: ['QUERY_HISTORY', 'ACCESS_HISTORY', 'EVENT_USAGE_HISTORY', 'OBJECT_DEPENDENCIES'],
    correct: [1],
    explanation: 'ACCESS_HISTORY provides detailed column-level access information.',
  },
  {
    question: 'Which statement will return all rows from table_A?',
    type: 'single',
    options: [
      'SELECT * FROM table_A TABLESAMPLE (0);',
      'SELECT * FROM table_A TABLESAMPLE (100);',
      'SELECT * FROM table_A SAMPLE (10);',
      'SELECT * FROM table_A TABLESAMPLE BERNOULLI (10);',
    ],
    correct: [1],
    explanation: 'TABLESAMPLE (100) returns 100% of rows.',
  },
  {
    question:
      'If a custom role has not been assigned to the SYSADMIN role through a role hierarchy, which roles will have the ability to provide access to objects? (Choose two.)',
    type: 'multiple',
    options: [
      'SECURITYADMIN',
      'USERADMIN',
      'A custom role for users that also have the PUBLIC role',
      'A custom role with the MANAGE GRANTS privilege',
      'A custom role with the USAGE privilege',
    ],
    correct: [0, 3],
    explanation: '',
  },
  {
    question: 'Which Snowflake objects can be used as tokens in SnowSQL? (Choose two.)',
    type: 'multiple',
    options: ['Table', 'View', 'User', 'Role', 'User-Defined Function (UDF)'],
    correct: [2, 3],
    explanation: 'SnowSQL uses &variable syntax for USER and ROLE substitution.',
  },
  {
    question: 'Dynamic Data Masking can be used with which Snowflake objects? (Choose two.)',
    type: 'multiple',
    options: ['Views', 'Materialized views', 'Tables', 'External tables', 'Future grants'],
    correct: [0, 2],
    explanation: 'Masking policies can be applied to tables and views (including secure views).',
  },
  {
    question:
      'A query runs significantly slower than expected. Which Query Profile metrics will help identify the issue? (Choose two.)',
    type: 'multiple',
    options: [
      'Processing',
      'Resource usage',
      'Query Plan execution steps',
      'Bytes scanned',
      'Partitions scanned',
    ],
    correct: [3, 4],
    explanation: 'High bytes/partitions scanned indicate lack of pruning or clustering issues.',
  },
  {
    question: 'Which column is used with streams to track changes to metadata',
    type: 'single',
    options: [
      'METADATA$ROW_ID',
      'METADATA$START_SCAN_TIME',
      'METADATA$FILE_CONTENT_KEY',
      'METADATA$FILE_ROW_NUMBER',
    ],
    correct: [0],
    explanation: '',
  },
  {
    question:
      'What are benefits of using reader accounts when sharing data in Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'Consumers can create and apply masking policies to unloaded data',
      'Consumers can use resource monitors to track and limit costs.',
      'Consumers can use a single reader account to access data from multiple data providers.',
      'Providers can share data with consumers who do not have Snowflake accounts',
      'Consumers can unload data using the COPY INTO < location > command.',
    ],
    correct: [1, 3],
    explanation:
      'Reader accounts are managed by the provider and allow non-Snowflake users to access shared data.',
  },
  {
    question:
      'A global company needs to share financial reports with managers who are in different regions. Managers should only see the data from their respective regions. How can these requirements be met with the LEAST amount of operational overhead?',
    type: 'single',
    options: [
      'Create unique views for each region',
      'Build individual reports for each manager',
      'Use row-level security on the source data table used to generate the reports',
      'Apply Dynamic Data Masking based on a custom role assigned to each manager',
    ],
    correct: [2],
    explanation: 'Row access policies provide centralized, low-maintenance row-level security.',
  },
  {
    question:
      "A data provider shares a Snowflake secure view with a user who is outside of the provider's organization. Which parameter can the provider use to impersonate the user and access view?",
    type: 'single',
    options: [
      'CLIENT_METADATA_USE_SESSION_DATABASE',
      'ALLOWED_SHARES',
      'SIMULATED_DATA_SHARING_CONSUMER',
      'SHOW_SHARES',
    ],
    correct: [2],
    explanation: '',
  },
  {
    question: 'Which role is outside of the hierarchy of system roles?',
    type: 'single',
    options: ['ACCOUNTADMIN', 'SECURITYADMIN', 'ORGADMIN', 'SYSADMIN'],
    correct: [2],
    explanation: 'ORGADMIN sits outside the account-level role hierarchy.',
  },

  {
    question: 'By default, which system roles can create and manage users? (Choose two.)',
    type: 'multiple',
    options: ['USERADMIN', 'SYSADMIN', 'SECURITYADMIN', 'PUBLIC', 'ORGADMIN'],
    correct: [0, 2],
    explanation: '',
  },

  {
    question: 'Which queries will require a running virtual warehouse? (Choose two.)',
    type: 'multiple',
    options: [
      'SELECT COUNT(*) FROM ;',
      'DELETE FROM ;',
      'UPDATE  SET;',
      'DROP TABLE ;',
      'SELECT CURRENT_DATABASE();',
    ],
    correct: [1, 2],
    explanation: 'DML operations (DELETE, UPDATE) require compute.',
  },
  {
    question:
      'Which commands will indicate if Multi-Factor Authentication (MFA) has been enabled for a given user? (Choose two.)',
    type: 'multiple',
    options: [
      'SHOW USERS',
      'DESCRIBE USER',
      'SHOW PARAMETERS',
      'SHOW USER FUNCTIONS',
      'SHOW CONNECTIONS',
    ],
    correct: [0, 1],
    explanation: 'SHOW USERS and DESCRIBE USER show MFA status.',
  },

  {
    question: 'What step will help to reduce query queuing?',
    type: 'single',
    options: [
      'Use a Standard virtual warehouse.',
      'Use a multi-cluster virtual warehouse.',
      'Decrease the size of the virtual warehouse.',
      'Increase the value of the virtual warehouse auto-suspend parameter.',
    ],
    correct: [1],
    explanation: '',
  },

  {
    question:
      'Hundreds of simple queries are run against a small table every day using a Standard Snowflake virtual warehouse. Occasionally, a query is run that needs to scan a very large amount of data. What Snowflake service or feature should be used to OPTIMIZE this workload?',
    type: 'single',
    options: [
      'Use the search optimization service.',
      'Use the query acceleration service.',
      'Use a Snowpark-optimized virtual warehouse.',
      'Use the Auto-scale mode on a multi-cluster virtual warehouse.',
    ],
    correct: [1],
    explanation: 'Query Acceleration Service offloads large scans to serverless compute.',
  },
  {
    question:
      'What Snowflake object tracks changes that have been made to tables and views, returning only the modified records?',
    type: 'single',
    options: ['Task', 'Stream', 'Stage', 'Dynamic table'],
    correct: [1],
    explanation: 'Streams capture DML changes for incremental processing.',
  },

  {
    question:
      'What is the MINIMUM Snowflake edition needed to take advantage of Data Quality and use Data Metric Functions (DMFs)?',
    type: 'single',
    options: ['Standard', 'Enterprise', 'Business Critical', 'Virtual Private Cloud (VPS)'],
    correct: [1],
    explanation: '',
  },
  {
    question:
      'Which Snowflake feature supports the use of natural language queries to analyze unstructured data?',
    type: 'single',
    options: ['Snowsight', 'Snowflake ML', 'Snowflake Cortex', 'Snowflake Horizon Catalog'],
    correct: [2],
    explanation: '',
  },

  {
    question:
      'Queries are frequently run on very large tables and return only a few rows. Use of which feature or service will OPTIMIZE the query performance?',
    type: 'single',
    options: [
      'Automatic Clustering',
      'The search optimization service',
      'The query acceleration service',
      'A materialized view',
    ],
    correct: [1],
    explanation:
      'Search optimization dramatically speeds up point lookups and equality filters on large tables.',
  },
  {
    question:
      '[Image question - skip OR read docx file] DRAG DROP Match the security requirements on the left with the Snowflake Continuous Data Protection feature on the right Instructions: Select the options from the list on the left, drag and put them onto the correct feature on the right.',
    type: 'single',
    options: ['exercise', 'exercise', 'exercise', 'exercise'],
    correct: [0],
    explanation: 'exercise',
  },
  {
    question: 'Which column data type is supported when defining a clustering key on a table?',
    type: 'single',
    options: ['VARCHAR', 'VARIANT', 'OBJECT', 'GEOGRAPHY'],
    correct: [0],
    explanation: 'Only fixed-length types (including VARCHAR) are supported in clustering keys.',
  },
  {
    question:
      'A virtual warehouse is resized from a size Small to a size Large while four queries are running. What will occur?',
    type: 'single',
    options: [
      'The warehouse will be resized, and the running queries will continue to run on the Small warehouse.',
      'The warehouse will be resized, and the running queries will be re-run on the Large warehouse.',
      'The warehouse will be resized after the running queries are fully executed using the Small warehouse.',
      'The warehouse resize command will fail and will have to be re-run...',
    ],
    correct: [2],
    explanation: 'Resize waits for in-flight queries to complete.',
  },

  {
    question: 'Which programming language does Streamlit use in Snowflake?',
    type: 'single',
    options: ['GO', 'Java', 'Scala', 'Python'],
    correct: [3],
    explanation: '',
  },

  {
    question: 'What Multi-Factor Authentication (MFA) service is provided by Snowflake?',
    type: 'single',
    options: [
      'Microsoft Entra ID',
      'Google Authenticator',
      'Duo Security',
      'Microsoft Authenticator',
    ],
    correct: [2],
    explanation: 'Snowflake natively integrates with Duo for MFA.',
  },
  {
    question:
      'Which function, when combined with an INSERT statement, will insert semi-structured data into a VARIANT column?',
    type: 'single',
    options: ['TO_JSON', 'TO_VARCHAR', 'PARSE_JSON', 'OBJECT_INSERT'],
    correct: [2],
    explanation: 'PARSE_JSON converts a string to VARIANT.',
  },
  {
    question:
      'Revoking which privilege will prevent one role from giving privileges to other roles?',
    type: 'single',
    options: ['USAGE', 'MODIFY', 'REFERENCES', 'MANAGE GRANTS'],
    correct: [3],
    explanation: 'MANAGE GRANTS allows a role to grant privileges to other roles.',
  },
  {
    question:
      'Which function, when combined with a COPY_INTO < location > command, will convert the rows in a relational table to a single VARIANT column while the rows are being unloaded?',
    type: 'single',
    options: ['ARRAY_AGG', 'OBJECT_CONSTRUCT', 'TO_VARIANT', 'OBJECT_AGG'],
    correct: [1],
    explanation: 'OBJECT_CONSTRUCT creates a JSON object per row.',
  },
  {
    question: 'What is required to run Streamlit in a Snowflake application?',
    type: 'single',
    options: [
      'A virtual warehouse',
      'External compute servers',
      'A cloud-based object storage service',
      'Snowflake-native storage and compute resources',
    ],
    correct: [3],
    explanation: 'Streamlit in Snowflake runs entirely within Snowflake using its own compute.',
  },
  {
    question:
      'Which URL type should be used to provide a user with a window of time to access files that are in cloud storage?',
    type: 'single',
    options: ['Scoped URL', 'File URL', 'Pre-signed URL', 'Redirect URL'],
    correct: [2],
    explanation: 'Pre-signed URLs provide time-limited access to private cloud storage objects.',
  },
  {
    question: 'Where does Streamlit store processed data?',
    type: 'single',
    options: ['User stages', 'External tables', 'Internal stages', 'Snowflake tables'],
    correct: [2],
    explanation: '',
  },
  {
    question:
      'If a table was dropped and the DATA_RETENTION_TIME_IN_DAYS was set to 0, how can the data from the table be recovered?',
    type: 'single',
    options: [
      'By creating a failover group',
      'By creating a Snowflake Support ticket',
      'By running the UNDROP TABLE command',
      'By running the CLONE... BEFORE command',
    ],
    correct: [1],
    explanation:
      'When Time Travel is 0 days, only Fail-safe (7 days) remains, which requires Support.',
  },
  {
    question: 'What are streams used for in Snowflake?',
    type: 'single',
    options: [
      'To execute data pipelines',
      'To track DML changes that have been made to tables',
      'To define the data file formats being loaded into Snowflake',
      'To cache data to be used to improve future query performance',
    ],
    correct: [1],
    explanation: 'Streams track row-level changes for change data capture.',
  },
  {
    question:
      'What is the MAXIMUM data recovery time for data stored in a transient table in a Snowflake Enterprise Edition account?',
    type: 'single',
    options: [
      '0 to 90 days with Time Travel as configured, plus 7 days of Fail-safe.',
      '7 days using Fail-safe.',
      '0 to 1 days with Time Travel as configured.',
      '0 to 90 days with Time Travel as configured.',
    ],
    correct: [2],
    explanation: 'Transient tables have max 1 day Time Travel and no Fail-safe.',
  },
  {
    question:
      'Which steps will reduce memory spillage when running a very large query (Choose two.)',
    type: 'multiple',
    options: [
      'Enable auto-scale mode on the virtual warehouse.',
      'Increase the network bandwidth.',
      'Process the data in smaller batches.',
      'Add a DISTINCT clause to the query.',
      'Increase the size of the virtual warehouse.',
    ],
    correct: [0, 4],
    explanation: 'Larger warehouse size and auto-scale provide more memory to reduce spilling.',
  },
  {
    question:
      '[Image question - skip OR read docx file] ROLE_A has been granted the privilege to create databases on an account. These commands are executed: [image or commands not shown] What will be the result?',
    type: 'single',
    options: [
      'Users with both role_a and role_b can create objects in the schema.',
      'Users with role_a can use the schema, but cannot create objects in it.',
      'Users with role_a can no longer view or use the schema.',
      'Users with role_b can transfer ownership of the schema, but they cannot create objects in it.',
    ],
    correct: [3],
    explanation: '',
  },
  {
    question:
      'When resizing a currently-running virtual warehouse, what happens to in-progress queries?',
    type: 'single',
    options: [
      'In-progress queries will be cancelled.',
      'Queries will continue running, using the new warehouse size.',
      'Queries will continue running, using the current warehouse size.',
      'Queries will be paused and automatically be re-processed using the new warehouse size.',
    ],
    correct: [2],
    explanation: 'Running queries complete on the original size; new queries use the new size.',
  },
  {
    question: 'What is the impact of removing some of the privileges granted to a role?',
    type: 'single',
    options: [
      'The role will retain all privileges until a new session is started.',
      'The role will lose access to objects that are not granted to the updated role.',
      'The user will have to reinstate the role using the use role command after the change.',
      'Any users who are actively using the role will have their current session terminated.',
    ],
    correct: [3],
    explanation:
      'Revoking privileges from an active role terminates current sessions using that role.',
  },
  {
    question:
      'When creating a new virtual warehouse, setting which parameter will ensure that the warehouse shuts down after a specific period of inactivity?',
    type: 'single',
    options: ['SCALING_POLICY', 'AUTO_SUSPEND', 'AUTO_RESUME', 'INITIALLY_SUSPENDED'],
    correct: [1],
    explanation: 'AUTO_SUSPEND controls inactivity timeout.',
  },
  {
    question:
      'Where can file formats be specified when unloading data from Snowflake? (Choose two.)',
    type: 'multiple',
    options: [
      'In a SELECT statement',
      'In a CREATE stage statement',
      'In a CREATE DATABASE statement',
      'In a CREATE INTEGRATION statement',
      'In a COPY INTO < location > statement',
    ],
    correct: [1, 4],
    explanation: '',
  },
  {
    question: 'What table types are optimized for transactional workloads?',
    type: 'single',
    options: ['Event tables', 'Hybrid tables', 'Dynamic tables', 'Permanent tables'],
    correct: [1],
    explanation: 'Hybrid tables support low-latency point reads and updates.',
  },

  {
    question:
      'Which feature or service allows users to modify clustering algorithms that are built into Snowflake?',
    type: 'single',
    options: [
      'Search optimization',
      'Micro-partitioning',
      'Partition clustering',
      'Clustering keys',
    ],
    correct: [3],
    explanation: '',
  },

  {
    question:
      'What is the role of the COMPRESSION parameter in the COPY INTO < location > command?',
    type: 'single',
    options: [
      'It specifies the file format to use when unloading data',
      'It specifies the encryption method to be used for unloading data',
      'It specifies the compression algorithm to be used when unloading data',
      'It specifies if the data should be compressed into a single file when unloading the data',
    ],
    correct: [2],
    explanation: '',
  },

  {
    question: 'For how long is data history reported in the QUERY_HISTORY view?',
    type: 'single',
    options: ['24 hours', '7 days', '14 days', '1 year'],
    correct: [2],
    explanation:
      'QUERY_HISTORY retains 14 days by default (ACCOUNTADMIN can query up to 365 days in ACCOUNT_USAGE).',
  },
  {
    question: 'What are benefits of using managed schemas? (Choose two.)',
    type: 'multiple',
    options: [
      'Object owners can grant other roles access to their objects.',
      'Once created, a managed schema cannot be converted to a non-managed schema.',
      'Managed schemas limit the ability of users to grant privileges on objects in the schema.',
      'Managed schema owners are restricted from granting privileges on objects in the schema to other roles.',
      'A role with the MANAGE GRANTS privilege can grant other roles privileges on objects in the managed schema.',
    ],
    correct: [2, 4],
    explanation: 'Managed schemas restrict privilege granting except by MANAGE GRANTS holders.',
  },

  {
    question: 'Why is the PRIMARY KEY constraint used on standard tables?',
    type: 'single',
    options: [
      'To encrypt data in the table and ensure security',
      'To cluster data in the table and improve performance',
      'To enforce data integrity by preventing duplicate values',
      'To indicate unique identifiers for metadata purposes',
    ],
    correct: [2],
    explanation: 'To enforce data integrity by preventing duplicate values',
  },
  {
    question:
      'Use of which functions will return a default value if an expression evaluates to NULL? (Choose two.)',
    type: 'multiple',
    options: ['IS NULL', 'IFNULL', 'NULLIF', 'COALESCE', 'IS_NULL_VALUE'],
    correct: [1, 3],
    explanation: 'IFNULL and COALESCE',
  },
  {
    question:
      '[Image question - skip OR read docx file] A user is working with data in a table MAP_IP_HOST that contains a million unique IP addresses, along with their respective hosts. The user is running queries on a virtual warehouse named WH_XS, which is set with a MAX_CLUSTER_COUNT = 1. The user reports poor query performance when running this command: How can the query performance be improved?',
    type: 'single',
    options: [
      'Alter the warehouse and set the maximum cluster count to 3.',
      'Alter the warehouse to enable the query acceleration service.',
      'Alter the table to add search optimization on the IP column.',
      'Alter the table to add clustering on the IP column.',
    ],
    correct: [2],
    explanation: 'Alter the table to add search optimization on the IP column.',
  },
  {
    question:
      'What information in a secure User-Defined Function (UDF) is only available to authorized users? (Choose two.)',
    type: 'multiple',
    options: [
      'The UDF definition code',
      'Return type',
      'Parameter types',
      'A list of data imports',
      'Handler language',
    ],
    correct: [0, 3],
    explanation: 'The UDF definition code and A list of data imports',
  },
  {
    question: 'Which columns, by default, are included in all external tables? (Choose two.)',
    type: 'multiple',
    options: [
      'VALUE',
      'METADATA$ACTION',
      'METADATA$ROW_ID',
      'METADATA$FILENAME',
      'METADATA$ISUPDATE',
    ],
    correct: [0, 3],
    explanation: 'VALUE and METADATA$FILENAME',
  },
  {
    question:
      'In the ACCOUNT_USAGE schema, what system-defined database role can see a list of tables?',
    type: 'single',
    options: ['OBJECT_VIEWER', 'USAGE_VIEWER', 'GOVERNANCE_VIEWER', 'SECURITY_VIEWER'],
    correct: [0],
    explanation: 'OBJECT_VIEWER',
  },
  {
    question:
      'When using the COPY INTO < location > command, which parameter is used to unload table rows into separate files?',
    type: 'single',
    options: ['DETAILED_OUTPUT', 'PARTITION BY', 'FILE_FORMAT', 'HEADER'],
    correct: [1],
    explanation: 'PARTITION BY',
  },
  {
    question:
      'When would the use of the query acceleration service be MOST beneficial? (Choose two.)',
    type: 'multiple',
    options: [
      'When most queries have no filters or aggregate clauses.',
      'When analytical queries are performed frequently at unscheduled times.',
      'When queries typically include a LIMIT clause without an ORDER by clause.',
      'When queries with small scans and highly-selective filters are run frequently.',
      'When the data workloads for most queries have large, unpredictable data volumes.',
    ],
    correct: [1, 4],
    explanation:
      'When analytical queries are performed frequently at unscheduled times and When the data workloads for most queries have large, unpredictable data volumes.',
  },
  {
    question:
      'Which automatic Snowpipe feature ensures that the same data file is not loaded multiple times into a table?',
    type: 'single',
    options: [
      'Snowpipe deletes files from the stage after they are loaded...',
      'Snowpipe references the metadata of previously-loaded files...',
      'Snowpipe renames each file after loading...',
      'Snowpipe moves each file to a temporary stage...',
    ],
    correct: [1],
    explanation:
      'Snowpipe references the metadata of previously-loaded files, and will not load new files with same metadata.',
  },
  {
    question:
      'These queries were run at the indicated times... Which query will use the result cache?',
    type: 'single',
    options: [
      'Query_2 will make use of the persisted result cache of query_1',
      'Query_4 will make use of the persisted result cache of query_3',
      'Query_5 will make use of the persisted result cache of query_4',
      'Query_6 will make use of the persisted result cache of query_4',
    ],
    correct: [2],
    explanation: 'Query_5 will make use of the persisted result cache of query_4',
  },
  {
    question: 'Which Snowflake objects can be defined with future grants? (Choose two.)',
    type: 'multiple',
    options: [
      'Schemas',
      'Databases',
      'Masking policies',
      'External functions',
      'Virtual warehouses',
    ],
    correct: [0, 1],
    explanation: 'Schemas and Databases',
  },
  {
    question: 'What costs are associated with sharing Snowflake data with a reader account?',
    type: 'single',
    options: [
      'The data provider incurs costs for the data storage costs and the data consumer incurs compute costs.',
      'The data provider incurs costs for compute and the data consumer incurs costs for data storage.',
      'The data provider does not incur costs when sharing data...',
      'The data consumer does not incur costs when accessing shared data...',
    ],
    correct: [3],
    explanation:
      'The data consumer does not incur costs when accessing shared data, the data provider incurs costs for data storage and compute.',
  },
  {
    question:
      'Which command will allow users to query data from files in cloud storage without ingesting the data?',
    type: 'single',
    options: ['CREATE EXTERNAL TABLE', 'CREATE PIPE', 'CREATE TABLE', 'CREATE FILE FORMAT'],
    correct: [0],
    explanation: 'CREATE EXTERNAL TABLE',
  },
  {
    question:
      'A Snowflake user is creating a deployment pipeline for Snowflake objects. What interface should be used to automate object deployment?',
    type: 'single',
    options: ['Snowflake Horizon Catalog', 'SnowSQL', 'ODBC driver', 'SnowCD'],
    correct: [1],
    explanation: 'SnowSQL',
  },
  {
    question:
      'What is the default size for a newly-provisioned Snowpark-optimized virtual warehouse?',
    type: 'single',
    options: ['X-Large', 'Large', 'Medium', 'Small'],
    correct: [2],
    explanation: 'Medium',
  },
  {
    question:
      'When using the COPY INTO < location > command to unload table data into a CSV file, which option would compress the file using the default algorithm?',
    type: 'single',
    options: ['SNAPPY', 'DEFLATE', 'NONE', 'AUTO'],
    correct: [3],
    explanation: 'AUTO',
  },
  {
    question:
      '[Image question - skip OR read docx file] A table was created using this statement... Which feature of this table will incur both compute and storage costs?',
    type: 'single',
    options: [
      'The row access policy',
      'The Automatic Clustering',
      'The Dynamic Data Masking policy',
      'The NOT NULL constraint',
    ],
    correct: [1],
    explanation: 'The Automatic Clustering',
  },
  {
    question: 'What is a recommended best practice when loading data into Snowflake?',
    type: 'single',
    options: [
      'Combine smaller files into larger files before loading.',
      'When loading a single large file split it into multiple files before loading.',
      'Set the DATA_RETENTION_TIME_IN_DAYS on the table to 0 before loading.',
      'Make sure the files in the stage are either all compressed or all uncompressed.',
    ],
    correct: [0],
    explanation: 'Combine smaller files into larger files before loading.',
  },
  {
    question: 'What does creating a resource monitor for a virtual warehouse allow a user to do?',
    type: 'single',
    options: [
      'Schedule when the warehouse start and stops.',
      'Track and control the credits consumed by the warehouse.',
      'Monitor the real-time performance of all queries running on the warehouse.',
      'Automatically adjust the settings of the warehouse based on the workload',
    ],
    correct: [1],
    explanation: 'Track and control the credits consumed by the warehouse.',
  },
  {
    question: 'Which functions are used to manipulate semi-structured data? (Choose two.)',
    type: 'multiple',
    options: ['WIDTH_BUCKET', 'HASH_AGG', 'ARRAY_APPEND', 'OBJECT_INSERT', 'LISTAGG'],
    correct: [2, 3],
    explanation: 'ARRAY_APPEND and OBJECT_INSERT',
  },
  {
    question:
      'What object or service uses Change Data Capture (CDC) to record Data Manipulation Language (DML) changes made to tables?',
    type: 'single',
    options: ['Task', 'Stream', 'Snowpipe', 'Event table'],
    correct: [1],
    explanation: 'Stream',
  },
  {
    question:
      'Which Snowflake table stores file-level metadata about unstructured data files in a stage, including the size last-modified timestamp and Snowflake file URL?',
    type: 'single',
    options: ['Directory table', 'External table', 'Dynamic table', 'Iceberg table'],
    correct: [0],
    explanation: 'Directory table',
  },
  {
    question:
      'Which function will return the URL for an external stage by using the stage name as the input?',
    type: 'single',
    options: [
      'GET_ABSOLUTE_PATH',
      'GET_PRESIGNED_URL',
      'GET_STAGE_LOCATION',
      'BUILD_STAGE_FILE_URL',
    ],
    correct: [2],
    explanation: 'GET_STAGE_LOCATION',
  },
  {
    question: 'Which tasks will help OPTIMIZE virtual warehouse costs? (Choose two.)',
    type: 'multiple',
    options: [
      'Enabling auto-suspend',
      'Limiting statement queue times',
      'Enabling multi-cluster warehouses',
      'Limiting statement timeout seconds',
      'Enabling auto-resume',
    ],
    correct: [0, 3],
    explanation: 'Enabling auto-suspend and Limiting statement timeout seconds',
  },
  {
    question: 'Which metrics are provided in the Query Profile?',
    type: 'single',
    options: [
      'Query execution time and numbers of rows processed',
      'Data retention period and backup schedules',
      'Roles and permission of users running the queries',
      'The costs of running queries by user',
    ],
    correct: [0],
    explanation: 'Query execution time and numbers of rows processed',
  },
  {
    question:
      'Which operator is used to evaluate query pruning efficiency by comparing partitions scanned to partitions total?',
    type: 'single',
    options: ['IndexScan', 'ExternalScan', 'TableScan', 'Filter'],
    correct: [2],
    explanation: 'TableScan',
  },
  {
    question: 'What unit is used to calculate the monthly cost for storing data in Snowflake?',
    type: 'single',
    options: ['Gigabyte (GB)', 'Megabyte (MB)', 'Terabyte (TB)', 'Petabyte (PB)'],
    correct: [2],
    explanation: 'Terabyte (TB)',
  },
  {
    question: 'Which statement will execute a stored procedure?',
    type: 'single',
    options: [
      'CALL proc1(SELECT COUNT(*) FROM )',
      'CALL proc1(1) + proc1(2);',
      'CALL proc1(1) + 1;',
      'CALL proc1(proc2(1));',
    ],
    correct: [3],
    explanation: 'CALL proc1(proc2(1));',
  },
  {
    question:
      'What is the LEAST-PRIVILEGED database role needed to view the definition of a secure materialized view?',
    type: 'single',
    options: ['USAGE_VIEWER', 'OBJECT_VIEWER', 'SECURITY_VIEWER', 'GOVERNANCE_VIEWER'],
    correct: [1],
    explanation: 'OBJECT_VIEWER',
  },
  {
    question:
      'Which steps will reduce memory spillage when running a very large query? (Choose two.)',
    type: 'multiple',
    options: [
      'Enable auto-scale mode on the virtual warehouse.',
      'Increase the network bandwidth',
      'Process the data in smaller batches',
      'Add a DISTINCT clause to the query',
      'Increase the size of the virtual warehouse',
    ],
    correct: [2, 4],
    explanation:
      'Process the data in smaller batches and Increase the size of the virtual warehouse',
  },
  {
    question:
      'What is included in the calculation of the execution time reported in a Query Profile? (Choose two.)',
    type: 'multiple',
    options: ['Pruning', 'Local disk IO', 'Processing', 'Caching', 'Spilling'],
    correct: [1, 2],
    explanation: 'Local disk IO and Processing',
  },
  {
    question:
      'Which type of Snowflake security policy requires users to re-authenticate after a given period of inactivity?',
    type: 'single',
    options: ['Network policy', 'Password policy', 'Authentication policy', 'Session policy'],
    correct: [3],
    explanation: 'Session policy',
  },
  {
    question: 'What privileges are required to allow role RL_CUST_WH to start warehouse CUST_WH?',
    type: 'single',
    options: [
      'GRANT OPERATE ON CUST_WH TO ROLE RL_CUST_WH;',
      'GRANT CREATE WAREHOUSES ON ACCOUNT TO ROLE RL_CUST_WH;',
      'GRANT MANAGE WAREHOUSES ON ACCOUNT TO ROLE RL_CUST_WH;',
      'GRANT USAGE ON CUST_WH TO ROLE RL_CUST_WH;',
    ],
    correct: [0],
    explanation: 'GRANT OPERATE ON CUST_WH TO ROLE RL_CUST_WH;',
  },
  {
    question:
      'Which table function will automatically detect the file metadata schema for a set of staged semi-structured data files, and then retrieve the column definitions?',
    type: 'single',
    options: ['VALIDATE', 'INFER_SCHEMA', 'SPLIT_TO_TABLE', 'GET_OBJECT_REFERENCES'],
    correct: [1],
    explanation: 'INFER_SCHEMA',
  },
  {
    question:
      'What impact does dropping a column from a table have on the micro-partitions of that table?',
    type: 'single',
    options: [
      'The data associated with the dropped column will be removed from all existing micro-partitions.',
      'New micro-partitions will be created containing only the data for the remaining columns.',
      'The existing micro-partitions will not be affected.',
      'The current micro-partitions will not be available for Time Travel...',
    ],
    correct: [2],
    explanation: 'The existing micro-partitions will not be affected.',
  },
  {
    question: 'What command is used to unload data from a Snowflake table to a local file system?',
    type: 'single',
    options: ['COPY INTO < location >', 'GET', 'LIST', 'REMOVE'],
    correct: [1],
    explanation: 'GET',
  },
  {
    question:
      'How are clusters handled when the Economy scaling policy is set on a multi-cluster virtual warehouse?',
    type: 'single',
    options: [
      'A new cluster starts when the system detects that there is one or more queries queued...',
      'A new cluster will start every 60 seconds if there are queued queries...',
      'A new cluster starts only if the system estimates that the queued queries will require resources that will keep the new cluster busy for at least 6 minutes.',
      'A cluster will shut down after 3 system checks indicating...',
    ],
    correct: [2],
    explanation:
      'A new cluster starts only if the system estimates that the queued queries will require resources that will keep the new cluster busy for at least 6 minutes.',
  },
  {
    question:
      'What parameter setting will MAXIMIZE parallel processing when unloading data from Snowflake?',
    type: 'single',
    options: [
      'SINGLE = TRUE',
      'SINGLE = FALSE',
      'DETAILED_OUTPUT = TRUE',
      'DETAILED_OUTPUT = FALSE',
    ],
    correct: [1],
    explanation: 'SINGLE = FALSE',
  },
  {
    question: 'Which function is used to retrieve the filename for a file stored on a stage?',
    type: 'single',
    options: [
      'GET_RELATIVE_PATH',
      'GET_STAGE_LOCATION',
      'BUILD_STAGE_FILE_URL',
      'GET_OBJECT_REFERENCES',
    ],
    correct: [0],
    explanation: 'GET_RELATIVE_PATH',
  },
  {
    question:
      'When a data load operation is stopped while using the COPY INTO command, which view will provide information about why the operation failed?',
    type: 'single',
    options: ['COPY_HISTORY', 'PIPE_USAGE_HISTORY', 'QUERY_HISTORY', 'DATA_TRANSFER_HISTORY'],
    correct: [0],
    explanation: 'COPY_HISTORY',
  },
  {
    question: 'Which Snowflake feature or service can be used with a standard materialized view?',
    type: 'single',
    options: ['Time Travel', 'Fail-safe', 'Clustering', 'Data sharing'],
    correct: [2],
    explanation: 'Clustering',
  },
  {
    question:
      'What Snowpark element represents a data set and provides ways to operate on the data?',
    type: 'single',
    options: ['List', 'Table', 'Array', 'DataFrame'],
    correct: [3],
    explanation: 'DataFrame',
  },
  {
    question: 'What is a benefit of using Snowflake directory tables?',
    type: 'single',
    options: [
      'Directory tables store file-level metadata about the data files in a temporary table.',
      'Directory table owners can configure the tables to have unique privileges.',
      'Any directory table user can configure the tables to have unique privileges.',
      'Directory tables can be joined with other tables in Snowflake.',
    ],
    correct: [3],
    explanation: 'Directory tables can be joined with other tables in Snowflake.',
  },
  {
    question:
      'Which table type is supported by Open Catalog to provide centralized, read and write access to a table?',
    type: 'single',
    options: ['Hybrid', 'Iceberg', 'Dynamic', 'Event'],
    correct: [1],
    explanation: 'Iceberg',
  },
  {
    question:
      'A user wants to temporarily define access to a staged file without the need for the user to have stage-level privileges. Which type of Snowflake URL should be used?',
    type: 'single',
    options: ['Pre-signed', 'Scoped', 'External stage', 'File'],
    correct: [0],
    explanation: 'Pre-signed',
  },
  {
    question: 'Which data type is used to store semi-structured data in Snowflake?',
    type: 'single',
    options: ['GEOMETRY', 'VARIANT', 'VARCHAR', 'MAP'],
    correct: [1],
    explanation: 'VARIANT',
  },
  {
    question:
      'Which interface or service allow users to connect to Snowflake with Python? (Select TWO.)',
    type: 'multiple',
    options: [
      'Snowpark API',
      'Snowsight',
      'Streamlit in Snowflake',
      'Document AI',
      'Snowflake CLI',
    ],
    correct: [0, 4],
    explanation: 'Snowpark API and Snowflake CLI',
  },
  {
    question:
      'When unloading data from Snowflake using the COPY INTO < location > command, what is a key consideration for handling NULL values?',
    type: 'single',
    options: [
      'NULL values are automatically converted to empty strings.',
      'A string value should be specified to represent NULL values using the NULL_IF option.',
      'If a NULL value is detected during data loading, the process will stop and report an error.',
      'NULL values are automatically skipped during the unload process.',
    ],
    correct: [1],
    explanation:
      'A string value should be specified to represent NULL values using the NULL_IF option.',
  },
  {
    question:
      'When unloading data from Snowflake using the COPY INTO < location > command, what is a key consideration for handling NULL values?',
    type: 'single',
    options: [
      'NULL values are automatically converted to empty strings.',
      'A string value should be specified to represent NULL values using the NULL_IF option.',
      'If a NULL value is detected during data loading, the process will stop and report an error.',
      'NULL values are automatically skipped during the unload process.',
    ],
    correct: [1],
    explanation:
      'A string value should be specified to represent NULL values using the NULL_IF option.',
  },
  {
    question: 'How does an authentication policy affect security in a Snowflake account?',
    type: 'single',
    options: [
      'It controls how a client or user can access Snowflake.',
      'It restricts inbound access to Snowflake data.',
      'It restricts outbound traffic from Snowflake to external network destinations.',
      'It provides users with the ability to use Single Sign-On (SSO) to access Snowflake.',
    ],
    correct: [0],
    explanation: 'It controls how a client or user can access Snowflake.',
  },
  {
    question: 'By default, which Snowflake role has the ability to manage grants?',
    type: 'single',
    options: ['SYSADMIN', 'USERADMIN', 'SECURITYADMIN', 'ORGADMIN'],
    correct: [2],
    explanation: 'SECURITYADMIN',
  },
  {
    question:
      'When using Snowpipe, what will happen when a user re-uploads a file that was previously ingested?',
    type: 'single',
    options: [
      'Snowpipe will raise an error',
      'Snowpipe will re-ingest the file',
      'Snowpipe will overwrite the existing data',
      'Snowpipe will skip the file based on metadata',
    ],
    correct: [3],
    explanation: 'Snowpipe will skip the file based on metadata',
  },
  {
    question: 'What is the EXPLAIN function used for in Snowflake?',
    type: 'single',
    options: [
      'To compile a SQL statement and provide an execution plan using a virtual warehouse',
      'To compile a SQL statement and provide an execution plan while consuming cloud service credits',
      'To execute a SQL statement, and provide a history of the query execution...',
      'To execute a SQL statement and provide a history of the query execution including...',
    ],
    correct: [1],
    explanation:
      'To compile a SQL statement and provide an execution plan while consuming cloud service credits',
  },
  {
    question: 'Which data types are supported by the search optimization service? (Select TWO.)',
    type: 'multiple',
    options: ['INTEGER', 'GEOMETRY', 'FLOAT', 'VARIANT', 'BOOLEAN'],
    correct: [0, 4],
    explanation: 'INTEGER and BOOLEAN',
  },
  {
    question: 'Which object or feature can be used to monitor access to shared data?',
    type: 'single',
    options: ['Resource monitor', 'Access control', 'QUERY_HISTORY view', 'ACCESS_HISTORY view'],
    correct: [3],
    explanation: 'ACCESS_HISTORY view',
  },
  {
    question: 'Which table type should be used with an insert-only stream?',
    type: 'single',
    options: ['Temporary', 'Hybrid', 'External', 'Transient'],
    correct: [2],
    explanation: 'External',
  },
  {
    question: 'Which functions are used to aggregate values into an array? (Select TWO.)',
    type: 'multiple',
    options: ['ARRAY_AGG', 'ARRAY_SLICE', 'ARRAY_APPEND', 'ARRAY_CONSTRUCT', 'ARRAY_TO_STRING'],
    correct: [0, 3],
    explanation: 'ARRAY_AGG and ARRAY_CONSTRUCT',
  },
  {
    question: 'Which command is used when loading data with Snowpipe?',
    type: 'single',
    options: ['INSERT', 'COPY', 'UPDATE', 'MERGE'],
    correct: [1],
    explanation: 'COPY',
  },
  {
    question:
      'Which COPY INTO < location > command options impact the number of files generated? (Select TWO.)',
    type: 'multiple',
    options: ['SINGLE', 'RECORD DELIMITER', 'MAX_FILE_SIZE', 'INCLUDE_QUERY_ID', 'DETAILED_OUTPUT'],
    correct: [0, 2],
    explanation: 'SINGLE and MAX_FILE_SIZE',
  },
  {
    question:
      'In addition to the SELECT privilege, what other privilege MUST a role have to SELECT from a table in database1.schema1?',
    type: 'single',
    options: [
      'The USAGE privilege on the table.',
      'The OWNERSHIP privilege on the schema.',
      'The REFERENCES privilege on the table and the schema.',
      'The USAGE privilege on the database and the schema.',
    ],
    correct: [3],
    explanation: 'The USAGE privilege on the database and the schema.',
  },
  {
    question:
      'Which security features are used to control inbound access to Snowflake and internal stages? (Select TWO.)',
    type: 'multiple',
    options: [
      'Network rules',
      'Feature policies',
      'Network policies',
      'Packages Policies',
      'Authentication Policies',
    ],
    correct: [0, 2],
    explanation: 'Network rules and Network policies',
  },
  {
    question:
      'Data is retrieved by a query that contains a JOIN. What should be used to share this data without revealing the target table structure?',
    type: 'single',
    options: ['View', 'Secure view', 'Materialized view', 'Secure materialized view'],
    correct: [1],
    explanation: 'Secure view',
  },
  {
    question: 'Which step will reduce costs when backing up a table?',
    type: 'single',
    options: [
      'Clone the table.',
      'Unload the table data to a stage.',
      'Share the table data with an account in another region.',
      'Copy the table using a CREATE TABLE AS SELECT (CTAS) statement.',
    ],
    correct: [0],
    explanation: 'Clone the table.',
  },
  {
    question:
      'A table is created with a column set to a data type of CHARACTER(25). If the table is viewed in the database section of Snowsight, what data type will be shown for the column?',
    type: 'single',
    options: ['STRING(25)', 'TEXT(25)', 'VARCHAR(25)', 'CHARACTER(25)'],
    correct: [2],
    explanation: 'VARCHAR(25)',
  },
  {
    question: 'Which COPY INTO parameter is used to avoid loading a partial dataset?',
    type: 'single',
    options: [
      'FORCE = FALSE',
      'RETURN_FAILED_ONLY = FALSE',
      'LOAD_UNCERTAIN_FILES = FALSE',
      'ON_ERROR = ABORT_STATEMENT',
    ],
    correct: [3],
    explanation: 'ON_ERROR = ABORT_STATEMENT',
  },
  {
    question:
      'Using which feature or object will temporarily scale virtual warehouses running costly queries?',
    type: 'single',
    options: [
      'Resource monitor',
      'Materialized view',
      'Query acceleration service',
      'Search optimization service',
    ],
    correct: [2],
    explanation: 'Query acceleration service',
  },
  {
    question: 'Which sampling method will return a fixed number of rows?',
    type: 'single',
    options: ['BLOCK', 'SYSTEM', 'BERNOULLI', 'REPEATABLE'],
    correct: [2],
    explanation: 'BERNOULLI',
  },
  {
    question:
      'What AUTHENTICATION_METHODS should be selected for the Single Sign-On (SSO) login option to appear when creating a Snowflake authentication policy?',
    type: 'single',
    options: ['PASSWORD', 'KEYPAIR', 'SAML', 'OAUTH'],
    correct: [2],
    explanation: 'SAML',
  },
  {
    question:
      'Which command will download data files from an internal table stage to a local file system?',
    type: 'single',
    options: ['COPY INTO @', 'GET @~', 'GET @%', 'GET @'],
    correct: [1],
    explanation: 'GET @~',
  },
  {
    question: 'What are characteristics of Secure Data Sharing? (Select TWO.)',
    type: 'multiple',
    options: [
      'It allows regular views to be shared.',
      'Sensitive data is automatically masked.',
      'Data is not transferred between accounts.',
      'A consumer account will incur compute costs.',
      'Source data can be edited by users with reader accounts.',
    ],
    correct: [2, 3],
    explanation:
      'Data is not transferred between accounts and A consumer account will incur compute costs.',
  },
  {
    question: 'What does the :: operator do when used with a VARIANT value?',
    type: 'single',
    options: [
      'It converts a VARIANT value into an object.',
      'It extracts the raw value from the VARIANT column.',
      'It casts the value from a VARIANT to a specified data type.',
      'It generates a random sample from the VARIANT column.',
    ],
    correct: [2],
    explanation: 'It casts the value from a VARIANT to a specified data type.',
  },
  {
    question: 'In Snowpipe, what is the default behavior of the ON_ERROR COPY option?',
    type: 'single',
    options: ['CONTINUE', 'SKIP_FILE', 'SKIP_FILE_< num >', 'ABORT_STATEMENT'],
    correct: [0],
    explanation: 'CONTINUE',
  },
  {
    question:
      'Which COPY option is used to delete files from the stage after they are successfully loaded into a table?',
    type: 'single',
    options: [
      'FORCE = TRUE',
      'PURGE = TRUE',
      'TRUNCATECOLUMNS = TRUE',
      'RETURN_FAILED_ONLY = TRUE',
    ],
    correct: [1],
    explanation: 'PURGE = TRUE',
  },
  {
    question: 'Which privilege enables the ability to resume or suspend a task?',
    type: 'single',
    options: ['MONITOR', 'OPERATE', 'CREATE TASK', 'EXECUTE TASK'],
    correct: [1],
    explanation: 'OPERATE',
  },
  {
    question: 'What is run with a CALL statement?',
    type: 'single',
    options: ['System functions', 'Tasks', 'Stored procedures', 'External functions'],
    correct: [2],
    explanation: 'Stored procedures',
  },
  {
    question:
      'Which setting will help control credit consumption for a virtual warehouse that needs to run in Auto-scale mode?',
    type: 'single',
    options: [
      'Set the warehouse scaling policy to Economy.',
      'Set the MIN_CLUSTER_COUNT to 1.',
      'Set the AUTO_SUSPEND property of the warehouse to 0.',
      'Set the MIN_CLUSTER_COUNT to 2 and set the MAX_CLUSTER_COUNT to 2.',
    ],
    correct: [0],
    explanation: 'Set the warehouse scaling policy to Economy.',
  },
  {
    question: 'Which SQL statement will load data from a CSV file available in a user stage?',
    type: 'single',
    options: [
      'COPY INTO customer FROM @myStage FILE_FORMAT = (TYPE = CSV);',
      'COPY INTO customer FILE_FORMAT = (TYPE = CSV);',
      'COPY INTO customer FROM @myStage',
      'COPY INTO customer FROM @/myStage FILE_FORMAT = (TYPE = CSV);',
    ],
    correct: [0],
    explanation: 'COPY INTO customer FROM @myStage FILE_FORMAT = (TYPE = CSV);',
  },
  {
    question: 'What information is included in the output of an EXPLAIN_PLAN?',
    type: 'single',
    options: [
      'The predicted time it will take to run the operation.',
      'The number of credits that the operation will consume.',
      'The type of data that will be returned when the operation is run.',
      'The total number of micro-partitions that the operation will reference.',
    ],
    correct: [3],
    explanation: 'The total number of micro-partitions that the operation will reference.',
  },
  {
    question:
      'Which PUT command parameter is used to specify the number of threads to use for loading files?',
    type: 'single',
    options: ['OVERWRITE', 'PARALLEL', 'AUTO_COMPRESS', 'SOURCE_COMPRESSION'],
    correct: [1],
    explanation: 'PARALLEL',
  },
  {
    question: 'What column metadata does the query optimizer use for micro-partition pruning?',
    type: 'single',
    options: [
      'The primary key',
      'The range of values',
      'The number of null values',
      'The number of distinct values',
    ],
    correct: [1],
    explanation: 'The range of values',
  },
];

// Xuất dữ liệu để sử dụng trong script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizData;
}

const QUESTIONS_PER_PAGE = 100;
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
    questionDiv.innerHTML = `<h3> <span style="font-weight: bold;"> Question ${
      globalIndex + 1
    }.</span>  ${item.question}</h3> `;

    item.options.forEach((option, optIndex) => {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('option');
      const inputType = item.type === 'multiple' ? 'checkbox' : 'radio';
      const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? 'checked' : '';
      optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}> 
                <label for="q${globalIndex}o${optIndex}"> ${String.fromCharCode(
        65 + optIndex
      )}. ${option}</label> 
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
  allInputs.forEach((input) => {
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
      selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter((v) => v !== value);
    }
  });
}

// Kiểm tra xem tất cả câu hỏi đã được trả lời chưa
// function checkAllAnswered() {
//     let allAnswered = true;

//     quizData.forEach((_, index) =>  {
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
      item.type === 'multiple'
        ? arraysEqual(selectedValues.sort(), item.correct.sort())
        : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

    submittedResults[index] = isCorrect
      ? `<span class="correct"> Correct: ${item.correct
          .map((i) => String.fromCharCode(65 + i))
          .join(', ')}</span>`
      : `<span class="incorrect"> Incorrect</span>  - Correct Answer: ${item.correct
          .map((i) => String.fromCharCode(65 + i))
          .join(', ')}`;

    const resultText = document.getElementById(`result-q${index}`);
    if (resultText) {
      resultText.style.display = 'block';
      resultText.innerHTML = submittedResults[index];
    }

    if (isCorrect) score++;
  });

  const scoreDisplay = document.getElementById('score-display');
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
document.addEventListener('DOMContentLoaded', () => {
  loadQuiz(currentPage);
  document.getElementById('submit-btn').addEventListener('click', submitQuiz);
  document.getElementById('quiz').addEventListener('change', () => {
    updateSelectedAnswers();
    // checkAllAnswered();
  });
});
