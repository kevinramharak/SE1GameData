## `SE_Crime.'Flex Diplomatic Action FX vs AI'` (id = `430`)

### Properties

Is linked with library reference: (libId = `430`, libSlot = `25`)

### Columns (`8`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | IF Logic | Text 
| `2` | SET Logic | Text 
| `3` | Text | Text 
| `4` | Talk Code | Text 
| `5` | group code | Text 
| `6` | mouse over | Text 
| `7` | temp | Text 

### Rows (`44`)

| Card ID | IF Logic | SET Logic | Text | Talk Code | group code | mouse over | temp |
| --- | --- | --- | --- | --- | --- | --- | --- |
|[100101]||TARGETCHARID=che(249,26,10,ZONEID,REGID);||||||
|[100101]|TARGETCHARID>0|TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TEMP1=TARGETCHARSTAT.20; TEMP1=TEMP1/2; TARGETCHARSTAT.20=TARGETCHARSTAT.20-TEMP1; |Governor of <ZONENAME> was told to pack his bags and make place for a Crime Syndicate man. Relation with the displeased former Governor dropped -<TEMP1> points.|1|1|If Zone currently he has a Governor he'll be asked to vacate.||
|[100101]||TARGETCHARID=che(249,24,1001,1,4); TEMP1=REGKEY.syndicate_leader;||||||
|[100101]||TARGETCHARSTAT.6=10; TARGETCHARSTAT.7=ZONEID; TARGETCHARSTAT.49=60+dth(2,20); TARGETCHARPROFILE.enforcement=dth(1,3);|An influental member of the <LOOKUPCHARLASTNAME=<TEMP1>> family was installed as the new Governor.|1|2|A Governor chosen by the Crime Syndicate will be installed.||
|[100101]||TEMP2=inv(REGKEY.syndicate_relation,50); REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_contact=REGKEY.syndicate_contact+1;|The Godfather transfers you his great gratitude for your gesture of cooperation. Your relation with the Crime Syndicate increased with +<TEMP2> points.|1|3|Your relation with the Syndicate will improve a lot.||
|[100102]||TEMP5=REGKEY.syndicate_leader;||||||
|[100102][100103][100104]|||Godfather of the <LOOKUPCHARLASTNAME=<TEMP5>> Syndicate accepted your invitation. He entered the Presidential HQs discretely through a delivery entrance.|||||
|[100102]||DIFF=REGKEY.syndicate_ambition-20;||||||
|[100103]||DIFF=REGKEY.syndicate_ambition-(REGKEY.syndicate_relation/3);||||||
|[100104]||DIFF=20+REGKEY.syndicate_greed-(REGKEY.syndicate_relation/2);||||||
|[100102][100103][100104]||ROLL=che(249,1,CHARID,5)||||A Streetwise Skill Roll will be made by <CHARNAME>.||
|[100102][100103][100104]|ROLL>=DIFF|RESULT=2; TEMP3=100;||||A success will result in normal execution of task.||
|[100102][100103][100104]|ROLL>=(DIFF+50)|RESULT=1; TEMP3=200;||||A critical success (roll 50 above difficulty) will result in doubling the effect of the task.||
|[100102][100103][100104]|ROLL<DIFF|RESULT=3; TEMP3=0;||||A failure will result in the task being executed having no effect.||
|[100102][100103][100104]|ROLL<(DIFF-50)|RESULT=4; TEMP3=0;||||A critical failure (roll 50 below difficulty) will result in the task being executed having the opposite effect.||
|[100102][100103][100104]|||Difficulty was <DIFF>. Rolled <ROLL>.|1|1|||
|[100102][100103][100104]|RESULT==2||Successful Skill Roll! The talks with the Godfather went well.|1|2|||
|[100102][100103][100104]|RESULT==3||Failure! The talks did not go well.|1|2|||
|[100102][100103][100104]|RESULT==1||Critical Success! The Godfather really liked you. Effect of the action has been doubled!|1|2|||
|[100102][100103][100104]|RESULT==4||Critical Failure! The talks took a turn for the worse and the Godfather took offense.|1|2|||
|[100102]|RESULT<=2|TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2;|Relation with Crime Syndicate improved with +<TEMP2> points.|1|3|||
|[100102]|RESULT==4|TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2;|Relation with Crime Syndicate decreased with -<TEMP2> points.|1|3|||
|[100103]|RESULT==1|TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_deal=1;|A Deal was reached and the Relation with Crime Syndicate also improved with +<TEMP2> points.|1|3|||
|[100103]|RESULT==2|REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_deal=1;|A Deal was reached!|1|3|||
|[100103]|RESULT==3||No deal was reached.|1|3|||
|[100103]|RESULT==4|TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2;|Relation with Crime Syndicate decreased with -<TEMP2> points.|1|3|||
|[100104]|RESULT==1|TEMP4=(15*TEMP3)/100; TEMP2=inv(REGKEY.syndicate_relation,TEMP4); REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_relation=REGKEY.syndicate_relation+TEMP2; REGKEY.syndicate_deal=2;|A Deal was reached and the Relation with Crime Syndicate also improved with +<TEMP2> points.|1|3|||
|[100104]|RESULT==2|REGKEY.syndicate_contact=REGKEY.syndicate_contact+1; REGKEY.syndicate_deal=2;|A Deal was reached!|1|3|||
|[100104]|RESULT==3||No deal was reached.|1|3|||
|[100104]|RESULT==4|TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2;|Relation with Crime Syndicate decreased with -<TEMP2> points.|1|3|||
|[100105][100106]||ROLL=che(249,1,CHARID,5)|Operational Command Roll of <CHARNAME> was <ROLL>.|1|1|A Streetwise Skill Roll will be made.||
|[100105]||exe(346,42,100105,ZONEID,ROLL)|<LOCALTEMPTEXT>|1|2|A light law enforcement operation will be launched. The better the ratio of Troops (and their security support) versus the number of Crews the better the result.||
|[100106]||exe(346,42,100106,ZONEID,ROLL)|<LOCALTEMPTEXT>|1|2|A heavy law enforcement operation will be launched. The better the ratio of Troops (and their security support) versus the number of Crews the better the result.||
|[100105]||TEMP2=REGKEY.syndicate_relation/10; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2;|Relation with Crime Syndicate decreased with -<TEMP2> points.|1|5|Will decrease relation with Syndicate, especially if you have a Deal with them.||
|[100106]||TEMP2=REGKEY.syndicate_relation/5; REGKEY.syndicate_relation=REGKEY.syndicate_relation-TEMP2;|Relation with Crime Syndicate decreased with -<TEMP2> points.|1|5|Will decrease relation with Syndicate, especially if you have a Deal with them.||
|[100105]|ZONEKEY.syndicate_crew<1|TEMP5=REGKEY.syndicate_credits/max(1,REGKEY.size); TEMP5=TEMP5/4; REGKEY.syndicate_credits=TEMP5;||||||
|[100106]|ZONEKEY.syndicate_crew<1|TEMP5=REGKEY.syndicate_credits/max(1,REGKEY.size); TEMP5=TEMP5/2; REGKEY.syndicate_credits=TEMP5;||||||
|[100105]|ZONEKEY.syndicate_crew<dth(1,6)|ZONEKEY.syndicate_credits=0;||||||
|[100106]|ZONEKEY.syndicate_crew<dth(1,6)|ZONEKEY.syndicate_credits=0;||||||
|[100107]||exe(346,20,TARGETCHARID,100101)|Grace to you a Consiglieri joined the retinue of <TARGETCHARNAME>. He will help the Leader to devise smarter plans.|1|1|Gives selected Leader a +15 bonus on his/her Intelligence-based rolls.||
|[100108]||TARGETCHARID=che(249,24,1001,1,4); TEMP1=REGKEY.syndicate_leader;||||||
|[100108]||TARGETCHARSTAT.6=1; TARGETCHARSTAT.7=0; TARGETCHARSTAT.36=TARGETCHARSTAT.36+dth(2,10); TARGETCHARSTAT.49=60+dth(2,20); TARGETCHARPROFILE.enforcement=dth(1,3);|We recruited a Wise Guy from the Crime Syndicate in our ranks.|1|2|A Leader chosen by the Crime Syndicate will join the Reserve Pool.||
|[100109]||exe(346,25,HISID,100101,1)|The Unit has received the Syndicate support you allocated. They send you their somewhat mixed gratitude.|1|1|Gives selected Unit this special support Unit Feat.||
|[100110]||exe(346,25,HISID,100102,1)|The Unit has received the Syndicate support you allocated. They send you their somewhat mixed gratitude.|1|1|Gives selected Unit this special support Unit Feat.||

