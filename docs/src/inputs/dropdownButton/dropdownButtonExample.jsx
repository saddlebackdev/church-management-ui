import { DropdownButton } from '@saddleback/react-cm-ui';
import React from 'react';

function DropdownDropdownExample() {
    return (
        <DropdownButton color="success" label="Simple Dropdown Button" designVersion={2}>
            <DropdownButton.Option>Option 01</DropdownButton.Option>
            <DropdownButton.Option>Option 02</DropdownButton.Option>
            <DropdownButton.Option>Option 01</DropdownButton.Option>
        </DropdownButton>
    );
}

export default DropdownDropdownExample;
