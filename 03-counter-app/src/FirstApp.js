import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional components
const FirstApp = ({ name, subtitle }) => {
    const greetings = `Hello World ${name}`;

    return (
        <Fragment>
            <div className="container">
                <h1>
                    { greetings }
                </h1>
                <h4>{ subtitle }</h4>
            </div>
        </Fragment>
    );
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default FirstApp;