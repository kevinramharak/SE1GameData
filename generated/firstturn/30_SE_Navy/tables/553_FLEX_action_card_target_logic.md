# `FLEX action card target logic` (`553`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `30` |
| Name | [SE_Navy](../) |
| Library ID | `553` |

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
| [100401] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.exploreMeeting<1; | You already have an Exploration Contract meeting scheduled with this Maritime Trade House. | 1 |
| [100401][100402][100404][100405][100406][100407][100408][100409][100411] | chk(249,42,ZONEID,REGIMEID,3)>0 | If there is a Maritime Trade House active in this Zone we are not in communicatons with them. | 1 |
| [100402] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.transportMeeting<1; | You already have a Transport Contract meeting scheduled with this Maritime Trade House. | 1 |
| [100403] | TRADEID=chk(249,42,ZONEID,REGIMEID,13); TRADEREGKEY.comm<1; TRADEREGKEY.forceContact<1; | The Maritime Trade House will already contact you next round. Or you are already in communications with them. | 1 |
| [100403][100412][100413][100414] | chk(249,42,ZONEID,0,6)>0; chk(249,42,ZONEID,0,7)>0; | You cannot pick a land Zone or a Zone without an MTH as the target for this Stratagem. | 1 |
| [100404] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.portMeeting<1; | You already have a makeshift port meeting scheduled with this Maritime Trade House. | 1 |
| [100404] | chk(249,42,ZONEID,REGIMEID,10)>0 | Selected Sea Zone does not have any coastal Hex controlled by you, without port and with Naval Logistical Points. | 1 |
| [100405] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); TRADEREGKEY.policyMeeting<1; | You already have a Policy Meeting scheduled with this MTH. | 1 |
| [100405] | chk(249,42,TRADEID,REGIMEID,4)>0 | You do not own any stocks in this MTH. Hence no Policy Meeting can be scheduled. | 1 |
| [100406] | REGKEY.credits>=2000 | You do not have 2000 Credits | 1 |
| [100407][100408] | TRADEID=chk(249,42,ZONEID,REGIMEID,3); chk(249,42,TRADEID,REGIMEID,4)>0 | You do not own any stocks in this MTH. | 1 |
| [100410] | chk(249,42,ZONEID,0,7)<1 | You need to pick a Sea Zone without an MTH. | 1 |
| [100410] | REGKEY.credits>=500 | You do not have 500 Credits | 1 |
| [100414] | TRADEID=chk(249,42,ZONEID,REGIMEID,7); chk(249,42,TRADEID,REGIMEID,11)>1; | Selected MTH does not have 2 Sea Zones or more. | 1 |
| [100415] | chk(249,42,ZONEID,REGIMEID,17)>0 | Zone does not border a MTH you are in communications with. | 1 |
| [100415] | REGKEY.credits>=100 | You do not have 100 Credits. | 1 |

