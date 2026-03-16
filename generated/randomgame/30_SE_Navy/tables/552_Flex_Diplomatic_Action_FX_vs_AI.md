# `Flex Diplomatic Action FX vs AI` (`552`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `30` |
| Name | [SE_Navy](../) |
| Library ID | `552` |

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

