// HR Operations Data
const hrOperations = {
    'job-automation': {
        title: 'Job Description Automation',
        icon: 'fas fa-robot',
        description: 'Automated job description creation and multi-platform posting management with AI-powered tools and integrations.',
        useCases: [
            {
                title: 'AI-Powered Description Generation',
                icon: 'fas fa-magic',
                description: 'Generate professional job descriptions using AI and templates.',
                details: [
                    'Role-specific template customization',
                    'Skills and requirements analysis',
                    'Industry-standard compliance checking',
                    'Bias-free language verification'
                ],
                azureServices: [
                    { name: 'Azure OpenAI Service', role: 'AI-powered content generation' },
                    { name: 'Azure Functions', role: 'Template processing and customization' },
                    { name: 'Azure SQL Database', role: 'Store templates and job data' },
                    { name: 'Azure Cognitive Services', role: 'Language analysis and bias detection' }
                ]
            },
            {
                title: 'Multi-Platform Publishing',
                icon: 'fas fa-share-nodes',
                description: 'Automate job posting across multiple hiring platforms.',
                details: [
                    'Simultaneous multi-platform posting',
                    'Platform-specific format adaptation',
                    'Posting schedule optimization',
                    'Distribution analytics tracking'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Multi-platform posting automation' },
                    { name: 'Azure API Management', role: 'Job board API integration' },
                    { name: 'Azure Service Bus', role: 'Message queue for postings' },
                    { name: 'Azure Monitor', role: 'Track posting performance' }
                ]
            },
            {
                title: 'SEO & Visibility Optimization',
                icon: 'fas fa-magnifying-glass-chart',
                description: 'Optimize job descriptions for maximum visibility and reach.',
                details: [
                    'Keyword optimization and analysis',
                    'Search ranking improvement',
                    'Job market trend analysis',
                    'Visibility performance tracking'
                ],
                azureServices: [
                    { name: 'Azure Cognitive Search', role: 'SEO keyword analysis' },
                    { name: 'Azure Machine Learning', role: 'Trend analysis and predictions' },
                    { name: 'Azure Analytics', role: 'Visibility metrics tracking' },
                    { name: 'Power BI', role: 'Performance visualization' }
                ]
            },
            {
                title: 'Content Management & Version Control',
                icon: 'fas fa-code-branch',
                description: 'Manage and version control job description content.',
                details: [
                    'Template version management',
                    'Change history tracking',
                    'Collaborative editing workflow',
                    'Content approval process'
                ],
                azureServices: [
                    { name: 'Azure DevOps', role: 'Version control and collaboration' },
                    { name: 'Azure Blob Storage', role: 'Store content versions' },
                    { name: 'Azure Functions', role: 'Content validation and processing' },
                    { name: 'Azure Logic Apps', role: 'Approval workflow automation' }
                ]
            }
        ]
    },
    'recruitment': {
        title: 'Recruitment & Hiring',
        icon: 'fas fa-search',
        description: 'End-to-end recruitment process management including job posting, candidate screening, interviewing, and hiring decisions.',
        useCases: [
            {
                title: 'Job Posting Management',
                icon: 'fas fa-bullhorn',
                description: 'Create and manage job postings across multiple platforms.',
                details: [
                    'Multi-channel job posting automation',
                    'Job description templates and customization',
                    'Application deadline and requirement tracking',
                    'Performance analytics for job postings'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host recruitment portal' },
                    { name: 'Azure SQL Database', role: 'Store job posting data' },
                    { name: 'Azure Logic Apps', role: 'Automate multi-channel posting' },
                    { name: 'Azure Blob Storage', role: 'Store job templates' }
                ]
            },
            {
                title: 'Candidate Screening',
                icon: 'fas fa-filter',
                description: 'Automated and manual candidate evaluation processes.',
                details: [
                    'Resume parsing and keyword matching',
                    'Automated screening questionnaires',
                    'Skills assessment integration',
                    'Candidate ranking and shortlisting'
                ],
                azureServices: [
                    { name: 'Azure Functions', role: 'Process screening questionnaires' },
                    { name: 'Azure Cognitive Search', role: 'Resume parsing and matching' },
                    { name: 'Azure Machine Learning', role: 'Candidate fit prediction' }
                ]
            },
            {
                title: 'Interview Management',
                icon: 'fas fa-comments',
                description: 'Coordinate and manage the entire interview process.',
                details: [
                    'Interview scheduling and calendar coordination',
                    'Panel setup and interviewer assignments',
                    'Feedback collection and evaluation forms',
                    'Decision tracking and communication'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host interview management portal' },
                    { name: 'Azure Logic Apps', role: 'Manage interview workflows' },
                    { name: 'Azure SQL Database', role: 'Store interview schedules' },
                    { name: 'Azure Blob Storage', role: 'Store feedback forms' }
                ]
            },
            {
                title: 'Offer Management',
                icon: 'fas fa-handshake',
                description: 'Handle job offers, negotiations, and acceptance tracking.',
                details: [
                    'Offer letter generation and customization',
                    'Negotiation tracking and approval workflows',
                    'Background check coordination',
                    'Acceptance confirmation and onboarding initiation'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate offer workflows' },
                    { name: 'Azure Blob Storage', role: 'Store offer templates' },
                    { name: 'Azure Functions', role: 'Generate custom offers' },
                    { name: 'Azure SQL Database', role: 'Track offer status' }
                ]
            },
            {
                title: 'Resume Processing',
                icon: 'fas fa-file-alt',
                description: 'Intelligent resume parsing and candidate matching.',
                details: [
                    'Automated resume parsing with Form Recognizer',
                    'Candidate search using Azure Cognitive Search',
                    'Document storage in Azure Blob Storage',
                    'Workflow automation with Logic Apps'
                ],
                azureServices: [
                    { name: 'Form Recognizer', role: 'Resume parsing' },
                    { name: 'Azure Cognitive Search', role: 'Candidate matching' },
                    { name: 'Azure Blob Storage', role: 'Document storage' },
                    { name: 'Azure Logic Apps', role: 'Process automation' }
                ]
            }
        ]
    },
    'employee-management': {
        title: 'Employee Management',
        icon: 'fas fa-user-tie',
        description: 'Comprehensive employee lifecycle management from onboarding to offboarding, including profile management, documentation, and organizational structure.',
        useCases: [
            {
                title: 'Employee Onboarding',
                icon: 'fas fa-user-plus',
                description: 'Streamlined process for new hire integration and documentation.',
                details: [
                    'Digital offer letters with Azure Logic Apps workflow',
                    'Document storage in Azure Blob Storage',
                    'Identity management via Azure Active Directory',
                    'Employee profiles in Azure SQL Database'
                ],
                azureServices: [
                    { name: 'Azure Active Directory (AD)', role: 'Identity and access management' },
                    { name: 'Azure Blob Storage', role: 'Document storage and management' },
                    { name: 'Azure Logic Apps', role: 'Workflow automation' },
                    { name: 'Azure SQL Database', role: 'Profile data storage' }
                ]
            },
            {
                title: 'Profile Management',
                icon: 'fas fa-id-card',
                description: 'Complete employee information management and updates.',
                details: [
                    'Profile data in Azure SQL/Cosmos DB',
                    'Document management with Azure Blob Storage',
                    'Access control via Azure AD',
                    'Data security with Azure Key Vault'
                ],
                azureServices: [
                    { name: 'Azure SQL Database', role: 'Primary data storage' },
                    { name: 'Cosmos DB', role: 'Flexible document storage' },
                    { name: 'Azure Key Vault', role: 'Secure data protection' },
                    { name: 'Azure AD', role: 'Access management' }
                ]
            },
            {
                title: 'Organizational Structure',
                icon: 'fas fa-sitemap',
                description: 'Manage reporting relationships and department hierarchies.',
                details: [
                    'Department and team organization',
                    'Reporting relationship mapping',
                    'Role and responsibility definitions',
                    'Organizational chart visualization'
                ],
                azureServices: [
                    { name: 'Azure SQL Database', role: 'Store organizational hierarchy data' },
                    { name: 'Azure Functions', role: 'Org chart API and role management' },
                    { name: 'Azure App Service', role: 'Host organization management tools' },
                    { name: 'Microsoft Entra ID', role: 'Employee identity management' }
                ]
            },
            {
                title: 'Employee Offboarding',
                icon: 'fas fa-user-minus',
                description: 'Structured process for employee departures and knowledge transfer.',
                details: [
                    'Exit interview scheduling and documentation',
                    'Asset return and access revocation',
                    'Knowledge transfer facilitation',
                    'Final documentation and clearance'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate offboarding workflows' },
                    { name: 'Microsoft Entra ID', role: 'Manage access revocation' },
                    { name: 'Azure Blob Storage', role: 'Store offboarding documents' },
                    { name: 'Azure Functions', role: 'Handle offboarding tasks' }
                ]
            }
        ]
    },
    'benefits': {
        title: 'Benefits Administration',
        icon: 'fas fa-heart',
        description: 'Employee benefits management including health insurance, retirement plans, and wellness programs.',
        useCases: [
            {
                title: 'Health Insurance',
                icon: 'fas fa-heart-pulse',
                description: 'Manage health insurance plans and coverage.',
                details: [
                    'Health plan enrollment and management',
                    'Coverage option comparisons',
                    'Claims processing and tracking',
                    'Provider network management'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host insurance enrollment portal' },
                    { name: 'Azure SQL Database', role: 'Store plan and claims data' },
                    { name: 'Azure Functions', role: 'Process claims and eligibility' },
                    { name: 'Azure Blob Storage', role: 'Store claim documents' },
                    { name: 'Azure API Management', role: 'Insurance provider integration' }
                ]
            },
            {
                title: 'Retirement Plans',
                icon: 'fas fa-piggy-bank',
                description: 'Retirement savings and investment plan management.',
                details: [
                    '401(k) and pension plan administration',
                    'Contribution tracking and matching',
                    'Investment option management',
                    'Retirement planning tools and calculators'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host retirement planning portal' },
                    { name: 'Azure SQL Database', role: 'Store contribution data' },
                    { name: 'Azure Functions', role: 'Calculate matches and process changes' },
                    { name: 'Azure API Management', role: 'Financial institution integration' }
                ]
            },
            {
                title: 'Wellness Programs',
                icon: 'fas fa-running',
                description: 'Employee wellness and health promotion programs.',
                details: [
                    'Wellness program enrollment and tracking',
                    'Health screening and assessment tools',
                    'Fitness and nutrition program management',
                    'Wellness incentive and reward systems'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host wellness program portal' },
                    { name: 'Cosmos DB', role: 'Store diverse wellness data' },
                    { name: 'Azure Functions', role: 'Process fitness data and assessments' },
                    { name: 'Azure Logic Apps', role: 'Automate rewards and incentives' }
                ]
            },
            {
                title: 'Benefits Enrollment',
                icon: 'fas fa-clipboard-list',
                description: 'Streamlined benefits enrollment and change management.',
                details: [
                    'Open enrollment period management',
                    'Life event change processing',
                    'Benefits comparison and decision tools',
                    'Enrollment confirmation and documentation'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate enrollment workflows' },
                    { name: 'Microsoft Entra ID', role: 'Identity and access management' },
                    { name: 'Azure Service Bus', role: 'Handle enrollment submissions' },
                    { name: 'Azure Blob Storage', role: 'Store enrollment documents' }
                ]
            }
        ]
    },
    'payroll': {
        title: 'Payroll Management',
        icon: 'fas fa-money-check-alt',
        description: 'Comprehensive payroll processing including salary calculations, tax management, and payment distribution.',
        useCases: [
            {
                title: 'Salary Processing',
                icon: 'fas fa-calculator',
                description: 'Automated salary calculations and processing workflows.',
                details: [
                    'Basic salary and allowance calculations',
                    'Overtime and bonus computations',
                    'Deduction management (taxes, insurance, loans)',
                    'Net pay calculation and verification'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate salary workflows and approvals' },
                    { name: 'Azure Functions', role: 'Serverless compute for calculations' },
                    { name: 'Azure SQL Database', role: 'Store salary and deduction data' },
                    { name: 'Azure Key Vault', role: 'Secure payroll credentials' }
                ]
            },
            {
                title: 'Tax Management',
                icon: 'fas fa-receipt',
                description: 'Tax calculation, deduction, and compliance management.',
                details: [
                    'Income tax calculation based on brackets',
                    'Social security and medicare deductions',
                    'Tax form generation (W-2, 1099)',
                    'Year-end tax reporting and compliance'
                ],
                azureServices: [
                    { name: 'Azure Cognitive Services', role: 'Extract data from tax forms' },
                    { name: 'Azure SQL Database', role: 'Store tax brackets and rules' },
                    { name: 'Azure Functions', role: 'Tax calculation logic' },
                    { name: 'Azure API Management', role: 'Tax calculation API integration' }
                ]
            },
            {
                title: 'Payment Distribution',
                icon: 'fas fa-credit-card',
                description: 'Secure and efficient salary payment processing.',
                details: [
                    'Direct deposit setup and management',
                    'Payment schedule configuration',
                    'Bank integration and reconciliation',
                    'Payment confirmation and notifications'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Direct deposit workflow automation' },
                    { name: 'Azure Service Bus', role: 'Secure payment message handling' },
                    { name: 'Azure Event Grid', role: 'Real-time payment notifications' },
                    { name: 'Azure Monitor', role: 'Payment tracking and reconciliation' }
                ]
            },
            {
                title: 'Payroll Reporting',
                icon: 'fas fa-chart-bar',
                description: 'Comprehensive payroll analytics and reporting.',
                details: [
                    'Monthly and yearly payroll summaries',
                    'Department-wise cost analysis',
                    'Tax liability and payment reports',
                    'Compliance and audit trail reports'
                ],
                azureServices: [
                    { name: 'Azure Synapse Analytics', role: 'Large-scale payroll analytics' },
                    { name: 'Power BI', role: 'Payroll visualization and reporting' },
                    { name: 'Azure Data Lake Storage', role: 'Historical payroll data storage' },
                    { name: 'Azure Purview', role: 'Data governance and compliance' }
                ]
            }
        ]
    },
    'leave': {
        title: 'Leave Management',
        icon: 'fas fa-calendar-times',
        description: 'Leave application, approval workflows, balance tracking, and policy management.',
        useCases: [
            {
                title: 'Leave Applications',
                icon: 'fas fa-file-alt',
                description: 'Streamlined leave request and application process.',
                details: [
                    'Online leave application forms',
                    'Leave type selection and validation',
                    'Supporting document uploads',
                    'Application status tracking'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host leave application portal' },
                    { name: 'Azure Functions', role: 'Process and validate form submissions' },
                    { name: 'Azure SQL Database', role: 'Store application data' },
                    { name: 'Azure Blob Storage', role: 'Store supporting documents' }
                ]
            },
            {
                title: 'Approval Workflows',
                icon: 'fas fa-check-circle',
                description: 'Automated approval processes with escalation rules.',
                details: [
                    'Multi-level approval hierarchies',
                    'Automatic escalation rules',
                    'Approval notifications and reminders',
                    'Bulk approval capabilities'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate approval workflows' },
                    { name: 'Microsoft Entra ID', role: 'Manage approval roles and routing' },
                    { name: 'Azure Service Bus', role: 'Handle notifications and reminders' }
                ]
            },
            {
                title: 'Leave Balance Tracking',
                icon: 'fas fa-balance-scale',
                description: 'Track and manage employee leave balances and entitlements.',
                details: [
                    'Accrual calculation and tracking',
                    'Balance verification and updates',
                    'Carry-forward and encashment rules',
                    'Real-time balance display'
                ],
                azureServices: [
                    { name: 'Azure Functions', role: 'Calculate leave accrual and balances' },
                    { name: 'Azure SQL Database', role: 'Store and track leave balances' },
                    { name: 'Cosmos DB', role: 'Real-time balance updates and history' }
                ]
            },
            {
                title: 'Policy Management',
                icon: 'fas fa-gavel',
                description: 'Configure and manage organizational leave policies.',
                details: [
                    'Leave policy configuration and updates',
                    'Holiday calendar management',
                    'Policy compliance monitoring',
                    'Custom leave type creation'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host policy management interface' },
                    { name: 'Azure Functions', role: 'Enforce policy compliance' },
                    { name: 'Azure SQL Database', role: 'Store policies and calendars' }
                ]
            }
        ]
    },
    'attendance': {
        title: 'Attendance Management',
        icon: 'fas fa-clock',
        description: 'Time tracking, attendance monitoring, shift management, and work hour optimization.',
        useCases: [
            {
                title: 'Time Tracking',
                icon: 'fas fa-stopwatch',
                description: 'Accurate time recording and work hour management.',
                details: [
                    'Clock-in/clock-out system integration',
                    'Break time and overtime tracking',
                    'Project-based time allocation',
                    'Mobile time tracking capabilities'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host attendance tracking portal' },
                    { name: 'Azure SQL Database', role: 'Store time logs and allocations' },
                    { name: 'Azure Active Directory', role: 'Secure employee login (SSO)' },
                    { name: 'Azure Functions', role: 'Process check-in/out calculations' },
                    { name: 'Azure Notification Hubs', role: 'Mobile tracking reminders' }
                ]
            },
            {
                title: 'Shift Management',
                icon: 'fas fa-calendar-alt',
                description: 'Schedule shifts and manage work rotations efficiently.',
                details: [
                    'Shift scheduling and roster management',
                    'Shift swapping and coverage requests',
                    'Availability tracking and preferences',
                    'Shift pattern optimization'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate shift scheduling workflows' },
                    { name: 'Azure SQL Database', role: 'Store rosters and preferences' },
                    { name: 'Azure Cognitive Services', role: 'Optimize shift patterns' },
                    { name: 'Azure Event Grid', role: 'Real-time shift notifications' }
                ]
            },
            {
                title: 'Attendance Monitoring',
                icon: 'fas fa-eye',
                description: 'Monitor attendance patterns and identify issues.',
                details: [
                    'Attendance pattern analysis and alerts',
                    'Tardiness and absenteeism tracking',
                    'Attendance policy compliance monitoring',
                    'Automated attendance reports'
                ],
                azureServices: [
                    { name: 'Azure Synapse Analytics', role: 'Analyze attendance trends' },
                    { name: 'Azure Machine Learning', role: 'Predict absenteeism patterns' },
                    { name: 'Azure Monitor', role: 'Generate attendance alerts' },
                    { name: 'Power BI', role: 'Attendance KPI dashboards' }
                ]
            },
            {
                title: 'Overtime Management',
                icon: 'fas fa-clock',
                description: 'Track and manage overtime hours and approvals.',
                details: [
                    'Overtime request and approval workflows',
                    'Overtime calculation and compensation',
                    'Overtime policy compliance',
                    'Cost analysis and budget tracking'
                ],
                azureServices: [
                    { name: 'Azure Logic Apps', role: 'Automate overtime workflows' },
                    { name: 'Azure SQL Database', role: 'Store overtime and compliance data' },
                    { name: 'Azure Synapse Analytics', role: 'Overtime cost analysis' },
                    { name: 'Azure Key Vault', role: 'Secure payroll integration' },
                    { name: 'Power BI', role: 'Overtime analytics dashboards' }
                ]
            }
        ]
    },
    'performance': {
        title: 'Performance Management',
        icon: 'fas fa-chart-line',
        description: 'Goal setting, performance tracking, feedback management, and career development planning.',
        useCases: [
            {
                title: 'Goal Setting & Tracking',
                icon: 'fas fa-target',
                description: 'Set, monitor, and evaluate employee goals and objectives.',
                details: [
                    'SMART goal creation and alignment',
                    'Progress tracking and milestone management',
                    'Goal modification and approval workflows',
                    'Achievement measurement and scoring'
                ],
                azureServices: [
                    { name: 'Azure SQL Database', role: 'Store goals and progress data' },
                    { name: 'Azure App Service', role: 'Host goal management portal' },
                    { name: 'Azure Logic Apps', role: 'Automate goal approvals' },
                    { name: 'Azure Functions', role: 'Calculate progress metrics' }
                ]
            },
            {
                title: 'Performance Reviews',
                icon: 'fas fa-clipboard-check',
                description: 'Structured performance evaluation and review processes.',
                details: [
                    'Annual and quarterly review cycles',
                    'Self-assessment and peer review forms',
                    'Manager evaluation and feedback',
                    'Performance rating and calibration'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host review portal' },
                    { name: 'Azure Logic Apps', role: 'Manage review cycles' },
                    { name: 'Azure SQL Database', role: 'Store review data' },
                    { name: 'Azure Blob Storage', role: 'Store review documents' },
                    { name: 'Azure Cognitive Services', role: 'Analyze feedback sentiment' }
                ]
            },
            {
                title: 'Feedback Management',
                icon: 'fas fa-comment-dots',
                description: 'Continuous feedback collection and management system.',
                details: [
                    '360-degree feedback collection',
                    'Real-time feedback and recognition',
                    'Feedback analysis and insights',
                    'Action plan creation and follow-up'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host feedback platform' },
                    { name: 'Azure Logic Apps', role: 'Manage feedback collection' },
                    { name: 'Azure SQL Database', role: 'Store feedback data' },
                    { name: 'Azure Cognitive Services', role: 'Analyze feedback insights' }
                ]
            },
            {
                title: 'Career Development',
                icon: 'fas fa-route',
                description: 'Career planning and development path management.',
                details: [
                    'Career path planning and visualization',
                    'Skill gap analysis and development plans',
                    'Succession planning and talent mapping',
                    'Promotion and advancement tracking'
                ],
                azureServices: [
                    { name: 'Azure SQL Database', role: 'Store career development data' },
                    { name: 'Azure App Service', role: 'Host career development portal' },
                    { name: 'Azure Machine Learning', role: 'Career path recommendations' },
                    { name: 'Azure Functions', role: 'Automate talent mapping' }
                ]
            }
        ]
    },
    'training': {
        title: 'Training & Development',
        icon: 'fas fa-graduation-cap',
        description: 'Learning management, skill development, certification tracking, and training program administration.',
        useCases: [
            {
                title: 'Learning Management',
                icon: 'fas fa-book-open',
                description: 'Manage training programs, courses, and learning materials.',
                details: [
                    'Course catalog and curriculum management',
                    'Learning path creation and assignments',
                    'Progress tracking and completion rates',
                    'Learning material versioning and updates'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host training portal & course catalog' },
                    { name: 'Azure SQL Database', role: 'Store course data and progress tracking' },
                    { name: 'Azure Blob Storage', role: 'Store learning materials and documents' },
                    { name: 'Azure Media Services', role: 'Stream video-based training content' },
                    { name: 'Azure Logic Apps', role: 'Automate course enrollment workflows' }
                ]
            },
            {
                title: 'Skill Assessment',
                icon: 'fas fa-tasks',
                description: 'Evaluate and track employee skills and competencies.',
                details: [
                    'Skills inventory and competency mapping',
                    'Assessment creation and administration',
                    'Skill gap identification and planning',
                    'Competency-based performance evaluation'
                ],
                azureServices: [
                    { name: 'Azure Language Service', role: 'Analyze assessment responses' },
                    { name: 'Azure Machine Learning', role: 'Skill gap identification & predictions' },
                    { name: 'Azure Forms Recognizer', role: 'Process assessment forms' },
                    { name: 'Azure Synapse Analytics', role: 'Aggregate assessment results' }
                ]
            },
            {
                title: 'Certification Management',
                icon: 'fas fa-certificate',
                description: 'Track professional certifications and compliance training.',
                details: [
                    'Certification requirement tracking',
                    'Renewal and expiration notifications',
                    'Compliance training management',
                    'External certification integration'
                ],
                azureServices: [
                    { name: 'Azure SQL Database', role: 'Store certification records' },
                    { name: 'Azure Logic Apps', role: 'Automate renewal notifications' },
                    { name: 'Azure Key Vault', role: 'Secure certification credentials' },
                    { name: 'Azure API Management', role: 'External certification integration' },
                    { name: 'Azure Purview', role: 'Compliance and audit tracking' }
                ]
            },
            {
                title: 'Training Analytics',
                icon: 'fas fa-chart-pie',
                description: 'Analyze training effectiveness and learning outcomes.',
                details: [
                    'Training ROI calculation and analysis',
                    'Learner engagement and satisfaction metrics',
                    'Skill development progress tracking',
                    'Training program effectiveness reports'
                ],
                azureServices: [
                    { name: 'Azure Synapse Analytics', role: 'Training ROI and performance analysis' },
                    { name: 'Azure Data Lake Storage', role: 'Historical training data storage' },
                    { name: 'Power BI', role: 'Interactive training dashboards' },
                    { name: 'Azure Monitor', role: 'Track learner engagement patterns' },
                    { name: 'Azure Machine Learning', role: 'Predict training effectiveness' }
                ]
            }
        ]
    },
    'self-service': {
        title: 'Employee Self-Service',
        icon: 'fas fa-user-cog',
        description: 'Empower employees with self-service capabilities for common HR tasks and information access.',
        useCases: [
            {
                title: 'Personal Information Updates',
                icon: 'fas fa-edit',
                description: 'Allow employees to update their personal information.',
                details: [
                    'Contact information updates',
                    'Emergency contact management',
                    'Banking and direct deposit changes',
                    'Tax withholding adjustments'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host employee self-service portal' },
                    { name: 'Azure SQL Database', role: 'Store employee personal data' },
                    { name: 'Azure Functions', role: 'Validate data changes' },
                    { name: 'Microsoft Entra ID', role: 'Secure authentication and access' }
                ]
            },
            {
                title: 'Pay Stub Access',
                icon: 'fas fa-file-invoice-dollar',
                description: 'Secure access to payroll information and documents.',
                details: [
                    'Current and historical pay stub access',
                    'Tax document downloads (W-2, 1099)',
                    'Earnings and deduction breakdowns',
                    'Year-to-date summary reports'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host pay stub access portal' },
                    { name: 'Azure Blob Storage', role: 'Store pay stubs and tax documents' },
                    { name: 'Azure Functions', role: 'Generate pay stub documents' },
                    { name: 'Azure Service Bus', role: 'Queue document generation requests' }
                ]
            },
            {
                title: 'Time-off Requests',
                icon: 'fas fa-calendar-plus',
                description: 'Self-service leave and time-off request management.',
                details: [
                    'Leave application submission',
                    'Balance inquiry and tracking',
                    'Request status monitoring',
                    'Calendar integration and planning'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host time-off request interface' },
                    { name: 'Azure Logic Apps', role: 'Automate request workflows' },
                    { name: 'Azure SQL Database', role: 'Store leave request data' },
                    { name: 'Azure Functions', role: 'Calculate leave balances' }
                ]
            },
            {
                title: 'Benefits Enrollment',
                icon: 'fas fa-shield-alt',
                description: 'Self-service benefits selection and management.',
                details: [
                    'Benefits plan comparison and selection',
                    'Enrollment and change submissions',
                    'Beneficiary designation updates',
                    'Benefits utilization tracking'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host benefits enrollment portal' },
                    { name: 'Azure Logic Apps', role: 'Manage enrollment workflows' },
                    { name: 'Azure SQL Database', role: 'Store benefits selections' },
                    { name: 'Azure Blob Storage', role: 'Store enrollment documents' }
                ]
            }
        ]
    },
    'compliance': {
        title: 'Compliance Management',
        icon: 'fas fa-gavel',
        description: 'Ensure regulatory compliance, policy management, audit trails, and legal requirement adherence.',
        useCases: [
            {
                title: 'Regulatory Compliance',
                icon: 'fas fa-balance-scale',
                description: 'Monitor and ensure adherence to labor laws and regulations.',
                details: [
                    'Labor law compliance monitoring',
                    'Regulatory update tracking and implementation',
                    'Compliance violation alerts and reporting',
                    'Legal requirement documentation'
                ],
                azureServices: [
                    { name: 'Azure Functions', role: 'Automated compliance checks and alerts' },
                    { name: 'Azure Logic Apps', role: 'Regulatory update workflows' },
                    { name: 'Azure SQL Database', role: 'Store compliance records' },
                    { name: 'Azure Monitor', role: 'Compliance adherence tracking' }
                ]
            },
            {
                title: 'Policy Management',
                icon: 'fas fa-book',
                description: 'Create, update, and distribute organizational policies.',
                details: [
                    'Policy creation and approval workflows',
                    'Policy distribution and acknowledgment',
                    'Policy version control and history',
                    'Policy compliance tracking'
                ],
                azureServices: [
                    { name: 'Azure App Service', role: 'Host policy management portal' },
                    { name: 'Azure SQL Database', role: 'Store policy data and history' },
                    { name: 'Azure Logic Apps', role: 'Policy approval workflows' },
                    { name: 'Azure Blob Storage', role: 'Store policy documents' }
                ]
            },
            {
                title: 'Audit Management',
                icon: 'fas fa-search',
                description: 'Audit trail management and compliance reporting.',
                details: [
                    'Comprehensive audit trail maintenance',
                    'Internal and external audit preparation',
                    'Compliance report generation',
                    'Risk assessment and mitigation planning'
                ],
                azureServices: [
                    { name: 'Microsoft Defender for Cloud', role: 'Security and audit analysis' },
                    { name: 'Azure Data Explorer', role: 'Audit trail analytics' },
                    { name: 'Azure SQL Database', role: 'Store audit reports' },
                    { name: 'Azure Functions', role: 'Automated report generation' }
                ]
            },
            {
                title: 'Documentation Control',
                icon: 'fas fa-folder-open',
                description: 'Secure document management and retention policies.',
                details: [
                    'Document classification and retention',
                    'Access control and security measures',
                    'Document lifecycle management',
                    'Compliance documentation requirements'
                ],
                azureServices: [
                    { name: 'Azure Blob Storage', role: 'Document storage and management' },
                    { name: 'Microsoft Entra ID', role: 'Access control and security' },
                    { name: 'Azure Functions', role: 'Document lifecycle automation' },
                    { name: 'Azure Cognitive Services', role: 'Document classification' }
                ]
            }
        ]
    }
};

