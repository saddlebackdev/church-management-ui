import React from 'react';
import { Breadcrumbs } from '@saddlebackchurch/react-cm-ui';

const router = { // react-router core instance mockup
    location: {
        pathname: '/my-section/sub-section/some-status/cool-stuff',
    },
    params: {},
    // eslint-disable-next-line no-alert
    push: (to) => { alert(`it would push to: ${to}`); },
    routes: [
        {
            indexRoute: { title: 'Home' },
            path: '/',
            childRoutes: [
                {
                    indexRoute: { title: 'My Section' },
                    path: 'my-section',
                    childRoutes: [
                        {
                            indexRoute: { title: 'Very Long Sub Section Title So It Will Not Be Entirely Displayed' },
                            path: 'sub-section',
                            childRoutes: [
                                {
                                    indexRoute: { title: 'Some Status' },
                                    path: 'some-status',
                                    childRoutes: [
                                        {
                                            title: 'Cool Stuff',
                                            path: 'cool-stuff',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

function BreadcrumbsSample() {
    return (
        <Breadcrumbs
            router={router}
        />
    );
}

export default BreadcrumbsSample;
