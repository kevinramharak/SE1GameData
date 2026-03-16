## `Story_Unrest.'Danger Story, Epsilon Format 2'` (id = `356`)

### Columns (`6`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | NAME | Text 
| `1` | DECISION NUMBER | Text 
| `2` | IF | Text 
| `3` | SET | Text 
| `4` | TEXT | Text 
| `5` | TALK CODe | Text 

### Rows (`159`)

| NAME | DECISION NUMBER | IF | SET | TEXT | TALK CODe |
| --- | --- | --- | --- | --- | --- |
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2||TEMP20=0; TEMP5=0; TEMP6=0;||0|
|[randomDanger1]|1,2||ROLL=che(249,1,CHARID,21); TEMP11=ROLL;|Technician roll of <CHARNAME> is <TEMP11>.|1|
|[randomDanger2]|1,2||ROLL=che(249,1,CHARID,21); TEMP11=ROLL;|Technician roll of <CHARNAME> is <TEMP11>.|1|
|[randomDanger3]|1,2||ROLL=che(249,1,CHARID,21); TEMP11=ROLL;|Technician roll of <CHARNAME> is <TEMP11>.|1|
|[security1]|1,2||TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL;|Offensive/Defensive tactics roll of <CHARNAME> is <TEMP11>.|1|
|[security2]|1,2||TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL;|Offensive/Defensive tactics roll of <CHARNAME> is <TEMP11>.|1|
|[security3]|1,2||TEMP5=che(249,1,CHARID,36); TEMP8=che(249,1,CHARID,37); ROLL=max(TEMP5,TEMP8); TEMP11=ROLL;|Offensive/Defensive tactics roll of <CHARNAME> is <TEMP11>.|1|
|[health1]|1,2||ROLL=che(249,1,CHARID,22); TEMP11=ROLL;|Medicine roll of <CHARNAME> is <TEMP11>.|1|
|[health2]|1,2||ROLL=che(249,1,CHARID,22); TEMP11=ROLL;|Medicine roll of <CHARNAME> is <TEMP11>.|1|
|[health3]|1,2||ROLL=che(249,1,CHARID,22); TEMP11=ROLL;|Medicine roll of <CHARNAME> is <TEMP11>.|1|
|[culture1]|1,2||ROLL=che(249,1,CHARID,3); TEMP11=ROLL;|Leadership roll of <CHARNAME> is <TEMP11>.|1|
|[culture2]|1,2||ROLL=che(249,1,CHARID,3); TEMP11=ROLL;|Leadership roll of <CHARNAME> is <TEMP11>.|1|
|[culture3]|1,2||ROLL=che(249,1,CHARID,3); TEMP11=ROLL;|Leadership roll of <CHARNAME> is <TEMP11>.|1|
|[culture4]|1,2||ROLL=che(249,1,CHARID,3); TEMP11=ROLL;|Leadership roll of <CHARNAME> is <TEMP11>.|1|
|[randomDanger1#11][randomDanger1#12][randomDanger1#13]|1,2||TEMP20=che(249,1,CHARID,22,1); TEMP6=che(249,1,CHARID,41,1);||1|
|[randomDanger1#11][randomDanger1#12][randomDanger1#13]|1,2|TEMP20>0|ROLL=ROLL+TEMP20|Medical Skill bonus +<TEMP20>.|1|
|[randomDanger1#11][randomDanger1#12][randomDanger1#13]|1,2|TEMP6>0|ROLL=ROLL+TEMP6|Ecology Skill bonus +<TEMP6>.|1|
|[randomDanger2#21][randomDanger2#22][randomDanger2#23][randomDanger2#24]|1,2||TEMP20=che(249,1,CHARID,7,1)||1|
|[randomDanger2#21][randomDanger2#22][randomDanger2#23][randomDanger2#24]|1,2|TEMP20>0|ROLL=ROLL+TEMP20|Survival Skill bonus +<TEMP20>.|1|
|[randomDanger3#31]|1,2||TEMP20=che(249,1,CHARID,27,1); ROLL=ROLL+TEMP20;|Scavenging Skill bonus +<TEMP20>.|1|
|[randomDanger3#32]|1,2||TEMP20=che(249,1,CHARID,26,1); ROLL=ROLL+TEMP20;|Prospecting Skill bonus +<TEMP20>.|1|
|[randomDanger3#33]|1,2||TEMP20=che(249,1,CHARID,23,1); ROLL=ROLL+TEMP20;|Demolitions Skill bonus +<TEMP20>.|1|
|[randomDanger3#34]|1,2||TEMP20=che(249,1,CHARID,25,1); ROLL=ROLL+TEMP20;|Science Skill bonus +<TEMP20>.|1|
|[health1#71]|1,2||TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20;|Technician Skill bonus +<TEMP20>.|1|
|[health1#72]|1,2||TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20;|Technician Skill bonus +<TEMP20>.|1|
|[health1#73]|1,2||TEMP20=che(249,1,CHARID,21,1); ROLL=ROLL+TEMP20;|Technician Skill bonus +<TEMP20>.|1|
|[health2#81]|1,2||TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20;|Leadership Skill bonus +<TEMP20>.|1|
|[health2#82]|1,2||TEMP20=che(249,1,CHARID,3,1); ROLL=ROLL+TEMP20;|Leadership Skill bonus +<TEMP20>.|1|
|[health3#91]|1,2||TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20;|Ecology Skill bonus +<TEMP20>.|1|
|[health3#92]|1,2||TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20;|Ecology Skill bonus +<TEMP20>.|1|
|[health3#93]|1,2||TEMP20=che(249,1,CHARID,41,1); ROLL=ROLL+TEMP20;|Ecology Skill bonus +<TEMP20>.|1|
|[culture2#101]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture2#102]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture2#103]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture3#111]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture3#112]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture3#113]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture4#121]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[culture4#122]|1,2||TEMP20=che(249,1,CHARID,2,1); ROLL=ROLL+TEMP20;|Diplomacy Skill bonus +<TEMP20>.|1|
|[randomDanger1]|1,2||DIFF=dth(4,40)||1|
|[randomDanger2]|1,2||DIFF=30+dth(4,40)||1|
|[randomDanger3]|1,2||DIFF=30+dth(4,40)||1|
|[randomDanger1#11]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to difficulty of handling alien lifeforms.|1|
|[randomDanger1#12]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to difficulty of handling high hazard alien lifeforms.|1|
|[randomDanger1#13]|1,2||DIFF=DIFF+40|Difficulty increased with +40 due to difficulty of handling extremely high hazard alien lifeforms.|1|
|[randomDanger2#21]|1,2||DIFF=DIFF+15|Difficulty increased with +15 due to difficulty of repairs in extreme low pressure or vacuum atmosphere.|1|
|[randomDanger2#22]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to difficulty of repairs in a very toxic atmosphere.|1|
|[randomDanger2#23]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to difficulty of repairs in very hot temperatures.|1|
|[randomDanger2#24]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to difficulty of repairs in very freezing temperatures.|1|
|[randomDanger3#31]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to the weirdness of the malfunctioning machine.|1|
|[randomDanger3#32]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to difficulty of emergency tunneling in hazardous underground environment.|1|
|[randomDanger3#33]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to difficulty of stopping such a violent explosive chain-reaction.|1|
|[randomDanger3#34]|1,2||DIFF=DIFF+40|Difficulty increased with +40 due to difficulty of working with radioactive materials.|1|
|[health1#71]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to the complexity of the problem.|1|
|[health1#72]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to the complexity of the problem.|1|
|[health1#73]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to the complexity of the problem.|1|
|[health2#81]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to the stubbornness of the Populace.|1|
|[health2#82]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to the low education level of the poor.|1|
|[health3#91]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to difficulty of working with alien chemistry.|1|
|[health3#92]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to difficulty of working with alien chemistry.|1|
|[health3#93]|1,2||DIFF=DIFF+40|Difficulty increased with +40 due to difficulty of working with alien chemistry.|1|
|[security1#41]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to difficulty with facing organized troops from across the border.|1|
|[security1#42]|1,2||DIFF=DIFF+35|Difficulty increased with +35 due to difficulties with collatoral damage.|1|
|[security2#51]|1,2||DIFF=DIFF+15|Difficulty increased with +15 due to difficulty with facing organized troops from across the border.|1|
|[security2#52]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to difficulty of engaging experienced cadres that know the terrain well. |1|
|[security2#53]|1,2||DIFF=DIFF+40|Difficulty increased with +40 due to difficulty of working with radioactive materials.|1|
|[security3#61]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to facing organized Slavers from across the border.|1|
|[culture2#101]|1,2||DIFF=DIFF+10|Difficulty increased with +10 due to complexity of inter-clan relations.|1|
|[culture2#102]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to complexity of inter-clan relations.|1|
|[culture2#103]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to complexity of inter-clan relations.|1|
|[culture3#111]|1,2||DIFF=DIFF+15|Difficulty increased with +15 due to the extremeness of cannibalism.|1|
|[culture3#112]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to insanity of the violence.|1|
|[culture3#113]|1,2||DIFF=DIFF+45|Difficulty increased with +45 due to the fact that there are no good counter arguments.|1|
|[culture4#121]|1,2||DIFF=DIFF+20|Difficulty increased with +20 due to them having morale highground.|1|
|[culture4#122]|1,2||DIFF=DIFF+30|Difficulty increased with +30 due to hunger impacting reason.|1|
|[security1]|1,2||DIFF=30+dth(4,40)||1|
|[security2]|1,2||DIFF=60+dth(4,40)||1|
|[security3]|1,2||DIFF=90+dth(4,40)||1|
|[health1]|1,2||DIFF=30+dth(4,40)||1|
|[health2]|1,2||DIFF=60+dth(4,40)||1|
|[health3]|1,2||DIFF=90+dth(4,40)||1|
|[culture1]|1,2||DIFF=dth(4,40)||1|
|[culture2]|1,2||DIFF=30+dth(4,40)||1|
|[culture3]|1,2||DIFF=60+dth(4,40)||1|
|[culture4]|1,2||DIFF=60+dth(4,40)||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|dth(1,100)<GAMEKEY.42|DIFF=DIFF+20|Difficulty increased with +20 due to the situation being much more complicated than initially expected.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|dth(1,100)<(GAMEKEY.42*2); ZONEKEY.fear>dth(3,10);|DIFF=DIFF+30|Difficulty increased with +30 due to Fear and some staff being too hesitant to act.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|dth(1,100)<(GAMEKEY.42*2); ZONEKEY.unrest>dth(3,10);|DIFF=DIFF+40|Difficulty increased with +40 due to Unrest and the Population resisting efforts.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1||ROLL=ROLL+50; TEMP19=ROLL;|Roll increased with +50 due to your support. Adjusted roll is <TEMP19>.|1|
|[security1][security2][security3]|1,2|ZONEKEY.security>5 | chk(249,4,ZONEID,REGID,1)>2|TEMP9=chk(249,4,ZONEID,REGID,1); TEMP9=TEMP9/3; TEMP9=min(TEMP9,20); TEMP9=TEMP9+min(20,(ZONEKEY.qol_security/5)); ROLL=ROLL+TEMP9; TEMP15=ROLL;|Roll increased with +<TEMP9> due to Security Score and/or Troops in Zone. Adjusted roll is <TEMP15>.|1|
|[health1][health2][health3]|1,2|ZONEKEY.health>5|TEMP9=ZONEKEY.qol_health/5; ROLL=ROLL+TEMP9; TEMP15=ROLL;|Roll increased with +<TEMP9> due to Health Score in Zone. Adjusted roll is <TEMP15>.|1|
|[culture1][culture2][culture3][culture4]|1,2|ZONEKEY.education>5|TEMP9=ZONEKEY.qol_education/5; ROLL=ROLL+TEMP9; TEMP15=ROLL;|Roll increased with +<TEMP9> due to Education Score in Zone. Adjusted roll is <TEMP15>.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|REGKEY.enforcement>40|TEMP13=REGKEY.enforcement-40; ROLL=ROLL+TEMP13; TEMP16=ROLL;|Roll increased with +<TEMP13> due to Enforcement Profile. Adjusted roll is <TEMP16>.||
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2||TEMP17=ROLL;|Final Roll <TEMP17> versus Difficulty <DIFF>.|1|
|[randomDanger1]|1,2||TEMP5=1; TEMP8=10;||1|
|[randomDanger2]|1,2||TEMP5=2; TEMP8=20;||1|
|[randomDanger3]|1,2||TEMP5=4; TEMP8=40;||1|
|[security1]|1,2||TEMP5=1;TEMP8=10;||1|
|[security2]|1,2||TEMP5=2;TEMP8=20;||1|
|[security3]|1,2||TEMP5=4; TEMP8=40;||1|
|[health1]|1,2||TEMP5=1;TEMP8=10;||1|
|[health2]|1,2||TEMP5=1;TEMP8=20;||1|
|[health3]|1,2||TEMP5=5; TEMP8=40;||1|
|[culture1]|1,2||TEMP5=1;TEMP8=10;||1|
|[culture2]|1,2||TEMP5=1;TEMP8=20;||1|
|[culture3]|1,2||TEMP5=5; TEMP8=40;||1|
|[culture4]|1,2||TEMP5=3; TEMP8=10;||1|
|[randomDanger1#12]|1,2||TEMP5=TEMP5*2||1|
|[randomDanger1#13]|1,2||TEMP5=TEMP5*4||1|
|[randomDanger2#21]|1,2||TEMP5=TEMP5*GAMEKEY.76/3||1|
|[randomDanger2#22]|1,2||TEMP5=TEMP5*GAMEKEY.76/2||1|
|[randomDanger3#33]|1,2||TEMP5=TEMP5*2||1|
|[randomDanger3#34]|1,2||TEMP5=TEMP5*3||1|
|[security1#41]|1,2||TEMP5=TEMP5*2||1|
|[security1#42]|1,2||TEMP5=TEMP5*3||1|
|[security2#51]|1,2||TEMP5=TEMP5*2||1|
|[security2#52]|1,2||TEMP5=TEMP5*2||1|
|[security2#53]|1,2||TEMP5=TEMP5*2||1|
|[security3#61]|1,2||TEMP5=TEMP5*2||1|
|[health1#71]|1,2||TEMP5=TEMP5*2||1|
|[health1#72]|1,2||TEMP5=TEMP5*3||1|
|[health1#73]|1,2||TEMP5=TEMP5*2||1|
|[health2#81]|1,2||TEMP5=TEMP5*3||1|
|[health2#82]|1,2||TEMP5=TEMP5*2||1|
|[health3#91]|1,2||TEMP5=TEMP5*2||1|
|[health3#92]|1,2||TEMP5=TEMP5*3||1|
|[health3#93]|1,2||TEMP5=TEMP5*4||1|
|[culture2#101]|1,2||TEMP5=TEMP5*2||1|
|[culture2#102]|1,2||TEMP5=TEMP5*3||1|
|[culture2#103]|1,2||TEMP5=TEMP5*4||1|
|[culture3#111]|1,2||TEMP5=TEMP5*2||1|
|[culture3#112]|1,2||TEMP5=TEMP5*3||1|
|[culture3#113]|1,2||TEMP5=TEMP5*4||1|
|[culture4#122]|1,2||TEMP5=TEMP5*2||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ROLL>=DIFF|RESULT=2; TEMP8=TEMP8/3; TEMP1=TEMP5;||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ROLL>=(DIFF+50)|RESULT=1; TEMP8=0; TEMP1=TEMP5/3;||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ROLL<DIFF|RESULT=3; TEMP8=TEMP8; TEMP1=dth(TEMP5,2);||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ROLL<(DIFF-50)|RESULT=4; TEMP8=TEMP8*2;  TEMP1=dth(TEMP5,4);||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|RESULT==2||Success! I managed to limit the damage substantially.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|RESULT==3||Failure! Our efforts did not have much effect.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|RESULT==1||Critical Success! The damage was reduced to almost nothing.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|RESULT==4||Critical Failure! Our efforts backfired and the ensuing chaos caused more harm.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|TEMP8>0|TEMP12=inv(ZONEKEY.danger,TEMP8); ZONEKEY.danger=ZONEKEY.danger+TEMP12;|Danger increased by +<TEMP12>.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3]|1,2|TEMP8>5; ROLL<DIFF;|TEMP10=inv(ZONEKEY.unrest,dth(1,TEMP8)); TEMP10=TEMP10/3; TEMP10=TEMP10+1; ZONEKEY.unrest=ZONEKEY.unrest+TEMP10;|Unrest increased by +<TEMP10>.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|TEMP8==0||Danger did NOT increase.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2||TEMP2=(ZONEKEY.pop*TEMP1)/100; TEMP3=(ZONEKEY.worker*TEMP1)/100; ||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|TEMP2>0|TEMP2=min(TEMP2,chk(226,TEMP2,1,4)); ZONEKEY.pop=ZONEKEY.pop-TEMP2;|<TEMP2>00 population lost.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|TEMP3>0|TEMP3=min(TEMP3,chk(226,TEMP3,1,4)); ZONEKEY.worker=ZONEKEY.worker-TEMP3;|<TEMP3>00 workers lost.|1|
|[security1]|1,2||TEMP8=ZONEKEY.privateFood/3; TEMP14=ZONEKEY.privateMetal/2; TEMP4=ZONEKEY.popCredits/3; TEMP7=ZONEKEY.privateOil/2;||1|
|[security1]|1,2|TEMP2>0|ZONEKEY.privateFood=ZONEKEY.privateFood-TEMP8;|<TEMP8> private Food got stolen.|1|
|[security1]|1,2|TEMP3>0|ZONEKEY.privateMetal=ZONEKEY.privateMetal-TEMP14;|<TEMP14> private Metal got stolen.|1|
|[security1]|1,2|TEMP4>0|ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP4;|<TEMP4> private Credits got stolen.|1|
|[security1]|1,2|TEMP5>0|ZONEKEY.privateOil=ZONEKEY.privateOil-TEMP7;|<TEMP7> private Oil got stolen.|1|
|[culture1]|1,2||TEMP21=dth(5,6);||1|
|[culture1]|1,2|TEMP2>0|ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP21;|Public production penalty of <TEMP21>% incurred.|1|
|[culture4]|1,2|ROLL>=DIFF|TEMP21=dth(1,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21;|Unrest went up with +<TEMP21>.|1|
|[culture4]|1,2|ROLL<DIFF|TEMP21=dth(4,10); ZONEKEY.unrest=ZONEKEY.unrest+TEMP21;|Unrest went up with +<TEMP21>.|1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ZONEKEY.unrest>100|ZONEKEY.unrest=100||1|
|[randomDanger1][randomDanger2][randomDanger3][security1][security2][security3][health1][health2][health3][culture1][culture2][culture3][culture4]|1,2|ZONEKEY.danger>100|ZONEKEY.danger=100||1|

