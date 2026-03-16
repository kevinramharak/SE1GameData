# `FLEX action card target logic` (`374`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `21` |
| Name | [SE_Fate](../) |
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
| [1003] | che(249,21,REGIMEID,1)>0 | No Techs left for this Stratagem to find | 1 |
| [1004] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1004)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [1005] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1005)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [1006] | che(249,19,HISID,0)<che(249,20,HISID); (che(249,19,HISID,1006)*3)<(che(249,20,HISID)-2); | Has to many Unit Feats to assign another one. | 1 |
| [1007] | ZONEKEY.unrest>0 | No Unrest in Zone. | 1 |
| [1008] | TARGETCHARSTAT.6==10; TARGETCHARSTAT.7>0; | Leader is not a Governor | 1 |
| [1010] | che(249,11,ZONEID,3111)<3 | Already has a level 3 of this Asset | 1 |
| [1010][1011][1012] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [1010][1011][1012] | ZONEKEY.city>0 | Has no city. | 1 |
| [1011] | che(249,11,ZONEID,3121)<3 | Already has a level 3 of this Asset | 1 |
| [1012] | che(249,11,ZONEID,3131)<3 | Already has a level 3 of this Asset | 1 |
| [1014] | TARGETWAR==0 | You are at war with this Regime. | 1 |
| [1015] | TARGETWAR==0 | You are at war with this Regime. | 1 |
| [1015] | TARGETCULTUREKEY.nodip<1 | Cannot play on Regime that is not open to diplomacy. | 1 |
| [1016][1017] | ZONEKEY.city>0 | Has no city. | 1 |
| [1018] | che(249,12,TARGETCHARID,1018)<1 | Already has received this Leader Feat. | 1 |
| [1019] | che(249,12,TARGETCHARID,1019)<1 | Already has received this Leader Feat. | 1 |
| [1020] | che(249,12,TARGETCHARID,1020)<1 | Already has received this Leader Feat. | 1 |
| [1021] | TARGETCHARSTAT.29>0 | Has no Corruption Level | 1 |
| [510] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [511] | REGKEY.credits>=2000 | You do not have 2000 Credits | 1 |
| [512][513][514] | ZONEKEY.city>0 | Has no city. | 1 |
| [522] | che(249,12,TARGETCHARID,522)<1 | Already has the Medal of Merit | 1 |
| [523] | REGKEY.credits>=300 | You do not have 300 Credits | 1 |
| [523] | che(249,12,TARGETCHARID,523)<1 | Already received a Commercial enterprise. | 1 |
| [524] | che(249,12,TARGETCHARID,524)<1 | Already has received an Estate. | 1 |
| [525][529][530][526][527][528] | che(249,4,ZONEID,REGIMEID)>0 | You have no Troops in Zone. | 1 |
| [525][529][530][526][527][528][531] | ZONEKEY.city>0 | Has no city. | 1 |
| [531] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [534] | TARGETCHARSTAT.13>0 | Selected Leader in unaligned. | 1 |
| [534] | REGIMEKEY.credits>=1000 | You do not have 1000 Credits | 1 |
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
| [581] | TARGETREGIMEID==REGIMEID; chk(249,49,ZONEID,REGIMEID)>0; | No friendly Mine present in Zone that can be extended. | 1 |
| [801][802][814] | che(249,7,REGIMEID)>0 | You have no populated zones with city. | 1 |
| [803] | che(249,11,ZONEID,301)<3 | Already have private industry level 3. | 1 |
| [803][804][805][807][945][946][947][948] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
| [803][804][805][807][945][946][947][948] | ZONEKEY.city>0 | Has no city. | 1 |
| [804] | che(249,9,ZONEID,8,999999)>0 | Zone does not have any mining operations with mining ease below level 9. | 1 |
| [806] | che(249,8,REGIMEID)>0 | You already have the maximum number of binary techs. | 1 |
| [808] | che(249,12,TARGETCHARID,808)<1 | Already has a Propaganda Assistant in retinue. | 1 |
| [809] | che(249,12,TARGETCHARID,809)<1 | Already has a Tacticus Genius in retinue. | 1 |
| [811][812][813] | che(249,7,REGIMEID)>0 | You have no populated zones with city. | 1 |
| [815][816][817][819][820][821][822][823] | ZONEKEY.city>0 | Has no city. | 1 |
| [815][816][817][819][820][821][822][823] | TARGETREGIMEID==REGIMEID | Is not a friendly zone. | 1 |
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
| [954] | che(249,12,TARGETCHARID,954)<1 | Already has received this Leader Feat. | 1 |
| [954] | TARGETCHARSTAT.37>=35 | Leader has CHA Stat lower than 35. | 1 |
| [XXXX] | ZONEKEY.militancy>=50 | Does not have a Militia with Militancy>=50 | 1 |

