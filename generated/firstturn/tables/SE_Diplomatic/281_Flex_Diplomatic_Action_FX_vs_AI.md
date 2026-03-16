## `SE_Diplomatic.'Flex Diplomatic Action FX vs AI'` (id = `281`)

### Columns (`8`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | IF Logic | Text 
| `2` | SET Logic | Text 
| `3` | Text | Text 
| `4` | Talk Code | Text 
| `5` | group code | Text 
| `6` | New Col | Text 
| `7` | New Col | Text 

### Rows (`465`)

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- |
|[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][33][102][103][104]|TARGETREGIMESTAT.2<=0||We were not able to find any representative or leader in this zone.|1|1|||
|[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][31][32][33][101][102][103][104][105][106]||REGREGKEY.cardPlayed=ROUND||||||
|[1]||DIFF=60+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3)||||||
|[5][9][13]||DIFF=80+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3)||||Difficulty is 100. Modified by the difference between your relation and the AIs intention.||
|[2][6][10][14]||DIFF=120+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3)||aiNeg||Difficulty is 120. Modified by the difference between your relation and the AIs intention.||
|[3][7][11][15]||DIFF=140+((REGREGKEY.relation-max(0,REVREGREGKEY.aiIntention))*3)||||Difficulty is 140. Modified by the difference between your relation and the AIs intention.||
|[1][2][3][5][6][7][9][10][11][13][14][15]||DIFF=DIFF - REGKEY.word; DIFF=DIFF + 50;||||Difficulty is Modified with your Word Score.||
|[1][2][3]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind;||||Difficulty is further modified by + your fist profile and - your mind profile.||
|[9][10][11]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind;||||Difficulty is further modified by + your fist profile and - your mind profile.||
|[5][6][7]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind;||||Difficulty is further modified by + your fist profile and - your mind profile.||
|[13][14][15]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.heart;||||Difficulty is further modified by + your fist profile and - your heart profile.||
|[1][2][3][5][6][7][9][10][11][13][14][15]||DIFF=max(50,DIFF);||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]|SOURCEAI==1|DIFF=DIFF/2;||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]|TARGETCULTUREKEY.nodip==1|DIFF=DIFF+500;||||Difficulty can be set to impossible with certain cultures who do not engage in diplomacy.||
|[1][2][3][5][6][7][9][10][11][13][14][15]|REVREGREGKEY.aiHatred>0|DIFF=DIFF+max(0,(REVREGREGKEY.aiHatred*5))||||Difficulty can be set much higher if the regime in question has a special hatred against you.||
|[1][2][3][5][6][7][9][10][11][13][14][15]||TEMP1=che(249,16,REGIMEID,TARGETREGIMEID,0); DIFF=(DIFF*TEMP1)/100;||||Difficulty is modified by the attitude the target regime has towards you as well as their Faction in power.||
|[1][2][3][5][6][7][9][10][11][13][14][15]|REGREGKEY.aiNegativeDip>0|TEMP1=REGREGKEY.aiNegativeDip-ROUND; TEMP1=max(0,TEMP1); DIFF=DIFF+(TEMP1*2);||||Difficulty is modified by earlier cancellations by AI.||
|[2][3][5][6][7][9][10][11][13][14][15]|REVREGREGKEY.aiStoryMode==2|DIFF=DIFF+10;||||Difficulty +10 if AI attitude is FRIENDS||
|[2][3][5][6][7][9][10][11][13][14][15]|REVREGREGKEY.aiStoryMode==3|DIFF=DIFF+20;||||Difficulty +20 if AI attitude is COLD||
|[2][3][5][6][7][9][10][11][13][14][15]|REVREGREGKEY.aiStoryMode==4|DIFF=DIFF+40;||||Difficulty +40 if AI attitude is BLACKMAIL||
|[2][3][5][6][7][9][10][11][13][14][15]|REVREGREGKEY.aiStoryMode>4|DIFF=DIFF+60;||||Difficulty +60 if AI attitude is HOSTILE||
|[1][2][3][5][6][7][9][10][11][13][14][15]||ROLL=che(249,1,CHARID,2)||||A diplomacy skill roll will be made versus the difficulty level by <CHARNAME>||
|[1][2][3][5][6][7][9][10][11][13][14][15]|ROLL>=DIFF|RESULT=2; TEMP1=10; TEMP2=1;||||A success will result in +10 relation.||
|[1][2][3][5][6][7][9][10][11][13][14][15]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=20; TEMP2=1;||||A critical success (roll 50 or more above difficulty) will result in +20 relation.||
|[1][2][3][5][6][7][9][10][11][13][14][15]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=1; REGREGKEY.aiNegativeDip = 30+ROUND;||||A failure will result in the relation staying the same||
|[1][2][3][5][6][7][9][10][11][13][14][15]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; TEMP2=1; REGREGKEY.aiNegativeDip = 60+ROUND;||||A critical failure (roll 50 or more below difficulty) will result in -10 relation.||
|[4][8][12][16]||TEMP1=10; REGREGKEY.aiNegativeDip= 100+ROUND;||||||
|[1]|RESULT==2||Success! <TARGETREGIMENAME> accepted to exchange envoys with us.|1|1|||
|[1]|RESULT==3||Failure! <TARGETREGIMENAME> refused to communicate with us.|1|1|||
|[1]|RESULT==1||Critical Success! <TARGETREGIMENAME> was rejoiced to meet us and exchange envoys.|1|1|||
|[1]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our attempt to open communications.|1|1|||
|[2]|RESULT==2||Success! <TARGETREGIMENAME> accepted to exchange ambassadors with us.|1|1|||
|[2]|RESULT==3||Failure! <TARGETREGIMENAME> refused to exchange ambassadors.|1|1|||
|[2]|RESULT==1||Critical Success! <TARGETREGIMENAME> was rejoiced to meet us and exchange ambassadors.|1|1|||
|[2]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[3]|RESULT==2||Success! <TARGETREGIMENAME> accepted to exchange staff in a cultural exchange program.|1|1|||
|[3]|RESULT==3||Failure! <TARGETREGIMENAME> refused to go so far.|1|1|||
|[3]|RESULT==1||Critical Success! <TARGETREGIMENAME> was rejoiced to open up to us and welcome a cultural exchange.|1|1|||
|[3]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our pushiness.|1|1|||
|[5]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[5]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[5]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[5]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[6]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[6]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[6]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[6]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[7]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[7]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[7]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[7]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[9]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[9]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[9]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[9]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[10]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[10]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[10]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[10]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[11]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[11]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[11]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[11]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[13]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[13]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[13]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[13]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[14]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[14]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[14]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[14]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[15]|RESULT==2||Success! <TARGETREGIMENAME>. They accepted.|1|1|||
|[15]|RESULT==3||Failure! <TARGETREGIMENAME>. They refused.|1|1|||
|[15]|RESULT==1||Critical Success! <TARGETREGIMENAME> They were very eager and pleased to start.|1|1|||
|[15]|RESULT==4||Critical Failure! <TARGETREGIMENAME> took insult with our straightforward offer.|1|1|||
|[1][2][3][5][6][7][9][10][11][13][14][15]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[1][2][3][5][6][7][9][10][11][13][14][15]||REGREGKEY.relation = min(100,REGREGKEY.relation+TEMP1)||||||
|[1][2][3]|RESULT<=2|REGREGKEY.dipRel = REGREGKEY.dipRel + TEMP2||||A (critical) success will increase the communication level.||
|[5][6][7]|RESULT<=2|REGREGKEY.dipTrade = REGREGKEY.dipTrade + TEMP2||||A (critical) success will increase the trade level.||
|[9][10][11]|RESULT<=2|REGREGKEY.dipRes = REGREGKEY.dipRes + TEMP2||||A (critical) success will increase the research cooperation level.||
|[13][14][15]|RESULT<=2|REGREGKEY.dipPact = REGREGKEY.dipPact  + TEMP2||||A (critical) success will increase the military pact level.||
|[4][8][12][16]||REGREGKEY.relation = max(0,REGREGKEY.relation-10)|Relation decreased with -10 points.|1|1|Will decrease your relation with -10 points.||
|[1][2][3][5][6][7][9][10][11][13][14][15][4][8][12][16]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]||REVREGREGKEY.dipRel=REGREGKEY.dipRel||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]||REVREGREGKEY.dipTrade=REGREGKEY.dipTrade||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]||REVREGREGKEY.dipRes=REGREGKEY.dipRes||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]||REVREGREGKEY.dipPact=REGREGKEY.dipPact||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]|TEMP1>0|TEMP3=(TEMP1/2)||||||
|[1][2][3][5][6][7][9][10][11][13][14][15]|TEMP1>0|REGKEY.mind=REGKEY.mind+inv(REGKEY.mind,TEMP3)||||If (critical) success your mind profile will go up by 1/2 your relation gain.||
|[13][14][15]|TEMP1>0|REGKEY.heart=REGKEY.heart+inv(REGKEY.heart,TEMP3)||||If (critical) success your rallying flag profile will go up by 1/2 your relation gain.||
|[13][14][15]|TEMP1>0|REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100)||||If (critical) success your fist profile will go down by 1/2 your relation gain.||
|[4][8][12][16]||TEMP3=abs(TEMP1/2)||||||
|[4][8][12][16]||REGKEY.fist=REGKEY.fist+inv(REGKEY.fist,TEMP3)||||Your fist profile will go up by 1/2 your relation loss.||
|[4]||REGREGKEY.dipRel = REGREGKEY.dipRel - 1||||You will lose a communication level.||
|[4]||REVREGREGKEY.dipRel=REGREGKEY.dipRel||||||
|[4]|||We reduced our diplomatic ties with <TARGETREGIMENAME>. They did not like our unilateral decision.|1|2|||
|[8]||REGREGKEY.dipTrade = REGREGKEY.dipTrade- 1||||You will lose a trade level.||
|[8]||REVREGREGKEY.dipTrade=REGREGKEY.dipTrade||||||
|[8]|||We reduced our trade cooperation with <TARGETREGIMENAME>. They did not like our unilateral decision.|1|2|||
|[12]||REGREGKEY.dipRes = REGREGKEY.dipRes - 1||||You will lose a research cooperation level.||
|[12]||REVREGREGKEY.dipRes=REGREGKEY.dipRes||||||
|[12]|||We reduced our scientific cooperation with <TARGETREGIMENAME>. They did not like our unilateral decision.|1|2|||
|[16]||REGREGKEY.dipPact = REGREGKEY.dipPact - 1||||You will lose a military pact level.||
|[16]||REVREGREGKEY.dipPact=REGREGKEY.dipPact||||||
|[16]|||We reduced our strategic pact with <TARGETREGIMENAME>. They did not like our unilateral decision.|1|2|||
|[25]||DIFF=125||||Difficulty will be 125.||
|[25]|SOURCEAI==1|DIFF=DIFF/2||||||
|[25]||ROLL=che(249,1,CHARID,9)||||An intimidate skill roll will be made by <CHARNAME>.||
|[25]|ROLL>=DIFF|RESULT=2; TEMP1=-10;||||A success will result in -10 relation.||
|[25]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=-20;||||A critical success (roll 50 above difficulty) will result in -20 relation.||
|[25]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[25]|ROLL<(DIFF-50)|RESULT=4; TEMP1=10;||||A critical failure (roll 50 below difficulty) will result in +10 relation.||
|[25]|RESULT==2||Success! <TARGETREGIMENAME> was offended by our provocation.|1|1||<REGIMENAME> has managed to provoke you. Relation -10.|
|[25]|RESULT==3||Failure! <TARGETREGIMENAME> seemed to have ignored our provocation.|1|1||<REGIMENAME> has tried to provoke you, but failed.|
|[25]|RESULT==1||Critical Success! <TARGETREGIMENAME> was extremely offended by our provocation.|1|1||<REGIMENAME> has managed to provoke you. Their efforts were a critical succes. Relation -20.|
|[25]|RESULT==4||Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our provocation as a positive message of cooperation.|1|1||<REGIMENAME> has tried to provoke you, but failed. But managed to accomplish the reverse. +10 relation.|
|[25]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[25]||REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[25]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[25]|TEMP1<0|TEMP3=abs(TEMP1/2)||||||
|[25]|TEMP1<0|REGKEY.fist=REGKEY.fist+inv(REGKEY.fist,TEMP3)||||Your fist profile will go up by 1/2 your relation loss.||
|[26]||DIFF=125+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*3)||||Difficulty is 125. Modified by the difference between your relation and the AIs intention.||
|[26]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind;||||Difficulty is further modified by + your fist profile and - your mind profile.||
|[26]|SOURCEAI==1|DIFF=DIFF/2||||||
|[26]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[26]|ROLL>=DIFF|RESULT=2; TEMP1=10; TEMP2=1;||||A success will result in peace and +10 relation.||
|[26]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=20; TEMP2=1;||||A critical success (roll 50 above difficulty) will result in peace and +20 relation.||
|[26]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=1;||||A failure will result in no change in relation.||
|[26]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; TEMP2=1;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[26]|RESULT==2|exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1)|Success! <TARGETREGIMENAME> accepted peace.|1|1|||
|[26]|RESULT==3||Failure! <TARGETREGIMENAME> refused our off of peace.|1|1|||
|[26]|RESULT==1|exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1)|Critical Success! <TARGETREGIMENAME> was very happy and accepted peace.|1|1|||
|[26]|RESULT==4||Critical Failure! <TARGETREGIMENAME> reacted furiously and angry. Peace was not even on the table.|1|1|||
|[26]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[26]|RESULT<=2|REGREGKEY.relation = max(35,REGREGKEY.relation+TEMP1)||||If (critical) success relation will at least rise to 35.||
|[26]|RESULT>=4|REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[26]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[26]|TEMP1>0|TEMP3=(TEMP1/2)||||||
|[26]|TEMP1>0|REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100)||||Your Fist profile will go down by 1/2 your relation gain.||
|[26]||REGREGKEY.lastLookForPeace=100||||||
|[27][49]||exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT)|<TARGETREGIMENAME> and us are now at war!|1|1|You will be at war.|<REGIMENAME> declared war on you!|
|[27][49]||REGREGKEY.relation = max(0,min(30,REGREGKEY.relation-20))||||Relation will drop with 20, and will at minimum drop to 30.||
|[27][49]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[27][49]||REVREGREGKEY.dipTrade=0; REVREGREGKEY.dipRes=0; REVREGREGKEY.dipPact=0; REVREGREGKEY.dipRel=0||||All your deals and pacts will be cancelled and diplomatic contact will be broken.||
|[27][49]||REGREGKEY.dipTrade=0; REGREGKEY.dipRes=0; REGREGKEY.dipPact=0; REGREGKEY.dipRel=0||||||
|[27][49]||TEMP3=10||||||
|[27][49]||REGKEY.fist=REGKEY.fist||||You fist profile will go up with on average 10%, but depends on relation level.||
|[33]||DIFF=10+(100-REVREGREGKEY.aiIntention)+(100-REVREGREGKEY.aiIntention)||||Difficulty is a formula based on the difference between your relation and the AIs intention.||
|[33]||DIFF=DIFF*STORYiMOD.5; DIFF=DIFF/100;||||||
|[33]|SOURCEAI==1|DIFF=DIFF/2||||||
|[33]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[33]|ROLL>=DIFF|RESULT=2; TEMP1=dth(2,10);||||A success will result in +2d10 relation.||
|[33]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=dth(4,10);||||A critical success (roll 50 above difficulty) will result in +4d10 relation.||
|[33]|ROLL<DIFF|RESULT=3; TEMP1=0; REGREGKEY.aiNegativeDip = 30;||||A failure will result in no change in relation.||
|[33]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; REGREGKEY.aiNegativeDip = 60;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[33]|RESULT==2||Success! <TARGETREGIMENAME> was open to our overture and tells us they might be interested in peace as well.|1|1|||
|[33]|RESULT==3||Failure! <TARGETREGIMENAME> told us they will think about it, but their looks where gloomy.|1|1|||
|[33]|RESULT==1||Critical Success! <TARGETREGIMENAME> responded enthusiastically to our overture. Might peace become an option soon?|1|1|||
|[33]|RESULT==4||Critical Failure! <TARGETREGIMENAME> has taken offense to our attempts to discuss ending the war.|1|1|||
|[33]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[33]||REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[33]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[33]||REGREGKEY.lastLookForPeace=100||||||
|[28]||DIFF=125+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2)||||Difficulty is 125. Modified by the difference between your relation and the AIs intention.||
|[28]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[28]|ROLL>=DIFF|RESULT=2; TEMP1=dth(1,6);||||A success will result in +1d6 relation.||
|[28]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=dth(2,6);||||A critical success (roll 50 above difficulty) will result in +2d6 relation.||
|[28]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[28]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[28]|RESULT==2||Success! <TARGETREGIMENAME> was pleased to receive our gift.|1|1|||
|[28]|RESULT==3||Failure! <TARGETREGIMENAME> refused to accept the gift.|1|1|||
|[28]|RESULT==1||Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift.|1|1|||
|[28]|RESULT==4||Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger.|1|1|||
|[28]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[28]||REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[28]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[28]|RESULT<=2|REGKEY.credits = REGKEY.credits - 400||||||
|[29]|RESULT==4|REGKEY.credits = REGKEY.credits - 400||||||
|[29]||DIFF=100+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2)||||Difficulty is 100. Modified by the difference between your relation and the AIs intention.||
|[29]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[29]|ROLL>=DIFF|RESULT=2; TEMP1=dth(2,6);||||A success will result in +2d6 relation.||
|[29]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=dth(4,6);||||A critical success (roll 50 above difficulty) will result in +4d6 relation.||
|[29]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[29]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[29]|RESULT==2||Success! <TARGETREGIMENAME> was pleased to receive our gift.|1|1|||
|[29]|RESULT==3||Failure! <TARGETREGIMENAME> refused to accept the gift.|1|1|||
|[29]|RESULT==1||Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift.|1|1|||
|[29]|RESULT==4||Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger.|1|1|||
|[29]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[29]||REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[29]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[29]|RESULT<=2|REGKEY.credits = REGKEY.credits - 1000||||||
|[29]|RESULT==4|REGKEY.credits = REGKEY.credits - 1000||||||
|[30]||DIFF=75+((REGREGKEY.relation-REVREGREGKEY.aiIntention)*2)||||Difficulty is 75. Modified by the difference between your relation and the AIs intention.||
|[30]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[30]|ROLL>=DIFF|RESULT=2; TEMP1=dth(4,6);||||A success will result in +4d6 relation.||
|[30]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=dth(8,6);||||A critical success (roll 50 above difficulty) will result in +8d6 relation.||
|[30]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[30]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[30]|RESULT==2||Success! <TARGETREGIMENAME> was pleased to receive our gift.|1|1|||
|[30]|RESULT==3||Failure! <TARGETREGIMENAME> refused to accept the gift.|1|1|||
|[30]|RESULT==1||Critical Success! <TARGETREGIMENAME> was very pleased and happy to receive our gift.|1|1|||
|[30]|RESULT==4||Critical Failure! <TARGETREGIMENAME> seemed to have misunderstood our gift as an insult. They kept the credits and sent back the head of our messenger.|1|1|||
|[30]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[30]||REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[30]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[30]|RESULT<=2|REGKEY.credits = REGKEY.credits - 2500||||||
|[30]|RESULT==4|REGKEY.credits = REGKEY.credits - 2500||||||
|[28][29][30]||REGREGKEY.giftLastRound=ROUND; REGREGKEY.giftCounter=REGREGKEY.giftCounter+20;||||||
|[101]||exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT)|<TARGETREGIMENAME> and us are now at war!|1|1|You will be at war.||
|[101]||REGREGKEY.relation = max(0,min(30,REGREGKEY.relation-20))||||You will lose 20 relation points and at least drop to relation 30.||
|[101]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[102]||DIFF=100-REGREGKEY.relation||||Base difficulty is 100 minus relation.||
|[102]|TARGETCULTUREKEY.agression>0|DIFF=DIFF+(TARGETCULTUREKEY.agression*3)||||Difficulty is modified for aggression and other factors.||
|[102]|TARGETCULTUREKEY.militiapercentage>0|DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage)||||Difficulty is modified for ideal militia size||
|[102]|TARGETCULTUREKEY.tradition>0|DIFF=DIFF+TARGETCULTUREKEY.tradition||||Difficulty is modified for tradition||
|[102]|REVREGREGKEY.aiHatred>0|DIFF=DIFF+(REVREGREGKEY.aiHatred*3)||||||
|[102]|SOURCEAI==1|DIFF=DIFF/2||||||
|[102]|TARGETCULTUREKEY.nodip>0|DIFF=DIFF+900||||||
|[102]|TARGETLANDBORDER<1|DIFF=DIFF+50||||||
|[102]||ROLL=che(249,1,CHARID,2)||||A diplomacy skill roll will be made by <CHARNAME>.||
|[102]|ROLL>=DIFF|RESULT=2; TEMP1=10; TEMP2=1;||||A success will result in becoming protector and +10 relation.||
|[102]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=20; TEMP2=1;||||A critical success (roll 50 above difficulty) will result in becoming protector and +20 relation.||
|[102]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=1;||||A failure will result in no change in relation.||
|[102]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; TEMP2=1;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[102]|RESULT==2|TARGETREGKEY.protector = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT);|Success! <TARGETREGIMENAME> accepted our protection.|1|1|||
|[102]|RESULT==3||Failure! <TARGETREGIMENAME> refused our protection.|1|1|||
|[102]|RESULT==1|TARGETREGKEY.protector = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT);|Critical Success! <TARGETREGIMENAME> was very happy and accepted our protection with a big ceremony.|1|1|||
|[102]|RESULT==4||Critical Failure! <TARGETREGIMENAME> reacted furiously and angry and our offer was seen as an cover aggression.|1|1|||
|[102]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[102]||REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1))||||||
|[102]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[103]||DIFF=125-REGREGKEY.relation||||Base difficulty is 125 minus relation.||
|[103]|TARGETCULTUREKEY.agression>0|DIFF=DIFF+(TARGETCULTUREKEY.agression*3)||||Difficulty is modified for aggression and other factors.||
|[103]|TARGETCULTUREKEY.militiapercentage>0|DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage *2)||||Difficulty is modified for ideal militia size||
|[103]|TARGETCULTUREKEY.tradition>0|DIFF=DIFF+TARGETCULTUREKEY.tradition||||Difficulty is modified for tradition||
|[103]|REVREGREGKEY.aiHatred>0|DIFF=DIFF+(REVREGREGKEY.aiHatred*3)||||||
|[103]|SOURCEAI==1|DIFF=DIFF/2||||||
|[103]|TARGETCULTUREKEY.nodip>0|DIFF=DIFF+900||||||
|[103]|TARGETLANDBORDER<1|DIFF=DIFF+50||||||
|[103]||ROLL=che(249,1,CHARID,2)||||A diplomacy skill roll will be made by <CHARNAME>.||
|[103]|ROLL>=DIFF|RESULT=2; TEMP1=10; TEMP2=1;||||A success will result in them accepting to become a client state and +10 relation.||
|[103]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=20; TEMP2=1;||||A critical success (roll 50 above difficulty) will result in them accepting to become a client state and +20 relation.||
|[103]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=1;||||A failure will result in no change in relation.||
|[103]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; TEMP2=1;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[103]|RESULT==2|TARGETREGKEY.master = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT);|Success! <TARGETREGIMENAME> accepted to become a client state.|1|1|||
|[103]|RESULT==3||Failure! <TARGETREGIMENAME> refused our protection.|1|1|||
|[103]|RESULT==1|TARGETREGKEY.master = REGID; exe(346,22,SOURCEREGIMESLOT,TARGETREGIMESLOT);|Critical Success! <TARGETREGIMENAME> was very happy and accepted to become a client state with a big ceremony.|1|1|||
|[103]|RESULT==4||Critical Failure! <TARGETREGIMENAME> reacted furiously and angry and our offer was seen as a covert fist.|1|1|||
|[103]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[103]||REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1))||||||
|[103]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[105][106]|TARGETREGKEY.master==REGID|DIFF=dth(2,100)||||Difficulty is 2d100 if Client||
|[105][106]|TARGETREGKEY.master!=REGID|DIFF=dth(3,100)||||Difficulty is 3d100 if Protectorate||
|[105][106]|TARGETLANDBORDER<1|DIFF=DIFF+50||||||
|[105]||DIFF=DIFF-50||||Difficulty of Unification is 50 less than difficulty of Annexation.||
|[105][106]|TARGETCULTUREKEY.agression>0|DIFF=DIFF+(TARGETCULTUREKEY.agression*3)||||||
|[105][106]||DIFF=DIFF+(TARGETCULTUREKEY.tradition*2)||||Difficulty increased with Tradition * 2||
|[105][106]||DIFF=DIFF-REGREGKEY.relation||||Difficulty decreased with Relation score||
|[105][106]|SOURCEAI==1|DIFF=DIFF/2||||||
|[105]||ROLL=che(249,1,CHARID,6)||||An Oratory Skill roll will be made by <CHARNAME>.||
|[106]||ROLL=che(249,1,CHARID,9)||||An Intimidate Skill roll will be made by <CHARNAME>.||
|[105]|ROLL>=DIFF|exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT)|Success! <TARGETREGIMENAME> accepted to join us.|1|1|A succes means the Regime will join you.||
|[105]|ROLL<DIFF||Failure! <TARGETREGIMENAME> refused our proposal. But we are still on good terms.|1|1|A failure will have no effect.||
|[105]|ROLL<DIFF; SOURCEAI==1;|REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+15)); REVREGREGKEY.relation=REGREGKEY.relation;||||||
|[106]|ROLL>=DIFF|exe(346,47,SOURCEREGIMESLOT,TARGETREGIMESLOT)|Success! <TARGETREGIMENAME> accepted to join us.|1|1|A succes means the Regime will join you.||
|[106]|ROLL<DIFF|TARGETREGKEY.master=0;TARGETREGKEY.protector=0; exe(346,2,SOURCEREGIMESLOT,TARGETREGIMESLOT);|Failure! <TARGETREGIMENAME> was angry with our pressure and chooses war!|1|1|A failure will put you on a war footing.||
|[107][108]||ROLL=che(249,1,CHARID,41)+(max(0,REGREGKEY.language)*30);||||An Ecology Skill roll will be made. +30 for each language level you have on the alien language.||
|[108]||DIFF=TARGETCULTUREKEY.aggression+35-REGREGKEY.relation;|Difficulty was <DIFF>. Rolled <ROLL>.|1|1|||
|[107]||DIFF=TARGETCULTUREKEY.aggression+85-REGREGKEY.relation;|Difficulty was <DIFF>. Rolled <ROLL>.|1|1|||
|[107][108]|ROLL>=DIFF|REGREGKEY.alienMeeting=ROUND+1;|Success! <TARGETREGIMENAME> accepted to talk to us. Expect the meeting to take place next round.|1|2|A succes will lead to a meeting being organized the next round.||
|[107][108]|ROLL<DIFF|REGREGKEY.alienMeeting=0;|Failure! <TARGETREGIMENAME> refused or did not understand our proposal.|1|2|||
|[201]||DIFF=120-REGREGKEY.relation||||Difficulty is 120 minus your relation level.||
|[201]||TEMP2=1||||||
|[202]||DIFF=140-REGREGKEY.relation||||Difficulty is 140 minus your relation level.||
|[202]||TEMP2=3||||||
|[203]||DIFF=160-REGREGKEY.relation||||Difficulty is 160 minus your relation level.||
|[203]||TEMP2=6||||||
|[201][202][203]|TARGETMAJOR!=1|DIFF=DIFF/2;||||Difficulty is halved against Minor Zones.||
|[201][202][203]||ROLL=che(249,1,CHARID,40)||||A covert ops skill roll will be made by <CHARNAME>.||
|[201][202][203]|ROLL>=DIFF|RESULT=2; TEMP1=0;||||A success will result in infiltrating your spy.||
|[201][202][203]|ROLL>=(DIFF+50)|RESULT=1; TEMP2=TEMP2*2;  TEMP1=0;||||A critical success (roll 50 above difficulty) will result in infiltrating double the number of spies.||
|[201][202][203]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[201][202][203]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[201][202][203]|RESULT==2||Success! We managed to infiltrate our spies into <ZONENAME>.|1|1|||
|[201][202][203]|RESULT==3||Failure! We did not infiltrate our spies into <ZONENAME>. Luckily we escaped detection of our covert operations.|1|1|||
|[201][202][203]|RESULT==1||Critical Success! We managed to infiltrate double the number of spies initially planned into <ZONENAME>.|1|1|||
|[201][202][203]|RESULT==4||Critical Failure! Our infiltration attempt was discovered by <TARGETREGIMENAME> and they took insult with our attempt to spy on them.|1|1|||
|[201][202][203]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[201][202][203]||REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1))||||||
|[201][202][203]|RESULT<=2|REGZONEKEY.spies = REGZONEKEY.spies + TEMP2||||||
|[4]||REVREGREGKEY.closeContact=REGIMEID||||||
|[8]||REVREGREGKEY.closeTrade=REGIMEID||||||
|[12]||REVREGREGKEY.closeRes=REGIMEID||||||
|[16]||REVREGREGKEY.closePact=REGIMEID||||||
|[701][702][703]||DIFF=(ZONEKEY.popLoyalty/2)||||Difficulty is target regime popularity + target zone loyalty/2 + target regimes inverse democracy profile||
|[701][702][703]||DIFF=DIFF+TARGETREGIMEKEY.popularity||||||
|[701][702][703]||DIFF=DIFF+(100-TARGETREGIMEKEY.democracy)||||||
|[701]||DIFF=DIFF+50||||||
|[702]||DIFF=DIFF+25||||||
|[703]||DIFF=DIFF+0||||||
|[701][702][703]||ROLL=che(249,1,CHARID,40)||||A covert ops skill roll will be made by <CHARNAME>.||
|[701][702][703]||ROLL=ROLL+REGIMEKEY.meritocracy|Roll gets +<REGIMEKEY.meritocracy> for Meritocracy.|||The roll will be increased with your meritocracy profile score.||
|[701]|ROLL>=DIFF|RESULT=2; TEMP1=1; TEMP2=0; TEMP3=0;||||A success will result in recruiting 1d3 % of population of zone. And equal happiness drop.||
|[701]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=2; TEMP2=0; TEMP3=0;||||A critical success will result in recruiting 2d3% of population of zone. And equal happiness drop.||
|[701]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=2; TEMP3=1;||||A failure will result in 2d10% loss of relation and 1d10% increase of hatred.||
|[701]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=4; TEMP3=2;||||A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[702]|ROLL>=DIFF|RESULT=2; TEMP1=3; TEMP2=0; TEMP3=0;||||A success will result in recruiting 3d3 % of population of zone. And equal happiness drop.||
|[702]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=4; TEMP2=0; TEMP3=0;||||A critical success will result in recruiting 4d3% of population of zone. And equal happiness drop.||
|[702]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=4; TEMP3=2;||||A failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[702]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=8; TEMP3=4;||||A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[703]|ROLL>=DIFF|RESULT=2; TEMP1=5; TEMP2=0; TEMP3=0;||||A success will result in recruiting 5d3 % of population of zone. And equal happiness drop.||
|[703]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=6; TEMP2=0; TEMP3=0;||||A critical success will result in recruiting 6d3% of population of zone. And equal happiness drop.||
|[703]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=8; TEMP3=4;||||A failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[703]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=16; TEMP3=8;||||A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred.||
|[701][702][703]||TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0;||||||
|[701][702][703]|RESULT==2|TEMP1=dth(TEMP1,3); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP5=inv(ZONEKEY.popHapiness,TEMP1);|Success! Ambitious people from <ZONENAME> where lured into leaving for greener pastures.|1|0|||
|[701][702][703]|RESULT==3|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Failure! Our operatives where discovered.|1|0|||
|[701][702][703]|RESULT==1|TEMP1=dth(TEMP1,3); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP5=inv(ZONEKEY.popHapiness,TEMP1);|Critical Success! Ambitious people from <ZONENAME> where lured into leaving for greener pastures.|1|0|||
|[701][702][703]|RESULT==4|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Crtitical Failure! Our operatives where discovered straight in the act!|1|0|||
|[701][702][703]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|0|||
|[701][702][703]|TEMP6>0|REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6)|Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points.|1|0|||
|[701][702][703]|TEMP6>0|REVREGREGKEY.relation=REGREGKEY.relation||||||
|[701][702][703]|TEMP7>0|REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7)|Hatred of <TARGETREGIMENAME> increased with <TEMP7> points.|1|0|||
|[701]|TEMP4>40|TEMP4=40||||Maximum population loss is 4000.||
|[702]|TEMP4>100|TEMP4=100||||Maximum population loss is 10000.||
|[703]|TEMP4>200|TEMP4=200||||Maximum population loss in 20000.||
|[701][702][703]|TEMP4>0|ZONEKEY.pop=ZONEKEY.pop-TEMP4; ZONE.freefolk=ZONEKEY.freefolk+TEMP4;|<ZONENAME> lost <TEMP4>00 population|1|0|||
|[701][702][703]|TEMP5>0|ZONEKEY.popHapiness=ZONEKEY.popHapiness-TEMP5; ZONEKEY.popHapiness=max(0,ZONEKEY.popHapiness);|<ZONENAME> lost <TEMP5> happiness points.|1|0|||
|[701][702][703]|RESULT==2||||||An unknown foreign power agitated the most ambitious of our population in <ZONENAME>.|
|[701][702][703]|RESULT==3||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate the most ambitious of our population in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[701][702][703]|RESULT==1||||||An unknown foreign power agitated the most ambitious of our population in <ZONENAME>.|
|[701][702][703]|RESULT==4||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate the most ambitious of our population in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[701][702][703]|TEMP6>0||||||Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points.|
|[701][702][703]|TEMP4>0||||||<ZONENAME> lost <TEMP4>00 population|
|[701][702][703]|TEMP5>0||||||<ZONENAME> lost <TEMP5> happiness points.|
|[704][705][706]||DIFF=(ZONEKEY.popLoyalty/2)||||Difficulty is target regime popularity + target zone loyalty/2 + target regimes inverse autocracy profile||
|[704][705][706]||DIFF=DIFF+TARGETREGIMEKEY.popularity||||||
|[704][705][706]||DIFF=DIFF+(100-TARGETREGIMEKEY.autocracy)||||||
|[704]||DIFF=DIFF+50||||||
|[705]||DIFF=DIFF+25||||||
|[706]||DIFF=DIFF+0||||||
|[704][705][706]||ROLL=che(249,1,CHARID,40)||||A covert ops skill roll will be made by <CHARNAME>.||
|[704][705][706]||ROLL=ROLL+REGIMEKEY.democracy|Roll gets +<REGIMEKEY.democracy> for Democracy.|||The roll will be increased with your democracy profile score.||
|[704]|ROLL>=DIFF|RESULT=2; TEMP1=1; TEMP2=0; TEMP3=0; TEMP8=1;||||A success will result in 1d4 % of population of zone rebelling. And unrest.||
|[704]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=2; TEMP2=0; TEMP3=0; TEMP8=2;||||A critical success will result in 2d4 % of population of zone rebelling. And unrest.||
|[704]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=2; TEMP3=1; TEMP8=0;||||A failure will result in 2d10% loss of relation and 1d10% increase of hatred.||
|[704]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=4; TEMP3=2;  TEMP8=0;||||A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[705]|ROLL>=DIFF|RESULT=2; TEMP1=3; TEMP2=0; TEMP3=0; TEMP8=3;||||A success will result in 3d4 % of population of zone rebelling. And unrest.||
|[705]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=4; TEMP2=0; TEMP3=0; TEMP8=4;||||A critical success will result in 4d4 % of population of zone rebelling. And unrest.||
|[705]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=4; TEMP3=2;  TEMP8=0;||||A failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[705]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=8; TEMP3=4;  TEMP8=0;||||A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[706]|ROLL>=DIFF|RESULT=2; TEMP1=5; TEMP2=0; TEMP3=0; TEMP8=5;||||A success will result in 5d6 % of population of zone rebelling. And unrest.||
|[706]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=6; TEMP2=0; TEMP3=0; TEMP8=6;||||A critical success will result in 6d6 % of population of zone rebelling. And unrest.||
|[706]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=8; TEMP3=4;  TEMP8=0;||||A failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[706]|ROLL<(DIFF-50)|RESULT=4; TEMP1=0; TEMP2=16; TEMP3=8;  TEMP8=0;||||A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred.||
|[704][705][706]||TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0;||||||
|[704][705][706]|RESULT==2|TEMP1=dth(TEMP1,4); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP8=dth(TEMP8,6); TEMP5=inv(ZONEKEY.unrest,TEMP8);|Success! Unsatisfied people from <ZONENAME> where lured into joining the rebels.|1|0|||
|[704][705][706]|RESULT==3|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Failure! Our operatives where discovered.|1|0|||
|[704][705][706]|RESULT==1|TEMP1=dth(TEMP1,4); TEMP4=(ZONEKEY.pop*TEMP1)/100; TEMP8=dth(TEMP8,6); TEMP5=inv(ZONEKEY.unrest,TEMP8);|Critical Success! Unsatisfied people from <ZONENAME> where lured into joining the rebels.|1|0|||
|[704][705][706]|RESULT==4|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Crtitical Failure! Our operatives where discovered straight in the act!|1|0|||
|[704][705][706]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|0|||
|[704][705][706]|TEMP6>0|REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6)|Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points.|1|0|||
|[704][705][706]|TEMP6>0|REVREGREGKEY.relation=REGREGKEY.relation||||||
|[704][705][706]|TEMP7>0|REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7)|Hatred of <TARGETREGIMENAME> increased with <TEMP7> points.|1|0|||
|[704]|TEMP4>40|TEMP4=40||||Can lead to maximum 4000 Rebels.||
|[705]|TEMP4>120|TEMP4=120||||Can lead to maximum 12000 Rebels.||
|[706]|TEMP4>200|TEMP4=200||||Can lead to maximum 20000 Rebels.||
|[704][705][706]|TEMP4>0|ZONEKEY.pop=ZONEKEY.pop-TEMP4; ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP4;|<ZONENAME> had <TEMP4>00 population deciding to join rebel forces.|1|0|||
|[704][705][706]|TEMP5>0|ZONEKEY.unrest = ZONEKEY.unrest + TEMP5; ZONE.unrest=min(ZONE.unrest,100);|<ZONENAME> saw unrest increase with <TEMP5> points.|1|0|||
|[704][705][706]|RESULT==2||||||An unknown foreign power agitated people into rebellion in <ZONENAME>.|
|[704][705][706]|RESULT==3||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate people into rebellion in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[704][705][706]|RESULT==1||||||An unknown foreign power agitated people into rebellion in <ZONENAME>.|
|[704][705][706]|RESULT==4||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate people into rebellion in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[704][705][706]|TEMP6>0||||||Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points.|
|[704][705][706]|TEMP4>0||||||<ZONENAME> lost <TEMP4>00 population and they joined rebel forces.|
|[704][705][706]|TEMP5>0||||||<ZONENAME> gained <TEMP5> unrest points.|
|[707][708][709]||DIFF=(TARGERREGIMEKEY.popularity/2)||||Difficulty is target regime popularity/2 + target regime soldier morale + target regimes inverse meritocracy profile||
|[707][708][709]||DIFF=DIFF+TARGETREGIMEKEY.soldiersmorale||||||
|[707][708][709]||DIFF=DIFF+(100-TARGETREGIMEKEY.autocracy)||||||
|[707]||DIFF=DIFF+50||||||
|[708]||DIFF=DIFF+25||||||
|[709]||DIFF=DIFF+0||||||
|[707][708][709]||ROLL=che(249,1,CHARID,40)||||A covert ops skill roll will be made by <CHARNAME>.||
|[707][708][709]||ROLL=ROLL+REGIMEKEY.autocracy|Roll gets +<REGIMEKEY.autocracy> for Autocracy.|||The roll will be increased with your autocracy profile score.||
|[707]|ROLL>=DIFF|RESULT=2; TEMP11=1; TEMP2=0; TEMP3=0; TEMP8=1;||||A success will result in 1d4 % of soldiers of zone rebelling. And a morale drop.||
|[707]|ROLL>=(DIFF+50)|RESULT=1; TEMP11=2; TEMP2=0; TEMP3=0; TEMP8=2;||||A critical success will result in 2d4 % of soldiers of zone rebelling. And morale drop.||
|[707]|ROLL<DIFF|RESULT=3; TEMP11=0; TEMP2=2; TEMP3=1; TEMP8=0;||||A failure will result in 2d10% loss of relation and 1d10% increase of hatred.||
|[707]|ROLL<(DIFF-50)|RESULT=4; TEMP11=0; TEMP2=4; TEMP3=2;  TEMP8=0;||||A critical failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[708]|ROLL>=DIFF|RESULT=2; TEMP11=2; TEMP2=0; TEMP3=0; TEMP8=3;||||A success will result in 2d4 % of soldiers of zone rebelling. And a morale drop.||
|[708]|ROLL>=(DIFF+50)|RESULT=1; TEMP11=4; TEMP2=0; TEMP3=0; TEMP8=4;||||A critical success will result in 3d4 % of soldiers of zone rebelling. And morale drop.||
|[708]|ROLL<DIFF|RESULT=3; TEMP11=0; TEMP2=4; TEMP3=2;  TEMP8=0;||||A failure will result in 4d10% loss of relation and 2d10% increase of hatred.||
|[708]|ROLL<(DIFF-50)|RESULT=4; TEMP11=0; TEMP2=8; TEMP3=4;  TEMP8=0;||||A critical failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[709]|ROLL>=DIFF|RESULT=2; TEMP11=4; TEMP2=0; TEMP3=0; TEMP8=5;||||A success will result in 4d4 % of soldiers of zone rebelling. And a morale drop.||
|[709]|ROLL>=(DIFF+50)|RESULT=1; TEMP11=8; TEMP2=0; TEMP3=0; TEMP8=6;||||A critical success will result in 5d4 % of soldiers of zone rebelling. And morale drop.||
|[709]|ROLL<DIFF|RESULT=3; TEMP11=0; TEMP2=8; TEMP3=4;  TEMP8=0;||||A failure will result in 8d10% loss of relation and 4d10% increase of hatred.||
|[709]|ROLL<(DIFF-50)|RESULT=4; TEMP11=0; TEMP2=16; TEMP3=8;  TEMP8=0;||||A critical failure will result in 16d10% loss of relation and 8d10% increase of hatred.||
|[707][708][709]||TEMP4=0; TEMP5=0; TEMP6=0;TEMP7=0; TEMP9=chk(249,4,ZONEID,TARGETREGIMEID,0);||||||
|[707][708][709]|RESULT==2|TEMP4=dth(TEMP8,6);  TEMP1=dth(TEMP11,4); TEMP5=(TEMP1*TEMP9)/100;|Success! Soldiers from <ZONENAME> convinced to take power and rebel.|1|0|||
|[707][708][709]|RESULT==3|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Failure! Our operatives where discovered.|1|0|||
|[707][708][709]|RESULT==1|TEMP4=dth(TEMP8,6);  TEMP1=dth(TEMP11,4); TEMP5=(TEMP1*TEMP9)/100;|Critical Success! Soldiers from <ZONENAME> convinced to take power and rebel.|1|0|||
|[707][708][709]|RESULT==4|TEMP2=dth(TEMP2,10); TEMP3=dth(TEMP3,10); TEMP6=(REGREGKEY.relation*TEMP2)/100; TEMP7=inv(REVREGREGKEY.hatred,TEMP3);|Crtitical Failure! Our operatives where discovered straight in the act!|1|0|||
|[707][708][709]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|0|||
|[707][708][709]|TEMP6>0|REGREGKEY.relation = max(0,REGREGKEY.relation -TEMP6)|Your relation with <TARGETREGIMENAME> decreased with <TEMP6> points.|1|0|||
|[707][708][709]|TEMP6>0|REVREGREGKEY.relation=REGREGKEY.relation||||||
|[707][708][709]|TEMP7>0|REVREGREGKEY.hatred = min(100,REVREGREGKEY.hatred + TEMP7)|Hatred of <TARGETREGIMENAME> increased with <TEMP7> points.|1|0|||
|[707]|TEMP5>20|TEMP5=20||||Can lead to maximum 2000 deserters.||
|[708]|TEMP5>60|TEMP5=60||||Can lead to maximum 6000 deserters.||
|[709]|TEMP5>160|TEMP5=120||||Can lead to maximum 12000 deserters.||
|[707][708][709]|TEMP5>0|exe(346,7,ZONEID,TARGETREGIMEID,TEMP5); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower+TEMP5;|<ZONENAME> had <TEMP5>00 soldier deciding to mutiny and join rebel forces.|1|0|||
|[707][708][709]|TEMP4<0|exe(346,9,ZONEID,TARGETREGIMEID,TEMP4);|<ZONENAME> saw morale of troops in zone reduced with <TEMP4>%.|1|0|||
|[707][708][709]|RESULT==2||||||An unknown foreign power agitated soldiers into mutiny and rebellion in <ZONENAME>.|
|[707][708][709]|RESULT==3||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate soldiers into mutiny and rebellion in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[707][708][709]|RESULT==1||||||An unknown foreign power agitated soldiers into mutiny and rebellion in <ZONENAME>.|
|[707][708][709]|RESULT==4||||||<SOURCEREGIMENAME> tried to use covert operativers to agitate soldiers into mutiny and rebellion in <ZONENAME>.  However we discovered them and thwarted their plans.|
|[707][708][709]|TEMP6>0||||||Our relation with <SOURCEREGIMENAME> decreased with <TEMP6> points.|
|[707][708][709]|TEMP5>0||||||<ZONENAME> lost <TEMP5>00 soldiers as they joined rebel forces.|
|[707][708][709]|TEMP4<0||||||<ZONENAME> military units lost <TEMP4>% morale|
|[104]||DIFF=150-(2*REGREGKEY.relation)||||Difficulty is 150 minus 2* your current relation with target regime. Minimum base difficulty is 50.||
|[104]||DIFF=max(50,DIFF)||||||
|[104]|TARGETCULTUREKEY.agression>0|DIFF=DIFF+(TARGETCULTUREKEY.agression*2)||||Difficulty is modified for aggression and other factors.||
|[104]|TARGETCULTUREKEY.militiapercentage>0|DIFF=DIFF+(TARGETCULTUREKEY.militiapercentage)||||||
|[104]||DIFF=DIFF + REGKEY.fist; DIFF=DIFF - REGKEY.mind;||||Difficulty is further modified by + your fist profile and - your mind profile.||
|[104]|TARGETLANDBORDER<1|DIFF=DIFF+50||||||
|[104]|TARGETCULTUREKEY.nodip>0|DIFF=DIFF + 900||||||
|[104]|REVREGREGKEY.aiHatred>0|DIFF=DIFF+(REVREGREGKEY.aiHatred*3)||||||
|[104]|REGREGKEY.dipClear<1|DIFF=DIFF*75/100||||Difficulty is halved if relation is still Unclear.||
|[104]|TARGETCULTURE==102|DIFF=DIFF*75/100||||||
|[104]||ROLL=che(249,1,CHARID,6)||||An oratory skill roll will be made by <CHARNAME>.||
|[104]|ROLL>=DIFF|RESULT=2; TEMP1=10; TEMP2=1;||||A success will result in peace and +10 relation.||
|[104]|ROLL>=(DIFF+50)|RESULT=1; TEMP1=20; TEMP2=1;||||A critical success (roll 50 above difficulty) will result in peace and +20 relation.||
|[104]|ROLL<DIFF|RESULT=3; TEMP1=0; TEMP2=1;||||A failure will result in no change in relation.||
|[104]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10; TEMP2=1;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[104]|RESULT==2|exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1); REGREGKEY.dipClear=1; REVREGREGKEY.dipClear=1;|Success! <TARGETREGIMENAME> accepted peace.|1|1|||
|[104]|RESULT==3||Failure! <TARGETREGIMENAME> refused our off of peace.|1|1|||
|[104]|RESULT==1|exe(105,SOURCEREGIMESLOT,TARGETREGIMESLOT,1,1); REGREGKEY.dipClear=1; REVREGREGKEY.dipClear=1;|Critical Success! <TARGETREGIMENAME> was very happy and accepted peace.|1|1|||
|[104]|RESULT==4||Critical Failure! <TARGETREGIMENAME> reacted furiously and angry. Peace was not even on the table.|1|1|||
|[104]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[104]|RESULT<=2|REGREGKEY.relation = max(35,REGREGKEY.relation+TEMP1)||||If (critical) success relation will at least rise to 35.||
|[104]|RESULT=4|REGREGKEY.relation = max(0,REGREGKEY.relation+TEMP1)||||||
|[104]||REVREGREGKEY.relation=REGREGKEY.relation||||||
|[104]|TEMP1>0|TEMP3=(TEMP1/2)||||||
|[104]|TEMP1>0|REGKEY.fist=REGKEY.fist-(REGKEY.fist*TEMP3/100)||||Your Fist profile will go down by 1/2 your relation gain.||
|[32]||REGREGKEY.stratAskHelp=1;|We sent out a request, they should get back to us soon.|1|1|Next turn they will contact you.||
|[32]||REGREGKEY.relation = max(0,REGREGKEY.relation-10)||||This will cost you 10 relation points.||
|[31]||DIFF=120-REGREGKEY.relation||||Difficulty is 120 minus your relation level.||
|[31]||TEMP2=1||||||
|[31]||DIFF=140-REGREGKEY.relation||||Difficulty is 140 minus your relation level.||
|[31]||TEMP2=3||||||
|[31]||DIFF=160-REGREGKEY.relation||||Difficulty is 160 minus your relation level.||
|[31]||TEMP2=6||||||
|[31]||ROLL=che(249,1,CHARID,40)||||An covert ops skill roll will be made by <CHARNAME>.||
|[31]|ROLL>=DIFF|RESULT=2; TEMP1=0;||||A success will result in infiltrating your special operatives.||
|[31]|ROLL>=(DIFF+50)|RESULT=1; TEMP2=TEMP2*2;  TEMP1=0;||||||
|[31]|ROLL<DIFF|RESULT=3; TEMP1=0;||||A failure will result in no change in relation.||
|[31]|ROLL<(DIFF-50)|RESULT=4; TEMP1=-10;||||A critical failure (roll 50 below difficulty) will result in -10 relation.||
|[31]|RESULT==2||Success! We managed to infiltrate our spies into <ZONENAME>.|1|1|||
|[31]|RESULT==3||Failure! We did not succeed to infiltrate our spies into <ZONENAME>. Luckily we escaped detection of our covert operations.|1|1|||
|[31]|RESULT==1||Success! We managed to infiltrate our spies into <ZONENAME>.|1|1|||
|[31]|RESULT==4||Critical Failure! Our infiltration attempt was discovered by <TARGETREGIMENAME> and they took insult with our attempt to spy on them.|1|1|||
|[31]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|2|||
|[31]||REGREGKEY.relation = min(100,max(0,REGREGKEY.relation+TEMP1))||||||
|[31]|RESULT<=2|REGREGKEY.stratSupport=1;||||||
|[41]||exe(346,20,TARGETCHARID,41);|A temporary Shadow Spy has been assigned.|1|1|Will assign a temporary Shadow Spy to the targeted Leader.||
|[42]||exe(346,20,TARGETCHARID,42);|A temporary Shadow Diplomat has been assigned.|1|1|Will assign a temporary Shadow Diplomat  to the targeted Leader.||

