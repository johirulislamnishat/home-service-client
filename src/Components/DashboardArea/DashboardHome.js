import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WelcomeBanner from "./WelcomeBanner";
import Sidebar from "./Navigation/Sidebar";
import Topbar from './Navigation/Topbar';
import useAuth from '../../Authentication/Hooks/useAuth';
import DashboardUser from './UserArea/DashboardUser';
import Review from './UserArea/Review';
import AddAdmin from './AdminArea/AddAdmin';
import Payment from './UserArea/Payments/Payment';
import ManageServices from './AdminArea/ManageServices/ManageServices';
import AddServices from './AdminArea/ManageServices/AddServices';
import MybookedServices from './UserArea/MyBookedServices/MyBookedServices';
import AddEngineers from './AdminArea/ManageEngineers/AddEngineers';
import ManageEngineers from './AdminArea/ManageEngineers/ManageEngineers';
import DashboardAdmin from './AdminArea/DashboardAdmin';
import AddBlogs from './AdminArea/ManageBlogs/AddBlogs';

const DashboardHome = () => {

    let { path } = useRouteMatch();
    const { admin } = useAuth();
    // sidebar 
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}
                        <WelcomeBanner />

                        {/* Dashboard actions */}

                        <Switch className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

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

                            <Route path={`${path}/add-new-blog`}>
                                <AddBlogs />
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

                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardHome;