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

### Rows (`75`)

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

