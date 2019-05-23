import React from 'react';
import './Detail.css';

const Detail = (props) => {

    const details = (
        {
            "verdict": "Successful",
            "comment": "Full Orchestration completed succefully",
            "startdate": "2019_05_16_14-54-20",
            "orchestrationType": "Full",
            "error": null,
            "resultListOrchestration": [
                {
                    "verdict": "Successful",
                    "code": 0,
                    "serviceName": "orchestration-service-mg-bau1",
                    "startdate": null,
                    "server": "csvdf220",
                    "nodetype": "DRF",
                    "standardOutput": null,
                    "errorOutput": "Warning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\n",
                    "verificationFile": "/home/ultracomp/etc/ListeBlanche.csv",
                    "verificationTimestampBefore": "16.05.2019 11:00:00",
                    "verificationTimestampAfter": "16.05.2019 12:55:42",
                    "configuratorLog": "4 csvmg226 nb1[14831]: Stopped\nMay 16 12:55:44 csvmg226 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\nMay 16 12:55:45 csvmg226 configurator: EXPORT [Check config -> OK]\nMay 16 12:55:45 csvmg226 configurator: EXPORT [Config exported locally]\nMay 16 12:55:45 csvmg226 configurator: EXPORT [Export OK on TDRF2]\nMay 16 12:55:45 csvmg226 configurator: EXPORT [End of csv generation]\nMay 16 12:55:45 csvmg226 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\nMay 16 12:55:45 csvmg226 configurator_drf[14697]: NIV1: main() commande: <./export.sh base bfr2501 TDB2 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\nMay 16 12:55:45 csvmg226 configurator_drf[14697]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (9090 ms) !\nMay 16 12:55:45 csvmg226 configurator_drf[14697]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/2019_05_16_14-54-37_DRF_FULL.xml> : SUCCESS (63290 ms) !\n"
                },
                {
                    "verdict": "Successful",
                    "code": 0,
                    "serviceName": "orchestration-service-mg-bau1",
                    "startdate": null,
                    "server": "csvdf220",
                    "nodetype": "DRF",
                    "standardOutput": null,
                    "errorOutput": "Warning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\n",
                    "verificationFile": "/home/ultracomp/etc/ListeBlanche.csv",
                    "verificationTimestampBefore": "16.05.2019 12:55:42",
                    "verificationTimestampAfter": "16.05.2019 12:56:46",
                    "configuratorLog": "8 csvmg226 nb1[15260]: Stopped\nMay 16 12:56:48 csvmg226 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\nMay 16 12:56:49 csvmg226 configurator: EXPORT [Check config -> OK]\nMay 16 12:56:49 csvmg226 configurator: EXPORT [Config exported locally]\nMay 16 12:56:49 csvmg226 configurator: EXPORT [Export OK on TDRF2]\nMay 16 12:56:49 csvmg226 configurator: EXPORT [End of csv generation]\nMay 16 12:56:49 csvmg226 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\nMay 16 12:56:49 csvmg226 configurator_drf[15133]: NIV1: main() commande: <./export.sh base bfr2501 TDB2 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\nMay 16 12:56:49 csvmg226 configurator_drf[15133]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (8738 ms) !\nMay 16 12:56:49 csvmg226 configurator_drf[15133]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/2019_05_16_14-55-46_DRF_FULL.xml> : SUCCESS (59987 ms) !\n"
                }
            ],
            "resultListTest": [
                {
                    "verdict": "Successful",
                    "dnsResults": [
                        {
                            "verdict": "Successful",
                            "host": "csvns228",
                            "request": "AD 20 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "AD 20 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        },
                        {
                            "verdict": "Successful",
                            "host": "csvns229",
                            "request": "90 F1 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "90 F1 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        }
                    ],
                    "gtpEchoResult": [
                        {
                            "verdict": "Successful",
                            "host": "185.47.24.193",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "91.221.82.121",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "195.211.13.120",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "185.47.24.193",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "91.221.82.121",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "195.211.13.120",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        }
                    ]
                },
                {
                    "verdict": "Successful",
                    "dnsResults": [
                        {
                            "verdict": "Successful",
                            "host": "csvns228",
                            "request": "42 F0 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "42 F0 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        },
                        {
                            "verdict": "Successful",
                            "host": "csvns229",
                            "request": "BB F6 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "BB F6 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        }
                    ],
                    "gtpEchoResult": [
                        {
                            "verdict": "Successful",
                            "host": "185.47.24.193",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "91.221.82.121",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "195.211.13.120",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "185.47.24.193",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "91.221.82.121",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        },
                        {
                            "verdict": "Successful",
                            "host": "195.211.13.120",
                            "request": "32 01 00 04 00 00 00 00 00 01 00 00 ",
                            "answer": "32 02 00 06 00 00 00 00 00 01 00 00 0E 84 ",
                            "error": null
                        }
                    ]
                }
            ]
        }
    )

    details.resultList.sort((a, b) => {
        return a < b ? -1 : 1;

    });


    let testDictionary = [];
    let secondaryDictionary = [];
    let primaryDictionary = [];
    for (let index = 0; index < details.resultList.length; index++) {
        let node = details.resultList[index];
        if (node.function === "TEST") {
            testDictionary[node.id] = (
                <div className="Detail">
                    <p>Id is {node.id}</p>
                    <p>Verdict is {node.verdict}</p>
                </div>
            )
        }

        if (node.function !== "TEST" && node.orchestration === "secondary") {
            secondaryDictionary.push(
                <div className="Detail" key={node.id}>
                    <p>Id is {node.id}</p>
                    <p>Verdict is {node.verdict}</p>
                    <p>Code is {node.code}</p>
                </div>
            );
        }

        if (node.function !== "TEST" && node.orchestration === "primary") {
            primaryDictionary.push(
                <div className="Detail" key={node.id}>
                    <p>Id is {node.id}</p>
                    <p>Verdict is {node.verdict}</p>
                    <p>Code is {node.code}</p>
                </div>
            );
        }
    }


    return (
        <div>
            <div className="Details">
                <p>Secondary Nodes Orchestration</p>
                {testDictionary["TEST1"]}
                {secondaryDictionary}
                {testDictionary["TEST2"]}
            </div>
            <div></div>
            <div className="Details">
                <p>Secondary Nodes Orchestration</p>
                {primaryDictionary}
                {testDictionary["TEST3"]}
            </div>
            <div className="Details">
                <p>hallo </p>
                <p>velo </p>
                <p>fahrer</p>
            </div>
        </div>
    );
}

export default Detail;
