import React, { useEffect, useRef } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Authentication/Hooks/useAuth';

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}) => {

  // nested route 
  let { url } = useRouteMatch();
  const { admin } = useAuth();

  // const location = useLocation();
  // const { pathname } = location;
  // const page = pathname.split('/')[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
              <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div>

          <ul className="mt-3">


            {/* Menu For Admin Only  */}

            {/* Make Admin */}
            {/* {
              admin ? */}
            <>

              {/* Admin Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 'bg-gray-900'}`}>
                <NavLink to={`${url}/admin-dashboard`} className={`block text-gray-200 hover:text-white transition duration-150 'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-400 'text-indigo-300'}`} d="M7 0l6 7H8v10H6V7H1z" />
                      <path className={`fill-current text-gray-600 'text-indigo-500'}`} d="M18 7v10h5l-6 7-6-7h5V7z" />
                    </svg>
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </NavLink>
              </li>

              {/* Add Services */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  'bg-gray-900'}`}>
                <NavLink to={`${url}/add-services`} className={`block text-gray-200 hover:text-white transition duration-150  'hover:text-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-grow">
                      <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                        <path className={`fill-current text-gray-600  'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                        <path className={`fill-current text-gray-400  'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                      </svg>
                      <span className="text-sm font-medium">Add Services</span>
                    </div>

                  </div>
                </NavLink>
              </li>

              {/* Add Engineers */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  'bg-gray-900'}`}>
                <NavLink to={`${url}/add-engineers`} className={`block text-gray-200 hover:text-white transition duration-150  'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600  'text-indigo-500'}`} d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                      <path className={`fill-current text-gray-400  'text-indigo-300'}`} d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                    </svg>
                    <span className="text-sm font-medium">Add Engineers</span>
                  </div>
                </NavLink>
              </li>

              {/* Manage Services */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 $'bg-gray-900'}`}>
                <NavLink to={`${url}/manage-services`} className={`block text-gray-200 hover:text-white transition duration-150 'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 $'text-indigo-500'}`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                      <path className={`fill-current text-gray-600 $'text-indigo-500'}`} d="M1 1h22v23H1z" />
                      <path className={`fill-current text-gray-400 $'text-indigo-300'}`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                    </svg>
                    <span className="text-sm font-medium">Manage Services</span>
                  </div>
                </NavLink>
              </li>

              {/* Manage Engineers */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  'bg-gray-900'}`}>
                <NavLink to={`${url}/manage-engineers`} className={`block text-gray-200 hover:text-white transition duration-150  'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <circle className={`fill-current text-gray-400  'text-indigo-300'}`} cx="18.5" cy="5.5" r="4.5" />
                      <circle className={`fill-current text-gray-600  'text-indigo-500'}`} cx="5.5" cy="5.5" r="4.5" />
                      <circle className={`fill-current text-gray-600  'text-indigo-500'}`} cx="18.5" cy="18.5" r="4.5" />
                      <circle className={`fill-current text-gray-400  'text-indigo-300'}`} cx="5.5" cy="18.5" r="4.5" />
                    </svg>
                    <span className="text-sm font-medium">Manage Engineers</span>
                  </div>
                </NavLink>
              </li>

              {/*Add New Admin */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  'bg-gray-900'}`}>
                <NavLink to={`${url}/add-new-admin`} className={`block text-gray-200 hover:text-white transition duration-150  'hover:text-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-grow">
                      <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                        <path className={`fill-current text-gray-600  'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                        <path className={`fill-current text-gray-400  'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                      </svg>
                      <span className="text-sm font-medium">Add New Admin</span>
                    </div>

                  </div>
                </NavLink>
              </li>
            </>
            <>

              {/* User Only Dashboard Menu */}
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 'bg-gray-900'}`}>
                <NavLink to={`${url}/dashboard`} className={`block text-gray-200 hover:text-white transition duration-150 'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-400 'text-indigo-300'}`} d="M7 0l6 7H8v10H6V7H1z" />
                      <path className={`fill-current text-gray-600 'text-indigo-500'}`} d="M18 7v10h5l-6 7-6-7h5V7z" />
                    </svg>
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </NavLink>
              </li>

              {/* Booked Service */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 'bg-gray-900'}`}>
                <NavLink to={`${url}/my-booked-service`} className={`block text-gray-200 hover:text-white transition duration-150 'hover:text-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-grow">
                      <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                        <path className={`fill-current text-gray-400 'text-indigo-300'}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                        <path className={`fill-current text-gray-700 'text-indigo-600'}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                        <path className={`fill-current text-gray-600 'text-indigo-500'}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                      </svg>
                      <span className="text-sm font-medium">Booked Service</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Review */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  'bg-gray-900'}`}>
                <NavLink to={`${url}/review`} className={`block text-gray-200 hover:text-white transition duration-150  'hover:text-gray-200'}`}>
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600  'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path className={`fill-current text-gray-400  'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                    </svg>
                    <span className="text-sm font-medium">Review</span>
                  </div>
                </NavLink>
              </li>
            </>

            {/* } */}

          </ul>
        </div>

      </div>
    </div>
  );
  // return{
  //   Switch,
  //   Route,
  //   path
  // }
};

export default Sidebar;