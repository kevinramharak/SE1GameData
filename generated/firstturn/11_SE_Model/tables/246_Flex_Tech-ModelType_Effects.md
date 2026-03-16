# `Flex Tech-ModelType Effects` (`246`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `11` |
| Name | [SE_Model](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Tech Type Id | `Text` |
| `1` | Model Type ID | `Text` |
| `2` | Stat Type modified | `Text` |
| `3` | Modifier Abs Logic | `Text` |
| `4` | Modifier Rnd Logic | `Text` |
| `5` | If Logic if applied? | `Text` |

### Data

| Tech Type Id | Model Type ID | Stat Type modified | Modifier Abs Logic | Modifier Rnd Logic | If Logic if applied? |
| --- | --- | --- | --- | --- | --- |
| 53 | [all] | 11 | VALUE / 2 |  | STAT.2>0; |
| 54 | [all] | 2 | STAT.2 * VALUE / 200 |  | (STAT.41>=11 & STAT.41<=59); STAT.37==1; |
| 57 | [all] | 2 | STAT.2 * VALUE / 200 |  | STAT.41>=81; STAT.41<=99; STAT.37==1; |
| 62 | [all] | 4 | STAT.4 * VALUE / 200 |  | STAT.42>=200; STAT.42<=229; |
| 66 | [all] | 21 | VALUE * 2 / 3 |  | STAT.39==1 |
| 71 | [all] | 2 | STAT.2 * VALUE / 200 |  | (STAT.41>=11 & STAT.41<=59); STAT.37>=2; STAT.37!=6; |
| 72 | [all] | 2 | STAT.2 * VALUE / 100 |  | STAT.37==6 |
| 73 | [all] | 4 | STAT.4 * VALUE / 100 |  | STAT.38==4 |
| 74 | [all] | 2 | STAT.2 * VALUE / 200 |  | STAT.41>=101; STAT.41<=129; STAT.37>2; STAT.37!=6; |
| 75 | [all] | 4 | STAT.4 * VALUE / 200 |  | STAT.42>=21; STAT.42<=30 |
| 104 | [51][52] | 2 | STAT.2 * VALUE / 200 |  |  |
| 106 | [61][62][63] | 44 | STAT.44 * VALUE / 200 |  | STAT.44>0; |
| 107 | [61][62][63][64][3] | 2 | STAT.2 * VALUE / 200 |  |  |
| 129 | [all] | 22 | (100-STAT.22)/3 |  | TECH.129>=100; STAT.201>0; STAT.202<1; STAT.203<1; |
| 130 | [all] | 211 | 50 |  | TECH.130>=100; STAT.201>0; STAT.202<1; STAT.203<1; |
| 131 | [all] | 12 | 50 |  | TECH.131>=100; STAT.201>0; STAT.202<1; STAT.203<1; |
| 132 | [all] | 11 | 50 |  | TECH.132>=100; STAT.201>0; STAT.202<1; STAT.203<1; |
| 137 | [all] | 231 | 28 |  | STAT.6==2; TECH.137>=100; |
| 137 | [all] | 231 | 32 |  | STAT.6<=1; TECH.137>=100; |
| 137 | [all] | 231 | 24 |  | STAT.6==3; TECH.137>=100; |
| 137 | [all] | 231 | 20 |  | STAT.6==4; TECH.137>=100; |
| 137 | [all] | 231 | 12 |  | STAT.6==6; TECH.137>=100; |
| 137 | [all] | 231 | 16 |  | STAT.6==5; TECH.137>=100; |
| 137 | [all] | 231 | 4 |  | STAT.6==8; TECH.137>=100; |
| 137 | [all] | 231 | 8 |  | STAT.6==7; TECH.137>=100; |
| 138 | [all] | 72 | STAT.72 |  | MODELTYPE!=11; TECH.138>=100; |
| 139 | [all] | 241 | 40 |  | STAT.42>=25; STAT.42<=30; TECH.139>=100; |
| 139 | [all] | 241 | 40 |  | STAT.42>=200; STAT.42<=229; TECH.139>=100; |
| 306 | [31][32][33][34][35][36] | 13 | 200 |  | TECH.306>=100; |
| 306 | [31][32][33][34][35][36] | 98 | 1 |  | TECH.306>=100; |
| 312 | [all] | 12 | VALUE / 2 |  | TECH.312>=100; (STAT.41>=81 & STAT.41<=89) | (STAT.41>=151 & STAT.41<=169) |
| 313 | [all] | 72 | STAT.72 |  | MODELTYPE!=11; TECH.313>=100; |
| 401 | [all] | 540 | 34 |  | TECH.401>=100 |
| 402 | [all] | 11 | 25 |  | TECH.402>=100; STAT.201>0; STAT.202<1; STAT.203<1; |
| 403 | [all] | 2 | STAT.2*33/100 |  | TECH.403>=100; STAT.41>=101; STAT.41<=129; STAT.37>2; STAT.37!=6; |
| 404 | [all] | 242 | 1 |  | TECH.404>=100; STAT.44>0; |
| 408 | [all] | 4 | STAT.4 * 3/4 |  | TECH.408>=100; STAT.42==24; |
| 408 | [all] | 4 | STAT.4 /2 |  | TECH.408>=100; STAT.42==25; |
| 408 | [all] | 4 | STAT.4 /4 |  | TECH.408>=100; STAT.42==26; |
| 410 | [all] | 11 | 50 |  | TECH.410>=100; STAT.41>=40; STAT.41<=45; |
| 410 | [all] | 11 | 50 |  | TECH.410>=100; STAT.41>=50; STAT.41<=55; |
| 410 | [all] | 11 | 50 |  | TECH.410>=100; STAT.41>=140; STAT.41<=145; |
| 410 | [all] | 11 | 50 |  | TECH.410>=100; STAT.41>=50; STAT.41<=55; |
| 410 | [all] | 11 | 50 |  | TECH.410>=100; STAT.50>=500; STAT.50<=529; |

