import {
    Radio,
    Card,
    Header,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const radioSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class RadioSample extends React.Component {

    render() {
        return (
            <Radio />
        );
    }

}`;

const labelSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Radio label="Do you want to check the box?" />
        );
    }

}`;

const alignSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Radio align="left" label="Do you want to check the box?" /><br /><br />
            <Radio align="right" label="You know you want too, don't you?" />
        );
    }

}`;

const checkedSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class CheckedSample extends React.Component {

    render() {
        return (
            <Radio checked label="Do you want to check the box?" />
        );
    }

}`;

const disabledSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Radio disable label="This radio input has been disabled, true or false?" />
        );
    }

}`;

const fluidSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Radio align="left" fluid label="It's better on the right, yeah?" />
            <Radio align="right" fluid label="It's better on the right, yeah?" />
        );
    }

}`;

const labelClickSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class LabelClickSample extends React.Component {

    render() {
        return (
            <Radio labelClick={false} label="Sorry, you can no longer click here to check the box." />
        );
    }

}`;

const onChangeSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class OnChangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {
        return (
            <Radio
                checked={this.state.onChangeSample}
                label="on change question."
                onChange={this.onChange.bind(this)}
            />
        );
    }

    onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

}`;

const radioGroupSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class RadioGroupSample extends React.Component {

    render() {
        return (
            <Radio label="Choose me!" name="group-sample" /><br /><br />
            <Radio label="No choose me!" name="group-sample" />
        );
    }

}`;

const radioGroupPillSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class RadioGroupPillSample extends React.Component {

    render() {
        return (
            <div>
                <Radio name="pill-sample" pill>
                    <Radio.Item label="Option 01" />
                    <Radio.Item label="Option 02" />
                    <Radio.Item label="Option 03" />
                </Radio><br /><br />

                <Radio
                    checked={this.state.pillDisableValue}
                    name="pill-onchange-sample"
                    onChange={this.onPillDisableChange.bind(this)}
                    pill
                    multi
                >
                    <Radio.Item label="Option 01" />
                    <Radio.Item label="Option 02" />
                    <Radio.Item label="Option 03" />
                </Radio><br /><br />

                <Radio
                    checked={2}
                    disable
                    name="pill-disabled-sample"
                    pill
                >
                    <Radio.Item label="Option 01" />
                    <Radio.Item label="Option 02" />
                    <Radio.Item label="Option 03" />
                </Radio><br /><br />
            </div>
        );
    }

}`;

const isRedactedSample = `import React from 'react';

import { Radio } from '@saddlebackchurch/react-cm-ui';

export default class RadioGroupSample extends React.Component {

    render() {
        return (
            <Radio isRedacted label="Sensitive data 1" /><br /><br />
            <Radio checked isRedacted label="Sensitive data 2" />
        );
    }

}`;

