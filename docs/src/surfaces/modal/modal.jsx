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
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import ExampleLeftAligned from './examples/exampleLeftAligned';
import ExampleModalCenterAligned from './examples/exampleModalCenterAligned';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/surfaces/modal/modal';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsModal(props) {
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
                        anchorLink="left-aligned-modal"
                        variant="h2"
                    >
                        Left Aligned Modal
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Used in situations when 2 or more data capture elements are needed that
                        differ in component type and or context. Exceptions to these principles are
                        rare.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleLeftAligned').default}
                    >
                        <ExampleLeftAligned />
                    </Example>

                    <Heading
                        anchorLink="center-aligned-modal"
                        variant="h2"
                    >
                        Center Aligned Modal
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Used in situations when only 1 data capture elements is needed to complete
                        a process or a step in a process, or if 2 are needed that do not differ in
                        component type and or context.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleModalCenterAligned').default}
                    >
                        <ExampleModalCenterAligned />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsModal.propTypes = propTypes;

export default DocsModal;