// Application State
let currentOperation = 'recruitment';  // Changed from 'employee-management' to 'recruitment'
let isSidebarOpen = false;

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const landingPage = document.getElementById('landing-page');
const dashboard = document.getElementById('dashboard');
const exploreBtn = document.getElementById('explore-btn');
const backToLandingBtn = document.getElementById('back-to-landing');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const contentArea = document.getElementById('content-area');
const navItems = document.querySelectorAll('.nav-item');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen for 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);

    // Initialize event listeners
    initializeEventListeners();
    
    // Load initial content
    loadOperationContent(currentOperation);
});

function initializeEventListeners() {
    // Explore button click
    exploreBtn.addEventListener('click', showDashboard);
    
    // Back to landing button click
    backToLandingBtn.addEventListener('click', showLanding);
    
    // Sidebar toggle
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const operation = e.currentTarget.dataset.operation;
            selectOperation(operation);
        });
    });

    // Mobile sidebar overlay
    if (window.innerWidth <= 768) {
        createSidebarOverlay();
    }

    // Window resize handler
    window.addEventListener('resize', handleResize);
}

function showDashboard() {
    landingPage.classList.add('hidden');
    dashboard.classList.remove('hidden');
    
    // Add slight delay for smooth transition
    setTimeout(() => {
        loadOperationContent(currentOperation);
    }, 100);
}

