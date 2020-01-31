import { Button, Card, Drawer, Header, Icon, Input, TitleBar } from 'react-cm-ui';
import DrawerSubNavigation from './drawerSubNavigation.js';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps';

const drawerDataGroupsSample = `import { Button, Drawer, InfoBar } from 'react-cm-ui';
import React from 'react';

export default class DrawerDataGroupsSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <div>
                <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this.onDrawerToggle}
                >
                    <Drawer.TitleBar
                        closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                        title="Don't Pay Attention to the TitleBar, But to the Navigation"
                    />

                    <Drawer.Navigation
                        columns={[
                            {
                                label: 'Button 1',
                            }, {
                                label: 'Button 2',
                            }, {
                                label: 'Button 3',
                            }, {
                                label: 'Button 4',
                                onClick: this._onClickTest,
                            },
                        ]}
                    />

                    <Drawer.ActionBar
                        columns={[
                            {
                                list: [
                                    {
                                        jsx: (
                                            <Icon
                                                onClick={this._onFilterClick}
                                                title="Filter"
                                                type="arrow-sort"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this._onViewGridClick}
                                                title="Grid View"
                                                type="grid"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this._onViewTableClick}
                                                title="List View"
                                                type="list"
                                            />
                                        ),
                                    },
                                ],
                            }, {
                                jsx: (
                                    <Input
                                        fluid
                                        icon={searchValue ?
                                            <Icon
                                                compact
                                                onClick={this._onClearSearchClick}
                                                title="Clear Search"
                                                type="times"
                                            /> : null
                                        }
                                        onChange={this._onSearchChange}
                                        onKeyDown={this._onSearchKeyDown}
                                        placeholder="Search"
                                        value={searchValue}
                                    />
                                ),
                                flexGrow: 1,
                            }, {
                                jsx: (
                                    <Button
                                        color="success"
                                        onClick={this._onNewTemplateClick}
                                        style={{ margin: 0 }}
                                    >
                                        <Icon type="plus" />
                                        <span>New Template</span>
                                    </Button>
                                ),
                            },
                        ]}
                    />

                    <Drawer.Details
                            color={11}
                            columnProps={{
                                horizontalSpacing: 11,
                            }}
                            columns={[
                                {
                                    accessor: 'activeTemplates',
                                    header: 'Active Templates',
                                }, {
                                    accessor: 'inactiveTemplates',
                                    header: 'Inactive Templates',
                                }, {
                                    list: [
                                        {
                                            accessor: 'activeTemplates',
                                            header: 'Active Templates',
                                        }, {
                                            accessor: 'inactiveTemplates',
                                            header: 'Inactive Templates',
                                        },
                                    ],
                                    divide: true,
                                },
                            ]}
                            data={{
                            }}
                        />

                        <Drawer.DataGroups>
                            <Drawer.DataGroup
                                header="Personal (Simple Drawer Data Groups Example)"
                                rows={[
                                    {
                                        accessor: 'birthday',
                                        fieldName: 'Birthday',
                                    }, {
                                        accessor: 'homeCampus',
                                        fieldName: 'Home Campus',
                                    }
                                ]}
                                data={{
                                    birthday: '23/01/1990',
                                    homeCampus: 'Lake Forest',
                                }}
                                style={{
                                    marginTop: '10px'
                                }}
                            />

                            <Drawer.DataGroup
                                header="Personal (Drawer Data Groups Example With Icon)"
                                rows={[
                                    {
                                        accessor: 'birthday',
                                        fieldName: 'Birthday',
                                        header: 'Training',
                                        iconType: 'chair',
                                        iconColor: 'alert',
                                        iconSize: 22,
                                    }, {
                                        accessor: 'homeCampus',
                                        fieldName: 'Home Campus',
                                        header: "Campus",
                                        iconType: 'church',
                                        iconSize: 22,
                                    }
                                ]}
                                data={{
                                    birthday: '23/01/1990',
                                    homeCampus: 'Lake Forest',
                                }}
                                style={{
                                    marginTop: '10px'
                                }}
                            />
                        </Drawer.DataGroups>

                    <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                </Drawer>
            </div>
        );
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }
}`;

