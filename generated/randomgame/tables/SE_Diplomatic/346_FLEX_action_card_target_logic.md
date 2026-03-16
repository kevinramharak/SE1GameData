## `SE_Diplomatic.'FLEX action card target logic'` (id = `346`)

### Columns (`4`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID list [][] | Text 
| `1` | Target IF Logic | Text 
| `2` | Text if not TRUE | Text 
| `3` | TRUE is 1 or 0 | Text 

### Rows (`74`)

| Card ID list [][] | Target IF Logic | Text if not TRUE | TRUE is 1 or 0 |
| --- | --- | --- | --- |
|[1]|REGREGKEY.dipRel==0|Contact is already opened with target regime.|1|
|[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][28][29][30][31][32][33]|TARGETMAJOR==1|Target is not a MAJOR regime.|1|
|[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][25][26][27][28][29][30][31][32][33]|REGREGKEY.cardPlayed<ROUND|Already executed a stratagem on target regime.|1|
|[31][32]|TARGETREGIMESTAT.13>0|Target is not an AI controlled regime.|1|
|[104]|TARGETMAJOR==2|Target is not a MINOR regime.|1|
|[104]|REGREGKEY.cardPlayed<ROUND|Already executed a stratagem on target regime.|1|
|[2]|REGREGKEY.dipRel>1|You already have an embassy in the target regime.|0|
|[2]|REGREGKEY.dipRel<1|You have not opened contacts yet with target regime.|0|
|[2]|REGREGKEY.relation >=30|You must have at least a relation score of 30 points with target regime.|1|
|[3]|REGREGKEY.dipRel>2|You already have a cultural exchange program in place with target regime.|0|
|[3]|REGREGKEY.dipRel<2|You need to have an embassy in the targer regime.|0|
|[3][7][10][13]|REGREGKEY.relation >=60|You must have at least a relation score of 60 points with target regime.|1|
|[4]|(REGREGKEY.dipRel>1) | (REGREGKEY.dipRel==1 & REGREGKEY.dipTrade==0 & REGREGKEY.dipRes==0 & REGREGKEY.dipPact==0)|You can only break contact with target regime if you have no trade, research or pact still intact.|1|
|[5][6][7][9][10][11][13][14][15]|REGREGKEY.dipRel>0|You need to have diplomatic contact with target regime.|1|
|[5]|REGREGKEY.dipTrade==0|You are already trading with target regime.|1|
|[5][6][7][9][10][11][13][14][15][2][3]|TARGETWAR<1|You are not at peace with this regime.|1|
|[5]|REGREGKEY.relation >=40|You must have at least a relation score of 40 points with target regime.|1|
|[6]|REGREGKEY.dipTrade<1|You need to have a trade relation with target regime to propose free trade.|0|
|[6]|REGREGKEY.dipTrade>1|You already have free trade with target regime.|0|
|[6][9]|REGREGKEY.relation >=50|You must have at least a relation score of 50 points with target regime.|1|
|[7]|REGREGKEY.dipTrade<2|You need to have free trade relation with target regime.|0|
|[7]|REGREGKEY.dipTrade>2|You already have fee movement of people with target regime.|0|
|[8]|REGREGKEY.dipTrade>0|You need to have at least a trade relation with target regime.|1|
|[9]|REGREGKEY.dipRes==0|You are already scientifically cooperating with target regime.|1|
|[10]|REGREGKEY.dipRes<1|You need to start scientific cooperation with target regime first.|0|
|[10]|REGREGKEY.dipRes>1|You are already doing scientific exchange with the target regime.|0|
|[11]|REGREGKEY.dipRes<2|You need to start scientific exchange with target regime first.|0|
|[11]|REGREGKEY.dipRes>2|You already in a scientific joint effort with the target regime.|0|
|[11][14]|REGREGKEY.relation >=70|You must have at least a relation score of 70 points with target regime.|1|
|[12]|REGREGKEY.dipRes>0|You need to have some sort of scientific cooperation in place with target regime.|1|
|[13]|REGREGKEY.dipPact==0|You already have a non-agression pact with target regime.|1|
|[14]|REGREGKEY.dipPact<1|You first need to have non-agression pact with target regime.|0|
|[14]|REGREGKEY.dipPact>1|You already have a friendship pact with target regime.|0|
|[15]|REGREGKEY.dipPact<2|You first need to have a friendship pact in place with target regime.|0|
|[15]|REGREGKEY.dipPact>2|You already have a victory pact in place with target regime.|0|
|[15]|REGREGKEY.relation >=80|You must have at least a relation score of 70 points with target regime.|1|
|[13]|STORYMOD.1>0 | TARGETREGIMESTAT.13<1;|Regime does not have a Faction in power that supports such as pact.|1|
|[14]|STORYMOD.1>=25 | TARGETREGIMESTAT.13<1;|Regime does not have a Faction in power that supports such as pact.|1|
|[15]|STORYMOD.1>=50 | TARGETREGIMESTAT.13<1;|Regime does not have a Faction in power that supports such as pact.|1|
|[16]|REGREGKEY.dipPact>0|You need to have some sort of pact, at least non-agression, in place with target regime.|1|
|[25][32][49]|TARGETWAR==0|You can only play if at peace with target regime.|1|
|[27]|TARGETMAJOR==1|Target is not a MAJOR regime.|1|
|[49]|TARGETMAJOR==2|TARGETMAJOR==3|Target is not a MINOR regime.|1|
|[26]|TARGETWAR==1|You can only propose peace if you are at war with target regime.|1|
|[26]|REGREGKEY.relation >=25|You must have at least a relation score of 25 points with target regime.|1|
|[33]|TARGETWAR==1|You can only make an ouverture on a Regime you are at war with.|1|
|[104]|TARGETWAR==1|REGREGKEY.dipClear<1|You can only propose peace if you are at war with target regime.|1|
|[27]|TARGETWAR==0|You must be at peace with target regime in order to declare war.|1|
|[28]|REGKEY.credits>=400|You need at least 400 credits to make this gift.|1|
|[29]|REGKEY.credits>=1000|You need at least 1000 credits to make this gift.|1|
|[30]|REGKEY.credits>=2500|You need at least 2500 credits to make this gift.|1|
|[28][29][30]|REGREGKEY.aiStoryMode<4|n/a|1|
|[101][102][103][105][106][107][108]|TARGETMAJOR==2|Target is not a MINOR regime.|1|
|[101][102][103][105][106][1]|TARGETCULTURE>=121;TARGETCULTURE<=129;|Cannot target alien natives with this Stratagem.|0|
|[101][102][103][105][106][107][108]|TARGETWAR==0|You must be at peace with target regime.|1|
|[101][102][103][105][106][107][108]|REGREGKEY.cardPlayed<ROUND|You already executed a stratagem on this target regime.|1|
|[102]|TARGETREGKEY.protector<1|Target regime already has a protector.|1|
|[102][103]|TARGETREGKEY.master<1|Target regime already has a master.|1|
|[103]|(TARGETREGKEY.protector<1 | TARGETREGKEY.protector==REGIMEID);|Target regime has another protector than you.|1|
|[102][103]|chk(249,40,TARGETREGIMEID)<1|Target is already at war with a Major.|1|
|[105][106]|(TARGETREGKEY.master==REGIMEID | TARGETREGKEY.protector==REGIMEID);|Your neither the master or the protector of this regime.|1|
|[107][108]|TARGETCULTURE>=121;TARGETCULTURE<=129;|This is not a native alien regime.|1|
|[201]|REGZONEKEY.recon>=0|You have no recon on zone.|1|
|[202]|REGZONEKEY.recon>=0|You have no recon on zone.|1|
|[203]|REGZONEKEY.recon>=0|You have no recon on zone.|1|
|[201][202][203]|ZONESTAT.1<2|You can only target Land Zones|1|
|[701][704][707]|REGZONEKEY.recon>=2|You need at least 2 recon points on zone.|1|
|[702][705][708]|REGZONEKEY.recon>=5|You need at least 5 recon points on zone.|1|
|[703][706][709]|REGZONEKEY.recon>=10|You need at least 10 recon points on zone.|1|
|[701][702][703][704][705][706][707][708][709]|TARGETMAJOR==1|Target is not a MAJOR regime.|1|
|[701][702][703][704][705][706][707][708][709]|REGREGKEY.dipPact==0|You can only target regimes where you have no military pact with.|1|
|[201][202][203]|TARGETREGIMEID!=SOURCEREGIMEID|You cannot target yourself.|1|
|[32]|REVREGREGKEY.aiStoryMode>=1; REVREGREGKEY.aiStoryMode<=2;|You can only target a Major Regime that sees itself as a Friend or an Ally.|1|
|[31]|TARGETMAJOR==1|Target is not a MAJOR regime.|1|

