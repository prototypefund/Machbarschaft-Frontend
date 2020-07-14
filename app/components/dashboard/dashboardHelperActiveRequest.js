import React from 'react';
import PropTypes from 'prop-types';
import DashboardTileHelperStatus from './dashboardTileHelperStatus';
import DashboardTileContact from './dashboardTileContact';
import DashboardTileUrgency from './dashboardTileUrgency';
import DashboardTileRequestType from './dashboardTileRequestType';
import DashboardTileAdditionalInformation from './dashboardTileAdditionalInformation';

export default function DashboardHelperActiveRequest({
    name,
    phone,
    status,
    requestType,
    urgency,
    carNecessary,
    prescriptionRequired,
    address
}) {
    return (
        <>
            <DashboardTileHelperStatus name={name} status={status} />
            <div className="dashboard-columns-container">
            <div className="dashboard-column">
                <DashboardTileContact
                name={name}
                phone={phone}
                street={address.street}
                zipCode={address.zipCode}
                city={address.city}
                />
                <br />
                <DashboardTileRequestType requestType={requestType} />
            </div>
            <div className="dashboard-column">
                <DashboardTileUrgency urgency={urgency} />
                <DashboardTileAdditionalInformation
                carNecessary={carNecessary}
                prescriptionRequired={prescriptionRequired}
                timestamp={startedAt}
                />
            </div>
            </div>
        </>
    );
}
DashboardHelperActiveRequest.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['open', 'accepted', 'on-the-way']).isRequired,
    requestType: PropTypes.oneOf(['groceries', 'medication', 'other']).isRequired,
    urgency: PropTypes.oneOf(['now', 'today', 'tomorrow', 'this-week']).isRequired,
    carNecessary: PropTypes.bool.isRequired,
    prescriptionRequired: PropTypes.bool.isRequired,
    address: PropTypes.object.isRequired
}