import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Detail from '../components/Detail/Detail';
import MaterialTable from 'material-table';

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className="App">

                    <MaterialTable
                        title="Basic Filtering Preview"
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Surname', field: 'surname' },
                            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                            {
                                title: 'Birth Place',
                                field: 'birthCity',
                                lookup: { 34: 'Istanbul', 63: 'Sanliurfa' },
                            },
                        ]}
                        data={[
                            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        ]}
                        options={{
                            filtering: true
                        }}
                    />

                    <Detail/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

