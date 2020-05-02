import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../containers/Home/Home';
import Cart from '../../containers/Cart/Cart';
import Footer from '../Footer/Footer';
import './Layout.scss';

const layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default layout;