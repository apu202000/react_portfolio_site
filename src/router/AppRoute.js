import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";



class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/service" component={ServicePage}/>
                        <Route exact path="/course" component={CoursesPage}/>
                        <Route exact path="/portfolio" component={PortfolioPage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                        <Route exact path="/about" component={AboutPage}/>
                    </Switch>
                </BrowserRouter>


            </Fragment>
        );
    }
}

export default AppRoute;