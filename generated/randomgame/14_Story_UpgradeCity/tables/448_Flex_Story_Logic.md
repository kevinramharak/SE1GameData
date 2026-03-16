# `Flex Story Logic` (`448`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `14` |
| Name | [Story_UpgradeCity](../) |
| Library ID | `448` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Complex Story ID | `Text` |
| `1` | Check Type | `Text` |
| `2` | Check Logic | `Text` |
| `3` | Set Logic | `Text` |
| `4` | Log Text | `Text` |
| `5` | Mode | `Text` |
| `6` | Group | `Text` |
| `7` | Det.News.Type | `Text` |
| `8` | Cust.Rep.Name | `Text` |
| `9` | Cust.Subhead | `Text` |
| `10` | Uds Placement | `Text` |

### Data

| Complex Story ID | Check Type | Check Logic | Set Logic | Log Text | Mode | Group | Det.News.Type | Cust.Rep.Name | Cust.Subhead | Uds Placement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 3 | (ZONEKEY.city>1) & (((ZONEKEY.worker+ZONEKEY.pop)<=100) | ZONEKEY.city=1 | City of <ZONENAME> has downgrade to Level 1 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>2) & (((ZONEKEY.worker+ZONEKEY.pop)<=250) | ZONEKEY.city=2 | City of <ZONENAME> downgrade to Level 2 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>3) & (((ZONEKEY.worker+ZONEKEY.pop)<=500) | ZONEKEY.city=3 | City of <ZONENAME> downgrade to Level 3 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>4) & ((ZONEKEY.worker+ZONEKEY.pop)<=1000) | ZONEKEY.city=4 | City of <ZONENAME> downgrade to Level 4 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>5) & ((ZONEKEY.worker+ZONEKEY.pop)<=2000) | ZONEKEY.city=5 | City of <ZONENAME> downgrade to Level 5 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |
| 0 | 3 | (ZONEKEY.city>6) & ((ZONEKEY.worker+ZONEKEY.pop)<=3250) | ZONEKEY.city=6 | City of <ZONENAME> downgrade to Level 6 due to loss of Populace. | 1 |  |  | City of <ZONENAME> downgrade |  | 2 |

