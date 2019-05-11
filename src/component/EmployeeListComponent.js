import React, {Component} from 'react';
import EmployeeDataService from "../service/EmployeeDataService";

class EmployeeListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.getAllEmployees = this.getAllEmployees.bind(this);
    }

    getAllEmployees() {
        EmployeeDataService.fetchAllEmployeesData().then(response => {
            console.log(response);
            this.setState({employees: JSON.parse(response.data.employees)});
        })
    }

    componentDidMount() {
        this.getAllEmployees();
    }

    render() {
        return (
            <div className="container">
                <h3>All Employees</h3>
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
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.employee_name}</td>
                                        <td>{employee.employee_salary}</td>
                                        <td>{employee.employee_age}</td>
                                        <td>{employee.profile_image}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeListComponent
