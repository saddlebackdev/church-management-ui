import { Input } from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleInputError() {

    return (
        <Input error={true} value="No, you did it wrong!" />
    );
}

export default ExampleInputError;
