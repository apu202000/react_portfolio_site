import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;