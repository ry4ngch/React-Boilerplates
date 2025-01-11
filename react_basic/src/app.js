import React, {Component, useEffect} from 'react';
import {createRoot} from 'react-dom/client'
import 'normalize.css/normalize.css';

// import Bootstrap styles
//import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom-bootstrap.scss';

// import fontawesome styles
import './utils/FontAwesome/fontAwesome';

// import personal styles
import './styles/styles.scss';

// import components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Container from './containers/Container';

// import jQuery
import 'jquery';

const root = createRoot(document.getElementById('app'));

class App extends Component {
    render(){
		console.log('jQuery version', $.fn.jquery);
		return (
			<div id='wrapper'>
				<Header title="Salient" shift={true} navSlideDown={false}></Header>
				<Container></Container>
				<Footer ></Footer>
			</div>
		)
    }
}

root.render(<App/>);