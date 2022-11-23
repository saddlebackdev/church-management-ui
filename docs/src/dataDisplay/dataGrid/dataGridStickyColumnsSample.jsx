import {
    DataGrid,
    Icon,
} from '@saddlebackchurch/react-cm-ui';
import makeStyles from '@saddlebackchurch/react-cm-ui/styles/makeStyles';
import moment from 'moment-timezone';
import React from 'react';

const useStyles = makeStyles(() => ({
    bleed: {
        margin: [[0, -11, '!important']],
    },
}));

function DataGridStickyColumnsSample() {
    const classes = useStyles();

    return (
        <DataGrid
            classes={{
                bleed: classes.bleed,
            }}
            columns={[
                {
                    accessor: 'name',
                    header: 'Names',
                }, {
                    accessor: 'campus',
                    header: 'Campus',
                }, {
                    accessor: (d) => moment.unix(d.createdOn).utc().format('L'),
                    header: 'Created On',
                }, {
                    accessor: () => <Icon compact size="xxsmall" type="chevron-right" />,
                    header: null,
                    textAlign: 'right',
                },
            ]}
            data={[
                {
                    campus: 'Lake Forest',
                    createdOn: 1259668810,
                    id: 1,
                    name: 'First Time Visitor',
                }, {
                    campus: 'Lake Forest',
                    createdOn: 1159668810,
                    id: 2,
                    name: 'Second Time Visitor',
                }, {
                    campus: 'Anaheim',
                    createdOn: 1152668810,
                    id: 3,
                    name: 'Class 101 Invite',
                },
            ]}
            id="data_grid_sticky_columns_sample-id"
            stickyColumns={1}
        />
    );
}

export default DataGridStickyColumnsSample;
