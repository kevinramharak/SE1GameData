# `FLEX action card target logic` (`585`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `31` |
| Name | [SE_Politics](../) |
| Library ID | `585` |

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
| [2590][2591][2592] | ZONESTAT.1<2 | You can only target Land Zones | 1 |
| [2590][2591][2592] | TARGETREGIMEID==SOURCEREGIMEID | You can only target friendly Zones. | 1 |
| [2594][2955][2956] | REGZONEKEY.recon>=0 | You have no recon on zone. | 1 |
| [2594][2955][2956] | ZONESTAT.1<2 | You can only target Land Zones | 1 |
| [2594][2955][2956] | TARGETREGIMEID!=SOURCEREGIMEID | You cannot target yourself. | 1 |
| [961] | TARGETCHARKEY.compuInfo<ROUND | You already have access to this Leader's Computer records. | 1 |
| [961][962][963][964][965][966][967] | REGKEY.compuLevel>0 | The Computer is not currently online. | 1 |
| [963] | REGIMEFEAT.454<1|REGIMEFEAT.464<1|REGIMEFEAT.474<1 | No more upgrades to the Syndic Computer are possible. | 1 |
| [965] | TARGETCHARKEY.clearanceLevel<2 | Targetted Leader's Clearance Level too high for this Stratagem. | 1 |

