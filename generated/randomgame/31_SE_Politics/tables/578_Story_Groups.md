# `Story Groups` (`578`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `31` |
| Name | [SE_Politics](../) |
| Library ID | `578` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Story Group Id | `Text` |
| `1` | Name / Label | `Text` |
| `2` | SET decisions per turn | `Text` |
| `3` | reserve | `Text` |
| `4` | SET complex stories running | `Text` |

### Data

| Story Group Id | Name / Label | SET decisions per turn | reserve | SET complex stories running |
| --- | --- | --- | --- | --- |
| 204 | Politics Republica | 100 |  | 1 |
| 206 | Leader Compu Accidents | 200 |  | 1 |
| 207 | SSF Events | 300 |  | 0 |
| 208 | Leader Spoiled Dem Events | max(100,(((1000-REGKEY.virtus)-400)/5)) |  | 0 |
| 209 | Syndic Compu Foreign Rel | 100 |  | 0 |
| 210 | Syndic Compu Demands | 5+(REGKEY.compuLevel*5) |  | 0 |
| 211 | Syndic Char SSF nationalizations | 3*(REGKEY.compuLevel*REGKEY.compuLevel) |  | 0 |
| 212 | Oligarch Events | 50 |  | 0 |
| 213 | Feudal Events | 50 |  | 0 |
| 214 | Tyrant Events | 200 |  | 0 |
| 215 | Fanatical Events | 200 |  |  |
| 216 | Inertia Events | 100 |  |  |
| 217 | Law-based Decisions | 300 |  |  |
| 218 | Morality Decisions | 15 |  |  |
| 299 | DSD Decisions | 100 |  |  |

