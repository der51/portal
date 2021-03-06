import createDashboardScreen from 'screens/CustomerDashboard/route';
import createNotFoundScreen from 'screens/NotFound/route';
import createLoginScreen from 'screens/LoginScreen/route';
import createInstallerScreen from 'screens/InstallerScreen/route';
import createPromoScreen from 'screens/PromoTrackingScreen/route';
import createDevicesManagerScreen from 'screens/DevicesManager/route';
import createProfileScreen from 'screens/Profile/route';
import createUsersManagerScreen from 'screens/UsersManager/route';
import createVehiclesManagerScreen from 'screens/VehiclesManagerScreen/route';
import menu from './menu';

export default [{
  create: createLoginScreen,
  options: {
    path: 'login',
  },
}, {
  create: createLoginScreen,
  options: {
    path: 'mwa',
  },
}, {
  create: createNotFoundScreen,
  options: {
    path: 'not-found',
  },
}, {
  create: createDashboardScreen,
  options: menu.dashboard,
}, {
  create: createInstallerScreen,
  options: menu.installer,
}, {
  create: createVehiclesManagerScreen,
  options: menu.vehicles,
}, {
  create: createPromoScreen,
  options: menu.promos,
}, {
  create: createDevicesManagerScreen,
  options: menu.devices,
}, {
  create: createUsersManagerScreen,
  options: menu.users,
}, {
  create: createProfileScreen,
  options: menu.profile,
}];
