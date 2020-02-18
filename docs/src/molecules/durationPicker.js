'use strict';

import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, DurationPicker, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from '../global/block.js';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const durationPickerSample = `import moment from 'moment'; // or moment-timezone
import React from 'react';

import { DurationPicker } from 'react-cm-ui';

export default class DurationPickerSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: moment.duration({ hours: 2 }), value2: null };
        this._onDurationPicker1Change = this._onDurationPicker1Change.bind(this);
        this._onDurationPicker2Change = this._onDurationPicker2Change.bind(this);
        this._onDurationPicker3Change = this._onDurationPicker3Change.bind(this);
    }

    render() {
        return (
            <div>
                <DurationPicker
                    id="duration-picker-1"
                    onChange={this._onDurationPicker1Change}
                    value={this.state.value1}
                />

                <DurationPicker
                    id="duration-picker-2"
                    onChange={this._onDurationPicker2Change}
                    showMinutes
                    showSeconds
                    value={this.state.value2}
                />

                <DurationPicker
                    id="duration-picker-3"
                    onChange={this._onDurationPicker3Change}
                    showHours={false}
                    showMonths
                    showYears
                    value={this.state.value3}
                />
            </div>
        );
    }

    _onDurationPicker1Change(value) {
        this.setState({ value1: value });
    }

    _onDurationPicker2Change(value) {
        this.setState({ value2: value });
    }

    _onDurationPicker3Change(value) {
        this.setState({ value3: value });
    }
}`;

const disabledSample = `import moment from 'moment'; // or moment-timezone
import React from 'react';

import { DurationPicker } from 'react-cm-ui';

export default class DisabledDurationPickerSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: null };
        this._onDurationPickerChange = this._onDurationPickerChange.bind(this);
    }

    render() {
        return (
            <DurationPicker
                disabled
                id="disabled-duration-picker"
                onChange={this._onDurationPickerChange}
                value={this.state.value}
            />
        );
    }

    _onDurationPickerChange(value) {
        this.setState({ value });
    }
}`;

const nestSample =`import moment from 'moment'; // or moment-timezone
import React from 'react';

import { DurationPicker } from 'react-cm-ui';

export default class NestedDurationPickerSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: null };
        this._onDurationPickerChange = this._onDurationPickerChange.bind(this);
    }

    render() {
        return (
            <div className="some-class-that-has-nested-bkgd-color">
                <DurationPicker
                    id="nested-duration-picker"
                    nest
                    onChange={this._onDurationPickerChange}
                    value={this.state.value}
                />
            </div>
        );
    }

    _onDurationPickerChange(value) {
        this.setState({ value: value });
    }
}`;

export default class ModulesDurationPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: moment.duration({ hours: 2 }),
            value2: null,
            value3: null,
            value4: null,
            value5: null
        };

        this._onDurationPicker1Change = this._onDurationPicker1Change.bind(this);
        this._onDurationPicker2Change = this._onDurationPicker2Change.bind(this);
        this._onDurationPicker3Change = this._onDurationPicker3Change.bind(this);
        this._onDurationPicker4Change = this._onDurationPicker4Change.bind(this);
        this._onDurationPicker5Change = this._onDurationPicker5Change.bind(this);
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the Duration Picker is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Duration Picker has an error.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give the Duration Picker input an id.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: '',
                description: 'Duration Picker may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'showDays',
                type: 'bool',
                default: 'true',
                description: 'Specifies whether or not the Duration Picker should include a Days input.',
                allowedTypes: ''
            }, {
                name: 'showHours',
                type: 'bool',
                default: 'true',
                description: 'Specifies whether or not the Duration Picker should include a Hours input.',
                allowedTypes: ''
            }, {
                name: 'showMinutes',
                type: 'bool',
                default: 'false',
                description: 'Specifies whether or not the Duration Picker should include a Minutes input.',
                allowedTypes: ''
            }, {
                name: 'showMonths',
                type: 'bool',
                default: 'false',
                description: 'Specifies whether or not the Duration Picker should include a Months input.',
                allowedTypes: ''
            }, {
                name: 'showSeconds',
                type: 'bool',
                default: 'false',
                description: 'Specifies whether or not the Duration Picker should include a Seconds input.',
                allowedTypes: ''
            }, {
                name: 'showYears',
                type: 'bool',
                default: 'false',
                description: 'Specifies whether or not the Duration Picker should include a Years input.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'object (moment.duration)',
                default: '',
                description: 'The initial value of the control.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Duration Picker" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Duration Picker */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Duration Picker
                        <Header.Subheader>
                            A basic Duration Picker.
                        </Header.Subheader>
                    </Header>

                    <DurationPicker
                        onChange={this._onDurationPicker1Change}
                        value={this.state.value1}
                    />

                    <p>
                        You can use the <code>showXXX</code> props to include or exclude various units of time.<br />
                        This one has days and hours (by default) and opts in to include minutes and seconds as well.
                    </p>

                    <DurationPicker
                        onChange={this._onDurationPicker2Change}
                        showMinutes
                        showSeconds
                        value={this.state.value2}
                    />

                    <p>This one shows years, months and days, opting out of hours</p>

                    <DurationPicker
                        onChange={this._onDurationPicker3Change}
                        showHours={false}
                        showMonths
                        showYears
                        value={this.state.value3}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {durationPickerSample}
                    </Highlighter>

                    {/* Disabled */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Disabled
                        <Header.Subheader>
                            The <code>disabled</code> prop indicates that the Duration Picker is not available for interaction.
                        </Header.Subheader>
                    </Header>

                    <DurationPicker
                        disabled
                        onChange={this._onDuration4PickerChange}
                        value={this.state.value4}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disabledSample}
                    </Highlighter>

                    {/* Nest */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Nest
                        <Header.Subheader>
                            A Duration Picker can give the appearance of being nested. The parent's background color needs to be set to <code>color(backgroundColorNest)</code>.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest
                        style={{ height: '175px', padding: '22px' }}
                    >
                        <DurationPicker
                            nest
                            onChange={this._onDurationPicker5Change}
                            value={this.state.value5}
                        />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {nestSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onDurationPicker1Change(newValue) {
        this.setState({ value1: newValue });
    }

    _onDurationPicker2Change(newValue) {
        this.setState({ value2: newValue });
    }

    _onDurationPicker3Change(newValue) {
        this.setState({ value3: newValue });
    }

    _onDurationPicker4Change(newValue) {
        this.setState({ value4: newValue });
    }

    _onDurationPicker5Change(newValue) {
        this.setState({ value5: newValue });
    }
}
