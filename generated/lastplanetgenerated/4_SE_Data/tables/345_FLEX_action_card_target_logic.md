# `FLEX action card target logic` (`345`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Card ID list [][] | `Text` |
| `1` | Target IF Logic | `Text` |
| `2` | Text if not TRUE | `Text` |
| `3` | TRUE is 1 or 0 | `Text` |

### Data

| Card ID list [][] | Target IF Logic | Text if not TRUE | TRUE is 1 or 0 |
| --- | --- | --- | --- |
| [1] | REGREGKEY.dipRel==0 | Contact is already opened with target regime. | 1 |
| [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][31][32][33] | REGREGKEY.cardPlayed<ROUND | Already executed a stratagem on target regime. | 1 |
| [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][28][29][30][31][32][33] | TARGETMAJOR==1 | Target is not a MAJOR regime. | 1 |
| [10] | REGREGKEY.dipRes>1 | You are already doing scientific exchange with the target regime. | 0 |
| [10] | REGREGKEY.dipRes<1 | You need to start scientific cooperation with target regime first. | 0 |
| [100101] | ZONEKEY.syndicate_crimeLevel>0 | Is not a Zone with Crime Syndicate Activity. | 1 |
| [100101] | ZONEKEY.city>0 | Has no City. | 1 |
| [100101] | (ZONEKEY.pop+ZONEKEY.worker)>100 | Has less than 10K Populace. | 1 |
| [100101][100105][100106] | TARGETREGIMEID==REGIMEID | Is not a friendly Zone. | 1 |
| [100102] | REGKEY.syndicate_relation>0 | No Crime Syndicate is active in your Regime. | 1 |
| [100103] | REGKEY.syndicate_deal==0 | Not possible if you already have a Deal. | 1 |
| [100103] | REGKEY.syndicate_relation>0 | No Crime Syndicate is active in your Regime. | 1 |
| [100103][100101][100102][100104] | REGKEY.syndicate_war<1 | Not possible while Crime Syndicate is on a war footing with you. | 1 |
| [100104] | REGKEY.syndicate_deal<2 | Not possible if you already have a Kickback Deal. | 1 |
| [100104] | REGKEY.syndicate_relation>0 | No Crime Syndicate is active in your Regime. | 1 |
| [100105][100106] | ZONEKEY.syndicate_crimeLevel>0 | Is not a Zone with Crime Syndicate Activity. | 1 |
| [100105][100106] | ZONEKEY.city>0 | Has no City. | 1 |
| [100107] | che(249,12,TARGETCHARID,808)<1 | Already has a Consiglieri in retinue. | 1 |
| [100109] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100101)*8)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [100110] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100102)*4)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [100201] | REGKEY.corp_active>0 | Corporation is not yet active or no longer active. | 1 |
| [100201] | REGKEY.corp_meeting<1 | You have already scheduled a meeting. | 1 |
| [100202] | che(249,12,TARGETCHARID,100201)<1 | Already is a Board Member. | 1 |
| [100203] | ZONEKEY.corp_control>0 | Corporation has no Control in Zone. | 1 |
| [100203][100208][100209][100210] | TARGETREGIMEID==REGIMEID | Is not a friendly Zone. | 1 |
| [100205] | che(249,8,REGIMEID,1)>0 | No breakthrough possible without discovered Techs that are still at 0 research progress. | 1 |
| [100206] | che(249,21,REGIMEID,1)>0 | No discoveries possible with the current Tech base. | 1 |
| [100209] | ZONEKEY.syndicate_crew>0 | No Syndicate Crews active in Zone. | 1 |
| [100210] | ZONEKEY.unrest>0 | No Unrest in Zone. | 1 |
| [1003] | che(249,21,REGIMEID,1)>0 | No Techs left for this Stratagem to find | 1 |
| [100301] | REGKEY.cult1_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100302] | REGKEY.cult2_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100303] | REGKEY.cult3_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100304] | REGKEY.cult4_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100305] | REGKEY.cult5_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100306] | REGKEY.cult6_meeting<1 | You already have a meeting scheduled with this Cult. | 1 |
| [100307] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100301)*10)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [100308] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100302)*10)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [100309] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100303)*10)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [100340] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100304)*5)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [100341] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100305)*10)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [100342] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,100306)*10)<(che(249,20,HISID)-2); | Has no space for this Unit Feat due to already having the maximum. | 1 |
| [1004] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1004)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [100401] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.exploreMeeting<1; | You already have an Exploration Contract meeting scheduled with this Maritime Trade House. | 1 |
| [100401][100402][100404][100405][100406][100407][100408][100409][100411] | chk(249,42,ZONEID,REGIMEID,3)>0 | If there is a Maritime Trade House active in this Zone we are not in communicatons with them. | 1 |
| [100402] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.transportMeeting<1; | You already have a Transport Contract meeting scheduled with this Maritime Trade House. | 1 |
| [100403] | TRADEID=chk(249,42,ZONEID,REGIMEID,13); TRADEREGKEY.comm<1; TRADEREGKEY.forceContact<1; | The Maritime Trade House will already contact you next round. Or you are already in communications with them. | 1 |
| [100403][100412][100413][100414] | chk(249,42,ZONEID,0,6)>0; chk(249,42,ZONEID,0,7)>0; | You cannot pick a land Zone or a Zone without an MTH as the target for this Stratagem. | 1 |
| [100404] | chk(249,42,ZONEID,REGIMEID,10)>0 | Selected Sea Zone does not have any coastal Hex controlled by you, without port and with Naval Logistical Points. | 1 |
| [100404] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.portMeeting<1; | You already have a makeshift port meeting scheduled with this Maritime Trade House. | 1 |
| [100405] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.policyMeeting<1; | You already have a Policy Meeting scheduled with this MTH. | 1 |
| [100405] | chk(249,42,TRADEID,REGIMEID,4)>0 | You do not own any stocks in this MTH. Hence no Policy Meeting can be scheduled. | 1 |
| [100406] | REGKEY.credits>=2000 | You do not have 2000 Credits | 1 |
| [100407][100408] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); chk(249,42,TRADEID,REGIMEID,4)>0 | You do not own any stocks in this MTH. | 1 |
| [100410] | chk(249,42,ZONEID,0,7)<1 | You need to pick a Sea Zone without an MTH. | 1 |
| [100410] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [100414] | TRADEID=chk(249,42,ZONEID,REGIMEID,7); chk(249,42,TRADEID,REGIMEID,11)>1; | Selected MTH does not have 2 Sea Zones or more. | 1 |
| [100415] | chk(249,42,ZONEID,REGIMEID,17)>0 | Zone does not border a MTH you are in communications with. | 1 |
| [100415] | REGKEY.credits>=100 | You do not have 100 Credits. | 1 |
| [1005] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1005)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [1006] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1006)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [1007] | ZONEKEY.unrest>0 | No Unrest in Zone. | 1 |
| [1008] | TARGETCHARSTAT.6==10; TARGETCHARSTAT.7>0; | Leader is not a Governor | 1 |
| [101][102][103][105][106][1] | TARGETCULTURE>=121;TARGETCULTURE<=129; | Cannot target alien natives with this Stratagem. | 0 |
| [101][102][103][105][106][107][108] | TARGETWAR==0 | You must be at peace with target regime. | 1 |
| [101][102][103][105][106][107][108] | REGREGKEY.cardPlayed<ROUND | You already executed a stratagem on this target regime. | 1 |
| [101][102][103][105][106][107][108] | TARGETMAJOR==2 | Target is not a MINOR regime. | 1 |
| [1010] | che(249,11,ZONEID,3111)<3 | Already has a level 3 of this Asset | 1 |
| [1010][1011][1012] | ZONEKEY.city>0 | Has no city. | 1 |
| [1010][1011][1012] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [1011] | che(249,11,ZONEID,3121)<3 | Already has a level 3 of this Asset | 1 |
| [1012] | che(249,11,ZONEID,3131)<3 | Already has a level 3 of this Asset | 1 |
| [1014] | TARGETWAR==0 | You are at war with this Regime. | 1 |
| [1015] | TARGETWAR==0 | You are at war with this Regime. | 1 |
| [1015] | TARGETCULTUREKEY.nodip<1 | Cannot play on Regime that is not open to diplomacy. | 1 |
| [1016][1017] | ZONEKEY.city>0 | Has no city. | 1 |
| [1018] | che(249,12,TARGETCHARID,1018)<1 | Already has received this Leader Feat. | 1 |
| [1019] | che(249,12,TARGETCHARID,1019)<1 | Already has received this Leader Feat. | 1 |
| [102] | TARGETREGKEY.protector<1 | Target regime already has a protector. | 1 |
| [102][103] | TARGETREGKEY.master<1 | Target regime already has a master. | 1 |
| [102][103] | chk(249,40,TARGETREGIMEID)<1 | Target is already at war with a Major. | 1 |
| [1020] | che(249,12,TARGETCHARID,1020)<1 | Already has received this Leader Feat. | 1 |
| [1021] | TARGETCHARSTAT.29>0 | Has no Corruption Level | 1 |
| [103] | (TARGETREGKEY.protector<1 | TARGETREGKEY.protector==REGIMEID); | Target regime has another protector than you. | 1 |
| [104] | TARGETWAR==1|REGREGKEY.dipClear<1 | You can only propose peace if you are at war with target regime. | 1 |
| [104] | TARGETMAJOR==2 | Target is not a MINOR regime. | 1 |
| [104] | REGREGKEY.cardPlayed<ROUND | Already executed a stratagem on target regime. | 1 |
| [105][106] | (TARGETREGKEY.master==REGIMEID | TARGETREGKEY.protector==REGIMEID); | Your neither the master or the protector of this regime. | 1 |
| [107][108] | TARGETCULTURE>=121;TARGETCULTURE<=129; | This is not a native alien regime. | 1 |
| [11] | REGREGKEY.dipRes<2 | You need to start scientific exchange with target regime first. | 0 |
| [11] | REGREGKEY.dipRes>2 | You already in a scientific joint effort with the target regime. | 0 |
| [11][14] | REGREGKEY.relation >=70 | You must have at least a relation score of 70 points with target regime. | 1 |
| [12] | REGREGKEY.dipRes>0 | You need to have some sort of scientific cooperation in place with target regime. | 1 |
| [1201] | TARGETCHARSTAT.15==1 | Target character is not of the male sex. | 1 |
| [13] | REGREGKEY.dipPact==0 | You already have a non-agression pact with target regime. | 1 |
| [13] | STORYMOD.1>0 | TARGETREGIMESTAT.13<1; | Regime does not have a Faction in power that supports such as pact. | 1 |
| [14] | REGREGKEY.dipPact<1 | You first need to have non-agression pact with target regime. | 0 |
| [14] | REGREGKEY.dipPact>1 | You already have a friendship pact with target regime. | 0 |
| [14] | STORYMOD.1>=25 | TARGETREGIMESTAT.13<1; | Regime does not have a Faction in power that supports such as pact. | 1 |
| [15] | STORYMOD.1>=50 | TARGETREGIMESTAT.13<1; | Regime does not have a Faction in power that supports such as pact. | 1 |
| [15] | REGREGKEY.relation >=80 | You must have at least a relation score of 70 points with target regime. | 1 |
| [15] | REGREGKEY.dipPact>2 | You already have a victory pact in place with target regime. | 0 |
| [15] | REGREGKEY.dipPact<2 | You first need to have a friendship pact in place with target regime. | 0 |
| [16] | REGREGKEY.dipPact>0 | You need to have some sort of pact, at least non-agression, in place with target regime. | 1 |
| [2] | REGREGKEY.dipRel<1 | You have not opened contacts yet with target regime. | 0 |
| [2] | REGREGKEY.dipRel>1 | You already have an embassy in the target regime. | 0 |
| [2] | REGREGKEY.relation >=30 | You must have at least a relation score of 30 points with target regime. | 1 |
| [201] | REGZONEKEY.recon>=0 | You have no recon on zone. | 1 |
| [201][202][203] | TARGETREGIMEID!=SOURCEREGIMEID | You cannot target yourself. | 1 |
| [201][202][203] | ZONESTAT.1<2 | You can only target Land Zones | 1 |
| [202] | REGZONEKEY.recon>=0 | You have no recon on zone. | 1 |
| [203] | REGZONEKEY.recon>=0 | You have no recon on zone. | 1 |
| [25][32][49] | TARGETWAR==0 | You can only play if at peace with target regime. | 1 |
| [26] | REGREGKEY.relation >=25 | You must have at least a relation score of 25 points with target regime. | 1 |
| [26] | TARGETWAR==1 | You can only propose peace if you are at war with target regime. | 1 |
| [27] | TARGETWAR==0 | You must be at peace with target regime in order to declare war. | 1 |
| [27] | TARGETMAJOR==1 | Target is not a MAJOR regime. | 1 |
| [28] | REGKEY.credits>=400 | You need at least 400 credits to make this gift. | 1 |
| [28][29][30] | REGREGKEY.aiStoryMode<4 | n/a | 1 |
| [29] | REGKEY.credits>=1000 | You need at least 1000 credits to make this gift. | 1 |
| [3] | REGREGKEY.dipRel>2 | You already have a cultural exchange program in place with target regime. | 0 |
| [3] | REGREGKEY.dipRel<2 | You need to have an embassy in the targer regime. | 0 |
| [3][7][10][13] | REGREGKEY.relation >=60 | You must have at least a relation score of 60 points with target regime. | 1 |
| [30] | REGKEY.credits>=2500 | You need at least 2500 credits to make this gift. | 1 |
| [302] | REGKEY.incomeTax<80 | Income Tax is at the maximum 80%. | 1 |
| [31] | TARGETMAJOR==1 | Target is not a MAJOR regime. | 1 |
| [31][32] | TARGETREGIMESTAT.13>0 | Target is not an AI controlled regime. | 1 |
| [32] | REVREGREGKEY.aiStoryMode>=1; REVREGREGKEY.aiStoryMode<=2; | You can only target a Major Regime that sees itself as a Friend or an Ally. | 1 |
| [33] | TARGETWAR==1 | You can only make an ouverture on a Regime you are at war with. | 1 |
| [4] | (REGREGKEY.dipRel>1) | (REGREGKEY.dipRel==1 & REGREGKEY.dipTrade==0 & REGREGKEY.dipRes==0 & REGREGKEY.dipPact==0) | You can only break contact with target regime if you have no trade, research or pact still intact. | 1 |
| [401][402][403][404] | TARGETMAJOR==1 | TARGETMAJOR==2  | TARGETMAJOR==4 | Target is neither a minor, neither a major with whom you have a trade relation. | 1 |
| [49] | TARGETMAJOR==2|TARGETMAJOR==3 | Target is not a MINOR regime. | 1 |
| [5] | REGREGKEY.dipTrade==0 | You are already trading with target regime. | 1 |
| [5] | REGREGKEY.relation >=40 | You must have at least a relation score of 40 points with target regime. | 1 |
| [5][6][7][9][10][11][13][14][15] | REGREGKEY.dipRel>0 | You need to have diplomatic contact with target regime. | 1 |
| [5][6][7][9][10][11][13][14][15][2][3] | TARGETWAR<1 | You are not at peace with this regime. | 1 |
| [510] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [511] | REGKEY.credits>=2000 | You do not have 2000 Credits | 1 |
| [512][513][514] | ZONEKEY.city>0 | Has no city. | 1 |
| [522] | che(249,12,TARGETCHARID,522)<1 | Already has the Medal of Merit | 1 |
| [523] | che(249,12,TARGETCHARID,523)<1 | Already received a Commercial enterprise. | 1 |
| [523] | REGKEY.credits>=300 | You do not have 300 Credits | 1 |
| [524] | che(249,12,TARGETCHARID,524)<1 | Already has received an Estate. | 1 |
| [525][529][530][526][527][528] | che(249,4,ZONEID,REGIMEID)>0 | You have no Troops in Zone. | 1 |
| [525][529][530][526][527][528][531] | ZONEKEY.city>0 | Has no city. | 1 |
| [531] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [534] | REGIMEKEY.credits>=1000 | You do not have 1000 Credits | 1 |
| [534] | TARGETCHARSTAT.13>0 | Selected Leader in unaligned. | 1 |
| [535] | TARGETCHARSTAT.28>0 | Has not embezzled any Credits | 1 |
| [536][537][538][539][542][543][581][561] | ZONEKEY.city>0 | Has no city. | 1 |
| [536][537][538][539][542][561] | ZONEKEY.popLoyalty>=10 | Loyalty is lower than 10. | 1 |
| [544] | REGKEY.credits>=100 | You do not have 100 Credits | 1 |
| [545] | REGKEY.credits>=200 | You do not have 200 Credits | 1 |
| [546] | REGKEY.credits>=250 | You do not have 250 Credits | 1 |
| [546][547][548][549] | TARGETCHARSTAT.6==1 | Selected Leader is not in the Reserve Pool. | 1 |
| [547][561] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [548] | REGKEY.credits>=1000 | You do not have 1000 Credits | 1 |
| [561] | ZONEKEY.pop>100 | Zone has less than 10.000 Population. | 1 |
| [562] | TARGETCHARSTAT.83<4 | Leader already has maximum Rank. | 1 |
| [563] | TARGETCHARKEY.rankForLife<1; | Leader has a Rank-for-Life guarantee. | 1 |
| [563] | TARGETCHARSTAT.83>0; | Leader has no Rank. | 1 |
| [581] | TARGETREGIMEID==REGIMEID; chk(249,49,ZONEID,REGIMEID)>0; | No friendly Mine present in Zone that can be extended. | 1 |
| [6] | REGREGKEY.dipTrade>1 | You already have free trade with target regime. | 0 |
| [6] | REGREGKEY.dipTrade<1 | You need to have a trade relation with target regime to propose free trade. | 0 |
| [6][9] | REGREGKEY.relation >=50 | You must have at least a relation score of 50 points with target regime. | 1 |
| [601][602][603][604][605][606][607][608][609][610][611][612][613][614][615][616][617][618][619][620][621][622][623][624] | chk(127,HISID,49)<ROUND | Already played a Posture on this HQ this round. | 1 |
| [7] | REGREGKEY.dipTrade>2 | You already have fee movement of people with target regime. | 0 |
| [7] | REGREGKEY.dipTrade<2 | You need to have free trade relation with target regime. | 0 |
| [701][702][703][704][705][706][707][708][709] | REGREGKEY.dipPact==0 | You can only target regimes where you have no military pact with. | 1 |
| [701][702][703][704][705][706][707][708][709] | TARGETMAJOR==1 | Target is not a MAJOR regime. | 1 |
| [701][704][707] | REGZONEKEY.recon>=2 | You need at least 2 recon points on zone. | 1 |
| [702][705][708] | REGZONEKEY.recon>=5 | You need at least 5 recon points on zone. | 1 |
| [703][706][709] | REGZONEKEY.recon>=10 | You need at least 10 recon points on zone. | 1 |
| [8] | REGREGKEY.dipTrade>0 | You need to have at least a trade relation with target regime. | 1 |
| [801][802][814] | che(249,7,REGIMEID)>0 | You have no populated zones with city. | 1 |
| [803] | che(249,11,ZONEID,301)<3 | Already have private industry level 3. | 1 |
| [803][804][805][807][945][946][947][948] | ZONEKEY.city>0 | Has no city. | 1 |
| [803][804][805][807][945][946][947][948] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [804] | che(249,9,ZONEID,8,999999)>0 | Zone does not have any mining operations with mining ease below level 9. | 1 |
| [806] | che(249,8,REGIMEID)>0 | You already have the maximum number of binary techs. | 1 |
| [808] | che(249,12,TARGETCHARID,808)<1 | Already has a Propaganda Assistant in retinue. | 1 |
| [809] | che(249,12,TARGETCHARID,809)<1 | Already has a Tacticus Genius in retinue. | 1 |
| [811][812][813] | che(249,7,REGIMEID)>0 | You have no populated zones with city. | 1 |
| [815][816][817][819][820][821][822][823] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [815][816][817][819][820][821][822][823] | ZONEKEY.city>0 | Has no city. | 1 |
| [817] | che(249,11,ZONEID,841)<3 | Already has an arena level 3. | 1 |
| [819] | che(249,11,ZONEID,881)<3 | Already has a school level 3. | 1 |
| [820] | che(249,11,ZONEID,861)<3 | Already has a casino level 3. | 1 |
| [824] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,824)*10)<(che(249,20,HISID)-9); | Has to many Unit Feats to assign another one. | 1 |
| [825] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,825)*10)<(che(249,20,HISID)-9); | Has to many Unit Feats to assign another one. | 1 |
| [826] | che(249,12,TARGETCHARID,826)<1 | Already has received this Leader Feat. | 1 |
| [827] | che(249,12,TARGETCHARID,827)<1 | Already has received this Leader Feat. | 1 |
| [830] | che(249,18,ZONEID,0,830)<1; | Zone already has this Hex Perk. | 1 |
| [830][831][839][840] | che(249,18,ZONEID,0,0)<che(249,17,ZONEID) | No place for another Hex Perk. | 1 |
| [830][831][839][840][1007][1009][1010][1011][1012][1016][1017][510][511][512][513][514][525][526][527][528][529][530][531][536][537][538][539][540][541][542][651][543][829][581][561] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [831] | che(249,18,ZONEID,0,831)<1; | Zone already has this Hex Perk. | 1 |
| [832] | che(249,7,REGIMEID)>0 | No Zones with cities present in your Regime | 1 |
| [833] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,833)*10)<(che(249,20,HISID)-9); | Has to many Unit Feats to assign another one. | 1 |
| [834] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,834)*10)<(che(249,20,HISID)-9); | Has to many Unit Feats to assign another one. | 1 |
| [835] | che(249,12,TARGETCHARID,835)<1 | Already has received this Leader Feat. | 1 |
| [836] | che(249,12,TARGETCHARID,836)<1 | Already has received this Leader Feat. | 1 |
| [839] | che(249,18,ZONEID,0,839)<1; | Zone already has this Hex Perk. | 1 |
| [840] | che(249,18,ZONEID,0,840)<1; | Zone already has this Hex Perk. | 1 |
| [841][1007][1009] | che(249,7,REGIMEID)>0 | No Zones with cities present in your Regime | 1 |
| [9] | REGREGKEY.dipRes==0 | You are already scientifically cooperating with target regime. | 1 |
| [901] | che(249,12,TARGETCHARID,901)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [902] | che(249,12,TARGETCHARID,902)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [903] | che(249,12,TARGETCHARID,903)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [904] | che(249,12,TARGETCHARID,904)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [905] | che(249,12,TARGETCHARID,905)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [906] | che(249,12,TARGETCHARID,906)<1 | Already has a similar ancient Artifact in possession. | 1 |
| [911] | che(249,19,HISID,0)<che(249,20,HISID) | Has to many Unit Feats to assign another one. | 1 |
| [912] | che(249,19,HISID,0)<che(249,20,HISID) | Has to many Unit Feats to assign another one. | 1 |
| [913] | che(249,19,HISID,0)<che(249,20,HISID) | Has to many Unit Feats to assign another one. | 1 |
| [914] | che(249,19,HISID,0)<che(249,20,HISID) | Has to many Unit Feats to assign another one. | 1 |
| [915] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,915)*5)<(che(249,20,HISID)-4); | Has to many Unit Feats to assign another one. | 1 |
| [916] | che(249,19,HISID,0)<che(249,20,HISID) | Has to many Unit Feats to assign another one. | 1 |
| [921] | che(249,11,ZONEID,3101)<1 | Already has this ancient Asset | 1 |
| [921][922][923][924][925][926] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [921][922][923][924][925][926][829] | ZONEKEY.city>0 | Has no city. | 1 |
| [922] | che(249,11,ZONEID,3102)<1 | Already has this ancient Asset | 1 |
| [923] | che(249,11,ZONEID,3103)<1 | Already has this ancient Asset | 1 |
| [924] | che(249,11,ZONEID,3104)<1 | Already has this ancient Asset | 1 |
| [925] | che(249,11,ZONEID,3105)<1 | Already has this ancient Asset | 1 |
| [926] | che(249,11,ZONEID,3106)<1 | Already has this ancient Asset | 1 |
| [930] | che(249,12,TARGETCHARID,930)<1 | Already has received this Leader Feat. | 1 |
| [931] | che(249,12,TARGETCHARID,931)<1 | Already has received this Leader Feat. | 1 |
| [932] | che(249,12,TARGETCHARID,932)<1 | Already has received this Leader Feat. | 1 |
| [933] | che(249,12,TARGETCHARID,933)<1 | Already has received this Leader Feat. | 1 |
| [934] | che(249,12,TARGETCHARID,934)<1 | Already has received this Leader Feat. | 1 |
| [935] | TECH.401<100 | You already have this Tech | 1 |
| [936] | TECH.402<100 | You already have this Tech | 1 |
| [937] | TECH.403<100 | You already have this Tech | 1 |
| [938] | TECH.404<100 | You already have this Tech | 1 |
| [939] | TECH.405<100 | You already have this Tech | 1 |
| [940] | TECH.406<100 | You already have this Tech | 1 |
| [941] | TECH.407<100 | You already have this Tech | 1 |
| [942] | TECH.408<100 | You already have this Tech | 1 |
| [943] | TECH.409<100 | You already have this Tech | 1 |
| [944] | TECH.410<100 | You already have this Tech | 1 |
| [949] | che(249,12,TARGETCHARID,949)<1 | Already has received this Leader Feat. | 1 |
| [949] | TARGETCHARSTAT.20>=90 | Leader has relation lower than 90. | 1 |
| [949] | TARGETCHARSTAT.38>=35 | Leader has INT Stat lower than 35. | 1 |
| [951] | che(249,7,REGID,1,0)>0 | You have no Zones. | 1 |
| [954] | TARGETCHARSTAT.37>=35 | Leader has CHA Stat lower than 35. | 1 |
| [954] | che(249,12,TARGETCHARID,954)<1 | Already has received this Leader Feat. | 1 |
| [XXXX] | ZONEKEY.militancy>=50 | Does not have a Militia with Militancy>=50 | 1 |

