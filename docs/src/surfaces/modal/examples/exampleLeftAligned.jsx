import {
    Button,
    Input,
    Modal,
    Select,
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import React, { useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    cancelButton: {
        marginLeft: 'auto',
    },
}));

function ModalLeftAlignedSample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const classes = useStyles();

    const onToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Button
                color="primary"
                onClick={onToggle}
                designVersion={2}
            >
                Open Left Aligned Modal
            </Button>

            <Modal
                isOpen={isModalOpen}
                width={490}
            >
                <Modal.Content>
                    <Typography
                        variant="h2"
                    >
                        Section Heading
                    </Typography>

                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        Section Body Copy - quis nulla commodo, aliquam lectus sed, blandit augue.
                        Cras ullamcorper bibendum bibendum.
                    </Typography>

                    <Input
                        fluid
                        label="Label"
                        placholder="Text"
                    />

                    <Input
                        fluid
                        label="Label"
                        placholder="Text"
                    />

                    <Select
                        label="Label"
                        fluid
                        options={[
                            {
                                label: 'Option 1',
                                value: 1,
                            },
                            {
                                label: 'Option 2',
                                value: 2,
                            },
                            {
                                label: 'Option 3',
                                value: 3,
                            },
                            {
                                label: 'Option 4',
                                value: 4,
                            },
                            {
                                label: 'Option 5',
                                value: 5,
                            },
                        ]}
                        value={{
                            label: 'Option 1',
                            value: 1,
                        }}
                    />
                </Modal.Content>

                <Modal.Actions>
                    <Button
                        classes={{
                            root: classes.cancelButton,
                        }}
                        onClick={onToggle}
                        designVersion={2}
                    >
                        Cancel
                    </Button>

                    <Button
                        color="primary"
                        onClick={onToggle}
                        designVersion={2}
                    >
                        CTA Label
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}

export default ModalLeftAlignedSample;
