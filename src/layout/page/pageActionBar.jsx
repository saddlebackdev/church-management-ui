import PropTypes from 'prop-types';
import React, {
    useEffect,
} from 'react';
import {
    BEM_CONTAINER,
    UI_CLASS_NAME,
} from '../../global/constants';
import ActionBar from '../../surfaces/actionBar';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    columns: undefined,
    dataTestId: `${UI_CLASS_NAME}-page_action_bar`,
    id: undefined,
    style: {},
};

const HAS_PAGE_ACTION_BAR_CLASS_NAME = 'page-has_action_bar';
const HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME =
    'page--container-has_action_bar_mobile_search_visible';

function PageActionBar(props) {
    useEffect(() => {
        const PageNode = document.querySelector('.ui.page');

        if (PageNode) {
            PageNode.classList.add(HAS_PAGE_ACTION_BAR_CLASS_NAME);
        }

        return () => {
            if (PageNode) {
                PageNode.classList.remove(HAS_PAGE_ACTION_BAR_CLASS_NAME);
            }
        };
    }, []);

    const toggleSmSearchVisibleClassName = (isVisible) => {
        const containerClassName = `.ui.${BEM_CONTAINER}`;
        const containerNode = document.querySelector(containerClassName);

        if (containerNode) {
            if (isVisible) {
                document
                    .querySelector(containerClassName)
                    .classList
                    .add(HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME);
            } else {
                document
                    .querySelector(containerClassName)
                    .classList
                    .remove(HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME);
            }
        }
    };

    const {
        children,
        classes,
        className,
        columns,
        dataTestId,
        id,
        style,
    } = props;

    return (
        <ActionBar
            classes={classes}
            className={className}
            columns={columns}
            data-testid={dataTestId}
            id={id}
            moduleType="page"
            style={style}
            toggleSmSearchVisibleClassName={toggleSmSearchVisibleClassName}
        >
            {children}
        </ActionBar>
    );
}

PageActionBar.propTypes = propTypes;
PageActionBar.defaultProps = defaultProps;

export default PageActionBar;
