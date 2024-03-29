import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home,About} from './components/Home'
import Testimonials from './components/Testimonials';
import Contents from './components/Contents';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <Testimonials/>
    <Contents/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
