import {
    camelCase,
    isEmpty,
    isNil,
    map,
    upperFirst,
} from 'lodash';
// eslint-disable-next-line import/extensions
import makeStyles from '@saddlebackchurch/react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import Heading from './heading';
import MarkdownContainer from './markdownContainer';
import ComponentApiTable from './componentApiTable';
import { DOCS_PROPS_PROP_TYPE } from './componentApiConstants';

const propTypes = {
    docs: PropTypes.arrayOf(
        PropTypes.shape({
            displayName: PropTypes.string,
            props: DOCS_PROPS_PROP_TYPE,
        }),
    ),
};

const defaultProps = {
    docs: [],
};

const useStyles = makeStyles({
    root: {},
    tableContainer: {
        margin: '33px -22px 0',
    },
});

function ComponentApi(props) {
    const {
        docs,
    } = props;

    const classes = useStyles();

    const isDocsNotDefined = isEmpty(docs);

    if (isDocsNotDefined) {
        return null;
    }

    return (
        <div
            className={classes.root}
        >
            {map(docs, (doc, index) => {
                const {
                    displayName,
                    props: componentProps,
                } = doc;

                return (
                    <React.Fragment key={`doc_props-${index}`}>
                        <MarkdownContainer>
                            <Heading
                                anchorLink={`api${upperFirst(camelCase(displayName))}`}
                                variant="h3"
                            >
                                {`${displayName} Props`}
                            </Heading>
                        </MarkdownContainer>

                        <div
                            className={classes.tableContainer}
                        >
                            <ComponentApiTable
                                componentProps={componentProps}
                            />
                        </div>
                    </React.Fragment>
                );
            })}

        </div>
    );
}

ComponentApi.propTypes = propTypes;
ComponentApi.defaultProps = defaultProps;

export default ComponentApi;