class ModulesDrawerDataGroups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            searchValue: '',
        };

        this.onClickTest = this.onClickTest.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    render() {
        const { isDrawerOpen, searchValue } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'bleed',
                type: 'bool',
                default: '',
                description: 'Horizontally extend Drawer.DataGroups all the way to the edges of the parent Drawer..',
                allowedTypes: '',
            }, {
                name: 'header',
                type: 'string',
                default: '',
                description: 'Provide header title to Drawer.DataGroups row UI',
                allowedTypes: '',
            }, {
                name: 'rows',
                type: 'array',
                default: '',
                description: 'A consistent way to display data rows UI in a Drawer.DataGroups.',
                allowedTypes: '',
            }, {
                name: 'data',
                type: 'array',
                default: '',
                description: 'Required for Drawer.DataGroups to feed rows.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.DataGroup\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Drawer Infobar Details */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Drawer Data Groups
                        <Header.Subheader>
                            For those times the UI requires an Drawer Data Groups Section.
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={this.onDrawerToggle}
                    >
                        <Drawer.TitleBar
                            closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                            title="Don't Pay Attention to the TitleBar, But to the Navigation"
                        />

                        <Drawer.ActionBar
                            columns={[
                                {
                                    list: [
                                        {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onFilterClick}
                                                    title="Filter"
                                                    type="arrow-sort"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onViewGridClick}
                                                    title="Grid View"
                                                    type="grid"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onViewTableClick}
                                                    title="List View"
                                                    type="list"
                                                />
                                            ),
                                        },
                                    ],
                                }, {
                                    jsx: (
                                        <Input
                                            fluid
                                            icon={searchValue ?
                                                <Icon
                                                    compact
                                                    onClick={this._onClearSearchClick}
                                                    title="Clear Search"
                                                    type="times"
                                                /> : null
                                            }
                                            onChange={this._onSearchChange}
                                            onKeyDown={this._onSearchKeyDown}
                                            placeholder="Search"
                                            value={searchValue}
                                        />
                                    ),
                                    flexGrow: 1,
                                }, {
                                    jsx: (
                                        <Button
                                            color="success"
                                            onClick={this._onNewTemplateClick}
                                            style={{ margin: 0 }}
                                        >
                                            <Icon type="plus" />
                                            <span>New Template</span>
                                        </Button>
                                    ),
                                },
                            ]}
                        />

                        <Drawer.Details
                            color={11}
                            columnProps={{
                                horizontalSpacing: 11,
                            }}
                            columns={[
                                {
                                    accessor: 'activeTemplates',
                                    header: 'Active Templates',
                                }, {
                                    accessor: 'inactiveTemplates',
                                    header: 'Inactive Templates',
                                }, {
                                    list: [
                                        {
                                            accessor: 'activeTemplates',
                                            header: 'Active Templates',
                                        }, {
                                            accessor: 'inactiveTemplates',
                                            header: 'Inactive Templates',
                                        },
                                    ],
                                    divide: true,
                                },
                            ]}
                            data={{
                            }}
                        />
                        <Drawer.DataGroups>
                            <Drawer.DataGroup
                                header="Personal (Simple Drawer Data Groups Example)"
                                rows={[
                                    {
                                        accessor: 'birthday',
                                        fieldName: 'Birthday',
                                    }, {
                                        accessor: 'homeCampus',
                                        fieldName: 'Home Campus',
                                    }
                                ]}
                                data={{
                                    birthday: '23/01/1990',
                                    homeCampus: 'Lake Forest',
                                }}
                                style={{
                                    marginTop: '10px'
                                }}
                            />

                            <Drawer.DataGroup
                                header="Personal (Drawer Data Groups Example With Icon)"
                                rows={[
                                    {
                                        accessor: 'birthday',
                                        fieldName: 'Birthday',
                                        header: 'Training',
                                        iconType: 'chair',
                                        iconColor: 'alert',
                                        iconSize: 22,
                                    }, {
                                        accessor: 'homeCampus',
                                        fieldName: 'Home Campus',
                                        header: "Campus",
                                        iconType: 'church',
                                        iconSize: 22,
                                    }
                                ]}
                                data={{
                                    birthday: '23/01/1990',
                                    homeCampus: 'Lake Forest',
                                }}
                                style={{
                                    marginTop: '10px'
                                }}
                            />
                        </Drawer.DataGroups>
                        <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerDataGroupsSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }

    onClickTest() {
        window.alert('You just clicked the fourth column!');
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }
}

export default ModulesDrawerDataGroups;
