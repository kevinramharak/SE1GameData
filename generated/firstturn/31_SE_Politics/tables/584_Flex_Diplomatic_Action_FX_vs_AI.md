# `Flex Diplomatic Action FX vs AI` (`584`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `31` |
| Name | [SE_Politics](../) |
| Library ID | `584` |

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
| [2590] |  | TEMP2=1 |  |  |  | Will install 1 counter intelligence Spy in the Zone. |  |
| [2591] |  | TEMP2=3 |  |  |  | Will install 3 counter intelligence Spies in the Zone. |  |
| [2591][2592][2590] |  | REGZONEKEY.counterspies = REGZONEKEY.counterspies + TEMP2 | Success! We managed to install our counter-intelligence spies into <ZONENAME>. | 1 |  |  |  |
| [2592] |  | TEMP2=6 |  |  |  | Will install 6 counter intelligence Spies in the Zone. |  |
| [2594] |  | DIFF=80-REGREGKEY.relation |  |  |  | Difficulty is 80 minus your relation level. |  |
| [2594] |  | TEMP2=2 |  |  |  |  |  |
| [2594][2595][2596] | TARGETMAJOR!=1 | DIFF=DIFF/2; |  |  |  | Difficulty is halved against Minor Zones. |  |
| [2594][2595][2596] |  | ROLL=che(249,1,CHARID,40) |  |  |  | A covert ops skill roll will be made by <CHARNAME>. |  |
| [2594][2595][2596] | ROLL>=DIFF | RESULT=2; TEMP1=0; |  |  |  | A success will result in infiltrating your spy. |  |
| [2594][2595][2596] | ROLL>=(DIFF+50) | RESULT=1; TEMP2=TEMP2*2;  TEMP1=0; |  |  |  | A critical success (roll 50 above difficulty) will result in infiltrating double the number of spies. |  |
| [2594][2595][2596] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [2594][2595][2596] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [2594][2595][2596] | RESULT==2 |  | Success! We managed to infiltrate our spies into <ZONENAME>. | 1 | 1 |  |  |
| [2594][2595][2596] | RESULT==3 |  | Failure! We did not infiltrate our spies into <ZONENAME>. Luckily we escaped detection of our covert operations. | 1 | 1 |  |  |
| [2594][2595][2596] | RESULT==1 |  | Critical Success! We managed to infiltrate double the number of spies initially planned into <ZONENAME>. | 1 | 1 |  |  |
| [2594][2595][2596] | RESULT==4 |  | Critical Failure! Our infiltration attempt was discovered by <TARGETREGIMENAME> and they took insult with our attempt to spy on them. | 1 | 1 |  |  |
| [2594][2595][2596] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [2594][2595][2596] |  | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1)) |  |  |  |  |  |
| [2594][2595][2596] | RESULT<=2 | REGZONEKEY.spies = REGZONEKEY.spies + TEMP2 |  |  |  |  |  |
| [2595] |  | TEMP2=6 |  |  |  |  |  |
| [2595] |  | DIFF=100-REGREGKEY.relation |  |  |  | Difficulty is 100 minus your relation level. |  |
| [2596] |  | TEMP2=12 |  |  |  |  |  |
| [2596] |  | DIFF=120-REGREGKEY.relation |  |  |  | Difficulty is 120 minus your relation level. |  |
| [2791] |  | TEMP1 = REGKEY.democracy |  |  |  |  |  |
| [2791] |  | REGKEY.democracy = TEMP1; | Increased Democracy Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2791][2792][2793][2794][2795][2796][2797][2798][2799] |  | TEMP2=dth(3,6); TEMP2=TEMP2*REGKEY.virtus; TEMP2=TEMP2/1000; TEMP3=TEMP1; TEMP1=TEMP1+TEMP2; TEMP1=min(100,TEMP1); TEMP4=TEMP1-TEMP3; |  |  |  | Will increase this Regime Profile with +3d6 modified downwards for suboptimal Virtus. |  |
| [2792] |  | TEMP1 = REGKEY.meritocracy |  |  |  |  |  |
| [2792] |  | REGKEY.meritocracy = TEMP1; | Increased Meritocrac Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2793] |  | TEMP1 = REGKEY.autocracy |  |  |  |  |  |
| [2793] |  | REGKEY.autocracy = TEMP1; | Increased Autocracy Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2794] |  | TEMP1 = REGKEY.commerce |  |  |  |  |  |
| [2794] |  | REGKEY.commerce = TEMP1; | Increased Commerce Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2795] |  | REGKEY.enforcement = TEMP1; | Increased Enforcement Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2795] |  | TEMP1 = REGKEY.enforcement |  |  |  |  |  |
| [2796] |  | REGKEY.government = TEMP1; | Increased Government Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2796] |  | TEMP1 = REGKEY.government |  |  |  |  |  |
| [2797] |  | REGKEY.fist = TEMP1; | Increased Fist Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2797] |  | TEMP1 = REGKEY.fist |  |  |  |  |  |
| [2798] |  | REGKEY.mind = TEMP1; | Increased Mind Profile with +<TEMP4>. | 1 | 1 |  |  |
| [2798] |  | TEMP1 = REGKEY.mind |  |  |  |  |  |
| [2799] |  | TEMP1 = REGKEY.heart |  |  |  |  |  |
| [2799] |  | REGKEY.heart = TEMP1; | Increased Heart Profile with +<TEMP4>. | 1 | 1 |  |  |
| [961] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [961] | RESULT==2 |  | Success! We have retrieved the information, but for this round only. | 1 | 4 |  |  |
| [961] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |
| [961] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL>. | 1 | 2 |  |  |
| [961] |  | DIFF=dth(2,50) + (REGKEY.compuLevel*40) | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [961] | ROLL>=(DIFF+25) | RESULT=1; TEMP2=ROLL-DIFF; TEMP1=ROUND + dth(TEMP2/25,3); |  |  |  |  |  |
| [961] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  |  |  |
| [961] | ROLL>=DIFF | RESULT=2; TEMP1=ROUND; |  |  |  |  |  |
| [961] | RESULT==3 |  | Failure! Information in unretrievable. Sadly. | 1 | 4 |  |  |
| [961] | RESULT==1 |  | Critical Success! We have retrieved! Information will be available up to round <TEMP1>. | 1 | 4 |  |  |
| [961] |  | TARGETCHARKEY.compuInfo=TEMP1; |  |  |  |  |  |
| [961] | ROLL<(DIFF-50) | RESULT=3;  TEMP1=0; |  |  |  |  |  |
| [962] |  | DIFF=dth(3,50) + (REGKEY.compuLevel*60) | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [962] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL>. | 1 | 2 |  |  |
| [962] | RESULT==2 |  | Success! We have succesfully put the Computer in Maintenance mode for the remainder of this turn. | 1 | 4 |  |  |
| [962] | ROLL>=DIFF | RESULT=2; |  |  |  |  |  |
| [962] | ROLL>=(DIFF+25) | RESULT=2; |  |  |  |  |  |
| [962] | ROLL<DIFF | RESULT=3; |  |  |  |  |  |
| [962] | ROLL<(DIFF-50) | RESULT=3; |  |  |  |  |  |
| [962] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [962] | RESULT==3 |  | Failure! The Computer refused to be put in Maintenance Mode. | 1 | 4 |  |  |
| [962] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |
| [962] |  | REGKEY.compuMaintenance=REGKEY.compuLevel; REGKEY.compuLevel=0; |  |  |  |  |  |
| [963] | TEMP6<=TEMP5; TEMP6<=TEMP7; REGIMEFEAT.464<1; | TEMP8=2; TEMP9=TEMP6; |  |  |  |  |  |
| [963] | TEMP7<=TEMP6; TEMP7<=TEMP5; REGIMEFEAT.474<1; | TEMP8=3; TEMP9=TEMP7; |  |  |  |  |  |
| [963] | REGIMEFEAT.473>0 | TEMP7=3; TEMP4=474; |  |  |  |  |  |
| [963] | REGIMEFEAT.472>0 | TEMP7=2; TEMP4=473; |  |  |  |  |  |
| [963] | REGIMEFEAT.471>0 | TEMP7=1; TEMP4=472; |  |  |  |  |  |
| [963] |  | TEMP7=0; TEMP4=471; |  |  |  |  |  |
| [963] | REGIMEFEAT.464>0 | TEMP6=4; |  |  |  |  |  |
| [963] | REGIMEFEAT.463>0 | TEMP6=3; TEMP4=464; |  |  |  |  |  |
| [963] | REGIMEFEAT.461>0 | TEMP6=1; TEMP4=462; |  |  |  |  |  |
| [963] |  | TEMP6=0; TEMP4=461; |  |  |  |  |  |
| [963] | REGIMEFEAT.454>0 | TEMP5=4; |  |  |  |  |  |
| [963] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |
| [963] | REGIMEFEAT.453>0 | TEMP5=3; TEMP4=454; |  |  |  |  |  |
| [963] | REGIMEFEAT.452>0 | TEMP5=2; TEMP4=453; |  |  |  |  |  |
| [963] | REGIMEFEAT.451>0 | TEMP5=1; TEMP4=452; |  |  |  |  |  |
| [963] | REGIMEFEAT.462>0 | TEMP6=2; TEMP4=463; |  |  |  |  |  |
| [963] |  | TEMP5=0; TEMP4=451; |  |  |  |  |  |
| [963] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. | 1 | 2 |  |  |
| [963] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [963] |  | TEMP19=(REGKEY.compuLevel*50); |  |  |  |  |  |
| [963] | TEMP19>0 | ROLL=ROLL+ TEMP19 | Computer Level Bonus of +<TEMP19>. Adjusted Roll = <ROLL> |  |  |  |  |
| [963] |  | DIFF=dth(3,50) + (TEMP9*60) | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [963] | ROLL>=DIFF | RESULT=2; |  |  |  |  |  |
| [963] | ROLL>=(DIFF+25) | RESULT=2; |  |  |  |  |  |
| [963] | ROLL<DIFF | RESULT=3; |  |  |  |  |  |
| [963] | ROLL<(DIFF-50) | RESULT=3; |  |  |  |  |  |
| [963] | RESULT==2;TEMP8==1; TEMP9==1; |  | Success! We have succesfully put the Computer in Maintenance mode for the remainder of this turn. | 1 | 4 |  |  |
| [963] | RESULT==2;TEMP8==1; TEMP9==2; |  | Success! We have succesfully put the Computer in Maintenance mode for the remainder of this turn. | 1 | 4 |  |  |
| [963] | RESULT==2;TEMP8==1; TEMP9==1; |  | Success! We have succesfully put the Computer in Maintenance mode for the remainder of this turn. | 1 | 4 |  |  |
| [963] | RESULT==3; |  | Failure! We have not succeeded to upgrade the Computer. | 1 | 4 |  |  |
| [963] | TEMP5<=TEMP6; TEMP5<=TEMP7; REGIMEFEAT.454<1; | TEMP8=1; TEMP9=TEMP5; |  |  |  |  |  |
| [963] | RESULT==2 | exe(346,38,REGID,TEMP4); |  |  |  |  |  |
| [963] | RESULT==2; TEMP9>0; | exe(346,38,REGID,TEMP4-1); |  |  |  |  |  |
| [963] | REGIMEFEAT.474>0 | TEMP7=4; |  |  |  |  |  |
| [964] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [964] |  | TEMP20=CHARKEY.clearanceLevel*30; |  |  |  |  |  |
| [964] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL> | 1 | 2 |  |  |
| [964] |  | DIFF=dth(5,50) + (REGKEY.compuLevel*50) | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [964] | ROLL>=DIFF | RESULT=2; |  |  |  |  |  |
| [964] | ROLL>=(DIFF+25) | RESULT=2; |  |  |  |  |  |
| [964] | ROLL<DIFF | RESULT=3; |  |  |  |  |  |
| [964] | ROLL<(DIFF-50) | RESULT=4; |  |  |  |  |  |
| [964] | RESULT==2 | exe(346,59,0,0); | Success! We actually managed to do it! The Computer is dead as can be. May liberty reign and freedom enlighten us! | 1 | 4 |  |  |
| [964] | RESULT==3 | TARGETCHARID=chk(249,53,0,0); TARGETCHARSTAT.20=max(0,TARGETCHARSTAT.20-10); | Failure! The Computer managed to prevent shut down, but does not know who made the attempt to unplug it. | 1 | 4 |  |  |
| [964] | RESULT==4 | TARGETCHARID=chk(249,53,0,0); TARGETCHARSTAT.20=TARGETCHARSTAT.20/4; | Critical Failure! The Computer detected our exact moves and intentions. Computer is very angry now. | 1 | 4 |  |  |
| [965] | ROLL>=(DIFF+50) | RESULT=1; TEMP2=ROLL-DIFF; TEMP1=ROUND + dth(TEMP2/25,3); |  |  |  |  |  |
| [965] | RESULT==4 | TARGETCHARID=chk(249,53,0,0); TARGETCHARSTAT.20=TARGETCHARSTAT.20/2; | Critical Failure! We ran into a sentinel algorithm and not only failed, but also got us exposed. Computer is very angry. | 1 | 4 |  |  |
| [965] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [965] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |
| [965] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL>. | 1 | 2 |  |  |
| [965] |  | DIFF=dth(2,50) + (REGKEY.compuLevel*40) | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [965] | ROLL>=DIFF | RESULT=2; TEMP1=ROUND; |  |  |  |  |  |
| [965] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  |  |  |
| [965] | ROLL<(DIFF-50) | RESULT=4; |  |  |  |  |  |
| [965] | RESULT==2 | TARGETCHARKEY.clearanceLevel=TARGETCHARKEY.clearanceLevel+1; | Success! We have hacked the Computer correctly! Leader's Clearance Level has been increased! | 1 | 4 |  |  |
| [965] | RESULT==3 | TARGETCHARID=chk(249,53,0,0); TARGETCHARSTAT.20=max(0,TARGETCHARSTAT.20-10); | Failure! We got lost in the inner workings of the labyrinthine Computer program. Sadly the computer is aware something is off, but it did not manage to identify us. | 1 | 4 |  |  |
| [965] | RESULT==1 | TARGETCHARKEY.clearanceLevel=TARGETCHARKEY.clearanceLevel+2; | Critical Success! We have hacked the Computer very well. Leader's Clearance Level has been increased by two levels! | 1 | 4 |  |  |
| [966] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |
| [966] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL>. | 1 | 2 |  |  |
| [966] |  | DIFF=dth(2,50) + (REGKEY.compuLevel*40); TEMP4=max(0,REGKEY.cooldownSyndicLevel-ROUND); DIFF=DIFF+(TEMP4*2); | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [966] | ROLL>=DIFF | RESULT=2; TEMP1=3+dth(1,6); TEMP2=0; |  |  |  |  |  |
| [966] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=0; |  |  |  |  |  |
| [966] | RESULT==4 |  | Critical Failure! We managed to accomplish the opposite we were trying to do... truly sorry, sir. | 1 | 4 |  |  |
| [966] | RESULT==2 |  | Success! We have defragmented the Computer. The Computer seems cool blue now. | 1 | 4 |  |  |
| [966] | RESULT==3 |  | Failure! We managed to clean up some garbage files, but we stopped far from a full defragmentization. | 1 | 4 |  |  |
| [966] | RESULT==1 |  | Critical Success! We have defragmentated the Computer into a green blizz almost dormant paranoia level. | 1 | 4 |  |  |
| [966] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [966] | TEMP1>0 | REGKEY.cooldownSyndicLevel=max(0,REGKEY.cooldownSyndicLevel+TEMP1); | Next Syndic Level Choice has been pushed in the future with <TEMP1> rounds. | 1 | 5 |  |  |
| [966] | TEMP1<0 | REGKEY.cooldownSyndicLevel=max(0,REGKEY.cooldownSyndicLevel+TEMP1); | Next Syndic Level Choice has been brought forward with <TEMP2> rounds. | 1 | 5 |  |  |
| [966] | ROLL<(DIFF-50) | RESULT=4;  TEMP2=dth(2,6); TEMP1=0-TEMP2; |  |  |  |  |  |
| [966] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=3+dth(1,6); TEMP2=0; |  |  |  |  |  |
| [967] |  | TARGETCHARKEY.compuInfluence=TARGETCHARKEY.compuInfluence+1; |  |  |  |  |  |
| [967] |  | ROLL=che(249,1,CHARID,61); TEMP11=ROLL; | Programming roll of <CHARNAME> is <TEMP11>. | 1 | 1 |  |  |
| [967] | TEMP20>0 | ROLL=ROLL+TEMP20 | Clearance Level Bonus of +<TEMP20>. Adjusted Roll = <ROLL>. | 1 | 2 |  |  |
| [967] |  | DIFF=dth(2,50) + (REGKEY.compuLevel*40); DIFF=DIFF+(10*TARGETCHARKEY.compuThreatCount); | Difficulty is <DIFF>. | 1 | 3 |  |  |
| [967] | ROLL>=DIFF | RESULT=2; TEMP1=ROUND; |  |  |  |  |  |
| [967] | ROLL>=(DIFF+25) | RESULT=2; TEMP2=ROLL-DIFF; TEMP1=ROUND + dth(TEMP2/25,3); |  |  |  |  |  |
| [967] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  |  |  |
| [967] | ROLL<(DIFF-50) | RESULT=3; |  |  |  |  |  |
| [967] | RESULT==2 |  | Success! We have edited the databse entry positively. | 1 | 4 |  |  |
| [967] | RESULT==3 |  | Failure! Computer locked us out of this Leader's database entries. | 1 | 4 |  |  |
| [967] |  | TARGETCHARKEY.compuThreatCount=max(0,TARGETCHARKEY.compuThreatCount-2) |  |  |  |  |  |
| [967] |  | TEMP20=CHARKEY.clearanceLevel*20; |  |  |  |  |  |

