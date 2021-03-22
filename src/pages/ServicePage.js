import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="My Services"/>
                <Services/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ServicePage;