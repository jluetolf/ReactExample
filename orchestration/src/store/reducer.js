import instance from './../axiosinstance';

const initialList = (
    [
        {
            "id": 10,
            "start_date": "2019-06-16T15:52:48.377+0000",
            "end_date": "2019-06-16T15:52:48.000+0000",
            "orchestration_type": "Full",
            "verdict": "Failed",
            "error": "Orchestration if the secondary nodes failed",
            "nodes": [
                {
                    "id": 11,
                    "xml_id": "13",
                    "start_date": "2019-06-16T15:53:12.771+0000",
                    "end_date": "2019-06-16T15:54:16.618+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DNSF",
                    "cluster_type": "secondary",
                    "server": "csvns229",
                    "response": "{\"verdict\":\"Failed\",\"code\":-1,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:54:13\",\"stop_timestamp\":\"16.06.2019 15:54:15\",\"server\":\"csvns229\",\"nodetype\":\"DNSF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Exception: java.lang.NullPointerException\",\"verificationFile\":\"/etc/named.d/include/named.conf.USAVZ\",\"verificationTimestampBefore\":null,\"verificationTimestampAfter\":null,\"configuratorLog\":null}"
                },
                {
                    "id": 12,
                    "xml_id": "12",
                    "start_date": "2019-06-16T15:53:12.771+0000",
                    "end_date": "2019-06-16T15:53:20.420+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1-ss7f",
                    "node_type": "SS7F",
                    "cluster_type": "secondary",
                    "server": "css7f601",
                    "response": "{\"verdict\":\"Failed\",\"code\":1,\"serviceName\":\"orchestration-service-mg-lau1-ss7f\",\"start_timestamp\":\"16.06.2019 15:53:13\",\"stop_timestamp\":\"16.06.2019 15:53:19\",\"server\":\"css7f601\",\"nodetype\":\"SS7F\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"23.05.2019 06:43:24\",\"verificationTimestampAfter\":\"23.05.2019 06:43:24\",\"configuratorLog\":\"Jun 16 15:45:23 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: START SS7F with user 'ultracomp' PROCESSING FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>: live_DB = SS7F_111017_live\\nJun 16 15:45:23 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: PROCESSING WITH LAB CONFIG\\nJun 16 15:45:26 csvmg609 configurator: EXPORT [TEMPORARY DATABASE -> OK]\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV1: main() commande: <./import.sh base bfr2501 COMMON-DB3DB4 3307 SS7F_111017_live SS7F_111017_live_tmp /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: DATABASE CLEAN: SUCCESS (ERR=0, 3347 ms) !\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: DATABASE INIT: SUCCESS (ERR=0, 8 ms) !\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: START IMPORTATION FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [IMPORT CFG]: ERROR [cam-ss7f NOT found] !!!\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: STOP IMPORTATION FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>: 0 warnings & 1 errors (87 ms)\\nJun 16 15:53:14 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: START SS7F with user 'ultracomp' PROCESSING FILE </opt/update/xmlfiles/000010_SS7F_Full_20190616T155311.xml>: live_DB = SS7F_111017_live\\nJun 16 15:53:14 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: PROCESSING WITH LAB CONFIG\\nJun 16 15:53:18 csvmg609 configurator: EXPORT [TEMPORARY DATABASE -> OK]\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV1: main() commande: <./import.sh base bfr2501 COMMON-DB3DB4 3307 SS7F_111017_live SS7F_111017_live_tmp /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: DATABASE CLEAN: SUCCESS (ERR=0, 3611 ms) !\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: DATABASE INIT: SUCCESS (ERR=0, 7 ms) !\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: START IMPORTATION FILE </opt/update/xmlfiles/000010_SS7F_Full_20190616T155311.xml>\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV0: [IMPORT CFG]: ERROR [cam-ss7f NOT found] !!!\\nJun 16 15:53:18 csvmg609 configurator_ss7f[28212]: NIV0: [CAM PROCESS]: STOP IMPORTATION FILE </opt/update/xmlfiles/000010_SS7F_Full_20190616T155311.xml>: 0 warnings & 1 errors (86 ms)\\n\"}"
                },
                {
                    "id": 10,
                    "xml_id": "10",
                    "start_date": "2019-06-16T15:53:12.770+0000",
                    "end_date": "2019-06-16T15:54:20.718+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DSF",
                    "cluster_type": "secondary",
                    "server": "csvsf223",
                    "response": "{\"verdict\":\"Failed\",\"code\":254,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:54:12\",\"stop_timestamp\":\"16.06.2019 15:54:19\",\"server\":\"csvsf223\",\"nodetype\":\"DSF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"12.06.2019 13:04:49\",\"verificationTimestampAfter\":\"12.06.2019 13:04:49\",\"configuratorLog\":\" </opt/update/xmlfiles_drf/000010_DRF_Full_20190616T155310.xml>: live_DB = N161214_K2R\\nJun 16 15:54:14 csvmg227 configurator_drf[21342]: NIV0: [CAM PROCESS]: PROCESSING WITH LAB CONFIG\\nJun 16 15:54:18 csvmg227 configurator: EXPORT [TEMPORARY DATABASE -> OK]\\nJun 16 15:54:18 csvmg227 configurator_dsf[21337]: NIV1: main() commande: <./import.sh base bfr2501 TDB1 3307 N161214_K2R N161214_K2R_tmp /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:54:18 csvmg227 configurator_dsf[21337]: NIV0: [CAM PROCESS]: DATABASE CLEAN: SUCCESS (ERR=0, 4124 ms) !\\nJun 16 15:54:18 csvmg227 configurator_dsf[21337]: NIV0: [SQL with error]: insert into OpName (RefOpName,Name,OP_Type,OP_Option,STAT_name,STAT_logo,RefClient,CodeOp) VALUES (1,'AMK2R',5,0,'AMK2R','','','')\\nJun 16 15:54:18 csvmg227 configurator_dsf[21337]: NIV0: [SQL error]: DBD::mysql::st execute failed: Duplicate entry 'AMK2R' for key 'Name' at /home/ultracomp/HALYSultracomp/asmpp/MIGRATION_K2R/MIGR_K2R_COMMON.pm line 1025.\\n\"}"
                },
                {
                    "id": 13,
                    "xml_id": "11",
                    "start_date": "2019-06-16T15:53:12.770+0000",
                    "end_date": "2019-06-16T15:55:10.976+0000",
                    "verdict": "Successful",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DRF",
                    "cluster_type": "secondary",
                    "server": "csvdf221",
                    "response": "{\"verdict\":\"Successful\",\"code\":0,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:54:13\",\"stop_timestamp\":\"16.06.2019 15:55:09\",\"server\":\"csvdf221\",\"nodetype\":\"DRF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"16.06.2019 15:46:35\",\"verificationTimestampAfter\":\"16.06.2019 15:55:04\",\"configuratorLog\":\"svmg227 nb1[21597]: Stopped\\nJun 16 15:55:06 csvmg227 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\\nJun 16 15:55:08 csvmg227 configurator: EXPORT [Check config -> OK]\\nJun 16 15:55:08 csvmg227 configurator: EXPORT [Config exported locally]\\nJun 16 15:55:08 csvmg227 configurator: EXPORT [Export OK on TDRF1]\\nJun 16 15:55:08 csvmg227 configurator: EXPORT [End of csv generation]\\nJun 16 15:55:08 csvmg227 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\\nJun 16 15:55:08 csvmg227 configurator_drf[21342]: NIV1: main() commande: <./export.sh base bfr2501 TDB1 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:55:08 csvmg227 configurator_drf[21342]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (8647 ms) !\\nJun 16 15:55:08 csvmg227 configurator_drf[21342]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/000010_DRF_Full_20190616T155310.xml> : SUCCESS (54005 ms) !\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 9,
            "start_date": "2019-06-16T15:44:54.754+0000",
            "end_date": "2019-06-16T15:44:54.000+0000",
            "orchestration_type": "Full",
            "verdict": "Failed",
            "error": "Orchestration if the secondary nodes failed",
            "nodes": [
                {
                    "id": 6,
                    "xml_id": "6",
                    "start_date": "2019-06-16T15:45:19.924+0000",
                    "end_date": "2019-06-16T15:45:32.632+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DSF",
                    "cluster_type": "secondary",
                    "server": "csvsf223",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:45:20\",\"stop_timestamp\":\"16.06.2019 15:45:31\",\"server\":\"csvsf223\",\"nodetype\":\"DSF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"12.06.2019 13:04:49\",\"verificationTimestampAfter\":\"12.06.2019 13:04:49\",\"configuratorLog\":\"MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [co\\nJun 16 15:45:30 csvmg227 configurator_dsf[19617]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 16 15:45:30 csvmg227 configurator_dsf[19617]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 16 15:45:30 csvmg227 configurator_dsf[19617]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8259, TIME=136 ms)\\n\"}"
                },
                {
                    "id": 7,
                    "xml_id": "9",
                    "start_date": "2019-06-16T15:45:19.925+0000",
                    "end_date": "2019-06-16T15:45:24.125+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DNSF",
                    "cluster_type": "secondary",
                    "server": "csvns229",
                    "response": "{\"verdict\":\"Failed\",\"code\":-1,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:45:21\",\"stop_timestamp\":\"16.06.2019 15:45:22\",\"server\":\"csvns229\",\"nodetype\":\"DNSF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Exception: java.lang.NullPointerException\",\"verificationFile\":\"/etc/named.d/include/named.conf.USAVZ\",\"verificationTimestampBefore\":null,\"verificationTimestampAfter\":null,\"configuratorLog\":null}"
                },
                {
                    "id": 8,
                    "xml_id": "8",
                    "start_date": "2019-06-16T15:45:19.925+0000",
                    "end_date": "2019-06-16T15:45:28.668+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1-ss7f",
                    "node_type": "SS7F",
                    "cluster_type": "secondary",
                    "server": "css7f601",
                    "response": "{\"verdict\":\"Failed\",\"code\":1,\"serviceName\":\"orchestration-service-mg-lau1-ss7f\",\"start_timestamp\":\"16.06.2019 15:45:21\",\"stop_timestamp\":\"16.06.2019 15:45:27\",\"server\":\"css7f601\",\"nodetype\":\"SS7F\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"23.05.2019 06:43:24\",\"verificationTimestampAfter\":\"23.05.2019 06:43:24\",\"configuratorLog\":\"Jun 16 15:45:23 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: START SS7F with user 'ultracomp' PROCESSING FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>: live_DB = SS7F_111017_live\\nJun 16 15:45:23 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: PROCESSING WITH LAB CONFIG\\nJun 16 15:45:26 csvmg609 configurator: EXPORT [TEMPORARY DATABASE -> OK]\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV1: main() commande: <./import.sh base bfr2501 COMMON-DB3DB4 3307 SS7F_111017_live SS7F_111017_live_tmp /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: DATABASE CLEAN: SUCCESS (ERR=0, 3347 ms) !\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: DATABASE INIT: SUCCESS (ERR=0, 8 ms) !\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: START IMPORTATION FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [IMPORT CFG]: ERROR [cam-ss7f NOT found] !!!\\nJun 16 15:45:26 csvmg609 configurator_ss7f[27234]: NIV0: [CAM PROCESS]: STOP IMPORTATION FILE </opt/update/xmlfiles/000009_SS7F_Full_20190616T154518.xml>: 0 warnings & 1 errors (87 ms)\\n\"}"
                },
                {
                    "id": 9,
                    "xml_id": "7",
                    "start_date": "2019-06-16T15:45:19.925+0000",
                    "end_date": "2019-06-16T15:46:41.189+0000",
                    "verdict": "Successful",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DRF",
                    "cluster_type": "secondary",
                    "server": "csvdf221",
                    "response": "{\"verdict\":\"Successful\",\"code\":0,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"16.06.2019 15:45:42\",\"stop_timestamp\":\"16.06.2019 15:46:39\",\"server\":\"csvdf221\",\"nodetype\":\"DRF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"10.06.2019 11:52:04\",\"verificationTimestampAfter\":\"16.06.2019 15:46:35\",\"configuratorLog\":\"svmg227 nb1[19954]: Stopped\\nJun 16 15:46:36 csvmg227 configurator: EXPORT [End of csv generation of ALL configuration files (csv)]\\nJun 16 15:46:38 csvmg227 configurator: EXPORT [Check config -> OK]\\nJun 16 15:46:38 csvmg227 configurator: EXPORT [Config exported locally]\\nJun 16 15:46:38 csvmg227 configurator: EXPORT [Export OK on TDRF1]\\nJun 16 15:46:38 csvmg227 configurator: EXPORT [End of csv generation]\\nJun 16 15:46:38 csvmg227 configurator: EXPORT [CHECK CONFIG and EXPORT TO FRONT SYSTEMS -> OK]\\nJun 16 15:46:38 csvmg227 configurator_drf[19703]: NIV1: main() commande: <./export.sh base bfr2501 TDB1 3307 N161214_K2R_tmp N161214_K2R /home/ultracomp/HALYSultracomp/own/system_halys.conf> executed\\nJun 16 15:46:38 csvmg227 configurator_drf[19703]: NIV0: [CAM PROCESS]: STOP EXPORTATION CONFIG : SUCCESS (8736 ms) !\\nJun 16 15:46:38 csvmg227 configurator_drf[19703]: NIV0: [CAM PROCESS]: END DRF PROCESSING FILE </opt/update/xmlfiles_drf/000009_DRF_Full_20190616T154518.xml> : SUCCESS (54955 ms) !\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 8,
            "start_date": "2019-06-16T15:41:31.148+0000",
            "end_date": "2019-06-16T15:41:31.000+0000",
            "orchestration_type": "Full",
            "verdict": "Failed",
            "error": "com.comfone.cam.orchestration.exceptions.OrchestrationExceptionInternalError:  DRF schema validation failed.s4s-elt-schema-ns: The namespace of element 'schema' must be from the schema namespace, 'http://www.w3.org/2001/XMLSchema'.",
            "nodes": [],
            "tests": []
        },
        {
            "id": 6,
            "start_date": "2019-06-16T15:23:52.982+0000",
            "end_date": "2019-06-16T15:23:52.000+0000",
            "orchestration_type": "Full",
            "verdict": "Failed",
            "error": "Initial test prior orchestration failed",
            "nodes": [],
            "tests": []
        },
        {
            "id": 5,
            "start_date": "2019-06-13T12:56:35.227+0000",
            "end_date": "2019-06-13T12:56:35.000+0000",
            "orchestration_type": "Partial",
            "verdict": "Failed",
            "error": "At least one DSF node failed orchestration",
            "nodes": [
                {
                    "id": 5,
                    "xml_id": "5",
                    "start_date": "2019-06-13T12:56:53.745+0000",
                    "end_date": "2019-06-13T12:57:25.304+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-lau1",
                    "node_type": "DSF",
                    "cluster_type": "secondary",
                    "server": "csvsf223",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-lau1\",\"start_timestamp\":\"13.06.2019 12:57:14\",\"stop_timestamp\":\"13.06.2019 12:57:25\",\"server\":\"csvsf223\",\"nodetype\":\"DSF\",\"cluster\":\"secondary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"12.06.2019 13:04:49\",\"verificationTimestampAfter\":\"12.06.2019 13:04:49\",\"configuratorLog\":\"DATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [conne\\nJun 13 12:57:23 csvmg227 configurator_dsf[25261]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:57:23 csvmg227 configurator_dsf[25261]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:57:23 csvmg227 configurator_dsf[25261]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8247, TIME=134 ms)\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 4,
            "start_date": "2019-06-13T12:55:02.302+0000",
            "end_date": "2019-06-13T12:55:02.000+0000",
            "orchestration_type": "Partial",
            "verdict": "Failed",
            "error": "At least one DSF node failed orchestration",
            "nodes": [
                {
                    "id": 4,
                    "xml_id": "4",
                    "start_date": "2019-06-13T12:55:20.849+0000",
                    "end_date": "2019-06-13T12:55:34.767+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-bau1",
                    "node_type": "DSF",
                    "cluster_type": "primary",
                    "server": "csvsf222",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-bau1\",\"start_timestamp\":\"13.06.2019 12:55:22\",\"stop_timestamp\":\"13.06.2019 12:55:34\",\"server\":\"csvsf222\",\"nodetype\":\"DSF\",\"cluster\":\"primary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"11.04.2019 13:30:46\",\"verificationTimestampAfter\":\"11.04.2019 13:30:46\",\"configuratorLog\":\"DATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [conne\\nJun 13 12:55:33 csvmg226 configurator_dsf[16399]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:55:33 csvmg226 configurator_dsf[16399]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:55:33 csvmg226 configurator_dsf[16399]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8247, TIME=141 ms)\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 3,
            "start_date": "2019-06-13T12:51:38.648+0000",
            "end_date": "2019-06-13T12:51:38.000+0000",
            "orchestration_type": "Partial",
            "verdict": "Failed",
            "error": "At least one DSF node failed orchestration",
            "nodes": [
                {
                    "id": 3,
                    "xml_id": "3",
                    "start_date": "2019-06-13T12:51:57.235+0000",
                    "end_date": "2019-06-13T12:52:09.636+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-bau1",
                    "node_type": "DSF",
                    "cluster_type": "primary",
                    "server": "csvsf222",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-bau1\",\"start_timestamp\":\"13.06.2019 12:51:57\",\"stop_timestamp\":\"13.06.2019 12:52:09\",\"server\":\"csvsf222\",\"nodetype\":\"DSF\",\"cluster\":\"primary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"11.04.2019 13:30:46\",\"verificationTimestampAfter\":\"11.04.2019 13:30:46\",\"configuratorLog\":\"MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [co\\nJun 13 12:52:08 csvmg226 configurator_dsf[16375]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:52:08 csvmg226 configurator_dsf[16375]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:52:08 csvmg226 configurator_dsf[16375]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8247, TIME=135 ms)\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 2,
            "start_date": "2019-06-13T12:45:26.969+0000",
            "end_date": "2019-06-13T12:45:26.000+0000",
            "orchestration_type": "Partial",
            "verdict": "Failed",
            "error": "At least one DSF node failed orchestration",
            "nodes": [
                {
                    "id": 2,
                    "xml_id": "2",
                    "start_date": "2019-06-13T12:45:43.068+0000",
                    "end_date": "2019-06-13T12:45:54.897+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-bau1",
                    "node_type": "DSF",
                    "cluster_type": "primary",
                    "server": "csvsf222",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-bau1\",\"start_timestamp\":\"13.06.2019 12:45:43\",\"stop_timestamp\":\"13.06.2019 12:45:54\",\"server\":\"csvsf222\",\"nodetype\":\"DSF\",\"cluster\":\"primary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"11.04.2019 13:30:46\",\"verificationTimestampAfter\":\"11.04.2019 13:30:46\",\"configuratorLog\":\"MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [co\\nJun 13 12:45:53 csvmg226 configurator_dsf[16331]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:45:53 csvmg226 configurator_dsf[16331]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:45:53 csvmg226 configurator_dsf[16331]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8247, TIME=119 ms)\\n\"}"
                }
            ],
            "tests": []
        },
        {
            "id": 1,
            "start_date": "2019-06-13T12:37:38.002+0000",
            "end_date": "2019-06-13T12:37:38.000+0000",
            "orchestration_type": "Partial",
            "verdict": "Failed",
            "error": "At least one DSF node failed orchestration",
            "nodes": [
                {
                    "id": 1,
                    "xml_id": "1",
                    "start_date": "2019-06-13T12:37:55.298+0000",
                    "end_date": "2019-06-13T12:38:08.134+0000",
                    "verdict": "Failed",
                    "service_name": "orchestration-service-mg-bau1",
                    "node_type": "DSF",
                    "cluster_type": "primary",
                    "server": "csvsf222",
                    "response": "{\"verdict\":\"Failed\",\"code\":0,\"serviceName\":\"orchestration-service-mg-bau1\",\"start_timestamp\":\"13.06.2019 12:37:55\",\"stop_timestamp\":\"13.06.2019 12:38:08\",\"server\":\"csvsf222\",\"nodetype\":\"DSF\",\"cluster\":\"primary\",\"standardOutput\":null,\"errorOutput\":\"Warning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\nWarning: Using a password on the command line interface can be insecure.\\n\",\"verificationFile\":\"/home/ultracomp/etc/ListeBlanche.csv\",\"verificationTimestampBefore\":\"11.04.2019 13:30:46\",\"verificationTimestampAfter\":\"11.04.2019 13:30:46\",\"configuratorLog\":\"MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [connection {log-level} is MANDATORY] [connection {vpmn-routing} is MANDATORY] [connection {hpmn-routing} is MANDATORY] [co\\nJun 13 12:38:06 csvmg226 configurator_dsf[16275]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:38:06 csvmg226 configurator_dsf[16275]: NIV0: [IMPORT CFG]: WARNING !!! ELEMENT imsi-groups->imsi-group NOT IMPLEMENTED !!!\\nJun 13 12:38:06 csvmg226 configurator_dsf[16275]: NIV0: [IMPORT CFG]: ALL imsi-groups LOADED (ERR=8247, TIME=119 ms)\\n\"}"
                }
            ],
            "tests": []
        }
    ]

);

const initialState = {
    axiosinstance: instance,
    password: "",
    username: "",
    startDate: new Date(),
    endDate: new Date(),
    orchestrationList: initialList,
    serverList: [],
    orchestrationTypeList: ["Full", "DRF", "DSF", "SS7F"],
    selectedServerList: [],
    selectedOrchestrationType: "Full",
    error: null
};



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'START_DATE_CHANGED':
            return {
                ...state,
                startDate: action.value
            }
        case 'END_DATE_CHANGED':
            return {
                ...state,
                endDate: action.value
            }
        case 'UPDATE_ORCHESTRATION_LIST':
            return {
                ...state,
                orchestrationList: action.value
            }
        case 'UPDATE_ERROR':
            return {
                ...state,
                error: action.value
            }
        case 'UPDATE_SELECTED_SERVER_LIST':
            return {
                ...state,
                selectedServerList: action.value
            }

        case 'UPDATE_SELECTED_ORCHESTRATION_TYPE':
            return {
                ...state,
                selectedOrchestrationType: action.value,
                serverList: [],
                selectedServerList: []
            }

        case 'UPDATE_SERVER_LIST':
            return {
                ...state,
                serverList: action.value
            }

        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.value
            }

        case 'UPDATE_PASSWORD':
            return {
                ...state,
                password: action.value
            }


        default:
            return state;
    }
};



export default reducer;