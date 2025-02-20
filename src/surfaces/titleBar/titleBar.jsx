import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../dataDisplay/header';

class TitleBar extends React.Component {
    render() {
        const {
            children, className, style, subTitle, title,
        } = this.props;
        const containerClasses = ClassNames('ui', 'title-bar', className);

        return (
            <header className={containerClasses} style={style}>
                <MediaQuery maxWidth={767}>
                    {(matches) => (
                        <Header
                            as={matches ? 'h4' : 'h2'}
                            sub={!_.isEmpty(subTitle)}
                        >
                            <span>{title}</span>

                            {!_.isEmpty(subTitle) ? (
                                <Header.Subheader>
                                    {subTitle}
                                </Header.Subheader>
                            ) : null}
                        </Header>
                    )}
                </MediaQuery>

                {children ? (
                    <div className="title-bar-children">
                        {children}
                    </div>
                ) : null}
            </header>
        );
    }
}

TitleBar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
    subTitle: PropTypes.string,
    title: PropTypes.string,
};

export default TitleBar;
