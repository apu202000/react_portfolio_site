import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Contact With Me"/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ContactPage;