import {
    Button,
    Grid,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleTextColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    disabled
                    variant="text"
                    designVersion={2}
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="error"
                    variant="text"
                    designVersion={2}
                >
                    Error
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="link"
                    variant="text"
                    designVersion={2}
                >
                    Link
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    variant="text"
                    designVersion={2}
                >
                    Success
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    variant="text"
                    designVersion={2}
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleTextColors;
