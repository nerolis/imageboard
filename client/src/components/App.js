// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// Components
import FlashMessagesList from './features/flash/FlashMessagesList';
import NavigationBar from './Navigation/NavigationBar';
import { Container } from 'semantic-ui-react';
const App = () => (
    <Container>
        <FlashMessagesList />
        <NavigationBar />
    </Container>
)
export default App;