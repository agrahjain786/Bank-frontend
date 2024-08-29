import { Route, Routes } from 'react-router-dom';
import { Login } from './components/securityDashboard/Login/Login';
import { AdminDashboard } from './components/adminDashboard/AdminDashboard';
import { Dashboard } from './components/adminDashboard/Dashboard/Dashboard';
import { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect } from 'react';
import { Customer } from './components/adminDashboard/Customer/Customer';
import { Transactions } from './components/adminDashboard/Transactions/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import SunIcon from './assets/icons/sun.svg';
import MoonIcon from './assets/icons/moon.svg';
import './App.scss';
import { CreateAdmin } from './components/adminDashboard/CreateAdmin/CreateAdmin';
import { CreateAccount } from './components/adminDashboard/CreateAccount/CreateAccount';
import { InactiveCustomers } from './components/adminDashboard/InactiveCustomers/InactiveCustomers';
import { InactiveAccounts } from './components/adminDashboard/InactiveAccounts/InactiveAccounts';
import { ActivateCustomers } from './components/adminDashboard/ActivateCustomers/ActivateCustomers';
import { ActivateAccounts } from './components/adminDashboard/ActivateAccounts/ActivateAccounts';
import { SecurityDashboard } from './components/securityDashboard/SecurityDashboard';
import { Register } from './components/securityDashboard/Register/Register';
import { Settings } from './components/adminDashboard/Settings/Settings';
import { CustomerDashboard } from './components/customerDashboard/CustomerDashboard';
import { MakeTransactions } from './components/customerDashboard/MakeTransactions/MakeTransactions';
import { Passbook } from './components/customerDashboard/Passbook/Passbook';
import { Accounts } from './components/customerDashboard/Accounts/Accounts';
import { CustomerSettings } from './components/customerDashboard/Settings/Settings';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <>

        <Routes>

          <Route element={<SecurityDashboard/>}>

            <Route path='/auth/login' element={<Login/>}></Route>
            <Route path='/auth/register' element={<Register/>}></Route>

          </Route>
          <Route element={<AdminDashboard />}>

            <Route path='/admin/dashboard/:id' element={<Dashboard />}></Route>
            <Route path='/admin/customer/:id' element={<Customer />}></Route>
            <Route path='/admin/transactions/:id' element={<Transactions />}></Route>
            <Route path='/admin/create-admin/:id' element={<CreateAdmin />}></Route>
            <Route path='/admin/create-account/:id' element={<CreateAccount />}></Route>
            <Route path='/admin/inactive-customers/:id' element={<InactiveCustomers />}></Route>
            <Route path='/admin/inactive-accounts/:id' element={<InactiveAccounts />}></Route>
            <Route path='/admin/activate-customers/:id' element={<ActivateCustomers />}></Route>
            <Route path='/admin/activate-accounts/:id' element={<ActivateAccounts />}></Route>
            <Route path='/admin/settings/:id' element={<Settings />}></Route>
          
          </Route>

          <Route element={<CustomerDashboard />}>

            <Route path='/user/transactions/:id' element={<MakeTransactions />}></Route>
            <Route path='/user/passbook/:id' element={<Passbook />}></Route>
            <Route path='/user/settings/:id' element={<CustomerSettings />}></Route>
            <Route path='/user/accounts/:id' element={<Accounts />}></Route>
            
          </Route>

        </Routes>


        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === "light" ? SunIcon : MoonIcon}
          />
        </button>


    </>
  );
}

export default App;