function showLanding() {
    dashboard.classList.add('hidden');
    landingPage.classList.remove('hidden');
}

function toggleSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
        const overlay = document.querySelector('.sidebar-overlay');
        if (overlay) {
            overlay.classList.toggle('visible');
        }
    } else {
        sidebar.classList.toggle('collapsed');
    }
    isSidebarOpen = !isSidebarOpen;
}

function selectOperation(operation) {
    // Update active nav item
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-operation="${operation}"]`).classList.add('active');
    
    // Load operation content
    currentOperation = operation;
    loadOperationContent(operation);
    
    // Close mobile sidebar
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        const overlay = document.querySelector('.sidebar-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    }
}

function loadOperationContent(operationKey) {
    const operation = hrOperations[operationKey];
    if (!operation) return;

    const content = `
        <div class="operation-content">
            <div class="operation-header">
                <div class="operation-title">
                    <i class="${operation.icon}"></i>
                    <h1>${operation.title}</h1>
                </div>
                <p class="operation-description">${operation.description}</p>
            </div>
            
            <div class="use-cases-section">
                <h2 class="section-title">Use Cases & Applications</h2>
                <div class="use-cases-grid">
                    ${operation.useCases.map(useCase => `
                        <div class="use-case-card">
                            <div class="use-case-header">
                                <div class="use-case-icon">
                                    <i class="${useCase.icon}"></i>
                                </div>
                                <div>
                                    <h3 class="use-case-title">${useCase.title}</h3>
                                    <p class="use-case-description">${useCase.description}</p>
                                </div>
                            </div>
                            ${useCase.azureServices ? `
                                <div class="azure-services-wrapper">
                                    <button class="azure-services-toggle">
                                        <i class="fab fa-microsoft"></i>
                                        Azure Services Used
                                        <i class="fas fa-chevron-down toggle-icon"></i>
                                    </button>
                                    <div class="azure-services-section collapsed">
                                        <div class="services-list">
                                            ${useCase.azureServices.map(service => `
                                                <div class="service-item">
                                                    <span class="service-name">${service.name}</span>
                                                    <span class="service-role">${service.role}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            <div class="use-case-details">
                                ${useCase.details.map(detail => `
                                    <div class="detail-item">
                                        <i class="fas fa-check-circle"></i>
                                        <span>${detail}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = content;
    contentArea.classList.add('fade-in');

    // Add click listeners to toggle buttons
    document.querySelectorAll('.azure-services-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');
            section.classList.toggle('collapsed');
            icon.classList.toggle('rotated');
        });
    });
    
    setTimeout(() => {
        contentArea.classList.remove('fade-in');
    }, 500);

    // Add click handlers to use case cards
    setTimeout(() => {
        document.querySelectorAll('.use-case-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                const useCase = hrOperations[operationKey].useCases[index];
                showUseCaseDemo(useCase);
            });
            card.style.cursor = 'pointer';
        });
    }, 100);
}

function createSidebarOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    });
    document.body.appendChild(overlay);
    
    // Update sidebar toggle to show overlay
    const originalToggle = sidebarToggle.onclick;
    sidebarToggle.onclick = function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
        overlay.classList.toggle('visible');
    };
}

function handleResize() {
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (window.innerWidth > 768) {
        // Desktop view
        sidebar.classList.remove('open');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    } else {
        // Mobile view
        if (!overlay) {
            createSidebarOverlay();
        }
    }
}

// Add smooth scrolling for better UX
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            const overlay = document.querySelector('.sidebar-overlay');
            if (overlay) {
                overlay.classList.remove('visible');
            }
        }
    }
});

// Performance optimization: Lazy load content
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements when they're added to the DOM
function observeNewElements() {
    document.querySelectorAll('.use-case-card').forEach(card => {
        observer.observe(card);
    });
}

// Call observeNewElements whenever content is loaded
const originalLoadContent = loadOperationContent;
loadOperationContent = function(operationKey) {
    originalLoadContent(operationKey);
    setTimeout(observeNewElements, 100);
}

// Add this function to show demo UI
function showUseCaseDemo(useCase) {
    const demoContent = generateDemoUI(useCase);
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-content">
            <div class="demo-header">
                <h2><i class="${useCase.icon}"></i> ${useCase.title}</h2>
                <button class="demo-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="demo-body">
                ${demoContent}
            </div>
        </div>
    `;

    // Add close functionality
    modal.querySelector('.demo-close').addEventListener('click', () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
    });

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 50);
}

// Generate specific demo UI based on use case
function generateDemoUI(useCase) {
    // Return specific templates for job description automation use cases
    switch(useCase.title) {
        case 'AI-Powered Description Generation':
            return `
                <div class="demo-dashboard">
                    <div class="demo-sidebar">
                        <div class="demo-menu-item active"><i class="${useCase.icon}"></i> AI Generator</div>
                        <div class="demo-menu-item"><i class="fas fa-list"></i> Templates</div>
                        <div class="demo-menu-item"><i class="fas fa-chart-bar"></i> Analytics</div>
                        <div class="demo-menu-item"><i class="fas fa-cog"></i> Settings</div>
                    </div>
                    <div class="demo-main">
                        <div class="demo-section">
                            <h3><i class="${useCase.icon}"></i> ${useCase.title}</h3>
                            <p>${useCase.description}</p>

                            <div class="demo-form-section">
                                <div class="demo-form">
                                    <div class="form-group">
                                        <label>Job Title</label>
                                        <input type="text" class="demo-input" placeholder="e.g., Senior Software Engineer" value="Senior Software Engineer">
                                    </div>
                                    <div class="form-group">
                                        <label>Department</label>
                                        <select class="demo-input">
                                            <option>Engineering</option>
                                            <option>Marketing</option>
                                            <option>Sales</option>
                                            <option>Human Resources</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Experience Level</label>
                                        <select class="demo-input">
                                            <option>Senior</option>
                                            <option>Mid-level</option>
                                            <option>Junior</option>
                                            <option>Lead</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Key Skills (comma-separated)</label>
                                        <input type="text" class="demo-input" placeholder="JavaScript, React, Node.js, AWS" value="JavaScript, React, Node.js, AWS">
                                    </div>
                                    <button class="demo-button" onclick="generateJobDescription()">
                                        <i class="fas fa-magic"></i> Generate Description
                                    </button>
                                </div>

                                <div class="preview-section">
                                    <h4>Generated Job Description</h4>
                                    <div class="preview-content" id="jobDescriptionPreview">
                                        <div class="preview-placeholder">
                                            <i class="fas fa-file-alt"></i>
                                            <p>Click "Generate Description" to create your job description</p>
                                        </div>
                                    </div>
                                    <div class="preview-actions">
                                        <button class="demo-button secondary" onclick="copyDescription()">
                                            <i class="fas fa-copy"></i> Copy
                                        </button>
