// eslint-disable-next-line import/prefer-default-export
export const navigationItems = [
    {
        directory: 'gettingStarted',
        label: 'Getting Started',
        levelTwo: [
            {
                component: 'installation',
                label: 'Installation',
                path: 'installation',
            },
            {
                component: 'usage',
                label: 'Usage',
                path: 'usage',
            },
            {
                label: 'Changelog',
                href: 'https://github.com/saddlebackdev/react-cm-ui/blob/dev/CHANGELOG.md',
            },
        ],
        path: 'getting-started',
    },
    {
        directory: 'styleGuide',
        label: 'Style Guide',
        levelTwo: [
            {
                component: 'colors',
                label: 'Colors',
                path: 'colors',
            },
            {
                component: 'typography',
                label: 'Typography',
                path: 'typography',
            },
        ],
        path: 'style-guide',
    },
    {
        directory: 'components',
        label: 'Components',
        levelTwo: [
            {
                directory: 'dataDisplay',
                label: 'Data Display',
                levelThree: [
                    {
                        component: 'address',
                        label: 'Address',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'address',
                    },
                    {
                        component: 'banner',
                        label: 'Banner',
                        path: 'banner',
                    },
                    {
                        component: 'chip',
                        label: 'Chip',
                        path: 'chip',
                    },
                    {
                        component: 'comment',
                        label: 'Comment',
                        path: 'comment',
                    },
                    {
                        component: 'dataCards',
                        label: 'Data Cards',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'data-cards',
                    },
                    {
                        component: 'dataGrid',
                        label: 'Data Grid',
                        path: 'data-grid',
                    },
                    {
                        component: 'dataGroups',
                        label: 'Data Groups',
                        path: 'data-groups',
                    },
                    {
                        component: 'divider',
                        label: 'Divider',
                        path: 'divider',
                    },
                    {
                        component: 'emailLink',
                        label: 'Email Link',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'email-link',
                    },
                    {
                        component: 'headerDeprecated',
                        label: 'Header (Deprecated)',
                        path: 'header-deprecated',
                    },
                    {
                        component: 'icon',
                        label: 'Icon',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'icon',
                    },
                    {
                        component: 'image',
                        label: 'Image',
                        path: 'image',
                    },
                    {
                        component: 'label',
                        label: 'Label',
                        path: 'label',
                    },
                    {
                        component: 'list',
                        label: 'List',
                        path: 'list',
                    },
                    {
                        component: 'personContactInfo',
                        label: 'Person Contact Info',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'person-contact-info',
                    },
                    {
                        component: 'personCoreMilestones',
                        label: 'Person Core Milestones',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'person-core-milestones',
                    },
                    {
                        component: 'personPanel',
                        label: 'Person Panel',
                        path: 'person-panel',
                    },
                    {
                        component: 'popover',
                        label: 'Popover',
                        path: 'popover',
                    },
                    {
                        component: 'table',
                        label: 'Table',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'table',
                    },
                    {
                        component: 'telephoneLink',
                        label: 'Telephone Link',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'telephone-link',
                    },
                    {
                        component: 'timeFromNow',
                        label: 'Time From Now',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'time-from-now',
                    },
                    {
                        component: 'tooltip',
                        label: 'Tooltip',
                        path: 'tooltip',
                    },
                    {
                        component: 'typography',
                        label: 'Typography',
                        path: 'typography',
                    },
                ],
                path: 'data-display',
            },
            {
                directory: 'feedback',
                label: 'Feedback',
                levelThree: [
                    {
                        component: 'activityIndicator',
                        label: 'Activity Indicator',
                        path: 'activity-indicator',
                    },
                    {
                        component: 'loader',
                        label: 'Loader',
                        path: 'loader',
                    },
                    {
                        component: 'snackbar',
                        label: 'Snackbar',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'snackbar',
                    },
                ],
                path: 'feedback',
            },
            {
                directory: 'inputs',
                label: 'Inputs',
                levelThree: [
                    {
                        component: 'button',
                        label: 'Button',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'button',
                    },
                    {
                        component: 'checkbox',
                        label: 'Checkbox',
                        path: 'checkbox',
                    },
                    {
                        component: 'datePickerCalendar',
                        label: 'Date Picker Calendar',
                        path: 'date-picker-calendar',
                    },
                    {
                        component: 'datePickerDeprecated',
                        label: 'Date Picker (Deprecated)',
                        path: 'date-picker-deprecated',
                    },
                    {
                        component: 'datePickerInput',
                        label: 'Date Picker Input',
                        path: 'date-picker-input',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                    },
                    {
                        component: 'dropdownDeprecated',
                        label: 'Dropdown (Deprecated)',
                        levelFour: [
                            {
                                component: 'dropdownItemDeprecated',
                                label: 'Dropdown.Item',
                                path: 'dropdown-item',
                            },
                        ],
                        path: 'dropdown-deprecated',
                    },
                    {
                        component: 'dropdownButton',
                        label: 'Dropdown Button',
                        levelFour: [
                            {
                                component: 'dropdownButtonOption',
                                label: 'Option',
                                path: 'option',
                            },
                        ],
                        path: 'dropdown-button',
                    },
                    {
                        component: 'dropdownMenu',
                        label: 'Dropdown Menu',
                        path: 'dropdown-menu',
                    },
                    {
                        component: 'durationPicker',
                        label: 'Duration Picker',
                        path: 'duration-picker',
                    },
                    {
                        component: 'input',
                        label: 'Input',
                        path: 'input',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                    },
                    {
                        component: 'phoneInput',
                        label: 'Phone Input',
                        path: 'phone-input',
                    },
                    {
                        component: 'prompt',
                        label: 'Prompt',
                        path: 'prompt',
                    },
                    {
                        component: 'radio',
                        label: 'Radio',
                        path: 'radio',
                    },
                    {
                        component: 'segmentedControls',
                        label: 'Segmented Controls',
                        path: 'segmented-controls',
                    },
                    {
                        component: 'select',
                        label: 'Select',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'select',
                    },
                    {
                        component: 'textArea',
                        label: 'Text Area',
                        path: 'text-area',
                    },
                    {
                        component: 'timePicker',
                        label: 'Time Picker',
                        levelFour: [
                            {
                                component: 'devSandbox/index.js',
                                label: 'Dev Sandbox',
                                path: 'dev-sandbox',
                            },
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'time-picker',
                    },
                ],
                path: 'inputs',
            },
            {
                directory: 'lab',
                label: 'Lab',
                levelThree: [
                    {
                        component: 'timeline',
                        label: 'Timeline',
                        path: 'timeline',
                    },
                ],
                path: 'lab',
            }, {
                directory: 'layout',
                label: 'Layout',
                levelThree: [
                    {
                        component: 'box',
                        label: 'Box',
                        path: 'box',
                    },
                    {
                        component: 'containerDeprecated',
                        label: 'Container (deprecated)',
                        path: 'container-deprecated',
                    },
                    {
                        component: 'grid',
                        label: 'Grid',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'grid',
                    },
                    {
                        component: 'page',
                        label: 'Page',
                        levelFour: [
                            {
                                component: 'demo',
                                label: 'Demo',
                                omit: true,
                                path: 'demo',
                            },
                            {
                                component: 'pageActionBar',
                                label: 'Action Bar',
                                path: 'action-bar',
                            },
                            {
                                component: 'pageContainer',
                                label: 'Container',
                                path: 'container',
                            },
                            {
                                component: 'pageContent',
                                label: 'Content',
                                path: 'content',
                            },
                            {
                                component: 'pageDataCards',
                                label: 'Data Cards',
                                path: 'data-cards',
                            },
                            {
                                component: 'pageDataGrid',
                                label: 'Data Grid',
                                path: 'data-grid',
                            },
                            {
                                component: 'pageDataGroups',
                                label: 'Data Groups',
                                path: 'data-groups',
                            },
                            {
                                component: 'pageDetailsWindow',
                                label: 'Details Window',
                                path: 'details-window',
                            },
                            {
                                component: 'pageFiltersDrawer',
                                label: 'Filters Drawer',
                                path: 'filters-drawer',
                            },
                            {
                                component: 'pageFiltersRail',
                                label: 'Filters Rail',
                                path: 'filters-rail',
                            },
                        ],
                        path: 'page',
                    },
                ],
                path: 'layout',
            },
            {
                directory: 'navigation',
                label: 'Navigation',
                levelThree: [
                    {
                        component: 'a',
                        label: 'A',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'a',
                    },
                    {
                        component: 'mobileStepper',
                        label: 'Mobile Stepper',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'mobile-stepper',
                    },
                    {
                        component: 'subNavigationDeprecated',
                        label: 'Sub Navigation (Deprecated)',
                        path: 'sub-navigation-deprecated',
                    },
                    {
                        component: 'tabs',
                        label: 'Tabs',
                        path: 'tabs',
                    },
                    {
                        component: 'sectionalTabs',
                        label: 'Sectional Tabs',
                        path: 'sectional-tabs',
                    },
                    {
                        component: 'breadcrumbs',
                        label: 'Breadcrumbs',
                        path: 'breadcrumbs',
                    },
                ],
                path: 'navigation',
            },
            {
                directory: 'surfaces',
                label: 'Surfaces',
                levelThree: [
                    {
                        component: 'accordionDeprecated',
                        label: 'Accordion (Deprecated)',
                        levelFour: [
                            {
                                component: 'accordionItemDeprecated',
                                label: 'Accordion.Item',
                                path: 'accordion-item',
                            },
                        ],
                        path: 'accordion-deprecated',
                    },
                    {
                        component: 'actionBar',
                        label: 'Action Bar',
                        path: 'action-bar',
                    },
                    {
                        component: 'appBar',
                        label: 'App Bar',
                        path: 'app-bar',
                    },
                    {
                        component: 'card',
                        label: 'Card',
                        levelFour: [
                            {
                                component: 'cardHeader',
                                label: 'Header',
                                path: 'header',
                            },
                        ],
                        path: 'card',
                    },
                    {
                        component: 'detailsWindow',
                        label: 'Details Window',
                        path: 'details-window',
                    },
                    {
                        component: 'drawer',
                        label: 'Drawer',
                        levelFour: [
                            {
                                component: 'drawerActionBar',
                                label: 'Action Bar',
                                path: 'action-bar',
                            },
                            {
                                component: 'drawerContent',
                                label: 'Content',
                                path: 'content',
                            },
                            {
                                component: 'drawerDataCards',
                                label: 'Data Cards',
                                path: 'data-cards',
                            },
                            {
                                component: 'drawerDataGrid',
                                label: 'Data Grid',
                                path: 'data-grid',
                            },
                            {
                                component: 'drawerDataGroups',
                                label: 'Data Groups',
                                path: 'data-groups',
                            },
                            {
                                component: 'drawerDetailsWindow',
                                label: 'Details Window',
                                path: 'details-window',
                            },
                            {
                                component: 'drawerFiltersDrawer',
                                label: 'Filters Drawer',
                                path: 'filters-drawer',
                            },
                            {
                                component: 'drawerNavigation',
                                label: 'Navigation',
                                path: 'navigation',
                            },
                            {
                                component: 'drawerSticky',
                                label: 'Sticky',
                                path: 'sticky',
                            },
                            {
                                component: 'drawerTitleBar',
                                label: 'Title Bar',
                                path: 'title-bar',
                            },
                            {
                                component: 'drawerWing',
                                label: 'Wing',
                                path: 'wing',
                            },
                        ],
                        path: 'drawer',
                    },
                    {
                        component: 'drawerDeprecated',
                        label: 'Drawer (Deprecated)',
                        levelFour: [
                            {
                                component: 'drawerDeprecatedHeader',
                                label: 'Header',
                                path: 'header',
                            },
                            {
                                component: 'drawerDeprecatedWing',
                                label: 'Wing',
                                path: 'wing',
                            },
                        ],
                        path: 'drawer-deprecated',
                    },
                    {
                        component: 'filtersDrawer',
                        label: 'Filters Drawer',
                        path: 'filters-drawer',
                    },
                    {
                        component: 'filtersRail',
                        label: 'Filters Rail',
                        path: 'filters-rail',
                    },
                    {
                        component: 'infoBarDeprecated',
                        label: 'Info Bar (Deprecated)',
                        path: 'info-bar-deprecated',
                    },
                    {
                        component: 'modalDeprecated',
                        label: 'Modal (Deprecated)',
                        path: 'modal-deprecated',
                    },
                    {
                        component: 'modal',
                        label: 'Modal',
                        levelFour: [
                            {
                                component: 'api/index.js',
                                label: 'API',
                                path: 'api',
                            },
                        ],
                        path: 'modal',
                    },
                    {
                        component: 'rail',
                        label: 'Rail',
                        path: 'rail',
                    },
                    {
                        component: 'titleBar',
                        label: 'Title Bar',
                        path: 'title-bar',
                    },
                ],
                path: 'surfaces',
            },
            {
                directory: 'utils',
                label: 'Utils',
                levelThree: [
                    {
                        component: 'collapse',
                        label: 'Collapse',
                        path: 'collapse',
                    },
                    {
                        component: 'useMediaQuery',
                        label: 'Use Media Query',
                        path: 'use-media-query',
                    },
                    {
                        component: 'withWidth',
                        label: 'With Width',
                        path: 'with-width',
                    },
                ],
                path: 'utils',
            },
        ],
        path: 'components',
    },
];
