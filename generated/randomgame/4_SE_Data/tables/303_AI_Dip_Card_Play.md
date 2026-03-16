# `AI Dip Card Play` (`303`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Card Id | `Text` |
| `1` | PP Cost for AI | `Text` |
| `2` | Weight SET logic | `Text` |

### Data

| Card Id | PP Cost for AI | Weight SET logic |
| --- | --- | --- |
| 1 | 5 | REGREGKEY.aiIntention * 6 |
| 2 | 15 | REGREGKEY.aiIntention * 3 |
| 3 | 25 | REGREGKEY.aiIntention * 2 |
| 4 | 10 | 100 - REGREGKEY.aiIntention |
| 5 | 10 | REGREGKEY.aiIntention * 4 |
| 6 | 20 | REGREGKEY.aiIntention * 3 |
| 7 | 30 | REGREGKEY.aiIntention * 2 |
| 8 | 10 | 50-(REGREGKEY.aiIntention/2) |
| 8 | 10 | 300 |
| 9 | 10 | REGREGKEY.aiIntention * 5 |
| 10 | 20 | REGREGKEY.aiIntention * 3 |
| 11 | 30 | REGREGKEY.aiIntention * 2 |
| 12 | 10 | 100 - REGREGKEY.aiIntention |
| 12 | 10 | 400 |
| 13 | 20 | REGREGKEY.aiIntention |
| 14 | 40 | REGREGKEY.aiIntention / 2 |
| 15 | 60 | REGREGKEY.aiIntention / 3 |
| 16 | 10 | 250 |
| 16 | 10 | 200 - REGREGKEY.aiIntention |
| 16 | 10 | 200 - REGREGKEY.aiIntention |
| 25 | 10 | 100 - REGREGKEY.aiIntention |
| 25 | 10 | 100 - REGREGKEY.aiIntention |
| 25 | 10 | 100 - REGREGKEY.aiIntention |
| 26 | 5 | (REGREGKEY.aiIntention * 2)+(REGREGKEY.aiLove * 2) |
| 27 | 10 | 100 - REGREGKEY.aiIntention |
| 27 | 5 | 100 - REGREGKEY.aiIntention |
| 27 | 5 | 100 - REGREGKEY.aiIntention |
| 28 | 10 | 50 |
| 28 | 10 | 65 |
| 29 | 40 | REGREGKEY.aiIntention |
| 29 | 40 | REGREGKEY.aiIntention |
| 33 | 10 | 50 |
| 101 | 10 | 50-(REGREGKEY.aiIntention/2) |
| 102 | 10 | (REGREGKEY.aiIntention*2)+(REGREGKEY.relation*2) |
| 103 | 10 | REGREGKEY.aiIntention + REGREGKEY.relation + 35 |
| 105 | 10 | (REGREGKEY.relation-10)*dth(2,4) |
| 106 | 10 | (REGREGKEY.relation*2)+dth(5,10) |

