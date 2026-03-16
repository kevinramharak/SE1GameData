# `Story Logic` (`343`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `18` |
| Name | [Story_Complex1](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Complex Story ID | `Text` |
| `1` | 102 | `Text` |
| `2` | 102 | `Text` |
| `3` | 102 | `Text` |

### Data

| Complex Story ID | 102 | 102 | 102 |
| --- | --- | --- | --- |
| 0 | 2 | REGKEY.mapPromisesType==1; REGKEY.mapPromisesDemandID==0; REGKEY.mapPromisesRegID==TARGETREGIMEID; (REGKEY.mapPromisesStart+9)<ROUND; | REGKEY.mapPromisesType=0; exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT); |
| 0 | 2 | REGKEY.mapPromisesDemandID==0; REGKEY.mapPromisesType==1;  REGKEY.mapPromisesRegID==TARGETREGIMEID;  (REGKEY.mapPromisesStart+9)>=ROUND; dth(1,100)<50; | exe(346,10,TARGETREGIMEID,GAMEKEY.38,3); |
| 0 | 2 | REGKEY.mapPromisesType==5; REGKEY.mapPromisesRegID==TARGETREGIMEID; chk(249,36,REGKEY.mapPromisesDemandID)==1; chk(249,7,TARGETREGIMEID)>0; | TEMP1=chk(249,7,TARGETREGIMEID); exe(346,8,TEMP1,REGIMEID,1); exe(346,8,TEMP1,REGIMEID,1); REGKEY.mapPromisesType=0; |
| 0 | 0 | REGKEY.mapPromisesType==6; chk(249,36,REGKEY.mapPromisesDemandID)==2; TARGETCHARID=REGKEY.mapPromisesCharId; TARGETCHARSTAT.6>0; | REGKEY.mapPromisesType=0; TARGETCHARID=REGKEY.mapPromisesCharId; TARGETCHARSTAT.20=TARGETCHARSTAT.20*50/100; |
| 0 | 0 | REGKEY.mapPromisesActive==1; ROUND>=(REGKEY.mapPromisesStart+20); | REGKEY.mapPromisesActive=0; REGKEY.mapPromisesType=0; |
| 102 | 3 | REGSTAT.2==ZONESTAT.9; dth(1,100)<REGKEY.militia; REGKEY.militia>50; | TEMP1 = 1+ ((REGKEY.militia-50)/20); ZONEKEY.militancy = min(100,ZONEKEY.militancy + TEMP1); |
| 102 | 3 | REGSTAT.2==ZONESTAT.9; dth(1,100)>REGKEY.militia; REGKEY.militia<50; | TEMP1 = 1+ ((REGKEY.militia-50)/20); ZONEKEY.militancy = max(0,ZONEKEY.militancy - TEMP1); |
| 102 | 0 | chk(249,39,999,9001)<1; REGKEY.militiaCabinetLost==0; | REGKEY.militiaCabinetLost=1; REGKEY.militia = max(0,REGKEY.militia - 40); |
| 102 | 0 | chk(249,39,999,9001)>0; REGKEY.militiaCabinetLost==1; | REGKEY.militiaCabinetLost=0; REGKEY.militia = min(100,REGKEY.militia +25); |
| 103 | 0 | REGIMEKEY.murderInvestigation>0; REGIMKEY.murderProgress<100; | TEMP1= 1+dth(1,10); REGIMEKEY.murderProgress=REGIMEKEY.murderProgress+TEMP1; |
| 103 | 0 | REGIMEKEY.murderProgress>=5000; REGIMKEY.murderProgress<5100; | TEMP1= 1+dth(1,10); REGIMEKEY.murderProgress=REGIMEKEY.murderProgress+TEMP1; |
| 103 | 2 | TARGETREGIMEID==REGIMEKEY.shadowMinor; TARGETREGKEY.majorInfluence>10; dth(1,100)>75; | OTHERREGIMEID=TARGETREGIMEKEY.minorPuppet; TEMP1=OTHERREGIMESTAT.2; exe(346,10,TARGETREGIMEID,TEMP1,2); TARGETREGIMEKEY.foreignVolunteers=ROUND; |
| 103 | 2 | TARGETREGIMEID==REGIMEKEY.shadowMajor; TARGETREGKEY.shadowInfluence>35; dth(1,100)>66; | TEMP1=TARGETREGIMESTAT.2; exe(346,10,TARGETREGIMEID,TEMP1,3); TARGETREGIMEKEY.shadowForces=ROUND; |

