import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardAdmin from './AdminArea/DashboardAdmin';
import DashboardUser from './UserArea/DashboardUser';
import Review from './UserArea/Review';
import AddAdmin from './AdminArea/AddAdmin';
import Payment from './UserArea/Payments/Payment';
import CardInfo from './UserArea/Payments/CardInfo';
import ManageServices from './AdminArea/ManageServices/ManageServices';
import AddServices from './AdminArea/ManageServices/AddServices';
import MybookedServices from './UserArea/MyBookedServices/MyBookedServices';
import ManageEngineers from './AdminArea/ManageEngineers/ManageEngineers';
import AddEngineers from './AdminArea/ManageEngineers/AddEngineers';


const DashboardContent = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>

                <Route path={`${path}/admin-dashboard`} >
                    <DashboardAdmin />
                </Route>

                <Route path={`${path}/add-services`}>
                    <AddServices />
                </Route>

                <Route path={`${path}/add-engineers`}>
                    <AddEngineers />
                </Route>

                <Route path={`${path}/manage-services`}>
                    <ManageServices />
                </Route>

                <Route path={`${path}/manage-engineers`}>
                    <ManageEngineers />
                </Route>

                <Route path={`${path}/add-new-admin`}>
                    <AddAdmin />
                </Route>

                {/* user menu  */}
                <Route path={`${path}/dashboard`}>
                    <DashboardUser />
                </Route>

                <Route path={`${path}/my-booked-service`}>
                    <MybookedServices />
                </Route>

                <Route path={`${path}/payment/:serviceId`}>
                    <Payment />
                </Route>

                <Route path={`${path}/cardInfo`}>
                    <CardInfo />
                </Route>


                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
        </div>
    );
};

export default DashboardContent;