# `Think this can be deleted....` (`510`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `20` |
| Name | [Story_Unrest](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | NAME | `Text` |
| `1` | TITLE | `Text` |
| `2` | TYPE | `Text` |
| `3` | IF | `Text` |
| `4` | SENTENCE1regular | `Text` |
| `5` | SENTENCE1witty | `Text` |
| `6` | SENTENCE1lowIq | `Text` |
| `7` | SENTENCE2regular | `Text` |
| `8` | SENTENCE2witty | `Text` |
| `9` | SENTENCE2lowIq | `Text` |
| `10` | SENTENCE3regular | `Text` |
| `11` | SENTENCE3witty | `Text` |
| `12` | SENTENCE3lowIq | `Text` |
| `13` | KEY QUESTION | `Text` |
| `14` | DECISION1 TEXT | `Text` |
| `15` | REGIMEKEY | `Text` |
| `16` | QTY | `Text` |
| `17` | TRAIT1A | `Text` |
| `18` | TRAIT DELTA | `Text` |
| `19` | TRAIT 1B | `Text` |
| `20` | TRAIT DELTA | `Text` |
| `21` | ADVISE1A_TEXT | `Text` |
| `22` | ADVISE1A_TALKCODE | `Text` |
| `23` | ADVISE1B_TEXT (sardonic) | `Text` |
| `24` | ASVISE1B_TALKCODE | `Text` |
| `25` | ADVISE1C_TEXT (auth+demo) | `Text` |
| `26` | ADVISE1C_TALKCODE | `Text` |
| `27` | RESULT1_SUCCES_TEXT | `Text` |
| `28` | DECISION2 TEXT | `Text` |
| `29` | REGIMEKEY | `Text` |
| `30` | QTY | `Text` |
| `31` | TRAIT2A | `Text` |
| `32` | TRAIT DELTA | `Text` |
| `33` | TRAIT 2B | `Text` |
| `34` | TRAIT DELTA | `Text` |
| `35` | ADVISE2A_TEXT | `Text` |
| `36` | ADVISE2A_TALKCODE | `Text` |
| `37` | ADVISE2B_TEXT (sardonic) | `Text` |
| `38` | ASVISE2B_TALKCODE | `Text` |
| `39` | ADVISE2C_TEXT | `Text` |
| `40` | ADVISE2C_TALKCODE | `Text` |
| `41` | RESULT2_SUCCES_TEXT | `Text` |
| `42` | DECISION3 TEXT | `Text` |
| `43` | REGIMEKEY | `Text` |
| `44` | QTY | `Text` |
| `45` | TRAIT3A | `Text` |
| `46` | TRAIT DELTA | `Text` |
| `47` | TRAIT 3B | `Text` |
| `48` | TRAIT DELTA | `Text` |
| `49` | ADVISE3A_TEXT | `Text` |
| `50` | ADVISE3A_TALKCODE | `Text` |
| `51` | ADVISE3B_TEXT | `Text` |
| `52` | ASVISE3B_TALKCODE | `Text` |
| `53` | ADVISE3C_TEXT | `Text` |
| `54` | ADVISE3C_TALKCODE | `Text` |
| `55` | RESULT3_SUCCES_TEXT | `Text` |
| `56` | DECISION4 TEXT | `Text` |
| `57` | REGIMEKEY | `Text` |
| `58` | QTY | `Text` |
| `59` | TRAIT4A | `Text` |
| `60` | TRAIT DELTA | `Text` |
| `61` | TRAIT 4B | `Text` |
| `62` | TRAIT DELTA | `Text` |
| `63` | ADVISE4A_TEXT | `Text` |
| `64` | ADVISE4A_TALKCODE | `Text` |
| `65` | ADVISE4B_TEXT | `Text` |
| `66` | ASVISE4B_TALKCODE | `Text` |
| `67` | ADVISE4C_TEXT | `Text` |
| `68` | ADVISE4C_TALKCODE | `Text` |
| `69` | RESULT4_SUCCES_TEXT | `Text` |
| `70` | DEFAULT DECISION NUMBER | `Text` |

### Data

| NAME | TITLE | TYPE | IF | SENTENCE1regular | SENTENCE1witty | SENTENCE1lowIq | SENTENCE2regular | SENTENCE2witty | SENTENCE2lowIq | SENTENCE3regular | SENTENCE3witty | SENTENCE3lowIq | KEY QUESTION | DECISION1 TEXT | REGIMEKEY | QTY | TRAIT1A | TRAIT DELTA | TRAIT 1B | TRAIT DELTA | ADVISE1A_TEXT | ADVISE1A_TALKCODE | ADVISE1B_TEXT (sardonic) | ASVISE1B_TALKCODE | ADVISE1C_TEXT (auth+demo) | ADVISE1C_TALKCODE | RESULT1_SUCCES_TEXT | DECISION2 TEXT | REGIMEKEY | QTY | TRAIT2A | TRAIT DELTA | TRAIT 2B | TRAIT DELTA | ADVISE2A_TEXT | ADVISE2A_TALKCODE | ADVISE2B_TEXT (sardonic) | ASVISE2B_TALKCODE | ADVISE2C_TEXT | ADVISE2C_TALKCODE | RESULT2_SUCCES_TEXT | DECISION3 TEXT | REGIMEKEY | QTY | TRAIT3A | TRAIT DELTA | TRAIT 3B | TRAIT DELTA | ADVISE3A_TEXT | ADVISE3A_TALKCODE | ADVISE3B_TEXT | ASVISE3B_TALKCODE | ADVISE3C_TEXT | ADVISE3C_TALKCODE | RESULT3_SUCCES_TEXT | DECISION4 TEXT | REGIMEKEY | QTY | TRAIT4A | TRAIT DELTA | TRAIT 4B | TRAIT DELTA | ADVISE4A_TEXT | ADVISE4A_TALKCODE | ADVISE4B_TEXT | ASVISE4B_TALKCODE | ADVISE4C_TEXT | ADVISE4C_TALKCODE | RESULT4_SUCCES_TEXT | DEFAULT DECISION NUMBER |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Agitators | Independence agitators in <ZONENAME> | 23 | ROUND>15; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<70; ZONEKEY.pop>9; dth(1,100)<15; | In <ZONENAME> the independence movement is expanding. Rebel agitators are now openly and actively recruiting on the streets. |  |  | This is causing unrest and increasing the head count of rebels in our zone. |  |  |  |  |  | What course of action should I take? | Send in the troops to arrest the agitators |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Investigate who is directing the agitators |  |  | meritocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Emigration | Demagogue in <ZONENAME> | 23 | ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<30; | There is word of a demagogue active in the slums. He is ranting against our reign and convincing people that should emigrate or join the free folk. |  |  | It is causing unrest. |  |  |  |  |  | What should we do? | Find this demagogue and arrest him |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Convince the population he is a fraud |  |  | meritocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Harassment | Our worker in <ZONENAME> are harassed | 23 | ROUND>5; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<100; ZONEKEY.pop>9; ZONEKEY.worker>4; dth(1,100)<20; | In <ZONENAME> the people are so upset with their conditions that they started harassing our public workers. |  |  | This is causing unrest and hurting the hapiness of our workers. |  |  |  |  |  | What course of action should I take? | Send in the troops to punish these thieves! |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Investigate who is directing the harassment |  |  | meritocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| majorStrike | Major worker strike in <ZONENAME> | 23 | ROUND>10; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<90; ZONEKEY.worker>9;  dth(1,100)<30; | About 40-80% of the workers of <ZONENAME> are about to start striking. |  |  | They have given us their conditions we have to comply to if we want to avoid the strike. |  |  |  |  |  | What should we do? | Use military force to enforce their contractual obligations |  |  | autocracy | 10 |  |  | Sometimes force and fear need to be wielded to keep the peace. | 1 | I am sure the workers will work at gun point. | 7 | Why do these workers not appreciate they actually have a job? | 10 | I have ordered a crack down on the protest. | Give in to some of their demands | credits | ZONEKEY.worker*2 | democracy | 10 |  |  | Their griefs seems legitamate to me. | 1 | Give them some credits I think they deserve them. | 7 | If we do not support our own workers, who would? | 11 | I have approached the protestors to make funds available to accept some of their demands. | Ignore the protests |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered everybody to leave the protestors alone. |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| minorStrike | Minor worker strike in <ZONENAME> | 23 | TEMP1=((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear); TEMP1<110|ZONEKEY.union1_strike>=ROUND; ZONEKEY.worker>9; dth(1,100)<30|ZONEKEY.union1_strike>=ROUND; ROUND>2; | About 5-20% of the workers of <ZONENAME> are about to start striking. |  |  | They have given us their conditions we have to comply to if we want to avoid the strike. |  |  |  |  |  | What should we do? | Use military force to enforce their contractual obligations |  |  | autocracy | 10 |  |  | Sometimes force and fear need to be wielded to keep the peace. | 1 | I am sure the workers will work at gun point. | 7 | Why do these workers not appreciate they actually have a job? | 10 | I have ordered a crack down on the protest. | Give in to some of their demands | credits | ZONEKEY.worker | democracy | 10 |  |  | Their griefs seems legitamate to me. | 1 | Give them some credits I think they deserve them. | 7 | If we do not support our own workers, who would? | 11 | I have approached the protestors to make funds available to accept some of their demands. | Ignore the protests |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered everybody to leave the protestors alone. |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Petition | Petition in <ZONENAME> | 23 | ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<90; ZONEKEY.pop>9; dth(1,100)<30; | There is some displeasure among your population. A number of prominent business men and family elders have asked the right to petition me. |  |  | Allowing them to do that will very well give the impression their complaints are legitimate. |  |  |  |  |  | What would be wise? | Let them petition you |  |  | democracy | 10 |  |  |  |  |  |  |  |  |  | Intimidate them to drop the petition |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |
| Plunder | Plundering in <ZONENAME>. | 23 | ROUND>15; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<70; ZONEKEY.pop>9; dth(1,100)<15; | In <ZONENAME> the people are out of control and shops are being plundered. |  |  | Public services and assets are under siege. Its almost a warzone out there on the streets. |  |  |  |  |  | What course of action should I take? | Send in the troops to punish these anarchists! |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Interrogate plunderers to find the ringleader |  |  | meritocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Protests | Protests in <ZONENAME> | 23 | ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<100; dth(1,100)<33; | The people of <ZONENAME> have taken to the street to display their displeasure with their living conditions. |  |  | They are disrupting the local order and are causing unrest. |  |  |  |  |  | What should we do? | Send in the troops to end this protest |  |  | autocracy | 10 |  |  | Sometimes force and fear need to be wielded to keep the peace. | 1 | I am sure the people hold their own live deerer than their ideals. | 7 | How do these people dare question their masters? | 10 | I have ordered a crack down on the protest. | Give in to some of their demands | credits | ZONEKEY.pop | democracy | 10 |  |  | Their griefs seems legitamate to me. | 1 | Give them some credits, they'll pay it back by way of taxes. | 7 | We are here to serve the people are we not? | 11 | I have approached the protestors to make funds available to accept some of their demands. | Calm down the protestors by talking to them |  |  | meritocracy | 10 |  |  | Nothing that cannot be solved by a good talk. | 1 | How hard can it be to change the minds of those simpletons? | 7 | A leader to instruct them and tell them their place. That is what they need. | 10 | I went out in to the streets to parley with the protestors. | Ignore the protests |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered everybody to leave the protestors alone. | 4 |
| Rally | Independence rallies in <ZONENAME> | 23 | ROUND>20; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<60; ZONEKEY.pop>9;  dth(1,100)<15; | Very bad news. In <ZONENAME> the independence movement is now openly holding huge rallies on the streets. |  |  | This is causing unrest and hugely increasing the head count of rebels in our zone. |  |  |  |  |  | What course of action should I take? | Send in the troops to crackdown on the rallies |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 2 |
| Riots | Riots in <ZONENAME> | 23 | ROUND>10; ((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<20; | The people of <ZONENAME> have started violent protests. There is now rioting in our streets and domes. |  |  | Loyalist population is being agressed and there are even fire fights breaking out. |  |  |  |  |  | What should we do? | Send in the troops to end these riots |  |  | autocracy | 10 |  |  | Sometimes force and fear need to be wielded to keep the peace. | 1 | I am sure the people hold their own live deerer than causing mayhem. | 7 | How do these people dare behave like this! | 10 | I have ordered a crack down on the protest. | Give credits to appease them | credits | ZONEKEY.pop | democracy | 10 |  |  | Their griefs seems legitamate to me. | 1 | Give them some credits, they'll pay it back by way of taxes after things settle down again. | 7 | Anger comes from frustration, we must address that, not punish them for our faults. | 11 | I have approached the rioters to make funds available to accept some of their demands. | Calm down the rioters by talking to them |  |  | meritocracy | 10 |  |  | Nothing that cannot be solved by a good talk. | 1 | How hard can it be to change the minds of those simpletons? | 7 | A leader to instruct them and tell them their place. That is what they need. | 10 | I went out in to the streets to parley with the protestors.rioters. | Ignore the riots |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered everybody to leave the rioters alone. | 4 |
| Sabotage | Sabotage in <ZONENAME> | 23 | ROUND>20; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<60; ZONEKEY.worker>9;  dth(1,100)<20; | Workers are very unhappy in <ZONENAME> and now this has even resulted in a saboteur being active. |  |  | This is not only causing unrest but also serious public production penalties. |  |  | The saboteur left written threats with the machines he disabled. Apparently an extra payment of credits will convince him to stop his sabotage. |  |  | What should we do? | Investigate who is the saboteur |  |  | meritocracy | 10 |  |  | Lets find the cullprit! | 1 | The fool who plays with his live and others for... for what? a few credits? | 7 | We need to lynch this traitor! | 11 |  | Give an extra payment to the workers | credits | ZONEKEY.worker*3 | democracy | 10 |  |  | We can ill afford production penalties. | 1 | Sometimes you have to bow for blackmail. | 7 | The saboteurs method are unsound, but his cause seems just. | 10 | I have approached the protestors to make funds available to accept some of their demands. | Ignore the agitation |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered do let it pass. |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Theft | Food Theft in <ZONENAME> | 23 | ROUND>5;((ZONEKEY.popHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.pop>9; dth(1,100)<20; | The population is angry with us. And now there is increasing reports of food theft from our store houses! |  |  | It is not only causing unrest, but it is also losing us food. |  |  |  |  |  | What should we do? | Send in the troops to punish these thieves! |  |  | autocracy | 10 |  |  |  |  |  |  |  |  |  | Interrogate thieves to find the ringleader |  |  | meritocracy | 10 |  |  |  |  |  |  |  |  |  | Do nothing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |
| Walkout | Walkout agitator in <ZONENAME> | 23 | ROUND>15; ((ZONEKEY.workerHapiness)-(ZONEKEY.unrest+REGKEY.epochUnrest)+(dth(3,20))+(REGIMEKEY.popularity/4)+ZONEKEY.fear)<80; ZONEKEY.worker>9;  dth(1,100)<20; | Workers are being agitated into leaving your public assets in <ZONENAME>. |  |  | We could undermine the agitator by doing an extra payment or we could try to find and arrest him. |  |  |  |  |  | What should we do? | Investigate who is the agitator |  |  | meritocracy | 10 |  |  | Lets find the cullprit! | 1 | If we remove the black sheep the rest will flock around us again. | 7 | Are these spoilt brats of workers never satisfied? | 10 |  | Give in to some of their demands | credits | ZONEKEY.worker*2 | democracy | 10 |  |  | The agitators arguments seems legitamate to me. | 1 | Give the workers some credits and it will discredit the agitator. | 7 |  |  | I have approached the protestors to make funds available to accept some of their demands. | Ignore the agitation |  |  |  |  |  |  |  |  |  |  |  |  | I have ordered do let it pass. |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 |

