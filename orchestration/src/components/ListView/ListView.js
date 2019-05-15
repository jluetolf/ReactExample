import React, {Component} from 'react';


class ListView extends Component {

    render() {


        const details = (
            {
                "verdict": "Successful",
                "comment": "Full Orchestration completed successfully",
                "date": "2019_05_11_12-17-52",
                "orchestrationType": "Full",
                "error": null,
                "resultList": [
                    {
                        "id": "Test1",
                        "verdict": "Successful",
                        "host": "csvns228",
                    },
                    {
                        "id": "TEST1",
                        "function": "TEST",
                        "verdict": "Successful",
                        "order": 1,
                        "orchestration": "secondary"
                    },
                    {
                        "id": "TEST1",
                        "function": "TEST",
                        "verdict": "Successful",
                        "order": 1,
                        "orchestration": "secondary"
                    }
                ]
            }

        );

        return (<div></div>);


    }
}