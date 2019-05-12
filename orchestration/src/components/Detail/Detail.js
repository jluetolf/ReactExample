import React from 'react';
import './Detail.css';

const Detail = (props) => {

    const details = (
        {
            "verdict": "Successful",
            "comment": "Full Orchestration completed succefully",
            "date": "2019_05_11_12-17-52",
            "orchestrationType": "Full",
            "error": null,
            "resultList": [
                {
                    "verdict": "Successful",
                    "dnsResults": [
                        {
                            "verdict": "Successful",
                            "host": "csvns228",
                            "request": "EB 40 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "EB 40 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        },
                        {
                            "verdict": "Successful",
                            "host": "csvns229",
                            "request": "48 0C 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "48 0C 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
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
                    "code": 0,
                    "serviceName": "orchestration-service-mg-bau1",
                    "server": "csvdf220",
                    "function": "DRF",
                    "standardOutput": null,
                    "errorOutput": "Warning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\n",
                    "verificationFile": "/home/ultracomp/etc/ListeBlanche.csv",
                    "verificationTimestampBefore": "10.05.2019 15:31:04",
                    "verificationTimestampAfter": "11.05.2019 10:19:02",
                    "configuratorLog": "3 csvmg226 nb1[18466]: Stopped\nMay 11 10:19:03 csvmg226 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\nMay 11 10:19:04 csvmg226 configurator: EXPORT [Check config -> OK]\nMay 11 10:19:05 csvmg226 configurator: EXPORT [Config exported locally]\nMay 11 10:19:05 csvmg226 configurator: EXPORT [Export OK on TDRF2]\nMay 11 10:19:05 csvmg226 configurator: EXPORT [End of csv generation]\nMay 11 10:19:05 csvmg226 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\nMay 11 10:19:05 csvmg226 configurator_drf[18338]: NIV1: main() commande: <./export.sh base bfr2501 TDB2 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\nMay 11 10:19:05 csvmg226 configurator_drf[18338]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (8182 ms) !\nMay 11 10:19:05 csvmg226 configurator_drf[18338]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/2019_05_11_12-18-10_DRF_FULL.xml> : SUCCESS (52401 ms) !\n"
                },
                {
                    "verdict": "Successful",
                    "dnsResults": [
                        {
                            "verdict": "Successful",
                            "host": "csvns228",
                            "request": "6B B0 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "6B B0 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 ",
                            "error": null,
                            "ipaddress": "194.150.199.92",
                            "lookup": "internet.mnc096.mcc228.gprs.",
                            "classname": "IN"
                        },
                        {
                            "verdict": "Successful",
                            "host": "csvns229",
                            "request": "D5 98 00 00 00 01 00 00 00 00 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 ",
                            "answer": "D5 98 84 00 00 01 00 01 00 02 00 00 08 69 6E 74 65 72 6E 65 74 06 6D 6E 63 30 39 36 06 6D 63 63 32 32 38 04 67 70 72 73 00 00 01 00 01 C0 0C 00 01 00 01 00 00 0E 10 00 04 C2 96 C7 5C C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 31 00 C0 15 00 02 00 01 00 00 0E 10 00 10 03 31 39 34 03 31 35 30 03 31 39 39 02 31 32 00 ",
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
                    "code": 0,
                    "serviceName": "orchestration-service-mg-bau1",
                    "server": "csvdf220",
                    "function": "DRF",
                    "standardOutput": null,
                    "errorOutput": "Warning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\nWarning: Using a password on the command line interface can be insecure.\n",
                    "verificationFile": "/home/ultracomp/etc/ListeBlanche.csv",
                    "verificationTimestampBefore": "11.05.2019 10:19:02",
                    "verificationTimestampAfter": "11.05.2019 10:19:57",
                    "configuratorLog": "8 csvmg226 nb1[18895]: Stopped\nMay 11 10:19:58 csvmg226 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\nMay 11 10:19:59 csvmg226 configurator: EXPORT [Check config -> OK]\nMay 11 10:19:59 csvmg226 configurator: EXPORT [Config exported locally]\nMay 11 10:20:00 csvmg226 configurator: EXPORT [Export OK on TDRF2]\nMay 11 10:20:00 csvmg226 configurator: EXPORT [End of csv generation]\nMay 11 10:20:00 csvmg226 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\nMay 11 10:20:00 csvmg226 configurator_drf[18769]: NIV1: main() commande: <./export.sh base bfr2501 TDB2 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\nMay 11 10:20:00 csvmg226 configurator_drf[18769]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (7985 ms) !\nMay 11 10:20:00 csvmg226 configurator_drf[18769]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/2019_05_11_12-19-06_DRF_FULL.xml> : SUCCESS (51326 ms) !\n"
                }
            ]
        }



    )

    let nodes =  details.resultList.map((node) => {

        return (
            <div className="Detail" >
               <p>Verdict is {node.verdict}</p>
                <p>Code is {node.code}</p>
            </div>
        );

    });


    return (
    <div className="Details">{nodes}</div>
    );
}

export default Detail;
