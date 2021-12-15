import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardAdmin from './AdminArea/DashboardAdmin';
import Patients from './AdminArea/ManagePatients';
import Appointment from './AdminArea/Appointment';
import DashboardUser from './UserArea/DashboardUser';
import MyAppointment from './UserArea/MyAppointment';
import Review from './UserArea/Review';
import AddAdmin from './AdminArea/AddAdmin';
import Payment from './UserArea/Payment';
import CardInfo from './UserArea/CardInfo';
import SendMeetLink from './AdminArea/SendMeetLink';
import ManageServices from './AdminArea/ManageServices';
import AddServices from './AdminArea/AddServices';


const DashboardContent = () => {
    let { path } = useRouteMatch();


    return (
        <div>
            <Switch>

                <Route path={`${path}/admin-dashboard`} >
                    <DashboardAdmin />
                </Route>

                <Route path={`${path}/appointments`}>
                    <Appointment />
                </Route>

                <Route path={`${path}/patients`}>
                    <Patients />
                </Route>

                <Route path={`${path}/add-services`}>
                    <AddServices />
                </Route>

                <Route path={`${path}/manage-services`}>
                    <ManageServices />
                </Route>

                <Route path={`${path}/add-new-admin`}>
                    <AddAdmin />
                </Route>

                <Route path={`${path}/meetlink/:meetingId`}>
                    <SendMeetLink />
                </Route>

                {/* user menu  */}
                <Route path={`${path}/dashboard`}>
                    <DashboardUser />
                </Route>

                <Route path={`${path}/my-appointment`}>
                    <MyAppointment />
                </Route>

                <Route path={`${path}/payment/:appointmentId`}>
                    <Payment />
                </Route>

                <Route path={`${path}/cardInfo`}>
                    <CardInfo />
                </Route>

                {/* <Route path={`${path}/my-prescriptions`}>
                    <MyPrescription />
                </Route> */}

                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
        </div>
    );
};

export default DashboardContent;