import {
    PersonCoreMilestones,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExamplePersonCoreMilestones() {
    const data = {
        acceptedChristDate: '1991-03-31T00:00:00',
        activate1Date: null,
        activate2Date: null,
        activate3Date: null,
        activate4Date: null,
        activeInMissionsDate: null,
        attendedClass101Date: null,
        attendedClass201Date: null,
        attendedClass301Date: null,
        attendedClass401Date: null,
        baptismDate: '1994-04-24T00:00:00',
        congregationDate: null,
        firstContactDate: null,
        firstMinistryJoinDate: null,
        firstSmallGroupJoinDate: null,
        gender: 'M',
        hasAcceptedChrist: true,
        hasAttendedActivate1: false,
        hasAttendedActivate2: false,
        hasAttendedActivate3: false,
        hasAttendedActivate4: false,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: false,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: false,
        hasTakenClass201: false,
        hasTakenClass301: false,
        hasTakenClass401: false,
        isActiveInMissions: false,
        isBaptised: true,
        isInMinistry: false,
        isInSmallGroup: false,
        recordType: 'adult',
        signedMembershipAgreementDate: null,
        signedMaturityCovenantDate: null,
        signedMinistryCovenantDate: null,
        signedMissionCovenantDate: null,
    };

    return (
        <PersonCoreMilestones
            data={data}
        />
    );
}

export default ExamplePersonCoreMilestones;
