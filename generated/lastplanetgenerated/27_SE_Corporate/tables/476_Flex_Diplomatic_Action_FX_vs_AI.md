# `Flex Diplomatic Action FX vs AI` (`476`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `27` |
| Name | [SE_Corporate](../) |
| Library ID | `476` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Card ID | `Text` |
| `1` | IF Logic | `Text` |
| `2` | SET Logic | `Text` |
| `3` | Text | `Text` |
| `4` | Talk Code | `Text` |
| `5` | group code | `Text` |
| `6` | mouse over | `Text` |
| `7` | temp | `Text` |

### Data

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | mouse over | temp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [100201] |  | REGKEY.corp_meeting=1; | Yes sir, I scheduled a meeting to talke with the CEO of <LOOKUPCHARLASTNAME=<TEMP5>> Corporation. Expect it next turn. | 1 | 1 | Schedules a meeting with the CEO for next turn. |  |
| [100201][100202][100203][100204][100205][100206][100207][100208][100209][100210] |  | TEMP5=REGKEY.corp_leader; |  |  |  |  |  |
| [100202] |  | exe(346,20,TARGETCHARID,100201) | Grace to you <TARGETCHARNAME> joined the board of <LOOKUPCHARLASTNAME=<TEMP5>> Corporation. | 1 | 1 | Makes selected Leader a Board Member. |  |
| [100202] |  | TEMP1=dth(5,10); TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP1; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | <TARGETCHARNAME> is pleased and relation went up with <TEMP1> points. | 1 | 2 | Will increase Relation with Leader with +5d10 points. |  |
| [100203] |  | TEMP9=dth(1,6); REGKEY.corp_relation=max(0,REGKEY.corp_relation-TEMP9); | Relation with Corporation decreased with <TEMP9> points. | 1 | 4 | Relation with Corporation will diminish with 1d6. |  |
| [100203] | RESULT=4 | TEMP2=ZONEKEY.corp_control*dth(2,10); TEMP2=TEMP2+dth(1,4); ZONEKEY.corp=ZONEKEY.corp_control+TEMP2; ZONEKEY.corp=min(100,ZONEKEY.corp_control); | Corporation Control increased with +<TEMP2> points. | 1 | 3 | Corporation Control in Zone will be diminished. |  |
| [100203] | TEMP3>0 | TEMP2=ZONEKEY.corp_control*dth(2,20)/TEMP3; TEMP2=TEMP2+dth(TEMP6,6); TEMP2=min(TEMP2,ZONEKEY.corp_control); ZONEKEY.corp_control=ZONEKEY.corp_control-TEMP2; | We reduced Corporation Control with -<TEMP2> points. | 1 | 3 |  |  |
| [100203] | RESULT==4 |  | Critical Failure! The Corporation blocked our legal measures very effectively. | 1 | 2 |  |  |
| [100203] | RESULT==1 |  | Critical Success! The Corporation put up little defense. Effect of the operations has been doubled! | 1 | 2 |  |  |
| [100203] | RESULT==3 |  | Failure! The operations did not go well. | 1 | 2 |  |  |
| [100203] | RESULT==2 |  | Successful Skill Roll! The operations went well. | 1 | 2 |  |  |
| [100203] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [100203] | ROLL<(DIFF-50) | RESULT=4; TEMP3=0; TEMP6=0; |  |  |  | A critical failure (roll 50 below difficulty) will result in the task being executed having the opposite effect. |  |
| [100203] | ROLL<DIFF | RESULT=3; TEMP3=0; TEMP6=0; |  |  |  | A failure will result in the task being executed having no effect. |  |
| [100203] | ROLL>=(DIFF+50) | RESULT=1; TEMP3=50; TEMP6=2; |  |  |  | A critical success (roll 50 above difficulty) will result in doubling the effect of the task. |  |
| [100203] | ROLL>=DIFF | RESULT=2; TEMP3=100; TEMP6=1; |  |  |  | A success will result in normal execution of task. |  |
| [100203] |  | ROLL=che(249,1,CHARID,17) |  |  |  | A Resist Influence Skill Roll will be made by <CHARNAME>. |  |
| [100203] |  | DIFF=(REGKEY.corp_savy+REGKEY.corp_toughness)/2 |  |  |  |  |  |
| [100204] |  | TARGETCHARID=che(249,24,2,0,16); |  |  |  |  |  |
| [100204] |  | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.38=30+dth(2,10); TARGETCHARPROFILE.commerce=dth(1,3)+3; TARGETCHARPROFILE.enforcement=3; | We successfully recruited a Corporate Scientist into our ranks. You'll find the new Scientist in the Reserve Pool. | 1 | 1 | A Leader chosen by the Corporation will join the Reserve Pool. |  |
| [100205] |  | TEMP1=che(249,8,REGIMEID,1); exe(346,19,REGIMEID,TEMP1); | Corporate research delivered us the technology of <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Gives you a free fully researched Tech |  |
| [100206] |  | TEMP1=che(249,21,REGIMEID,1); exe(346,28,REGIMEID,TEMP1); | Corporate research discovered us the technology of <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Gives you a free Tech discovery |  |
| [100207] |  | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.37=30+dth(2,10); TARGETCHARPROFILE.commerce=dth(1,3)+3; TARGETCHARPROFILE.enforcement=3; | We successfully recruited a Corporate Manager into our ranks. You'll find the new Manager in the Reserve Pool. | 1 | 1 | A Leader chosen by the Corporation will join the Reserve Pool. |  |
| [100207] |  | TARGETCHARID=che(249,24,2,0,17); |  |  |  |  |  |
| [100208] |  | TEMP1=che(249,22,ZONEID); |  |  |  |  |  |
| [100208] | TEMP1<1; |  | The Corporation is quite sure that there are no hidden resources left in this Zone. | 1 | 2 |  |  |
| [100208] | TEMP1==1; |  | The Corporation found Oil Deposits in <ZONENAME>. | 1 | 2 | If possible the Corporation will find a new Resource hex in the Zone. |  |
| [100208] | TEMP1==2; |  | The Corporation found Metal Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==3; |  | The Corporation found Rare Metal Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==4; |  | The Corporation found Radioactive Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==5; |  | The Corporation found Water Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1>5; |  | The Corporation found new Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100209] |  | TEMP6=min(TEMP6,ZONEKEY.syndicate_crew); ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew-TEMP6; | The Corporation eliminated <TEMP6> Syndicate Crews in <ZONENAME>. | 1 | 1 | Corporation will try to eliminate as many Syndicate Crews in the Zone as possible |  |
| [100209] | TEMP3<TEMP4 | TEMP6=dth(1,6); |  |  |  |  |  |
| [100209] | TEMP3>=TEMP4 | TEMP6=dth(2,10); |  |  |  |  |  |
| [100209] |  | TEMP1=TEMP1*10;TEMP2=TEMP2*10; |  |  |  |  |  |
| [100209] |  | TEMP1=REGKEY.corp_toughness*ZONEKEY.corp_control/100; TEMP2=REGKEY.syndicate_toughness*ZONEKEY.syndicate_crimeLevel/100; |  |  |  |  |  |
| [100209] |  | TEMP3=dth(1,TEMP1); TEMP4=dth(1,TEMP2); |  |  |  |  |  |
| [100210] | TEMP3<TEMP4 | TEMP6=dth(2,6); |  |  |  |  |  |
| [100210] |  | TEMP1=REGKEY.corp_savy*ZONEKEY.corp_control/100; TEMP2=ZONEKEY.unrest; |  |  |  |  |  |
| [100210] |  | TEMP1=TEMP1*10;TEMP2=TEMP2*10; |  |  |  |  |  |
| [100210] |  | TEMP3=dth(1,TEMP1); TEMP4=dth(1,TEMP2); |  |  |  |  |  |
| [100210] | TEMP3>=TEMP4 | TEMP6=dth(4,10); |  |  |  |  |  |
| [100210] |  | TEMP6=min(TEMP6,ZONEKEY.unrest); ZONEKEY.unrest=ZONEKEY.unrest-TEMP6; | The Corporation reduced Unrest with <TEMP6> in <ZONENAME>. | 1 | 1 | Corporation will reduce Unrest in the Zone as much as possible |  |

