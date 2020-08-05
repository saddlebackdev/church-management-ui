import { DropdownButton } from 'react-cm-ui';
import React from 'react';

function DropdownDropdownExample() {
    return (
        <DropdownButton color="success" label="Simple Dropdown Button">
            <DropdownButton.Option>Option 01</DropdownButton.Option>
            <DropdownButton.Option>Option 02</DropdownButton.Option>
            <DropdownButton.Option>Option 01</DropdownButton.Option>
        </DropdownButton>
    );
}

export default DropdownDropdownExample;
