## `SE_Data.'Flex Story Triggers'` (id = `191`)

### Columns (`29`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Story ID | Text 
| `1` | Z-Level | Text 
| `2` | Name Label | Text 
| `3` | Type | Text 
| `4` | Type 2 | Text 
| `5` | Class (GM) | Text 
| `6` | IF logic | Text 
| `7` | IF hardcoded check | Text 
| `8` | Run event ID | Text 
| `9` | Run event lib name | Text 
| `10` | Run hardcoded | Text 
| `11` | UDS tab ID | Text 
| `12` | UDS sub tab ID | Text 
| `13` | UDS z value | Text 
| `14` | Question | Text 
| `15` | DynamicEv? | Text 
| `16` | StoryGroup Id | Text 
| `17` | ComplexStory Id | Text 
| `18` | Complex Special Moment | Text 
| `19` | Label for Hooks | Text 
| `20` | Max Runs | Text 
| `21` | Max1perInstanceWeight | Text 
| `22` | Story Mode | Text 
| `23` | Max Runs per Instance ID | Text 
| `24` | New Col | Text 
| `25` | New Col | Text 
| `26` | Check Hide Dec | Text 
| `27` | No End Turn | Text 
| `28` | Variant | Text 

### Rows (`405`)

| Story ID | Z-Level | Name Label | Type | Type 2 | Class (GM) | IF logic | IF hardcoded check | Run event ID | Run event lib name | Run hardcoded | UDS tab ID | UDS sub tab ID | UDS z value | Question | DynamicEv? | StoryGroup Id | ComplexStory Id | Complex Special Moment | Label for Hooks | Max Runs | Max1perInstanceWeight | Story Mode | Max Runs per Instance ID | New Col | New Col | Check Hide Dec | No End Turn | Variant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1|1|Cabinet Overview|0|0|1|||||201|2|30|11||1||||||||||||||
|2|1|New Organisation Option|0|0|1|(REGIMEKEY.newOrgConfirm<1)|((REGIMEKEY.newOrgConfirm+6)<ROUND)|101|||101|1|50|1||1||||||||||REGIMEKEY.newOrgConfirm=ROUND;||||
|3|1|<ORG> Needs Leader|1|0|1||102|||102|1|50|2||1||||||||||||||
|4|1|Empire Dashboard|0|0|1|||||202|2|30|1||1||||||||||||||
|5|1|<ORG> Overview|1|0|1||203|||203|2|66|ORG||1||||||||||||||
|6|0|Rules Budget|0|0|1|||||301|0|0|0||0||||||||||||||
|7|0|Task Progress|1|0|1|||||302|0|0|0||0||||||||||||||
|8|1|<ORG> Set Task Priorities|1|0|1|(ORGKEY.lastround==0) | (ORGKEY.lastround+12 <= ROUND)||||103|1|50|3||1||||||||||ORGKEY.lastround=ROUND;||||
|9|1|<ORG> Set Research Objective|1|0|1|ORGKEY.confirmResearch==0|104|||104|1|50|4||1||||||||||ORGKEY.confirmResearch=ROUND;||||
|10|1|Set National Budget|0|0|1|(REGIMEKEY.orgCount>1)&((REGIMEKEY.confirmBudget==0)|((REGIMEKEY.confirmBudget+6)<=ROUND))||||107|1|40|0||1||||||||||REGIMEKEY.confirmBudget=ROUND;||||
|11|1|Set Design Target for <ORG>|1|0|1||106|||106|1|50|5||1||||||||||ORGKEY.confirmDevelopment=ROUND;||||
|12|1|Set Operationalize OOB Target|1|0|1|ORGKEY.confirmOob==0|105|||105|1|50|6||1||||||||||ORGKEY.confirmOob=ROUND;||||
|13|1|Appoint Commander|6|0|1||601|||601|1|80|1||1||||||||||||||
|14|1|Appoint Governor|3|0|1||602|||602|1|60|1||1||||||||||||||
|15|1|Personnel Overview|0|0|1|||||204|2|30|12||1||||||||||||||
|16|1|Set Budget for <ORG>|1|0|1|((ORGKEY.confirmBudget==0)|((ORGKEY.confirmBudget+6)<=ROUND))|603|||603|1|50|7||1||||||||||ORGKEY.confirmBudget=ROUND;||||
|18|1|Zone Orders|3|0|1|ZONEORDERROUND<=0|604|||604|1|60|2||1||||||||||ZONEORDERROUND=ROUND;||||
|62||Zone Inventory Orders|3|0|1|0==1||||924|1|60|2||1||||||||||||||
|19|1|Feats and Bonus Overview|0|0|1|||||205|2|30|21||1||||||||||||||
|20|1|Profile Overview|0|0|1|||||206|2|30|31||1||||||||||||||
|21|1|Technology Overview|0|0|1|||||207|2|30|22||1||||||||||||||
|22|1|Formation Types Overview|0|0|1|||||208|2|30|23||1||||||||||||||
|23|1|Models Overview|0|0|1|||||209|2|30|24||1||||||||||||||
|24|1|Treasury cashflow overview|0|0|1|||||210|2|30|25||1||||||||||||||
|25|1|Model Evaluation|0|0|1|0==1||||701|1|50|11||1||||||||||REGIMEKEY.confirmModelEval=REGIMEKEY.confirmModelEval+12;||||
|26|1|Victory Overview|0|0|1|||||211|2|30|33||1||||||||||||||
|27|1|Appoint Advisor|0|0|1||605|||605|1|40|2||1||||||||||||||
|28|1|Set Salaries|0|0|1|REGIMEKEY.confirmSalaries<=ROUND||||702|1|40|3||1||||||||||REGIMEKEY.confirmSalaries=REGIMEKEY.confirmSalaries+12;||||
|29|1|Stratagem Generation Overview|0|0|1|||||212|2|30|34||1||||||||||||||
|30|1|Factions Overview|0|0|1|||||703|2|30|13||1||||||||||||||
|31|1|Trade Overview (debug)|0|0|1|ROUND>1; DEBUG==1;||||704|2|30|39||0|||||||2|||||||
|32|1|New Demand|||1||801|||801|1|40|0||0|||||||2|||||1||
|33|1|Demand Overview|||1|||||802|1|30|14||1||||||||||||||
|34|1|Demand Resolved|||1||803|||803|2|10|0||0|||||||2|||||||
|35|1|Losing a Regime Feat|||1|||||804|2|10|||0|||||||2|||||||
|36|1|Gained a Regime Feat|||1|||||805|2|10|||0|||||||2|||||||
|37|1|Faction dissatisfied|||1|||||806|2|10|||0|||||||2|||||||
|38|1|<TARGETREGIMENAME> Overview|2||1|REGREGKEY.recon>0; TARGETREGIMESTAT.1<=2; TARGETREGKEY.size>0|TARGETREGIMESTAT.1>1;||||821|2|75|1||1||||||||||||||
|39|1|<TARGETREGIMENAME> Trade Details|2||1|REGREGKEY.recon>=10 | REGREGKEY.diptrade>0; TARGETREGIMESTAT.1>=1;TARGETREGKEY.size>0|TARGETREGIMESTAT.1>1;||||822|2|75|2||1||||||||||||||
|40|1|<TARGETREGIMENAME> Economy Details|2||1|REGREGKEY.recon>=10 | REGREGKEY.diprel>1; TARGETREGIMESTAT.1==1;TARGETREGKEY.size>0|TARGETREGIMESTAT.1>1;||||823|2|75|3||1||||||||||||||
|41|1|<TARGETREGIMENAME> Military Details|2||1|REGREGKEY.recon>=50 | REGREGKEY.dippact>0; TARGETREGIMESTAT.1==1;TARGETREGKEY.size>0|TARGETREGIMESTAT.1>1;||||824|2|75|4||1||||||||||||||
|42|1|<TARGETREGIMENAME> Tech Details|2||1|REGREGKEY.recon>=30 | REGREGKEY.dipres>0; TARGETREGIMESTAT.1==1;TARGETREGKEY.size>0|TARGETREGIMESTAT.1>1;||||825|2|75|5||1||||||||||||||
|65|1|<REGIMENAME> Overview|0||1|||||821|2|75|91||1||||||||||||||
|66|1|<REGIMENAME> Trade Details|0||1|||||822|2|75|92||1||||||||||||||
|67|1|<REGIMENAME> Economy Details|0||1|||||823|2|75|93||1||||||||||||||
|68|1|<REGIMENAME> Military Details|0||1|||||824|2|75|94||1||||||||||||||
|69|1|<REGIMENAME> Tech Details|0||1|||||825|2|75|95||1||||||||||||||
|43|1|Stratagem Encyclopedia|0|0|1|||||901|2|77|21||1||||||||||||||
|44|1|Zone Overview|0|0|1|||||902|2|70|1||1||||||||||||||
|45|1|Faction Candidate|||1||831|||831|2|40|0||0||||||||||||1||
|46|1|Decision Archive|||1|||||903|2|30|34||1||||||||||||||
|47|1|Skill Usage (debug)|||1|DEBUG==1||||904|2|30|39||1||||||||||||||
|48|1|Trade Report|||1|||||905|2|30|44||1||||||||||||||
|49|1|HQ Overview|0|0|1|||||907|2|73|1||1||||||||||||||
|50|1|Urgent Issues|0|0|1|||||908|2|30|2||1||||||||||||||
|51|1|Spies Overview|||1|||||909|2|30|46||1||||||||||||||
|52|1|Policy Speech|||1||910|||910|1|40|0||0|||||||2|||||1||
|53|1|Prospecting Overview|||1|||||911|2|30|47||1||||||||||||||
|54|1|Mining Overview|||1|||||912|2|30|47||1||||||||||||||
|55|1|Archeology Overview|||1|||||913|2|30|47||1||||||||||||||
|56|1|Construction Overview|||1|||||914|2|30|47||1||||||||||||||
|57|1|Air Bridge Overview|||1|chk(261,1)>0||||915|2|30|47||1||||||||||||||
|58|1|Create Custom Formation Type|1||1||916|||916|1|50|7||1||||||||||||||
|59|1|Zone Merging|3||1|0==1||||606|1|60|2||1||||||||||||||
|60|1|MTH Overview|||1|chk(261,2)>0||||922|2|68|7||1||||||||||||||
|61|1|MTH Contracts|||1|chk(261,2)>0||||923|2|68|8||1||||||||||||||
|63|1|<ORG> Discovery Focus|1||1|0==1||||931|1|50|5||1||||||||||||||
|64|1|Extend Mine|3||1|ZONEKEY.extendMine==1||||932|1|60|3||1||||||||||||||
|70|1|Law Vote|||1|chk(261,3)>0; REGKEY.voteType>0;||||933|1|40|0||1|||||||2|||||1||
|71|1|Laws Overview|||1|chk(261,3)>0||||934|2|30|17||1||||||||||||||
|72|1|Debug Dashboard|0|0|1|chk(261,3)>0;chk(261,999)>0;||||935|2|30|2||1||||||||||||||
|73|1|Empire Budget|||1|||||213|2|30|1||1||||||||||||||
|74|1|Political System Report|||1|chk(261,3)>0||||936|2|30|16||1||||||||||||||
|75|1|Virtus Report|||1|chk(261,3)>0||||937|2|30|16||1||||||||||||||
|76|1|Political Stratagems Report|||1|chk(261,3)>0||||938|2|30|16||1||||||||||||||
|101|1|Zone City Upgrade|3|0|0|(ZONEKEY.city==1) & (((ZONEKEY.worker+ZONEKEY.pop)>250) & (ZONEKEY.levelAsk<ROUND))||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|102|1|Zone City Upgrade|3||0|(ZONEKEY.city==2) & (((ZONEKEY.worker+ZONEKEY.pop)>500) & (ZONEKEY.levelAsk<ROUND))||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|103|1|Zone City Upgrade|3||0|(ZONEKEY.city==3) & (((ZONEKEY.worker+ZONEKEY.pop)>1000) & (ZONEKEY.levelAsk<ROUND))||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|104|1|Zone City Upgrade|3||0|(ZONEKEY.city==4) & ((ZONEKEY.worker+ZONEKEY.pop)>2000) & (ZONEKEY.levelAsk<ROUND)||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|105|1|Zone City Upgrade|3||0|(ZONEKEY.city==5) & ((ZONEKEY.worker+ZONEKEY.pop)>3250) & (ZONEKEY.levelAsk<ROUND)||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|106|1|Zone City Upgrade|3||0|(ZONEKEY.city==6) & ((ZONEKEY.worker+ZONEKEY.pop)>5500) & (ZONEKEY.levelAsk<ROUND)||||501|1|60|1|What do we do?|1|||||||||ZONEKEY.levelAsk=ROUND+8;|||||
|107|0|Refugees at the border|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<4; TARGETWAR==0; TARGETCULTURE==101; TARGETSUBCULTURE!=4; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|65|0|What do we do with the refugees?|1|41|0|0|||||||||||
|108|0|Beleaguered trader column at the border|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<4; TARGETWAR==0; TARGETCULTURE==101;  TARGETSUBCULTURE!=4; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|65|0|What do we do with the traders?|1|41|0|0|||||||||||
|109|0|<TARGETREGIMENAME> is recruiting our Troops|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<4; TARGETWAR==0; TARGETCULTURE==101; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; chk(249,4,SOURCEZONEID,REGID)>10;||0||501|1|65|0|What do we do?|1|41|0|0|||||||||||
|110|0|Military Advisors requested|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<10; TARGETWAR==0; TARGETCULTURE==101;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|65|0|Do you send the military advisors?|1|41|0|0|||||||||||
|111|0|Friendly trader arrested|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<10; TARGETWAR==0; TARGETCULTURE>=100; TARGETCULTURE<=199;  TARGETCULTUREKEY.zeropop>0; TARGETREGKEY.master != REGID; TARGETCULTUREKEY.nodip<1; TARGETREGKEY.protector != REGID;||0||501|1|65|0|Will you use pressure to free the trader?|1|41|0|0|||||||||||
|112|0|Threat of War|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<20; TARGETWAR==0; TARGETCULTURE==101; REGREGKEY.relation<30;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|65|0|Will you bribe the raiders to avoid war?|1|41|0|0|||||||||||
|113|0|Declaration of War|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE==101; TARGETSUBCULTURE!=4;  REGREGKEY.relation<30; dth(1,100)<10;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|10|0||0|41|0|0|||||||||||
|114|0|Small Gift|2|0||TARGETREGKEY.minorPuppet<1; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0;  REGREGKEY.relation>=40; dth(1,100)<10; TARGETCULTURE==102;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|10|0||0|41|0|0|||||||||||
|115|0|Request for Protection|2|0||TARGETCULTUREKEY.nodip<1; TARGETREGKEY.minorPuppet<1; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE>=100; TARGETCULTURE<=199; dth(1,100)<10;  TARGETCULTUREKEY.zeropop>0;  REGREGKEY.relation>=40;TARGETREGKEY.master < 1;TARGETREGKEY.protector < 1;||0||501|1|65|0|Do we offer them protection?|1|41|0|0|||||||||||
|116|0|Request for Client State status|2|0||TARGETCULTUREKEY.nodip<1; TARGETREGKEY.minorPuppet<1; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0;  TARGETCULTURE>=100; TARGETCULTURE<=199; dth(1,100)<10;  TARGETCULTUREKEY.zeropop>0;  REGREGKEY.relation>=40;TARGETREGKEY.master < 1; TARGETREGKEY.protector == REGID;||0||501|1|65|0|Do we offer them client status?|1|41|0|0|||||||||||
|117|0|Offer to buy slaves|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation>=10; dth(1,100)<20; TARGETCULTURE==104;||0||501|1|65|0|Do you buy and set free the slaves to increase our population?|1|41|0|0|||||||||||
|118|0|Slave raiding in progress|2|0||TARGETLANDBORDER>0;  SOURCEZONEKEY.pop>20; TARGETMAJOR==2; TARGETWAR==0; REGIMEKEY.enemySlaver>0|REGREGKEY.relation<=25; REGIMEKEY.enemySlaver>0|dth(1,100)<20; TARGETCULTURE==104;||0||501|1|65|0|What should we do?|1|41|0|0|||||||||||
|119|0|Machine invasion|2|0||ROUND>5; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE==105; REGKEY.enemyAi>0 | REGIMEKEY.techLevel>=4; REGKEY.enemyAi>0 | dth(1,100)<10;||0||501|1|10|0||0|41|0|0|||||||||||
|120|0|Nomad traders offer ammunitions|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation>=25; dth(1,100)<20; TARGETCULTURE==106; ZONESTAT.6>0; TARGETSUBCULTURE!=9;||0||501|1|65|0|Do we accept their offer?|1|41|0|0|||||||||||
|121|0|Nomads are assaulting our traders|2|0||TARGETLANDBORDER>0;  SOURCEZONEKEY.pop>10; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<25; dth(1,100)<20; TARGETCULTURE==106; TARGETSUBCULTURE!=9;||0||501|1|65|0|What should we do?|1|41|0|0|||||||||||
|122|0|Arachnid invasion|2|0||ROUND>5; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE==108; dth(1,100)<4;||0||501|1|10|0||0|41|0|0|||||||||||
|123|0|<TARGETREGIMENAME> becomes hostile|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE>100; TARGETCULTURE<200; REGREGKEY.relation<10; TARGETREGREGKEY.distanceCity<=dth(2,3); TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.alien<1;||0||501|1|10|0||0|41|0|0|||||||||||
|124|0|<TARGETREGIMENAME> demands regular relations|2|0||dth(1,100)<4; TARGETLANDBORDER>0; REGREGKEY.dipClear<1; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE>100; TARGETCULTURE<200; TARGETCULTUREKEY.nodip==0; REGREGKEY.relation>10; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETREGREGKEY.distanceCity<=dth(5,2); TARGETCULTUREKEY.alien<1;||0||501|1|65|0|Do we accept to respect their borders?|1|41|0|0|||||||||||
|125|0|<TARGETREGIMENAME> demands resolution of relations|2|0||dth(1,100)<4; TARGETLANDBORDER>0; REGREGKEY.dipClear<1; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE>100; TARGETCULTURE<200; TARGETCULTUREKEY.nodip==0; REGREGKEY.relation>10; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETREGREGKEY.distanceCity<=dth(5,2); TARGETCULTUREKEY.alien<1;||0||501|1|65|0|What do we choose?|1|41|0|0|||||||||||
|126|0|<TARGETREGIMENAME> demands an oath of peace|2|0||dth(1,100)<4; TARGETLANDBORDER>0; REGREGKEY.dipClear<1; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTURE>100; TARGETCULTURE<200; TARGETCULTUREKEY.nodip==0; REGREGKEY.relation>10; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETREGREGKEY.distanceCity<=dth(5,2); TARGETCULTUREKEY.alien<1;||0||501|1|65|0|Do we accept to swear an oath of peace?|1|41|0|0|||||||||||
|127|0|Threat of War|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; dth(1,100)<30; TARGETWAR==0; TARGETSUBCULTURE==5; REGREGKEY.relation<30;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID;||0||501|1|65|0|Will you submit to this humiliation?|1|41|0|0|||||||||||
|128|0|Scavenger traders offer machinery|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation>=20; dth(1,100)<20; TARGETSUBCULTURE==4; ZONESTAT.6>0;||0||501|1|65|0|Do we accept their offer?|1|41|0|0|||||||||||
|129|0|Guardians offer technology|2|0||TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation>=20; dth(1,100)<12; TARGETSUBCULTURE==6; ZONESTAT.6>0; che(249,21,REGIMEID,99)>2;||0||501|1|65|0|Do we accept their offer?|1|41|0|0|||||||||||
|130|0|<TARGETREGIMENAME> demands regular relations|2|0||dth(1,100)<20; TARGETLANDBORDER>0; REGREGKEY.dipClear<1; TARGETMAJOR==2; TARGETWAR==0; TARGETSUBCULTURE==9; TARGETCULTUREKEY.nodip==0; REGREGKEY.relation>10; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETREGREGKEY.distanceCity<=dth(5,2); TARGETCULTUREKEY.alien<1;||0||501|1|65|0|Do we accept to respect their borders?|1|41|0|0|||||||||||
|131|0|Open Contact|2|0||REGREGKEY.openContact>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|132|0|Open Embassy|2|0||REGREGKEY.openContact2>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|133|0|Cultural Exchange|2|0||REGREGKEY.openContact3>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|134|0|Trade|2|0||REGREGKEY.openTrade>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|135|0|Free Trade|2|0||REGREGKEY.openTrade2>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|136|0|Free Movement|2|0||REGREGKEY.openTrade3>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|137|0|Scientific Cooperation|2|0||REGREGKEY.openRes>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|138|0|Scientific Exchange|2|0||REGREGKEY.openRes2>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|139|0|Scientific Joint Effort|2|0||REGREGKEY.openRes3>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|140|0|Non-Aggression Pact|2|0||REGREGKEY.openPact>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|141|0|Friendship Pact|2|0||REGREGKEY.openPact2>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|142|0|Victory Pact|2|0||REGREGKEY.openPact3>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|143|0|Diplomatic Relation Decreased|2|0||REGREGKEY.closeContact>0||0||501|1|10|0||0|42|0|0|||||||||||
|144|0|Trade Relation Decreased|2|0||REGREGKEY.closeTrade>0||0||501|1|10|0||0|42|0|0|||||||||||
|145|0|Scientific Relation Decreased|2|0||REGREGKEY.closeRes>0||0||501|1|10|0||0|42|0|0|||||||||||
|146|0|Pact Decreased|2|0||REGREGKEY.closePact>0||0||501|1|10|0||0|42|0|0|||||||||||
|147|0|Peace Offer|2|0||REGREGKEY.openPeace>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|148|0|Gift 400 Credits|2|0||REGREGKEY.openGift>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|149|0|Gift 1000 Credits|2|0||REGREGKEY.openGift2>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|150|0|Gift 2500 Credits|2|0||REGREGKEY.openGift3>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|151|0|Ouverture|2|0||REGREGKEY.openOuverture>0||0||501|1|65|0|How do we respond?|1|42|0|0|||||||||||
|152|0|Alien natives are entering <SOURCEZONENAME>|2|0||dth(1,100)<10; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTUREKEY.alien>0; REVREGREGKEY.alienInsulted<1; REGREGKEY.alienMeeting!=ROUND;||0||501|1|65|0|What do we do?|1|52|0|0|Alien natives are entering <SOURCEZONENAME>|0|||||||||
|153|0|Alien natives try to talk with us|2|0||dth(1,100)<20; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTUREKEY.alien>0; REVREGREGKEY.language<3; REVREGREGKEY.alienInsulted<2; REGREGKEY.alienMeeting!=ROUND;||0||501|1|65|0|What do we do?|1|52|0|0|Alien natives try to talk with us|0|||||||||
|154|0|Alien natives ask for Tech|2|0||dth(1,100)<15; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTUREKEY.alien>0; REVREGREGKEY.alienInsulted<3; REVREGREGKEY.language>0; TARGETREGIMEKEY.alienTech<3; REGREGKEY.alienMeeting!=ROUND;||0||501|1|65|0|What should we tell them?|1|52|0|0|Alien natives ask for Tech|0|||||||||
|155|0|Alien natives offer Mercs|2|0||dth(1,100)<30; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTUREKEY.alien>0; REVREGREGKEY.alienInsulted<2; REVREGREGKEY.language>0; TARGETREGIMEKEY.alienMercsRound<ROUND; chk(249,41,SOURCEZONEID)>0; TARGETCULTUREKEY.alienForSale>dth(1,100); REGREGKEY.alienMeeting!=ROUND;||0||501|1|65|0|Do we buy the alien mercenaries?|1|52|0|0|Alien natives offer Mercs|0|||||||||
|156|0|Alien natives becomes hostile|2|0||dth(1,100)<50; TARGETLANDBORDER>0; TARGETCULTUREKEY.alien>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<16; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.alienAggression>dth(1,100); REGREGKEY.alienMeeting!=ROUND;||0||501|1|10|0||0|52|0|0|Alien natives becomes hostile|0|||||||||
|157|0|Alien natives want an official peace treaty|2|0||dth(1,100)<30; TARGETLANDBORDER>0; TARGETCULTUREKEY.alien>0; REGREGKEY.dipClear<1; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation>10; TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.alienAggression<dth(1,100); REVREGREGKEY.alienInsulted<3;||0||501|1|65|0|Do we tell them we'll respect their borders?|1|52|0|0|Alien natives want an official peace treaty|0|||||||||
|158|0|Alien natives threaten us|2|0||dth(1,100)<50; TARGETLANDBORDER>0; TARGETMAJOR==2; TARGETWAR==0; TARGETCULTUREKEY.alien>0; TEMP2=dth(2,50)+(REGREGKEY.relation/2); TEMP2=TEMP2-(REVREGREGKEY.alienInsulted*20); TARGETCULTUREKEY.alienAggression>TEMP2; REGREGKEY.alienMeeting!=ROUND;||0||501|1|65|0|Do we pay them off?|1|52|0|0|Alien natives threaten us|0|||||||||
|159|0|Scheduled meeting with Alien natives|2|0||REGREGKEY.alienMeeting==ROUND||0||501|1|65|0|What do we want?|1|53|0|0|Scheduled meeting with Alien natives|0|||||||||
|160|0|Managers want own mess|1|0||||0||501|1|50|0|What will you do?|1|19|0|0|||||1||||||
|161|0|People have sealed a toxic breach|3|0||||0||501|1|60|0|Who should be rewarded?|1|19|0|0|||||1||||||
|162|0|Improved way of working suggested|0|0||||0||501|1|40|0|Should we adapt the new method?|1|19|0|0|||||1||||||
|163|0|Theft of equipment by workers|3|0||||0||501|1|60|0|How do we deal with this?|1|19|0|0|||||1||||||
|164|0|Celebrations have to be organised|0|0||||0||501|1|40|0|How do we allocate the subsidy?|1|19|0|0|||||1||||||
|165|0|Drills for bureaucrats proposed|1|0||||0||501|1|50|0|What do you think?|1|19|0|0|||||1||||||
|166|0|Misbehaviour by troops due to intoxicants|3|0||||0||501|1|60|0|How to deal with this?|1|19|0|0|||||1||||||
|167|0|Elite school network grows in power|0|0||||0||501|1|40|0|How to deal with these sentiments?|1|19|0|0|||||1||||||
|168|0|Diseased employees could get help|1|0||||0||501|1|50|0|What is your opinion?|1|19|0|0|||||1||||||
|169|0|Theater group is making fun of our great nation|3|0||||0||501|1|60|0|Should we censor the theater group?|1|19|0|0|||||1||||||
|170|0|Type of soldier to promote|0|0||||0||501|1|40|0|What do you think?|1|19|0|0|||||1||||||
|171|0|Workers hold a vote|1|0||||0||501|1|50|0|Do we agree to this demand?|1|19|0|0|||||1||||||
|172|0|Young turks have clever idea|1|0||||0||501|1|50|0|Do we agree with this?|1|19|0|0|||||1||||||
|173|0|Speech to choose|0|0||||0||501|1|40|0|Which speech do you prefer?|1|19|0|0|||||1||||||
|174|0|Statue in your honor!|3|0||||0||501|1|60|0|Do you agree with the statue?|1|19|0|0|||||1||||||
|175|0|<CHARNAME> wants to execute relative|4|0||REGKEY.enforcement<50; (CHARPROFILE.enforcement<1|CHARPROFILE.enforcement>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|176|0|<CHARNAME> wants to erect statue|4|0||REGKEY.government<50; (CHARPROFILE.government<1|CHARPROFILE.government>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|177|0|<CHARNAME> found unusual companion|4|0||REGKEY.commerce<50; (CHARPROFILE.commerce<1|CHARPROFILE.commerce>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|178|0|<CHARNAME> requests permission for a personal guard|4|0||REGKEY.autocracy<50; (CHARPROFILE.autocracy<1|CHARPROFILE.autocracy>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1; che(249,12,CHARID,827)<1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|179|0|<CHARNAME> wants a special exemption|4|0||REGKEY.democracy<50; (CHARPROFILE.democracy<1|CHARPROFILE.democracy>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.16<(ROUND-180); CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|180|0|<CHARNAME> wants to organize a party|4|0||REGKEY.government<50; (CHARPROFILE.government<1|CHARPROFILE.government>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|181|0|<CHARNAME> wants total power over estate|4|0||REGKEY.autocracy<50; (CHARPROFILE.autocracy<1|CHARPROFILE.autocracy>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|182|0|<CHARNAME> wants change in propaganda|4|0||REGKEY.democracy<50; (CHARPROFILE.democracy<1|CHARPROFILE.democracy>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|183|0|<CHARNAME> wants portaits in schools|4|0||REGKEY.meritocracy<50; (CHARPROFILE.meritocracy<1|CHARPROFILE.meritocracy>3); CHARSTAT.6!=4; CHARSTAT.6!=5; CHARSTAT.6!=6; CHARSTAT.6!=8; CHARSTAT.6!=1;||0||501|1|40|0|Do you grant this request?|1|14|0|0|||||1||||||
|184|0|Battle Dojo discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,16)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,16)<1;||0||501|1|60|0|What should we do?|1|13|0|0|Battle Dojo discovered in <ZONENAME> |999|0||||||||
|185|0|Ancient Statue discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,17)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,17)<1;||0||501|1|60|0|What should we do?|1|13|0|0|Ancient Statue discovered in <ZONENAME> |999|0||||||||
|186|0|Independent Lab discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,18)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,18)<1;||0||501|1|60|0|What should we do?|1|13|0|0|Independent Lab discovered in <ZONENAME> |999|0||||||||
|187|0|Computing Node discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,19)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,19)<1; che(249,8,REGIMEID)>0;||0||501|1|60|0|What should we do?|1|13|0|0|Computing Node discovered in <ZONENAME> |999|0||||||||
|188|0|Hidden Village discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,20)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,20)<1;||0||501|1|60|0|What should we do?|1|13|0|0|Hidden Village discovered in <ZONENAME> |999|0||||||||
|189|0|Black Market discovered in <ZONENAME> |3|0||che(249,18,ZONEID,2,21)<(che(249,17,ZONEID)/200); che(249,18,ZONEID,2,21)<1;||0||501|1|60|0|What should we do?|1|13|0|0|Black Market discovered in <ZONENAME> |999|0||||||||
|190|0|Very nimble fingers in <UNITNAME>|5|0||(che(249,19,HISID,30)*13)<che(249,20,HISID); (che(249,19,HISID,31)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Very nimble fingers in <UNITNAME>|999|0||||||||
|191|0|Popular soldier in <UNITNAME>|5|0||(che(249,19,HISID,32)*13)<che(249,20,HISID); (che(249,19,HISID,36)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Popular soldier in <UNITNAME>|999|0||||||||
|192|0|Natural born killer in <UNITNAME>|5|0||(che(249,19,HISID,34)*13)<che(249,20,HISID); (che(249,19,HISID,35)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Natural born killer in <UNITNAME>|999|0||||||||
|193|0|Military genius in <UNITNAME>|5|0||(che(249,19,HISID,33)*13)<che(249,20,HISID); (che(249,19,HISID,37)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Military genius in <UNITNAME>|999|0||||||||
|194|0|Training opportunity in <UNITNAME>|5|0||(che(249,19,HISID,31)*20)<che(249,20,HISID); (che(249,19,HISID,38)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Training opportunity in <UNITNAME>|999|0||||||||
|195|0|Training opportunity in <UNITNAME>|5|0||(che(249,19,HISID,31)*20)<che(249,20,HISID); (che(249,19,HISID,38)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Training opportunity in <UNITNAME>|999|0||||||||
|196|0|Training opportunity in <UNITNAME>|5|0||(che(249,19,HISID,31)*20)<che(249,20,HISID); (che(249,19,HISID,38)*13)<che(249,20,HISID); ||0||501|1|80|0|What is your preference?|1|15|0|0|Training opportunity in <UNITNAME>|999|0||||||||
|197|0|Excellent Sergeant in <UNITNAME>|5|0||che(249,19,HISID,38)>0; che(249,19,HISID,38)<99;||0||501|1|80|0|What is your preference?|1|15|0|0|Excellent Sergeant in <UNITNAME>|999|0||||||||
|198|0|Excellent Lieutenant in <UNITNAME>|5|0||che(249,19,HISID,39)>0; che(249,19,HISID,39)<99;||0||501|1|80|0|What is your preference?|1|15|0|0|Excellent Lieutenant in <UNITNAME>|999|0||||||||
|199|0|Protests in <ZONENAME>|3|0||((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<100; dth(1,100)<33; ROUND>ZONEKEY.popUnrest; ZONEKEY.pop>9;||0||501|1|60|0|What should we do?|1|23|0|0|||20||||||||
|200|0|Petition in <ZONENAME>|3|0||((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<90; ZONEKEY.pop>9; dth(1,100)<30; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What would be wise?|1|23|0|0|||10||||||||
|201|0|Demagogue in <ZONENAME>|3|0||((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<30;  ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||30||||||||
|202|0|Food Theft in <ZONENAME>|3|0||ROUND>5;((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<20; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||40||||||||
|203|0|Our worker in <ZONENAME> are harassed|3|0||ROUND>5; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<100; ZONEKEY.pop>9; ZONEKEY.worker>4; dth(1,100)<20; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What course of action should I take?|1|23|0|0|||50||||||||
|204|0|Riots in <ZONENAME>|3|0||ROUND>10; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<20; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||60||||||||
|205|0|Plundering in <ZONENAME>.|3|0||ROUND>15; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<70; ZONEKEY.pop>9; dth(1,100)<15; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What course of action should I take?|1|23|0|0|||80||||||||
|206|0|Independence agitators in <ZONENAME>|3|0||ROUND>15; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<70; ZONEKEY.pop>9; dth(1,100)<15; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What course of action should I take?|1|23|0|0|||100||||||||
|207|0|Independence rallies in <ZONENAME>|3|0||ROUND>20; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<60; ZONEKEY.pop>9;  dth(1,100)<15; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What course of action should I take?|1|23|0|0|||120||||||||
|208|0|Minor worker strike in <ZONENAME>|3|0||TEMP1=((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear); TEMP1<110|ZONEKEY.union1_strike>=ROUND; ZONEKEY.worker>9; dth(1,100)<30|ZONEKEY.union1_strike>=ROUND; ROUND>2; ROUND>ZONEKEY.workerUnrest|ZONEKEY.union1_strike>=ROUND;||0||501|1|60|0|What should we do?|1|23|0|0|||160||||||||
|209|0|Major worker strike in <ZONENAME>|3|0||ROUND>10; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<90; ZONEKEY.worker>9;  dth(1,100)<30; ROUND>ZONEKEY.workerUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||160||||||||
|210|0|Walkout agitator in <ZONENAME>|3|0||ROUND>15; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.worker>9;  dth(1,100)<20; ROUND>ZONEKEY.workerUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||160||||||||
|211|0|Sabotage in <ZONENAME>|3|0||ROUND>20; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<60; ZONEKEY.worker>9;  dth(1,100)<20; ROUND>ZONEKEY.workerUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||160||||||||
|212|0|Protests against high Income Tax in <ZONENAME>|3|0||TEMP1=max(0,25 - (ZONEKEY.popHapiness/4))-((ZONEKEY.unrest+REGKEY.epochUnrest)/4)+(ZONEKEY.fear/2); ((REGKEY.government+20)/2)+(REGKEY.popularity/10)+TEMP1<(REGKEY.incometax-15+dth(1,20)); REGKEY.incometax>=20; dth(1,100)<REGKEY.incometax; ROUND>ZONEKEY.popUnrest; ZONEKEY.occupationmode<1; ROUND>ZONEKEY.popUnrest;||0||501|1|60|0|What should we do?|1|23|0|0|||20||||||||
|213|0|Industrial accident in <ZONENAME>|3|0||(dth(2,100) + (ZONEKEY.education*2)) < (90+(ZONEKEY.danger)) | dth(1,100)<10; dth(1,100)<(20+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||1|
|214|0|Dome breach in <ZONENAME>|3|0||ROUND>5; (dth(2,100) + (ZONEKEY.education*2)) < (120+(ZONEKEY.danger)) | dth(1,100)<10; dth(1,100)<(20+REGKEY.epochDanger); (GAMEKEY.3==3|GAMEKEY.3==4); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||1|
|215|0|Ancient weapon triggered in <ZONENAME>|3|0||ROUND>10; (dth(2,100) + (ZONEKEY.education*2)) < (100+(ZONEKEY.danger)) | dth(1,100)<10; dth(1,100)<(10+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||1|
|216|0|Roaming thieves in <ZONENAME>|3|0||(dth(2,100) + (ZONEKEY.security/3)) < (100+ZONEKEY.unrest) | dth(1,100)<10; dth(1,100)<(20+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||1|
|217|0|Marauders in <ZONENAME>|3|0||ROUND>5; (dth(2,100) + (ZONEKEY.security/3)) < (90+ZONEKEY.unrest) | dth(1,100)<10; dth(1,100)<(20+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||1|
|218|0|Abductions in <ZONENAME>|3|0||ROUND>10; (dth(2,100) + (ZONEKEY.security/3)) < (80+ZONEKEY.unrest) | dth(1,100)<10; dth(1,100)<(10+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||1|
|219|0|Waste disposal accident in <ZONENAME>|3|0||(dth(2,100) + (ZONEKEY.health/3)) <100; dth(1,100)<(20+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Some help would speed up cleaning. Will you support us?|1|24|0|0|||20|||||||1|
|220|0|Quack doctors active in <ZONENAME>|3|0||ROUND>5; (dth(2,100) + (ZONEKEY.health/3)) < 90; dth(1,100)<(20+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||1|
|221|0|Bacterial disease outbreak in <ZONENAME>|3|0||ROUND>10; (dth(2,100) + (ZONEKEY.health/3)) < 80; dth(1,100)<(10+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||1|
|222|0|Machine abuse in factory in <ZONENAME>|3|0||(dth(2,100) + (ZONEKEY.culture)) < 100; dth(1,100)<(20+REGKEY.epochDanger); ZONEKEY.workers>9; dth(1,100)<10;||0||501|1|60|0|Some help would speed up cleaning. Will you support us?|1|24|0|0|||20||||||||
|223|0|Vigilante justice in <ZONENAME>|3|0||ROUND>5; (dth(2,100) + (ZONEKEY.culture)) < 90; dth(1,100)<(10+REGKEY.epochDanger); ZONEKEY.pop>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||1|
|224|0|Religious mayhem in <ZONENAME>|3|0||ROUND>10; (dth(2,100) + (ZONEKEY.culture)) < 80; dth(1,100)<(10+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||1|
|225|0|Morale grandstanding in <ZONENAME>|3|0||(50+dth(1,50))<ZONEKEY.culture; REGKEY.mind>=40; dth(1,100)<(10+REGKEY.epochDanger); (ZONEKEY.worker+ZONEKEY.pop)>9; dth(1,100)<20;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||1|
|226|0|Xenobite infestation in <ZONENAME>|3|0||GAMEKEY.2>=1;GAMEKEY.2<=2;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||2|
|227|0|Microscopic Xenobite infestation in <ZONENAME>|3|0||GAMEKEY.2>=2;GAMEKEY.2<=3;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||2|
|228|0|Horror Xenobite infestation in <ZONENAME>|3|0||GAMEKEY.2>=3;GAMEKEY.2<=4;GAMEKEY.44>0;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||2|
|229|0|Dome breach in <ZONENAME>|3|0||GAMEKEY.76>=7; RANDOMKEY.21<=150;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|230|0|Dome breach in <ZONENAME>|3|0||GAMEKEY.76>=6; RANDOMKEY.21>150;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|231|0|Dome breach in <ZONENAME>|3|0||GAMEKEY.76<6; RANDOMKEY.21>150; ZONESTAT.12>60;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|232|0|Dome breach in <ZONENAME>|3|0||GAMEKEY.76<6; RANDOMKEY.21>150; ZONESTAT.12<-20;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|233|0|Scavenging accident in <ZONENAME>|3|0||chk(249,50,ZONEID,3)>5||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20+chk(249,50,ZONEID,3)+dth(1,20)|||||||2|
|234|0|Mining accident in <ZONENAME>|3|0||chk(249,50,ZONEID,2)>5||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20+chk(249,50,ZONEID,2)+dth(1,20)|||||||2|
|235|0|Munition depot explosion in <ZONENAME>|3|0||chk(249,4,ZONEID,REGID,1)>20||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||10+dth(1,chk(249,4,ZONEID,REGID,1))+dth(1,20)|||||||2|
|236|0|Nuclear leak in <ZONENAME>|3|0||chk(249,51,ZONEID,4)>0||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||10+min(chk(249,51,ZONEID,4),40)|||||||2|
|237|0|Rogue Raiders in <ZONENAME>|3|0||chk(249,52,ZONEID,101)>0||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20|||||||2|
|238|0|Rebel terrorism in <ZONENAME>|3|0||ZONEKEY.rebelManpower>(ZONEKEY.pop/20); ZONEKEY.unrest>10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20+min(ZONEKEY.rebelManpower/2,50)|||||||2|
|239|0|Rogue Fanatics in <ZONENAME>|3|0||chk(249,52,ZONEID,107)>0||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|240|0|Revenge killings in <ZONENAME>|3|0||ZONEKEY.cas>0; ZONEKEY.cas<40;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20+min(ZONEKEY.rebelManpower/2,50)|||||||2|
|241|0|Rampant Alien creatures in <ZONENAME>|3|0||chk(249,52,ZONEID,GAMEKEY.39)>0; GAMEKEY.44>0;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||20+min(ZONEKEY.rebelManpower/2,50)|||||||2|
|242|0|Abductions in <ZONENAME>|3|0||chk(249,52,ZONEID,104)>0||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||80|||||||2|
|243|0|Furnace pollution in <ZONENAME>|3|0||chk(249,50,ZONEID,12)>5||0||501|1|60|0|Some help would speed up cleaning. Will you support us?|1|24|0|0|||10+chk(249,50,ZONEID,12)+dth(1,10)|||||||2|
|244|0|Hospital overcrowding in <ZONENAME>|3|0||(ZONEKEY.unrest-10)>(ZONEKEY.health/4)||0||501|1|60|0|Some help would speed up cleaning. Will you support us?|1|24|0|0|||10+ZONEKEY.unrest|||||||2|
|245|0|Suicide wave in <ZONENAME>|3|0||(ZONEKEY.fear+20)>REGKEY.heart||0||501|1|60|0|Some help would speed up cleaning. Will you support us?|1|24|0|0|||10+ZONEKEY.fear|||||||2|
|246|0|Traditional medecine in <ZONENAME>|3|0||CULTUREID=ZONESTAT.9; CULTUREKEY.tradition>dth(2,20);||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|247|0|Poor cannot get to <ZONENAME> hospital|3|0||(ZONEKEY.privateSalary*4)<ZONEKEY.workerSalaryGiven||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||30|||||||2|
|248|0|Alien pathogen outbreak in <ZONENAME>|3|0||GAMEKEY.2>=1;GAMEKEY.2<=2;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||2|
|249|0|Dangerous alien pathogen outbreak in <ZONENAME>|3|0||GAMEKEY.2>=2;GAMEKEY.2<=3;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||2|
|250|0|Deadly alien pathogen outbreak in <ZONENAME>|3|0||GAMEKEY.2>=3;GAMEKEY.2<=4;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40|||||||2|
|251|0|Clan vendetta in <ZONENAME>|3|0||CULTUREID=ZONESTAT.9; CULTUREKEY.agression>dth(2,20);||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||50|||||||2|
|252|0|Clash between loyalists and traitors in <ZONENAME>|3|0||ZONEKEY.cas>15; ZONEKEY.cas<75;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||50|||||||2|
|253|0|Dome sabotage in <ZONENAME>|3|0||GAMEKEY.76>=5; ZONEKEY.unrest>10;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||50|||||||2|
|254|0|Cannibalism in <ZONENAME>|3|0||dth(3,10)>ZONEKEY.culture; ZONEKEY.popHunger>50;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||25+ZONEKEY.popHunger|||||||2|
|255|0|Orgy of violence in <ZONENAME>|3|0||dth(3,10)>ZONEKEY.culture; ZONEKEY.unrest>20;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||25+(ZONEKEY.unrest*2)|||||||2|
|256|0|<ZONENAME> reverting to barbarism|3|0||dth(3,10)>ZONEKEY.culture; ZONEKEY.fear>30;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||25+(ZONEKEY.fear*3)|||||||2|
|257|0|Police harassment in <ZONENAME>|3|0||ZONEKEY.fear>25; REGKEY.heart>=50;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||40+ZONEKEY.fear|||||||2|
|258|0|<ZONENAME> culling lottery|3|0||ZONEKEY.hunger>50; REGKEY.commerce>=50;||0||501|1|60|0|Can I count on your support to minimize the damage?|1|24|0|0|||ZONEKEY.hunger|||||||2|
|259|0|Rebels in <ZONENAME>|3|0||ZONEKEY.rebelManpower>=20; dth(1,100)<20;||0||501|1|60|0|Can I count on your support to disrupt their deployment?|1|25|0|0|||10||||||||
|260|0|Ascension Speech|0|0||||0||501|1|40|0|Which political profile will you champion in your speech?|1|101|104|1|Ascension Speech|1|0||||||||
|261|0|Ascension Speech|0|0||||0||501|1|40|0|Which future will you line out for our <NATION> in your speech?|1|101|104|1|Ascension Speech|1|0||||||||
|262|0|Ascension Speech|0|0||||0||501|1|40|0|As what kind of leader of our <NATION> will you show yourself in your speech?|1|101|104|1|Ascension Speech|1|0||||||||
|263|0|Militia Parade|0|0||(REGKEY.milParadeDone<1 & dth(1,100)<5)|(dth(1,1000)<10); REGKEY.militia>40;||0||501|1|40|0|Do you want to offer a gift to your militia forces?|1|102|102|1|Militia Parade|1|0||||||||
|264|0|Militia needs extra funds|0|0||dth(1,100)>REGKEY.militia; dth(1,100)>94; ROUND>4;||0||501|1|40|0|Do we accept the militia’s demands?|1|102|102|0|Militia needs extra funds|99|10||||||||
|265|0|Militia requires your attention|0|0||dth(1,100)>REGKEY.militia; dth(1,100)>95;||0||501|1|40|0|Will you spare the time to help out the militia leaders?|1|102|102|0|Militia requires your attention|99|10||||||||
|266|0|Militia commemorative plaque|0|0||dth(1,50)<(REGKEY.militia-50); dth(1,100)>90;||0||501|1|40|0|Will we place the commemorative plaque?|1|102|102|0|Militia commemorative plaque|99|10||||||||
|267|0|Militia learns from experience|0|0||dth(1,50)<(REGKEY.militia-50); dth(1,100)>90;||0||501|1|40|0|Will you allow the mercenaries to be integrated inside the militia units?|1|102|102|0|Militia learns from experience|99|10||||||||
|268|0|Investigation into death|0|0||(ROUND==3)|((ROUND>3)&(REGIMEKEY.murderInvestigation==0&dth(1,100)<10)); REGIMEKEY.murderInvestigationStopped<1;||0||501|1|40|0|Do we investigate?|1|103|103|1|Investigation into death|3|0||||||||
|269|0|Unrest due to murder investigation in <ZONENAME>|3|0||REGIMEKEY.murderInvestigation==(ROUND-1)||0||501|1|10|0||0|103|103|0|Unrest due to murder investigation in <ZONENAME>|99|0||||||||
|270|0|Murder Investigation concluded|2|0||REGIMEKEY.murderInvestigation>0; REGIMEKEY.murderProgress>dth(3,10); REGIMEKEY.murderProgress<5000; TARGETREGIMEID==REGIMEKEY.shadowMinor;||0||501|1|40|0|Do you want to continue the investigation?|1|103|103|0|Murder Investigation concluded|99|0||||||||
|271|0|Undercover team returns|2|0||REGIMEKEY.murderProgress<9999; REGIMEKEY.murderProgress>5025; TARGETREGIMEID==REGIMEKEY.shadowMinor;||0||501|1|10|0||0|103|103|0|Undercover team returns|1|0||||||||
|272|0|<TARGETREGIMENAME> received foreign volunteers|2|0||TARGETREGIMEKEY.foreignVolunteers==(ROUND-1); REGREGKEY.recon>dth(1,6);||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> received foreign volunteers|999|15||||||||
|273|0|<TARGETREGIMENAME> border incident|2|0||TARGETWAR==0; TARGETLANDBORDER>0; TARGETREGIMEID==REGIMEKEY.shadowMinor; REGREGKEY.relation<dth(1,100); dth(1,100)<25;||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> border incident|999|10||||||||
|274|0|<TARGETREGIMENAME> cancels treaty|2|0||TARGETREGIMEID==REGIMEKEY.shadowMinor; ((TARGETREGKEY.master == REGID) | (TARGETREGKEY.protector ==REGID));||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> cancels treaty|999|20||||||||
|275|0|<TARGETREGIMENAME> declares war|2|0||TARGETLANDBORDER>0; TARGETREGIMEID==REGIMEKEY.shadowMajor; REGREGKEY.relation<dth(1,100); TARGETWAR==0; ROUND>dth(5,6);||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> declares war|999|10||||||||
|276|0|<TARGETREGIMENAME> received shadow forces|2|0||TARGETREGIMEKEY.shadowForces==(ROUND-1); REGREGKEY.recon>=dth(1,6);||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> received shadow forces|999|15||||||||
|277|0|<TARGETREGIMENAME> border incident|2|0||TARGETWAR==0; TARGETLANDBORDER>0; TARGETREGIMEID==REGIMEKEY.shadowMajor; REGREGKEY.relation<dth(1,100); dth(1,100)<25;||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> border incident|999|10||||||||
|278|0|<TARGETREGIMENAME> cancels all treaties and contact|2|0||TARGETREGIMEID==REGIMEKEY.shadowMajor; ((REGREGKEY.dipRel >0) | (REGREGKEY.dipTrade >0) | (REGREGKEY.dipPact >REGID)  | (REGREGKEY.dipRes >REGID)  );||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> cancels all treaties and contact|999|20||||||||
|279|0|<TARGETREGIMENAME> declares war|2|0||TARGETLANDBORDER>0; TARGETREGIMEID==REGIMEKEY.shadowMajor; REGREGKEY.relation<dth(1,100); TARGETWAR==0; ROUND>dth(5,6);||0||501|1|10|0||0|103|103|0|<TARGETREGIMENAME> declares war|999|10||||||||
|280|0|Proposal to remove voting rights from the masses|0|0||REGKEY.votePop>0; REGKEY.democracy<30; (REGKEY.meritocracy>=50|REGKEY.autocracy>=50);||0||501|1|40|0|Do we take away the General Population’s voting rights?|1|104|104|0|Proposal to remove voting rights from the masses|999|0||||||||
|281|0|Proposal to remove voting rights from our Workers|0|0||REGKEY.voteWorker>0; REGKEY.democracy<30; (REGKEY.meritocracy>=50|REGKEY.autocracy>=50);||0||501|1|40|0|Do we take away the Workers voting rights?|1|104|104|0|Proposal to remove voting rights from our Workers|999|0||||||||
|282|0|Proposal to remove voting rights from our Soldiers|0|0||REGKEY.voteSoldier>0; REGKEY.democracy<30; (REGKEY.meritocracy>=50|REGKEY.autocracy>=50);||0||501|1|40|0|Do we take away the Soldiers voting rights?|1|104|104|0|Proposal to remove voting rights from our Soldiers|999|0||||||||
|283|0|Proposal to give voting rights to the General Population|0|0||REGKEY.votePop==0; REGKEY.democracy>=50; REGKEY.meritocracy<=30; REGKEY.autocracy<=30;||0||501|1|40|0|Do we give the General Population voting rights?|1|104|104|0|Proposal to give voting rights to the General Population|999|0||||||||
|284|0|Proposal to give voting rights to our Workers|0|0||REGKEY.voteWorker==0; REGKEY.democracy>=50; REGKEY.meritocracy<=30; REGKEY.autocracy<=30;||0||501|1|40|0|Do we give the Workers voting rights?|1|104|104|0|Proposal to give voting rights to our Workers|999|0||||||||
|285|0|Proposal to give voting rights to the Soldiers|0|0||REGKEY.voteSoldier==0; REGKEY.democracy>=50; REGKEY.meritocracy<=30; REGKEY.autocracy<=30;||0||501|1|40|0|Do we give the Soldiers voting rights?|1|104|104|0|Proposal to give voting rights to the Soldiers|999|0||||||||
|286|0|Proposal to remove voting rights from the majority of Leaders|0|0||REGKEY.voteLeader>0; REGKEY.democracy<30; REGKEY.meritocracy<30; REGKEY.autocracy>50;||0||501|1|40|0|Do we take away the voting rights of some Leaders?|1|104|104|0|Proposal to remove voting rights from the majority of Leaders|999|0||||||||
|287|0|Proposal to extend voting rights to all your Leaders|0|0||REGKEY.voteLeader==0; (REGKEY.democracy>=50|REGKEY.meritocracy>=50); REGKEY.autocracy<30;||0||501|1|40|0|Do we give voting rights to all of our Leaders?|1|104|104|0|Proposal to extend voting rights to all your Leaders|999|0||||||||
|288|0|Proposal to change to a Class based voting system|0|0||REGKEY.voteSystem==0; (REGKEY.votePop+REGKEY.voteSoldier+REGKEY.voteWorker)>0; REGKEY.enforcement>=50; REGKEY.government<30;||0||501|1|40|0|Do we change to a Class based voting system?|1|104|104|0|Proposal to change to a Class based voting system|999|0||||||||
|289|0|Proposal to change to Proportional voting system|0|0||REGKEY.voteSystem==1; (REGKEY.votePop+REGKEY.voteSoldier+REGKEY.voteWorker)>0; REGKEY.enforcement<30; REGKEY.government>=50;||0||501|1|40|0|Do we change to a Proportional voting system?|1|104|104|0|Proposal to change to Proportional voting system|999|0||||||||
|290|0|Mysterious forces joining <TARGETREGIMENAME>|2|0||REGKEY.mapPromisesActive<1; dth(1,100)<33; ROUND>=20; REGKEY.mapPromises<2; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; chk(249,33,TARGETREGIMEID,0)>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<50;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.nonHuman<1;||0||501|1|40|0|Do we make a public declaration of war?|1|51|51|4|Mysterious forces joining <TARGETREGIMENAME>|1|0||||||||
|291|0|Adventurers discover special location|2|0||REGKEY.mapPromisesActive<1; ROUND>=2; dth(1,100)<33; REGKEY.mapPromises<2; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; TARGETMAJOR==4; TEMP4=chk(249,7,TARGETREGIMEID,1,1); TEMP4>0; chk(249,37,TEMP4)>0;||0||501|1|40|0|Will you make a public commitment that the Hex will be held?|1|51|51|4|Adventurers discover special location|1|0||||||||
|292|0|Rebellion in <TARGETREGIMENAME>|2|0||REGKEY.mapPromisesActive<1; ROUND>=20; dth(1,100)<33; REGKEY.mapPromises<2; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; chk(249,33,TARGETREGIMEID,0)>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<50;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.zeroPop<1; chk(249,7,TARGETREGIMEID,0,1)>0;||0||501|1|40|0|Will we help the Rebels take <LOOKUPZONENAME=<TEMP5>>?|1|51|51|4|Rebellion in <TARGETREGIMENAME>|1|0||||||||
|293|0|Free Folk join us|2|0||REGKEY.mapPromisesActive<1; ROUND>=2; dth(1,100)<33; REGKEY.mapPromises<2; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; TARGETMAJOR==4; TEMP4=chk(249,7,TARGETREGIMEID,1,1); TEMP4>0; chk(249,38,TEMP4)>0;||0||501|1|40|0|Will you make a public announcement that you will defend their town?|1|51|51|4|Free Folk join us|1|0||||||||
|294|0|Dissatisfied elements in <TARGETREGIMENAME>|2|0||REGKEY.mapPromisesActive<1; ROUND>=2; dth(1,100)<33; REGKEY.mapPromises<1; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; chk(249,33,TARGETREGIMEID,0)>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<50;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.zeroPop<1;||0||501|1|40|0|Will we help these opposition forces and make a promise to invade (12 round invasion deadline)?|1|51|51|4|Dissatisfied elements in <TARGETREGIMENAME>|1|0||||||||
|295|0|Able Commander offering services|2|0||REGKEY.mapPromisesActive<1; ROUND>=2; dth(1,100)<33; REGKEY.mapPromises<2; ROUND>=(REGKEY.mapPromises*20); TARGETLANDBORDER>0; TEMP4=chk(249,7,TARGETREGIMEID,0,1); chk(249,38,TEMP4)>0; TARGETMAJOR==2; TARGETWAR==0; REGREGKEY.relation<50;TARGETREGKEY.master != REGID; TARGETREGKEY.protector != REGID; TARGETCULTUREKEY.nonHuman<1;||0||501|1|40|0|Do we make him this promise and gain his services?|1|51|51|4|Able Commander offering services|1|0||||||||
|296|0|<TARGETREGIMENAME> its <POLITICALBODY> turns against us|2|0||REVREGREGKEY.aiStoryMode==2; REGREGKEY.recon>=4;  dth(1,200)<((20*STORYMOD.4)/100); REVREGREGKEY.aiIntention<=50; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Do we launch a political influencing operation?|1|105|105|3|<TARGETREGIMENAME> its <POLITICALBODY> turns against us|999|0||0||||||
|297|0|<TARGETREGIMENAME> praises you!|2|0||REVREGREGKEY.aiStoryMode==3; REGREGKEY.recon>=2; dth(1,200)<((20*STORYMOD.3)/100); REVREGREGKEY.relation>=30; REVREGREGKEY.aiIntention>=60; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Would you like to send a word of gratitude for their praise?|1|105|105|3|<TARGETREGIMENAME> praises you!|999|0||0||||||
|298|0|<TARGETREGIMENAME> forsees war|2|0||(REVREGREGKEY.aiStoryMode==3 | REVREGREGKEY.aiStoryMode==4); REGREGKEY.recon>=2;  dth(1,200)<((20*STORYMOD.6)/100); REVREGREGKEY.relation<50; REVREGREGKEY.aiIntention<=25; TARGETMAJOR==1;  TARGETWAR==0; REGREGKEY.dipRel<=1; REGREGKEY.dipRes<1; REGREGKEY.dipTrade<1; REGREGKEY.dipPact<1;||0||501|1|65|0|Would you like to make a public statement of amity towards them?|1|105|105|3|<TARGETREGIMENAME> forsees war|999|0||0||||||
|299|0|<TARGETREGIMENAME> offers small present|2|0||REVREGREGKEY.aiStoryMode==5; REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.7)/100);  REVREGREGKEY.aiIntention>=35; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Do you accept the present?|1|105|105|3|<TARGETREGIMENAME> offers small present|999|0||0||||||
|300|0|<TARGETREGIMENAME> warns us|2|0||REVREGREGKEY.aiStoryMode==3; REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.5)/100); REVREGREGKEY.relation<50; REVREGREGKEY.aiIntention<=60; TARGETMAJOR==1;  TARGETWAR==0; aiBribeFailure<=(aiBribeSucces+1); REGREGKEY.dipRel<=2; REGREGKEY.dipRes<2; REGREGKEY.dipTrade<2; REGREGKEY.dipPact<1;||0||501|1|10|0||0|105|105|3|<TARGETREGIMENAME> warns us|999|0||0||||||
|301|0|<TARGETREGIMENAME> changes attitude|2|0||REVREGREGKEY.aiStoryMode==4; REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.7)/100); REVREGREGKEY.relation>20; REVREGREGKEY.aiIntention>=60; TARGETMAJOR==1;  TARGETWAR==0; aiBribeFailure>(aiBribeSucces+1);||0||501|1|10|0||0|105|105|3|<TARGETREGIMENAME> changes attitude|999|0||0||||||
|302|0|<TARGETREGIMENAME> its <POLITICALBODY> has doubts about us|2|0||REVREGREGKEY.aiStoryMode==1; REGREGKEY.recon>=4;  dth(1,200)<((20*STORYMOD.2)/100);  REVREGREGKEY.aiIntention<=40; TARGETMAJOR==1;  TARGETWAR==0; REGREGKEY.dipRel<3;||0||501|1|65|0|Do we launch a political influencing operation?|1|105|105|3|<TARGETREGIMENAME> its <POLITICALBODY> has doubts about us|999|0||0||||||
|303|0|<TARGETREGIMENAME> praises you!|2|0||REVREGREGKEY.aiStoryMode==2; REGREGKEY.recon>=2; dth(1,200)<((20*STORYMOD.1)/100); REVREGREGKEY.relation>70; REVREGREGKEY.aiIntention>=60; TARGETMAJOR==1;  TARGETWAR==0; (REGREGKEY.relation+REVREGREGKEY.aiTimeFriends)>=100;||0||501|1|65|0|What size of delegation do you want to send?|1|105|105|3|<TARGETREGIMENAME> praises you!|999|0||0||||||
|304|0|<TARGETREGIMENAME> feels you are taking advantage of them|2|0||REVREGREGKEY.aiStoryMode==5; REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.2)/100); REVREGREGKEY.relation<60; REGREGKEY.dipPact<3; TARGETMAJOR==1;  TARGETWAR==0; REVREGREGKEY.aiTimeAllies>5;||0||501|1|65|0|Should we send a monetary gift?|1|105|105|3|<TARGETREGIMENAME> feels you are taking advantage of them|999|0||0||||||
|305|0|<TARGETREGIMENAME> feels you are abusing them|2|0||REVREGREGKEY.aiStoryMode==4; REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.4)/100);  REGREGKEY.dipPact<3; TARGETMAJOR==1;  TARGETWAR==0; REVREGREGKEY.aiTimeFriends>10;||0||501|1|65|0|Should we send a monetary gift?|1|105|105|3|<TARGETREGIMENAME> feels you are abusing them|999|0||0||||||
|306|0|<TARGETREGIMENAME> is holding celebrations|2|0||REVREGREGKEY.aiStoryMode==3; REGREGKEY.recon>=1;  dth(1,200)<((10*STORYMOD.3)/100); REVREGREGKEY.aiIntention>=30; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we send a delegation?|1|105|105|3|<TARGETREGIMENAME> is holding celebrations|999|10||0||||||
|307|0|<TARGETREGIMENAME> is offering to improve relations|2|0||REVREGREGKEY.aiStoryMode==3; REGREGKEY.recon>=1;  dth(1,200)<((10*STORYMOD.3)/100); REVREGREGKEY.aiIntention>=30; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we accept their offer?|1|105|105|3|<TARGETREGIMENAME> is offering to improve relations|999|10||0||||||
|308|0|<TARGETREGIMENAME> is in search of special item|2|0||REVREGREGKEY.aiStoryMode==3; REGREGKEY.recon>=1;  dth(1,200)<((10*STORYMOD.3)/100); REVREGREGKEY.aiIntention>=30; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we sent it to their <TARGETNATIONALLEADER> as a present?|1|105|105|3|<TARGETREGIMENAME> is in search of special item|999|10||0||||||
|309|0|<TARGETREGIMENAME> caught one of our spies|2|0||REVREGREGKEY.aiStoryMode>=2; REVREGREGKEY.aiStoryMode<=4; REGREGKEY.recon>=1;  dth(1,200)<((10*STORYMOD.1)/100);  TARGETMAJOR==1;  TARGETWAR==0; che(249,14,REGIMEID,TARGETREGIMEID,0)>0;||0||501|1|65|0|Should we do them a favour?|1|105|105|3|<TARGETREGIMENAME> caught one of our spies|999|10||0||||||
|310|0|<TARGETREGIMENAME> demands release of spy|2|0||REVREGREGKEY.aiStoryMode>=2; REVREGREGKEY.aiStoryMode<=4; REGREGKEY.recon>=1;  dth(1,200)<10;  TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we accept to release the spy?|1|105|105|3|<TARGETREGIMENAME> demands release of spy|999|10||0||||||
|311|0|<TARGETREGIMENAME> is blackmailing us|2|0||REVREGREGKEY.aiStoryMode==4; REGREGKEY.recon>=1;  dth(1,100)<10; TARGETMAJOR==1; TARGETWAR==0;||0||501|1|65|0|Should we pay tribute to avoid war?|1|105|105|3|<TARGETREGIMENAME> is blackmailing us|999|10||0||||||
|312|0|<TARGETREGIMENAME> requests our help|2|0||(REVREGREGKEY.aiStoryMode==4|REVREGREGKEY.aiStoryMode==5); REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.1)/100); REVREGREGKEY.relation<(REVREGREGKEY.aiHawk/2); TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we help them?|1|105|105|3|<TARGETREGIMENAME> requests our help|999|10||0||||||
|313|0|<TARGETREGIMENAME> requests our help|2|0||(REVREGREGKEY.aiStoryMode==4|REVREGREGKEY.aiStoryMode==5); REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.1)/100); REVREGREGKEY.relation<(REVREGREGKEY.aiHawk*150/100); TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Should we help them?|1|105|105|3|<TARGETREGIMENAME> requests our help|999|10||0||||||
|314|0|<TARGETREGIMENAME> offers to help us|2|0||(REVREGREGKEY.aiStoryMode==4|REVREGREGKEY.aiStoryMode==5); REGREGKEY.recon>=1;  dth(1,200)<((20*STORYMOD.1)/100); REVREGREGKEY.relation>50; TARGETMAJOR==1;  TARGETWAR==0;||0||501|1|65|0|Do you want to request help?|1|105|105|3|<TARGETREGIMENAME> offers to help us|999|10||0||||||
|315|0|<TARGETREGIMENAME> offers to help us|2|0||REGREGKEY.stratAskHelp==1;  TARGETWAR==0;||0||501|1|65|0|Do you want to request help?|1|105|105|3|<TARGETREGIMENAME> offers to help us|999|10||0||||||
|316|0|<TARGETREGIMENAME> is offering peace|2|0||REVREGREGKEY.aiStoryMode==4; REGREGKEY.recon>=1;  dth(1,100)<15; REVREGREGKEY.aiIntention>=50; TARGETMAJOR==1;  TARGETWAR==1; REVREGREGKEY.aiBribeSucces>REVREGREGKEY.aiBribeFailure;||0||501|1|65|0|Should we accept their offer?|1|105|105|3|<TARGETREGIMENAME> is offering peace|999|10||0||||||
|317|0|Our spies in <TARGETREGIMENAME> have found info|2|0||TARGETMAJOR==1; che(249,14,REGIMEID,TARGETREGIMEID,0)>=dth(1,10); dth(1,100)>75;||0||501|1|65|0|Give to which Faction?|1|105|105|3|Our spies in <TARGETREGIMENAME> have found info|999|0||0||||||
|318|0|Our operatives are ready to provide political support|2|0||REGREGKEY.stratSupport==1||0||501|1|65|0|Support which Faction?|1|105|105|3|Our operatives are ready to provide political support|999|0||0||||||
|319|0|Resettlement Proposal|2|0||(REVREGREGKEY.aiStoryMode<=2|REVREGREGKEY.aiStoryMode==3); REGREGKEY.recon>=1; dth(1,200)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETLANDBORDER>0; dth(1,100)<15;||0||501|1|65|0|Should we accept these refugees into our <NATION>?|1|105|105|3|Resettlement Proposal|999|10||0||||||
|320|0|Access offer to ancient site|2|0||(REVREGREGKEY.aiStoryMode==2|REVREGREGKEY.aiStoryMode==1); REGREGKEY.recon>=1; dth(1,200)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETLANDBORDER>0; dth(1,100)<15;||0||501|1|65|0|Allow who to visit?|1|105|105|3|Access offer to ancient site|999|10||1||||||
|321|0|Request to help control traders|2|0||(REVREGREGKEY.aiStoryMode<=2|REVREGREGKEY.aiStoryMode==3); REGREGKEY.recon>=1; dth(1,100)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETLANDBORDER>0; dth(1,100)<15;||0||501|1|65|0|Will we participate in their crackdown?|1|105|105|3|Request to help control traders|999|10||1||||||
|322|0|Request in helping fight Syndic cells|2|0||(REVREGREGKEY.aiStoryMode<=2|REVREGREGKEY.aiStoryMode==3); REGREGKEY.recon>=1; dth(1,100)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETLANDBORDER>0; TARGETREGIMEAIID!=32; dth(1,100)<15;||0||501|1|65|0|How will we respond?|1|105|105|3|Request in helping fight Syndic cells|999|10||1||||||
|323|0|Democratic activists request asylum|2|0||(REVREGREGKEY.aiStoryMode<=2|REVREGREGKEY.aiStoryMode==3); REGREGKEY.recon>=1; dth(1,100)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETLANDBORDER>0; TARGETREGIMEFEAT.11<1; dth(1,100)<15;||0||501|1|65|0|Will we provide asylum?|1|105|105|3|Democratic activists request asylum|999|10||1||||||
|324|0|Senator extradition|2|0||(REVREGREGKEY.aiStoryMode<=2|REVREGREGKEY.aiStoryMode==3); REGREGKEY.recon>=1; dth(1,100)<((20*STORYMOD.3)/100); TARGETMAJOR==1; TARGETWAR==0; TARGETREGIMEFEAT.28<1; dth(1,100)<15;||0||501|1|65|0|Will we extradite?|1|105|105|3|Senator extradition|999|10||1||||||
|325|0|Incident with democratic activists|4|0||che(249,27,CHARID,1)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with democratic activists|99|10||1||||||
|326|0|Incident with illicit support to activists|4|0||che(249,27,CHARID,2)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with illicit support to activists|99|10||1||||||
|327|0|Incident with firing a popular subject|4|0||che(249,27,CHARID,3)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with firing a popular subject|99|10||1||||||
|328|0|Incident with <CHARNAME>|4|0||che(249,27,CHARID,4)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with <CHARNAME>|99|10||1||||||
|329|0|Incident concerning safety regulations|4|0||che(249,27,CHARID,5)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident concerning safety regulations|99|10||1||||||
|330|0|Incident with Traders|4|0||che(249,27,CHARID,6)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with Traders|99|10||1||||||
|331|0|Incident with a pardon|4|0||che(249,27,CHARID,7)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with a pardon|99|10||1||||||
|332|0|Incident at the library|4|0||che(249,27,CHARID,8)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident at the library|99|10||1||||||
|333|0|Incident with a hard sentence|4|0||che(249,27,CHARID,9)>0; che(249,28,CHARID,0)>0; dth(1,100)<50;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with a hard sentence|99|10||1||||||
|334|0|Incident with lack of action|4|0||CHARREL<dth(4,20); CHARSTAT.45<dth(3,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with lack of action|99|10||1||||||
|335|0|Incident with perceived cowardice|4|0||CHARREL<dth(4,20); CHARSTAT.46<dth(3,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with perceived cowardice|99|10||1||||||
|336|0|Incident with lack of ambition|4|0||CHARREL<dth(4,20); CHARSTAT.47<dth(3,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with lack of ambition|99|10||1||||||
|337|0|Incident with lack of authority|4|0||CHARREL<dth(4,20); CHARSTAT.48<dth(3,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with lack of authority|99|10||1||||||
|338|0|Incident with missing sense of humor|4|0||CHARREL<dth(4,20); CHARSTAT.51<dth(3,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with missing sense of humor|99|10||1||||||
|339|0|Incident with boldness|4|0||CHARREL<dth(4,20); CHARSTAT.45>dth(7,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with boldness|99|10||1||||||
|340|0|Incident with reckless behaviour|4|0||CHARREL<dth(4,20); CHARSTAT.46>dth(7,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with reckless behaviour|99|10||1||||||
|341|0|Incident with an overambitious order|4|0||CHARREL<dth(4,20); CHARSTAT.47>dth(7,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with an overambitious order|99|10||1||||||
|342|0|Incident with discipline|4|0||CHARREL<dth(4,20); CHARSTAT.48>dth(7,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with discipline|99|10||1||||||
|343|0|Incident with a joke gone wrong|4|0||CHARREL<dth(4,20); CHARSTAT.51>dth(7,20); che(249,28,CHARID,0)>0; dth(1,100)<25; CHARSTAT.6>1; CHARSTAT.6<11;||0||501|1|40|0|Do you respond to this?|1|106|106|4|Incident with a joke gone wrong|99|10||1||||||
|344|0|Resign Decision|0|0||REGKEY.resignRequest==ROUND||0||501|1|40|0|Do you resign?|1|107|107|4|Resign Decision|88|10||1||||||
|345|0|Crime Syndicate has been formed|0|0||(GAMEKEY.syndicate_round==ROUND & TURN>2)|(ROUND<=10 & dth(1,1000)<80 & TURN==2) | (ROUND>1 & dth(1,1000)<20 & TURN==2); REGKEY.syndicate_active<1; (TURN>2 | REGKEY.moduleCount<3); REGKEY.enforcement<dth(1,60);||0||501|1|10|0||0|1001|1001|1|Crime Syndicate has been formed|99|0||||||||
|346|0|Crime Syndicate has been dissolved|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_wrapitup==1||0||501|1|10|0||0|1001|1001|2|Crime Syndicate has been dissolved|99|0||||||||
|347|0|Invite for Dinner|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact<2; dth(1,100)<20; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Take invite from Godfather?|1|1001|1001|0|Invite for Dinner|99|0||||||||
|348|0|Crime Syndicate has a proposal|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact>0; REGKEY.syndicate_strategy==7; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Accept offer?|1|1001|1001|0|Crime Syndicate has a proposal|99|0||||||||
|349|0|Crime Syndicate has a proposal|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact>0; REGKEY.syndicate_strategy==8; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Accept offer?|1|1001|1001|0|Crime Syndicate has a proposal|99|0||||||||
|350|0|Crime Syndicate is displeased|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==1; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate is displeased|99|0||||||||
|351|0|Crime Syndicate cancels deal|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==3; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate cancels deal|99|0||||||||
|352|0|Crime Syndicate goes to war|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==4; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate goes to war|99|0||||||||
|353|0|Crime Syndicate cancels deal|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==5; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate cancels deal|99|0||||||||
|354|0|Crime Syndicate cancels war|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==6; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate cancels war|99|0||||||||
|355|0|Crime Syndicate goes to war|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_strategy==9; REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|How do you respond?|1|1001|1001|0|Crime Syndicate goes to war|99|0||||||||
|356|0|Invite to social club|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact>=1; REGKEY.syndicate_relation<50; REGKEY.syndicate_relation>=30; REGKEY.syndicate_deal>0; dth(1,100)<20;  REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Take invite from Godfather?|1|1001|1001|0|Invite to social club|99|0||||||||
|357|0|A small present|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact>=2; REGKEY.syndicate_relation<70; REGKEY.syndicate_relation>=50; REGKEY.syndicate_deal>0; dth(1,100)<20;  REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Accept the present?|1|1001|1001|0|A small present|99|0||||||||
|358|0|Invite to Godfather's family dinner|0|0|REGKEY.syndicate_leader|REGKEY.syndicate_contact>=3; REGKEY.syndicate_relation>=70; REGKEY.syndicate_deal>0; dth(1,100)<20;  REGKEY.syndicate_totalCrimeLevel>0;||0||501|1|40|0|Take invite from Godfather?|1|1001|1001|0|Invite to Godfather's family dinner|99|0||||||||
|359|0|Corporation has been formed|0|0||(GAMEKEY.corp_round==ROUND & TURN>2)|(ROUND<=15 & dth(1,1000)<80  & TURN==2) | (ROUND>1 & dth(1,1000)<20  & TURN==2); REGKEY.corp_active<1; (TURN>2 | REGKEY.moduleCount<3); REGKEY.commerce>dth(1,60);||0||501|1|10|0||0|1002|1002|1|Corporation has been formed|99|0||||||||
|360|0|Corporation has been dissolved|0|0|REGKEY.corp_leader|REGKEY.corp_wrapitup==1||0||501|1|10|0||0|1002|1002|2|Corporation has been dissolved|99|0||||||||
|361|0|Meeting with CEO|0|0|REGKEY.corp_leader|REGKEY.corp_meeting>0; REGKEY.corp_active>0;||0||501|1|40|0|What would you like to discuss?|1|1002|1002|0|Meeting with CEO|999|0||||||||
|362|0|CEO asks a subsidy|0|0|REGKEY.corp_leader|dth(1,100)<5;||0||501|1|40|0|What should we do?|1|1002|1002|0|CEO asks a subsidy|999|0||||||||
|363|0|CEO asks security cooperation|0|0|REGKEY.corp_leader|REGKEY.corp_crimeMode==3; dth(1,100)<10;||0||501|1|40|0|Should we allocate some time to help them?|1|1002|1002|0|CEO asks security cooperation|999|0||||||||
|364|0|CEO asks you to participate|0|0|REGKEY.corp_leader|dth(1,100)<5;||0||501|1|40|0|Do we want to weigh in?|1|1002|1002|0|CEO asks you to participate|999|0||||||||
|365|0|CEO is pressuring you|0|0|REGKEY.corp_leader|REGKEY.corp_crimeMode==1; dth(1,100)<10;||0||501|1|40|0|What should we do?|1|1002|1002|0|CEO is pressuring you|999|0||||||||
|366|0|CEO has an emergency|3|0|REGKEY.corp_leader|dth(1,100)<5; dth(1,REGKEY.size)<=1;||0||501|1|60|0|What should we do?|1|1002|1002|0|CEO has an emergency|999|0||||||||
|367|0|CEO asks for Tax reduction|0|0|REGKEY.corp_leader|REGKEY.corp_tax>=20; dth(1,100)<7;||0||501|1|40|0|Do you accord the Tax reduction?|1|1002|1002|0|CEO asks for Tax reduction|999|0||||||||
|368|0|A Cult has become active|0|0||(GAMEKEY.cult_round==ROUND & TURN>2)|REGKEY.cult_active<1;||0||501|1|10|0||0|1003|1003|1|A Cult has become active|99|0||||||||
|369|0|Meeting on Shadow Sect|0|0||REGKEY.cult1_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Shadow Sect|99|0||||||||
|370|0|Meeting on Anima Circle|0|0||REGKEY.cult2_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Anima Circle|99|0||||||||
|371|0|Meeting on Church of Syndic|0|0||REGKEY.cult3_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Church of Syndic|99|0||||||||
|372|0|Meeting on Apocrypha Order|0|0||REGKEY.cult4_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Apocrypha Order|99|0||||||||
|373|0|Meeting on Eternity Movement|0|0||REGKEY.cult5_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Eternity Movement|99|0||||||||
|374|0|Meeting on Mystic Temple|0|0||REGKEY.cult6_meeting==1||0||501|1|40|0|What should be our policy?|1|1003|1003|0|Meeting on Mystic Temple|99|0||||||||
|375|0|Shadow Cult requests your help|3|0||REGKEY.cult1_policy<=1; ZONEKEY.cult1_follower>5; ZONEKEY.pop>=150; REGKEY.cult1_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Shadow Cult requests your help|99|10||||||||
|376|0|Anima Circle requests your blessing|3|0||REGKEY.cult2_policy<=1; ZONEKEY.cult2_follower>5; ZONEKEY.pop>=50; REGKEY.cult2_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Anima Circle requests your blessing|99|10||||||||
|377|0|Church of Syndic requests a donation|3|0||REGKEY.cult3_policy<=1; ZONEKEY.cult3_follower>5; ZONEKEY.pop>=50; REGKEY.cult3_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8; REGKEY.compuLevel<1;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Church of Syndic requests a donation|99|10||||||||
|378|0|Apocrypha Order demands public execution|3|0||REGKEY.cult4_policy<=1; ZONEKEY.cult4_follower>5; ZONEKEY.pop>=50; REGKEY.cult4_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Apocrypha Order demands public execution|99|10||||||||
|379|0|Eternity Movement proposes a personal session|3|0||REGKEY.cult5_policy<=1; ZONEKEY.cult5_follower>5; ZONEKEY.pop>=50; REGKEY.cult5_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Eternity Movement proposes a personal session|99|10||||||||
|380|0|Mystic Temple asks help with feasts|3|0||REGKEY.cult6_policy<=1; ZONEKEY.cult6_follower>5; ZONEKEY.pop>=50; REGKEY.cult6_follower>5; dth(1,REGKEY.size)<=1; dth(1,100)<8;||0||501|1|60|0|What do we respond?|1|1003|1003|0|Mystic Temple asks help with feasts|99|10||||||||
|381|0|Omnious sealed door in <ZONENAME>|3|0||ZONEKEY.dungeon1<=1; ZONEKEY.linked<3 | ZONEKEY.dungeon1>0; ZONEKEY.dungeon1_type==0 | ZONEKEY.dungeon1_type==1; ||0||501|1|60|0|What do you recommend?|1|301|0|0|Omnious sealed door in <ZONENAME>|99|||||||||
|382|0|Disease in <ZONENAME>|3|0||ZONEKEY.disease1>0|ZONEKEY.disease1_init>0;||0||501|1|60|0|What do you recommend?|1|302|0|0|Disease in <ZONENAME>|99||||||ZONEKEY.disease1_sleep>0;|||
|383|0|Ancient underground complex in <ZONENAME>|3|0||ZONEKEY.dungeon1<=3; ZONEKEY.dungeon1_type==0 | ZONEKEY.dungeon1_type==2; ZONEKEY.dungeon1_dead<1; ZONEKEY.linked<3 | ZONEKEY.dungeon1>0;||0||501|1|60|0|What do you recommend?|1|301|0|0|Ancient underground complex in <ZONENAME>|99||||||ZONEKEY.dungeon1>=2;|||
|384|0|Retired Militia general in <ZONENAME>|3|0||ZONEKEY.militancy>25; ZONEKEY.general1<2; ZONEKEY.linked<3 | ZONEKEY.general1>0;||0||501|1|60|0|What should I do?|1|301|0|0|Retired Militia general in <ZONENAME>|99||||||ZONEKEY.general1_sleep>0;|||
|385|0|Charismatic union chief in <ZONENAME>|3|0||ZONEKEY.worker>12; ZONEKEY.union1<2; ZONEKEY.linked<3 | ZONEKEY.union1>0;||0||501|1|60|0|What should I do?|1|301|0|0|Charismatic union chief in <ZONENAME>|99||||||ZONEKEY.union1_sleep>0;|||
|386|0|Slave trader in <ZONENAME>|3|0||ZONEKEY.pop>50; ZONEKEY.trader1<2; ZONEKEY.linked<3 | ZONEKEY.trader1>0;||0||501|1|60|0|What should I do?|1|301|0|0|Slave trader in <ZONENAME>|99||||||ZONEKEY.trader1_sleep>0;|||
|387|0|Gladiator Sensei in <ZONENAME>|3|0||che(249,11,ZONEID,841)>0|ZONEKEY.sensei1==1; ZONEKEY.linked<3 | ZONEKEY.sensei1>0;||0||501|1|60|0|What should I do?|1|301|0|0|Gladiator Sensei in <ZONENAME>|99||||||ZONEKEY.sensei1_sleep>0;|||
|388|0|Legendary Courtesan in <ZONENAME>|3|0||che(249,11,ZONEID,871)>0 | che(249,18,ZONEID,0,7)>0 | ZONEKEY.courtesan1==1; ZONEKEY.linked<3 | ZONEKEY.courtesan1>0; ||0||501|1|60|0|What should I do?|1|301|0|0|Legendary Courtesan in <ZONENAME>|99||||||ZONEKEY.courtesan1_sleep>0; |||
|389|0|Monster in <ZONENAME>|3|0||ZONEKEY.monster1<2; ZONEKEY.pop>=10; GAMEKEY.44>=1; ZONEKEY.linked<3 | ZONEKEY.monster1>0;||0||501|1|60|0|What do you recommend?|1|301|0|0|Monster in <ZONENAME>|99||||||ZONEKEY.monster1_sleep>0; |||
|390|0|Rogue doctor in <ZONENAME>|3|0||ZONEKEY.doctor1<2; ZONEKEY.linked<3 | ZONEKEY.doctor1>0;||0||501|1|60|0|What should I do?|1|301|0|0|Rogue doctor in <ZONENAME>|99||||||ZONEKEY.doctor1_sleep>0; |||
|391|0|Maritime Trade Houses are active!<BLOCK>|0|0||ROUND>0||0||501|1|10|0||0|1004|1004|1|Maritime Trade Houses are active!<BLOCK>|99|0|2|||||||
|392|0|MTH Trade stuff<BLOCK>|0|0||ROUND>0||0||501|1|10|0||0|1006|1006|1|MTH Trade stuff<BLOCK>|99|0||||||||
|393|0|MTH Zone events<BLOCK>|0|0||ROUND>0||0||501|1|10|0||0|1007|1007|1|MTH Zone events<BLOCK>|99|0||||||||
|394|0|MTH Alliance events<BLOCK>|0|0||ROUND>0||0||501|1|10|0||0|1008|1008|1|MTH Alliance events<BLOCK>|99|0||||||||
|395|0|Maritime Trade House representative|7|0|TRADEKEY.leader|dth(1,100)<33|TRADEREGKEY.forceContact>0; chk(249,42,TRADEID,REGIMEID,1)>0|TRADEREGKEY.forceContact>0; TRADEREGKEY.forceContact>0|TRADEREGKEY.hi==0 | (TRADEREGKEY.comm==0 & dth(1,100)<20); TRADEREGKEY.forceContact>0|TRADEREGKEY.noMessTill<ROUND; TRADEKEY.leader>0; ROUND>1;||0||501|1|60|0|Do we accept?|1|1004|1004|0|Maritime Trade House representative|99|0|2|||||||
|396|0|MTH recruiting <ZONENAME> Population|3|0||dth(1,100)<15; ROUND<120; ZONEKEY.pop>30; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; TRADEKEY.shipsBought>0; ROUND>3; TRADEREGKEY.noFreePop<1;||0||501|1|60|0|Do we let them?|1|1004|1006|0|MTH recruiting <ZONENAME> Population|99|10||||||||
|397|0|MTH offering to buy <ZONENAME> Population|3|0||dth(1,100)<20; ROUND<170; ZONEKEY.pop>120; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; ROUND>3; TRADEREGKEY.noFreePop>0; dth(1,6)>TRADEREGKEY.noFreePop; chk(249,47,TRADEID)>dth(4,500); TRADEREGKEY.comm>0;||0||501|1|60|0|Do we sell our Population?|1|1004|1006|0|MTH offering to buy <ZONENAME> Population|99|0||||||||
|398|0|MTH offering to buy IP in <ZONENAME>|3|0||dth(1,100)<20; ROUND<170; ZONEKEY.pop>30; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; ROUND>5; dth(1,6)>TRADEREGKEY.noIPsales; chk(249,47,TRADEID)>dth(3,500); chk(249,46,ZONEID,8)>50; TRADEREGKEY.comm>0;||0||501|1|60|0|Do we sell our Industrial Points?|1|1004|1006|0|MTH offering to buy IP in <ZONENAME>|99|0||||||||
|399|0|MTH ship in difficulty|3|0||dth(1,100)<5; ROUND<50; ZONEKEY.pop>30; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; ROUND>5; TEMP5=chk(249,48,REGID); TEMP5=max(1,TEMP5); TEMP6=100/TEMP5; dth(1,100)<TEMP6;||0||501|1|60|0|Will we provide help?|1|1004|1007|0|MTH ship in difficulty|99|10||||||||
|400|0|MTH is transporting Mauraders to <ZONENAME>|3|0||dth(1,100)<5; ROUND<40; ZONEKEY.pop>200; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; ROUND>7; TRADEREGKEY.relation<0; TRADEREGKEY.piracy>0; TEMP5=chk(249,48,REGID); TEMP5=max(1,TEMP5); TEMP6=100/TEMP5; dth(1,100)<TEMP6;||0||501|1|60|0|What will we do?|1|1004|1007|0|MTH is transporting Mauraders to <ZONENAME>|99|10||||||||
|401|0|MTH marriage proposal|3|0|TRADEKEY.leader|dth(1,100)<6; TRADEREGKEY.stock>0; ROUND<160; ZONEKEY.pop>2; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; chk(249,45,TRADEID,100401)>0; ROUND>11; TEMP5=chk(249,48,REGID); TEMP5=max(1,TEMP5); TEMP6=100/TEMP5; dth(1,100)<TEMP6;||0||501|1|60|0|Do we bless this marriage? (and the work involved)?|1|1004|1007|0|MTH marriage proposal|99|10||||||||
|402|0|MTH offers advisor|3|0|TRADEKEY.leader|dth(1,100)<6; TRADEREGKEY.stock>0; ROUND<160; ZONEKEY.pop>2; TRADEID=chk(249,42,ZONEID,REGIMEID,7); TRADEID>0; chk(249,45,TRADEID,100402)>0; ROUND>21; TEMP5=chk(249,48,REGID); TEMP5=max(1,TEMP5); TEMP6=100/TEMP5; dth(1,100)<TEMP6;||0||501|1|60|0|Do we purchase the services of the MTH Advisor?|1|1004|1007|0|MTH offers advisor|99|10||||||||
|403|0|MTH share buyback offer|7|0|TRADEKEY.leader|dth(1,100)<10; TRADEKEY.lastAuction<ROUND; TRADEID>0; TRADERSTAT.credits>5000; TRADEREGKEY.stock>0; TRADEKEY.shipslastround<=TRADEKEY.ships; ROUND>4;||0||501|1|60|0|Do we sell 1 share?|1|1004|1004|0|MTH share buyback offer|99|10|2|||||||
|404|0|MTH offers you a share|7|0|TRADEKEY.leader|dth(1,100)<9; TRADEREGKEY.comm>0; TRADEID>0; TRADERSTAT.credits<2000; TRADEKEY.ownstock>0; TRADEKEY.stockPrice>100; TRADEKEY.lastAuction<ROUND;  TRADEKEY.shipsBought<1; ROUND>6;||0||501|1|60|0|Do we buy 1 share?|1|1004|1004|0|MTH offers you a share|99|10|2|||||||
|405|0|MTH asks for more capital|7|0|TRADEKEY.leader|dth(1,100)<13; TRADEID>0; TRADEKEY.lastAuction<ROUND; TRADERSTAT.credits<1000; TRADEREGKEY.stock>0; ROUND>9;||0||501|1|60|0|Do we give them the Credits?|1|1004|1004|0|MTH asks for more capital|99|10|2|||||||
|406|0|MTH warlust quarrels|7|0||dth(1,100)<6; TRADEKEY.aggression<dth(1,50); TRADEREGKEY.stock>0;||0||501|1|60|0|Do you openly support these calls?|1|1004|1004|0|MTH warlust quarrels|99|10|2|||||||
|407|0|MTH anti-war quarrels|7|0||dth(1,100)<7; TRADEKEY.aggression>(50+dth(1,50)); TRADEREGKEY.stock>0;||0||501|1|60|0|Do you openly support these calls?|1|1004|1004|0|MTH anti-war quarrels|99|10|2|||||||
|408|0|MTH expansion quarrels|7|0||dth(1,100)<8; TRADEKEY.expansion<dth(1,50); TRADEREGKEY.stock>0;||0||501|1|60|0|Do you openly support these calls?|1|1004|1004|0|MTH expansion quarrels|99|10|2|||||||
|409|0|MTH dividend quarrels|7|0||dth(1,100)<8; TRADEKEY.expansion>(50+dth(1,50)); TRADEREGKEY.stock>0;||0||501|1|60|0|Do you openly support these calls?|1|1004|1004|0|MTH dividend quarrels|99|10|2|||||||
|410|0|New Elder took power of MTH|7|0|TRADEKEY.leader|TRADEREGKEY.stock>0; TRADEKEY.elderChanged==ROUND;||0||501|1|60|0|Do you give public support to the new Elder?|1|1004|1004|0|New Elder took power of MTH|99|0|2|||||||
|411|0|Maritime Trade Houses are active!<BLOCK>|0|0||ROUND>0||0||501|1|10|0||0|1005|1005|1|Maritime Trade Houses are active!<BLOCK>|99|0||||||||
|412|0|Harsh nautical justice|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.fist>0|TRADEKEY.goverment>0; TRADEREGKEY.profileStoryCount<dth(1,10);||0||501|1|60|0|Do you protest?|1|1005|1005|0|Harsh nautical justice|99|10||||||||
|413|0|Maritime scientific expedition|7|0||dth(1,100)<6;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.mind>0|TRADEKEY.meritocracy>0; TRADEREGKEY.profileStoryCount<dth(1,10); chk(249,21,REGIMEID,0)>0;||0||501|1|60|0|Do you agree?|1|1005|1005|0|Maritime scientific expedition|99|10||||||||
|414|0|Public offer of a luxury cruise tour|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.heart>0|TRADEKEY.democracy>0; TRADEREGKEY.profileStoryCount<dth(1,10);||0||501|1|60|0|Do you agree?|1|1005|1005|0|Public offer of a luxury cruise tour|99|10||||||||
|415|0|MTH Dock Workers Union|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.democracy>0|TRADEKEY.heart>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.worker>10;||0||501|1|60|0|Would you help us shut down these unionists? Basically by turning a blind eye to our security operation...|1|1005|1005|0|MTH Dock Workers Union|99|10||||||||
|416|0|MTH Renegade Elements|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.autocracy>0|TRADEKEY.fist>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.pop>10;||0||501|1|60|0|Will you let us?|1|1005|1005|0|MTH Renegade Elements|99|10||||||||
|417|0|MTH Talent Recruitment Drive|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.meritocracy>0|TRADEKEY.commerce>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.pop>10;||0||501|1|60|0|We assume our activities are acceptable to you?|1|1005|1005|0|MTH Talent Recruitment Drive|99|10||||||||
|418|0|MTH Bar Fights|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.enforcement>0|TRADEKEY.autocracy>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.pop>30;||0||501|1|60|0|Could you send in your security forces to sort them out?|1|1005|1005|0|MTH Bar Fights|99|10||||||||
|419|0|MTH Investment in Private Economy|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.commerce>0|TRADEKEY.mind>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.pop>90;||0||501|1|60|0|Do we have your permission?|1|1005|1005|0|MTH Investment in Private Economy|99|10||||||||
|420|0|MTH wants more embedded staff|7|0||dth(1,100)<20;  TRADEID==REGKEY.topMTH; REGKEY.topMTHzone>0; TRADEKEY.government>0|TRADEKEY.enforcement>0; TRADEREGKEY.profileStoryCount<dth(1,10); ZONEID=REGKEY.topMTHzone; ZONEKEY.pop>90;||0||501|1|60|0|Are we agreed?|1|1005|1005|0|MTH wants more embedded staff|99|10||||||||
|421|0|MTH proposes Alliance|7|0|TRADEKEY.leader|TRADEID==REGKEY.topMTH; TRADEREGKEY.relation>dth(1,30); TRADEREGKEY.relation>0; dth(1,100)<20; REGKEY.topMTHzone>0; TRADEKEY.feat!=7; REGKEY.mthAlliance<1; TRADEKEY.Alliance<1; REGKEY.mthLastAlliance<1 | REGKEY.mthLastAlliance==TRADEID; (TRADEKEY.allianceRoundOffer+15)<ROUND;||0||501|1|60|0|Do we agree to this Alliance?|1|1008|1008|0|MTH proposes Alliance|99|50||||||||
|422|0|MTH Alliance Review|7|0||REGID==TRADEKEY.Alliance; (TRADEKEY.AllianceLastReview+9)<ROUND;||0||501|1|60|0|Do we continue the Alliance|1|1008|1008|0|MTH Alliance Review|99|20||||||||
|423|0|MTH Leader Recruitment|7|0||REGID==TRADEKEY.Alliance; REGKEY.mthLeadersPool<5; (REGKEY.mthLeadersNeed+1)>=REGKEY.mthLeadersTot;||0||501|1|60|0|Do we accept their recruit?|1|1008|1008|0|MTH Leader Recruitment|199|0||||||||
|424|0|MTH Second Leader Recruitment|7|0||REGID==TRADEKEY.Alliance; REGKEY.mthLeadersPool<3; REGKEY.mthLeadersNeed>=(REGKEY.mthLeadersTot+2);||0||501|1|60|0|Do we accept their recruit?|1|1008|1008|0|MTH Second Leader Recruitment|199|0||||||||
|91|1|Information Exchange Contract Meeting|7||1|TRADEREGKEY.exploreMeeting>0||||917||60|2||1|||||||2|||||||
|92|1|Transport Contract Meeting|7||1|TRADEREGKEY.transportMeeting>0||||918||60|2||1|||||||2|||||||
|93|1|Makeshift Port meeting|7||1|TRADEREGKEY.portMeeting>0||||919||60|2||1|||||||2|||||||
|94|1|Auction|7||1|chk(249,43,TRADEID,REGIMEID)>0||||920||60|2||1|||||||2|||||||
|95|1|Policy|7||1|TRADEREGKEY.policyMeeting>0||||921||60|2||1|||||||2|||||||
|96|1|Recon Contract Meeting|7||1|TRADEREGKEY.reconMeeting>0||||925||60|2||1|||||||2|||||||

