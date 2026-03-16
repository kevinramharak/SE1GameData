# `Flex Diplomatic Action FX vs AI` (`278`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
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
| `6` | mouse over | `Text` |
| `7` | temp | `Text` |

### Data

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | mouse over | temp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [1] |  | DIFF=60+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3) |  |  |  |  |  |
| [1] | RESULT==2 |  | Success! <TARGETREGIMENAME> accepted to exchange envoys with us. | 1 | 1 |  |  |
| [1] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to communicate with us. | 1 | 1 |  |  |
| [1] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was rejoiced to meet us and exchange envoys. | 1 | 1 |  |  |
| [1] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our attempt to open communications. | 1 | 1 |  |  |
| [1][2][3] | RESULT<=2 | REGREGKEY.dipRel = REGREGKEY.dipRel + TEMP2 |  |  |  | A (critical) success will increase the communication level. |  |
| [1][2][3] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind; |  |  |  | Difficulty is further modified by + your fist profile and - your mind profile. |  |
| [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][31][32][33][101][102][103][104][105][106] |  | REGREGKEY.cardPlayed=ROUND |  |  |  |  |  |
| [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][33][102][103][104] | TARGETREGIMESTAT.2<=0 |  | We were not able to find any representative or leader in this zone. | 1 | 1 |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | REVREGREGKEY.dipRel=REGREGKEY.dipRel |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | ROLL>=DIFF | RESULT=2; TEMP1=10; TEMP2=1; |  |  |  | A success will result in +10 relation. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | REVREGREGKEY.dipRes=REGREGKEY.dipRes |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | REVREGREGKEY.dipPact=REGREGKEY.dipPact |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | TEMP1>0 | TEMP3=(TEMP1/2) |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | TEMP1>0 | REGKEY.mind=REGKEY.mind+inv(REGKEY.mind,TEMP3) |  |  |  | If (critical) success your mind profile will go up by 1/2 your relation gain. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; TEMP2=1; REGREGKEY.aiNegativeDip = 60+ROUND; |  |  |  | A critical failure (roll 50 or more below difficulty) will result in -10 relation. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=1; REGREGKEY.aiNegativeDip = 30+ROUND; |  |  |  | A failure will result in the relation staying the same |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=20; TEMP2=1; |  |  |  | A critical success (roll 50 or more above difficulty) will result in +20 relation. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | REVREGREGKEY.dipTrade=REGREGKEY.dipTrade |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | ROLL=che(249,1,CHARID,2) |  |  |  | A diplomacy skill roll will be made versus the difficulty level by <CHARNAME> |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | REGREGKEY.relation = min(100,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | REGREGKEY.aiNegativeDip>0 | TEMP1=REGREGKEY.aiNegativeDip-ROUND; TEMP1=max(0,TEMP1); DIFF=DIFF+(TEMP1*2); |  |  |  | Difficulty is modified by earlier cancellations by AI. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | DIFF=max(50,DIFF); |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | TEMP1=che(249,16,REGIMEID,TARGETREGIMEID,0); DIFF=(DIFF*TEMP1)/100; |  |  |  | Difficulty is modified by the attitude the target regime has towards you as well as their Faction in power. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | REVREGREGKEY.aiHatred>0 | DIFF=DIFF+max(0,(REVREGREGKEY.aiHatred*5)) |  |  |  | Difficulty can be set much higher if the regime in question has a special hatred against you. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | TARGETCULTUREKEY.nodip==1 | DIFF=DIFF+500; |  |  |  | Difficulty can be set to impossible with certain cultures who do not engage in diplomacy. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] | SOURCEAI==1 | DIFF=DIFF/2; |  |  |  |  |  |
| [1][2][3][5][6][7][9][10][11][13][14][15] |  | DIFF=DIFF - REGKEY.word; DIFF=DIFF + 50; |  |  |  | Difficulty is Modified with your Word Score. |  |
| [1][2][3][5][6][7][9][10][11][13][14][15][4][8][12][16] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [10] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [10] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [10] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [10] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [1001] |  | REGKEY.ecoBonusPoints=REGKEY.ecoBonusPoints+2500; | Production next turn will benefit from 2500 Public Industrial Bonus Points (minimal 50% increased production) | 1 | 1 | Public Industrial Bonus Points +2500 |  |
| [100101] |  | TEMP2=inv(REGKEY.syndicate_relation,50); REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; | The Godfather transfers you his great gratitude for your gesture of cooperation. Your relation with the Crime Syndicate increased with +<TEMP2> points. | 1 | 3 | Your relation with the Syndicate will improve a lot. |  |
| [100101] |  | TARGETCHARSTAT.6=10; TARGETCHARSTAT.7=ZONEID; TARGETCHARSTAT.49=60+dth(2,20); TARGETCHARPROFILE.enforcement=dth(1,3); | An influental member of the <LOOKUPCHARLASTNAME=<TEMP1>> family was installed as the new Governor. | 1 | 2 | A Governor chosen by the Crime Syndicate will be installed. |  |
| [100101] |  | TARGETCHARID=che(249,24,1001,1,4); TEMP1=REGKEY.syndicate_leader; |  |  |  |  |  |
| [100101] | TARGETCHARID>0 | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TEMP1=TARGETCHARSTAT.20; TEMP1=TEMP1/2; TARGETCHARSTAT.20=TARGETCHARSTAT.20-TEMP1; | Governor of <ZONENAME> was told to pack his bags and make place for a Crime Syndicate man. Relation with the displeased former Governor dropped -<TEMP1> points. | 1 | 1 | If Zone currently he has a Governor he'll be asked to vacate. |  |
| [100101] |  | TARGETCHARID=che(249,26,10,ZONEID,REGID); |  |  |  |  |  |
| [100102] | RESULT<=2 | TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; | Relation with Crime Syndicate improved with +<TEMP2> points. | 1 | 3 |  |  |
| [100102] |  | DIFF=REGKEY.syndicate_ambition-20; |  |  |  |  |  |
| [100102] | RESULT==4 | TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2; | Relation with Crime Syndicate decreased with -<TEMP2> points. | 1 | 3 |  |  |
| [100102] |  | TEMP5=REGKEY.syndicate_leader; |  |  |  |  |  |
| [100102][100103][100104] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [100102][100103][100104] |  |  | Godfather of the <LOOKUPCHARLASTNAME=<TEMP5>> Syndicate accepted your invitation. He entered the Presidential HQs discretely through a delivery entrance. |  |  |  |  |
| [100102][100103][100104] |  | ROLL=che(249,1,CHARID,5) |  |  |  | A Streetwise Skill Roll will be made by <CHARNAME>. |  |
| [100102][100103][100104] | ROLL>=DIFF | RESULT=2; TEMP3=100; |  |  |  | A success will result in normal execution of task. |  |
| [100102][100103][100104] | ROLL>=(DIFF+50) | RESULT=1; TEMP3=200; |  |  |  | A critical success (roll 50 above difficulty) will result in doubling the effect of the task. |  |
| [100102][100103][100104] | ROLL<DIFF | RESULT=3; TEMP3=0; |  |  |  | A failure will result in the task being executed having no effect. |  |
| [100102][100103][100104] | ROLL<(DIFF-50) | RESULT=4; TEMP3=0; |  |  |  | A critical failure (roll 50 below difficulty) will result in the task being executed having the opposite effect. |  |
| [100102][100103][100104] | RESULT==2 |  | Successful Skill Roll! The talks with the Godfather went well. | 1 | 2 |  |  |
| [100102][100103][100104] | RESULT==3 |  | Failure! The talks did not go well. | 1 | 2 |  |  |
| [100102][100103][100104] | RESULT==1 |  | Critical Success! The Godfather really liked you. Effect of the action has been doubled! | 1 | 2 |  |  |
| [100102][100103][100104] | RESULT==4 |  | Critical Failure! The talks took a turn for the worse and the Godfather took offense. | 1 | 2 |  |  |
| [100103] | RESULT==3 |  | No deal was reached. | 1 | 3 |  |  |
| [100103] | RESULT==2 | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_deal=1; | A Deal was reached! | 1 | 3 |  |  |
| [100103] | RESULT==1 | TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_deal=1; | A Deal was reached and the Relation with Crime Syndicate also improved with +<TEMP2> points. | 1 | 3 |  |  |
| [100103] | RESULT==4 | TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2; | Relation with Crime Syndicate decreased with -<TEMP2> points. | 1 | 3 |  |  |
| [100103] |  | DIFF=REGKEY.syndicate_ambition-(REGKEY.syndicate_relation/3); |  |  |  |  |  |
| [100104] | RESULT==4 | TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2; | Relation with Crime Syndicate decreased with -<TEMP2> points. | 1 | 3 |  |  |
| [100104] | RESULT==3 |  | No deal was reached. | 1 | 3 |  |  |
| [100104] | RESULT==1 | TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_deal=2; | A Deal was reached and the Relation with Crime Syndicate also improved with +<TEMP2> points. | 1 | 3 |  |  |
| [100104] |  | DIFF=20+REGKEY.syndicate_greed-(REGKEY.syndicate_relation/2); |  |  |  |  |  |
| [100104] | RESULT==2 | REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_deal=2; | A Deal was reached! | 1 | 3 |  |  |
| [100105] | ZONEKEY.syndicate_crew<dth(1,6) | ZONEKEY.syndicate_credits=0; |  |  |  |  |  |
| [100105] |  | exe(346,42,100105,ZONEID,ROLL) | <LOCALTEMPTEXT> | 1 | 2 | A light law enforcement operation will be launched. The better the ratio of Troops (and their security support) versus the number of Crews the better the result. |  |
| [100105] |  | TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2; | Relation with Crime Syndicate decreased with -<TEMP2> points. | 1 | 5 | Will decrease relation with Syndicate, especially if you have a Deal with them. |  |
| [100105] | ZONEKEY.syndicate_crew<1 | TEMP5=REGKEY.syndicate_credits/max(1,REGKEY.size); TEMP5=TEMP5/4; REGKEY.syndicate_credits=TEMP5; |  |  |  |  |  |
| [100105][100106] |  | ROLL=che(249,1,CHARID,5) | Operational Command Roll of <CHARNAME> was <ROLL>. | 1 | 1 | A Streetwise Skill Roll will be made. |  |
| [100106] | ZONEKEY.syndicate_crew<dth(1,6) | ZONEKEY.syndicate_credits=0; |  |  |  |  |  |
| [100106] |  | exe(346,42,100106,ZONEID,ROLL) | <LOCALTEMPTEXT> | 1 | 2 | A heavy law enforcement operation will be launched. The better the ratio of Troops (and their security support) versus the number of Crews the better the result. |  |
| [100106] |  | TEMP2=REGKEY.syndicate_relation/5; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2; | Relation with Crime Syndicate decreased with -<TEMP2> points. | 1 | 5 | Will decrease relation with Syndicate, especially if you have a Deal with them. |  |
| [100106] | ZONEKEY.syndicate_crew<1 | TEMP5=REGKEY.syndicate_credits/max(1,REGKEY.size); TEMP5=TEMP5/2; REGKEY.syndicate_credits=TEMP5; |  |  |  |  |  |
| [100107] |  | exe(346,20,TARGETCHARID,100101) | Grace to you a Consiglieri joined the retinue of <TARGETCHARNAME>. He will help the Leader to devise smarter plans. | 1 | 1 | Gives selected Leader a +15 bonus on his/her Intelligence-based rolls. |  |
| [100108] |  | TARGETCHARID=che(249,24,1001,1,4); TEMP1=REGKEY.syndicate_leader; |  |  |  |  |  |
| [100108] |  | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.36=TARGETCHARSTAT.36+dth(2,10); TARGETCHARSTAT.49=60+dth(2,20); TARGETCHARPROFILE.enforcement=dth(1,3); | We recruited a Wise Guy from the Crime Syndicate in our ranks. | 1 | 2 | A Leader chosen by the Crime Syndicate will join the Reserve Pool. |  |
| [100109] |  | exe(346,25,HISID,100101,1) | The Unit has received the Syndicate support you allocated. They send you their somewhat mixed gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100110] |  | exe(346,25,HISID,100102,1) | The Unit has received the Syndicate support you allocated. They send you their somewhat mixed gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [1002] |  | TEMP1=dth(5,20); REGKEY.extraCasualtyTreshold=REGKEY.extraCasualtyTreshold+TEMP1; | Persuaded by the need to sacrifice in order to attain victory our populace received a <TEMP1>% bonus on its Casualty Threshold. | 1 | 1 | Casualty Threshold +5d20 |  |
| [100201] |  | REGKEY.corp_meeting=1; | Yes sir, I scheduled a meeting to talke with the CEO of <LOOKUPCHARLASTNAME=<TEMP5>> Corporation. Expect it next turn. | 1 | 1 | Schedules a meeting with the CEO for next turn. |  |
| [100201][100202][100203][100204][100205][100206][100207][100208][100209][100210] |  | TEMP5=REGKEY.corp_leader; |  |  |  |  |  |
| [100202] |  | exe(346,20,TARGETCHARID,100201) | Grace to you <TARGETCHARNAME> joined the board of <LOOKUPCHARLASTNAME=<TEMP5>> Corporation. | 1 | 1 | Makes selected Leader a Board Member. |  |
| [100202] |  | TEMP1=dth(5,10); TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP1; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | <TARGETCHARNAME> is pleased and relation went up with <TEMP1> points. | 1 | 2 | Will increase Relation with Leader with +5d10 points. |  |
| [100203] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [100203] |  | DIFF=(REGKEY.corp_savy+REGKEY.corp_toughness)/2 |  |  |  |  |  |
| [100203] |  | ROLL=che(249,1,CHARID,17) |  |  |  | A Resist Influence Skill Roll will be made by <CHARNAME>. |  |
| [100203] | ROLL>=DIFF | RESULT=2; TEMP3=100; TEMP6=1; |  |  |  | A success will result in normal execution of task. |  |
| [100203] | ROLL>=(DIFF+50) | RESULT=1; TEMP3=50; TEMP6=2; |  |  |  | A critical success (roll 50 above difficulty) will result in doubling the effect of the task. |  |
| [100203] | ROLL<DIFF | RESULT=3; TEMP3=0; TEMP6=0; |  |  |  | A failure will result in the task being executed having no effect. |  |
| [100203] | ROLL<(DIFF-50) | RESULT=4; TEMP3=0; TEMP6=0; |  |  |  | A critical failure (roll 50 below difficulty) will result in the task being executed having the opposite effect. |  |
| [100203] | RESULT==3 |  | Failure! The operations did not go well. | 1 | 2 |  |  |
| [100203] | RESULT==2 |  | Successful Skill Roll! The operations went well. | 1 | 2 |  |  |
| [100203] | RESULT==4 |  | Critical Failure! The Corporation blocked our legal measures very effectively. | 1 | 2 |  |  |
| [100203] | TEMP3>0 | TEMP2=ZONEKEY.corp_control*dth(2,20)/TEMP3; TEMP2=TEMP2+dth(TEMP6,6); TEMP2=min(TEMP2,ZONEKEY.corp_control); ZONEKEY.corp_control=ZONEKEY.corp_control-TEMP2; | We reduced Corporation Control with -<TEMP2> points. | 1 | 3 |  |  |
| [100203] | RESULT==1 |  | Critical Success! The Corporation put up little defense. Effect of the operations has been doubled! | 1 | 2 |  |  |
| [100203] |  | TEMP9=dth(1,6); REGKEY.corp_relation=max(0,REGKEY.corp_relation-TEMP9); | Relation with Corporation decreased with <TEMP9> points. | 1 | 4 | Relation with Corporation will diminish with 1d6. |  |
| [100203] | RESULT=4 | TEMP2=ZONEKEY.corp_control*dth(2,10); TEMP2=TEMP2+dth(1,4); ZONEKEY.corp=ZONEKEY.corp_control+TEMP2; ZONEKEY.corp=min(100,ZONEKEY.corp_control); | Corporation Control increased with +<TEMP2> points. | 1 | 3 | Corporation Control in Zone will be diminished. |  |
| [100204] |  | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.38=30+dth(2,10); TARGETCHARPROFILE.commerce=dth(1,3)+3; TARGETCHARPROFILE.enforcement=3; | We successfully recruited a Corporate Scientist into our ranks. You'll find the new Scientist in the Reserve Pool. | 1 | 1 | A Leader chosen by the Corporation will join the Reserve Pool. |  |
| [100204] |  | TARGETCHARID=che(249,24,2,0,16); |  |  |  |  |  |
| [100205] |  | TEMP1=che(249,8,REGIMEID,1); exe(346,19,REGIMEID,TEMP1); | Corporate research delivered us the technology of <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Gives you a free fully researched Tech |  |
| [100206] |  | TEMP1=che(249,21,REGIMEID,1); exe(346,28,REGIMEID,TEMP1); | Corporate research discovered us the technology of <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Gives you a free Tech discovery |  |
| [100207] |  | TARGETCHARID=che(249,24,2,0,17); |  |  |  |  |  |
| [100207] |  | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.37=30+dth(2,10); TARGETCHARPROFILE.commerce=dth(1,3)+3; TARGETCHARPROFILE.enforcement=3; | We successfully recruited a Corporate Manager into our ranks. You'll find the new Manager in the Reserve Pool. | 1 | 1 | A Leader chosen by the Corporation will join the Reserve Pool. |  |
| [100208] | TEMP1==3; |  | The Corporation found Rare Metal Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==5; |  | The Corporation found Water Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1<1; |  | The Corporation is quite sure that there are no hidden resources left in this Zone. | 1 | 2 |  |  |
| [100208] |  | TEMP1=che(249,22,ZONEID); |  |  |  |  |  |
| [100208] | TEMP1>5; |  | The Corporation found new Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==2; |  | The Corporation found Metal Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100208] | TEMP1==1; |  | The Corporation found Oil Deposits in <ZONENAME>. | 1 | 2 | If possible the Corporation will find a new Resource hex in the Zone. |  |
| [100208] | TEMP1==4; |  | The Corporation found Radioactive Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [100209] |  | TEMP1=REGKEY.corp_toughness*ZONEKEY.corp_control/100; TEMP2=REGKEY.syndicate_toughness*ZONEKEY.syndicate_crimeLevel/100; |  |  |  |  |  |
| [100209] |  | TEMP1=TEMP1*10;TEMP2=TEMP2*10; |  |  |  |  |  |
| [100209] |  | TEMP3=dth(1,TEMP1); TEMP4=dth(1,TEMP2); |  |  |  |  |  |
| [100209] | TEMP3>=TEMP4 | TEMP6=dth(2,10); |  |  |  |  |  |
| [100209] |  | TEMP6=min(TEMP6,ZONEKEY.syndicate_crew); ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew-TEMP6; | The Corporation eliminated <TEMP6> Syndicate Crews in <ZONENAME>. | 1 | 1 | Corporation will try to eliminate as many Syndicate Crews in the Zone as possible |  |
| [100209] | TEMP3<TEMP4 | TEMP6=dth(1,6); |  |  |  |  |  |
| [100210] |  | TEMP1=REGKEY.corp_savy*ZONEKEY.corp_control/100; TEMP2=ZONEKEY.unrest; |  |  |  |  |  |
| [100210] |  | TEMP1=TEMP1*10;TEMP2=TEMP2*10; |  |  |  |  |  |
| [100210] |  | TEMP3=dth(1,TEMP1); TEMP4=dth(1,TEMP2); |  |  |  |  |  |
| [100210] | TEMP3>=TEMP4 | TEMP6=dth(4,10); |  |  |  |  |  |
| [100210] | TEMP3<TEMP4 | TEMP6=dth(2,6); |  |  |  |  |  |
| [100210] |  | TEMP6=min(TEMP6,ZONEKEY.unrest); ZONEKEY.unrest=ZONEKEY.unrest-TEMP6; | The Corporation reduced Unrest with <TEMP6> in <ZONENAME>. | 1 | 1 | Corporation will reduce Unrest in the Zone as much as possible |  |
| [1003] | che(249,21,REGIMEID,1)>0 | TEMP1=che(249,21,REGIMEID,1); exe(346,28,REGIMEID,TEMP1); | Your scientists discovered the idea of '<LOOKUPTECHNAME=<TEMP1>>'. If you have the neccessary Organisation you can now start researching it. | 1 | 1 | A free Tech Discovery |  |
| [100301] |  | REGKEY.cult1_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100302] |  | REGKEY.cult2_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100303] |  | REGKEY.cult3_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100304] |  | REGKEY.cult4_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100305] |  | REGKEY.cult5_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100306] |  | REGKEY.cult6_meeting=1 | Yes sir! We'll set up a small conference on our policies regarding this Cult. Meeting will take place next turn. | 1 | 1 | Schedule a meeting on the policies towards this Cult. |  |
| [100307] |  | exe(346,25,HISID,100301,1) | The Unit has received a gloomy Shadow Priest. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100308] |  | exe(346,25,HISID,100302,1) | The Unit has received an inspiring Anima Priest. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100309] |  | exe(346,25,HISID,100303,1) | The Unit has received a rugged Syndic Priest. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100310] |  | exe(346,25,HISID,100304,1) | The Unit has received a fierce Apocrypha Paladin. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100311] |  | exe(346,25,HISID,100305,1) | The Unit has received a gentle Eternity Guru. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100312] |  | exe(346,25,HISID,100306,1) | The Unit has received an upbeat Mystic Priest. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [1004] |  | exe(346,25,HISID,1004,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [100401] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.exploreMeeting=ZONEID; | Yes sir! We have contacted the Maritime Trade House in question to discuss signing an information exchange contract. | 1 | 1 | Schedule a meeting to sign an information exchange contract |  |
| [100402] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.transportMeeting=ZONEID; | Yes sir! We have contacted the Maritime Trade House in question to discuss signing a transport contract. | 1 | 1 | Schedule a meeting to sign a transport contract |  |
| [100403] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,13); TRADEREGKEY.hi=0; TRADEREGKEY.noMessTill=0; TRADEREGKEY.forceContact=1; | Yes sir! We have send word to the Maritime Trade House in question. We are expecting word back next round. | 1 | 1 | Try to get a line of communications open with the MTH controlling the selected Sea Zone. |  |
| [100404] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.portMeeting=ZONEID; | Yes sir! We have send word to the Maritime Trade House in question. We are expecting negotiations on the makeshift port to start next round. | 1 | 1 | Schedule a meeting to order a makeshift port. |  |
| [100405] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.policyMeeting=1; | Yes sir! We have send word to the Maritime Trade House in question. We are expecting to have a policy meeting scheduled next round. | 1 | 1 | Schedule a meeting to discuss the MTH policies. |  |
| [100406] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TEMP1=dth(1,3); TEMP1=TEMP1+1; TRADEKEY.ships=TRADEKEY.ships+TEMP1; REGKEY.credits=REGKEY.credits-2000; TEMP2=dth(1,6); ROLL=che(249,1,CHARID,2); TEMP2=TEMP2+(ROLL/12); TRADEREGKEY.relation=TRADEREGKEY.relation+TEMP2; TRADEREGKEY.relation=min(50,TRADEREGKEY.relation); | Yes sir! We have managed to construct <TEMP1> Ships for the MTH. They were pleased with our gift. Relation went up with +<TEMP2>. | 1 | 1 | Construct (and pay for!) Ships for the MTH. Will improve relation, but will mostly improve their transport capacity and naval superiority chances. |  |
| [100407] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); ROLL=che(249,1,CHARID,40); TEMP2=dth(1,6); TEMP2=TEMP2+(ROLL/10);  TRADEKEY.currentElderSupport=TRADEKEY.currentElderSupport+TEMP2; | Yes sir! We have managed to increase support for the current Elder with <TEMP2> points. For what its worth... | 1 | 1 | Bolster the position of the current MTH Clan Elder. |  |
| [100408] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); exe(346,51,TRADEID,REGIMEID); | Yes sir! We have scheduled an auction to sell a share in this MTH! Expect the results next round. | 1 | 1 | Sell 1 share in the selected MTH. |  |
| [100409] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); ROLL=che(249,1,CHARID,20); ROLL=max(ROLL,1); TEMP1=TRADEKEY.bestSellPressure; TRADEKEY.bestSellPressure=max(TRADEKEY.bestSellPressure,ROLL); TEMP2=TRADEKEY.bestSellPressure-TEMP1; | Yes sir! We tried to put pressure on the MTH to sell more shares. Pressure has been raised with +<TEMP2> points. | 1 | 1 | Pressure the MTH to sell more of its shares. |  |
| [100410] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); exe(346,52,ZONEID,5000); | Yes sir! We found some land-based traders willing to use our capital to set things up! They have established themselves in the specified Sea Zone. Next round they'll claim the all Sea Zones reachable. | 1 | 1 | Creation of a brand new MTH in a Sea Zone without. |  |
| [100411] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.reconMeeting=ZONEID; | Yes sir! We have contacted the Maritime Trade House in question to discuss signing a recon contract. | 1 | 1 | Schedule a meeting to sign a recon contract |  |
| [100412] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,7); TEMP1=dth(4,10); TRADEREGKEY.relation=TRADEREGKEY.relation+TEMP1; TRADEREGKEY.relation=min( TRADEREGKEY.relation,50); | How could they have overlooked the shine of the gem that we are? Relations with selected MTH  have gone up with +<TEMP1> points. | 1 | 1 | Relation with MTH will go up with +4d10 points. |  |
| [100413] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,7); TEMP1=dth(3,2); TEMP2=TEMP1*2; TRADEKEY.totalstock=TRADEKEY.totalstock+TEMP1; TRADEKEY.ownstock=TRADEKEY.ownstock+TEMP1; | The MTH has increased it number of shares with +<TEMP2>. Existing shareholders are mostly sad as they see their stock being diluted. | 1 | 1 | MTH will issue 6-12 new shares of which half could be auctioned off. |  |
| [100414] |  | TRADEID=chk(249,42,ZONEID,REGIMEID,7); TEMP1=TRADEKEY.currentElderSupport; TEMP2=dth(1,50); | Struggles inside the MTH are occuring. Secesionist captains are trying to split off from the MTH. Difficulty is <TEMP1>. Roll is <TEMP2>. | 1 | 1 |  |  |
| [100414] | TEMP2<TEMP1 |  | The MTH Elder has prevented the split off. | 1 | 2 |  |  |
| [100414] | TEMP2>=TEMP1 | TRADEID=chk(249,42,ZONEID,REGIMEID,7); exe(346,54,ZONEID); | A group of Captains has decided to secede from the MTH. A new MTH has been born! | 1 | 3 | Selected Zone will give birth to a new MTH if 1d50 >= current MTH Elder support. |  |
| [100415] |  | exe(346,55,1,ZONEID) | <LOCALTEMPTEXT> | 1 | 1 |  |  |
| [1005] |  | exe(346,25,HISID,1005,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [1006] |  | exe(346,25,HISID,1006,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [1007] |  | TEMP1=dth(3,10); | <ZONENAME> has been targeted by a group of specialized assasins. A number of key rabble rousers have been discretely eliminated. | 1 | 1 |  |  |
| [1007] |  | ZONEKEY.unrest=max(0,ZONEKEY.unrest-TEMP1); | Unrest -<TEMP1> | 1 | 2 | Unrest of selected Zone will decrease with -3d10 |  |
| [1008] |  | TEMP1=che(249,1,TARGETCHARID,6); ZONEID=TARGETCHARSTAT.7; TEMP2=ZONEKEY.pop+ZONEKEY.worker+1; TEMP3=(ZONEKEY.pop*ZONEKEY.popHapiness)+(ZONEKEY.worker*ZONEKEY.workerHapiness); TEMP4=min(100,TEMP3/TEMP2); TEMP4=200-TEMP4; | <TARGETCHARNAME> has organized a referendum. The difficulty for the Governor to win was <TEMP4>. The Oratory skill roll of the Governor was <TEMP1>. | 1 | 1 | Governor wins referendum if his Oratory skill roll beats 200 - average Happiness. |  |
| [1008] | TEMP1<TEMP4 | TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; | Governor lost the referendum! | 1 | 2 |  |  |
| [1008] | TEMP1>=TEMP4 |  | Governor won the referendum! | 1 | 2 |  |  |
| [1009] |  | TEMP1=dth(4,6); TEMP2=(TEMP1/3)+1; | The workers of <ZONENAME> received some extra privileges. Their Happiness increased with +<TEMP1>. However the non-Workers are less pleased and their Happiness declined with -<TEMP2>. | 1 | 1 | Worker Happiness of selected Zone increases with 4d6. Population Happiness declines with one third of that roll. |  |
| [1009] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) |  |  |  |  |  |
| [1009] |  | ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness-TEMP2) |  |  |  |  |  |
| [101] |  | REGREGKEY.relation = max(0,min(30,REGREGKEY.relation-20)) |  |  |  | You will lose 20 relation points and at least drop to relation 30. |  |
| [101] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [101] |  | exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT) | <TARGETREGIMENAME> and us are now at war! | 1 | 1 | You will be at war. |  |
| [1010] | che(249,11,ZONEID,3111)==0 | exe(346,18,ZONEID,3111) | A Zoo Asset has been constructed in <ZONENAME>. | 1 | 2 |  |  |
| [1010] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Zoo Asset for the selected Zone. |  |
| [1010] | che(249,11,ZONEID,3111)>0 | exe(346,17,ZONEID,3111) | Your Zoo Asset in <ZONENAME> has been upgraded | 1 | 2 |  |  |
| [1011] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Commercial Area Asset for the selected Zone. |  |
| [1011] | che(249,11,ZONEID,3121)==0 | exe(346,18,ZONEID,3121) | A Commercial Area Asset has been constructed in <ZONENAME>. | 1 | 2 |  |  |
| [1011] | che(249,11,ZONEID,3121)>0 | exe(346,17,ZONEID,3121) | Your Commercial Area Asset in <ZONENAME> has been upgraded | 1 | 2 |  |  |
| [1012] | che(249,11,ZONEID,3131)==0 | exe(346,18,ZONEID,3131) | A Militia House Asset has been constructed in <ZONENAME>. | 1 | 2 |  |  |
| [1012] | che(249,11,ZONEID,3131)>0 | exe(346,17,ZONEID,3131) | Your Militia House Asset in <ZONENAME> has been upgraded | 1 | 2 |  |  |
| [1012] |  |  | With the funding coming from some political Factions a popular project has been realized. | 1 | 1 | Extra Level of Militia House Asset for the selected Zone. |  |
| [1013] |  | TEMP1=dth(3,8); REGREGKEY.relation=REGREGKEY.relation-TEMP1; REGREGKEY.relation=max(0,REGREGKEY.relation); REVREGREGKEY.relation=REGREGKEY.relation; | Relations with <TARGETREGIMENAME> dropped with -<TEMP1> points. | 1 | 1 | Decrease relation with 3d8 points. |  |
| [1014] |  | TEMP1=min(10,inv(REGREGKEY.relation,10)); |  |  |  |  |  |
| [1014] | TARGETCULTUREKEY.nodip>0 | TEMP1=0; |  |  |  |  |  |
| [1014] |  | REGREGKEY.relation=REGREGKEY.relation+TEMP1; REGREGKEY.relation=min(100,REGREGKEY.relation); REVREGREGKEY.relation=REGREGKEY.relation; | Relations with <TARGETREGIMENAME> went up with <TEMP1> points. | 1 | 1 | Increase relation with up to 10 points. |  |
| [1015] |  | TEMP1=dth(4,4); |  |  |  |  |  |
| [1015] |  | REVREGREGKEY.relation=REVREGREGKEY.relation+TEMP1; REVREGREGKEY.relation=min(100,REVREGREGKEY.relation); REGREGKEY.relation=REVREGREGKEY.relation; | Relation with <TARGETREGIMENAME> went up with <TEMP1> points. | 1 | 1 | Increase relation with 4d4 points. |  |
| [1015] | TARGETCULTUREKEY.nodip>0 | TEMP1=0; |  |  |  |  |  |
| [1016] |  | TEMP1=dth(5,6)*100; | Investors took note of <ZONENAME> and invested <TEMP1> Credits in the Zone. | 1 | 1 | Attract up to 3000 Credits of private investment for selected Zone. |  |
| [1016] |  | ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP1; |  |  |  |  |  |
| [1017] |  | TEMP1=dth(3,6); TEMP2=dth(2,4); | The people of <ZONENAME> rallied in the streets to show their support for our great <NATION>. | 1 | 1 |  |  |
| [1017] |  | ZONEKEY.popLoyalty=ZONEKEY.popLoyalty+TEMP2; ZONEKEY.popLoyalty=min(100,ZONEKEY.popLoyalty); | Population Loyalty +<TEMP2> | 1 | 3 | Gain 2d4 Population Loyalty |  |
| [1017] |  | ZONEKEY.popHapiness=ZONEKEY.popHapiness+TEMP1; ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness); | Population Hapiness +<TEMP1> | 1 | 2 | Gain 3d6 Population Hapiness |  |
| [1018] |  | exe(346,20,TARGETCHARID,1018) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Charisma, Intelligence and War Stats with +15. Also tends to increase Ambition over time. |  |
| [1019] |  | exe(346,20,TARGETCHARID,1019) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Willpower Stat with +10, also tends to decrease Leaders Corruption trait over time. |  |
| [102] |  | DIFF=100-REGREGKEY.relation |  |  |  | Base difficulty is 100 minus relation. |  |
| [102] | TARGETCULTUREKEY.agression>0 | DIFF=DIFF+(TARGETCULTUREKEY.agression*3) |  |  |  | Difficulty is modified for aggression and other factors. |  |
| [102] | TARGETCULTUREKEY.militiapercentage>0 | DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage) |  |  |  | Difficulty is modified for ideal militia size |  |
| [102] | TARGETCULTUREKEY.tradition>0 | DIFF=DIFF+TARGETCULTUREKEY.tradition |  |  |  | Difficulty is modified for tradition |  |
| [102] | REVREGREGKEY.aiHatred>0 | DIFF=DIFF+(REVREGREGKEY.aiHatred*3) |  |  |  |  |  |
| [102] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [102] | TARGETCULTUREKEY.nodip>0 | DIFF=DIFF+900 |  |  |  |  |  |
| [102] | TARGETLANDBORDER<1 | DIFF=DIFF+50 |  |  |  |  |  |
| [102] |  | ROLL=che(249,1,CHARID,2) |  |  |  | A diplomacy skill roll will be made by <CHARNAME>. |  |
| [102] | ROLL>=DIFF | RESULT=2; TEMP1=10; TEMP2=1; |  |  |  | A success will result in becoming protector and +10 relation. |  |
| [102] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [102] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=1; |  |  |  | A failure will result in no change in relation. |  |
| [102] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; TEMP2=1; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [102] | RESULT==2 | TARGETREGKEY.protector = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT); | Success! <TARGETREGIMENAME> accepted our protection. | 1 | 1 |  |  |
| [102] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused our protection. | 1 | 1 |  |  |
| [102] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> reacted furiously and angry and our offer was seen as an cover aggression. | 1 | 1 |  |  |
| [102] | RESULT==1 | TARGETREGKEY.protector = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT); | Critical Success! <TARGETREGIMENAME> was very happy and accepted our protection with a big ceremony. | 1 | 1 |  |  |
| [102] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=20; TEMP2=1; |  |  |  | A critical success (roll 50 above difficulty) will result in becoming protector and +20 relation. |  |
| [102] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [102] |  | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1)) |  |  |  |  |  |
| [1020] |  | exe(346,37,TARGETCHARID,15) |  |  |  | Improves Relation with up to +15%. |  |
| [1020] |  | exe(346,20,TARGETCHARID,1020) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases selected Leaders Charisma Stat with +10, also tends to increase Leaders Ambition over time. |  |
| [1021] |  | TEMP1=TARGETCHARSTAT.29; TEMP2=inv(TARGETCHARSTAT.29,50); TEMP2=TEMP2+5; TEMP3=TEMP1-TEMP2; TEMP3=max(0,TEMP3); TEMP4=TEMP1-TEMP3; TARGETCHARSTAT.29=TEMP3; | The committee had a number of thorough sessions with <TARGETCHARNAME> and his Corruption Level dropped with <TEMP4> points. | 1 | 1 | Decrease Corruption Level with at least half. |  |
| [103] | TARGETCULTUREKEY.tradition>0 | DIFF=DIFF+TARGETCULTUREKEY.tradition |  |  |  | Difficulty is modified for tradition |  |
| [103] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [103] |  | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1)) |  |  |  |  |  |
| [103] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [103] | RESULT==1 | TARGETREGKEY.master = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT); | Critical Success! <TARGETREGIMENAME> was very happy and accepted to become a client state with a big ceremony. | 1 | 1 |  |  |
| [103] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused our protection. | 1 | 1 |  |  |
| [103] | RESULT==2 | TARGETREGKEY.master = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT); | Success! <TARGETREGIMENAME> accepted to become a client state. | 1 | 1 |  |  |
| [103] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; TEMP2=1; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [103] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=1; |  |  |  | A failure will result in no change in relation. |  |
| [103] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=20; TEMP2=1; |  |  |  | A critical success (roll 50 above difficulty) will result in them accepting to become a client state and +20 relation. |  |
| [103] | ROLL>=DIFF | RESULT=2; TEMP1=10; TEMP2=1; |  |  |  | A success will result in them accepting to become a client state and +10 relation. |  |
| [103] |  | ROLL=che(249,1,CHARID,2) |  |  |  | A diplomacy skill roll will be made by <CHARNAME>. |  |
| [103] | TARGETLANDBORDER<1 | DIFF=DIFF+50 |  |  |  |  |  |
| [103] | TARGETCULTUREKEY.nodip>0 | DIFF=DIFF+900 |  |  |  |  |  |
| [103] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [103] | REVREGREGKEY.aiHatred>0 | DIFF=DIFF+(REVREGREGKEY.aiHatred*3) |  |  |  |  |  |
| [103] | TARGETCULTUREKEY.agression>0 | DIFF=DIFF+(TARGETCULTUREKEY.agression*3) |  |  |  | Difficulty is modified for aggression and other factors. |  |
| [103] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> reacted furiously and angry and our offer was seen as a covert fist. | 1 | 1 |  |  |
| [103] | TARGETCULTUREKEY.militiapercentage>0 | DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage *2) |  |  |  | Difficulty is modified for ideal militia size |  |
| [103] |  | DIFF=125-REGREGKEY.relation |  |  |  | Base difficulty is 125 minus relation. |  |
| [104] | RESULT==1 | exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1); REGREGKEY.dipClear=1; REVREGREGKEY.dipClear=1; | Critical Success! <TARGETREGIMENAME> was very happy and accepted peace. | 1 | 1 |  |  |
| [104] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [104] | RESULT=4 | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [104] | RESULT<=2 | REGREGKEY.relation = max(35,REGREGKEY.relation+TEMP1) |  |  |  | If (critical) success relation will at least rise to 35. |  |
| [104] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [104] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused our off of peace. | 1 | 1 |  |  |
| [104] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> reacted furiously and angry. Peace was not even on the table. | 1 | 1 |  |  |
| [104] | TEMP1>0 | TEMP3=(TEMP1/2) |  |  |  |  |  |
| [104] |  | DIFF=150-(2*REGREGKEY.relation) |  |  |  | Difficulty is 150 minus 2* your current relation with target regime. Minimum base difficulty is 50. |  |
| [104] |  | DIFF=max(50,DIFF) |  |  |  |  |  |
| [104] | TARGETCULTUREKEY.agression>0 | DIFF=DIFF+(TARGETCULTUREKEY.agression*2) |  |  |  | Difficulty is modified for aggression and other factors. |  |
| [104] | TARGETCULTUREKEY.militiapercentage>0 | DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage) |  |  |  |  |  |
| [104] | TEMP1>0 | REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100) |  |  |  | Your Fist profile will go down by 1/2 your relation gain. |  |
| [104] | TARGETLANDBORDER<1 | DIFF=DIFF+50 |  |  |  |  |  |
| [104] | TARGETCULTUREKEY.nodip>0 | DIFF=DIFF + 900 |  |  |  |  |  |
| [104] | REVREGREGKEY.aiHatred>0 | DIFF=DIFF+(REVREGREGKEY.aiHatred*3) |  |  |  |  |  |
| [104] | RESULT==2 | exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1); REGREGKEY.dipClear=1; REVREGREGKEY.dipClear=1; | Success! <TARGETREGIMENAME> accepted peace. | 1 | 1 |  |  |
| [104] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; TEMP2=1; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [104] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=1; |  |  |  | A failure will result in no change in relation. |  |
| [104] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=20; TEMP2=1; |  |  |  | A critical success (roll 50 above difficulty) will result in peace and +20 relation. |  |
| [104] | ROLL>=DIFF | RESULT=2; TEMP1=10; TEMP2=1; |  |  |  | A success will result in peace and +10 relation. |  |
| [104] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [104] | TARGETCULTURE==102 | DIFF=DIFF*75/100 |  |  |  |  |  |
| [104] | REGREGKEY.dipClear<1 | DIFF=DIFF*75/100 |  |  |  | Difficulty is halved if relation is still Unclear. |  |
| [104] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind; |  |  |  | Difficulty is further modified by + your fist profile and - your mind profile. |  |
| [105] | ROLL<DIFF; SOURCEAI==1; | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+15)); REVREGREGKEY.relation=REGREGKEY.relation; |  |  |  |  |  |
| [105] |  | DIFF=DIFF-50 |  |  |  | Difficulty of Unification is 50 less than difficulty of Annexation. |  |
| [105] | ROLL>=DIFF | exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT) | Success! <TARGETREGIMENAME> accepted to join us. | 1 | 1 | A succes means the Regime will join you. |  |
| [105] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An Oratory Skill roll will be made by <CHARNAME>. |  |
| [105] | ROLL<DIFF |  | Failure! <TARGETREGIMENAME> refused our proposal. But we are still on good terms. | 1 | 1 | A failure will have no effect. |  |
| [105][106] |  | DIFF=DIFF-REGREGKEY.relation |  |  |  | Difficulty decreased with Relation score |  |
| [105][106] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [105][106] | TARGETREGKEY.master==REGID | DIFF=dth(2,100) |  |  |  | Difficulty is 2d100 if Client |  |
| [105][106] | TARGETREGKEY.master!=REGID | DIFF=dth(3,100) |  |  |  | Difficulty is 3d100 if Protectorate |  |
| [105][106] | TARGETCULTUREKEY.agression>0 | DIFF=DIFF+(TARGETCULTUREKEY.agression*3) |  |  |  |  |  |
| [105][106] |  | DIFF=DIFF+(TARGETCULTUREKEY.tradition*2) |  |  |  | Difficulty increased with Tradition * 2 |  |
| [105][106] | TARGETLANDBORDER<1 | DIFF=DIFF+50 |  |  |  |  |  |
| [106] |  | ROLL=che(249,1,CHARID,9) |  |  |  | An Intimidate Skill roll will be made by <CHARNAME>. |  |
| [106] | ROLL<DIFF | TARGETREGKEY.master=0;TARGETREGKEY.protector=0; exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT); | Failure! <TARGETREGIMENAME> was angry with our pressure and chooses war! | 1 | 1 | A failure will put you on a war footing. |  |
| [106] | ROLL>=DIFF | exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT) | Success! <TARGETREGIMENAME> accepted to join us. | 1 | 1 | A succes means the Regime will join you. |  |
| [107] |  | DIFF=TARGETCULTUREKEY.aggression+85-REGREGKEY.relation; | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [107][108] | ROLL<DIFF | REGREGKEY.alienMeeting=0; | Failure! <TARGETREGIMENAME> refused or did not understand our proposal. | 1 | 2 |  |  |
| [107][108] |  | ROLL=che(249,1,CHARID,41)+(max(0,REGREGKEY.language)*30); |  |  |  | An Ecology Skill roll will be made. +30 for each language level you have on the alien language. |  |
| [107][108] | ROLL>=DIFF | REGREGKEY.alienMeeting=ROUND+1; | Success! <TARGETREGIMENAME> accepted to talk to us. Expect the meeting to take place next round. | 1 | 2 | A succes will lead to a meeting being organized the next round. |  |
| [108] |  | DIFF=TARGETCULTUREKEY.aggression+35-REGREGKEY.relation; | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [11] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [11] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [11] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [11] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [12] |  | REVREGREGKEY.closeRes=REGIMEID |  |  |  |  |  |
| [12] |  | REVREGREGKEY.dipRes=REGREGKEY.dipRes |  |  |  |  |  |
| [12] |  | REGREGKEY.dipRes = REGREGKEY.dipRes - 1 |  |  |  | You will lose a research cooperation level. |  |
| [12] |  |  | We reduced our scientific cooperation with <TARGETREGIMENAME>. They did not like our unilateral decision. | 1 | 2 |  |  |
| [1201] |  | TEMP4=dth(4,6); TEMP4=TEMP4+(TARGETCHARSTAT.45/10); TEMP4=TEMP4+(TARGETCHARSTAT.49/10); TEMP4=TEMP4+(TARGETCHARSTAT.49/10); TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | <TARGETCHARNAME> was pleased with your wonderful present. Relation increased with at least +<TEMP4> points. | 1 | 1 | Gives selected Leader a relation boost (the more emotional and the more corrupt the better). |  |
| [13] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [13] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [13] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [13] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [13][14][15] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.heart; |  |  |  | Difficulty is further modified by + your fist profile and - your heart profile. |  |
| [13][14][15] | TEMP1>0 | REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100) |  |  |  | If (critical) success your fist profile will go down by 1/2 your relation gain. |  |
| [13][14][15] | TEMP1>0 | REGKEY.heart=REGKEY.heart+inv(REGKEY.heart,TEMP3) |  |  |  | If (critical) success your rallying flag profile will go up by 1/2 your relation gain. |  |
| [13][14][15] | RESULT<=2 | REGREGKEY.dipPact = REGREGKEY.dipPact  + TEMP2 |  |  |  | A (critical) success will increase the military pact level. |  |
| [14] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [14] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [14] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [14] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [15] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [15] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [15] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [15] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [16] |  | REGREGKEY.dipPact = REGREGKEY.dipPact - 1 |  |  |  | You will lose a military pact level. |  |
| [16] |  | REVREGREGKEY.dipPact=REGREGKEY.dipPact |  |  |  |  |  |
| [16] |  | REVREGREGKEY.closePact=REGIMEID |  |  |  |  |  |
| [16] |  |  | We reduced our strategic pact with <TARGETREGIMENAME>. They did not like our unilateral decision. | 1 | 2 |  |  |
| [2] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [2] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was rejoiced to meet us and exchange ambassadors. | 1 | 1 |  |  |
| [2] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to exchange ambassadors. | 1 | 1 |  |  |
| [2] | RESULT==2 |  | Success! <TARGETREGIMENAME> accepted to exchange ambassadors with us. | 1 | 1 |  |  |
| [2][3][5][6][7][9][10][11][13][14][15] | REVREGREGKEY.aiStoryMode>4 | DIFF=DIFF+60; |  |  |  | Difficulty +60 if AI attitude is HOSTILE |  |
| [2][3][5][6][7][9][10][11][13][14][15] | REVREGREGKEY.aiStoryMode==3 | DIFF=DIFF+20; |  |  |  | Difficulty +20 if AI attitude is COLD |  |
| [2][3][5][6][7][9][10][11][13][14][15] | REVREGREGKEY.aiStoryMode==2 | DIFF=DIFF+10; |  |  |  | Difficulty +10 if AI attitude is FRIENDS |  |
| [2][3][5][6][7][9][10][11][13][14][15] | REVREGREGKEY.aiStoryMode==4 | DIFF=DIFF+40; |  |  |  | Difficulty +40 if AI attitude is BLACKMAIL |  |
| [2][6][10][14] |  | DIFF=120+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3) |  | aiNeg |  | Difficulty is 120. Modified by the difference between your relation and the AIs intention. |  |
| [201] |  | DIFF=120-REGREGKEY.relation |  |  |  | Difficulty is 120 minus your relation level. |  |
| [201] |  | TEMP2=1 |  |  |  |  |  |
| [201][202][203] | TARGETMAJOR!=1 | DIFF=DIFF/2; |  |  |  | Difficulty is halved against Minor Zones. |  |
| [201][202][203] |  | ROLL=che(249,1,CHARID,40) |  |  |  | A covert ops skill roll will be made by <CHARNAME>. |  |
| [201][202][203] | ROLL>=DIFF | RESULT=2; TEMP1=0; |  |  |  | A success will result in infiltrating your spy. |  |
| [201][202][203] | ROLL>=(DIFF+50) | RESULT=1; TEMP2=TEMP2*2;  TEMP1=0; |  |  |  | A critical success (roll 50 above difficulty) will result in infiltrating double the number of spies. |  |
| [201][202][203] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [201][202][203] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [201][202][203] | RESULT==3 |  | Failure! We did not infiltrate our spies into <ZONENAME>. Luckily we escaped detection of our covert operations. | 1 | 1 |  |  |
| [201][202][203] | RESULT==1 |  | Critical Success! We managed to infiltrate double the number of spies initially planned into <ZONENAME>. | 1 | 1 |  |  |
| [201][202][203] | RESULT==4 |  | Critical Failure! Our infiltration attempt was discovered by <TARGETREGIMENAME> and they took insult with our attempt to spy on them. | 1 | 1 |  |  |
| [201][202][203] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [201][202][203] |  | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1)) |  |  |  |  |  |
| [201][202][203] | RESULT<=2 | REGZONEKEY.spies = REGZONEKEY.spies + TEMP2 |  |  |  |  |  |
| [201][202][203] | RESULT==2 |  | Success! We managed to infiltrate our spies into <ZONENAME>. | 1 | 1 |  |  |
| [202] |  | DIFF=140-REGREGKEY.relation |  |  |  | Difficulty is 140 minus your relation level. |  |
| [202] |  | TEMP2=3 |  |  |  |  |  |
| [203] |  | DIFF=160-REGREGKEY.relation |  |  |  | Difficulty is 160 minus your relation level. |  |
| [203] |  | TEMP2=6 |  |  |  |  |  |
| [25] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [25] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [25] | TEMP1<0 | TEMP3=abs(TEMP1/2) |  |  |  |  |  |
| [25] | TEMP1<0 | REGKEY.fist=REGKEY.fist+inv(REGKEY.fist,TEMP3) |  |  |  | Your fist profile will go up by 1/2 your relation loss. |  |
| [25] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our provocation as a positive message of cooperation. | 1 | 1 |  | <REGIMENAME> has tried to provoke you, but failed. But managed to accomplish the reverse. +10 relation. |
| [25] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was extremely offended by our provocation. | 1 | 1 |  | <REGIMENAME> has managed to provoke you. Their efforts were a critical succes. Relation -20. |
| [25] | RESULT==3 |  | Failure! <TARGETREGIMENAME> seemed to have ignored our provocation. | 1 | 1 |  | <REGIMENAME> has tried to provoke you, but failed. |
| [25] | RESULT==2 |  | Success! <TARGETREGIMENAME> was offended by our provocation. | 1 | 1 |  | <REGIMENAME> has managed to provoke you. Relation -10. |
| [25] |  | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [25] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [25] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=-20; |  |  |  | A critical success (roll 50 above difficulty) will result in -20 relation. |  |
| [25] | ROLL>=DIFF | RESULT=2; TEMP1=-10; |  |  |  | A success will result in -10 relation. |  |
| [25] |  | ROLL=che(249,1,CHARID,9) |  |  |  | An intimidate skill roll will be made by <CHARNAME>. |  |
| [25] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [25] |  | DIFF=125 |  |  |  | Difficulty will be 125. |  |
| [25] | ROLL<(DIFF-50) | RESULT=4; TEMP1=10; |  |  |  | A critical failure (roll 50 below difficulty) will result in +10 relation. |  |
| [26] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=1; |  |  |  | A failure will result in no change in relation. |  |
| [26] |  | REGREGKEY.lastLookForPeace=100 |  |  |  |  |  |
| [26] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> reacted furiously and angry. Peace was not even on the table. | 1 | 1 |  |  |
| [26] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [26] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind; |  |  |  | Difficulty is further modified by + your fist profile and - your mind profile. |  |
| [26] | RESULT==2 | exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1) | Success! <TARGETREGIMENAME> accepted peace. | 1 | 1 |  |  |
| [26] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused our off of peace. | 1 | 1 |  |  |
| [26] | RESULT==1 | exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1) | Critical Success! <TARGETREGIMENAME> was very happy and accepted peace. | 1 | 1 |  |  |
| [26] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=20; TEMP2=1; |  |  |  | A critical success (roll 50 above difficulty) will result in peace and +20 relation. |  |
| [26] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [26] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [26] | RESULT>=4 | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [26] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [26] | TEMP1>0 | TEMP3=(TEMP1/2) |  |  |  |  |  |
| [26] |  | DIFF=125+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*3) |  |  |  | Difficulty is 125. Modified by the difference between your relation and the AIs intention. |  |
| [26] | TEMP1>0 | REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100) |  |  |  | Your Fist profile will go down by 1/2 your relation gain. |  |
| [26] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; TEMP2=1; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [26] | RESULT<=2 | REGREGKEY.relation = max(35,REGREGKEY.relation+TEMP1) |  |  |  | If (critical) success relation will at least rise to 35. |  |
| [26] | ROLL>=DIFF | RESULT=2; TEMP1=10; TEMP2=1; |  |  |  | A success will result in peace and +10 relation. |  |
| [27][49] |  | REGKEY.fist=REGKEY.fist |  |  |  | You fist profile will go up with on average 10%, but depends on relation level. |  |
| [27][49] |  | REGREGKEY.dipTrade=0; REGREGKEY.dipRes=0; REGREGKEY.dipPact=0; REGREGKEY.dipRel=0 |  |  |  |  |  |
| [27][49] |  | TEMP3=10 |  |  |  |  |  |
| [27][49] |  | REVREGREGKEY.dipTrade=0; REVREGREGKEY.dipRes=0; REVREGREGKEY.dipPact=0; REVREGREGKEY.dipRel=0 |  |  |  | All your deals and pacts will be cancelled and diplomatic contact will be broken. |  |
| [27][49] |  | exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT) | <TARGETREGIMENAME> and us are now at war! | 1 | 1 | You will be at war. | <REGIMENAME> declared war on you! |
| [27][49] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [27][49] |  | REGREGKEY.relation = max(0,min(30,REGREGKEY.relation-20)) |  |  |  | Relation will drop with 20, and will at minimum drop to 30. |  |
| [28] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [28] |  | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [28] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [28] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger. | 1 | 1 |  |  |
| [28] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift. | 1 | 1 |  |  |
| [28] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to accept the gift. | 1 | 1 |  |  |
| [28] | RESULT<=2 | REGKEY.credits = REGKEY.credits - 400 |  |  |  |  |  |
| [28] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [28] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [28] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=dth(2,6); |  |  |  | A critical success (roll 50 above difficulty) will result in +2d6 relation. |  |
| [28] | ROLL>=DIFF | RESULT=2; TEMP1=dth(1,6); |  |  |  | A success will result in +1d6 relation. |  |
| [28] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [28] |  | DIFF=125+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2) |  |  |  | Difficulty is 125. Modified by the difference between your relation and the AIs intention. |  |
| [28] | RESULT==2 |  | Success! <TARGETREGIMENAME> was pleased to receive our gift. | 1 | 1 |  |  |
| [28][29][30] |  | REGREGKEY.giftLastRound=ROUND; REGREGKEY.giftCounter=REGREGKEY.giftCounter+20; |  |  |  |  |  |
| [29] |  | DIFF=100+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2) |  |  |  | Difficulty is 100. Modified by the difference between your relation and the AIs intention. |  |
| [29] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [29] | ROLL>=DIFF | RESULT=2; TEMP1=dth(2,6); |  |  |  | A success will result in +2d6 relation. |  |
| [29] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=dth(4,6); |  |  |  | A critical success (roll 50 above difficulty) will result in +4d6 relation. |  |
| [29] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [29] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [29] | RESULT==2 |  | Success! <TARGETREGIMENAME> was pleased to receive our gift. | 1 | 1 |  |  |
| [29] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to accept the gift. | 1 | 1 |  |  |
| [29] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger. | 1 | 1 |  |  |
| [29] | RESULT==4 | REGKEY.credits = REGKEY.credits - 400 |  |  |  |  |  |
| [29] |  | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [29] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [29] | RESULT<=2 | REGKEY.credits = REGKEY.credits - 1000 |  |  |  |  |  |
| [29] | RESULT==4 | REGKEY.credits = REGKEY.credits - 1000 |  |  |  |  |  |
| [29] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift. | 1 | 1 |  |  |
| [29] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [3] | RESULT==2 |  | Success! <TARGETREGIMENAME> accepted to exchange staff in a cultural exchange program. | 1 | 1 |  |  |
| [3] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to go so far. | 1 | 1 |  |  |
| [3] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was rejoiced to open up to us and welcome a cultural exchange. | 1 | 1 |  |  |
| [3] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our pushiness. | 1 | 1 |  |  |
| [3][7][11][15] |  | DIFF=140+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3) |  |  |  | Difficulty is 140. Modified by the difference between your relation and the AIs intention. |  |
| [30] | RESULT==4 | REGKEY.credits = REGKEY.credits - 2500 |  |  |  |  |  |
| [30] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [30] | RESULT<=2 | REGKEY.credits = REGKEY.credits - 2500 |  |  |  |  |  |
| [30] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [30] |  | DIFF=75+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2) |  |  |  | Difficulty is 75. Modified by the difference between your relation and the AIs intention. |  |
| [30] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [30] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger. | 1 | 1 |  |  |
| [30] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift. | 1 | 1 |  |  |
| [30] |  | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [30] | RESULT==2 |  | Success! <TARGETREGIMENAME> was pleased to receive our gift. | 1 | 1 |  |  |
| [30] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [30] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [30] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=dth(8,6); |  |  |  | A critical success (roll 50 above difficulty) will result in +8d6 relation. |  |
| [30] | ROLL>=DIFF | RESULT=2; TEMP1=dth(4,6); |  |  |  | A success will result in +4d6 relation. |  |
| [30] | RESULT==3 |  | Failure! <TARGETREGIMENAME> refused to accept the gift. | 1 | 1 |  |  |
| [301] | RESULT==1 | REGKEY.salesTax=REGKEY.salesTax+25; REGKEY.salesTax=min(100,REGKEY.salesTax); |  |  |  | If successful roll the sales tax will increase with +25%. |  |
| [301] |  | DIFF=50 |  |  |  | Difficulty will be 50. |  |
| [301][302][303][304][401][402][403][404] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [301][302][303][304][401][402][403][404] | RESULT==2 |  | Failure! I really tried, but did not manage to sort out the paperwork. | 1 | 1 |  |  |
| [301][302][303][304][401][402][403][404] |  | ROLL=che(249,1,CHARID,14) |  |  |  | An administration skill roll will be made by <CHARNAME>. |  |
| [301][302][303][304][401][402][403][404] | ROLL>=DIFF | RESULT=1 |  |  |  |  |  |
| [301][302][303][304][401][402][403][404] | ROLL<DIFF | RESULT=2 |  |  |  |  |  |
| [301][302][303][304][401][402][403][404] | RESULT==1 |  | Success! The rates have been changed | 1 | 1 |  |  |
| [302] |  | DIFF=20 |  |  |  | Difficulty will be 20. |  |
| [302] |  | DIFF=DIFF+((REGKEY.incomeTax*250)/100) |  |  |  | Difficulty will be +25 higher per 10% tax bracket. |  |
| [302] | RESULT==1 | REGKEY.incomeTax=REGKEY.incomeTax+10; REGKEY.incomeTax=min(100,REGKEY.incomeTax); |  |  |  | If successful roll the income tax will increase with +10%. |  |
| [303] | RESULT==1 | REGKEY.salesTax=REGKEY.salesTax-25; REGKEY.salesTax=max(0,REGKEY.salesTax); |  |  |  | If successful roll the sales tax will decrease with -25%. |  |
| [303][304] |  | DIFF=25+ (100-REGKEY.incomeTax); |  |  |  | Difficulty will be inverse to current income tax. And then +25. |  |
| [304] | RESULT==1 | REGKEY.incomeTax=REGKEY.incomeTax-10; REGKEY.incomeTax=max(0,REGKEY.incomeTax); |  |  |  | If successful roll the income tax will decrease with -10%. |  |
| [31] |  | REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1)) |  |  |  |  |  |
| [31] | RESULT<=2 | REGREGKEY.stratSupport=1; |  |  |  |  |  |
| [31] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [31] | RESULT==4 |  | Critical Failure! Our infiltration attempt was discovered by <TARGETREGIMENAME> and they took insult with our attempt to spy on them. | 1 | 1 |  |  |
| [31] | RESULT==1 |  | Success! We managed to infiltrate our spies into <ZONENAME>. | 1 | 1 |  |  |
| [31] | RESULT==3 |  | Failure! We did not succeed to infiltrate our spies into <ZONENAME>. Luckily we escaped detection of our covert operations. | 1 | 1 |  |  |
| [31] | RESULT==2 |  | Success! We managed to infiltrate our spies into <ZONENAME>. | 1 | 1 |  |  |
| [31] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [31] | ROLL<DIFF | RESULT=3; TEMP1=0; |  |  |  | A failure will result in no change in relation. |  |
| [31] | ROLL>=(DIFF+50) | RESULT=1; TEMP2=TEMP2*2;  TEMP1=0; |  |  |  |  |  |
| [31] |  | ROLL=che(249,1,CHARID,40) |  |  |  | An covert ops skill roll will be made by <CHARNAME>. |  |
| [31] |  | TEMP2=6 |  |  |  |  |  |
| [31] |  | DIFF=160-REGREGKEY.relation |  |  |  | Difficulty is 160 minus your relation level. |  |
| [31] |  | TEMP2=3 |  |  |  |  |  |
| [31] |  | DIFF=140-REGREGKEY.relation |  |  |  | Difficulty is 140 minus your relation level. |  |
| [31] |  | TEMP2=1 |  |  |  |  |  |
| [31] |  | DIFF=120-REGREGKEY.relation |  |  |  | Difficulty is 120 minus your relation level. |  |
| [31] | ROLL>=DIFF | RESULT=2; TEMP1=0; |  |  |  | A success will result in infiltrating your special operatives. |  |
| [32] |  | REGREGKEY.relation = max(0,REGREGKEY.relation-10) |  |  |  | This will cost you 10 relation points. |  |
| [32] |  | REGREGKEY.stratAskHelp=1; | We sent out a request, they should get back to us soon. | 1 | 1 | Next turn they will contact you. |  |
| [33] |  | DIFF=DIFF*STORYiMOD.5; DIFF=DIFF/100; |  |  |  |  |  |
| [33] | SOURCEAI==1 | DIFF=DIFF/2 |  |  |  |  |  |
| [33] | ROLL<(DIFF-50) | RESULT=4; TEMP1=-10; REGREGKEY.aiNegativeDip = 60; |  |  |  | A critical failure (roll 50 below difficulty) will result in -10 relation. |  |
| [33] | ROLL>=DIFF | RESULT=2; TEMP1=dth(2,10); |  |  |  | A success will result in +2d10 relation. |  |
| [33] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=dth(4,10); |  |  |  | A critical success (roll 50 above difficulty) will result in +4d10 relation. |  |
| [33] |  | ROLL=che(249,1,CHARID,6) |  |  |  | An oratory skill roll will be made by <CHARNAME>. |  |
| [33] |  | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [33] | RESULT==2 |  | Success! <TARGETREGIMENAME> was open to our overture and tells us they might be interested in peace as well. | 1 | 1 |  |  |
| [33] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 2 |  |  |
| [33] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> has taken offense to our attempts to discuss ending the war. | 1 | 1 |  |  |
| [33] | ROLL<DIFF | RESULT=3; TEMP1=0; REGREGKEY.aiNegativeDip = 30; |  |  |  | A failure will result in no change in relation. |  |
| [33] |  | DIFF=10+(100-REVREGREGKEY.aiIntention)+(100-REVREGREGKEY.aiIntention) |  |  |  | Difficulty is a formula based on the difference between your relation and the AIs intention. |  |
| [33] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> responded enthusiastically to our overture. Might peace become an option soon? | 1 | 1 |  |  |
| [33] | RESULT==3 |  | Failure! <TARGETREGIMENAME> told us they will think about it, but their looks where gloomy. | 1 | 1 |  |  |
| [33] |  | REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1) |  |  |  |  |  |
| [33] |  | REGREGKEY.lastLookForPeace=100 |  |  |  |  |  |
| [4] |  | REGREGKEY.dipRel = REGREGKEY.dipRel - 1 |  |  |  | You will lose a communication level. |  |
| [4] |  | REVREGREGKEY.dipRel=REGREGKEY.dipRel |  |  |  |  |  |
| [4] |  |  | We reduced our diplomatic ties with <TARGETREGIMENAME>. They did not like our unilateral decision. | 1 | 2 |  |  |
| [4] |  | REVREGREGKEY.closeContact=REGIMEID |  |  |  |  |  |
| [4][8][12][16] |  | TEMP1=10; REGREGKEY.aiNegativeDip= 100+ROUND; |  |  |  |  |  |
| [4][8][12][16] |  | REGKEY.fist=REGKEY.fist+inv(REGKEY.fist,TEMP3) |  |  |  | Your fist profile will go up by 1/2 your relation loss. |  |
| [4][8][12][16] |  | TEMP3=abs(TEMP1/2) |  |  |  |  |  |
| [4][8][12][16] |  | REGREGKEY.relation = max(0,REGREGKEY.relation-10) | Relation decreased with -10 points. | 1 | 1 | Will decrease your relation with -10 points. |  |
| [401] | RESULT==1 | IMPORTTARIFFKEY=IMPORTTARIFFKEY+25; IMPORTTARIFFKEY=min(100,IMPORTTARIFFKEY); |  |  |  | If successful roll the import tariff will increase with +25%. |  |
| [401][403] |  | DIFF=70 |  |  |  | Difficulty will be 70 |  |
| [402] | RESULT==1 | IMPORTTARIFFKEY=IMPORTTARIFFKEY-25; IMPORTTARIFFKEY=max(0,IMPORTTARIFFKEY); |  |  |  | If successful roll the import tariff will decrease with -25%. |  |
| [402][404] |  | DIFF=50 |  |  |  | Difficulty will be 50. |  |
| [403] | RESULT==1 | EXPORTTARIFFKEY=EXPORTTARIFFKEY+25; EXPORTTARIFFKEY=min(100,EXPORTTARIFFKEY); |  |  |  | If successful roll the export tariff will increase with +25%. |  |
| [404] | RESULT==1 | EXPORTTARIFFKEY=EXPORTTARIFFKEY-25; EXPORTTARIFFKEY=max(0,EXPORTTARIFFKEY); |  |  |  | If successful roll the exportt tariff will decrease with -25%. |  |
| [41] |  | exe(346,20,TARGETCHARID,41); | A temporary Shadow Spy has been assigned. | 1 | 1 | Will assign a temporary Shadow Spy to the targeted Leader. |  |
| [42] |  | exe(346,20,TARGETCHARID,42); | A temporary Shadow Diplomat has been assigned. | 1 | 1 | Will assign a temporary Shadow Diplomat  to the targeted Leader. |  |
| [5] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [5] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [5] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [5] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [5][6][7] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind; |  |  |  | Difficulty is further modified by + your fist profile and - your mind profile. |  |
| [5][6][7] | RESULT<=2 | REGREGKEY.dipTrade = REGREGKEY.dipTrade + TEMP2 |  |  |  | A (critical) success will increase the trade level. |  |
| [5][9][13] |  | DIFF=80+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3) |  |  |  | Difficulty is 100. Modified by the difference between your relation and the AIs intention. |  |
| [501] |  | exe(346,1,-1,12,-1) |  |  |  |  |  |
| [501][502][503][504][505][551][552] |  |  | Success! A new leader has been added to the Reserve Pool. | 1 | 1 | No tests. Character will be recruited and joined to the pool. |  |
| [502] |  | exe(346,1,-1,13,-1) |  |  |  |  |  |
| [503] |  | exe(346,1,-1,2,-1) |  |  |  |  |  |
| [504] |  | exe(346,1,30,-1,3) |  |  |  |  |  |
| [505] |  | exe(346,1,60,-1,-1) |  |  |  |  |  |
| [510] |  | REGKEY.credits=REGKEY.credits-500; |  |  |  | Costs 500 Credits |  |
| [510] |  | TEMP4=(dth(3,6)*TEMP1)/100; TEMP5=TEMP4*200; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); TEMP4=TEMP4+1; |  |  |  | Effect is reduced if more than 20K populace |  |
| [510] | TEMP4>0 | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP4); | Population Happiness increased with +<TEMP4>. | 1 | 3 | Will increase Population Happiness with +3d6 |  |
| [510] | TEMP4>0 | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP4); | Worker Happiness increased with +<TEMP4>. | 1 | 4 | Will increase Worker Happiness with +3d6 |  |
| [510] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545] |  | DIFF=100 |  |  |  | Base difficulty will be 100. |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL>=DIFF | RESULT=2; TEMP1=100; |  |  |  | A success will result in normal execution of task. |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==4 |  | Difficulty was <DIFF>. Rolled <ROLL>. Critical Failure! | 1 | 2 |  |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==1 |  | Difficulty was <DIFF>. Rolled <ROLL>. Critical Success! Effect is doubled. | 1 | 2 |  |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==3 |  | Difficulty was <DIFF>. Rolled <ROLL>. Failure! Effect is halved. | 1 | 2 |  |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | RESULT==2 |  | Difficulty was <DIFF>. Rolled <ROLL>. Successful Skill Roll! | 1 | 2 |  |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] |  |  |  |  |  |  |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; |  |  |  | A critical failure (roll 50 below difficulty) will result in the task being executed having no or almost no effect. Might even cause an averse effect. |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL<DIFF | RESULT=3; TEMP1=50; |  |  |  | A failure will result in the task being executed having half or no effect. |  |
| [510][511][512][513][514][515][516][517][518][519][520][521][523][524][525][526][527][528][529][530][531][544][545][546][547][548][549] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=200; |  |  |  | A critical success (roll 50 above difficulty) could result in doubling the effect of the task. |  |
| [511] |  | REGKEY.credits=REGKEY.credits-2000; |  |  |  | Costs 2000 Credits |  |
| [511] | TEMP4>0 | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP4); | Worker Happiness increased with +<TEMP4>. | 1 | 4 | Will increase Worker Happiness with +5d6 |  |
| [511] | TEMP4>0 | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP4); | Population Happiness increased with +<TEMP4>. | 1 | 3 | Will increase Population Happiness with +5d6 |  |
| [511] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |  |
| [511] |  | TEMP4=(dth(5,6)*TEMP1)/100; TEMP5=TEMP4*1000; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); |  |  |  | Effect is reduced if more than 100K populace |  |
| [512] |  | TEMP4=(dth(2,4)*TEMP1)/100; |  |  |  |  |  |
| [512] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |  |
| [512] | TEMP4>0 | TEMP5=(ZONEKEY.pop*TEMP4)/100; ZONEKEY.pop=ZONEKEY.pop-TEMP5; exe(346,11,ZONEID,9,TEMP5); | Managed to increase recruits with +<TEMP5>00 from Population. | 1 | 3 | Will increase Recruits with 2d4 percentage of populace. |  |
| [512] | TEMP4>0 | TEMP6=(ZONEKEY.worker*TEMP4)/100; ZONEKEY.worker=ZONEKEY.worker-TEMP5; exe(346,11,ZONEID,9,TEMP6); | Managed to increase recruits with +<TEMP6>00 from Workers. | 1 | 4 |  |  |
| [513] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |  |
| [513] |  | TEMP4=(dth(5,6)*TEMP1)/100; |  |  |  |  |  |
| [513] | TEMP4>0 | ZONEKEY.militancy=min(100,ZONEKEY.militancy+TEMP4); | Militancy increased with +<TEMP4> points. | 1 | 3 | Will increase Militancy with 5d6 points. |  |
| [514] |  | TEMP5=(sqr(ZONEKEY.loyalty+1)*sqr(ZONEKEY.qol+1))/4; TEMP4=dth(5,6+TEMP5); TEMP4=TEMP4*5; TEMP6= (ZONEKEY.pop+ZONEKEY.worker)/100; TEMP6=TEMP6*TEMP4; TEMP6=(TEMP6*TEMP1)/100; |  |  |  |  |  |
| [514] | TEMP6>0 | ZONEKEY.popLoyalty=max(0,ZONEKEY.popLoyalty-10) | Loyalty dropped with -10 points. | 1 | 4 | Loyalty will drop with 10 points |  |
| [514] | TEMP6>0 | REGKEY.credits=REGKEY.credits+TEMP6; | Credits increased with +<TEMP6> points. | 1 | 3 | Will increase Credits with at least a few dozen of Credits for 10K populace. More if reasonable loyalty and reasonable QOL. At Maximum gives 400 Credits per 10K populace. |  |
| [514] |  | ROLL=che(249,1,CHARID,6) | <CHARNAME> is making an Oratory Skill Roll. | 1 | 1 | An oratoray skill roll will be made by <CHARNAME>. |  |
| [515] |  | TEMP4=dth(2,4); TEMP5=dth(4,20); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |  |
| [515] | TEMP4>0 | exe(346,29,REGIMEID,4,TEMP4); exe(346,29,REGIMEID,5,TEMP4); exe(346,29,REGIMEID,6,TEMP4); | Relation of all Cabinet members improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Cabinet members with (inverse) +2d4% |  |
| [515] | TEMP5>0 | exe(346,30,REGIMEID,4,TEMP5); exe(346,30,REGIMEID,5,TEMP5); exe(346,30,REGIMEID,6,TEMP5); | XP of all Cabinet member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Cabinet members with 4d20 XP points |  |
| [515][516][517][518] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |  |
| [516] |  | TEMP4=dth(2,6); TEMP5=dth(3,20); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |  |
| [516] | TEMP4>0 | exe(346,29,REGIMEID,10,TEMP4); | Relation of all Governors improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Governors with (inverse) +2d6% |  |
| [516] | TEMP5>0 | exe(346,30,REGIMEID,10,TEMP5); | XP of all Governors member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Governors with 3d20 XP points |  |
| [517] | TEMP5>0 | exe(346,30,REGIMEID,4,TEMP5); exe(346,30,REGIMEID,3,TEMP5); | XP of all Commanders member increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all Commanders with 2d100 XP points |  |
| [517] | TEMP4>0 | exe(346,29,REGIMEID,4,TEMP4); exe(346,29,REGIMEID,3,TEMP4); | Relation of all Commanders improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Commanders with (inverse) +1d4% |  |
| [517] |  | TEMP4=dth(1,4); TEMP5=dth(2,100); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |  |
| [518] | TEMP5>0 | exe(346,30,REGIMEID,0,TEMP5); | XP of all Leaders increased with +<TEMP5> points. | 1 | 4 | Will improve XP of all with 3d10 XP points |  |
| [518] |  | TEMP4=dth(1,6); TEMP5=dth(3,10); TEMP4=(TEMP4*TEMP1)/100; TEMP5=(TEMP5*TEMP1)/100; |  |  |  |  |  |
| [518] | TEMP4>0 | exe(346,29,REGIMEID,0,TEMP4); | Relation of all Leaders improved with (inverse) +<TEMP4>%. | 1 | 3 | Will improve relation with all Leaders with (inverse) +1d6% |  |
| [519] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |  |
| [519] |  | TEMP4=dth(3,6); TEMP4=TEMP4*2*REGKEY.adminLevel; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |  |
| [519] | TEMP4>0 | REGKEY.bp=REGKEY.bp+TEMP4; | Gained <TEMP4> BP points in our push. They will be spent start of next turn. | 1 | 3 | Will give you around 20 extra BP per Admin Level |  |
| [520] |  | ROLL=che(249,1,CHARID,14) | <CHARNAME> is making an Administration Skill Roll. | 1 | 1 | An administration skill roll will be made by <CHARNAME>. |  |
| [520] | TEMP4>0 | REGKEY.credits=REGKEY.credits+TEMP4; | Gained <TEMP4> Credits in our efficiency operation. | 1 | 3 | Will give you around 200 extra Credits per Admin Level |  |
| [520] |  | TEMP4=dth(3,6); TEMP4=TEMP4*20*REGKEY.adminLevel; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |  |
| [521] |  | TEMP4=2; TEMP4=(TEMP4*TEMP1)/100; |  |  |  |  |  |
| [521] | TEMP4>0 | REGKEY.fp=REGKEY.fp+TEMP4; | We did the impossible! We managed to gain <TEMP4> Fate Points. | 1 | 3 | Will give you 2 extra Fate Points |  |
| [521] |  | DIFF=DIFF+50 |  |  |  | Difficulty for generating Fate Points is 50 difficulty points more |  |
| [521] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |  |
| [522] |  | TEMP4=25; exe(346,20,TARGETCHARID, 522); |  |  |  | Will give the Leader Feat: Medal of Merit (cha+10, rel+1, sen+1) |  |
| [522] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 25 points. |  |
| [523] |  | TEMP4=dth(5,20); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-300; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; exe(346,20,TARGETCHARID, 523); | Commercial enterprise has been transferred to <TARGETCHARNAME>. | 1 | 3 | Will give the Leader Feat: Commercial Enterprise (rel+1). |  |
| [523] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 5d20 points. Modified for Egoism. |  |
| [523] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+300; CHARKEY.41=CHARKEY.41+300; |  |  |  |  |  |
| [523][524][544][545] |  | ROLL=che(249,1,CHARID,3) | <CHARNAME> is making a Leadership Skill Roll. | 1 | 1 | A leadership skill roll will be made by <CHARNAME>. |  |
| [524] |  | TEMP4=dth(5,20); TEMP4=(TEMP4*TEMP1)/100; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; exe(346,20,TARGETCHARID, 524); | Estate has been transferred to <TARGETCHARNAME>. | 1 | 3 | Will give the Leader Feat: Estate (rel+1). |  |
| [524] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 4 | Will improve relation with Leader with 5d20 points. Modified for Egoism. |  |
| [525] |  |  |  |  |  | Unrest will fall with 4d6. Fear will rise with the same. |  |
| [525] |  | exe(346,42,525,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [525] |  |  |  |  |  | Population will suffer casualties in this operation. |  |
| [525] |  |  |  |  |  | Workers will suffer casualties in this operation. |  |
| [525][529][530] |  | ROLL=che(249,1,CHARID,24) | <CHARNAME> is making an Operational Command Skill Roll. | 1 | 1 | An operational command skill roll will be made by <CHARNAME>. |  |
| [526] |  | exe(346,42,526,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [526] |  |  |  |  |  | Population will suffer casualties in this operation. |  |
| [526] |  |  |  |  |  | Workers will suffer casualties in this operation. |  |
| [526] |  |  |  |  |  | Fear will rise with 3d20. |  |
| [526][527][528] |  | ROLL=che(249,1,CHARID,9) | <CHARNAME> is making an Intimidate Skill Roll. | 1 | 1 | An intimidate skill roll will be made by <CHARNAME>. |  |
| [527] |  | exe(346,42,527,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [527] |  |  |  |  |  | Free Folk will suffer casualties in this operation. |  |
| [527] |  |  |  |  |  | Will relocate 5d20 * 100 Free Folk. |  |
| [528] |  |  |  |  |  | Population will suffer casualties in this operation. |  |
| [528] |  |  |  |  |  | You'll pillage the populace's reserves of Credits and Food. |  |
| [528] |  | exe(346,42,528,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [528] |  |  |  |  |  | Unrest and Danger will increase |  |
| [529] |  | exe(346,42,529,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [529] |  |  |  |  |  | Population will suffer casualties in this operation. |  |
| [529] |  |  |  |  |  | Workers will suffer casualties in this operation. |  |
| [529] |  |  |  |  |  | You'll pillage the populace's reserves of Credits and Food. |  |
| [529] |  |  |  |  |  | You'll raze Assets. |  |
| [529] |  |  |  |  |  | Unrest and Danger will increase |  |
| [530] |  |  |  |  |  | Population will suffer casualties in this operation. And even more will be deported. |  |
| [530] |  |  |  |  |  | Unrest will fall with 6d10. Fear will rise with the same. |  |
| [530] |  | exe(346,42,530,ZONEID,TEMP1) | <LOCALTEMPTEXT> | 1 | 3 |  |  |
| [531] | TEMP4>0 | ZONEKEY.militancy=min(100,ZONEKEY.militancy+TEMP4); | Militancy increased with +<TEMP4>. | 1 | 3 | Will increase Zone Militancy with +5d6 |  |
| [531] |  | ROLL=che(249,1,CHARID,1) | <CHARNAME> is making a Bribery Skill Roll. | 1 | 1 | A bribery skill roll will be made by <CHARNAME>. |  |
| [531] |  | TEMP4=(dth(5,6)*TEMP1)/100; TEMP5=TEMP4*400; TEMP5=TEMP5/(ZONEKEY.pop+ZONEKEY.worker+1); TEMP4=min(TEMP4,TEMP5); |  |  |  | Effect is reduced if more than 40K populace |  |
| [531] |  | REGKEY.credits=REGKEY.credits-500; |  |  |  | Costs 500 Credits |  |
| [532] |  | DIFF= 50 + che(249,1,TARGETCHARID,10) |  |  |  | Difficulty for assasination attempt will be 50 + Personal Combat Roll of targetted Leader |  |
| [532] | RESULT==4 | TARGETCHARSTAT.19=TARGETCHARSTAT.19/3; TARGETCHARSTAT.20=TARGETCHARSTAT.20/3; | The targeted Leader is aware you ordered the attempted assasination and lost 66% of Relation and Loyalty. | 1 | 5 |  |  |
| [532] | RESULT>=3 |  | <TARGETCHARNAME> managed to fight off the assasin. | 1 | 4 |  |  |
| [532] | RESULT<=2 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> was assassinated. | 1 | 3 |  |  |
| [532] |  | ROLL=che(249,1,CHARID,10) |  |  |  | A personal combat skill roll will be made by <CHARNAME> to see if he succeeds in the assasination attempt. |  |
| [532][533][535] | RESULT==4 |  | Critical Failure! | 1 | 2 |  |  |
| [532][533][535] | RESULT==2 |  | Successful Skill Roll! | 1 | 2 |  |  |
| [532][533][535] | RESULT==3 |  | Failure! | 1 | 2 |  |  |
| [532][533][535] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; |  |  |  |  |  |
| [532][533][535] | ROLL<DIFF | RESULT=3; TEMP1=50; |  |  |  |  |  |
| [532][533][535] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=200; |  |  |  |  |  |
| [532][533][535] | ROLL>=DIFF | RESULT=2; TEMP1=100; |  |  |  | A (critical) success will result in the successful execution of the task. |  |
| [532][533][535] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 1 |  |  |
| [532][533][535] | RESULT==1 |  | Critical Success! | 1 | 2 |  |  |
| [533] |  | DIFF=80 + TARGETCHARSTAT.46 |  |  |  | Difficulty to threaten is 80 + Heroism of target |  |
| [533] |  | ROLL=che(249,1,CHARID,9) |  |  |  | An intimidate skill roll will be made by <CHARNAME>. |  |
| [533] | RESULT<=2 | TARGETCHARSTAT.19=TARGETCHARSTAT.19+inv(TARGETCHARSTAT.19,30); TARGETCHARSTAT.20=(TARGETCHARSTAT.20*90)/100; | <TARGETCHARNAME> was successfully threatened. Lost 10% relation, but gained 30% loyalty. | 1 | 3 |  |  |
| [533] | RESULT>=3 |  | <TARGETCHARNAME> was not impressed by your attempt to threaten him. | 1 | 4 |  |  |
| [533] | RESULT==4 | TARGETCHARSTAT.19=(TARGETCHARSTAT.19*80)/100; TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | The targeted Leader took offensive with your threats. | 1 | 5 |  |  |
| [534] |  | TEMP3=inv(FACTIONSTAT.5,10); FACTIONSTAT.5=FACTIONSTAT.5+TEMP3; TEMP2=che(249,1,CHARID,1); FACTIONID=TARGETCHARSTAT.13; REGIMEKEY.credits=REGIMEKEY.credits-1000; FACTIONSUPPORT.TEMP1=FACTIONSUPPORT.TEMP1+TEMP2; | <CHARNAME> rolled <TEMP2> on the bribery skill roll. We improved the chances of <LOOKUPFACTIONNAME=<FACTIONID>> winning the next elections by providing <TEMP2> support points. Faction Happiness went up with +<TEMP3> points. | 1 | 1 | Number of support points given to Faction will be equal to <CHARNAME>'s bribery skill roll. |  |
| [535] |  | DIFF=80 + TARGETCHARSTAT.48 |  |  |  | Difficulty to investigate is 80 + Authority of target |  |
| [535] | RESULT<=2 | TEMP1=(TARGETCHARSTAT.28 * dth(5,20))/100; TARGETCHARSTAT.28=TARGETCHARSTAT.28-TEMP1; REGKEY.credits=REGKEY.credits+TEMP1; | <TARGETCHARNAME> was successfully interrogated. We recovered <TEMP1> Credits. | 1 | 3 |  |  |
| [535] |  | ROLL=che(249,1,CHARID,28) |  |  |  | An interrogation skill roll will be made by <CHARNAME> |  |
| [535] | RESULT<=2; TEMP1>0; | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | The Leader lost <TEMP5> Seniority Points due to his shady dealings being revealed. | 1 | 4 |  |  |
| [535] | RESULT>=3 |  | <TARGETCHARNAME> was not impressed by your attempt to interrogate him. | 1 | 5 |  |  |
| [535] | RESULT==4 | TARGETCHARSTAT.19=(TARGETCHARSTAT.19*80)/100; TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | The targeted Leader took offensive with your interrogation. | 1 | 6 |  |  |
| [536] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popCredits*TEMP1)/200; TEMP2=min(ZONEKEY.popCredits,TEMP2); TEMP2=min(TEMP1*50,TEMP2); TEMP3=(ZONEKEY.popLoyalty*TEMP2)/100; ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP2; ZONEKEY.popLoyalty=max(0,ZONEKEY.popLoyalty-25); TEMP4=TEMP3; REGKEY.credits=REGKEY.credits+TEMP4; | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to raise <TEMP4> Credits of emergency tax. Loyalty dropped with 25  points. | 1 | 1 | Impose as much of the private Credits as you can. 25 point drop in Loyalty will be caused by this Stratagem. Success dependend on adminstrative skill roll by <CHARNAME>. |  |
| [537] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/100000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; ZONEKEY.worker=ZONEKEY.worker+TEMP2; | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP2>00 Workers from the Population. Population Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 10% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |  |
| [538] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/400000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; TEMP3=(ZONEKEY.popLoyalty*ZONEKEY.worker*TEMP1)/400000; ZONEKEY.worker=ZONEKEY.worker-TEMP3; TEMP4=TEMP2+TEMP3; exe(346,11,ZONEID,12,TEMP4); | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP4>00 Colonists from our Populace. Population and Worker Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 5% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |  |
| [539] |  | TEMP1=che(249,1,CHARID,14); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/500000; ZONEKEY.pop=ZONEKEY.pop-TEMP2; ZONEKEY.popLoyalty=(ZONEKEY.popLoyalty*90)/100; ZONEKEY.popHapiness=(ZONEKEY.popHapiness*90)/100; TEMP3=(ZONEKEY.popLoyalty*ZONEKEY.worker*TEMP1)/500000; ZONEKEY.worker=ZONEKEY.worker-TEMP3; TEMP4=TEMP2+TEMP3; exe(346,11,ZONEID,9,TEMP4); | <CHARNAME> rolled <TEMP1> on the admin skill roll. We managed to draft <TEMP4>00 Recruits from our Populace. Population and Worker Happiness and Loyalty decreased with 10%. | 1 | 1 | Recruit 2.5% at Population Loyalty is 100 and skill roll is 100. Success dependend on adminstrative skill roll by <CHARNAME>. |  |
| [540] | ROLL>=(DIFF+50); TEMP1>5; TEMP2>0; |  | We also found new Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1==5; TEMP2>0; |  | We also found Water Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1==4; TEMP2>0; |  | We also found Radioactive Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1==3; TEMP2>0; |  | We also found Rare Metal Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1==1; TEMP2>0; |  | We also found Oil Deposits in another Hex of <ZONENAME>. | 1 | 4 | If critical succes (>diff+50) roll you'll find an additional new Resource Hex. |  |
| [540] | ROLL>=(DIFF+50); TEMP1<1; TEMP2>0; |  | We are quite sure that there are no further hidden resources left in this Zone. | 1 | 4 |  |  |
| [540] | ROLL>=(DIFF+50); TEMP2>0; | TEMP1=che(249,22,ZONEID); |  |  |  |  |  |
| [540] | ROLL>=(DIFF+50); TEMP1==2; TEMP2>0; |  | We also found Metal Deposits in another Hex of <ZONENAME>. | 1 | 4 |  |  |
| [540] |  | ROLL=che(249,1,CHARID,26); DIFF=50; | Difficulty was <DIFF>. Rolled <ROLL> on prospecting skill roll. | 1 | 1 | Difficulty is 50. Prospecting skill roll by <CHARNAME> will be made. |  |
| [540] | ROLL>=(DIFF+50) |  | We rolled a critical succes! | 1 | 2 |  |  |
| [540][651] | ROLL>=DIFF; TEMP1==5; |  | We found Water Deposits in <ZONENAME>. | 1 | 3 |  |  |
| [540][651] | ROLL>=DIFF; TEMP1>5; |  | We found new Deposits in <ZONENAME>. | 1 | 3 |  |  |
| [540][651] | ROLL<DIFF |  | I regret to report we did not find anything. This does not mean that there is nothing to be found. Our search efforts might have been eh.. sub optimal. | 1 | 3 |  |  |
| [540][651] | ROLL>=DIFF | TEMP1=che(249,22,ZONEID); TEMP2=TEMP1; |  |  |  |  |  |
| [540][651] | ROLL>=DIFF; TEMP1==1; |  | We found Oil Deposits in <ZONENAME>. | 1 | 3 | If successful you'll find a new Resource Hex. |  |
| [540][651] | ROLL>=DIFF; TEMP1==2; |  | We found Metal Deposits in <ZONENAME>. | 1 | 3 |  |  |
| [540][651] | ROLL>=DIFF; TEMP1==3; |  | We found Rare Metal Deposits in <ZONENAME>. | 1 | 3 |  |  |
| [540][651] | ROLL>=DIFF; TEMP1==4; |  | We found Radioactive Deposits in <ZONENAME>. | 1 | 3 |  |  |
| [540][651] | ROLL>=DIFF; TEMP1<1; |  | We are quite sure that there are no hidden resources left in this Zone. | 1 | 3 |  |  |
| [541] |  | ROLL=che(249,1,CHARID,25); DIFF=100; | Difficulty was <DIFF>. Rolled <ROLL> on science skill roll. | 1 | 1 | Difficulty is 100. Science skill roll by <CHARNAME> will be made. |  |
| [541] | ROLL>=DIFF | TEMP1=che(249,23,ZONEID); |  |  |  |  |  |
| [541] | ROLL>=DIFF; TEMP1<1; |  | We are quite sure that there are no hidden Archaeological Finds left in this Zone. | 1 | 2 |  |  |
| [541] | ROLL>=DIFF; TEMP1==1; |  | We found a very rare Archaeological Find  in <ZONENAME>. | 1 | 2 | If successful you'll find a new Archaeological Find. |  |
| [541] | ROLL>=DIFF; TEMP1==2; |  | We found a rare Archaeological Find  in <ZONENAME>. | 1 | 2 |  |  |
| [541] | ROLL>=DIFF; TEMP1==3; |  | We found an uncommon Archaeological Find  in <ZONENAME>. | 1 | 2 |  |  |
| [541] | ROLL>=DIFF; TEMP1==4; |  | We found a common Archaeological Find in <ZONENAME>. | 1 | 2 |  |  |
| [541] | ROLL>=DIFF; TEMP1==5; |  | We found Water Deposits in <ZONENAME>. | 1 | 2 |  |  |
| [541] | ROLL>=DIFF; TEMP1>5; |  | We found a new Archaeological Find in <ZONENAME>. | 1 | 2 |  |  |
| [541] | ROLL<DIFF |  | I regret to report we did not find anything. | 1 | 2 |  |  |
| [542] |  | TEMP1=che(249,1,CHARID,6); TEMP2=(ZONEKEY.popLoyalty*ZONEKEY.pop*TEMP1)/10000; TEMP2=TEMP2*3; TEMP2=TEMP2+dth(5,100); ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP2; | <CHARNAME> rolled <TEMP1> on the oratory skill roll. We managed to attract <TEMP2> Credits of investment into the Private Economy of <ZONENAME>. | 1 | 1 | Increase the amount of Private Credits available in the Private Economy of this Zone. Success dependend on oratory skill roll by <CHARNAME>. |  |
| [543] |  | TEMP1=che(249,1,CHARID,6); TEMP2=(ZONEKEY.popHapiness*ZONEKEY.freeFolk*TEMP1)/60000;  ZONEKEY.pop=ZONEKEY.pop+TEMP2; ZONEKEY.freeFolk=ZONEKEY.freeFolk-TEMP2; exe(346,49,ZONEID); | <CHARNAME> rolled <TEMP1> on the oratory skill roll. We managed to attract <TEMP2>00 Free Folk to settle in <ZONENAME> City. | 1 | 1 | Increase the Zone's Population by persuading Free Folk to settle in the City. Success dependend on oratory skill roll by <CHARNAME>. |  |
| [544] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+100; CHARKEY.41=CHARKEY.41+100; |  |  |  |  |  |
| [544] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 3 | Will improve relation with Leader with 2d10 points. Modified for Egoism. |  |
| [544] |  | TEMP4=dth(2,10); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-100; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; |  |  |  |  |  |
| [545] | chk(261,3)>0 | CHARKEY.40=CHARKEY.40+200; CHARKEY.41=CHARKEY.41+200; |  |  |  |  |  |
| [545] | TEMP4>0 | TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Relation with <TARGETCHARNAME> improved with <TEMP4> points. | 1 | 3 | Will improve relation with Leader with 3d20 points. Modified for Egoism. |  |
| [545] |  | TEMP4=dth(3,20); TEMP4=(TEMP4*TEMP1)/100; REGKEY.credits=REGKEY.credits-200; TEMP4=(TEMP4*TARGETCHARSTAT.49)/50; |  |  |  |  |  |
| [546] |  | ROLL=dth(3,20); | A 3d20 Roll is made. | 1 | 1 | A 3d20 roll will be made. |  |
| [546] | RESULT<3 | REGKEY.credits=REGKEY.credits-250 |  |  |  |  |  |
| [546] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34*3)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 25% of his/her Seniority Points. |  |
| [546][547][548] | RESULT<3 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> accepted gracefully and went into retirement. | 1 | 3 | Will hopefully result in the retirement of the selected Leader. |  |
| [546][547][548][549] |  | DIFF=che(249,29,REGID,TARGETCHARID); |  |  |  | Difficulty depends on Leaders Seniority Rank. |  |
| [547] |  | ROLL=dth(5,20); | A 5d20 Roll is made. | 1 | 1 | A 5d20 roll will be made. |  |
| [547] | RESULT<3 | REGKEY.credits=REGKEY.credits-500 |  |  |  |  |  |
| [547] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/2; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 50% of his/her Seniority Points. |  |
| [548] | RESULT<3 | REGKEY.credits=REGKEY.credits-1000 |  |  |  |  |  |
| [548] | RESULT>2 | TEMP5=TARGETCHARSTAT.34; TARGETCHARSTAT.34=(TARGETCHARSTAT.34)/4; TEMP5=TEMP5-TARGETCHARSTAT.34; | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. This affair did make the Leader lose <TEMP5> Seniority Points. | 1 | 3 | A refusal by the Leader will make the Leader lose 75% of his/her Seniority Points. |  |
| [548] |  | ROLL=dth(7,20); | A 7d20 Roll is made. | 1 | 1 | A 7d20 roll will be made. |  |
| [549] | RESULT>2 |  | <TARGETCHARNAME> refused to retire. Your offer was declined. <TARGETCHARNAME> did say he would like to leave the Reserve Pool and get assigned a fitting Job. | 1 | 3 |  |  |
| [549] | RESULT<3 | exe(346,45,TARGETCHARID) | <TARGETCHARNAME> did not like it, but went into retirement anyway. | 1 | 3 |  |  |
| [549] |  | ROLL=dth(1,20); | A 1d20 Roll is made. | 1 | 1 | A 1d20 roll will be made. |  |
| [551] |  | exe(346,1,20,-1,-1) |  |  |  |  |  |
| [552] |  | exe(346,1,40,13,2) |  |  |  |  |  |
| [561] |  | exe(346,11,ZONEID,8,TEMP3); exe(346,11,ZONEID,22,TEMP3); |  |  |  |  |  |
| [561] |  | TEMP3=TEMP2*dth(1,10)/10; TEMP3=TEMP3*REGKEY.commerce/50; | Produced <TEMP3> IP. Delivered to <ZONENAME> Inventory. | 1 | 2 | Will produce 1d10 * Population / 10 IP multiplied with Commerce Profile / 50. |  |
| [561] |  | TEMP1=ZONEKEY.pop; TEMP2=min(TEMP1,500); REGKEY.credits=REGKEY.credits-TEMP2; | We managed to mobilize (and pay) <TEMP2> Population and Artisans. Paid them 0.01 Cr each for the artisinal production of Industrial Points (IP). | 1 | 1 | Will cost 1 Credit per 1000 Pop available, maximized at 500 Credits. |  |
| [562] |  | TARGETCHARSTAT.83=TARGETCHARSTAT.83+1; TEMP1=TARGETCHARSTAT.83; | <TARGETCHARNAME> now has Rank #<TEMP1>. | 1 | 1 |  |  |
| [562] |  | TEMP2=10*TARGETCHARSTAT.83; TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP2; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | Leader was happy with his reward. Relation with Leader went up +<TEMP2>. | 1 | 2 |  |  |
| [563] |  | TEMP2=20*TARGETCHARSTAT.83; TARGETCHARSTAT.20=TARGETCHARSTAT.20-TEMP2; TARGETCHARSTAT.20=max(0,TARGETCHARSTAT.20); | Leader was angry to see his Rank stripped down. Relation with Leader went down -<TEMP2>. | 1 | 1 |  |  |
| [563] |  | TARGETCHARSTAT.83=TARGETCHARSTAT.83-1; TEMP1=TARGETCHARSTAT.83; | <TARGETCHARNAME> now has Rank #<TEMP1>. | 1 | 2 |  |  |
| [581] |  | ZONEKEY.extendMine=1 | We are setting preparations in motion. You should have a decision on your desk early next round. | 1 | 1 | Will allow you to increase the reserves in a Mine, but in exchange for a reduction in Mining Level. |  |
| [6] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [6] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [6] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [6] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [601] |  | exe(346,46,HISID); exe(203,HISID,25,40,0); exe(203,HISID,22,-30,0); exe(203,HISID,21,601,0); exe(203,HISID,49, ROUND); | Posture has been set to DEFENSE. | 1 | 1 | Change posture of a HQ. |  |
| [602] |  | exe(346,46,HISID); exe(203,HISID,25,30,0); exe(203,HISID,26,30,0); exe(203,HISID,27,30,0); exe(203,HISID,22,-40,0); exe(203,HISID,23,-40,0); exe(203,HISID,24,-40,0); exe(203,HISID,28,10,0);exe(203,HISID,21,602,0); exe(203,HISID,49, ROUND); | Posture has been set to RETREAT. | 1 | 1 | Change posture of a HQ. |  |
| [603] |  | exe(346,46,HISID); exe(203,HISID,31,50,0); exe(203,HISID,32,50,0); exe(203,HISID,22,-40,0); exe(203,HISID,23,-40,0); exe(203,HISID,29,-10,0);  exe(203,HISID,21,603,0); exe(203,HISID,49, ROUND); | Posture has been set to FORCED MARCH. | 1 | 1 | Change posture of a HQ. |  |
| [604] |  | exe(346,46,HISID); exe(203,HISID,25,50,0); exe(203,HISID,22,-60,0);  exe(203,HISID,28,80,0); exe(203,HISID,21,604,0); exe(203,HISID,49, ROUND); | Posture has been set to HOLD THE LINE. | 1 | 1 | Change posture of a HQ. |  |
| [605] |  | exe(346,46,HISID); exe(203,HISID,24,20,0); exe(203,HISID,27,-40,0); exe(203,HISID,30,-100,0); exe(203,HISID,28,20,0); exe(203,HISID,21,605,0); exe(203,HISID,49, ROUND); | Posture has been set to RECON IN FORCE. | 1 | 1 | Change posture of a HQ. |  |
| [606] |  | exe(346,46,HISID); exe(203,HISID,25,-30,0); exe(203,HISID,22,40,0); exe(203,HISID,21,606,0); exe(203,HISID,49, ROUND); | Posture has been set to INFILTRATION. | 1 | 1 | Change posture of a HQ. |  |
| [607] |  | exe(346,46,HISID); exe(203,HISID,25,40,0); exe(203,HISID,26,40,0); exe(203,HISID,27,-30,0); exe(203,HISID,24,30,0); exe(203,HISID,21,607,0); exe(203,HISID,49, ROUND); | Posture has been set to FLUID DEFENSE. | 1 | 1 | Change posture of a HQ. |  |
| [608] |  | exe(346,46,HISID); exe(203,HISID,22,40,0); exe(203,HISID,24,30,0); exe(203,HISID,25,-30,0); exe(203,HISID,34,100,0); exe(203,HISID,21,608,0); exe(203,HISID,49, ROUND); | Posture has been set to SMALL POCKETS. | 1 | 1 | Change posture of a HQ. |  |
| [609] |  | exe(346,46,HISID); exe(203,HISID,36,100,0); exe(203,HISID,22,-60,0); exe(203,HISID,23,-60,0); exe(203,HISID,24,-60,0);  exe(203,HISID,25,-40,0); exe(203,HISID,26,-40,0); exe(203,HISID,27,-40,0); exe(203,HISID,21,609,0); exe(203,HISID,49, ROUND); | Posture has been set to FIELD TRAINING. | 1 | 1 | Change posture of a HQ. |  |
| [610] |  | exe(346,46,HISID); exe(203,HISID,31,30,0); exe(203,HISID,32,30,0); exe(203,HISID,33,30,0); exe(203,HISID,25,-20,0); exe(203,HISID,26,-20,0);  exe(203,HISID,27,-20,0); exe(203,HISID,21,610,0); exe(203,HISID,49, ROUND); | Posture has been set to RUSH. | 1 | 1 | Change posture of a HQ. |  |
| [611] |  | exe(346,46,HISID); exe(203,HISID,23,100,0); exe(203,HISID,22,50,0);  exe(203,HISID,31,-30,0); exe(203,HISID,32,-30,0); exe(203,HISID,33,-30,0); exe(203,HISID,25,-50,0); exe(203,HISID,26,-50,0); exe(203,HISID,27,-50,0); exe(203,HISID,21,611,0); exe(203,HISID,49, ROUND); | Posture has been set to SIEGE. | 1 | 1 | Change posture of a HQ. |  |
| [612] |  | exe(346,46,HISID); exe(203,HISID,24,30,0);  exe(203,HISID,31,30,0); exe(203,HISID,32,30,0); exe(203,HISID,33,30,0); exe(203,HISID,25,-40,0); exe(203,HISID,26,-40,0); exe(203,HISID,27,-40,0); exe(203,HISID,21,612,0); exe(203,HISID,49, ROUND); | Posture has been set to MOBILE OPS. | 1 | 1 | Change posture of a HQ. |  |
| [613] |  | exe(346,46,HISID); exe(203,HISID,39,50,0); exe(203,HISID,22,-40,0); exe(203,HISID,23,-40,0); exe(203,HISID,24,-40,0); exe(203,HISID,21,613,0); exe(203,HISID,49, ROUND); | Posture has been set to ENTRENCH. | 1 | 1 | Change posture of a HQ. |  |
| [614] |  | exe(346,46,HISID); exe(203,HISID,37,-50,0); exe(203,HISID,34,-50,0); exe(203,HISID,21,614,0); exe(203,HISID,49, ROUND); | Posture has been set to ECONOMIZE. | 1 | 1 | Change posture of a HQ. |  |
| [615] |  | exe(346,46,HISID); exe(203,HISID,22,80,0); exe(203,HISID,34,-75,0); exe(203,HISID,36,-75,0); exe(203,HISID,25,-40,0); exe(203,HISID,26,-40,0); exe(203,HISID,27,-40,0); exe(203,HISID,21,615,0); exe(203,HISID,49, ROUND); | Posture has been set to CHARGE. | 1 | 1 | Change posture of a HQ. |  |
| [616] |  | exe(346,46,HISID); exe(203,HISID,39,70,0); exe(203,HISID,25,30,0);  exe(203,HISID,26,30,0);   exe(203,HISID,27,30,0);   exe(203,HISID,22,-70,0); exe(203,HISID,23,-70,0);  exe(203,HISID,24,-70,0);  exe(203,HISID,31,-70,0);  exe(203,HISID,32,-70,0);  exe(203,HISID,33,-70,0);  exe(203,HISID,21,616,0); exe(203,HISID,49, ROUND); | Posture has been set to FORTRESS. | 1 | 1 | Change posture of a HQ. |  |
| [617] |  | exe(346,46,HISID); exe(203,HISID,24,60,0); exe(203,HISID,33,30,0); exe(203,HISID,39,-100,0); exe(203,HISID,38,60,0);  exe(203,HISID,25,-30,0);  exe(203,HISID,26,-30,0);   exe(203,HISID,27,-30,0); exe(203,HISID,21,617,0); exe(203,HISID,49, ROUND); | Posture has been set to BLITZKRIEG. | 1 | 1 | Change posture of a HQ. |  |
| [618] |  | exe(346,46,HISID); exe(203,HISID,25,40,0); exe(203,HISID,26,40,0); exe(203,HISID,27,75,0); exe(203,HISID,22,-50,0); exe(203,HISID,23,-50,0);  exe(203,HISID,24,-50,0); exe(203,HISID,40,3,0); exe(203,HISID,21,618,0); exe(203,HISID,49, ROUND); | Posture has been set to AMBUSH. | 1 | 1 | Change posture of a HQ. |  |
| [619] |  | exe(346,46,HISID); exe(203,HISID,40,1,0); exe(203,HISID,25,-30,0); exe(203,HISID,26,-30,0); exe(203,HISID,27,-30,0);  exe(203,HISID,21,619,0); exe(203,HISID,49, ROUND); | Posture has been set to DEFEAT IN DETAIL. | 1 | 1 | Change posture of a HQ. |  |
| [620] |  | exe(346,46,HISID); exe(203,HISID,23,100,0); exe(203,HISID,24,100,0); exe(203,HISID,25,-50,0); exe(203,HISID,26,-50,0); exe(203,HISID,27,-50,0); exe(203,HISID,39,50,0); exe(203,HISID,38,50,0); exe(203,HISID,21,620,0); exe(203,HISID,49, ROUND); | Posture has been set to SHOCK AND AWE. | 1 | 1 | Change posture of a HQ. |  |
| [621] |  | exe(346,46,HISID); exe(203,HISID,22,75,0); exe(203,HISID,25,-75,0); exe(203,HISID,28,100,0); exe(203,HISID,39,-100,0); exe(203,HISID,40,6,0); exe(203,HISID,21,621,0) exe(203,HISID,49, ROUND); | Posture has been set to ALL OUT ATTACK. | 1 | 1 | Change posture of a HQ. |  |
| [622] |  | exe(346,46,HISID); exe(203,HISID,25,75,0); exe(203,HISID,22,-75,0); exe(203,HISID,28,100,0); exe(203,HISID,31,-50,0); exe(203,HISID,32,-50,0); exe(203,HISID,33,-50,0); exe(203,HISID,40,6,0); exe(203,HISID,21,622,0) exe(203,HISID,49, ROUND); | Posture has been set to NO RETREAT. | 1 | 1 | Change posture of a HQ. |  |
| [623] |  | exe(346,46,HISID); exe(203,HISID,22,100,0); exe(203,HISID,25,-75,0); exe(203,HISID,28,100,0); exe(203,HISID,39,-100,0); exe(203,HISID,40,4,0);  exe(203,HISID,21,623,0) exe(203,HISID,49, ROUND); | Posture has been set to SUICIDAL OFFENSIVE. | 1 | 1 | Change posture of a HQ. |  |
| [624] |  | exe(346,46,HISID); exe(203,HISID,34,100,0); exe(203,HISID,35,100,0); exe(203,HISID,40,2,0);  exe(203,HISID,21,624,0) exe(203,HISID,49, ROUND); | Posture has been set to GLORIOUS WAR. | 1 | 1 | Change posture of a HQ. |  |
| [651] |  | ROLL=che(249,1,CHARID,26); DIFF=75; | Difficulty was <DIFF>. Rolled <ROLL> on prospecting skill roll. | 1 | 1 | Difficulty is 75. Prospecting skill roll by <CHARNAME> will be made. |  |
| [7] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [7] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [7] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [7] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [701] | ROLL>=DIFF | RESULT=2; TEMP1=1; TEMP2=0; TEMP3=0; |  |  |  | A success will result in recruiting 1d3 % of population of zone. And equal happiness drop. |  |
| [701] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=4; TEMP3=2; |  |  |  | A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [701] |  | DIFF=DIFF+50 |  |  |  |  |  |
| [701] | TEMP4>40 | TEMP4=40 |  |  |  | Maximum population loss is 4000. |  |
| [701] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=2; TEMP3=1; |  |  |  | A failure will result in 2d10% loss of relation and 1d10% increase of hatred. |  |
| [701] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=2; TEMP2=0; TEMP3=0; |  |  |  | A critical success will result in recruiting 2d3% of population of zone. And equal happiness drop. |  |
| [701][702][703] | TEMP7>0 | REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7) | Hatred of <TARGETREGIMENAME> increased with <TEMP7> points. | 1 | 0 |  |  |
| [701][702][703] | TEMP6>0 | REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6) | Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points. | 1 | 0 |  |  |
| [701][702][703] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 0 |  |  |
| [701][702][703] | RESULT==4 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Crtitical Failure! Our operatives where discovered straight in the act! | 1 | 0 |  |  |
| [701][702][703] | RESULT==3 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Failure! Our operatives where discovered. | 1 | 0 |  |  |
| [701][702][703] | RESULT==4 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate the most ambitious of our population in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [701][702][703] | RESULT==2 | TEMP1=dth(TEMP1,3); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP5=inv(ZONEKEY.popHapiness,TEMP1); | Success! Ambitious people from <ZONENAME> where lured into leaving for greener pastures. | 1 | 0 |  |  |
| [701][702][703] |  | TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0; |  |  |  |  |  |
| [701][702][703] |  | DIFF=(ZONEKEY.popLoyalty/2) |  |  |  | Difficulty is target regime popularity + target zone loyalty/2 + target regimes inverse democracy profile |  |
| [701][702][703] | TEMP6>0 |  |  |  |  |  | Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points. |
| [701][702][703] | RESULT==1 | TEMP1=dth(TEMP1,3); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP5=inv(ZONEKEY.popHapiness,TEMP1); | Critical Success! Ambitious people from <ZONENAME> where lured into leaving for greener pastures. | 1 | 0 |  |  |
| [701][702][703] | RESULT==1 |  |  |  |  |  | An unknown foreign power agitated the most ambitious of our population in <ZONENAME>. |
| [701][702][703] | TEMP6>0 | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [701][702][703] |  | ROLL=ROLL+REGIMEKEY.meritocracy | Roll gets +<REGIMEKEY.meritocracy> for Meritocracy. |  |  | The roll will be increased with your meritocracy profile score. |  |
| [701][702][703] |  | DIFF=DIFF+(100-TARGETREGIMEKEY.democracy) |  |  |  |  |  |
| [701][702][703] | RESULT==3 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate the most ambitious of our population in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [701][702][703] | TEMP5>0 |  |  |  |  |  | <ZONENAME> lost <TEMP5> happiness points. |
| [701][702][703] |  | DIFF=DIFF+TARGETREGIMEKEY.popularity |  |  |  |  |  |
| [701][702][703] | RESULT==2 |  |  |  |  |  | An unknown foreign power agitated the most ambitious of our population in <ZONENAME>. |
| [701][702][703] | TEMP5>0 | ZONEKEY.popHapiness=ZONEKEY.popHapiness-TEMP5; ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness); | <ZONENAME> lost <TEMP5> happiness points. | 1 | 0 |  |  |
| [701][702][703] | TEMP4>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP4; ZONE.freefolk=ZONEKEY.freefolk+TEMP4; | <ZONENAME> lost <TEMP4>00 population | 1 | 0 |  |  |
| [701][702][703] | TEMP4>0 |  |  |  |  |  | <ZONENAME> lost <TEMP4>00 population |
| [701][702][703] |  | ROLL=che(249,1,CHARID,40) |  |  |  | A covert ops skill roll will be made by <CHARNAME>. |  |
| [702] |  | DIFF=DIFF+25 |  |  |  |  |  |
| [702] | TEMP4>100 | TEMP4=100 |  |  |  | Maximum population loss is 10000. |  |
| [702] | ROLL>=DIFF | RESULT=2; TEMP1=3; TEMP2=0; TEMP3=0; |  |  |  | A success will result in recruiting 3d3 % of population of zone. And equal happiness drop. |  |
| [702] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=4; TEMP2=0; TEMP3=0; |  |  |  | A critical success will result in recruiting 4d3% of population of zone. And equal happiness drop. |  |
| [702] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=4; TEMP3=2; |  |  |  | A failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [702] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=8; TEMP3=4; |  |  |  | A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [703] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=6; TEMP2=0; TEMP3=0; |  |  |  | A critical success will result in recruiting 6d3% of population of zone. And equal happiness drop. |  |
| [703] |  | DIFF=DIFF+0 |  |  |  |  |  |
| [703] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=16; TEMP3=8; |  |  |  | A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred. |  |
| [703] | TEMP4>200 | TEMP4=200 |  |  |  | Maximum population loss in 20000. |  |
| [703] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=8; TEMP3=4; |  |  |  | A failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [703] | ROLL>=DIFF | RESULT=2; TEMP1=5; TEMP2=0; TEMP3=0; |  |  |  | A success will result in recruiting 5d3 % of population of zone. And equal happiness drop. |  |
| [704] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=2; TEMP2=0; TEMP3=0; TEMP8=2; |  |  |  | A critical success will result in 2d4 % of population of zone rebelling. And unrest. |  |
| [704] | ROLL>=DIFF | RESULT=2; TEMP1=1; TEMP2=0; TEMP3=0; TEMP8=1; |  |  |  | A success will result in 1d4 % of population of zone rebelling. And unrest. |  |
| [704] |  | DIFF=DIFF+50 |  |  |  |  |  |
| [704] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=4; TEMP3=2;  TEMP8=0; |  |  |  | A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [704] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=2; TEMP3=1; TEMP8=0; |  |  |  | A failure will result in 2d10% loss of relation and 1d10% increase of hatred. |  |
| [704] | TEMP4>40 | TEMP4=40 |  |  |  | Can lead to maximum 4000 Rebels. |  |
| [704][705][706] | TEMP5>0 |  |  |  |  |  | <ZONENAME> gained <TEMP5> unrest points. |
| [704][705][706] | RESULT==2 | TEMP1=dth(TEMP1,4); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP8=dth(TEMP8,6); TEMP5=inv(ZONEKEY.unrest,TEMP8); | Success! Unsatisfied people from <ZONENAME> where lured into joining the rebels. | 1 | 0 |  |  |
| [704][705][706] | TEMP6>0 |  |  |  |  |  | Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points. |
| [704][705][706] |  | DIFF=(ZONEKEY.popLoyalty/2) |  |  |  | Difficulty is target regime popularity + target zone loyalty/2 + target regimes inverse autocracy profile |  |
| [704][705][706] |  | DIFF=DIFF+TARGETREGIMEKEY.popularity |  |  |  |  |  |
| [704][705][706] |  | DIFF=DIFF+(100-TARGETREGIMEKEY.autocracy) |  |  |  |  |  |
| [704][705][706] |  | ROLL=che(249,1,CHARID,40) |  |  |  | A covert ops skill roll will be made by <CHARNAME>. |  |
| [704][705][706] |  | ROLL=ROLL+REGIMEKEY.democracy | Roll gets +<REGIMEKEY.democracy> for Democracy. |  |  | The roll will be increased with your democracy profile score. |  |
| [704][705][706] | TEMP4>0 |  |  |  |  |  | <ZONENAME> lost <TEMP4>00 population and they joined rebel forces. |
| [704][705][706] | RESULT==3 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Failure! Our operatives where discovered. | 1 | 0 |  |  |
| [704][705][706] | RESULT==1 | TEMP1=dth(TEMP1,4); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP8=dth(TEMP8,6); TEMP5=inv(ZONEKEY.unrest,TEMP8); | Critical Success! Unsatisfied people from <ZONENAME> where lured into joining the rebels. | 1 | 0 |  |  |
| [704][705][706] | RESULT==4 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Crtitical Failure! Our operatives where discovered straight in the act! | 1 | 0 |  |  |
| [704][705][706] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 0 |  |  |
| [704][705][706] | TEMP6>0 | REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6) | Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points. | 1 | 0 |  |  |
| [704][705][706] |  | TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0; |  |  |  |  |  |
| [704][705][706] | TEMP7>0 | REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7) | Hatred of <TARGETREGIMENAME> increased with <TEMP7> points. | 1 | 0 |  |  |
| [704][705][706] | RESULT==4 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate people into rebellion in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [704][705][706] | RESULT==1 |  |  |  |  |  | An unknown foreign power agitated people into rebellion in <ZONENAME>. |
| [704][705][706] | RESULT==3 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate people into rebellion in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [704][705][706] | RESULT==2 |  |  |  |  |  | An unknown foreign power agitated people into rebellion in <ZONENAME>. |
| [704][705][706] | TEMP5>0 | ZONEKEY.unrest = ZONEKEY.unrest + TEMP5; ZONE.unrest=min(ZONE.unrest,100); | <ZONENAME> saw unrest increase with <TEMP5> points. | 1 | 0 |  |  |
| [704][705][706] | TEMP6>0 | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [704][705][706] | TEMP4>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP4; ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP4; | <ZONENAME> had <TEMP4>00 population deciding to join rebel forces. | 1 | 0 |  |  |
| [705] |  | DIFF=DIFF+25 |  |  |  |  |  |
| [705] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=4; TEMP3=2;  TEMP8=0; |  |  |  | A failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [705] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=8; TEMP3=4;  TEMP8=0; |  |  |  | A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [705] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=4; TEMP2=0; TEMP3=0; TEMP8=4; |  |  |  | A critical success will result in 4d4 % of population of zone rebelling. And unrest. |  |
| [705] | ROLL>=DIFF | RESULT=2; TEMP1=3; TEMP2=0; TEMP3=0; TEMP8=3; |  |  |  | A success will result in 3d4 % of population of zone rebelling. And unrest. |  |
| [705] | TEMP4>120 | TEMP4=120 |  |  |  | Can lead to maximum 12000 Rebels. |  |
| [706] | ROLL>=(DIFF+50) | RESULT=1; TEMP1=6; TEMP2=0; TEMP3=0; TEMP8=6; |  |  |  | A critical success will result in 6d6 % of population of zone rebelling. And unrest. |  |
| [706] |  | DIFF=DIFF+0 |  |  |  |  |  |
| [706] | ROLL>=DIFF | RESULT=2; TEMP1=5; TEMP2=0; TEMP3=0; TEMP8=5; |  |  |  | A success will result in 5d6 % of population of zone rebelling. And unrest. |  |
| [706] | ROLL<(DIFF-50) | RESULT=4; TEMP1=0; TEMP2=16; TEMP3=8;  TEMP8=0; |  |  |  | A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred. |  |
| [706] | ROLL<DIFF | RESULT=3; TEMP1=0; TEMP2=8; TEMP3=4;  TEMP8=0; |  |  |  | A failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [706] | TEMP4>200 | TEMP4=200 |  |  |  | Can lead to maximum 20000 Rebels. |  |
| [707] | ROLL<(DIFF-50) | RESULT=4; TEMP11=0; TEMP2=4; TEMP3=2;  TEMP8=0; |  |  |  | A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [707] | TEMP5>20 | TEMP5=20 |  |  |  | Can lead to maximum 2000 deserters. |  |
| [707] | ROLL<DIFF | RESULT=3; TEMP11=0; TEMP2=2; TEMP3=1; TEMP8=0; |  |  |  | A failure will result in 2d10% loss of relation and 1d10% increase of hatred. |  |
| [707] | ROLL>=DIFF | RESULT=2; TEMP11=1; TEMP2=0; TEMP3=0; TEMP8=1; |  |  |  | A success will result in 1d4 % of soldiers of zone rebelling. And a morale drop. |  |
| [707] |  | DIFF=DIFF+50 |  |  |  |  |  |
| [707] | ROLL>=(DIFF+50) | RESULT=1; TEMP11=2; TEMP2=0; TEMP3=0; TEMP8=2; |  |  |  | A critical success will result in 2d4 % of soldiers of zone rebelling. And morale drop. |  |
| [707][708][709] | RESULT==2 |  |  |  |  |  | An unknown foreign power agitated soldiers into mutiny and rebellion in <ZONENAME>. |
| [707][708][709] | RESULT==3 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate soldiers into mutiny and rebellion in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [707][708][709] | RESULT==1 |  |  |  |  |  | An unknown foreign power agitated soldiers into mutiny and rebellion in <ZONENAME>. |
| [707][708][709] | RESULT==4 |  |  |  |  |  | <SOURCEREGIMENAME> tried to use covert operativers to agitate soldiers into mutiny and rebellion in <ZONENAME>.  However we discovered them and thwarted their plans. |
| [707][708][709] | TEMP6>0 |  |  |  |  |  | Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points. |
| [707][708][709] | RESULT==4 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Crtitical Failure! Our operatives where discovered straight in the act! | 1 | 0 |  |  |
| [707][708][709] | TEMP5>0 |  |  |  |  |  | <ZONENAME> lost <TEMP5>00 soldiers as they joined rebel forces. |
| [707][708][709] |  | DIFF=DIFF+(100-TARGETREGIMEKEY.autocracy) |  |  |  |  |  |
| [707][708][709] |  | DIFF=(TARGERREGIMEKEY.popularity/2) |  |  |  | Difficulty is target regime popularity/2 + target regime soldier morale + target regimes inverse meritocracy profile |  |
| [707][708][709] | TEMP5>0 | exe(346,7,ZONEID,TARGETREGIMEID,TEMP5); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP5; | <ZONENAME> had <TEMP5>00 soldier deciding to mutiny and join rebel forces. | 1 | 0 |  |  |
| [707][708][709] | TEMP4<0 | exe(346,9,ZONEID,TARGETREGIMEID,TEMP4); | <ZONENAME> saw morale of troops in zone reduced with <TEMP4>%. | 1 | 0 |  |  |
| [707][708][709] |  | ROLL=che(249,1,CHARID,40) |  |  |  | A covert ops skill roll will be made by <CHARNAME>. |  |
| [707][708][709] |  | ROLL=ROLL+REGIMEKEY.autocracy | Roll gets +<REGIMEKEY.autocracy> for Autocracy. |  |  | The roll will be increased with your autocracy profile score. |  |
| [707][708][709] |  | DIFF=DIFF+TARGETREGIMEKEY.soldiersmorale |  |  |  |  |  |
| [707][708][709] |  |  | Difficulty was <DIFF>. Rolled <ROLL>. | 1 | 0 |  |  |
| [707][708][709] | TEMP6>0 | REVREGREGKEY.relation=REGREGKEY.relation |  |  |  |  |  |
| [707][708][709] | TEMP6>0 | REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6) | Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points. | 1 | 0 |  |  |
| [707][708][709] |  | TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0; TEMP9=chk(249,4,ZONEID,TARGETREGIMEID,0); |  |  |  |  |  |
| [707][708][709] | TEMP4<0 |  |  |  |  |  | <ZONENAME> military units lost <TEMP4>% morale |
| [707][708][709] | RESULT==2 | TEMP4=dth(TEMP8,6);  TEMP1=dth(TEMP11,4); TEMP5=(TEMP1*TEMP9)/100; | Success! Soldiers from <ZONENAME> convinced to take power and rebel. | 1 | 0 |  |  |
| [707][708][709] | RESULT==3 | TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3); | Failure! Our operatives where discovered. | 1 | 0 |  |  |
| [707][708][709] | RESULT==1 | TEMP4=dth(TEMP8,6);  TEMP1=dth(TEMP11,4); TEMP5=(TEMP1*TEMP9)/100; | Critical Success! Soldiers from <ZONENAME> convinced to take power and rebel. | 1 | 0 |  |  |
| [707][708][709] | TEMP7>0 | REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7) | Hatred of <TARGETREGIMENAME> increased with <TEMP7> points. | 1 | 0 |  |  |
| [708] | ROLL<(DIFF-50) | RESULT=4; TEMP11=0; TEMP2=8; TEMP3=4;  TEMP8=0; |  |  |  | A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [708] | ROLL>=(DIFF+50) | RESULT=1; TEMP11=4; TEMP2=0; TEMP3=0; TEMP8=4; |  |  |  | A critical success will result in 3d4 % of soldiers of zone rebelling. And morale drop. |  |
| [708] | ROLL>=DIFF | RESULT=2; TEMP11=2; TEMP2=0; TEMP3=0; TEMP8=3; |  |  |  | A success will result in 2d4 % of soldiers of zone rebelling. And a morale drop. |  |
| [708] |  | DIFF=DIFF+25 |  |  |  |  |  |
| [708] | ROLL<DIFF | RESULT=3; TEMP11=0; TEMP2=4; TEMP3=2;  TEMP8=0; |  |  |  | A failure will result in 4d10% loss of relation and 2d10% increase of hatred. |  |
| [708] | TEMP5>60 | TEMP5=60 |  |  |  | Can lead to maximum 6000 deserters. |  |
| [709] |  | DIFF=DIFF+0 |  |  |  |  |  |
| [709] | ROLL>=DIFF | RESULT=2; TEMP11=4; TEMP2=0; TEMP3=0; TEMP8=5; |  |  |  | A success will result in 4d4 % of soldiers of zone rebelling. And a morale drop. |  |
| [709] | ROLL>=(DIFF+50) | RESULT=1; TEMP11=8; TEMP2=0; TEMP3=0; TEMP8=6; |  |  |  | A critical success will result in 5d4 % of soldiers of zone rebelling. And morale drop. |  |
| [709] | TEMP5>160 | TEMP5=120 |  |  |  | Can lead to maximum 12000 deserters. |  |
| [709] | ROLL<DIFF | RESULT=3; TEMP11=0; TEMP2=8; TEMP3=4;  TEMP8=0; |  |  |  | A failure will result in 8d10% loss of relation and 4d10% increase of hatred. |  |
| [709] | ROLL<(DIFF-50) | RESULT=4; TEMP11=0; TEMP2=16; TEMP3=8;  TEMP8=0; |  |  |  | A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred. |  |
| [8] |  | REVREGREGKEY.closeTrade=REGIMEID |  |  |  |  |  |
| [8] |  | REGREGKEY.dipTrade = REGREGKEY.dipTrade- 1 |  |  |  | You will lose a trade level. |  |
| [8] |  | REVREGREGKEY.dipTrade=REGREGKEY.dipTrade |  |  |  |  |  |
| [8] |  |  | We reduced our trade cooperation with <TARGETREGIMENAME>. They did not like our unilateral decision. | 1 | 2 |  |  |
| [801] |  | ZONEID=che(249,7,REGIMEID) | Some incapable junior stationed in <ZONENAME> touched a machine that he should not have touched. Something depressurized violently and radiated a large area. The RAD dose is non-lethal, but people are fleeing the contaminated zone anyways. | 1 | 1 | Random Zone will get a 4d10 increase in Danger. |  |
| [801] |  | TEMP1=dth(4,10); ZONEKEY.danger=min(100,ZONEKEY.danger + TEMP1); | Danger +<TEMP1> | 1 | 2 |  |  |
| [801] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3 | 1 | 3 | Fate Points +3 |  |
| [802] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 | Fate Points +2 |  |
| [802] |  | TEMP1=dth(6,10); ZONEKEY.unrest=min(100,ZONEKEY.unrest + TEMP1); | Unrest +<TEMP1> | 1 | 2 | Random Zone will get a 6d10 increase in Unrest. |  |
| [802] |  | ZONEID=che(249,7,REGIMEID) | A new rage spread among our youngsters in <ZONENAME>. They are wild and partying like there is no tomorrow. Windows have been broken. Law enforcement has been in scuffles. | 1 | 1 |  |  |
| [803] |  |  | A young investor has chosen <ZONENAME> to start his industrial empire. | 1 | 1 | Extra Level of Private Light Industry for selected Zone. |  |
| [803] | che(249,11,ZONEID,301)==0 | exe(346,18,ZONEID,301) | He constructed a new private Light Industry asset. | 1 | 3 |  |  |
| [803] |  |  | He tells us he is eager to make his fortune and will be happy to pay you his dues. | 1 | 4 |  |  |
| [803] | che(249,11,ZONEID,301)>0 | exe(346,17,ZONEID,301) | He upgraded the already present private Light Industry asset. | 1 | 2 |  |  |
| [804] |  | ASSETID=che(249,9,ZONEID,8,999999); TEMP1=che(249,10,ASSETID,1,0); TEMP2=min(9,TEMP1+dth(1,4)); TEMP3=TEMP2-TEMP1; exe(346,16,ASSETID,1,TEMP2); | One of our valiant prospectors made an amazing discovery at our mining operations in <ZONENAME>. It will be +<TEMP3> level(s) easier to mine at <LOOKUPASSETNAME=<ASSETID>>. | 1 | 1 | Improve the Ease-of-Mining in a random Mine Asset in selected Zone. |  |
| [805] |  |  | After forcing our entry into a desolate site we found a large room stocked with resources. | 1 | 1 | Get a Goody Box with 4d100 metals, 2d100 rare metals and 8d100 fuel. |  |
| [805] |  | TEMP1=dth(4,100); exe(346,11,ZONEID,2,TEMP1); | We found <TEMP1> metals. | 1 | 2 |  |  |
| [805] |  | TEMP2=dth(2,100); exe(346,11,ZONEID,3,TEMP2); | We found <TEMP2> rare metals. | 1 | 3 |  |  |
| [805] |  | TEMP3=dth(8,100); exe(346,11,ZONEID,1,TEMP3); | We found <TEMP3> fuel. | 1 | 4 |  |  |
| [806] |  | TEMP1=che(249,8,REGIMEID); exe(346,19,REGIMEID,TEMP1); | Our scholars have processed tons of data from the ancient archive. At first they found nothing of interest. But then... EUREKA! we found all the knowledge to use <LOOKUPTECHNAME=<TEMP1>>. | 1 | 1 | Random discovery of a new Tech Field (binary). |  |
| [807] |  | exe(346,10,REGIMEID,GAMEKEY.37,7,ZONEID) | Our troops in <ZONENAME> found a group of 10 dormant Sentinels and managed to approach, enter and control them. They have been immediately deployed. | 1 | 1 | Get a small Independent Unit of AI Walkers somewehere in selected Zone. |  |
| [808] |  | exe(346,20,TARGETCHARID,808) | Grace to you a new assistant joined the retinue of <TARGETCHARNAME>. He will help the Leader to help others to see the path forward. | 1 | 1 | Gives selected Leader a +10 bonus on his/her Charisma-based rolls. |  |
| [809] |  | exe(346,20,TARGETCHARID,809) | Grace to you a new person has entered the retinue of <TARGETCHARNAME>.. He will advice the Leader on matters of military tactics and strategy. | 1 | 1 | Gives selected Leader a +10 bonus on his/her War-based rolls. |  |
| [810] |  | exe(346,1,1050,14,4); TEMP1=che(249,13); | We found this extremely intelligent scientist wandering our streets like a lost puppy. We pushed <LOOKUPCHARFIRSTNAME=<TEMP1>> <LOOKUPCHARLASTNAME=<TEMP1>> into our service. You can find him in the Reserve Pool. | 1 | 1 | A new Leader will be placed in your Reserve Pool. |  |
| [811] |  | ZONEKEY.danger=min(100,ZONEKEY.danger+TEMP1) | Danger went up with +<TEMP1> points. | 1 | 4 |  |  |
| [811] |  | REGKEY.fp=REGKEY.fp+4 | Fate Points +4 | 1 | 5 | Fate Points +4 |  |
| [811] | TEMP3>0 | ZONEKEY.worker=ZONEKEY.worker-TEMP3 | <TEMP3>00 workers died. | 1 | 3 |  |  |
| [811] | TEMP2>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP2 | <TEMP2>00 population died. | 1 | 2 |  |  |
| [811] |  | TEMP1=dth(2,6); TEMP2=((ZONEKEY.pop*TEMP1)/100); TEMP3=((ZONEKEY.worker*TEMP1)/100); |  |  |  | A random Zone will lose 2d6% of Population and Workers and get the same 2d6 increase in Danger. |  |
| [811] |  | ZONEID=che(249,7,REGIMEID) | Terrible accident at <ZONENAME>. We lost life support in a crucial dome. | 1 | 1 |  |  |
| [812] |  | exe(346,9,-1,REGIMEID,20) | Our troops are shocked by our lack of care in preparing their rations. 20% loss of morale. | 1 | 1 | Morale of Militia and Troops is reduced with 20%. |  |
| [812] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 2 | Fate Points +2 |  |
| [813] |  | ZONEID=che(249,7,REGIMEID); TEMP1=dth(4,10); | You have not been yourself sir! You have been slinging insults and death threats to the people of <ZONENAME>. They are shocked. | 1 | 1 |  |  |
| [813] |  | ZONEKEY.fear=min(100,ZONEKEY.fear+TEMP1) | Fear +<TEMP1> | 1 | 2 | A random Zone will get 4d10 increase in Fear. |  |
| [813] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 | Fate Points +2 |  |
| [814] |  | ZONEKEY.militancy=max(0,ZONEKEY.militancy-TEMP1); | Militancy -<TEMP1> | 1 | 2 | Fate Points +2 |  |
| [814] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2 | 1 | 3 |  |  |
| [814] |  | ZONEID=che(249,7,REGIMEID) |  |  |  |  |  |
| [814] |  | TEMP1=dth(4,10); | The Militia in <ZONENAME> had a profound crisis of confidence and a loss of faith in our common cause. | 1 | 1 | A random Zone will suffer a 4d10 decrease in Militancy. |  |
| [815] |  | TEMP1=dth(10,10); | <ZONENAME> has suddenly turned very popular with settlers. I don't think they'll find the pot of gold they are looking for, but in the meantime it causes a nice population boom for us. | 1 | 1 |  |  |
| [815] |  | ZONEKEY.pop=ZONEKEY.pop+TEMP1; | Population +<TEMP1>00 | 1 | 2 | Population of selected Zone will be increased with 10d10 * 100. |  |
| [816] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 | Worker Happiness of selected Zone increases with 3d10. |  |
| [816] |  | TEMP1=dth(3,10); | The workers of <ZONENAME> received their day off. They are singing songs and feasting together. I also pinned some medals on chests. They seem very pleased with their Labour Day. | 1 | 1 |  |  |
| [817] | che(249,11,ZONEID,841)==0 | exe(346,18,ZONEID,841) | They constructed a new private Arena asset. | 1 | 3 |  |  |
| [817] |  |  | The people are eager to attend and be entertained by violence and gore. | 1 | 4 |  |  |
| [817] | che(249,11,ZONEID,841)>0 | exe(346,17,ZONEID,841) | They upgraded the already present private Arena asset. | 1 | 2 |  |  |
| [817] |  |  | Band of gladiators has chosen <ZONENAME> to build an arena. | 1 | 1 | Extra Level of Arena for selected Zone. |  |
| [818] |  | TEMP1=dth(2,20)*100; REGKEY.credits=REGKEY.credits+TEMP1; | That banker you met recently has transferred a generous sum of <TEMP1> credits to our treasury. | 1 | 1 | Gives you 2d20 * 100 Credits. |  |
| [819] |  |  | They are happy to have a new safe place after their long and perillious travels. | 1 | 4 |  |  |
| [819] |  |  | Travelling teachers have with your permission chosen <ZONENAME> to build a school. | 1 | 1 | Extra Level of School for selected Zone. |  |
| [819] | che(249,11,ZONEID,881)>0 | exe(346,17,ZONEID,881) | They upgraded the already present private School asset. | 1 | 2 |  |  |
| [819] | che(249,11,ZONEID,881)==0 | exe(346,18,ZONEID,881) | They constructed a new private School asset. | 1 | 3 |  |  |
| [820] |  | ZONEKEY.popCredits=ZONEKEY.popCredits+TEMP1; | It caused a big influx of people visiting <ZONENAME> to go gambling. This also attracted other private investments (+<TEMP1> Cr) in our economy. | 1 | 4 |  |  |
| [820] | che(249,11,ZONEID,861)==0 | exe(346,18,ZONEID,861) | He constructed a new private Casino asset. | 1 | 3 |  |  |
| [820] | che(249,11,ZONEID,861)>0 | exe(346,17,ZONEID,861) | He upgraded the already present private Casino asset. | 1 | 2 |  |  |
| [820] |  | TEMP1=dth(3,5)*100; | With your permission a rich and yes, physically impressive, merchant has chosen <ZONENAME> to build a casino. | 1 | 1 | Extra Level of Casino for selected Zone. |  |
| [821] |  | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP1) | Population Happiness +<TEMP1> | 1 | 3 |  |  |
| [821] |  | TEMP1=dth(2,10); | Parades, decorations and a concert! And all in your glory! The people of <ZONENAME> thank you for your generosity. It was a day to remember. | 1 | 1 | Worker and Population Happiness of selected zone increase with +2d10 points. |  |
| [821] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 |  |  |
| [822] |  | TEMP1=dth(3,10); | Sir! Truly! That was one of the most magnificent speeches I have ever heard. | 1 | 1 | Worker and Population Happiness & Loyalty of selected zone increase with +3d10 points. |  |
| [822] |  | ZONEKEY.popLoyalty=min(100,ZONEKEY.popLoyalty+TEMP1) | Population Loyalty +<TEMP1> | 1 | 4 |  |  |
| [822] |  | ZONEKEY.workerHapiness=min(100,ZONEKEY.workerHapiness+TEMP1) | Worker Happiness +<TEMP1> | 1 | 2 |  |  |
| [822] |  | ZONEKEY.popHapiness=min(100,ZONEKEY.popHapiness+TEMP1) | Population Happiness +<TEMP1> | 1 | 3 |  |  |
| [823] |  | TEMP1=dth(3,10); | The people listened to you. And they seem so much calmer now. You have truly touched them. | 1 | 1 | Unrest in selected Zone will decrease with -3d10 points. |  |
| [823] |  | ZONEKEY.unrest=max(0,ZONEKEY.unrest-TEMP1) | Unrest -<TEMP1> | 1 | 2 |  |  |
| [824] |  | exe(346,25,HISID,824,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [825] |  | exe(346,25,HISID,825,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [826] |  | exe(346,20,TARGETCHARID,826); TARGETCHARSTAT.20=(TARGETCHARSTAT.20*80)/100; | <TARGETCHARNAME> was disappointed with your lack of trust. | 1 | 1 | Reduces selected Leaders Corruption level every turn with 5 points. |  |
| [827] |  | exe(346,20,TARGETCHARID,827) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Gives selected Leader a +40 modifier on Personal Combat Skill |  |
| [828] |  | REGKEY.combatBonus=REGKEY.combatBonus+50 | Drug has been administered. Until start of next turn all your troops have Combat Bonus +50%. | 1 | 1 | Combat Bonus +50% |  |
| [829] |  |  | After opening an abandoned ancient vault we found a large room stocked with resources. | 1 | 1 | Get a Goody Box with 4d100 rare metals, 4d20 machines and 2d20 high tech parts. |  |
| [829] |  | TEMP1=dth(4,20); exe(346,11,ZONEID,13,TEMP1); | We found <TEMP1> Machines. | 1 | 2 |  |  |
| [829] |  | TEMP2=dth(4,100); exe(346,11,ZONEID,3,TEMP2); | We found <TEMP2> Rare Metals. | 1 | 3 |  |  |
| [829] |  | TEMP3=dth(2,20); exe(346,11,ZONEID,14,TEMP3); | We found <TEMP3> High-Tech parts. | 1 | 4 |  |  |
| [830] |  | exe(346,24,ZONEID,830); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |  |
| [831] |  | exe(346,24,ZONEID,831); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |  |
| [832] | REGIMEKEY.size>4 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |  |
| [832] |  | exe(346,14,REGIMEID,TEMP1) |  |  |  |  |  |
| [832] |  | TEMP1=REGIMESTAT.11; ZONEID=che(249,7,REGIMEID); exe(346,8,ZONEID,TEMP1,1); | Disaster! An unexpected rebellion has started in <ZONENAME>. | 1 | 1 | An unexpected rebellion will start in a random Zone. |  |
| [832] |  | exe(346,8,ZONEID,TEMP1,1);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |  |
| [832] | REGIMEKEY.size>2 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |  |
| [832] |  | REGKEY.fp=REGKEY.fp+6 | Fate Points +6 | 1 | 2 | Fate Points +6 |  |
| [832] | REGIMEKEY.size>6 | exe(346,8,ZONEID,TEMP1,6);  exe(346,8,ZONEID,TEMP1,1); |  |  |  |  |  |
| [833] |  | exe(346,25,HISID,833,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [834] |  | exe(346,25,HISID,834,1) | The Unit has received the precious support you allocated. They send you their gratitude. | 1 | 1 | Gives selected Unit this special support Unit Feat. |  |
| [835] |  | exe(346,20,TARGETCHARID,835) | We never knew <TARGETCHARNAME> had so much capital? | 1 | 1 | Increases selected Leader Loyalty with +1 every turn. |  |
| [836] |  | exe(346,20,TARGETCHARID,836) | We never knew about <TARGETCHARNAME>'s family, didn't we? | 1 | 1 | Increases relation with selected Leader with +2 every turn. |  |
| [837] |  | TEMP1=(dth(6,6)*REGKEY.popularity)/100; | You have been paraded around. There were many celebrations. And many gifts given and favors offered. | 1 | 1 |  |  |
| [837] |  | exe(346,23,REGID,TEMP1) | You gained <TEMP1> PP. | 1 | 2 | PP + 6d6 modified with Popularity |  |
| [838] |  | exe(346,27,REGIMEID,3,3) | Woow. This depot turned out to be a true treasure trove. You found <LOCALTEMPTEXT>. | 1 | 1 | Get 3 Random Uncommon Artifacts |  |
| [839] |  | exe(346,24,ZONEID,839); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |  |
| [840] |  | exe(346,24,ZONEID,840); | <ZONENAME> is happy to have received this gift. | 1 | 1 | Places a new Hex Perk in the Zone. |  |
| [841] |  | REGKEY.fp=REGKEY.fp+9 | Fate Points +9 | 1 | 5 | Fate Points +9 |  |
| [841] |  | ZONEKEY.unrest=min(100,ZONEKEY.unrest+TEMP1) | Unrest went up with +<TEMP1> points. | 1 | 4 |  |  |
| [841] | TEMP3>0 | ZONEKEY.worker=ZONEKEY.worker-TEMP3 | <TEMP3>00 workers died. | 1 | 3 |  |  |
| [841] |  | ZONEID=che(249,7,REGIMEID) | A freak disease struck our populace at <ZONENAME>. It stroke as quick and violently as it burned itself out. The suffering is beyond description. | 1 | 1 |  |  |
| [841] | TEMP2>0 | ZONEKEY.pop=ZONEKEY.pop-TEMP2 | <TEMP2>00 population died. | 1 | 2 |  |  |
| [841] |  | TEMP1=dth(5,10); TEMP2=((ZONEKEY.pop*TEMP1)/100); TEMP3=((ZONEKEY.worker*TEMP1)/100); |  |  |  | A random Zone will lose 5d10% of Population and Workers and get the same 5d10 increase in Unrest. |  |
| [851] |  | exe(346,23,REGID,50,0) | Politicians and bureaucrats rallied behind you. Political Points have increased. | 1 | 1 | Political Points +50 |  |
| [852] |  | REGKEY.credits=REGKEY.credits+1000; | Businessmen and power brokers have rallied behind you. Credits have increased. | 1 | 1 | Credits +1000 |  |
| [9] | RESULT==4 |  | Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer. | 1 | 1 |  |  |
| [9] | RESULT==3 |  | Failure! <TARGETREGIMENAME>. They refused. | 1 | 1 |  |  |
| [9] | RESULT==2 |  | Success! <TARGETREGIMENAME>. They accepted. | 1 | 1 |  |  |
| [9] | RESULT==1 |  | Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start. | 1 | 1 |  |  |
| [9][10][11] |  | DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind; |  |  |  | Difficulty is further modified by + your fist profile and - your mind profile. |  |
| [9][10][11] | RESULT<=2 | REGREGKEY.dipRes = REGREGKEY.dipRes + TEMP2 |  |  |  | A (critical) success will increase the research cooperation level. |  |
| [901] |  | exe(346,20,TARGETCHARID,901) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Strength Stat. |  |
| [902] |  | exe(346,20,TARGETCHARID,902) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a 50% bonus on all XP earned. |  |
| [903] |  | exe(346,20,TARGETCHARID,903) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Intelligence Stat. |  |
| [904] |  | exe(346,20,TARGETCHARID,904) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Charisma Stat. |  |
| [905] |  | exe(346,20,TARGETCHARID,905) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her Willpower Stat. |  |
| [906] |  | exe(346,20,TARGETCHARID,906) | <TARGETCHARNAME> thanks you for the gift of the precious Artifact. | 1 | 1 | Gives selected Leader a +20 bonus on his/her War Stat. |  |
| [911] |  | exe(346,25,HISID,911,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [912] |  | exe(346,25,HISID,912,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [913] |  | exe(346,25,HISID,913,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [914] |  | exe(346,25,HISID,914,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [915] |  | exe(346,25,HISID,915,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [916] |  | exe(346,25,HISID,916,1) | The Unit received the ancient Artifact. They'll make good use of it! | 1 | 1 | Gives selected Unit this ancient Artifact which will provide it with a bonus in combat. |  |
| [921] |  | exe(346,18,ZONEID,3101) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [922] |  | exe(346,18,ZONEID,3102) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [923] |  | exe(346,18,ZONEID,3103) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [924] |  | exe(346,18,ZONEID,3104) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [925] |  | exe(346,18,ZONEID,3105) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [926] |  | exe(346,18,ZONEID,3106) | The ancient Asset has been deployed in <ZONENAME>. | 1 | 1 | This Galactic Republic era Asset will appear in the selected Zone. |  |
| [930] |  | exe(346,20,TARGETCHARID,930) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Troops morale limit +30 points higher if Leader is within 2 Hex. |  |
| [931] |  | exe(346,20,TARGETCHARID,931) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Admin Strain Range is doubled. |  |
| [932] |  | exe(346,20,TARGETCHARID,932) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | CAS growth increased by +2 points. |  |
| [933] |  | exe(346,20,TARGETCHARID,933) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Gives upto 5 Units under direct command 1 Gladiator Unit Feat each. |  |
| [934] |  | exe(346,20,TARGETCHARID,934) | <TARGETCHARNAME> thank you for this honor. | 1 | 1 | Increases Inventor & Science Skill Rolls with +25. |  |
| [935] |  | exe(346,19,REGID,401) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [936] |  | exe(346,19,REGID,402) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [937] |  | exe(346,19,REGID,403) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [938] |  | exe(346,19,REGID,404) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [939] |  | exe(346,19,REGID,405) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [940] |  | exe(346,19,REGID,406) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [941] |  | exe(346,19,REGID,407) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [942] |  | exe(346,19,REGID,408) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [943] |  | exe(346,19,REGID,409) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [944] |  | exe(346,19,REGID,410) | The GR Tech has been acquired and ready to deploy. | 1 | 1 | Will give you the specified GR Tech, all ready to be deployed immediately. |  |
| [945] |  | exe(346,57,41,1,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |  |
| [946] |  | exe(346,57,32,2,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |  |
| [947] |  | exe(346,57,23,1,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |  |
| [948] |  | exe(346,57,36,2,1,ZONEID) | The GR equipment is being secured and manned. | 1 | 1 | Will give you GR equipment in specified Zone. |  |
| [949] |  | exe(346,20,TARGETCHARID,949); TARGETCHARSTAT.38=TARGETCHARSTAT.38-20; | <TARGETCHARNAME> has surrendered to the temptation of alcohol. | 1 | 1 | Alcoholic Leader gets -20 on Intelligence Stat. |  |
| [949] |  | REGKEY.fp=REGKEY.fp+1 | Fate Points +1. | 1 | 1 | Fate Points +1 |  |
| [950] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3. | 1 | 1 | Fate Points +3 |  |
| [950] |  | REGKEY.word=REGKEY.word*3/4; | Your Word Score went down with -25%. | 1 | 1 | Word Score -25% |  |
| [951] |  | REGKEY.fp=REGKEY.fp+3 | Fate Points +3. | 1 | 1 | Fate Points +3 |  |
| [951] |  | ZONEID=che(249,7,REGID,1,0); CULTUREID=ZONESTAT.9; CULTUREKEY.fertility=CULTUREKEY.fertility-20; | Fertility of the Culture in <ZONENAME> went down with -20. | 1 | 1 | Fertility of Culture of random Zone goes down with -20. |  |
| [952] |  | REGKEY.prestigeDamage=REGKEY.prestigeDamage+30; | Your Prestige Damage has gone up with +30. | 1 | 1 | Prestige Damage +30 |  |
| [952] |  | REGKEY.fp=REGKEY.fp+4 | Fate Points +4. | 1 | 1 | Fate Points +4 |  |
| [953] |  | REGKEY.mind=REGKEY.mind/2 | Your Mind Profile has been halved. | 1 | 1 | Mind Profile /2 |  |
| [953] |  | REGKEY.fp=REGKEY.fp+2 | Fate Points +2. | 1 | 1 | Fate Points +2 |  |
| [954] |  | exe(346,20,TARGETCHARID,954); TARGETCHARSTAT.37=TARGETCHARSTAT.37-20; | <TARGETCHARNAME> falls down a maintenance shaft and hits his/her head severly. | 1 | 1 | Leader with Head Injury gets -20 on Charisma Stat |  |
| [954] |  | REGKEY.fp=REGKEY.fp+1 | Fate Points +1. | 1 | 1 | Fate Points +1 |  |

