import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import ActionBar from '../../surfaces/actionBar'; // eslint-disable-line import/no-cycle

const propTypes = {
    children: PropTypes.node,
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
    className: undefined,
    columns: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_action_bar`,
    id: undefined,
    style: {},
};

const hasClassName = 'drawer-has_action_bar';
const hasWingClassName = 'drawer--wing-has_action_bar';

class DrawerActionBar extends React.PureComponent {
    componentDidMount() {
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(hasWingClassName);

            return null;
        }

        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');

        if (closestDrawer) {
            closestDrawer.classList.add(hasClassName);
        }

        return null;
    }

    componentWillUnmount() {
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.remove(hasWingClassName);

            return null;
        }

        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');

        if (closestDrawer) {
            closestDrawer.classList.add(hasClassName);
        }

        return null;
    }

    render() {
        const {
            children,
            className,
            columns,
            dataTestId,
            id,
            style,
        } = this.props;

        const containerClasses = ClassNames('drawer--action_bar', className);

        return (
            <div
                data-testid={dataTestId}
                ref={(ref) => { this.drawerActionBarRef = ref; }}
            >
                <ActionBar
                    className={containerClasses}
                    columns={columns}
                    id={id}
                    style={style}
                    moduleType="drawer"
                >
                    {children}
                </ActionBar>
            </div>
        );
    }
}

DrawerActionBar.propTypes = propTypes;
DrawerActionBar.defaultProps = defaultProps;

export default DrawerActionBar;
