import React, {Component} from 'react';
import {createRoot} from 'react-dom/client'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import SideNav from './components/SideNav';


const root = createRoot(document.getElementById('app'));

class App extends Component {
    render(){
		return (
			<div class="relative">
				<Header />
				<Container/>
				<Footer/>

				{/* uncomment to see offcanvas navbar */}
				{/* <SideNav/>
				<Container className="container-fluid mt-15 lg:mt-25 z-1 relative"/>
				<Footer/> */}
			</div>
		)
    }
}

root.render(<App/>);