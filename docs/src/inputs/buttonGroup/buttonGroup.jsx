import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ButtonGroupSample from './buttonGroupSample';
/* eslint-disable import/no-named-default, import/extensions, import/no-unresolved */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/inputs/buttonGroup/buttonGroup';
/* eslint-enable import/no-named-default, import/extensions, import/no-unresolved */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default function DocsButtonGroup(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description: componentDescription,
        displayName: componentName,
    } = componentDoc;

    return (
        <Main page={camelCase(componentName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {componentDescription}
                    </Typography>

                    <Heading
                        anchorLink="basic-button-group"
                        variant="h2"
                    >
                        Basic button group
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/buttonGroupDefault').default} // eslint-disable-line import/extensions, import/no-unresolved
                    >
                        <ButtonGroupSample />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsButtonGroup.propTypes = propTypes;
