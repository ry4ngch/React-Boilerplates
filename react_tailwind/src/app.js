import React, {Component} from 'react';
import {createRoot} from 'react-dom/client'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Container from './components/Container';
import OffcanvasNav from './components/OffcanvasNav';


const root = createRoot(document.getElementById('app'));

class App extends Component {
    render(){
		return (
			<div className="relative">
				<Navbar />
				<Container/>

				{/* uncomment to see offcanvas navbar */}
				{/* <OffcanvasNav/>
				<Container/> */}
			</div>
		)
    }
}

root.render(<App/>);