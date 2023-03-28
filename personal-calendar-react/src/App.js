import React, { useState } from 'react';
import './App.css';
import '../src/index.css'
import { getMonth } from './util';

// components
import CalendarHeader from './componets/CalendarHeader';
import Sidebar from './componets/Sidebar';
import Month from './componets/Month';


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    

    <React.Fragment>
      <h6 className="text-sky-500 dark:text-sky-400">
      TestTest
      </h6>

      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
