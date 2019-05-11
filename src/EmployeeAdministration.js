import React, {Component} from 'react';
import EmplpyeeListComponent from './component/EmployeeListComponent';

class EmployeeAdministration extends Component {
    render() {
        return (<>
                <h1 className="lead">Employee Administration Application</h1>
                <EmplpyeeListComponent/>
            </>
        )
    }
}

export default EmployeeAdministration