export default class ElementsRadio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onChangeSample: false,
            pillValue: 0,
            pillDisableValue: 0,
        };

        this.onPillChange = this.onPillChange.bind(this);
        this.onPillDisableChange = this.onPillDisableChange.bind(this);
        this.onPillItemKeyDown = this.onPillItemKeyDown.bind(this);
    }

    onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

    onPillChange(id, value) {
        this.setState({
            pillValue: value,
        });
    }

    onPillDisableChange(id, value) {
        this.setState({
            pillDisableValue: value,
        });
    }

    onPillItemKeyDown(id, value) {
        this.setState({
            pillValue: value,
        });
    }

    render() {
        const props = [
            {
                name: 'align',
                type: 'enum',
                default: '',
                description: 'Aligns the label\'s definition to the left or right.',
                allowedTypes: 'left, right',
            }, {
                name: 'checked',
                type: 'bool',
                default: '',
                description: 'Indicates whether a radio input is checked or not.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: '',
                description: 'Indicates that the radio input is not available for interaction.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A radio input can take on the size of its container.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give a radio input an id.',
                allowedTypes: '',
            }, {
                name: 'isRedacted',
                type: 'bool',
                default: 'false',
                description: 'To prevent sensitive data from being read, we need to be able to block the contents of the control with a gray placeholder. This flag triggers this kind of display instead of the usual one.',
                allowedTypes: '',
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional label to display with the radio input.',
                allowedTypes: '',
            }, {
                name: 'labelClick',
                type: 'bool',
                default: '',
                description: 'Disable the label\'s definition onClick handler.',
                allowedTypes: '',
            }, {
                name: 'multi',
                type: 'bool',
                default: 'false',
                description: 'Force the radio button group to work in a multi checkbox mode.',
                allowedTypes: '',
            }, {
                name: 'name',
                type: 'string',
                default: '',
                description: 'Radio input\'s name.',
                allowedTypes: '',
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: '',
            }, {
                name: 'pill',
                type: 'bool',
                default: 'false',
                description: 'Group radio buttons together in a pill container.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the radio input\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'value',
                type: 'string',
                default: '',
                description: 'Radio input\'s value.',
                allowedTypes: '',
            },
        ];

        const {
            pillValue,
            pillDisableValue,
        } = this.state;

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Radio */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Radio
                        <Header.Subheader>
                            A standard radio input.
                        </Header.Subheader>
                    </Header>

                    <Radio />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {radioSample}
                    </Highlighter>

                    {/* Label */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Label
                        <Header.Subheader>
                            A radio input can have a label defined.
                        </Header.Subheader>
                    </Header>

                    <Radio
                        label="Do you want to check the box?"
                        tabIndex={0} />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Align */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Align
                        <Header.Subheader>
                            A label definition can sit on the right or left side of the radio input.
                        </Header.Subheader>
                    </Header>

                    <Radio align="left" label="Do you want to check the box?" />
                    <br />
                    <br />
                    <Radio align="right" label="You know you want too, don't you?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {alignSample}
                    </Highlighter>

                    {/* Checked */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Checked
                        <Header.Subheader>
                            A radio input can be checked from it&apos;s parent.
                        </Header.Subheader>
                    </Header>

                    <Radio checked label="Do you want to check the box?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {checkedSample}
                    </Highlighter>

                    {/* Disable */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Disable
                        <Header.Subheader>
                            Disable a radio input.
                        </Header.Subheader>
                    </Header>

                    <Radio disable label="This radio input has been disabled, true or false?" />
                    <br />
                    <br />
                    <Radio checked disable label="This radio input has been disabled and is checked, true or false?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disabledSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Fluid
                        <Header.Subheader>
                            A radio input can stretch as wide as the parent container.
                        </Header.Subheader>
                    </Header>

                    <Block style={{ maxWidth: '400px' }}>
                        <Radio align="left" fluid label="It's better on the right, yeah?" />
                    </Block>
                    <br />

                    <Block style={{ maxWidth: '400px' }}>
                        <Radio align="right" fluid label="It's better on the right, yeah?" />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Label Click */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Label Click
                        <Header.Subheader>
                            Sometimes you may want to disable a radio from being checked by clicking it's label definition.
                        </Header.Subheader>
                    </Header>

                    <Radio labelClick={false} label="Sorry, you can no longer click here to check the box." />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelClickSample}
                    </Highlighter>

                    {/* OnChange */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        OnChange
                        <Header.Subheader>
                            {/* eslint-disable react/jsx-one-expression-per-line */}
                            Can handle an <code>onChange</code> event from parent. The
                            <code>checked</code> prop is required along with this handler.
                            {/* eslint-enable react/jsx-one-expression-per-line */}
                        </Header.Subheader>
                    </Header>

                    <Radio
                        checked={this.state.onChangeSample}
                        label="on change question."
                        onChange={this.onChange.bind(this)}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* Radio Group */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Radio Group
                        <Header.Subheader>
                            Group radio buttons together.
                        </Header.Subheader>
                    </Header>

                    <Radio label="Choose me!" name="group-sample" />
                    <br />
                    <br />
                    <Radio label="No choose me!" name="group-sample" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {radioGroupSample}
                    </Highlighter>

                    {/* Radio Pill Group */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Radio Pill Group
                        <Header.Subheader>
                            Group Radio buttons together in a pill container.
                            <br />
                            <a
                                className="font-size-xsmall"
                                href="https://www.youtube.com/watch?v=xT4ksAgQouc"
                                target="_blank"
                            >
                                https://www.youtube.com/watch?v=xT4ksAgQouc
                            </a>
                        </Header.Subheader>
                    </Header>

                    <Radio
                        checked={pillValue}
                        id="block_name--element_name"
                        name="pillSample"
                        onChange={this.onPillChange}
                        onKeyDown={this.onPillItemKeyDown}
                        pill
                    >
                        <Radio.Item
                            id="block_name--element_name-1"
                            label="Option 01"
                            tabIndex={0}
                        />

                        <Radio.Item
                            id="block_name--element_name-2"
                            label="Option 02"
                            tabIndex={0}
                        />

                        <Radio.Item
                            id="block_name--element_name-3"
                            label="Option 03"
                            tabIndex={0}
                        />
                    </Radio>
                    <br />
                    <br />

                    <Radio
                        checked={pillDisableValue}
                        name="pillOnChangeSample"
                        onChange={this.onPillDisableChange}
                        pill
                        multi
                    >
                        <Radio.Item label="Option 01" />
                        <Radio.Item label="Option 02" />
                        <Radio.Item label="Option 03" />
                    </Radio>
                    <br />
                    <br />

                    <Radio
                        checked={2}
                        disable
                        name="pillDisabledSample"
                        pill
                    >
                        <Radio.Item label="Option 01" />
                        <Radio.Item label="Option 02" />
                        <Radio.Item label="Option 03" />
                    </Radio>
                    <br />
                    <br />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {radioGroupPillSample}
                    </Highlighter>

                    {/* isRedacted */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        isRedacted
                        <Header.Subheader>
                            To prevent sensitive data from being read, we need to be able to block the contents of the control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
                        </Header.Subheader>
                    </Header>

                    <Radio isRedacted label="Sensitive data 1" />
                    <br />
                    <br />
                    <Radio checked isRedacted label="Sensitive data 2" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {isRedactedSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
