import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleAdultFemale from './examples/exampleAdultFemale';
import ExampleAdultMale from './examples/exampleAdultMale';
import ExampleInteractive from './examples/exampleInteractive';
import ExampleChild from './examples/exampleChild';
import ExampleDisable from './examples/exampleDisable';
import ExampleStudent from './examples/exampleStudent';
import ExampleUndefined from './examples/exampleUndefined';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/dataDisplay/personCoreMilestones/personCoreMilestones';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsPersonCoreMilestones(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description,
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="person-record-types"
                        variant="h2"
                    >
                        Person Record Types
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Adult Male Record Type
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAdultMale').default}
                    >
                        <ExampleAdultMale />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Adult Female Record Type
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAdultFemale').default}
                    >
                        <ExampleAdultFemale />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Student Record Type
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStudent').default}
                    >
                        <ExampleStudent />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Child Record Type
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleChild').default}
                    >
                        <ExampleChild />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Undefined Record Type
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleUndefined').default}
                    >
                        <ExampleUndefined />
                    </Example>

                    <Heading
                        anchorLink="disable-popover"
                        variant="h2"
                    >
                        Disable Popovers
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDisable').default}
                    >
                        <ExampleDisable />
                    </Example>

                    <Heading
                        anchorLink="disable-popover"
                        variant="h2"
                    >
                        Interactive Person Core Milestones
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Go ahead, give it a whirl
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleInteractive').default}
                    >
                        <ExampleInteractive />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsPersonCoreMilestones.propTypes = propTypes;

export default DocsPersonCoreMilestones;
