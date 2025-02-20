import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';
import {
    BEM_CONTAINER,
    UI_CLASS_NAME,
} from '../../global/constants';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    id: null,
    moduleType: null,
};

const useStyles = makeStyles((theme) => {
    const {
        breakpoints,
    } = theme;

    return {
        isDrawer: {},
        isPage: {},
        root: {
            '&$isPage': {
                marginTop: 50,
                [breakpoints.down('md')]: {
                    transition: 'margin-top 333ms ease-in-out',
                    '&.page--container-has_action_bar_mobile_search_visible': {
                        marginTop: 105,
                    },
                },
                [breakpoints.up('md')]: {
                    marginTop: 70,
                },
            },
        },
    };
});

function Container(props) {
    const {
        children,
        className,
        id,
        moduleType,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_CONTAINER,
        classes.root,
        className,
        {
            [classes.isDrawer]: moduleType === 'drawer',
            [classes.isPage]: !moduleType || moduleType === 'page',
        },
    );

    return (
        <div
            className={rootClasses}
            id={id}
        >
            {children}
        </div>
    );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
