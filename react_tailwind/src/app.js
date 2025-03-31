import React, {Component} from 'react';
import {createRoot} from 'react-dom/client'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import Container from './components/Container';


const root = createRoot(document.getElementById('app'));

class App extends Component {
    render(){
		return (
			<div>
				<Header></Header>
				<Breadcrumb />
				<Container/>
				<Footer/>
			</div>
		)
    }
}

root.render(<App/>);