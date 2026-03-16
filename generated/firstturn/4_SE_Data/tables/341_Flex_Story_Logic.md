# `Flex Story Logic` (`341`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Complex Story ID | `Text` |
| `1` | Check Type | `Text` |
| `2` | Check Logic | `Text` |
| `3` | Set Logic | `Text` |
| `4` | Log Text | `Text` |
| `5` | Mode | `Text` |
| `6` | Group | `Text` |
| `7` | Det.News.Type | `Text` |
| `8` | Cust.Rep.Name | `Text` |
| `9` | Cust.Subhead | `Text` |
| `10` | Uds Placement | `Text` |

### Data

| Complex Story ID | Check Type | Check Logic | Set Logic | Log Text | Mode | Group | Det.News.Type | Cust.Rep.Name | Cust.Subhead | Uds Placement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 4 | REGKEY.corp_active<1; ZONEKEY.corp_control>0; ZONEKEY.corp_regimeid!=REGIMEID; ZONEKEY.corp_regimeid>0; | ZONEKEY.corp_control=0; ZONEKEY.corp_regimeid=0; ZONEKEY.corp_blockgovid=0; | //delte for human if no Corp story active |  |  |  |  |  |  |
|  | 3 | ZONEKEY.corp_control>0; ZONEKEY.corp_regimeid!=REGIMEID; ZONEKEY.corp_regimeid>0; | ZONEKEY.corp_control=0; ZONEKEY.corp_regimeid=0; ZONEKEY.corp_blockgovid=0; | //for ai | 3 |  |  |  |  |  |
| 0 | 3 | ZONEKEY.rebelManpower>=20; REGIMESTAT.11>0; REGIMESTAT.1==1; | TEMP1=REGIMESTAT.11; exe(346,8,ZONEID,TEMP1,1); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-20; | Rebels deployed in <ZONENAME>. | 3 |  |  |  |  |  |
| 0 | 3 | REGKEY.syndicate_active<1; ZONEKEY.syndicate_regimeid!=REGIMEID; ZONEKEY.syndicate_regimeid>0; | ZONEKEY.syndicate_credits=0; ZONEKEY.syndicate_blackCredits=0; ZONEKEY.syndicate_crew=0; ZONEKEY.syndicate_crimeLevel=0; | //delete for other humans if no crime story active | 4 |  |  |  |  |  |
| 0 | 3 | ZONEKEY.syndicate_crew>0|ZONEKEY.syndicate_crimeLevel>0 | ZONEKEY.syndicate_credits=0; ZONEKEY.syndicate_blackCredits=0; ZONEKEY.syndicate_crew=0; ZONEKEY.syndicate_crimeLevel=0; | //for AI | 3 |  |  |  |  |  |
| 0 | 3 | ZONEKEY.disease1_spread>0 | ZONEKEY.disease1_spread=max(0,ZONEKEY.disease1_spread-dth(1,6)); |  | 3 |  |  |  |  |  |
| 0 | 0 | REGKEY.mapPromisesActive==1; ROUND>=(REGKEY.mapPromisesStart+20); | REGKEY.mapPromisesActive=0; REGKEY.mapPromisesType=0; |  |  |  |  |  |  |  |
| 0 | 0 | REGKEY.mapPromisesType==6; chk(249,36,REGKEY.mapPromisesDemandID)==2; TARGETCHARID=REGKEY.mapPromisesCharId; TARGETCHARSTAT.6>0; | REGKEY.mapPromisesType=0; TARGETCHARID=REGKEY.mapPromisesCharId; TARGETCHARSTAT.20=TARGETCHARSTAT.20*50/100; | Leader was dissapointed by your failure to keep your promise. |  |  |  |  |  |  |
| 0 | 2 | REGKEY.mapPromisesType==5; REGKEY.mapPromisesRegID==TARGETREGIMEID; chk(249,36,REGKEY.mapPromisesDemandID)==1; chk(249,7,TARGETREGIMEID)>0; | TEMP1=chk(249,7,TARGETREGIMEID); exe(346,8,TEMP1,REGIMEID,1); exe(346,8,TEMP1,REGIMEID,1); REGKEY.mapPromisesType=0; | Rebels joined your offensive. |  |  |  |  |  |  |
| 0 | 2 | REGKEY.mapPromisesDemandID==0; REGKEY.mapPromisesType==1;  REGKEY.mapPromisesRegID==TARGETREGIMEID;  (REGKEY.mapPromisesStart+9)>=ROUND; dth(1,100)<50; | exe(346,10,TARGETREGIMEID,GAMEKEY.38,3); | Mercenaries joined Regime. |  |  |  |  |  |  |
| 0 | 2 | REGKEY.mapPromisesType==1; REGKEY.mapPromisesDemandID==0; REGKEY.mapPromisesRegID==TARGETREGIMEID; (REGKEY.mapPromisesStart+9)<ROUND; | REGKEY.mapPromisesType=0; exe(346,2,TARGETREGIMESLOT,SOURCEREGIMESLOT); | After having been reinforced by mercenaries for quite some time they now have declared war on us. |  |  |  |  |  |  |
| 0 | 3 | (ZONEKEY.disease1>0|ZONEKEY.disease1_init>0); ZONEKEY.disease1_spread<1; | ZONEKEY.disease1=0; ZONEKEY.disease1_init=0; |  | 3 |  |  |  |  |  |
| 0 | 3 | (ZONEKEY.city>1) & (((ZONEKEY.worker+ZONEKEY.pop)<=100) | ZONEKEY.city=1 | City of <ZONENAME> has downgrade to Level 1 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | ZONEKEY.rebelManpower>=80; REGIMESTAT.11>0; REGIMESTAT.1==1; | TEMP1=REGIMESTAT.11; exe(346,8,ZONEID,TEMP1,6); ZONEKEY.rebelManpower=ZONEKEY.rebelManpower-80; | Rebels deployed in <ZONENAME>. | 3 |  |  |  |  |  |
| 0 | 3 | (ZONEKEY.city>2) & (((ZONEKEY.worker+ZONEKEY.pop)<=250) | ZONEKEY.city=2 | City of <ZONENAME> downgrade to Level 2 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>3) & (((ZONEKEY.worker+ZONEKEY.pop)<=500) | ZONEKEY.city=3 | City of <ZONENAME> downgrade to Level 3 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>6) & ((ZONEKEY.worker+ZONEKEY.pop)<=3250) | ZONEKEY.city=6 | City of <ZONENAME> downgrade to Level 6 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>5) & ((ZONEKEY.worker+ZONEKEY.pop)<=2000) | ZONEKEY.city=5 | City of <ZONENAME> downgrade to Level 5 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>4) & ((ZONEKEY.worker+ZONEKEY.pop)<=1000) | ZONEKEY.city=4 | City of <ZONENAME> downgrade to Level 4 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 102 | 0 | chk(249,39,999,9001)<1; REGKEY.militiaCabinetLost==0; | REGKEY.militiaCabinetLost=1; REGKEY.militia = max(0,REGKEY.militia - 40); | Militia lost their influence through their Militia Chief(s) in your cabinet. |  |  |  |  |  |  |
| 102 | 3 | REGSTAT.2==ZONESTAT.9; dth(1,100)>REGKEY.militia; REGKEY.militia<50; | TEMP1 = 1+ ((REGKEY.militia-50)/20); ZONEKEY.militancy = max(0,ZONEKEY.militancy - TEMP1); | Militancy level decreased with -<TEMP1> due to your bad relation with your militia. |  |  |  |  |  |  |
| 102 | 3 | REGSTAT.2==ZONESTAT.9; dth(1,100)<REGKEY.militia; REGKEY.militia>50; | TEMP1 = 1+ ((REGKEY.militia-50)/20); ZONEKEY.militancy = min(100,ZONEKEY.militancy + TEMP1); | Militancy level went up with +<TEMP1> due to your good relation with your militia. |  |  |  |  |  |  |
| 102 | 0 | chk(249,39,999,9001)>0; REGKEY.militiaCabinetLost==1; | REGKEY.militiaCabinetLost=0; REGKEY.militia = min(100,REGKEY.militia +25); | Militia regained their influence through at least one Militia Chief in your cabinet. |  |  |  |  |  |  |
| 103 | 0 | REGIMEKEY.murderInvestigation>0; REGIMKEY.murderProgress<100; | TEMP1= 1+dth(1,10); REGIMEKEY.murderProgress=REGIMEKEY.murderProgress+TEMP1; | The murder investigation into the demise of your predecessor advanced with +<TEMP1> points. |  |  |  |  |  |  |
| 103 | 2 | TARGETREGIMEID==REGIMEKEY.shadowMinor; TARGETREGKEY.majorInfluence>10; dth(1,100)>75; | OTHERREGIMEID=TARGETREGIMEKEY.minorPuppet; TEMP1=OTHERREGIMESTAT.2; exe(346,10,TARGETREGIMEID,TEMP1,2); TARGETREGIMEKEY.foreignVolunteers=ROUND; |  |  |  |  |  |  |  |
| 103 | 0 | REGIMEKEY.murderProgress>=5000; REGIMKEY.murderProgress<5100; | TEMP1= 1+dth(1,10); REGIMEKEY.murderProgress=REGIMEKEY.murderProgress+TEMP1; | The undercover team investigation the assasin of your predecessor advanced with +<TEMP1> points. |  |  |  |  |  |  |
| 103 | 2 | TARGETREGIMEID==REGIMEKEY.shadowMajor; TARGETREGKEY.shadowInfluence>35; dth(1,100)>66; | TEMP1=TARGETREGIMESTAT.2; exe(346,10,TARGETREGIMEID,TEMP1,3); TARGETREGIMEKEY.shadowForces=ROUND; |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=2 | REVREGREGKEY.aiTimeFriends=0; |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.lastLookForPeace>0 | REVREGREGKEY.lastLookForPeace=REVREGREGKEY.lastLookForPeace-5; REVREGREGKEY.lastLookForPeace=max(0,REVREGREGKEY.lastLookForPeace); |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=70; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-10; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=50; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-6; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=30; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-3; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.giftCounter>0 | REVREGREGKEY.giftCounter=REVREGREGKEY.giftCounter-1 | Diminish gift counter over time.. to re-allow giving credits |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==5; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-2; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==4; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-4; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==3; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-6; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==2; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-8; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==1; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-10; | Decrease aiNegativeDip if it is above 0. Can be set by Human responses to Cards |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=1 | REVREGREGKEY.aiTimeAllies=0; |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.giftCounter>1; REVREGREGKEY.aiNegativeDip<5; | REVREGREGKEY.giftCounter=REVREGREGKEY.giftCounter-2 | Diminish gift counter over time.. to re-allow giving credits |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiIntention<15; TARGETWAR==0; | REVREGREGKEY.aiStoryMode=3 | Relatiuon turns from Friends to Cold |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; TARGETWAR==1; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; | Relation turns Cold because of War. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=4 | REVREGREGKEY.aiBribeSucces=0;REVREGREGKEY.aiBribeFailure=0; |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; STORYMOD.4>500; STORYMOD.6>500; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; | Relation turns Cold because of Faction in power. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; STORYMOD.4>500; STORYMOD.6<500; | REVREGREGKEY.aiStoryMode=4; REVREGREGKEY.aiFriends=0; | Relation cools down because of Faction in power. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiLove>0; | REVREGREGKEY.aiLove=REVREGREGKEY.aiLove-max(1,REVREGREGKEY.aiLove/20) | Affection diminishes over time. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; | REVREGREGKEY.aiTimeFriends=REVREGREGKEY.aiTimeFriends+1 |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; | REVREGREGKEY.aiTimeAllies=REVREGREGKEY.aiTimeAllies+1 |  |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-2); | Hatred down with -2 due to Friends. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; TARGETWAR==1; REVREGREGKEY.aiIntention<=40; | REVREGREGKEY.aiStoryMode=5; REVREGREGKEY.aiFriends=0; | Relation turns Hostile because of War. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-1); | Hatred down with -1 due to Friends. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiIntention<35; TARGETWAR==0; dth(1,100)<10; | REVREGREGKEY.aiStoryMode=3 | Relation turns from Friends to Cold |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; REVREGREGKEY.aiIntention>=80; REVREGREGKEY.aiHatred<5; TARGETWAR==0; | REVREGREGKEY.aiStoryMode=2 | Relation turns from Cold to Friends. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-4); | Hatred down with -4 due to Friends. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==4; REVREGREGKEY.aiIntention>=60; REVREGREGKEY.aiHatred<5; | REVREGREGKEY.aiStoryMode=3 | Relation turns from Blackmail to Cold. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; TARGETWAR==1; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; | Relation turns Cold because of War. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiHatred>0; REVREGREGKEY.aiLove>0; | TEMP1=min(REVREGREGKEY.aiLove,REVREGREGKEY.aiHatred); REVREGREGKEY.aiHatred=REVREGREGKEY.aiHatred-TEMP1; REVREGREGKEY.aiLove=REVREGREGKEY.aiLove-TEMP1; | Hatred and Affection both diminshed with <TEMP1> points. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==4; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-1); | Hatred down with -1 due to Friends. |  |  |  |  |  |  |
| 105 | 2 | REVREGREGKEY.aiStoryMode==5; REVREGREGKEY.aiIntention>=50; REVREGREGKEY.aiHatred<5; | REVREGREGKEY.aiStoryMode=3 | Relation turns from Hostile to Cold. |  |  |  |  |  |  |
| 1001 | 3 |  | TEMP1= (ZONEKEY.publicCredits*ZONEKEY.syndicate_crimeLevel)/200; ZONEKEY.publicCredits=ZONEKEY.publicCredits-TEMP1; ZONEKEY.syndicate_Credits= ZONEKEY.syndicate_Credits+TEMP1; | //Investment Credits extorted from <ZONENAME> Populace is <TEMP1> Credits. | 1 | 3 |  |  |  |  |
| 1001 | 3 |  | TEMP1= (ZONEKEY.freeFolk*ZONEKEY.syndicate_crimeLevel)/200; TEMP2= (ZONEKEY.pop*ZONEKEY.syndicate_crimeLevel)/200; TEMP1=TEMP1+TEMP2; ZONEKEY.syndicate_Credits= ZONEKEY.syndicate_Credits+TEMP1; ZONEKEY.syndicate_shadyCreditsTaken=TEMP1; | //Base Income from various shady business (pop+freeFolk, not worker) | 1 | 3 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_deal<1 | TEMP1=REGKEY.credits/REGKEY.size; TEMP1=TEMP1/10; TEMP1=(TEMP1*ZONEKEY.syndicate_crimeLevel)/100; REGKEY.credits=REGKEY.credits-TEMP1; ZONEKEY.syndicate_Credits= ZONEKEY.syndicate_Credits+TEMP1; ZONEKEY.syndicate_regimeCreditsTaken=TEMP1; | //Regime Credits embezzled through <ZONENAME> is <TEMP1> Credits. | 1 | 3 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crew>0 | TEMP1=che(218,ZONEKEY.syndicate_crimeLevel)*ZONEKEY.syndicate_attitude; TEMP1=TEMP1-ZONEKEY.danger;  TEMP1=max(0,TEMP1); TEMP2=inv(ZONEKEY.danger,TEMP1); ZONEKEY.danger=ZONEKEY.danger+TEMP2; | Danger in <ZONENAME> went up with <TEMP2> points due to Crime Level. | 1 | 3 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crew>0 | TEMP1=che(218,ZONEKEY.syndicate_crimeLevel)*ZONEKEY.syndicate_attitude; TEMP1=TEMP1-ZONEKEY.unrest; TEMP1=max(0,TEMP1); TEMP3=inv(ZONEKEY.unrest,TEMP1); ZONEKEY.unrest=ZONEKEY.unrest+TEMP3; | Unrest in <ZONENAME> went up with <TEMP3> points due to Crime Level. | 1 | 3 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_credits>ZONEKEY.syndicate_reserve | TEMP1=ZONEKEY.syndicate_credits-ZONEKEY.syndicate_reserve; TEMP2 = TEMP1/2; ZONEKEY.syndicate_credits=ZONEKEY.syndicate_credits-TEMP2; ZONEKEY.syndicate_blackCredits=ZONEKEY.syndicate_blackCredits+TEMP2; TEMP10=ZONEKEY.syndicate_credits; | //Capo and Crews in <ZONENAME> consumed <TEMP2> Credits at their own leisure. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crimeLevel>0; | TEMP4=ZONEKEY.syndicate_crimeLevel; TEMP5=ZONEKEY.syndicate_crewLost; TEMP6=ZONEKEY.syndicate_soldiersKilled; TEMP7=ZONEKEY.syndicate_privateCreditsTaken; TEMP8=ZONEKEY.syndicate_regimeCreditsTaken; TEMP9=ZONEKEY.syndicate_levelsDestroyed; TEMP10=ZONEKEY.syndicate_ratio; REGKEY.syndicate_totalCrimeLevel=REGKEY.syndicate_totalCrimeLevel+TEMP4; | <ZONENAME> Crime Level is at <TEMP4>. Enforcement Ratio was <TEMP10>:1. Crime caused loss of <TEMP5> Crews, <TEMP6>00 Troops, <TEMP9> Levels of Assets, <TEMP7> Private Credits, <TEMP8> Regime Credits, <TEMP2> Danger and <TEMP3> Unrest. | 1 | 3 |  | Crime Syndicate |  | 1 |
| 1001 | 3 |  | ZONEKEY.syndicate_reserve=ZONEKEY.syndicate_reserve+(ZONEKEY.syndicate_crew*2); | // ZONE RESERVE TREASURY SETTING | 1 | 9 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_credits<ZONEKEY.syndicate_reserve | TEMP1=ZONEKEY.syndicate_reserve-ZONEKEY.syndicate_credits; TEMP2 = min(TEMP1,(REGKEY.syndicate_credits/10)); ZONEKEY.syndicate_credits=ZONEKEY.syndicate_credits+TEMP2; TEMP10=ZONEKEY.syndicate_credits; REGKEY.syndicate_credits=REGKEY.syndicate_credits-TEMP2; | //Capo in <ZONENAME> received <TEMP2> Credits of investment budget from the Godfather. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crew>0 | TEMP1=ZONEKEY.syndicate_crew; TEMP2=min(ZONEKEY.syndicate_crew,ZONEKEY.syndicate_credits); TEMP6=TEMP2; TEMP3=ZONEKEY.syndicate_crew-TEMP2; TEMP4=(TEMP3*3)/10; ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew-TEMP4; ZONEKEY.syndicate_credits=ZONEKEY.syndicate_credits-TEMP6; ZONEKEY.syndicate_credits=max(0,ZONEKEY.syndicate_credits); TEMP10=ZONEKEY.syndicate_credits; | //Capo in <ZONENAME> paid <TEMP2> Credits to his Crews. <TEMP4> Crews left because of not being paid. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_credits>ZONEKEY.syndicate_reserve | TEMP1=ZONEKEY.syndicate_credits-ZONEKEY.syndicate_reserve; TEMP2=(TEMP1*3)/10; REGKEY.syndicate_credits=REGKEY.syndicate_credits+TEMP2; REGKEY.syndicate_share=REGKEY.syndicate_share+TEMP2; ZONEKEY.syndicate_credits=ZONEKEY.syndicate_credits-TEMP2; ZONEKEY.syndicate_credits=max(0,ZONEKEY.syndicate_credits); TEMP10=ZONEKEY.syndicate_credits; ZONEKEY.syndicate_shareSent=TEMP2; | //Capo in <ZONENAME> sends a <TEMP2> Credits share of the profit back to the Godfather. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio>1 | TEMP1=ZONEKEY.syndicate_credits/9; TEMP2=ZONEKEY.pop/100; TEMP2=TEMP2+1; TEMP3=min(TEMP1,TEMP2); TEMP3=min(TEMP3, ZONEKEY.pop); ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew+TEMP3; TEMP4 = TEMP3*3; ZONEKEY.syndicate_credits=ZONEKEY.syndicate_credits-TEMP4; ZONEKEY.syndicate_crewgained=ZONEKEY.syndicate_crewgained+TEMP3; TEMP10=ZONEKEY.syndicate_credits; | //Capo in <ZONENAME> recruited <TEMP3> new Crews. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 |  | ZONEKEY.syndicate_reserve=(ZONEKEY.pop+ZONEKEY.worker)/10; | // ZONE RESERVE TREASURY SETTING | 1 | 9 |  |  |  |  |
| 1001 | 3 |  | ZONEKEY.syndicate_reserve=(ZONEKEY.syndicate_reserve*REGKEY.syndicate_greed)/100; TEMP9=ZONEKEY.syndicate_reserve; TEMP10=ZONEKEY.syndicate_credits; | //Capo in <ZONENAME> aims for a reserve of <TEMP9> Credits. (<TEMP10> Cr). | 1 | 9 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_deal>0 | ZONEKEY.syndicate_crewlost=ZONEKEY.syndicate_crewlost/2; | //Crew Loss is <TEMP3>. | 1 | 2 |  |  |  |  |
| 1001 | 3 |  | TEMP1= ZONEKEY.syndicate_crew*100; TEMP2= TEMP1/(ZONEKEY.pop+ZONEKEY.worker); TEMP3=min(ZONEKEY.syndicate_attitude,3); TEMP4=che(218,TEMP3); TEMP5=TEMP2*TEMP4; TEMP5=(TEMP5*REGKEY.syndicate_efficiency)/100; TEMP5=min(100,TEMP5); ZONEKEY.syndicate_crimeLevel=TEMP5; | //Crime Level is <TEMP5>. | 1 | 3 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crew>((ZONEKEY.pop+ZONEKEY.worker)/4) | TEMP1=ZONEKEY.syndicate_crew-((ZONEKEY.pop+ZONEKEY.worker)/4); TEMP2=TEMP1/2; REGKEY.syndicate_crew=REGKEY.syndicate_crew+TEMP2; ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew-TEMP2; | //Capo send back <TEMP2> Crews to the Godfather. | 1 | 9 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_deal==1 |  | Co-Existence deal with Syndicate is in place. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_deal==2 |  | Kickback deal with Syndicate is in place. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_war==1 |  | Syndicate considers itself at War with you. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; | TEMP1=REGKEY.syndicate_ambition; TEMP2=REGKEY.syndicate_toughness; TEMP3=REGKEY.syndicate_efficiency; TEMP4=REGKEY.syndicate_greed; TEMP5=REGKEY.syndicate_vengeance; | Syndicate Personality: Ambition: <TEMP1>%, Toughness: <TEMP2>%, Efficiency: <TEMP3>%, Greed: <TEMP4>%, Vengeance: <TEMP5>%. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 |  | REGKEY.syndicate_totalCrimeLevel=0; | // finish CLEAR CENTER | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1= (ZONEKEY.netPrivateIncome*ZONEKEY.syndicate_crimeLevel)/200; ZONEKEY.popCredits=ZONEKEY.popCredits-TEMP1; ZONEKEY.syndicate_Credits= ZONEKEY.syndicate_Credits+TEMP1; ZONEKEY.syndicate_privateCreditsTaken=TEMP1; | //Private Credits lost due to small crime in <ZONENAME> is <TEMP1> Credits. | 1 | 3 |  |  |  |  |
| 1001 | 3 |  | TEMP8=0;TEMP9=0;TEMP10=0;ZONEKEY.syndicate_reserve=0; ZONEKEY.syndicate_crewgained=0; ZONEKEY.syndicate_crewlost=0; ZONEKEY.syndicate_soldierskilled=0; ZONEKEY.syndicate_levelsdestroyed=0; ZONEKEY.syndicate_regimeCreditsTaken=0; syndicate_privateCreditsTaken=0; ZONEKEY.syndicate_crimeLevel=0; ZONEKEY.syndicate_shareSent=0; ZONEKEY.syndicate_shadyCreditsTaken=0; | // CLEAR ZONE | 1 | 2 |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_ratio*4; TEMP2=ZONEKEY.syndicate_attitude*che(218,TEMP1); TEMP2=min(100,TEMP2); TEMP3=(ZONEKEY.syndicate_crew*TEMP2)/100; ZONEKEY.syndicate_crewlost=TEMP3; | //Detail: Crew Loss is <TEMP2>%. Temp1: <TEMP1> | 1 | 2 |  |  |  |  |
| 1001 | 3 |  | TEMP3=ZONEKEY.syndicate_crewlost; ZONEKEY.syndicate_crew=ZONEKEY.syndicate_crew-TEMP3; | //Crew Loss is <TEMP3>. | 1 | 2 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crewlost>0 | TEMP3=dth(1,ZONEKEY.syndicate_ratio); TEMP4=ZONEKEY.syndicate_crewlost/TEMP3; TEMP5=dth(1,TEMP4); TEMP5=min(TEMP5,TEMP4); TEMP5=(TEMP5*REGKEY.syndicate_toughness)/100;  TEMP6=che(249,4,ZONEID,REGID,1); TEMP8=TEMP6-TEMP7; TEMP7=min(TEMP5,TEMP6); exe(346,32,ZONEID,REGID,TEMP7); ZONEKEY.syndicate_soldiersKilled=TEMP7; | //Troop Loss is <TEMP7>. | 1 | 2 |  |  |  |  |
| 1001 | 3 | TEMP8<=0 | TEMP9=(ZONEKEY.syndicate_attitude-1)*10; TEMP9=TEMP9+(abs(TEMP8)*5); TEMP9=max(0,TEMP9); | //TEMP4=ZONEKEY.syndicate_crimeLevel; TEMP5=ZONEKEY.syndicate_crewLost; TEMP6=ZONEKEY.syndicate_soldiersKilled; TEMP7=ZONEKEY.syndicate_privateCreditsTaken; TEMP8=ZONEKEY.syndicate_regimeCreditsTaken; TEMP9=ZONEKEY.syndicate_regimeCreditsTaken; TEMP10=ZONEKEY.syndicate_levelsDestroyed; | 1 | 2 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_war>0; TEMP9>0; | TEMP9=200; | //IF WAR ALWAYS DESTROY SECURITY ASSETS | 1 | 2 |  |  |  |  |
| 1001 | 3 | TEMP9>dth(1,100); ZONEKEY.syndicate_crew>0; | TEMP10=che(249,25,ZONEID,23,1); ZONEKEY.syndicate_levelsDestroyed=TEMP10; | //DESTROY ASSET LEVELS OF SECURITY ASSETS (col23) | 1 | 2 |  |  |  |  |
| 1001 | 3 |  | ZONEKEY.syndicate_ratio=min(64,ZONEKEY.syndicate_ratio); | //<ZONENAME> Nitty Gritty follows... | 1 | 2 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crew<((ZONEKEY.pop+ZONEKEY.worker)/5) | ZONEKEY.syndicate_regimeid=REGIMEID; |  | 1 | 9 |  |  |  |  |
| 1001 | 0 |  | TEMP2=0; |  | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; | TEMP8=REGKEY.syndicate_share; TEMP9=REGKEY.syndicate_credits; TEMP10=REGKEY.syndicate_crew; | Godfather took a share of <TEMP8> Credits from Capos. Has <TEMP9> Credits and <TEMP10> Crews at disposal. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 | REGKEY.syndicate_war==1 |  | Syndicate is at War with you | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_deal==0 |  | There is currently no deal with syndicate. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_deal>0; REGKEY.syndicate_war<1; REGKEY.syndicate_relation>60; TEMP1=REKGEY.syndicate_relation-60; TEMP1>dth(1,80); | TEMP2=dth(1,4); |  | 1 |  |  |  |  |  |
| 1001 | 0 | TEMP2==1 | exe(346,33,100107,REGID,1); | The Godfather has transferred a Consiglieri to you. He told me to tell you that you are in his debt. | 1 |  |  | Gift from Godfather |  | 2 |
| 1001 | 0 | TEMP2==2 | exe(346,33,100108,REGID,1); | The Godfather has transferred a Wiseguy to you. He told me he thinks we need some muscle in our ranks. | 1 |  |  | Gift from Godfather |  | 2 |
| 1001 | 0 | TEMP2==3 | exe(346,33,100109,REGID,1); | The Godfather has transferred a Dirty Dozen to you. He says you are getting popular among the foot soldiers. | 1 |  |  | Gift from Godfather |  | 2 |
| 1001 | 3 | REGKEY.syndicate_deal==2 |  | Kickback deal with Syndicate | 1 |  |  |  |  |  |
| 1001 | 0 | TEMP2==4 | exe(346,33,100110,REGID,1); | The Godfather has transferred a Hitman to you. He asked me to tell you it is one of his best. | 1 |  |  | Gift from Godfather |  | 2 |
| 1001 | 3 | REGKEY.syndicate_wrapitup==1; | TEMP1=ZONEKEY.syndicate_credits*2; TEMP1=TEMP1+(ZONEKEY.syndicate_blackCredits*3); exe(346,12,ZONEID,0,TEMP1); ZONEKEY.syndicate_credits=0; ZONEKEY.syndicate_blackCredits=0; ZONEKEY.syndicate_crew=0; | // Abandon Zone | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_blackCredits>0; | TEMP1=ZONEKEY.syndicate_blackCredits/3; ZONEKEY.syndicate_blackCredits=ZONEKEY.syndicate_blackCredits-TEMP1; TEMP1=TEMP1*3; exe(346,12,ZONEID,0,TEMP1); | // BlackCredits spending Zone | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crimeLevel>0; REGKEY.syndicate_credits>1000; dth(1,REGKEY.size)<=1; dth(1,100)<20; che(249,11,ZONEID,871)>0; che(249,11,ZONEID,871)<3; | exe(346,17,ZONEID,871); REGKEY.syndicate_credits=REGKEY.syndicate_credits-1000; | Godfather upgraded Brothels in <ZONENAME>. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 | ZONEKEY.syndicate_crimeLevel>0; REGKEY.syndicate_credits>500; dth(1,REGKEY.size)<=1; dth(1,100)<20; che(249,11,ZONEID,871)==0 | exe(346,18,ZONEID,871); REGKEY.syndicate_credits=REGKEY.syndicate_credits-500; | Godfather constructed Brothels in <ZONENAME>. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 | ZONEKEY.syndicate_crimeLevel>0; REGKEY.syndicate_credits>1000; dth(1,REGKEY.size)<=1; dth(1,100)<20; che(249,11,ZONEID,861)>0; che(249,11,ZONEID,861)<3; | exe(346,17,ZONEID,861); REGKEY.syndicate_credits=REGKEY.syndicate_credits-1000; | Godfather upgraded Casino in <ZONENAME>. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 | ZONEKEY.syndicate_crimeLevel>0; REGKEY.syndicate_credits>500; dth(1,REGKEY.size)<=1; dth(1,100)<20; che(249,11,ZONEID,861)==0 | exe(346,18,ZONEID,861); REGKEY.syndicate_credits=REGKEY.syndicate_credits-500; | Godfather constructed Casino in <ZONENAME>. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel<1; REGKEY.syndicate_totalCrews<5; REGKEY.syndicate_credits<40; REGKEY.syndicate_share<1; | REGKEY.syndicate_wrapitup=1; REGKEY.syndicate_share=0; REGKEY.syndicate_totalCrimeLevel=0; REGKEY.syndicate_totalcrews=0; REGKEY.syndicate_totalidealattitude=0; REGKEY.syndicate_totalpopulace=0; REGKEY.syndicate_active=0; REGKEY.syndicate_strategy=0; REGKEY.syndicate_relation=0; | The Godfather has decided to dismantle the whole Crime Syndicate. Times are too tough. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 |  | TEMP8=ZONEKEY.syndicate_crew; TEMP9=ZONEKEY.syndicate_credits; | //Capo in <ZONENAME> has <TEMP8> Crews and <TEMP9> Credits at his disposal. | 1 | 9 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_deal==1 |  | Co-Existence deal with Syndicate | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_attitude==4 |  | Capo's attitude is EXTREME CRIME | 1 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_totalCrimeLevel>0; ZONEKEY.syndicate_crew>0; |  |  |  |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_deal==2; REGKEY.syndicate_share>0; | TEMP1=(40*REGKEY.syndicate_relation)/100; TEMP2=(TEMP1*REGKEY.syndicate_share)/100; REGKEY.syndicate_credits=REGKEY.syndicate_credits-TEMP2; TEMP2=TEMP2+1; REGKEY.credits=REGKEY.credits+TEMP2; | Godfather has discretely transferred our share of <TEMP2> Credits to us. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_crew | <TEMP1> Syndicate Crews | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_crewLost>0|ZONEKEY.syndicate_crewGained>0 | TEMP1=ZONEKEY.syndicate_crewLost;TEMP2=ZONEKEY.syndicate_crewGained; | <TEMP1> Crews lost, <TEMP2> Crews gained | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_soldierskilled>0 | TEMP1=ZONEKEY.syndicate_soldiersKilled | <TEMP1>00 Troops lost | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_shadyCreditsTaken; | <TEMP1> Shady Credits earned | 1 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_deal==0 |  | There is no deal with syndicate | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_privateCreditsTaken | <TEMP1> Private Credits stolen | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_shareSent>0 | TEMP1=ZONEKEY.syndicate_shareSent; | <TEMP1> Cr. sent to Godfather | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_credits; | <TEMP1> Credits left with Capo | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_attitude==0 |  | Capo's attitude is LAY LOW | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_attitude==1 |  | Capo's attitude is LIGHT CRIME | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_attitude==2 |  | Capo's attitude is RESTRAINED CRIME | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_attitude==3 |  | Capo's attitude is UNRESTRAINED CRIME | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_regimeCreditsTaken | <TEMP1> Regime Credits stolen | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_attitude==4 |  | Godfather's attitude is EXTREME CRIME. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>0; REGKEY.syndicate_ambition>dth(3,100); REGKEY.syndicate_relation<=dth(5,20); REGKEY.syndicate_idealAttitude>=3; | REGKEY.syndicate_strategy=5; REGKEY.syndicate_deal=0; | // STRATEGY FOR CENTER.. #5 Deal is off the table | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_attitude==2 |  | Godfather's attitude is RESTRAINED CRIME. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_dealbroken=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_trigger=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_crew=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_attitude=0; ZONEKEY.syndicate_idealAttitude=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_credits=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_crewgained=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_contact=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_crewlost=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_levelsdestroyed=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_regimecreditstaken=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_blackCredits=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_regimeid=0; ZONEKEY.syndicate_ratio=0; ZONEKEY.syndicate_shadyCreditsTaken=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_crimelevel=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_attitude==3 |  | Godfather's attitude is UNRESTRAINED CRIME. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 3 | REGKEY.syndicate_initialize==1 | ZONEKEY.syndicate_soldierskilled=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_strategy=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_margin=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_attitude=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | ROUND==1 | REGKEY.syndicate_relation=0; | //Set to 0 so the Story doesnt show up in profiles if not started yet |  |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_relation=50; REGKEY.syndicate_active=1; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_credits=(70*GAMEKEY.42)/10; REGKEY.syndicate_credits=REGKEY.syndicate_credits+150; TEMP9=REGKEY.syndicate_credits; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_war=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_deal=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_crew=GAMEKEY.42+5; TEMP9=REGKEY.syndicate_crew; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_ambition=70+dth(1,50)+(2*GAMEKEY.42); | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_toughness=70+dth(1,50)+(2*GAMEKEY.42); | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_efficiency=70+dth(1,50)+(2*GAMEKEY.42); | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_greed=70+dth(1,50)+(2*GAMEKEY.42); | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_vengeance=70+dth(1,50)+(2*GAMEKEY.42); | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_share=0; REGKEY.syndicate_wrapitup=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_totalcrews=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_totalidealattitude=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_totalpopulace=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 0 |  | REGKEY.syndicate_share=0; REGKEY.syndicate_totalcrews=0; REGKEY.syndicate_totalidealattitude=0; REGKEY.syndicate_totalpopulace=0; REGKEY.syndicate_strategy=0; | // CLEAR CENTER | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=che(249,4,ZONEID,REGID,1)*3; TEMP1=TEMP1+ZONEKEY.qol_security+2; TEMP1=TEMP1+(ZONEKEY.pop/30); TEMP1=TEMP1+(ZONEKEY.worker/30); TEMP2=ZONEKEY.syndicate_crew; ZONEKEY.syndicate_ratio=TEMP1/(1+TEMP2); TEMP9=ZONEKEY.syndicate_ratio; | //Law Enforcement Ratio in <ZONENAME> is <TEMP9>:1. <TEMP1> Troopers and Security points and <TEMP2> Crews present. | 1 | 1 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_initialize==1 | REGKEY.syndicate_initialize=0; | // INITIALIZE | 0 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio<20 | ZONEKEY.syndicate_attitude=2; | // ZONE ANALYSIS | 1 | 1 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war>0; REGKEY.syndicate_idealAttitude>=3; 30>dth(1,REGKEY.syndicate_ambition); REGKEY.syndicate_relation>=dth(6,20); | REGKEY.syndicate_war=0; REGKEY.syndicate_strategy=6; | // STRATEGY FOR CENTER.. #6 We called an end to the War | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war<1; REGKEY.syndicate_deal==0; REGKEY.syndicate_relation>(REGKEY.syndicate_vengeance/2); REGKEY.syndicate_idealAttitude>=2; 10>dth(1,REGKEY.syndicate_greed); | REGKEY.syndicate_strategy=7; | // STRATEGY FOR CENTER.. #7 Offer Corruption Deal | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war<1; REGKEY.syndicate_deal==0; REGKEY.syndicate_relation>(REGKEY.syndicate_vengeance/4); REGKEY.syndicate_idealAttitude<=1; 10>dth(1,REGKEY.syndicate_ambition); | REGKEY.syndicate_strategy=8; | // STRATEGY FOR CENTER.. #8 Offer Co-Existence Deal | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war<1; REGKEY.syndicate_deal==0; REGKEY.syndicate_idealAttitude>=3; dth(1,REGKEY.syndicate_ambition)>dth(1,300); REGKEY.syndicate_relation>30; | REGKEY.syndicate_strategy=9; REGKEY.syndicate_war=1; | // STRATEGY FOR CENTER.. #9 Go to War | 1 |  |  |  |  |  |
| 1001 | 0 |  | REGKEY.syndicate_dealBroken=0; | // CLEAN CENTER STUFF FROM STRATEGY CALCS | 1 |  |  |  |  |  |
| 1001 | 0 |  | TEMP1=REGKEY.syndicate_strategy; | //Center Strategy is code <TEMP1>. | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio<60 | ZONEKEY.syndicate_attitude=1; | // ZONE ANALYSIS | 1 | 1 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_relation>50; dth(1,REGKEY.syndicate_ambition)<50; | REGKEY.syndicate_relation=REGKEY.syndicate_relation-1; | //SLOW DECLINE OF RELATION ABOVE 50 | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0 |  | There is a Crime Syndicate active within our territories. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0 | TEMP1=REGKEY.syndicate_leader | The Godfather of the <LOOKUPCHARLASTNAME=<TEMP1>> Syndicate is <LOOKUPCHARFIRSTNAME=<TEMP1>> <LOOKUPCHARLASTNAME=<TEMP1>>: |  |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0 | TEMP1=REGKEY.syndicate_leader | [[portrait::<TEMP1>,100]] |  |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0;REGKEY.syndicate_attitude==0 |  | Godfather's attitude is LAY LOW. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_Relation<1; | REGKEY.syndicate_Relation=1; |  | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_totalCrimeLevel>0; REGKEY.syndicate_attitude==1 |  | Godfather's attitude is LIGHT CRIME. | 1 |  |  | Crime Syndicate |  | 1 |
| 1001 | 0 | REGKEY.syndicate_relation<50; dth(1,REGKEY.syndicate_vengeance)<50; | REGKEY.syndicate_relation=REGKEY.syndicate_relation+1; | //SLOW INCREASE OF RELATION BELOW 50 | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>=2; REGKEY.syndicate_ambition>dth(3,100); REGKEY.syndicate_relation<=dth(5,20); REGKEY.syndicate_idealAttitude>=2; | REGKEY.syndicate_strategy=5; REGKEY.syndicate_deal=0; | // STRATEGY FOR CENTER.. #5 Deal is off the table | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_war>0; REGKEY.syndicate_idealAttitude<=2; dth(1,100)>66; | REGKEY.syndicate_war=0; | // Silently stop the war | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_dealBroken==1; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>0; TEMP1=REGKEY.syndicate_vengeance/3; REGKEY.syndicate_relation<=TEMP1; REGKEY.syndicate_idealAttitude<=2; | REGKEY.syndicate_dealBroken=0; REGKEY.syndicate_strategy=3; REGKEY.syndicate_deal=0; | // STRATEGY FOR CENTER.. #3 Break + Threaten | 1 |  |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio<6 | ZONEKEY.syndicate_attitude=3; | // ZONE ANALYSIS | 1 | 1 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio<=2 | ZONEKEY.syndicate_attitude=4; | // ZONE ANALYSIS | 1 | 1 |  |  |  |  |
| 1001 | 3 | ZONEKEY.syndicate_ratio>=60 | ZONEKEY.syndicate_attitude=0; | // ZONE ANALYSIS | 1 | 1 |  |  |  |  |
| 1001 | 3 |  | ZONEKEY.syndicate_IdealAttitude=ZONEKEY.syndicate_attitude; TEMP9=ZONEKEY.syndicate_IdealAttitude; | //Capo thinks Ideal Attitude in <ZONENAME> is <TEMP9>. | 1 | 1 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_war<1; ZONEKEY.syndicate_attitude>3; | ZONEKEY.syndicate_attitude=3; | // ZONE ATTITUDE | 1 | 1 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_dealBroken==1; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>0; TEMP1=REGKEY.syndicate_vengeance/3; REGKEY.syndicate_relation<=TEMP1; REGKEY.syndicate_idealAttitude>=3; | REGKEY.syndicate_dealBroken=0; REGKEY.syndicate_strategy=4; REGKEY.syndicate_deal=0; REGKEY.syndicate_war=1; | // STRATEGY FOR CENTER.. #4 Break + War | 1 |  |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_war==1; | ZONEKEY.syndicate_attitude=min(ZONEKEY.syndicate_attitude+1,4); | // ZONE ATTITUDE | 1 | 1 |  |  |  |  |
| 1001 | 3 | REGKEY.syndicate_attitude<ZONEKEY.syndicate_attitude; | ZONEKEY.syndicate_attitude=REGKEY.syndicate_attitude; | // ZONE ATTITUDE | 1 | 1 |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_crew; REGKEY.syndicate_totalcrews=REGKEY.syndicate_totalcrews+TEMP1; | // UPDATE CENTER TOTALS | 1 | 1 |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.pop+ZONEKEY.worker; TEMP1=TEMP1*ZONEKEY.syndicate_idealAttitude; REGKEY.syndicate_totalidealattitude=REGKEY.syndicate_totalidealattitude+TEMP1; | // UPDATE CENTER TOTALS | 1 | 1 |  |  |  |  |
| 1001 | 3 |  | TEMP1=(ZONEKEY.pop+ZONEKEY.worker); REGKEY.syndicate_totalpopulace=REGKEY.syndicate_totalpopulace+TEMP1; | // UPDATE CENTER TOTALS | 1 | 1 |  |  |  |  |
| 1001 | 0 |  | TEMP1=REGKEY.syndicate_totalIdealAttitude/REGKEY.syndicate_totalPopulace; REGKEY.syndicate_attitude=max(0,TEMP1); REGKEY.syndicate_idealAttitude=REGKEY.syndicate_attitude; | //Average Attitude in Zones is <TEMP1>. | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_deal==2 | REGKEY.syndicate_attitude=min(2, REGKEY.syndicate_attitude); | //Syndicate restrains it self. | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_dealBroken==1; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>0; TEMP1=REGKEY.syndicate_vengeance/2; REGKEY.syndicate_relation>TEMP1; | REGKEY.syndicate_dealBroken=0; REGKEY.syndicate_strategy=1; | // STRATEGY FOR CENTER.. #1 Polite note | 1 |  |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_strategy==0; REGKEY.syndicate_dealBroken==1; REGKEY.syndicate_war<1; REGKEY.syndicate_deal>0; TEMP1=REGKEY.syndicate_vengeance/3; REGKEY.syndicate_relation>TEMP1; | REGKEY.syndicate_dealBroken=0; REGKEY.syndicate_strategy=2; | // STRATEGY FOR CENTER.. #2 Threaten | 1 |  |  |  |  |  |
| 1001 | 3 |  | TEMP1=ZONEKEY.syndicate_attitude; | //Capo sets actual Attitude in <ZONENAME> to <TEMP1>. | 1 | 1 |  |  |  |  |
| 1001 | 0 | REGKEY.syndicate_deal==1 | REGKEY.syndicate_attitude=min(1, REGKEY.syndicate_attitude); | //Syndicate lies low. | 1 |  |  |  |  |  |
| 1002 | 0 | ROUND==1 | REGKEY.corp_relation=0 |  | 0 |  |  |  |  |  |
| 1002 | 0 | REGKEY.corp_active>0|REGKEY.corp_initialize>0 | exe(346,39,REGIMEID) |  | 0 |  |  |  |  |  |
| 1003 | 0 | ROUND==1 | REGKEY.cult_count=0 |  | 0 |  |  |  |  |  |
| 1003 | 0 | REGKEY.cult_active>0|REGKEY.cult_initialize>0 | exe(346,40,REGIMEID) |  | 0 |  |  |  |  |  |

