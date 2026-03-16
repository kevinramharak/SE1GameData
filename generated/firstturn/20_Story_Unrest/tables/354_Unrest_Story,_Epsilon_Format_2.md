# `Unrest Story, Epsilon Format 2` (`354`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `20` |
| Name | [Story_Unrest](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | NAME | `Text` |
| `1` | DECISION NUMBER | `Text` |
| `2` | IF | `Text` |
| `3` | SET | `Text` |
| `4` | TEXT | `Text` |
| `5` | TALK CODe | `Text` |

### Data

| NAME | DECISION NUMBER | IF | SET | TEXT | TALK CODe |
| --- | --- | --- | --- | --- | --- |
| [Agitators] | 2 | RESULT==2 |  | Success! I managed to wringe out the name of the ringleader and after his arrest the agitation stopped. | 1 |
| [Agitators] | 2 | RESULT==3 |  | Failure! I did not manage to find out who was the ringleader. | 1 |
| [Agitators] | 1 |  | exe(346,42,6,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Agitators] | 2 |  | ROLL=che(249,1,CHARID,28) | Interogation roll of <CHARNAME> is <ROLL>. | 1 |
| [Agitators] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=2; |  | 1 |
| [Agitators] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Agitators] | 2 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=8; |  | 1 |
| [Agitators] | 3 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; | <TEMP10>00 population joined the rebels. | 1 |
| [Agitators] | 3 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Agitators] | 3 |  | TEMP9=4; |  | 1 |
| [Agitators] | 2 |  | DIFF=50+dth(2,100) | Versus Difficulty <DIFF>. | 1 |
| [Agitators] | 3 |  |  | The harassment went on for quite some time. | 1 |
| [Agitators] | 2 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; | <TEMP10>00 population joined the rebels. | 1 |
| [Agitators] | 2 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Agitators] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Agitators] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=12; |  | 1 |
| [Agitators] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Agitators] | 2 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Agitators] | 2 | RESULT==1 |  | Critical Success! I almost immediately got the name of the rebel ringleader. Eliminated him! | 1 |
| [Agitators] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); | Unrest increased by (inv) 30%. | 1 |
| [Emigration] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; TEMP10=0; |  | 1 |
| [Emigration] | 2 |  | DIFF=150-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty)+dth(6,20); | Versus Difficulty <DIFF>. | 1 |
| [Emigration] | 2 |  | ROLL=che(249,1,CHARID,6) | Oratory roll of <CHARNAME> is <ROLL>. | 1 |
| [Emigration] | 1 | TEMP10>0 | TEMP10=TEMP10*100; | <TEMP10> have left our area of control and have joined the free folk. | 1 |
| [Emigration] | 1 | TEMP9>0 | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |  | 1 |
| [Emigration] | 1 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Emigration] | 1 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9)/100; |  | 1 |
| [Emigration] | 1 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Emigration] | 1 | RESULT==4 |  | Critical Failure! We have been tricked by the agitator and he made us look like fools. | 1 |
| [Emigration] | 1 | RESULT==1 |  | Critical Success! We caught the agitator! Even better we caught him in a compromising situation in a [brothel|drugs parlor|graveyard|mutant house]. | 1 |
| [Emigration] | 1 | RESULT==3 |  | Failure! We have not suceeded finding the cullprit. The fact he is wanted seems to have increased his persuasive power. | 1 |
| [Emigration] | 2 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=dth(1,6); |  | 1 |
| [Emigration] | 1 | TEMP9>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Emigration] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40; TEMP9=dth(2,6); |  | 1 |
| [Emigration] | 2 | TEMP9>0 | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |  | 1 |
| [Emigration] | 2 | RESULT==3 |  | Failure! They did not believe my argument. | 1 |
| [Emigration] | 2 | RESULT==1 |  | Critical Success! The people chased the agitator throught the streets decrying him a lyer! | 1 |
| [Emigration] | 2 | RESULT==4 |  | Critical Failure! Somehow I managed to insult the people and even more than before fell under the spell of the agitator. | 1 |
| [Emigration] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Emigration] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Emigration] | 2 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9)/100; |  | 1 |
| [Emigration] | 2 | TEMP9>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Emigration] | 1 | RESULT==2 |  | Success! We found the agitator hiding in a [ruin|pit|old factory|shrine] and he is now safely in our dungeons. | 1 |
| [Emigration] | 2 | TEMP10>0 | TEMP10=TEMP10*100; | <TEMP10> have left our area of control and have joined the free folk. | 1 |
| [Emigration] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,10); | Unrest increased by (inv) 10%. | 1 |
| [Emigration] | 3 |  | TEMP10=(ZONEKEY.pop*dth(2,6))/100; |  | 1 |
| [Emigration] | 3 |  | ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Emigration] | 3 |  | ZONEKEY.freefolk=ZONEKEY.freefolk+TEMP10; |  | 1 |
| [Emigration] | 3 |  | TEMP10=TEMP10*100; | <TEMP10> have left our area of control and have joined the free folk. | 1 |
| [Emigration] | 2 | RESULT==2 |  | Success! I convinced almost everybody to doubt this agitator. | 1 |
| [Emigration] | 1 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40; TEMP9=dth(2,6); |  | 1 |
| [Emigration] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=5; TEMP9=0; TEMP10=0; |  | 1 |
| [Emigration] | 1 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; TEMP10=0; |  | 1 |
| [Emigration] | 1 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=dth(1,6); |  | 1 |
| [Emigration] | 1 |  | ROLL=che(249,1,CHARID,19) | Investigation roll of <CHARNAME> is <ROLL>. | 1 |
| [Emigration] | 3 |  |  | I let things be. The agitator had moderate succes. | 1 |
| [Emigration] | 1 | ROLL>=DIFF | RESULT=2; TEMP8=5; TEMP9=0; TEMP10=0; |  | 1 |
| [Emigration] | 1 |  | DIFF=dth(2,100); | Versus Difficulty <DIFF>. | 1 |
| [Harassment] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |  | 1 |
| [Harassment] | 1 |  | exe(346,42,3,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Harassment] | 2 |  | ROLL=che(249,1,CHARID,19) | Investigation roll of <CHARNAME> is <ROLL>. | 1 |
| [Harassment] | 2 |  | DIFF=50+dth(2,100) |  | 1 |
| [Harassment] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Harassment] | 2 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |  | 1 |
| [Harassment] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |  | 1 |
| [Harassment] | 2 | RESULT==2 |  | Success! I managed to wringe out the name of the ringleader and after his arrest the harassment stopped. | 1 |
| [Harassment] | 2 | RESULT==3 |  | Failure! I did not manage to find out who was the ringleader. Maybe there was none? | 1 |
| [Harassment] | 2 | RESULT==1 |  | Critical Success! I almost immediately got the name and made the arrest. | 1 |
| [Harassment] | 2 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Harassment] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Harassment] | 2 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |  | 1 |
| [Harassment] | 2 | TEMP9>0 |  | Worker Hapiness decreased with <TEMP9>%. | 1 |
| [Harassment] | 3 |  |  | The harassment went on for quite some time. | 1 |
| [Harassment] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [Harassment] | 3 |  | TEMP9=10; |  | 1 |
| [Harassment] | 3 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |  | 1 |
| [Harassment] | 3 | TEMP9>0 |  | Worker Hapiness decreased with <TEMP9>%. | 1 |
| [Harassment] | 3 | TEMP9>0 |  | <TEMP10> food got stolen. | 1 |
| [Harassment] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [majorStrike] | 3 |  | TEMP9=dth(4,10)+40; |  | 1 |
| [majorStrike] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [majorStrike] | 1 |  | exe(346,42,52,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [majorStrike] | 3 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |  | 1 |
| [majorStrike] | 3 |  |  | The harassment went on for quite some time. | 1 |
| [majorStrike] | 2 |  |  | The protestors were happy that their demands were accepted. | 1 |
| [majorStrike] | 3 | TEMP9>0 |  | We suffered a public production penalty of <TEMP9>%. | 1 |
| [minorStrike] | 3 |  | TEMP9=dth(3,6)+5; |  | 1 |
| [minorStrike] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [minorStrike] | 3 |  |  | The harassment went on for quite some time. | 1 |
| [minorStrike] | 2 |  |  | The protestors were happy that their demands were accepted. | 1 |
| [minorStrike] | 1 |  | exe(346,42,51,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [minorStrike] | 3 | TEMP9>0 |  | We suffered a public production penalty of <TEMP9>%. | 1 |
| [minorStrike] | 3 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |  | 1 |
| [minorStrike][majorStrike][Walkout][Sabotage][taxProtests] | 1 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |  | 1 |
| [minorStrike][majorStrike][Walkout][Sabotage][taxProtests] | 2 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |  | 1 |
| [minorStrike][majorStrike][Walkout][Sabotage][taxProtests] | 3 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |  | 1 |
| [minorStrike][majorStrike][Walkout][Sabotage][taxProtests] | 4 |  | ZONEKEY.workerUnrest=ROUND+dth(2,3); |  | 1 |
| [Petition] | 1 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,10); | Unrest increased by (inv) 10%. | 1 |
| [Petition] | 2 |  | ROLL=che(249,1,CHARID,9) | Intimidate roll of <CHARNAME> is <ROLL>. | 1 |
| [Petition] | 1 |  |  | I spent some time listening to the petition and complaints of the delegtion. | 1 |
| [Petition] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Petition] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Petition] | 2 | RESULT==4 |  | Critical Failure! I barely escaped with my life after they went mad! | 1 |
| [Petition] | 2 | RESULT==1 |  | Critical Success! Looking somewhat sullen everybody went home after I spoke. | 1 |
| [Petition] | 2 | RESULT==3 |  | Failure! The failed talk was just petrol on the fire. | 1 |
| [Petition] | 2 | RESULT==2 |  | Success! The protests went on for some while but eventually most of them went home. | 1 |
| [Petition] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=30; |  | 1 |
| [Petition] | 2 | ROLL<DIFF | RESULT=3; TEMP8=20; |  | 1 |
| [Petition] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |  | 1 |
| [Petition] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=5; |  | 1 |
| [Petition] | 2 |  | DIFF=200-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); | Versus Difficulty <DIFF>. | 1 |
| [Plunder] | 3 |  |  | The harassment went on for quite some time. | 1 |
| [Plunder] | 2 | TEMP9>0 |  | Worker Hapiness decreased with <TEMP9>%. | 1 |
| [Plunder] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Plunder] | 3 | TEMP9>0 |  | Worker Hapiness decreased with <TEMP9>%. | 1 |
| [Plunder] | 3 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |  | 1 |
| [Plunder] | 1 |  | exe(346,42,5,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Plunder] | 2 |  | ROLL=che(249,1,CHARID,28) | Interogation roll of <CHARNAME> is <ROLL>. | 1 |
| [Plunder] | 2 |  | DIFF=50+dth(2,100) | Versus Difficulty <DIFF>. | 1 |
| [Plunder] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |  | 1 |
| [Plunder] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Plunder] | 2 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |  | 1 |
| [Plunder] | 3 | TEMP9>0 |  | <TEMP10> food got stolen. | 1 |
| [Plunder] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |  | 1 |
| [Plunder] | 2 | RESULT==2 |  | Success! I managed to wringe out the name of the ringleader and after his arrest the harassment stopped. | 1 |
| [Plunder] | 2 | RESULT==3 |  | Failure! I did not manage to find out who was the ringleader. Maybe there was none? | 1 |
| [Plunder] | 2 | RESULT==1 |  | Critical Success! I almost immediately got the name and made the arrest. | 1 |
| [Plunder] | 2 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Plunder] | 2 | TEMP9>0 | ZONEKEY.workerHapiness=(ZONEKEY.workerHapiness*(100-TEMP9)/100); |  | 1 |
| [Plunder] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Plunder] | 3 |  | TEMP9=10; |  | 1 |
| [Plunder] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); | Unrest increased by (inv) 30%. | 1 |
| [Protests] | 3 | RESULT==3 |  | Failure! The failed talk was just petrol on the fire. | 1 |
| [Protests] | 3 | ROLL<DIFF | RESULT=3; TEMP8=30; |  | 1 |
| [Protests] | 3 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50; |  | 1 |
| [Protests] | 3 | RESULT==2 |  | Success! The protests went on for some while but eventually most of them went home. | 1 |
| [Protests] | 3 |  | DIFF=200-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); | Versus Difficulty <DIFF>. | 1 |
| [Protests] | 3 | RESULT==1 |  | Critical Success! Looking somewhat sullen everybody went home after I spoke. | 1 |
| [Protests] | 3 | RESULT==4 |  | Critical Failure! I barely escaped with my life after they went mad! | 1 |
| [Protests] | 3 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Protests] | 3 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Protests] | 4 |  |  | The protests disrupted the zone for quite some time. | 1 |
| [Protests] | 4 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [Protests] | 3 |  | ROLL=che(249,1,CHARID,6) | Oratory roll of <CHARNAME> is <ROLL>. | 1 |
| [Protests] | 2 |  |  | The protestors were happy that their demands were accepted. | 1 |
| [Protests] | 1 |  | exe(346,42,1,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Protests] | 3 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |  | 1 |
| [Protests] | 3 | ROLL>=DIFF | RESULT=2; TEMP8=10; |  | 1 |
| [Protests][Petition][Emigration][Theft][Harassment][Riots][Plunder][Agitators][Rally] | 1 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |  | 1 |
| [Protests][Petition][Emigration][Theft][Harassment][Riots][Plunder][Agitators][Rally] | 2 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |  | 1 |
| [Protests][Petition][Emigration][Theft][Harassment][Riots][Plunder][Agitators][Rally] | 4 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |  |  |
| [Protests][Petition][Emigration][Theft][Harassment][Riots][Plunder][Agitators][Rally] | 3 |  | ZONEKEY.popUnrest=ROUND+dth(2,3); |  |  |
| [Rally] | 2 | TEMP10>0 | ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP10; | <TEMP10>00 population joined the rebels. | 1 |
| [Rally] | 2 | TEMP9>0 | TEMP10=(ZONEKEY.pop*TEMP9/100); ZONEKEY.pop=ZONEKEY.pop-TEMP10; |  | 1 |
| [Rally] | 2 |  | TEMP9=8; |  | 1 |
| [Rally] | 2 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); | Unrest increased by (inv) 30%. | 1 |
| [Rally] | 2 |  |  | The harassment went on for quite some time. | 1 |
| [Rally] | 1 |  | exe(346,42,7,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Riots] | 1 |  | exe(346,42,4,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Riots] | 4 |  |  | The protests disrupted the zone for quite some time. | 1 |
| [Riots] | 2 |  |  | The rioters were happy that their violent protest had the desired effect. | 1 |
| [Riots] | 3 |  | ROLL=che(249,1,CHARID,6) | Oratory roll of <CHARNAME> is <ROLL>. | 1 |
| [Riots] | 3 |  | DIFF=225-(ZONEKEY.popHapiness+ZONEKEY.popLoyalty); | Versus Difficulty <DIFF>. | 1 |
| [Riots] | 3 | ROLL>=DIFF | RESULT=2; TEMP8=10; |  | 1 |
| [Riots] | 3 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |  | 1 |
| [Riots] | 3 | ROLL<DIFF | RESULT=3; TEMP8=40; |  | 1 |
| [Riots] | 4 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,30); | Unrest increased by (inv) 30%. | 1 |
| [Riots] | 3 | RESULT==2 |  | Success! The riots went on for some while but eventually most of them went home. | 1 |
| [Riots] | 3 | RESULT==3 |  | Failure! The failed talk was just petrol on the fire.The city is ablaze! | 1 |
| [Riots] | 3 | RESULT==1 |  | Critical Success! Looking guilty everybody went home after I spoke. | 1 |
| [Riots] | 3 | RESULT==4 |  | Critical Failure! I barely escaped with my life after they went mad! Its anarchy now out there! | 1 |
| [Riots] | 3 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Riots] | 3 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Riots] | 3 | ROLL<(DIFF-50) | RESULT=4; TEMP8=60; |  | 1 |
| [Sabotage] | 1 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Sabotage] | 1 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Sabotage] | 1 | RESULT==1 |  | Critical Success! I not only managed to find him, but also exposed he was being paid by criminals. | 1 |
| [Sabotage] | 1 | RESULT==3 |  | Failure! I did not manage to find out who was the saboteur. | 1 |
| [Sabotage] | 1 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=60; |  | 1 |
| [Sabotage] | 1 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40;  TEMP9=80; |  | 1 |
| [Sabotage] | 1 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Sabotage] | 1 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Sabotage] | 1 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=10; |  | 1 |
| [Sabotage] | 1 |  | DIFF=50+dth(2,100) | Versus Difficulty <DIFF>. | 1 |
| [Sabotage] | 1 | RESULT==2 |  | Success! I managed to find and execute the saboteur. | 1 |
| [Sabotage] | 1 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |  | 1 |
| [Sabotage] | 3 |  |  | The sabotage went on for some while. | 1 |
| [Sabotage] | 2 |  |  | The workers were happy they received an extra payment. | 1 |
| [Sabotage] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,25); | Unrest increased by (inv) 25%. | 1 |
| [Sabotage] | 3 |  | TEMP9=25+dth(5,6); |  | 1 |
| [Sabotage] | 3 | TEMP9>0 | ZONEKEY.publicProdPenalty=ZONEKEY.publicProdPenalty+TEMP9; |  | 1 |
| [Sabotage] | 1 |  | ROLL=che(249,1,CHARID,19) | Investigation roll of <CHARNAME> is <ROLL>. | 1 |
| [Sabotage] | 1 | TEMP9>0 |  | We suffered a public production penalty of <TEMP9>%. | 1 |
| [Sabotage] | 3 | TEMP9>0 |  | We suffered a public production penalty of <TEMP9>%. | 1 |
| [taxProtests] | 3 | ROLL<DIFF | RESULT=3; TEMP8=30; |  | 1 |
| [taxProtests] | 3 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; |  | 1 |
| [taxProtests] | 3 | ROLL>=DIFF | RESULT=2; TEMP8=10; |  | 1 |
| [taxProtests] | 3 |  | DIFF=100+(REGKEY.incomeTax*3)-((ZONEKEY.popHapiness+ZONEKEY.popLoyalty)/2); | Versus Difficulty <DIFF>. | 1 |
| [taxProtests] | 3 |  | ROLL=che(249,1,CHARID,6) | Oratory roll of <CHARNAME> is <ROLL>. | 1 |
| [taxProtests] | 2 |  |  | The protestors were happy that they are getting Credits from the government for a change. | 1 |
| [taxProtests] | 1 |  | exe(346,42,11,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [taxProtests] | 3 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [taxProtests] | 4 |  |  | The protests disrupted the zone for quite some time. | 1 |
| [taxProtests] | 3 | RESULT==2 |  | Success! The protests went on for some while but eventually most of them went home. | 1 |
| [taxProtests] | 3 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [taxProtests] | 3 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50; |  | 1 |
| [taxProtests] | 3 | RESULT==4 |  | Critical Failure! I barely escaped with my life after they went mad! | 1 |
| [taxProtests] | 3 | RESULT==1 |  | Critical Success! Looking somewhat sullen everybody went home after I spoke. | 1 |
| [taxProtests] | 3 | RESULT==3 |  | Failure! The failed talk was just petrol on the fire. | 1 |
| [taxProtests] | 4 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [Theft] | 2 |  | ROLL=che(249,1,CHARID,28) | Integoration roll of <CHARNAME> is <ROLL>. | 1 |
| [Theft] | 2 |  | DIFF=50+dth(2,100) | Versus Difficulty <DIFF>. | 1 |
| [Theft] | 2 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |  | 1 |
| [Theft] | 2 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Theft] | 2 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=20; |  | 1 |
| [Theft] | 2 | RESULT==2 |  | Success! I managed to wringe out the name of the ringleader and after his arrest the thievery stopped. | 1 |
| [Theft] | 2 | RESULT==3 |  | Failure! I did not manage to find out who was the ringleader. Maybe there was none? | 1 |
| [Theft] | 2 | RESULT==1 |  | Critical Success! I almost got the name and made the arrest immediately. | 1 |
| [Theft] | 2 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Theft] | 2 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by (inv) <TEMP8>%. | 1 |
| [Theft] | 2 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Theft] | 2 | TEMP9>0 | TEMP5=REGKEY.credits/2; TEMP5=TEMP5/(1+REGKEY.size); TEMP6=ZONEKEY.pop*5; TEMP5=min(TEMP5,TEMP6); TEMP10=TEMP5*TEMP9; TEMP10=TEMP10/100; |  | 1 |
| [Theft] | 2 | TEMP9>0 |  | <TEMP10> Credits got stolen. | 1 |
| [Theft] | 3 |  |  | The thieves disrupted the zone for quite some time. | 1 |
| [Theft] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,20); | Unrest increased by (inv) 20%. | 1 |
| [Theft] | 3 |  | TEMP5=REGKEY.credits/2; TEMP5=TEMP5/(1+REGKEY.size); TEMP6=ZONEKEY.pop*5; TEMP5=min(TEMP5,TEMP6); TEMP10=TEMP5*10; TEMP10=TEMP10/100; |  | 1 |
| [Theft] | 3 | TEMP10>0 |  | <TEMP10> Credits got stolen. | 1 |
| [Theft] | 2 | ROLL<(DIFF-50) | RESULT=4; TEMP8=50;  TEMP9=40; |  | 1 |
| [Theft] | 1 |  | exe(346,42,2,ZONEID,100) | <LOCALTEMPTEXT> | 1 |
| [Walkout] | 1 |  | ROLL=che(249,1,CHARID,19) | Investigation roll of <CHARNAME> is <ROLL>. | 1 |
| [Walkout] | 3 | TEMP9>0 | TEMP10=(ZONEKEY.worker*TEMP9/100); ZONEKEY.worker=ZONEKEY.worker-TEMP10; |  | 1 |
| [Walkout] | 1 |  | DIFF=50+dth(2,100); TEMP10=0; | Versus Difficulty <DIFF>. | 1 |
| [Walkout] | 1 | ROLL>=(DIFF+50) | RESULT=1; TEMP8=0; TEMP9=0; |  | 1 |
| [Walkout] | 1 | ROLL<DIFF | RESULT=3; TEMP8=30; TEMP9=15; |  | 1 |
| [Walkout] | 1 | ROLL<(DIFF-50) | RESULT=4; TEMP8=40;  TEMP9=25; |  | 1 |
| [Walkout] | 1 | RESULT==2 |  | Success! I managed to find and imprison the agitator. | 1 |
| [Walkout] | 1 | RESULT==3 |  | Failure! I did not manage to find out who was the agitator. | 1 |
| [Walkout] | 1 | RESULT==1 |  | Critical Success! I not only managed to find him, but he publicly declared his arguments where lies. | 1 |
| [Walkout] | 3 | TEMP10>0 | ZONEKEY.pop=ZONEKEY.pop+TEMP10; | <TEMP10>00 workers left us. | 1 |
| [Walkout] | 1 | RESULT==4 |  | Critical Failure! I arrested and accidently killed the wrong guy. | 1 |
| [Walkout] | 1 | TEMP8==0 |  | Unrest did NOT increase. | 1 |
| [Walkout] | 1 | TEMP9>0 | TEMP10=(ZONEKEY.worker*TEMP9/100); ZONEKEY.worker=ZONEKEY.worker-TEMP10; |  | 1 |
| [Walkout] | 1 | TEMP10>0 | ZONEKEY.pop=ZONEKEY.pop+TEMP10; | <TEMP10>00 workers left us. | 1 |
| [Walkout] | 2 |  |  | The workers were happy they received an extra payment. | 1 |
| [Walkout] | 3 |  |  | The agitation went on for some while. | 1 |
| [Walkout] | 3 |  | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,15); | Unrest increased by (inv) 15%. | 1 |
| [Walkout] | 3 |  | TEMP9=dth(3,6); |  | 1 |
| [Walkout] | 1 | TEMP8>0 | ZONEKEY.unrest=ZONEKEY.unrest+inv(ZONEKEY.unrest,TEMP8); | Unrest increased by <TEMP8>%. | 1 |
| [Walkout] | 1 | ROLL>=DIFF | RESULT=2; TEMP8=0; TEMP9=5; |  | 1 |

