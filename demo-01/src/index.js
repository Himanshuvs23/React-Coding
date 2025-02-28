import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';


import { FlipkartMobile } from './product';
import { MouseAnimation02 } from './component/mouse-animation02';
import { KeyboardEvent } from './component/Keyboard-Event';
import { Btndemo } from './component/elementevent';
import { Intervaldemo } from './Timer event/setInterval';
import { CarouselDemo } from './Timer event/CarouselDemo';
import { Timeticking } from './Timer event/Timeticking';
import { Stopwatch } from './Stopwatch/Stopwatch';
import { Stopwatch1 } from './Stopwatch/Stopwatch2';
import { Formdemo } from './Form-demo/form-formik';
import { Formdemo1 } from './Form-demo/form-yup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <Formdemo1 />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
