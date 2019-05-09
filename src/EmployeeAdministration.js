import React, {Component} from 'react';
import EmplpyeeListComponent from './component/EmployeeListComponent';

class EmployeeAdministration extends Component {
    render() {
        return (<>
                <h1>Employee Administration Application</h1>
                <EmplpyeeListComponent/>
            </>
        )
    }
}

export default EmployeeAdministration