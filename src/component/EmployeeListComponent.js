import React, {Component} from 'react';
import EmployeeDataService from "../service/EmployeeDataService";

class EmployeeListComponent extends Component {
    constructor(props) {
        super(props);
        this.getAllEmployees = this.getAllEmployees.bind(this);
    }

    getAllEmployees() {
        EmployeeDataService.fetchAllEmployeesData().then(response => {
            console.log(response);
        })
    }

    componentDidMount() {
        this.getAllEmployees();
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <th>Profile Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Margaret Luzogub</td>
                            <td>99000</td>
                            <td>33</td>
                            <td>n/a</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeListComponent
