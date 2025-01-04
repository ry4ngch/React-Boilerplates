import React, {Component} from 'react';
import {createRoot} from 'react-dom/client'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/header';
import Footer from './components/footer';


const root = createRoot(document.getElementById('app'));

class App extends Component {
    render(){
		return (
			<div>
				<Header title="Hello"></Header>
				<Footer></Footer>
			</div>
		)
    }
}

root.render(<App/>);