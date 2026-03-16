# `Flex Diplomatic Action FX vs AI` (`462`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `26` |
| Name | [SE_Linked](../) |
| Library ID | `462` |

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
| [1201] |  | TEMP4=dth(4,6); TEMP4=TEMP4+(TARGETCHARSTAT.45/10); TEMP4=TEMP4+(TARGETCHARSTAT.49/10); TEMP4=TEMP4+(TARGETCHARSTAT.49/10); TARGETCHARSTAT.20=TARGETCHARSTAT.20+TEMP4; TARGETCHARSTAT.20=min(100,TARGETCHARSTAT.20); | <TARGETCHARNAME> was pleased with your wonderful present. Relation increased with at least +<TEMP4> points. | 1 | 1 | Gives selected Leader a relation boost (the more emotional and the more corrupt the better). |  |

