import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MonthlyPage from '../components/MonthlyPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import DailyPage from '../components/DailyPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/monthly" component={MonthlyPage} />
                <Route path="/daily" component={DailyPage} />
                <Route component={NotFoundPage} />
            </Switch>
    </div>
    
    
    
    </BrowserRouter>
    
    


);

export default AppRouter;