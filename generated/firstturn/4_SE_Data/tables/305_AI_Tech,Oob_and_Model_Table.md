# `AI Tech,Oob and Model Table` (`305`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Highest SHQ Stage | `Text` |
| `1` | Tech ID | `Text` |
| `2` | Model Type ID | `Text` |
| `3` | OOB Type ID | `Text` |
| `4` | Data1 | `Text` |
| `5` | Data2 | `Text` |
| `6` | IF | `Text` |
| `7` | SET | `Text` |
| `8` | Weight | `Text` |

### Data

| Highest SHQ Stage | Tech ID | Model Type ID | OOB Type ID | Data1 | Data2 | IF | SET | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 |  | 1 |  | 11 | 24 | (REGIMEKEY.mt1<1)|(REGIMEKEY.mt1<(ROUND-20)) | REGIMEKEY.mt1=ROUND | 10 |
| 1 | 43 |  |  |  |  |  |  | 10 |
| 1 | 53 |  |  |  |  |  |  | 10 |
| 2 |  |  | 1 |  |  |  |  | 10 |
| 2 |  | 31 |  | 82 | 202 | (REGIMEKEY.mt31<1)|(REGIMEKEY.mt31<(ROUND-20)) | REGIMEKEY.mt31=ROUND | 10 |
| 2 | 62 |  |  |  |  |  |  | 10 |
| 2 | 57 |  |  |  |  |  |  | 10 |
| 3 |  | 22 |  | 86 | 24 | (REGIMEKEY.mt22<1)|(REGIMEKEY.mt22<(ROUND-20)) | REGIMEKEY.mt22=ROUND | 10 |
| 3 | 7 |  |  |  |  | (TECH.7<1)|(TECH.7>TECH.21); GAMEKEY.11>=2 |  | 10 |
| 3 | 21 |  |  |  |  | (TECH.21<1)|(TECH.7<TECH.21) |  | 10 |
| 3 | 53 |  |  |  |  |  |  | 10 |
| 3 | 59 |  |  |  |  |  |  | 10 |
| 4 |  | 32 |  | 83 | 203 | (REGIMEKEY.mt32<1)|(REGIMEKEY.mt32<(ROUND-20)) | REGIMEKEY.mt32=ROUND | 10 |

