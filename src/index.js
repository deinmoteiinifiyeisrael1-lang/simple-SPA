import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


export const Banner= () => (
  <section id= "banner">
    <h1>Welcome to my SPA</h1>
    <p> It's a simple site still a work in progress but we getting there.</p>
  </section>
);

export const About = () => (
  <section id="about">
    <h1>What's this site about?</h1>
    <p>A sample site for the assignment given by Mr Promise champion</p>
  </section>
);
export const Products = () => (
  <section id ="products">
  <h1>My services</h1>
  <p> front-send dev </p>
  <p> react developer</p>
  </section>
)
export const Contact = () => (
  <section id = "contact">
    <h1>Contact us</h1>
    <p>Email : deinmoteiinifiyeisrael1@gmail.com</p>
    <p>Phone number : 07025198739</p>
  </section>
); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
