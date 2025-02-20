import {
    PersonCoreMilestones,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleAdultFemale() {
    const data = {
        acceptedChristDate: '1991-03-31T00:00:00',
        activeInMissionsDate: '1991-03-31T00:00:00',
        activate1Date: '1991-03-31T00:00:00',
        activate2Date: null,
        activate3Date: null,
        activate4Date: null,
        attendedClass101Date: '1991-03-31T00:00:00',
        attendedClass201Date: null,
        attendedClass301Date: null,
        attendedClass401Date: null,
        baptismDate: '1994-04-24T00:00:00',
        congregationDate: null,
        firstContactDate: null,
        firstMinistryJoinDate: '1991-03-31T00:00:00',
        firstSmallGroupJoinDate: '1991-03-31T00:00:00',
        gender: 'F',
        hasAcceptedChrist: true,
        hasAttendedActivate1: true,
        hasAttendedActivate2: false,
        hasAttendedActivate3: false,
        hasAttendedActivate4: false,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: true,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: true,
        hasTakenClass201: false,
        hasTakenClass301: false,
        hasTakenClass401: false,
        isActiveInMissions: true,
        isBaptised: true,
        isInMinistry: true,
        isInSmallGroup: true,
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

export default ExampleAdultFemale;
