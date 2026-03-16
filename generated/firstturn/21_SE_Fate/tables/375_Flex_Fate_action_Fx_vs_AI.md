# `Flex Fate action Fx vs AI` (`375`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `21` |
| Name | [SE_Fate](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Card ID | `Text` |
| `1` | IF Logic | `Text` |
| `2` | SET Logic | `Text` |
| `3` | Text | `Text` |
| `4` | Talk Code | `Text` |
| `5` | group code | `Text` |
| `6` | New Col | `Text` |

### Data

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | New Col |
| --- | --- | --- | --- | --- | --- | --- |
| [1001] |  | REGKEY.ecoBonusPoints=REGKEY.ecoBonusPoints+2500; | Production next turn will benefit from 2500 Public Industrial Bonus Points (minimal 50% increased production) | 1 | 1 | Public Industrial Bonus Points +2500 |
| [1002] |  | TEMP1=dth(5,20); REGKEY.extraCasualtyTreshold=REGKEY.extraCasualtyTreshold+TEMP1; | Persuaded by the need to sacrifice in order to attain victory our populace received a <TEMP1>% bonus on its Casualty Threshold. | 1 | 1 | Casualty Threshold +5d20 |
| [1003] | che(249,21,REGIMEID,1)>0 | TEMP1=che(249,21,REGIMEID,1); exe(346,28,REGIMEID,TEMP1); | Your scientists discovered the idea of '<LOOKUPTECHNAME=<TEMP1>>'. If you have the neccessary Organisation you can now start researching it. | 1 | 1 | A free Tech Discovery |
| [1004] |  | exe(346,25,HISID,1004,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [1005] |  | exe(346,25,HISID,1005,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [1006] |  | exe(346,25,HISID,1006,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [1007] |  | TEMP1=dth(3,10); | <ZONENAME> has been targeted by a group of specialized assasins. A number of key rabble rousers have been discretely eliminated. | 1 | 1 |  |
| [1007] |  | ZONEKEY.unrest=max(0,ZONEKEY.unrest-TEMP1); | Unrest -<TEMP1> | 1 | 2 | Unrest of selected Zone will decrease with -3d10 |
| [1008] | TEMP1<TEMP4 | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; | Governor lost the referendum! | 1 | 2 |  |
| [1008] | TEMP1>=TEMP4 |  | Governor won the referendum! | 1 | 2 |  |
| [1008] |  | TEMP1=che(249,1,TARGETCHARID,6); ZONEID=TARGETCHARSTAT.7; TEMP2=ZONEKEY.pop+ZONEKEY.worker+1; TEMP3=(ZONEKEY.pop*ZONEKEY.popHapiness)+(ZONEKEY.worker*ZONEKEY.workerHapiness); TEMP4=min(100,TEMP3/TEMP2); TEMP4=200-TEMP4; | <TARGETCHARNAME> has organized a referendum. The difficulty for the Governor to win was <TEMP4>. The Oratory skill roll of the Governor was <TEMP1>. | 1 | 1 | Governor wins referendum if his Oratory skill roll beats 200 - average Happiness. |
| [1009] |  | ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness-TEMP2) |  |  |  |  |
| [1009] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) |  |  |  |  |
| [1009] |  | TEMP1=dth(4,6); TEMP2=(TEMP1/3)+1; | The workers of <ZONENAME> received some extra privileges. Their Happiness increased with +<TEMP1>. However the non-Workers are less pleased and their Happiness declined with -<TEMP2>. | 1 | 1 | Worker Happiness of selected Zone increases with 4d6. Population Happiness declines with one third of that roll. |
| [1010] | che(249,11,ZONEID,3111)==0 | exe(346,18,ZONEID,3111) | A Zoo Asset has been constructed in <ZONENAME>. | 1 | 2 |  |
| [1010] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Zoo Asset for the selected Zone. |
| [1010] | che(249,11,ZONEID,3111)>0 | exe(346,17,ZONEID,3111) | Your Zoo Asset in <ZONENAME> has been upgraded | 1 | 2 |  |
| [1011] | che(249,11,ZONEID,3121)==0 | exe(346,18,ZONEID,3121) | A Commercial Area Asset has been constructed in <ZONENAME>. | 1 | 2 |  |
| [1011] | che(249,11,ZONEID,3121)>0 | exe(346,17,ZONEID,3121) | Your Commercial Area Asset in <ZONENAME> has been upgraded | 1 | 2 |  |
| [1011] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Commercial Area Asset for the selected Zone. |
| [1012] | che(249,11,ZONEID,3131)==0 | exe(346,18,ZONEID,3131) | A Militia House Asset has been constructed in <ZONENAME>. | 1 | 2 |  |
| [1012] | che(249,11,ZONEID,3131)>0 | exe(346,17,ZONEID,3131) | Your Militia House Asset in <ZONENAME> has been upgraded | 1 | 2 |  |
| [1012] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Militia House Asset for the selected Zone. |
| [1013] |  | TEMP1=dth(3,8); REGREGKEY.relation=REGREGKEY.relation-TEMP1; REGREGKEY.relation=max(0,REGREGKEY.relation); REVREGREGKEY.relation=REGREGKEY.relation; | Relations with <TARGETREGIMENAME> dropped with -<TEMP1> points. | 1 | 1 | Decrease relation with 3d8 points. |
| [1014] | TARGETCULTUREKEY.nodip>0 | TEMP1=0; |  |  |  |  |
| [1014] |  | TEMP1=min(10,inv(REGREGKEY.relation,10)); |  |  |  |  |
| [1014] |  | REGREGKEY.relation=REGREGKEY.relation+TEMP1; REGREGKEY.relation=min(100,REGREGKEY.relation); REVREGREGKEY.relation=REGREGKEY.relation; | Relations with <TARGETREGIMENAME> went up with <TEMP1> points. | 1 | 1 | Increase relation with up to 10 points. |
| [1015] |  | TEMP1=dth(4,4); |  |  |  |  |
| [1015] | TARGETCULTUREKEY.nodip>0 | TEMP1=0; |  |  |  |  |
| [1015] |  | REVREGREGKEY.relation=REVREGREGKEY.relation+TEMP1; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation); REGREGKEY.relation=REVREGREGKEY.relation; | Relation with <TARGETREGIMENAME> went up with <TEMP1> points. | 1 | 1 | Increase relation with 4d4 points. |
| [1016] |  | TEMP1=dth(5,6)*100; | Investors took note of <ZONENAME> and invested <TEMP1> Credits in the Zone. | 1 | 1 | Attract up to 3000 Credits of private investment for selected Zone. |
| [1016] |  | ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP1; |  |  |  |  |
| [1017] |  | TEMP1=dth(3,6); TEMP2=dth(2,4); | The people of <ZONENAME> rallied in the streets to show their support for our great <NATION>. | 1 | 1 |  |
| [1017] |  | ZONEKEY.popHapiness=ZONEKEY.popHapiness+TEMP1; ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness); | Population Hapiness +<TEMP1> | 1 | 2 | Gain 3d6 Population Hapiness |
| [1017] |  | ZONEKEY.popLoyalty=ZONEKEY.popLoyalty+TEMP2; ZONEKEY.popLoyalty=min(100,ZONEKEY.popLoyalty); | Population Loyalty +<TEMP2> | 1 | 3 | Gain 2d4 Population Loyalty |
| [1018] |  | exe(346,20,TARGETCHARID,1018) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Charisma, Intelligence and War Stats with +15. Also tends to increase Ambition over time. |
| [1019] |  | exe(346,20,TARGETCHARID,1019) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Willpower Stat with +10, also tends to decrease Leaders Corruption trait over time. |
| [1020] |  | exe(346,20,TARGETCHARID,1020) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Charisma Stat with +10, also tends to increase Leaders Ambition over time. |
| [1020] |  | exe(346,37,TARGETCHARID,15) |  |  |  | Improves Relation with up to +15%. |
| [1021] |  | TEMP1=TARGETCHARSTAT.29; TEMP2=inv(TARGETCHARSTAT.29,50); TEMP2=TEMP2+5; TEMP3=TEMP1-TEMP2; TEMP3=max(0,TEMP3); TEMP4=TEMP1-TEMP3; TARGETCHARSTAT.29=TEMP3; | The committee had a number of thorough sessions with <TARGETCHARNAME> and his Corruption Level dropped with <TEMP4> points. | 1 | 1 | Decrease Corruption Level with at least half. |
| [510] |  | REGKEY.credits=REGKEY.credits-500; |  |  |  | Costs 500 Credits |
| [510] |  | TEMP4=(dth(3,6)*TEMP1)/100; TEMP5=TEMP4*200; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); TEMP4=TEMP4+1; |  |  |  | Effect is reduced if more than 20K populace |
| [510] | TEMP4>0 | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP4); | Population Happiness increased with +<TEMP4>. | 1 | 3 | Will increase Population Happiness with +3d6 |
| [510] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |
| [510] | TEMP4>0 | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP4); | Worker Happiness increased with +<TEMP4>. | 1 | 4 | Will increase Worker Happiness with +3d6 |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545] |  | DIFF=100 |  |  |  | Base difficulty will be 100. |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL>=DIFF | RESULT=2; TEMP1=100; |  |  |  | A success will result in normal execution of task. |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; |  |  |  | A critical failure (roll 50 below difficulty) will result in the task being executed having no or almost no effect. Might even cause an averse effect. |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==2 |  | Difficulty was <DIFF>. Rolled <ROLL>. Successful Skill Roll! | 1 | 2 |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==3 |  | Difficulty was <DIFF>. Rolled <ROLL>. Failure! Effect is halved. | 1 | 2 |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==1 |  | Difficulty was <DIFF>. Rolled <ROLL>. Critical Success! Effect is doubled. | 1 | 2 |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==4 |  | Difficulty was <DIFF>. Rolled <ROLL>. Critical Failure! | 1 | 2 |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=200; |  |  |  | A critical success (roll 50 above difficulty) could result in doubling the effect of the task. |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL<DIFF | RESULT=3; TEMP1=50; |  |  |  | A failure will result in the task being executed having half or no effect. |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] |  |  |  |  |  |  |
| [511] | TEMP4>0 | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP4); | Worker Happiness increased with +<TEMP4>. | 1 | 4 | Will increase Worker Happiness with +5d6 |
| [511] | TEMP4>0 | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP4); | Population Happiness increased with +<TEMP4>. | 1 | 3 | Will increase Population Happiness with +5d6 |
| [511] |  | TEMP4=(dth(5,6)*TEMP1)/100; TEMP5=TEMP4*1000; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); |  |  |  | Effect is reduced if more than 100K populace |
| [511] |  | REGKEY.credits=REGKEY.credits-2000; |  |  |  | Costs 2000 Credits |
| [511] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |
| [512] | TEMP4>0 | TEMP6=(ZONEKEY.worker*TEMP4)/100; ZONEKEY.worker=ZONEKEY.worker-TEMP5; exe(346,11,ZONEID,9,TEMP6); | Managed to increase recruits with +<TEMP6>00 from Workers. | 1 | 4 |  |
| [512] | TEMP4>0 | TEMP5=(ZONEKEY.pop*TEMP4)/100; ZONEKEY.pop=ZONEKEY.pop-TEMP5; exe(346,11,ZONEID,9,TEMP5); | Managed to increase recruits with +<TEMP5>00 from Population. | 1 | 3 | Will increase Recruits with 2d4 percentage of populace. |
| [512] |  | TEMP4=(dth(2,4)*TEMP1)/100; |  |  |  |  |
| [512] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |
| [513] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |
| [513] |  | TEMP4=(dth(5,6)*TEMP1)/100; |  |  |  |  |
| [513] | TEMP4>0 | ZONEKEY.militancy=min(100,ZONEKEY.militancy+TEMP4); | Militancy increased with +<TEMP4> points. | 1 | 3 | Will increase Militancy with 5d6 points. |
| [514] | TEMP6>0 | REGKEY.credits=REGKEY.credits+TEMP6; | Credits increased with +<TEMP6> points. | 1 | 3 | Will increase Credits with at least a few dozen of Credits for 10K populace. More if reasonable loyalty and reasonable QOL. At Maximum gives 400 Credits per 10K populace. |
| [514] |  | TEMP5=(sqr(ZONEKEY.loyalty+1)*sqr(ZONEKEY.qol+1))/4; TEMP4=dth(5,6+TEMP5); TEMP4=TEMP4*5; TEMP6= (ZONEKEY.pop+ZONEKEY.worker)/100; TEMP6=TEMP6*TEMP4; TEMP6=(TEMP6*TEMP1)/100; |  |  |  |  |
| [514] | TEMP6>0 | ZONEKEY.popLoyalty=max(0,ZONEKEY.popLoyalty-10) | Loyalty dropped with -10 points. | 1 | 4 | Loyalty will drop with 10 points |
| [514] |  | ROLL=che(249,1,CHARID,6) | <CHARNAME> is making an Oratory Skill Roll. | 1 | 1 | An oratoray skill roll will be made by <CHARNAME>. |
| [515] |  | TEMP4=dth(2,4); TEMP5=dth(4,20); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |
| [515] | TEMP4>0 | exe(346,29,REGIMEID,4,TEMP4); exe(346,29,REGIMEID,5,TEMP4); exe(346,29,REGIMEID,6,TEMP4); | Relation of all Cabinet members improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Cabinet members with (inverse) +2d4% |
| [515] | TEMP5>0 | exe(346,30,REGIMEID,4,TEMP5); exe(346,30,REGIMEID,5,TEMP5); exe(346,30,REGIMEID,6,TEMP5); | XP of all Cabinet member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Cabinet members with 4d20 XP points |
| [515][516][517][518] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |
| [516] |  | TEMP4=dth(2,6); TEMP5=dth(3,20); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |
| [516] | TEMP4>0 | exe(346,29,REGIMEID,10,TEMP4); | Relation of all Governors improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Governors with (inverse) +2d6% |
| [516] | TEMP5>0 | exe(346,30,REGIMEID,10,TEMP5); | XP of all Governors member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Governors with 3d20 XP points |
| [517] | TEMP5>0 | exe(346,30,REGIMEID,4,TEMP5); exe(346,30,REGIMEID,3,TEMP5); | XP of all Commanders member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Commanders with 2d100 XP points |
| [517] |  | TEMP4=dth(1,4); TEMP5=dth(2,100); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |
| [517] | TEMP4>0 | exe(346,29,REGIMEID,4,TEMP4); exe(346,29,REGIMEID,3,TEMP4); | Relation of all Commanders improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Commanders with (inverse) +1d4% |
| [518] |  | TEMP4=dth(1,6); TEMP5=dth(3,10); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |
| [518] | TEMP4>0 | exe(346,29,REGIMEID,0,TEMP4); | Relation of all Leaders improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Leaders with (inverse) +1d6% |
| [518] | TEMP5>0 | exe(346,30,REGIMEID,0,TEMP5); | XP of all Leaders increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all with 3d10 XP points |
| [519] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |
| [519] |  | TEMP4=dth(3,6); TEMP4=TEMP4*2*REGKEY.adminLevel; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |
| [519] | TEMP4>0 | REGKEY.bp=REGKEY.bp+TEMP4; | Gained <TEMP4> BP points in our push. They will be spent start of next turn. | 1 | 3 | Will give you around 20 extra BP per Admin Level |
| [520] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |
| [520] |  | TEMP4=dth(3,6); TEMP4=TEMP4*20*REGKEY.adminLevel; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |
| [520] | TEMP4>0 | REGKEY.credits=REGKEY.credits+TEMP4; | Gained <TEMP4> Credits in our efficiency operation. | 1 | 3 | Will give you around 200 extra Credits per Admin Level |
| [521] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |
| [521] | TEMP4>0 | REGKEY.fp=REGKEY.fp+TEMP4; | We did the impossible! We managed to gain <TEMP4> Fate Points. | 1 | 3 | Will give you 2 extra Fate Points |
| [521] |  | TEMP4=2; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |
| [521] |  | DIFF=DIFF+50 |  |  |  | Difficulty for generating Fate Points is 50 difficulty points more |
| [522] |  | TEMP4=25; exe(346,20,TARGETCHARID, 522); |  |  |  | Will give the Leader Feat: Medal of Merit (cha+10, rel+1, sen+1) |
| [522] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 25 points. |
| [523] |  | TEMP4=dth(5,20); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-300; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; exe(346,20,TARGETCHARID, 523); | Commercial enterprise has been transferred to <TARGETCHARNAME>. | 1 | 3 | Will give the Leader Feat: Commercial Enterprise (rel+1). |
| [523] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 5d20 points. Modified for Egoism. |
| [523] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+300; CHARKEY.41=CHARKEY.41+300; |  |  |  |  |
| [523][524][544][545] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |
| [524] |  | TEMP4=dth(5,20); TEMP4=(TEMP4*TEMP1)/100; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; exe(346,20,TARGETCHARID, 524); | Estate has been transferred to <TARGETCHARNAME>. | 1 | 3 | Will give the Leader Feat: Estate (rel+1). |
| [524] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 5d20 points. Modified for Egoism. |
| [525] |  |  |  |  |  | Unrest will fall with 4d6. Fear will rise with the same. |
| [525] |  |  |  |  |  | Population will suffer casualties in this operation. |
| [525] |  |  |  |  |  | Workers will suffer casualties in this operation. |
| [525] |  | exe(346,42,525,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [525][529][530] |  | ROLL=che(249,1,CHARID,24) | <CHARNAME> is making an Operational Command Skill Roll. | 1 | 1 | An operational command skill roll will be made by <CHARNAME>. |
| [526] |  | exe(346,42,526,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [526] |  |  |  |  |  | Fear will rise with 3d20. |
| [526] |  |  |  |  |  | Population will suffer casualties in this operation. |
| [526] |  |  |  |  |  | Workers will suffer casualties in this operation. |
| [526][527][528] |  | ROLL=che(249,1,CHARID,9) | <CHARNAME> is making an Intimidate Skill Roll. | 1 | 1 | An intimidate skill roll will be made by <CHARNAME>. |
| [527] |  |  |  |  |  | Will relocate 5d20 * 100 Free Folk. |
| [527] |  |  |  |  |  | Free Folk will suffer casualties in this operation. |
| [527] |  | exe(346,42,527,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [528] |  |  |  |  |  | Unrest and Danger will increase |
| [528] |  |  |  |  |  | You'll pillage the populace's reserves of Credits and Food. |
| [528] |  | exe(346,42,528,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [528] |  |  |  |  |  | Population will suffer casualties in this operation. |
| [529] |  |  |  |  |  | You'll raze Assets. |
| [529] |  |  |  |  |  | Unrest and Danger will increase |
| [529] |  |  |  |  |  | You'll pillage the populace's reserves of Credits and Food. |
| [529] |  |  |  |  |  | Population will suffer casualties in this operation. |
| [529] |  | exe(346,42,529,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [529] |  |  |  |  |  | Workers will suffer casualties in this operation. |
| [530] |  | exe(346,42,530,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |
| [530] |  |  |  |  |  | Population will suffer casualties in this operation. And even more will be deported. |
| [530] |  |  |  |  |  | Unrest will fall with 6d10. Fear will rise with the same. |
| [531] | TEMP4>0 | ZONEKEY.militancy=min(100,ZONEKEY.militancy+TEMP4); | Militancy increased with +<TEMP4>. | 1 | 3 | Will increase Zone Militancy with +5d6 |
| [531] |  | TEMP4=(dth(5,6)*TEMP1)/100; TEMP5=TEMP4*400; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); |  |  |  | Effect is reduced if more than 40K populace |
| [531] |  | REGKEY.credits=REGKEY.credits-500; |  |  |  | Costs 500 Credits |
| [531] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |
| [532] |  | DIFF= 50 + che(249,1,TARGETCHARID,10) |  |  |  | Difficulty for assasination attempt will be 50 + Personal Combat Roll of targetted Leader |
| [532] | RESULT==4 | TARGETCHARSTAT.19=TARGETCHARSTAT.19/3; TARGETCHARSTAT.20=TARGETCHARSTAT.20/3; | The targeted Leader is aware you ordered the attempted assasination and lost 66% of Relation and Loyalty. | 1 | 5 |  |
| [532] | RESULT>=3 |  | <TARGETCHARNAME> managed to fight off the assasin. | 1 | 4 |  |
| [532] |  | ROLL=che(249,1,CHARID,10) |  |  |  | A personal combat skill roll will be made by <CHARNAME> to see if he succeeds in the assasination attempt. |
| [532] | RESULT<=2 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> was assassinated. | 1 | 3 |  |
| [532][533][535] | ROLL>=DIFF | RESULT=2; TEMP1=100; |  |  |  | A (critical) success will result in the successful execution of the task. |
| [532][533][535] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=200; |  |  |  |  |
| [532][533][535] | RESULT==4 |  | Critical Failure! | 1 | 2 |  |
| [532][533][535] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; |  |  |  |  |
| [532][533][535] | ROLL<DIFF | RESULT=3; TEMP1=50; |  |  |  |  |
| [532][533][535] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |
| [532][533][535] | RESULT==1 |  | Critical Success! | 1 | 2 |  |
| [532][533][535] | RESULT==2 |  | Successful Skill Roll! | 1 | 2 |  |
| [532][533][535] | RESULT==3 |  | Failure! | 1 | 2 |  |
| [533] | RESULT==4 | TARGETCHARSTAT.19=(TARGETCHARSTAT.19*80)/100; TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | The targeted Leader took offensive with your threats. | 1 | 5 |  |
| [533] | RESULT<=2 | TARGETCHARSTAT.19=TARGETCHARSTAT.19+inv(TARGETCHARSTAT.19,30); TARGETCHARSTAT.20=(TARGETCHARSTAT.20*90)/100; | <TARGETCHARNAME> was successfully threatened. Lost 10% relation, but gained 30% loyalty. | 1 | 3 |  |
| [533] | RESULT>=3 |  | <TARGETCHARNAME> was not impressed by your attempt to threaten him. | 1 | 4 |  |
| [533] |  | ROLL=che(249,1,CHARID,9) |  |  |  | An intimidate skill roll will be made by <CHARNAME>. |
| [533] |  | DIFF=80 + TARGETCHARSTAT.46 |  |  |  | Difficulty to threaten is 80 + Heroism of target |
| [534] |  | TEMP3=inv(FACTIONSTAT.5,10); FACTIONSTAT.5=FACTIONSTAT.5+TEMP3; TEMP2=che(249,1,CHARID,1); FACTIONID=TARGETCHARSTAT.13; REGIMEKEY.credits=REGIMEKEY.credits-1000; FACTIONSUPPORT.TEMP1=FACTIONSUPPORT.TEMP1+TEMP2; | <CHARNAME> rolled <TEMP2> on the bribery skill roll. We improved the chances of <LOOKUPFACTIONNAME=<FACTIONID>> winning the next elections by providing <TEMP2> support points. Faction Happiness went up with +<TEMP3> points. | 1 | 1 | Number of support points given to Faction will be equal to <CHARNAME>'s bribery skill roll. |
| [535] |  | DIFF=80 + TARGETCHARSTAT.48 |  |  |  | Difficulty to investigate is 80 + Authority of target |
| [535] | RESULT<=2 | TEMP1=(TARGETCHARSTAT.28 * dth(5,20))/100; TARGETCHARSTAT.28=TARGETCHARSTAT.28-TEMP1; REGKEY.credits=REGKEY.credits+TEMP1; | <TARGETCHARNAME> was successfully interrogated. We recovered <TEMP1> Credits. | 1 | 3 |  |
| [535] | RESULT<=2; TEMP1>0; | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | The Leader lost <TEMP5> Seniority Points due to his shady dealings being revealed. | 1 | 4 |  |
| [535] | RESULT>=3 |  | <TARGETCHARNAME> was not impressed by your attempt to interrogate him. | 1 | 5 |  |
| [535] |  | ROLL=che(249,1,CHARID,28) |  |  |  | An interrogation skill roll will be made by <CHARNAME> |
| [535] | RESULT==4 | TARGETCHARSTAT.19=(TARGETCHARSTAT.19*80)/100; TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | The targeted Leader took offensive with your interrogation. | 1 | 6 |  |
| [536] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popCredits*TEMP1)/200; TEMP2=min(ZONEKEY.popCredits,TEMP2); TEMP2=min(TEMP1*50,TEMP2); TEMP3=(ZONEKEY.popLoyalty*TEMP2)/100; ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP2; ZONEKEY.popLoyalty=max(0,ZONEKEY.popLoyalty-25); TEMP4=TEMP3; REGKEY.credits=REGKEY.credits+TEMP4; | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to raise <TEMP4> Credits of emergency tax. Loyalty dropped with 25  points. | 1 | 1 | Impose as much of the private Credits as you can. 25 point drop in Loyalty will be caused by this Stratagem. Success dependend on adminstrative skill roll by <CHARNAME>. |
| [537] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/100000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; ZONEKEY.worker=ZONEKEY.worker+TEMP2; | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP2>00 Workers from the Population. Population Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 10% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |
| [538] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/400000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; TEMP3=(ZONEKEY.popLoyalty*ZONEKEY.worker*TEMP1)/400000; ZONEKEY.worker=ZONEKEY.worker-TEMP3; TEMP4=TEMP2+TEMP3; exe(346,11,ZONEID,12,TEMP4); | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP4>00 Colonists from our Populace. Population and Worker Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 5% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |
| [539] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/500000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; TEMP3=(ZONEKEY.popLoyalty*ZONEKEY.worker*TEMP1)/500000; ZONEKEY.worker=ZONEKEY.worker-TEMP3; TEMP4=TEMP2+TEMP3; exe(346,11,ZONEID,9,TEMP4); | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP4>00 Recruits from our Populace. Population and Worker Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 2.5% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |
| [540] | ROLL>=(DIFF+50); TEMP1>5; TEMP2>0; |  | We also found new Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |
| [540] | ROLL>=(DIFF+50) |  | We rolled a critical succes! | 1 | 2 |  |
| [540] | ROLL>=(DIFF+50); TEMP2>0; | TEMP1=che(249,22,ZONEID); |  |  |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1<1; TEMP2>0; |  | We are quite sure that there are no further hidden resources left in this Zone. | 1 | 4 |  |
| [540] |  | ROLL=che(249,1,CHARID,26); DIFF=50; | Difficulty was <DIFF>. Rolled <ROLL> on prospecting skill roll. | 1 | 1 | Difficulty is 50. Prospecting skill roll by <CHARNAME> will be made. |
| [540] | ROLL>=(DIFF+50); TEMP1==2; TEMP2>0; |  | We also found Metal Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |
| [540] | ROLL>=(DIFF+50); TEMP1==3; TEMP2>0; |  | We also found Rare Metal Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |
| [540] | ROLL>=(DIFF+50); TEMP1==4; TEMP2>0; |  | We also found Radioactive Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |
| [540] | ROLL>=(DIFF+50); TEMP1==5; TEMP2>0; |  | We also found Water Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |
| [540] | ROLL>=(DIFF+50); TEMP1==1; TEMP2>0; |  | We also found Oil Deposits in another Hex of <ZONENAME>. | 1 | 4 | If critical succes (>diff+50) roll you'll find an additional new Resource Hex. |
| [540][651] | ROLL>=DIFF; TEMP1==3; |  | We found Rare Metal Deposits in <ZONENAME>. | 1 | 3 |  |
| [540][651] | ROLL>=DIFF; TEMP1==2; |  | We found Metal Deposits in <ZONENAME>. | 1 | 3 |  |
| [540][651] | ROLL>=DIFF; TEMP1==1; |  | We found Oil Deposits in <ZONENAME>. | 1 | 3 | If successful you'll find a new Resource Hex. |
| [540][651] | ROLL>=DIFF; TEMP1<1; |  | We are quite sure that there are no hidden resources left in this Zone. | 1 | 3 |  |
| [540][651] | ROLL>=DIFF | TEMP1=che(249,22,ZONEID); TEMP2=TEMP1; |  |  |  |  |
| [540][651] | ROLL>=DIFF; TEMP1==5; |  | We found Water Deposits in <ZONENAME>. | 1 | 3 |  |
| [540][651] | ROLL>=DIFF; TEMP1>5; |  | We found new Deposits in <ZONENAME>. | 1 | 3 |  |
| [540][651] | ROLL<DIFF |  | I regret to report we did not find anything. This does not mean that there is nothing to be found. Our search efforts might have been eh.. sub optimal. | 1 | 3 |  |
| [540][651] | ROLL>=DIFF; TEMP1==4; |  | We found Radioactive Deposits in <ZONENAME>. | 1 | 3 |  |
| [541] | ROLL>=DIFF; TEMP1>5; |  | We found a new Archaeological Find in <ZONENAME>. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1==5; |  | We found Water Deposits in <ZONENAME>. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1==4; |  | We found a common Archaeological Find in <ZONENAME>. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1==2; |  | We found a rare Archaeological Find  in <ZONENAME>. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1==1; |  | We found a very rare Archaeological Find  in <ZONENAME>. | 1 | 2 | If successful you'll find a new Archaeological Find. |
| [541] |  | ROLL=che(249,1,CHARID,25); DIFF=100; | Difficulty was <DIFF>. Rolled <ROLL> on science skill roll. | 1 | 1 | Difficulty is 100. Science skill roll by <CHARNAME> will be made. |
| [541] | ROLL>=DIFF | TEMP1=che(249,23,ZONEID); |  |  |  |  |
| [541] | ROLL<DIFF |  | I regret to report we did not find anything. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1==3; |  | We found an uncommon Archaeological Find  in <ZONENAME>. | 1 | 2 |  |
| [541] | ROLL>=DIFF; TEMP1<1; |  | We are quite sure that there are no hidden Archaeological Finds left in this Zone. | 1 | 2 |  |
| [542] |  | TEMP1=che(249,1,CHARID,6); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/10000; TEMP2=TEMP2*3; TEMP2=TEMP2+dth(5,100); ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP2; | <CHARNAME> rolled <TEMP1> on the oratory skill roll. We managed to attract <TEMP2> Credits of investment into the Private Economy of <ZONENAME>. | 1 | 1 | Increase the amount of Private Credits available in the Private Economy of this Zone. Success dependend on oratory skill roll by <CHARNAME>. |
| [543] |  | TEMP1=che(249,1,CHARID,6); TEMP2=(ZONEKEY.popHapiness*ZONEKEY.freeFolk*TEMP1)/60000;  ZONEKEY.pop=ZONEKEY.pop+TEMP2; ZONEKEY.freeFolk=ZONEKEY.freeFolk-TEMP2; exe(346,49,ZONEID); | <CHARNAME> rolled <TEMP1> on the oratory skill roll. We managed to attract <TEMP2>00 Free Folk to settle in <ZONENAME> City. | 1 | 1 | Increase the Zone's Population by persuading Free Folk to settle in the City. Success dependend on oratory skill roll by <CHARNAME>. |
| [544] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+100; CHARKEY.41=CHARKEY.41+100; |  |  |  |  |
| [544] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 3 | Will improve relation with Leader with 2d10 points. Modified for Egoism. |
| [544] |  | TEMP4=dth(2,10); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-100; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; |  |  |  |  |
| [545] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 3 | Will improve relation with Leader with 3d20 points. Modified for Egoism. |
| [545] |  | TEMP4=dth(3,20); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-200; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; |  |  |  |  |
| [545] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+200; CHARKEY.41=CHARKEY.41+200; |  |  |  |  |
| [546] |  | ROLL=dth(3,20); | A 3d20 Roll is made. | 1 | 1 | A 3d20 roll will be made. |
| [546] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34*3)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 25% of his/her Seniority Points. |
| [546] | RESULT<3 | REGKEY.credits=REGKEY.credits-250 |  |  |  |  |
| [546][547][548] | RESULT<3 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> accepted gracefully and went into retirement. | 1 | 3 | Will hopefully result in the retirement of the selected Leader. |
| [546][547][548][549] |  | DIFF=che(249,29,REGID,TARGETCHARID); |  |  |  | Difficulty depends on Leaders Seniority Rank. |
| [547] |  | ROLL=dth(5,20); | A 5d20 Roll is made. | 1 | 1 | A 5d20 roll will be made. |
| [547] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/2; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 50% of his/her Seniority Points. |
| [547] | RESULT<3 | REGKEY.credits=REGKEY.credits-500 |  |  |  |  |
| [548] |  | ROLL=dth(7,20); | A 7d20 Roll is made. | 1 | 1 | A 7d20 roll will be made. |
| [548] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 75% of his/her Seniority Points. |
| [548] | RESULT<3 | REGKEY.credits=REGKEY.credits-1000 |  |  |  |  |
| [549] | RESULT>2 |  | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. | 1 | 3 |  |
| [549] | RESULT<3 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> did not like it, but went into retirement anyway. | 1 | 3 |  |
| [549] |  | ROLL=dth(1,20); | A 1d20 Roll is made. | 1 | 1 | A 1d20 roll will be made. |
| [561] |  | TEMP1=ZONEKEY.pop; TEMP2=min(TEMP1,500); REGKEY.credits=REGKEY.credits-TEMP2; | We managed to mobilize (and pay) <TEMP2> Population and Artisans. Paid them 0.01 Cr each for the artisinal production of Industrial Points (IP). | 1 | 1 | Will cost 1 Credit per 1000 Pop available, maximized at 500 Credits. |
| [561] |  | TEMP3=TEMP2*dth(1,10)/10; TEMP3=TEMP3*REGKEY.commerce/50; | Produced <TEMP3> IP. Delivered to <ZONENAME> Inventory. | 1 | 2 | Will produce 1d10 * Population / 10 IP multiplied with Commerce Profile / 50. |
| [561] |  | exe(346,11,ZONEID,8,TEMP3); exe(346,11,ZONEID,22,TEMP3); |  |  |  |  |
| [581] |  | ZONEKEY.extendMine=1 | We are setting preparations in motion. You should have a decision on your desk early next round. | 1 | 1 | Will allow you to increase the reserves in a Mine, but in exchange for a reduction in Mining Level. |
| [651] |  | ROLL=che(249,1,CHARID,26); DIFF=75; | Difficulty was <DIFF>. Rolled <ROLL> on prospecting skill roll. | 1 | 1 | Difficulty is 75. Prospecting skill roll by <CHARNAME> will be made. |
| [801] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3 | 1 | 3 | Fate Points +3 |
| [801] |  | TEMP1=dth(4,10); ZONEKEY.danger=min(100,ZONEKEY.danger + TEMP1); | Danger +<TEMP1> | 1 | 2 |  |
| [801] |  | ZONEID=che(249,7,REGIMEID) | Some incapable junior stationed in <ZONENAME> touched a machine that he should not have touched. Something depressurized violently and radiated a large area. The RAD dose is non-lethal, but people are fleeing the contaminated zone anyways. | 1 | 1 | Random Zone will get a 4d10 increase in Danger. |
| [802] |  | ZONEID=che(249,7,REGIMEID) | A new rage spread among our youngsters in <ZONENAME>. They are wild and partying like there is no tomorrow. Windows have been broken. Law enforcement has been in scuffles. | 1 | 1 |  |
| [802] |  | TEMP1=dth(6,10); ZONEKEY.unrest=min(100,ZONEKEY.unrest + TEMP1); | Unrest +<TEMP1> | 1 | 2 | Random Zone will get a 6d10 increase in Unrest. |
| [802] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 | Fate Points +2 |
| [803] |  |  | A young investor has chosen <ZONENAME> to start his industrial empire. | 1 | 1 | Extra Level of Private Light Industry for selected Zone. |
| [803] | che(249,11,ZONEID,301)>0 | exe(346,17,ZONEID,301) | He upgraded the already present private Light Industry asset. | 1 | 2 |  |
| [803] | che(249,11,ZONEID,301)==0 | exe(346,18,ZONEID,301) | He constructed a new private Light Industry asset. | 1 | 3 |  |
| [803] |  |  | He tells us he is eager to make his fortune and will be happy to pay you his dues. | 1 | 4 |  |
| [804] |  | ASSETID=che(249,9,ZONEID,8,999999); TEMP1=che(249,10,ASSETID,1,0); TEMP2=min(9,TEMP1+dth(1,4)); TEMP3=TEMP2-TEMP1; exe(346,16,ASSETID,1,TEMP2); | One of our valiant prospectors made an amazing discovery at our mining operations in <ZONENAME>. It will be +<TEMP3> level(s) easier to mine at <LOOKUPASSETNAME=<ASSETID>>. | 1 | 1 | Improve the Ease-of-Mining in a random Mine Asset in selected Zone. |
| [805] |  |  | After forcing our entry into a desolate site we found a large room stocked with resources. | 1 | 1 | Get a Goody Box with 4d100 metals, 2d100 rare metals and 8d100 fuel. |
| [805] |  | TEMP1=dth(4,100); exe(346,11,ZONEID,2,TEMP1); | We found <TEMP1> metals. | 1 | 2 |  |
| [805] |  | TEMP2=dth(2,100); exe(346,11,ZONEID,3,TEMP2); | We found <TEMP2> rare metals. | 1 | 3 |  |
| [805] |  | TEMP3=dth(8,100); exe(346,11,ZONEID,1,TEMP3); | We found <TEMP3> fuel. | 1 | 4 |  |
| [806] |  | TEMP1=che(249,8,REGIMEID); exe(346,19,REGIMEID,TEMP1); | Our scholars have processed tons of data from the ancient archive. At first they found nothing of interest. But then... EUREKA! we found all the knowledge to use <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Random discovery of a new Tech Field (binary). |
| [807] |  | exe(346,10,REGIMEID,GAMEKEY.37,7,ZONEID) | Our troops in <ZONENAME> found a group of 10 dormant Sentinels and managed to approach, enter and control them. They have been immediately deployed. | 1 | 1 | Get a small Independent Unit of AI Walkers somewehere in selected Zone. |
| [808] |  | exe(346,20,TARGETCHARID,808) | Grace to you a new assistant joined the retinue of <TARGETCHARNAME>. He will help the Leader to help others to see the path forward. | 1 | 1 | Gives selected Leader a +10 bonus on his/her Charisma-based rolls. |
| [809] |  | exe(346,20,TARGETCHARID,809) | Grace to you a new person has entered the retinue of <TARGETCHARNAME>.. He will advice the Leader on matters of military tactics and strategy. | 1 | 1 | Gives selected Leader a +10 bonus on his/her War-based rolls. |
| [810] |  | exe(346,1,1050,14,4); TEMP1=che(249,13); | We found this extremely intelligent scientist wandering our streets like a lost puppy. We pushed <LOOKUPCHARFIRSTNAME=<TEMP1>> <LOOKUPCHARLASTNAME=<TEMP1>> into our service. You can find him in the Reserve Pool. | 1 | 1 | A new Leader will be placed in your Reserve Pool. |
| [811] |  | ZONEKEY.danger=min(100,ZONEKEY.danger+TEMP1) | Danger went up with +<TEMP1> points. | 1 | 4 |  |
| [811] | TEMP3>0 | ZONEKEY.worker=ZONEKEY.worker-TEMP3 | <TEMP3>00 workers died. | 1 | 3 |  |
| [811] | TEMP2>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP2 | <TEMP2>00 population died. | 1 | 2 |  |
| [811] |  | REGKEY.fp=REGKEY.fp+4 | Fate Points +4 | 1 | 5 | Fate Points +4 |
| [811] |  | ZONEID=che(249,7,REGIMEID) | Terrible accident at <ZONENAME>. We lost life support in a crucial dome. | 1 | 1 |  |
| [811] |  | TEMP1=dth(2,6); TEMP2=((ZONEKEY.pop*TEMP1)/100); TEMP3=((ZONEKEY.worker*TEMP1)/100); |  |  |  | A random Zone will lose 2d6% of Population and Workers and get the same 2d6 increase in Danger. |
| [812] |  | exe(346,9,-1,REGIMEID,20) | Our troops are shocked by our lack of care in preparing their rations. 20% loss of morale. | 1 | 1 | Morale of Militia and Troops is reduced with 20%. |
| [812] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 2 | Fate Points +2 |
| [813] |  | ZONEID=che(249,7,REGIMEID); TEMP1=dth(4,10); | You have not been yourself sir! You have been slinging insults and death threats to the people of <ZONENAME>. They are shocked. | 1 | 1 |  |
| [813] |  | ZONEKEY.fear=min(100,ZONEKEY.fear+TEMP1) | Fear +<TEMP1> | 1 | 2 | A random Zone will get 4d10 increase in Fear. |
| [813] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 | Fate Points +2 |
| [814] |  | ZONEID=che(249,7,REGIMEID) |  |  |  |  |
| [814] |  | TEMP1=dth(4,10); | The Militia in <ZONENAME> had a profound crisis of confidence and a loss of faith in our common cause. | 1 | 1 | A random Zone will suffer a 4d10 decrease in Militancy. |
| [814] |  | ZONEKEY.militancy=max(0,ZONEKEY.militancy-TEMP1); | Militancy -<TEMP1> | 1 | 2 | Fate Points +2 |
| [814] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 |  |
| [815] |  | TEMP1=dth(10,10); | <ZONENAME> has suddenly turned very popular with settlers. I don't think they'll find the pot of gold they are looking for, but in the meantime it causes a nice population boom for us. | 1 | 1 |  |
| [815] |  | ZONEKEY.pop=ZONEKEY.pop+TEMP1; | Population +<TEMP1>00 | 1 | 2 | Population of selected Zone will be increased with 10d10 * 100. |
| [816] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 | Worker Happiness of selected Zone increases with 3d10. |
| [816] |  | TEMP1=dth(3,10); | The workers of <ZONENAME> received their day off. They are singing songs and feasting together. I also pinned some medals on chests. They seem very pleased with their Labour Day. | 1 | 1 |  |
| [817] |  |  | Band of gladiators has chosen <ZONENAME> to build an arena. | 1 | 1 | Extra Level of Arena for selected Zone. |
| [817] | che(249,11,ZONEID,841)>0 | exe(346,17,ZONEID,841) | They upgraded the already present private Arena asset. | 1 | 2 |  |
| [817] | che(249,11,ZONEID,841)==0 | exe(346,18,ZONEID,841) | They constructed a new private Arena asset. | 1 | 3 |  |
| [817] |  |  | The people are eager to attend and be entertained by violence and gore. | 1 | 4 |  |
| [818] |  | TEMP1=dth(2,20)*100; REGKEY.credits=REGKEY.credits+TEMP1; | That banker you met recently has transferred a generous sum of <TEMP1> credits to our treasury. | 1 | 1 | Gives you 2d20 * 100 Credits. |
| [819] |  |  | Travelling teachers have with your permission chosen <ZONENAME> to build a school. | 1 | 1 | Extra Level of School for selected Zone. |
| [819] | che(249,11,ZONEID,881)>0 | exe(346,17,ZONEID,881) | They upgraded the already present private School asset. | 1 | 2 |  |
| [819] | che(249,11,ZONEID,881)==0 | exe(346,18,ZONEID,881) | They constructed a new private School asset. | 1 | 3 |  |
| [819] |  |  | They are happy to have a new safe place after their long and perillious travels. | 1 | 4 |  |
| [820] | che(249,11,ZONEID,861)>0 | exe(346,17,ZONEID,861) | He upgraded the already present private Casino asset. | 1 | 2 |  |
| [820] | che(249,11,ZONEID,861)==0 | exe(346,18,ZONEID,861) | He constructed a new private Casino asset. | 1 | 3 |  |
| [820] |  | ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP1; | It caused a big influx of people visiting <ZONENAME> to go gambling. This also attracted other private investments (+<TEMP1> Cr) in our economy. | 1 | 4 |  |
| [820] |  | TEMP1=dth(3,5)*100; | With your permission a rich and yes, physically impressive, merchant has chosen <ZONENAME> to build a casino. | 1 | 1 | Extra Level of Casino for selected Zone. |
| [821] |  | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP1) | Population Happiness +<TEMP1> | 1 | 3 |  |
| [821] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 |  |
| [821] |  | TEMP1=dth(2,10); | Parades, decorations and a concert! And all in your glory! The people of <ZONENAME> thank you for your generosity. It was a day to remember. | 1 | 1 | Worker and Population Happiness of selected zone increase with +2d10 points. |
| [822] |  | ZONEKEY.popLoyalty=min(100,ZONEKEY.popLoyalty+TEMP1) | Population Loyalty +<TEMP1> | 1 | 4 |  |
| [822] |  | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP1) | Population Happiness +<TEMP1> | 1 | 3 |  |
| [822] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 |  |
| [822] |  | TEMP1=dth(3,10); | Sir! Truly! That was one of the most magnificent speeches I have ever heard. | 1 | 1 | Worker and Population Happiness & Loyalty of selected zone increase with +3d10 points. |
| [823] |  | ZONEKEY.unrest=max(0,ZONEKEY.unrest-TEMP1) | Unrest -<TEMP1> | 1 | 2 |  |
| [823] |  | TEMP1=dth(3,10); | The people listened to you. And they seem so much calmer now. You have truly touched them. | 1 | 1 | Unrest in selected Zone will decrease with -3d10 points. |
| [824] |  | exe(346,25,HISID,824,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [825] |  | exe(346,25,HISID,825,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [826] |  | exe(346,20,TARGETCHARID,826); TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | <TARGETCHARNAME> was disappointed with your lack of trust. | 1 | 1 | Reduces selected Leaders Corruption level every turn with 5 points. |
| [827] |  | exe(346,20,TARGETCHARID,827) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Gives selected Leader a +40 modifier on Personal Combat Skill |
| [828] |  | REGKEY.combatBonus=REGKEY.combatBonus+50 | Drug has been administered. Until start of next turn all your troops have Combat Bonus +50%. | 1 | 1 | Combat Bonus +50% |
| [829] |  |  | After opening an abandoned ancient vault we found a large room stocked with resources. | 1 | 1 | Get a Goody Box with 4d100 rare metals, 4d20 machines and 2d20 high tech parts. |
| [829] |  | TEMP3=dth(2,20); exe(346,11,ZONEID,14,TEMP3); | We found <TEMP3> High-Tech parts. | 1 | 4 |  |
| [829] |  | TEMP2=dth(4,100); exe(346,11,ZONEID,3,TEMP2); | We found <TEMP2> Rare Metals. | 1 | 3 |  |
| [829] |  | TEMP1=dth(4,20); exe(346,11,ZONEID,13,TEMP1); | We found <TEMP1> Machines. | 1 | 2 |  |
| [830] |  | exe(346,24,ZONEID,830); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |
| [831] |  | exe(346,24,ZONEID,831); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |
| [832] |  | exe(346,8,ZONEID,TEMP1,1);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |
| [832] |  | exe(346,14,REGIMEID,TEMP1) |  |  |  |  |
| [832] |  | REGKEY.fp=REGKEY.fp+6 | Fate Points +6 | 1 | 2 | Fate Points +6 |
| [832] | REGIMEKEY.size>2 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |
| [832] |  | TEMP1=REGIMESTAT.11; ZONEID=che(249,7,REGIMEID); exe(346,8,ZONEID,TEMP1,1); | Disaster! An unexpected rebellion has started in <ZONENAME>. | 1 | 1 | An unexpected rebellion will start in a random Zone. |
| [832] | REGIMEKEY.size>6 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |
| [832] | REGIMEKEY.size>4 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |
| [833] |  | exe(346,25,HISID,833,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [834] |  | exe(346,25,HISID,834,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |
| [835] |  | exe(346,20,TARGETCHARID,835) | We never knew <TARGETCHARNAME> had so much capital? | 1 | 1 | Increases selected Leader Loyalty with +1 every turn. |
| [836] |  | exe(346,20,TARGETCHARID,836) | We never knew about <TARGETCHARNAME>'s family, didn't we? | 1 | 1 | Increases relation with selected Leader with +2 every turn. |
| [837] |  | exe(346,23,REGID,TEMP1) | You gained <TEMP1> PP. | 1 | 2 | PP + 6d6 modified with Popularity |
| [837] |  | TEMP1=(dth(6,6)*REGKEY.popularity)/100; | You have been paraded around. There were many celebrations. And many gifts given and favors offered. | 1 | 1 |  |
| [838] |  | exe(346,27,REGIMEID,3,3) | Woow. This depot turned out to be a true treasure trove. You found <LOCALTEMPTEXT>. | 1 | 1 | Get 3 Random Uncommon Artifacts |
| [839] |  | exe(346,24,ZONEID,839); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |
| [840] |  | exe(346,24,ZONEID,840); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |
| [841] |  | TEMP1=dth(5,10); TEMP2=((ZONEKEY.pop*TEMP1)/100); TEMP3=((ZONEKEY.worker*TEMP1)/100); |  |  |  | A random Zone will lose 5d10% of Population and Workers and get the same 5d10 increase in Unrest. |
| [841] |  | ZONEID=che(249,7,REGIMEID) | A freak disease struck our populace at <ZONENAME>. It stroke as quick and violently as it burned itself out. The suffering is beyond description. | 1 | 1 |  |
| [841] | TEMP2>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP2 | <TEMP2>00 population died. | 1 | 2 |  |
| [841] | TEMP3>0 | ZONEKEY.worker=ZONEKEY.worker-TEMP3 | <TEMP3>00 workers died. | 1 | 3 |  |
| [841] |  | ZONEKEY.unrest=min(100,ZONEKEY.unrest+TEMP1) | Unrest went up with +<TEMP1> points. | 1 | 4 |  |
| [841] |  | REGKEY.fp=REGKEY.fp+9 | Fate Points +9 | 1 | 5 | Fate Points +9 |
| [851] |  | exe(346,23,REGID,50,0) | Politicians and bureaucrats rallied behind you. Political Points have increased. | 1 | 1 | Political Points +50 |
| [852] |  | REGKEY.credits=REGKEY.credits+1000; | Businessmen and power brokers have rallied behind you. Credits have increased. | 1 | 1 | Credits +1000 |
| [901] |  | exe(346,20,TARGETCHARID,901) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Strength Stat. |
| [902] |  | exe(346,20,TARGETCHARID,902) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a 50% bonus on all XP earned. |
| [903] |  | exe(346,20,TARGETCHARID,903) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Intelligence Stat. |
| [904] |  | exe(346,20,TARGETCHARID,904) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Charisma Stat. |
| [905] |  | exe(346,20,TARGETCHARID,905) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Willpower Stat. |
| [906] |  | exe(346,20,TARGETCHARID,906) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her War Stat. |
| [911] |  | exe(346,25,HISID,911,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [912] |  | exe(346,25,HISID,912,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [913] |  | exe(346,25,HISID,913,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [914] |  | exe(346,25,HISID,914,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [915] |  | exe(346,25,HISID,915,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [916] |  | exe(346,25,HISID,916,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |
| [921] |  | exe(346,18,ZONEID,3101) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [922] |  | exe(346,18,ZONEID,3102) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [923] |  | exe(346,18,ZONEID,3103) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [924] |  | exe(346,18,ZONEID,3104) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [925] |  | exe(346,18,ZONEID,3105) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [926] |  | exe(346,18,ZONEID,3106) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |
| [930] |  | exe(346,20,TARGETCHARID,930) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Troops morale limit +30 points higher if Leader is within 2 Hex. |
| [931] |  | exe(346,20,TARGETCHARID,931) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Admin Strain Range is doubled. |
| [932] |  | exe(346,20,TARGETCHARID,932) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | CAS growth increased by +2 points. |
| [933] |  | exe(346,20,TARGETCHARID,933) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Gives upto 5 Units under direct command 1 Gladiator Unit Feat each. |
| [934] |  | exe(346,20,TARGETCHARID,934) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases Inventor & Science Skill Rolls with +25. |
| [935] |  | exe(346,19,REGID,401) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [936] |  | exe(346,19,REGID,402) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [937] |  | exe(346,19,REGID,403) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [938] |  | exe(346,19,REGID,404) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [939] |  | exe(346,19,REGID,405) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [940] |  | exe(346,19,REGID,406) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [941] |  | exe(346,19,REGID,407) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [942] |  | exe(346,19,REGID,408) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [943] |  | exe(346,19,REGID,409) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [944] |  | exe(346,19,REGID,410) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |
| [945] |  | exe(346,57,41,1,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |
| [946] |  | exe(346,57,32,2,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |
| [947] |  | exe(346,57,23,1,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |
| [948] |  | exe(346,57,36,2,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |
| [949] |  | REGKEY.fp=REGKEY.fp+1 | Fate Points +1. | 1 | 1 | Fate Points +1 |
| [949] |  | exe(346,20,TARGETCHARID,949); TARGETCHARSTAT.38=TARGETCHARSTAT.38-20; | <TARGETCHARNAME> has surrendered to the temptation of alcohol. | 1 | 1 | Alcoholic Leader gets -20 on Intelligence Stat. |
| [950] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3. | 1 | 1 | Fate Points +3 |
| [950] |  | REGKEY.word=REGKEY.word*3/4; | Your Word Score went down with -25%. | 1 | 1 | Word Score -25% |
| [951] |  | ZONEID=che(249,7,REGID,1,0); CULTUREID=ZONESTAT.9; CULTUREKEY.fertility=CULTUREKEY.fertility-20; | Fertility of the Culture in <ZONENAME> went down with -20. | 1 | 1 | Fertility of Culture of random Zone goes down with -20. |
| [951] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3. | 1 | 1 | Fate Points +3 |
| [952] |  | REGKEY.fp=REGKEY.fp+4 | Fate Points +4. | 1 | 1 | Fate Points +4 |
| [952] |  | REGKEY.prestigeDamage=REGKEY.prestigeDamage+30; | Your Prestige Damage has gone up with +30. | 1 | 1 | Prestige Damage +30 |
| [953] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2. | 1 | 1 | Fate Points +2 |
| [953] |  | REGKEY.mind=REGKEY.mind/2 | Your Mind Profile has been halved. | 1 | 1 | Mind Profile /2 |
| [954] |  | REGKEY.fp=REGKEY.fp+1 | Fate Points +1. | 1 | 1 | Fate Points +1 |
| [954] |  | exe(346,20,TARGETCHARID,954); TARGETCHARSTAT.37=TARGETCHARSTAT.37-20; | <TARGETCHARNAME> falls down a maintenance shaft and hits his/her head severly. | 1 | 1 | Leader with Head Injury gets -20 on Charisma Stat |

