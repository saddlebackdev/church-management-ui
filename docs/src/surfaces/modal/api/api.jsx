import {
    camelCase,
} from 'lodash';
import React from 'react';
import ComponentApi from '../../../global/componentApi';
import Main from '../../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/surfaces/modal/modal';
import { default as contentDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/surfaces/modal/modalContent';
import { default as actionsDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/surfaces/modal/modalActions';
/* eslint-enable import/no-named-default, import/extensions */

function DocsApi() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <ComponentApi
                    docs={[
                        rootDoc,
                        contentDoc,
                        actionsDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsApi;
