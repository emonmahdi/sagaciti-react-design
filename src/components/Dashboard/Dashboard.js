import React from 'react';

import './Dashboard.css'
import UserContent from './UserContent/UserContent';
import UserPanel from './UserPanel/UserPanel';

const Dashboard = () => {
    return (
        <div>
            <div className='mt-3'> 
                <div className="container-fluid">
                    <div className="row">
                        <UserPanel></UserPanel>
                        <UserContent></UserContent>
                    </div>
                </div>
             </div>
            
        </div>
    );
};

export default Dashboard;