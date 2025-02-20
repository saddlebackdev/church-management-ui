import {
    Button,
    Icon,
    Modal,
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import makeStyles from '@saddlebackchurch/react-cm-ui/styles/makeStyles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    h2: {
        marginTop: 22,
    },
    buttons: {
        margin: [[11, 0, 0]],
        width: 250,
        '&:first-child': {
            margin: 0,
        },
    },
    modalPadding: {
        padding: 55,
    },
    modalActionsMargin: {
        margin: [[theme.spacing(5), 0, 0]],
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
                Open Center Aligned Modal
            </Button>

            <Modal
                classes={{
                    padding: classes.modalPadding,
                }}
                isOpen={isModalOpen}
                width={490}
            >
                <Modal.Content
                    alignItems="center"
                >
                    <Icon
                        color="warning"
                        compact
                        size={64}
                        type="exclamation"
                    />

                    <Typography
                        classes={{
                            root: classes.h2,
                        }}
                        variant="h2"
                    >
                        Uh-Oh
                    </Typography>

                    <Typography
                        align="center"
                        color="textSecondary"
                        variant="subtitle1"
                    >
                        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
                        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
                    </Typography>
                </Modal.Content>

                <Modal.Actions
                    alignItems="center"
                    classes={{
                        margin: classes.modalActionsMargin,
                    }}
                    direction="column"
                >
                    <Button
                        classes={{
                            root: classes.buttons,
                        }}
                        color="warning"
                        onClick={onToggle}
                        designVersion={2}
                    >
                        Confirm
                    </Button>

                    <Button
                        color="primary"
                        classes={{
                            root: classes.buttons,
                        }}
                        onClick={onToggle}
                        designVersion={2}
                    >
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}

export default ModalLeftAlignedSample;
