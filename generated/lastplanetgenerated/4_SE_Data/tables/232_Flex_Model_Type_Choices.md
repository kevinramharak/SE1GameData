# `Flex Model Type Choices` (`232`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Choice ID | `Text` |
| `1` | Stat ID | `Text` |
| `2` | Value | `Text` |
| `3` | Text | `Text` |
| `4` | IF Logic | `Text` |
| `5` | Question Text | `Text` |
| `6` | Specific ID | `Text` |
| `7` | Descr. | `Text` |
| `8` | Cost Descr. | `Text` |
| `9` | Stat ID | `Text` |
| `10` | Value | `Text` |
| `11` | Stat ID | `Text` |
| `12` | Value | `Text` |

### Data

| Choice ID | Stat ID | Value | Text | IF Logic | Question Text | Specific ID | Descr. | Cost Descr. | Stat ID | Value | Stat ID | Value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 41 | 11 | Slugthrower |  | What kind of rifle should be issued? | 11 | Firepower 50, 0.1 Ammo use | 1 Metal, 1 IP | 37 | 1 |  | 1 |
| 1 | 41 | 12 | Carbine | TECH.9>=100 |  | 12 | Firepower 75, 0.2 Ammo use | 1 Metal, 2 IP | 37 | 1 |  | 1 |
| 1 | 41 | 13 | Automatic Rifle | TECH.43>=100 |  | 13 | Firepower 100, 0,3 Ammo use | 1 Metal, 2 IP | 37 | 1 |  | 1 |
| 1 | 41 | 14 | Gas Powered Carbine | TECH.44>=100 |  | 14 | Firepower 75, 0.1 Ammo use | 1 Metal, 2 IP | 37 | 1 |  |  |
| 1 | 41 | 15 | Gauss Rifle | TECH.45>=100 |  | 15 | Firepower 125, 0,3 Ammo use | 1 Metal, 3 IP | 37 | 1 |  | 1 |
| 1 | 41 | 16 | Charged Gauss Rifle | TECH.46>=100 |  | 16 | Firepower 150, 0,3 Ammo use | 1 Metal, 3 IP | 37 | 1 |  | 1 |
| 1 | 41 | 17 | Laser Rifle | TECH.322>=100 |  | 17 | Firepower 300, 0,6 Energy use | 1 Metal, 2 Rare Metal, 4 IP | 37 | 3 |  | 4 |
| 1 | 41 | 18 | Plasma Rifle | TECH.347>=100 |  | 18 | Firepower 500, 1,3 Energy use | 1 Metal, 1 Hi-Tech, 6 IP | 37 | 5 |  | 6 |
| 2 | 42 | 28 | Battledress | TECH.60>=100; MODELTYPE!=13; MODELTYPE!=5; |  | 28 | Armour Strength 500, Good environmental protection | 1 Machinery, 5 Metal, 8 IP | 38 | 1 |  | 5 |
| 2 | 42 | 27 | Heavy Combat Armour | TECH.59>=100; MODELTYPE!=13; |  | 27 | Armour Strength 300, Good environmental protection | 4 Metal, 5 IP | 38 | 1 |  | 1 |
| 2 | 42 | 25 | Padded Envirosuit | TECH.303>=100; MODELTYPE!=71; |  | 25 | Armour Strength 100, Good environmental protection | 2 Metal, 3 IP | 38 | 1 |  | 1 |
| 2 | 42 | 24 | Envirosuit | TECH.58>=100; MODELTYPE!=71; |  | 24 | Armour Strength 50, Good environmental protection | 1 Metal, 2 IP | 38 | 0 |  | 1 |
| 2 | 42 | 0 | None | GAMEKEY.1<=1; GAMEKEY.2<=1; | What kind of Suit or Personal Armour should we assign? | 0 | No protection at all |  | 38 | 0 |  | 1 |
| 2 | 42 | 22 | Thermosuit | MODELTYPE!=71;  GAMEKEY.1<=1; GAMEKEY.2<=1; |  | 22 | Moderate protection from cold temperatures only | 1 IP | 38 | 0 |  | 1 |
| 2 | 42 | 21 | Filters | MODELTYPE!=71; GAMEKEY.1<=2; GAMEKEY.2<=2; |  | 21 | Moderate protection from toxic atmosphere only | 1 IP | 38 | 0 |  | 1 |
| 2 | 42 | 29 | Heavy Battledress | TECH.340>=100; MODELTYPE!=13; MODELTYPE!=5; |  | 29 | Armour Strength 1000, Good environmental protection | 2 Machinery, 6 Metal, 10 IP | 38 | 1 |  | 5 |
| 2 | 42 | 23 | Filters + Thermosuit | MODELTYPE!=71;  GAMEKEY.1<=2; GAMEKEY.2<=2; |  | 23 | Moderate environmental protection | 2 IP | 38 | 0 |  | 1 |
| 2 | 42 | 30 | Envirosuit and Personal Shield Generator | TECH.344>=100; MODELTYPE!=13; MODELTYPE!=5; |  | 30 | Armour Strength 500, Good environmental protection | 1 Hi-Tech, 1 Radioactives, 16 IP | 38 | 4 |  |  |
| 2 | 42 | 26 | Combat Armour | TECH.308>=100; MODELTYPE!=13; |  | 26 | Armour Strength 200, Good environmental protection | 3 Metal, 4 IP | 38 | 1 |  | 1 |
| 4 | 41 | 45 | Charged Gauss Machinegun | TECH.46>=100 |  | 45 | Firepower 500, 1,6 Ammo use | 2 Metal, 6 IP | 37 | 1 |  | 1 |
| 4 | 41 | 40 | Machinegun |  | What kind of machinegun should be issued? | 40 | Firepower 100, 0,6 Ammo use | 2 Metal, 2 IP | 37 | 1 |  | 1 |
| 4 | 41 | 41 | Advanced Machinegun | TECH.43>=100 |  | 41 | Firepower 200, 1 Ammo use | 2 Metal, 4 IP | 37 | 1 |  | 1 |
| 4 | 41 | 42 | High Speed Machinegun | TECH.307>=100 |  | 42 | Firepower 300, 1,6 Ammo use | 2 Metal, 4 IP | 37 | 1 |  | 1 |
| 4 | 41 | 43 | Gas Powered Machinegun | TECH.44>=100 |  | 43 | Firepower 200, 0,5 Ammo use | 2 Metal, 4 IP | 37 | 1 |  |  |
| 4 | 41 | 44 | Gauss Machinegun | TECH.45>=100 |  | 44 | Firepower 400, 1,6 Ammo use | 2 Metal, 6 IP | 37 | 1 |  | 1 |
| 4 | 41 | 46 | Tripod Assault Laser Rifle | TECH.322>=100 |  | 46 | Firepower 1000, 2 Energy use | 2 Metal, 4 Rare Metal, 8 IP | 37 | 3 |  | 4 |
| 4 | 41 | 47 | Light Plasma Blaster | TECH.347>=100 |  | 47 | Firepower 1500, 4 Energy use | 2 Metal, 2 Hi-Tech, 12 IP | 37 | 5 |  | 6 |
| 5 | 41 | 52 | Quad High Speed Machinegun | TECH.307>=100 |  | 52 | Firepower 900, 6 Ammo use | 8 Metal, 8 IP | 37 | 1 |  | 1 |
| 5 | 41 | 50 | Quad Machinegun |  | What kind of quad machinegun should be issued? | 50 | Firepower 300, 2,4 Ammo use | 8 Metal, 4 IP | 37 | 1 |  | 1 |
| 5 | 41 | 51 | Quad Adv. Machinegun | TECH.43>=100 |  | 51 | Firepower 600, 4 Ammo use | 8 Metal, 8 IP | 37 | 1 |  | 1 |
| 5 | 41 | 53 | Quad Gas Powered Machinegun | TECH.44>=100 |  | 53 | Firepower 600, 2 Ammo use | 8 Metal, 8 IP | 37 | 1 |  |  |
| 5 | 41 | 57 | Quad Light Plasma Blaster | TECH.347>=100 |  | 57 | Firepower 4500, 16 Energy use | 8 Metal, 8 Hi-Tech, 24 IP | 37 | 5 |  | 6 |
| 5 | 41 | 56 | Quad Tripod Assault Laser Rifle | TECH.322>=100 |  | 56 | Firepower 3000, 8 Energy use | 8 Metal, 8 Rare Metal, 16 IP | 37 | 3 |  | 4 |
| 5 | 41 | 55 | Quad Charged Gauss Machinegun | TECH.46>=100 |  | 55 | Firepower 1500, 6 Ammo use | 8 Metal, 12 IP | 37 | 1 |  | 1 |
| 5 | 41 | 54 | Quad Gauss Machinegun | TECH.45>=100 |  | 54 | Firepower 1200, 6 Ammo use | 8 Metal, 12 IP | 37 | 1 |  | 1 |
| 6 | 41 | 64 | Micro Nuke RPG | TECH.317>=100 |  | 64 | Firepower 1000, 1 Radioactives, RAD 1 | 10 Metals, 10 IP, 2 Machinery | 37 | 6 |  | 7 |
| 6 | 41 | 63 | Heavy RPG | TECH.309>=100 |  | 63 | Firepower 400, 1.6 Ammo use | 4 Metal, 7 IP | 37 | 2 |  | 1 |
| 6 | 41 | 62 | Guided RPG | TECH.305>=100 |  | 62 | Firepower 300, 1.3 Ammo use | 3 Metal, 5 IP | 37 | 2 |  | 1 |
| 6 | 41 | 61 | RPG | TECH.304>=100 |  | 61 | Firepower 200, 1 Ammo use | 2 Metal, 3 IP | 37 | 2 |  | 1 |
| 6 | 41 | 60 | Bazooka |  | What kind of hollow charge weapon should be issued? | 60 | Firepower 100, 0.6 Ammo use | 2 Metal, 1 IP | 37 | 2 |  | 1 |
| 8 | 41 | 95 | 105mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=3; |  | 95 | Firepower 600, 14 Ammo use | 14 Metal, 24 IP | 37 | 1 |  | 1 |
| 8 | 41 | 93 | 60mm High Velocity Gun | TECH.302>=100; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=2; |  | 93 | Firepower 400, 8 Ammo use | 10 Metal, 16 IP | 37 | 1 |  | 1 |
| 8 | 41 | 92 | 40mm High Velocity Gun | TECH.302>=100; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=2; |  | 92 | Firepower 300, 6 Ammo use | 8 Metal, 12 IP | 37 | 1 |  | 1 |
| 8 | 41 | 91 | 25mm High Velocity Gun | TECH.302>=100; MODELTYPE!=23; MODELTYPE!=22; |  | 91 | Firepower 200, 4 Ammo use | 6 Metal, 8 IP | 37 | 1 |  | 1 |
| 8 | 41 | 89 | 300mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=21; REGKEY.techLevel>=5; |  | 89 | Firepower 1200, 22 Ammo use | 22 Metal, 22 IP | 37 | 1 |  | 1 |
| 8 | 41 | 85 | 105mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 85 | Firepower 600, 14 Ammo use | 14 Metal, 14 IP | 37 | 1 |  | 1 |
| 8 | 41 | 87 | 180mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 87 | Firepower 800, 18 Ammo use | 18 Metal, 18 IP | 37 | 1 |  | 1 |
| 8 | 41 | 86 | 150mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 86 | Firepower 700, 16 Ammo use | 16 Metal, 16 IP | 37 | 1 |  | 1 |
| 8 | 41 | 83 | 60mm Howitzer Gun | MODELTYPE!=21; REGKEY.techLevel>=2; |  | 83 | Firepower 400, 8 Ammo use | 10 Metal, 10 IP | 37 | 1 |  | 1 |
| 8 | 41 | 96 | 150mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=4; |  | 96 | Firepower 700, 16 Ammo use | 16 Metal, 28 IP | 37 | 1 |  | 1 |
| 8 | 41 | 84 | 88mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=2; |  | 84 | Firepower 500, 12 Ammo use | 12 Metal, 12 IP | 37 | 1 |  | 1 |
| 8 | 41 | 88 | 240mm Howitzer Gun | MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 88 | Firepower 1000, 20 Ammo use | 20 Metal, 20 IP | 37 | 1 |  | 1 |
| 8 | 41 | 97 | 180mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=4; |  | 97 | Firepower 800, 18 Ammo use | 18 Metal, 32 IP | 37 | 1 |  | 1 |
| 8 | 41 | 123 | Heavy Plasma Blast Gun | TECH.345>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21;  REGKEY.techLevel>=6; |  | 123 | Firepower 6000, 80 Energy | 20 High-Tech, 100 IP | 37 | 5 |  | 6 |
| 8 | 41 | 99 | 300mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=5; |  | 99 | Firepower 1200, 22 Ammo use | 22 Metal, 40 IP | 37 | 1 |  | 1 |
| 8 | 41 | 101 | Light Laser Gun | TECH.323>=100; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; |  | 101 | Firepower 500, 4 Energy | 10 Rare Metals, 30 IP | 37 | 3 |  | 4 |
| 8 | 41 | 102 | Medium Laser Gun | TECH.323>=100; MODELTYPE!=31; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 102 | Firepower 1000, 8 Energy | 15 Rare Metals, 40 IP | 37 | 3 |  | 4 |
| 8 | 41 | 103 | Heavy Laser Gun | TECH.323>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; REGKEY.techLevel>=6; |  | 103 | Firepower 1500, 12 Energy | 20 Rare Metals, 50 IP | 37 | 3 |  | 4 |
| 8 | 41 | 104 | Very Heavy Laser Gun | TECH.323>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; REGKEY.techLevel>=7; |  | 104 | Firepower 2000, 16 Energy | 25 Rare Metals, 60 IP | 37 | 3 |  | 4 |
| 8 | 41 | 111 | Beam Gun | TECH.337>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; |  | 111 | Firepower 3000, 24 Energy | 20 Rare Metals, 4 High Tech, 50 IP | 37 | 4 |  | 6 |
| 8 | 41 | 112 | Combined Beam Gun | TECH.346>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; |  | 112 | Firepower 6000, 48 Energy | 30 Rare Metals, 6 High Tech, 70 IP | 37 | 4 |  | 6 |
| 8 | 41 | 121 | Light Plasma Blast Gun | TECH.345>=100;  MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; |  | 121 | Firepower 3000, 48 Energy | 10 High-Tech, 100 IP | 37 | 5 |  | 6 |
| 8 | 41 | 122 | Medium Plasma Blast Gun | TECH.345>=100; MODELTYPE!=31; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21;  REGKEY.techLevel>=5; |  | 122 | Firepower 4500, 64 Energy | 15 High-Tech, 100 IP | 37 | 5 |  | 6 |
| 8 | 41 | 124 | Very Heavy Plasma Blast Gun | TECH.345>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=22; MODELTYPE!=21; REGKEY.techLevel>=7; |  | 124 | Firepower 7500, 96 Energy | 25 High-Tech, 100 IP | 37 | 5 |  | 6 |
| 8 | 41 | 131 | Tactical Nuke Grenade Launcher | TECH.321>=100; MODELTYPE==36; |  | 131 | Firepower 15K, RAD 50, 5 Atomics use | 5 Machinery, 50 Metals, 100 IP | 37 | 6 |  | 7 |
| 8 | 41 | 82 | 40mm Howitzer Gun | MODELTYPE!=21; |  | 82 | Firepower 300, 6 Ammo use | 8 Metal, 8 IP | 37 | 1 |  | 1 |
| 8 | 41 | 132 | 100mm Mass Driver gun | TECH.409>=100; MODELTYPE!=31; MODELTYPE!=23; MODELTYPE!=22; |  | 132 | Firepower 600, 14 Ammo use | 14 Metal, 24 IP | 37 | 1 |  | 1 |
| 8 | 41 | 98 | 240mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=22;  REGKEY.techLevel>=5; |  | 98 | Firepower 1000, 20 Ammo use | 20 Metal, 36 IP | 37 | 1 |  | 1 |
| 8 | 41 | 81 | 25mm Howitzer Gun | MODELTYPE!=21; | What calibre and type of Gun should we install? | 81 | Firepower 200, 4 Ammo use | 6 Metal, 6 IP | 37 | 1 |  | 1 |
| 8 | 41 | 94 | 88mm High Velocity Gun | TECH.302>=100; MODELTYPE!=31; MODELTYPE!=23; MODELTYPE!=22; REGKEY.techLevel>=3; |  | 94 | Firepower 500, 12 Ammo use | 12 Metal, 20 IP | 37 | 1 |  | 1 |
| 14 | 41 | 140 | Twin Heavy Machinegun |  | What kind of twin machinegun should be issued? | 140 | Firepower 200, 1.3 Ammo use | 8 Metal, 4 IP | 37 | 1 |  | 1 |
| 14 | 41 | 141 | Twin Heavy Adv. Machinegun | TECH.43>=100 |  | 141 | Firepower 400, 2 Ammo use | 8 Metal, 8 IP | 37 | 1 |  | 1 |
| 14 | 41 | 142 | Twin High Speed Heavy Machinegun | TECH.307>=100 |  | 142 | Firepower 600, 3 Ammo use | 8 Metal, 16 IP | 37 | 1 |  | 1 |
| 14 | 41 | 143 | Twin Gas Powered Heavy Machinegun | TECH.44>=100 |  | 143 | Firepower 400, 1 Ammo use | 8 Metal, 8 IP | 37 | 1 |  | 1 |
| 14 | 41 | 144 | Twin Gauss Heavy Machinegun | TECH.45>=100 |  | 144 | Firepower 400, 3 Ammo use | 8 Metal, 12 IP | 37 | 1 |  | 1 |
| 14 | 41 | 145 | Twin Charged Gauss Heavy Machinegun | TECH.46>=100 |  | 145 | Firepower 500, 3 Ammo use | 8 Metal, 12 IP | 37 | 1 |  | 1 |
| 14 | 41 | 146 | Twin Heavy Assault Laser Rifle | TECH.322>=100 |  | 146 | Firepower 1000, 4 Energy use | 8 Metal, 8 Rare Metal, 16 IP | 37 | 3 |  | 4 |
| 14 | 41 | 147 | Twin Heavy Plasma Blaster | TECH.347>=100 |  | 147 | Firepower 1500, 8 Energy use | 8 Metal, 4 Hi-Tech, 24 IP | 37 | 5 |  | 6 |
| 15 | 41 | 151 | Small Rockets |  | What kind of rocket launchers should be mounted? | 151 | Firepower 4000, 12 Ammo use | 20 Metals, 20 IP | 37 | 1 |  | 1 |
| 15 | 41 | 152 | Medium Rockets | REGKEY.techLevel>=3 |  | 152 | Firepower 5000, Range +1, 20 Ammo use | 30 Metals, 30 IP | 37 | 1 |  | 1 |
| 15 | 41 | 153 | Big Rockets | REGKEY.techLevel>=5 |  | 153 | Firepower 6000, Range +2, 26 Ammo use | 40 Metals, 40 IP | 37 | 1 |  | 1 |
| 16 | 41 | 161 | Light Conventional Missiles |  | What kind of missile launchers should be mounted? | 161 | Firepower 8000, 60 Ammo use | 50 Metals, 10 Machinery | 37 | 1 |  | 5 |
| 16 | 41 | 171 | Plasma Missiles | TECH.345>=100 |  | 171 | Firepower 30K, Range +3, 16 Energy use | 50 Metals, 5 Rare Metals, 2 High Tech, 20 IP | 37 | 5 |  | 6 |
| 16 | 41 | 163 | Heavy Conventional Missiles | REGKEY.techLevel>=5 |  | 163 | Firepower 12K, Range +2, 80 Ammo use | 90 Metals, 14 Machinery | 37 | 1 |  | 5 |
| 16 | 41 | 162 | Medium Conventional Missiles | REGKEY.techLevel>=3 |  | 162 | Firepower 10K, Range +1, 70 Ammo use | 70 Metals, 12 Machinery | 37 | 1 |  | 5 |
| 18 | 41 | 181 | Atomic 1 MT Fission Missile |  | What kind of missile launchers should be mounted? | 181 | Firepower 30K, RAD 1000, 10 Atomics use | 10 Machinery, 20 Metals, 80 IP | 37 | 6 |  | 7 |
| 18 | 41 | 182 | Atomic 10 MT Fusion Missile | TECH.335>=100 |  | 182 | Firepower 100K, RAD 2000, 20 Atomics use | 10 Machinery, 10 High Tech, 90 IP | 37 | 6 |  | 7 |
| 19 | 41 | 191 | 10 MegaTon ICBM |  | What kind of ICBMs should be launched from platform? | 191 | Firepower 100K, RAD 2000, 30 Atomics use | 10 Machinery, 15 High Tech, 120 IP | 37 | 6 |  | 7 |
| 19 | 41 | 192 | 50 MegaTon ICBM | TECH.333>=100 |  | 192 | Firepower 300K, RAD 4000, 40 Atomics use | 20 Machinery, 20 High Tech, 150 IP | 37 | 6 |  | 7 |
| 19 | 41 | 193 | 100 MegaTon ICBM | TECH.334>=100 |  | 193 | Firepower 500K, RAD 8000, 50 Atomics use | 30 Machinery, 25 High Tech, 180 IP | 37 | 6 |  | 7 |
| 20 | 42 | 207 | 400mm Steel Plating | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23;  MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=6; |  | 207 | Armour Strength 3000 | 44 Metal * SIZE / 4,18 * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 226 | 300mm Liquid Armour | TECH.343>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=52; MODELTYPE!=23;  MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=5; |  | 226 | Armour Strength 3200 | 14 Metals, 6 High Tech, 60 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 200 | Minimal 5mm Steel Plating |  | What type and thickness of armour will be applied? | 200 | Armour Strength 50 | 2 Metal  * SIZE / 4, 2 IP * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 201 | 25mm Steel Plating |  |  | 201 | Armour Strength 200 | 6 Metal  * SIZE / 4, 6 IP * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 202 | 50mm Steel Plating |  |  | 202 | Armour Strength 400 | 9 Metal * SIZE / 4, 8 IP * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 203 | 100mm Steel Plating | MODELTYPE!=31; MODELTYPE!=41; REGKEY.techLevel>=2; |  | 203 | Armour Strength 800 | 14 Metal  * SIZE / 4, 10 IP * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 204 | 150mm Steel Plating | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 204 | Armour Strength 1200 | 19 Metal * SIZE / 4, 12 IP * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 205 | 200mm Steel Plating | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=31; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 205 | Armour Strength 1600 | 24 Metal * SIZE / 4, 14 * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 206 | 300mm Steel Plating | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51;  MODELTYPE!=52; MODELTYPE!=23;  MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=5; |  | 206 | Armour Strength 2400 | 34 Metal * SIZE / 4, 16 * SIZE / 4 | 38 | 1 |  | 1 |
| 20 | 42 | 211 | 25mm Polymer Plating | TECH.310>=100 |  | 211 | Armour Strength 400 | 2 Rare Metals, 6 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 227 | 400mm Liquid Armour | TECH.343>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=6; |  | 227 | Armour Strength 4000 | 16 Metals, 7 High Tech, 70 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 213 | 100mm Polymer Plating | MODELTYPE!=31; TECH.310>=100; REGKEY.techLevel>=2; MODELTYPE!=41; |  | 213 | Armour Strength 1400 | 6 Rare Metals, 20 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 212 | 50mm Polymer Plating | TECH.310>=100 |  | 212 | Armour Strength 800 | 4 Rare Metals, 12 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 224 | 150mm Liquid Armour | TECH.343>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 224 | Armour Strength 1800 | 10 Metals, 4 High Tech, 50 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 223 | 100mm Liquid Armour | MODELTYPE!=31; TECH.343>=100;  REGKEY.techLevel>=2; MODELTYPE!=41; |  | 223 | Armour Strength 1200 | 8 Metals, 3 High Tech, 40 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 222 | 50mm Liquid Armour | TECH.343>=100 |  | 222 | Armour Strength 600 | 6 Metals, 2 High Tech, 30 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 221 | 25mm Liquid Armour | TECH.343>=100 |  | 221 | Armour Strength 300 | 4 Metals, 1 High Tech, 20 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 225 | 200mm Liquid Armour | TECH.343>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=31; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 225 | Armour Strength 2400 | 12 Metals, 5 High Tech, 60 IP (SIZE BOTH) | 38 | 3 |  | 6 |
| 20 | 42 | 216 | 300mm Polymer Plating | TECH.310>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=52; MODELTYPE!=23;  MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=5; |  | 216 | Armour Strength 3400 | 12 Rare Metals, 56 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 215 | 200mm Polymer Plating | TECH.310>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=31; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 215 | Armour Strength 2600 | 10 Rare Metals, 42 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 214 | 150mm Polymer Plating | TECH.310>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 214 | Armour Strength 2000 | 8 Rare Metals, 30 IP (*SIZE both) | 38 | 2 |  | 4 |
| 20 | 42 | 217 | 400mm Polymer Plating | TECH.310>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23;  MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=6; |  | 217 | Armour Strength 4200 | 14 Rare Metals, 72 IP (*SIZE both) | 38 | 2 |  | 4 |
| 23 | 42 | 232 | Medium Shield Generator | TECH.338>=100; MODELTYPE!=92; REGKEY.techLevel>=5; |  | 232 | Armour Strength 12000 | 8 Machinery, 8 High-Tech, 60 IP | 38 | 4 |  | 6 |
| 23 | 42 | 233 | Large Shield Generator | TECH.338>=100; MODELTYPE!=92; REGKEY.techLevel>=6; |  | 233 | Armour Strength 18000 | 12 Machinery, 10 High-Tech, 80 IP | 38 | 4 |  | 6 |
| 23 | 42 | 234 | Very Large Shield Generator | TECH.338>=100; MODELTYPE!=91; |  | 234 | Armour Strength 24000 | 16 Machinery, 12 High-Tech, 100 IP | 38 | 4 |  | 6 |
| 23 | 42 | 235 | XL Shield Generator | TECH.338>=100; MODELTYPE!=91; REGKEY.techLevel>=7; |  | 235 | Armour Strength 30000 | 20 Machinery, 14 High-Tech, 120 IP | 38 | 4 |  | 6 |
| 23 | 42 | 231 | Small Shield Generator | TECH.338>=100; MODELTYPE!=92; |  | 231 | Armour Strength 6000 | 4 Machinery, 6 High-Tech, 40 IP | 38 | 4 |  | 6 |
| 23 | 42 | 236 | XXL Shield Generator | TECH.338>=100; MODELTYPE!=91; REGKEY.techLevel>=8; |  | 236 | Armour Strength 36000 | 24 Machinery, 16 High-Tech, 140 IP | 38 | 4 |  | 6 |
| 24 | 43 | 243 | Heavy Diesel Engine | REGKEY.techLevel>=2; |  | 243 | Engine Power: 400, Fuel use: 3*size | 3 Metals, 18 IP | 39 | 1 |  | 1 |
| 24 | 43 | 241 | Light Diesel Engine |  | What type and size of power source will we install? | 241 | Engine Power: 200, Fuel use: 1*size | 1 Metals, 8 IP | 39 | 1 |  | 1 |
| 24 | 43 | 242 | Medium Diesel Engine |  |  | 242 | Engine Power: 300, Fuel use: 2*size | 2 Metals, 12 IP | 39 | 1 |  | 1 |
| 24 | 43 | 244 | Double Diesel Engine | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=31; MODELTYPE!=21; REGKEY.techLevel>=3; |  | 244 | Engine Power: 800, Fuel use: 4*size | 4 Metals, 22 IP | 39 | 1 |  | 1 |
| 24 | 43 | 254 | Double Electric Engine | TECH.314>=100; REGKEY.techLevel>=4; |  | 254 | Engine Power: 400, Energy use: 4*size | 4 Rare Metals, 4 Machinery, 10 IP | 39 | 2 |  | 5 |
| 24 | 43 | 251 | Light Electric Engine | TECH.314>=100 |  | 251 | Engine Power: 100, Energy use: 1*size | 1 Rare Metals, 1 Machinery, 4 IP | 39 | 2 |  | 5 |
| 24 | 43 | 252 | Medium Electric Engine | TECH.314>=100; REGKEY.techLevel>=2; |  | 252 | Engine Power: 150, Energy use: 2*size | 2 Rare Metals, 2 Machinery, 6 IP | 39 | 2 |  | 5 |
| 24 | 43 | 253 | Heavy Electric Engine | TECH.314>=100; REGKEY.techLevel>=3; |  | 253 | Engine Power: 200, Energy use: 3*size | 3 Rare Metals, 3 Machinery, 8 IP | 39 | 2 |  | 5 |
| 24 | 43 | 255 | Triple Electric Engine | TECH.314>=100; REGKEY.techLevel>=6; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=31; MODELTYPE!=21; |  | 255 | Engine Power: 600, Energy use: 5*size | 5 Rare Metals, 5 Machinery, 12 IP | 39 | 2 |  | 5 |
| 24 | 43 | 261 | Nuclear Engine | TECH.332>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=21; |  | 261 | Engine Power: 1200 | 1 High-Tech, 24 IP, 1 Radioactives | 39 | 3 |  | 6 |
| 24 | 43 | 262 | Double Nuclear Engine | TECH.332>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=5; |  | 262 | Engine Power: 1800 | 2 High-Tech, 36 IP, 2 Radioactives | 39 | 3 |  | 6 |
| 24 | 43 | 263 | Triple Nuclear Engine | TECH.332>=100; MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=23; MODELTYPE!=62; MODELTYPE!=63; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=33; MODELTYPE!=35; MODELTYPE!=52; MODELTYPE!=23; MODELTYPE!=131; MODELTYPE!=21; REGKEY.techLevel>=6; |  | 263 | Engine Power: 2400 | 3 High-Tech, 48 IP, 3 Radioactives | 39 | 3 |  | 6 |
| 24 | 43 | 245 | Triple Diesel Engine | MODELTYPE!=12; MODELTYPE!=41; MODELTYPE!=81; MODELTYPE!=61; MODELTYPE!=31; MODELTYPE!=32; MODELTYPE!=34; MODELTYPE!=51; MODELTYPE!=21; REGKEY.techLevel>=4; |  | 245 | Engine Power: 1200, Fuel use: 5*size | 5 Metals, 26 IP | 39 | 1 |  | 1 |
| 28 | 531 | 281 | Recon |  | In what role should this Aircraft be used? | 281 | Will try to stay out of combat and flies on low altitudes. | auto |  |  |  | 1 |
| 28 | 531 | 283 | Fighter-Bomber |  |  | 283 | Same as fighter but will often be used in ground attacks. Flies at low altitudes. | auto |  |  |  | 2 |
| 28 | 531 | 282 | Fighter |  |  | 282 | Used to obtain air supremacy, flies at low altitudes. | auto |  |  |  | 1 |
| 28 | 531 | 285 | Level-Bomber |  |  | 285 | Will try to stay out of air-combat, but will engage ground targets. Flies at higher altitudes. | auto |  |  |  | 3 |
| 28 | 531 | 284 | Tactical-Bomber |  |  | 284 | Will try to stay out of air-combat, but will engage ground targets. Flies at low altitudes. | auto |  |  |  | 3 |
| 28 | 531 | 286 | Transport |  |  | 286 | Will try to stay out of air-combat. Flies at higher altitudes. | auto |  |  |  | 4 |
| 30 | 43 | 932 | 4x Medium Turbojet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.353>=100; |  | 932 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 931 | 4x Light Turbojet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.353>=100; |  | 931 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 925 | 4x Super Heavy Jet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.352>=100; |  | 925 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 924 | 4x Very Heavy Jet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.352>=100; |  | 924 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 923 | 4x Heavy Jet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.352>=100; |  | 923 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 922 | 4x Medium Jet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.352>=100; |  | 922 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 905 | 4x Very Heavy Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 905 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 916 | 4x Super Heavy Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 916 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 915 | 4x Very Heavy Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 915 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 914 | 4x Heavy Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 914 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 913 | 4x Medium Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 913 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 912 | 4x Light Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 912 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 911 | 4x Ultralight Turboprop Engine | MODELTYPE==106 | MODELTYPE==107; TECH.351>=100; |  | 911 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 906 | 4x Super Heavy Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 906 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 921 | 4x Light Jet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.352>=100; |  | 921 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 903 | 4x Medium Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 903 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 902 | 4x Light Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 902 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 933 | 4x Heavy Turbojet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.353>=100; |  | 933 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 861 | 2x Ultalight Rotor Engine | MODELTYPE==113; |  | 861 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 862 | 2x Light Rotor Engine | MODELTYPE==113; |  | 862 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 863 | 2x Medium Rotor Engine | MODELTYPE==113; |  | 863 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 864 | 2x Heavy Rotor Engine | MODELTYPE==113; |  | 864 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 865 | 2x Very Heavy Rotor Engine | MODELTYPE==113; |  | 865 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 904 | 4x Heavy Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 904 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 866 | 2x Super Heavy Rotor Engine | MODELTYPE==113; |  | 866 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 872 | 2x Medium Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.356>=100; |  | 872 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 873 | 2x Heavy Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.357>=100; |  | 873 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 874 | 2x Very Heavy Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.357>=100; |  | 874 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 875 | 2x Super Heavy Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.358>=100; |  | 875 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 876 | 2x Mega Heavy Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.358>=100; |  | 876 | auto | auto | 39 | 1 |  | 7 |
| 30 | 43 | 901 | 4x Ultralight Propeller Engine | MODELTYPE==106 | MODELTYPE==107; |  | 901 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 871 | 2x Light Rocket Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.356>=100; |  | 871 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 934 | 4x Very Heavy Turbojet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.353>=100; |  | 934 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 1055 | 6x Super Heavy Plasmajet Engine | MODELTYPE==108; TECH.354>=100; |  | 1055 | auto | auto | 39 | 2 |  | 7 |
| 30 | 43 | 951 | 4x Light Plasmajet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.354>=100; |  | 951 | auto | auto | 39 | 2 |  | 7 |
| 30 | 43 | 855 | 2x Super Heavy Plasmajet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.354>=100; |  | 855 | auto | auto | 39 | 2 |  | 7 |
| 30 | 43 | 1054 | 6x Very Heavy Plasmajet Engine | MODELTYPE==108; TECH.354>=100; |  | 1054 | auto | auto | 39 | 2 |  | 6 |
| 30 | 43 | 1053 | 6x Heavy Plasmajet Engine | MODELTYPE==108; TECH.354>=100; |  | 1053 | auto | auto | 39 | 2 |  | 5 |
| 30 | 43 | 1052 | 6x Medium Plasmajet Engine | MODELTYPE==108; TECH.354>=100; |  | 1052 | auto | auto | 39 | 2 |  | 4 |
| 30 | 43 | 1051 | 6x Light Plasmajet Engine | MODELTYPE==108; TECH.354>=100; |  | 1051 | auto | auto | 39 | 2 |  | 3 |
| 30 | 43 | 1035 | 6x Super Heavy Turbojet Engine | MODELTYPE==108; TECH.353>=100; |  | 1035 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 1034 | 6x Very Heavy Turbojet Engine | MODELTYPE==108; TECH.353>=100; |  | 1034 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 1033 | 6x Heavy Turbojet Engine | MODELTYPE==108; TECH.353>=100; |  | 1033 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 1032 | 6x Medium Turbojet Engine | MODELTYPE==108; TECH.353>=100; |  | 1032 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 1031 | 6x Light Turbojet Engine | MODELTYPE==108; TECH.353>=100; |  | 1031 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 1025 | 6x Super Heavy Jet Engine | MODELTYPE==108; TECH.352>=100; |  | 1025 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 1024 | 6x Very Heavy Jet Engine | MODELTYPE==108; TECH.352>=100; |  | 1024 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 1023 | 6x Heavy Jet Engine | MODELTYPE==108; TECH.352>=100; |  | 1023 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 1022 | 6x Medium Jet Engine | MODELTYPE==108; TECH.352>=100; |  | 1022 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 1021 | 6x Light Jet Engine | MODELTYPE==108; TECH.352>=100; |  | 1021 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 1016 | 6x Super Heavy Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1016 | auto | auto | 39 | 1 |  | 7 |
| 30 | 43 | 1015 | 6x Very Heavy Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1015 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 952 | 4x Medium Plasmajet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.354>=100; |  | 952 | auto | auto | 39 | 2 |  | 3 |
| 30 | 43 | 953 | 4x Heavy Plasmajet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.354>=100; |  | 953 | auto | auto | 39 | 2 |  | 4 |
| 30 | 43 | 954 | 4x Very Heavy Plasmajet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.354>=100; |  | 954 | auto | auto | 39 | 2 |  | 6 |
| 30 | 43 | 955 | 4x Super Heavy Plasmajet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.354>=100; |  | 955 | auto | auto | 39 | 2 |  | 7 |
| 30 | 43 | 1001 | 6x Ultralight Propeller Engine | MODELTYPE==108; |  | 1001 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 1002 | 6x Light Propeller Engine | MODELTYPE==108; |  | 1002 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 935 | 4x Super Heavy Turbojet Engine | (MODELTYPE==106 | MODELTYPE==107) | (MODELTYPE==123); TECH.353>=100; |  | 935 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 1003 | 6x Medium Propeller Engine | MODELTYPE==108; |  | 1003 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 1005 | 6x Very Heavy Propeller Engine | MODELTYPE==108; |  | 1005 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 1006 | 6x Super Heavy Propeller Engine | MODELTYPE==108; |  | 1006 | auto | auto | 39 | 1 |  | 7 |
| 30 | 43 | 1011 | 6x Ultralight Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1011 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 1012 | 6x Light Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1012 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 1013 | 6x Medium Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1013 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 1014 | 6x Heavy Turboprop Engine | MODELTYPE==108; TECH.351>=100; |  | 1014 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 1004 | 6x Heavy Propeller Engine | MODELTYPE==108; |  | 1004 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 854 | 2x Very Heavy Plasmajet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.354>=100; |  | 854 | auto | auto | 39 | 2 |  | 6 |
| 30 | 43 | 822 | 2x Medium Jet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.352>=100; |  | 822 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 852 | 2x Medium Plasmajet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.354>=100; |  | 852 | auto | auto | 39 | 2 |  | 4 |
| 30 | 43 | 332 | Medium Turbojet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.353>=100; |  | 332 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 333 | Heavy Turbojet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.353>=100; |  | 333 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 334 | Very Heavy Turbojet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.353>=100; |  | 334 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 335 | Super Heavy Turbojet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.353>=100; |  | 335 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 341 | Light VTOL Turbojet Engine | MODELTYPE>=102; MODELTYPE<=103; TECH.360>=100; |  | 341 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 342 | Medium VTOL Turbojet Engine | MODELTYPE>=102; MODELTYPE<=103; TECH.360>=100; |  | 342 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 343 | Heavy VTOL Turbojet Engine | MODELTYPE>=102; MODELTYPE<=103; TECH.360>=100; |  | 343 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 344 | Very Heavy VTOL Turbojet Engine | MODELTYPE>=102; MODELTYPE<=103; TECH.360>=100; |  | 344 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 345 | Super Heavy VTOL Turbojet Engine | MODELTYPE>=102; MODELTYPE<=103; TECH.360>=100; |  | 345 | auto | auto | 39 | 1 |  | 7 |
| 30 | 43 | 352 | Medium Plasmajet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.354>=100; |  | 352 | auto | auto | 39 | 2 |  | 5 |
| 30 | 43 | 353 | Heavy Plasmajet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.354>=100; |  | 353 | auto | auto | 39 | 2 |  | 6 |
| 30 | 43 | 354 | Very Heavy Plasmajet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.354>=100; |  | 354 | auto | auto | 39 | 2 |  | 7 |
| 30 | 43 | 355 | Super Heavy Plasmajet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.354>=100; |  | 355 | auto | auto | 39 | 2 |  | 8 |
| 30 | 43 | 361 | Ultalight Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 361 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 362 | Light Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 362 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 331 | Light Turbojet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.353>=100; |  | 331 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 363 | Medium Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 363 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 325 | Super Heavy Jet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.352>=100; |  | 325 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 323 | Heavy Jet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.352>=100; |  | 323 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 853 | 2x Heavy Plasmajet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.354>=100; |  | 853 | auto | auto | 39 | 2 |  | 5 |
| 30 | 43 | 301 | Ultralight Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; | What kind of Engines should this Aircraft use? | 301 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 302 | Light Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; |  | 302 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 303 | Medium Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; |  | 303 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 304 | Heavy Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; |  | 304 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 305 | Very Heavy Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; |  | 305 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 306 | Super Heavy Propeller Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.350>=100; |  | 306 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 311 | Ultralight Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 311 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 312 | Light Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 312 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 313 | Medium Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 313 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 314 | Heavy Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 314 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 315 | Very Heavy Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 315 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 316 | Super Heavy Turboprop Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.351>=100; |  | 316 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 321 | Light Jet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.352>=100; |  | 321 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 322 | Medium Jet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.352>=100; |  | 322 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 324 | Very Heavy Jet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.352>=100; |  | 324 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 364 | Heavy Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 364 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 351 | Light Plasmajet Engine | (MODELTYPE>=101 & MODELTYPE<=103) | (MODELTYPE==121); TECH.354>=100; |  | 351 | auto | auto | 39 | 2 |  | 4 |
| 30 | 43 | 366 | Super Heavy Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 366 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 821 | 2x Light Jet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.352>=100; |  | 821 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 823 | 2x Heavy Jet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.352>=100; |  | 823 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 824 | 2x Very Heavy Jet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.352>=100; |  | 824 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 825 | 2x Super Heavy Jet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.352>=100; |  | 825 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 831 | 2x Light Turbojet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.353>=100; |  | 831 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 365 | Very Heavy Rotor Engine | MODELTYPE>=111; MODELTYPE<=112; |  | 365 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 833 | 2x Heavy Turbojet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.353>=100; |  | 833 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 834 | 2x Very Heavy Turbojet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.353>=100; |  | 834 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 835 | 2x Super Heavy Turbojet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.353>=100; |  | 835 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 841 | 2x Light VTOL Turbojet Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.360>=100; |  | 841 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 842 | 2x Medium VTOL Turbojet Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.360>=100; |  | 842 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 843 | 2x Heavy VTOL Turbojet Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.360>=100; |  | 843 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 844 | 2x Very Heavy VTOL Turbojet Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.360>=100; |  | 844 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 845 | 2x Super Heavy VTOL Turbojet Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=105; TECH.360>=100; |  | 845 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 851 | 2x Light Plasmajet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.354>=100; |  | 851 | auto | auto | 39 | 2 |  | 3 |
| 30 | 43 | 816 | 2x Super Heavy Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 816 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 815 | 2x Very Heavy Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 815 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 832 | 2x Medium Turbojet Engine | (MODELTYPE==104 | MODELTYPE==105) | (MODELTYPE==122); TECH.353>=100; |  | 832 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 813 | 2x Medium Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 813 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 814 | 2x Heavy Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 814 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 372 | Medium Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.356>=100; |  | 372 | auto | auto | 39 | 1 |  | 3 |
| 30 | 43 | 373 | Heavy Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.357>=100; |  | 373 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 374 | Very Heavy Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.357>=100; |  | 374 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 375 | Super Heavy Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.358>=100; |  | 375 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 376 | Mega Heavy Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.358>=100; |  | 376 | auto | auto | 39 | 1 |  | 7 |
| 30 | 43 | 802 | 2x Light Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 802 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 801 | 2x Ultralight Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 801 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 804 | 2x Heavy Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 804 | auto | auto | 39 | 1 |  | 4 |
| 30 | 43 | 805 | 2x Very Heavy Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 805 | auto | auto | 39 | 1 |  | 5 |
| 30 | 43 | 806 | 2x Super Heavy Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 806 | auto | auto | 39 | 1 |  | 6 |
| 30 | 43 | 811 | 2x Ultralight Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 811 | auto | auto | 39 | 1 |  | 1 |
| 30 | 43 | 371 | Light Rocket Engine | MODELTYPE>=101; MODELTYPE<=103; TECH.356>=100; | What kind of Engines should this Aircraft use? | 371 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 812 | 2x Light Turboprop Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; TECH.351>=100; |  | 812 | auto | auto | 39 | 1 |  | 2 |
| 30 | 43 | 803 | 2x Medium Propeller Engine | MODELTYPE==104 | MODELTYPE==105; MODELTYPE<=108; |  | 803 | auto | auto | 39 | 1 |  | 3 |
| 40 | 532 | 407 | Very Large (60m Wing Span) | MODELTYPE>=104; MODELTYPE<=108; |  | 407 | auto | auto |  |  |  | 1 |
| 40 | 532 | 409 | Mega Large (120m Wing Span) | MODELTYPE>=107; MODELTYPE<=108; |  | 409 | auto | auto |  |  |  | 1 |
| 40 | 532 | 408 | Super Large (85m Wing Span) | MODELTYPE>=105; MODELTYPE<=108; |  | 408 | auto | auto |  |  |  | 1 |
| 40 | 532 | 406 | Large (40m Wing Span) | MODELTYPE>=103; MODELTYPE<=108; |  | 406 | auto | auto |  |  |  | 1 |
| 40 | 532 | 401 | Fins (2m Wing Span) | MODELTYPE>=101; MODELTYPE<=103; |  | 401 | auto | auto |  |  |  | 1 |
| 40 | 532 | 404 | Small (15m Wing Span) | MODELTYPE>=101; MODELTYPE<=107; |  | 404 | auto | auto |  |  |  | 1 |
| 40 | 532 | 403 | Very Small (10m Wing Span) | MODELTYPE>=101; MODELTYPE<=107; |  | 403 | auto | auto |  |  |  | 1 |
| 40 | 532 | 402 | Tiny (5m Wing Span) | MODELTYPE>=101; MODELTYPE<=105; |  | 402 | auto | auto |  |  |  | 1 |
| 40 | 532 | 405 | Medium (25m Wing Span) | MODELTYPE>=102; MODELTYPE<=108; |  | 405 | auto | auto |  |  |  | 1 |
| 42 | 533 | 431 | Fuel Tank 18K |  |  | 431 | auto | auto |  |  |  | 1 |
| 42 | 533 | 437 | Fuel Tank 200K |  |  | 437 | auto | auto |  |  |  | 1 |
| 42 | 533 | 436 | Fuel Tank 150K |  |  | 436 | auto | auto |  |  |  | 1 |
| 42 | 533 | 435 | Fuel Tank 100K |  |  | 435 | auto | auto |  |  |  | 1 |
| 42 | 533 | 438 | Fuel Tank 250K |  |  | 438 | auto | auto |  |  |  | 1 |
| 42 | 533 | 434 | Fuel Tank 60K |  |  | 434 | auto | auto |  |  |  | 1 |
| 42 | 533 | 433 | Fuel Tank 40K |  |  | 433 | auto | auto |  |  |  | 1 |
| 42 | 533 | 432 | Fuel Tank 25K |  |  | 432 | auto | auto |  |  |  | 1 |
| 42 | 533 | 430 | Fuel Tank 12K |  |  | 430 | auto | auto |  |  |  | 1 |
| 42 | 533 | 424 | Fuel Tank 800L |  |  | 424 | auto | auto |  |  |  | 1 |
| 42 | 533 | 428 | Fuel Tank 5000L |  |  | 428 | auto | auto |  |  |  | 1 |
| 42 | 533 | 421 | Fuel Tank 100L |  | How much fuel should the Aircraft be able to carry? | 421 | auto | auto |  |  |  | 1 |
| 42 | 533 | 422 | Fuel Tank 250L |  |  | 422 | auto | auto |  |  |  | 1 |
| 42 | 533 | 423 | Fuel Tank 500L |  |  | 423 | auto | auto |  |  |  | 1 |
| 42 | 533 | 429 | Fuel Tank 8000L |  |  | 429 | auto | auto |  |  |  | 1 |
| 42 | 533 | 426 | Fuel Tank 1800L |  |  | 426 | auto | auto |  |  |  | 1 |
| 42 | 533 | 427 | Fuel Tank 3000L |  |  | 427 | auto | auto |  |  |  | 1 |
| 42 | 533 | 425 | Fuel Tank 1200L |  |  | 425 | auto | auto |  |  |  | 1 |
| 50 | 534 | 534 | Very Heavy Air-Air Missiles | (MODELTYPE>=105 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=123 & MODELTYPE<=129); TECH.103>=100; |  | 534 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 533 | Heavy Air-Air Missiles | (MODELTYPE>=103 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=122 & MODELTYPE<=129); TECH.103>=100; |  | 533 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 532 | Medium Air-Air Missiles | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=113 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); TECH.103>=100; |  | 532 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 531 | Light Air-Air Missiles | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=112 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); TECH.103>=100; |  | 531 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 525 | 2x Cupola Charged Gauss Heavy MG | (MODELTYPE>=105 & MODELTYPE<=109); TECH.46>=100; |  | 525 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 524 | 2x Cupola Gauss Heavy Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); TECH.45>=100; |  | 524 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 522 | 2x Cupola Heavy Adv. Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); TECH.43>=100; |  | 522 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 521 | 2x Cupola Heavy Machinegun | (MODELTYPE>=105 & MODELTYPE<=109) |  | 521 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 513 | Cupola Gauss Heavy Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); TECH.45>=100; |  | 513 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 523 | 2x Cupola High Speed Heavy MG | (MODELTYPE>=105 & MODELTYPE<=109); TECH.307>=100; |  | 523 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 514 | Cupola Charged Gauss Heavy MG | (MODELTYPE>=105 & MODELTYPE<=109); TECH.46>=100; |  | 514 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 511 | Cupola Heavy Adv. Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); TECH.43>=100; |  | 511 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 510 | Cupola Heavy Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); |  | 510 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 505 | Twin Charged Gauss Heavy MG | (MODELTYPE<=104 | MODELTYPE>=111); TECH.46>=100; |  | 505 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 504 | Twin Gauss Heavy Machinegun | (MODELTYPE<=104 | MODELTYPE>=111); TECH.45>=100; |  | 504 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 503 | Twin High Speed Heavy Machinegun | (MODELTYPE<=104 | MODELTYPE>=111); TECH.307>=100; |  | 503 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 502 | Twin Heavy Adv. Machinegun | (MODELTYPE<=104 | MODELTYPE>=111); TECH.43>=100; |  | 502 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 501 | Twin Heavy Machinegun | (MODELTYPE<=104 | MODELTYPE>=111); |  | 501 | auto | auto | 37 | 1 |  | 1 |
| 50 | 534 | 0 | No Air-to-Air Weapons |  |  | 0 | auto | auto | 37 | 0 |  | 1 |
| 50 | 534 | 512 | Cupola High Speed Heavy Machinegun | (MODELTYPE>=105 & MODELTYPE<=109); TECH.307>=100; |  | 512 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 623 | Bombhatch and 40K Load | (MODELTYPE>=105 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=123 & MODELTYPE<=129); |  | 623 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 624 | Bombhatch and 80K Load | (MODELTYPE>=106 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=123 & MODELTYPE<=129); |  | 624 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 625 | Bombhatch and 160K Load | (MODELTYPE>=107 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=124 & MODELTYPE<=129); |  | 625 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 631 | Precision Bombs 50kg (10x) | (MODELTYPE>=101 & MODELTYPE<=104) |  (MODELTYPE>=121 & MODELTYPE<=129); |  | 631 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 636 | Precision Bombs 500kg (10x) | (MODELTYPE>=103 & MODELTYPE<=104) |  (MODELTYPE>=122 & MODELTYPE<=129); |  | 636 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 633 | Precision Bombs 150kg (10x) | (MODELTYPE>=102 & MODELTYPE<=104) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 633 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 634 | Precision Bombs 200kg (10x) | (MODELTYPE>=102 & MODELTYPE<=104) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 634 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 635 | Precision Bombs 300kg (10x) | (MODELTYPE>=102 & MODELTYPE<=104) |  (MODELTYPE>=121 & MODELTYPE<=129); |  | 635 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 632 | Precision Bombs 100kg (10x) | (MODELTYPE>=101 & MODELTYPE<=104) |  (MODELTYPE>=121 & MODELTYPE<=129); |  | 632 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 622 | Bombhatch and 20K Load | (MODELTYPE>=103 & MODELTYPE<=109) | (MODELTYPE>=114 & MODELTYPE<=119) | (MODELTYPE>=122 & MODELTYPE<=129); |  | 622 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 621 | Bombhatch and 10K Load | (MODELTYPE>=103 & MODELTYPE<=109) | (MODELTYPE>=113 & MODELTYPE<=119) | (MODELTYPE>=122 & MODELTYPE<=129); |  | 621 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 615 | Bombhatch and 3000kg Load | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=112 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 615 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 601 | Very Small Rockets | (MODELTYPE>=102 & MODELTYPE<=104) | (MODELTYPE>=111 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); TECH.102>=100; |  | 601 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 602 | Small Rockets | (MODELTYPE>=102 & MODELTYPE<=104) | (MODELTYPE>=112 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); TECH.102>=100; |  | 602 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 603 | Medium Rockets | (MODELTYPE>=102 & MODELTYPE<=104) | (MODELTYPE>=112 & MODELTYPE<=119) | (MODELTYPE>=122 & MODELTYPE<=129); TECH.102>=100; |  | 603 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 604 | Heavy Rockets | (MODELTYPE>=103 & MODELTYPE<=104) | (MODELTYPE>=113 & MODELTYPE<=119) | (MODELTYPE>=123 & MODELTYPE<=129); TECH.102>=100; |  | 604 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 0 | No Air-to-Ground Weapons |  |  | 0 | auto | auto | 37 | 0 |  | 1 |
| 60 | 41 | 612 | Bombhatch and 1000kg Load |  |  | 612 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 613 | Bombhatch and 1500kg Load | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=111 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 613 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 614 | Bombhatch and 2000kg Load | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=111 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 614 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 611 | Bombhatch and 500kg Load |  |  | 611 | auto | auto | 37 | 1 |  | 1 |
| 60 | 41 | 616 | Bombhatch and 5000kg Load | (MODELTYPE>=102 & MODELTYPE<=109) | (MODELTYPE>=112 & MODELTYPE<=119) | (MODELTYPE>=121 & MODELTYPE<=129); |  | 616 | auto | auto | 37 | 1 |  | 1 |
| 70 | 535 | 710 | Cargo Space 12K |  |  | 710 | auto | auto |  |  |  | 1 |
| 70 | 535 | 718 | Cargo Space 250K |  |  | 718 | auto | auto |  |  |  | 1 |
| 70 | 535 | 717 | Cargo Space 200K |  |  | 717 | auto | auto |  |  |  | 1 |
| 70 | 535 | 716 | Cargo Space 150K |  |  | 716 | auto | auto |  |  |  | 1 |
| 70 | 535 | 715 | Cargo Space 100K |  |  | 715 | auto | auto |  |  |  | 1 |
| 70 | 535 | 714 | Cargo Space 60K |  |  | 714 | auto | auto |  |  |  | 1 |
| 70 | 535 | 713 | Cargo Space 40K |  |  | 713 | auto | auto |  |  |  | 1 |
| 70 | 535 | 712 | Cargo Space 25K |  |  | 712 | auto | auto |  |  |  | 1 |
| 70 | 535 | 711 | Cargo Space 18K |  |  | 711 | auto | auto |  |  |  | 1 |
| 70 | 535 | 708 | Cargo Space 5K |  |  | 708 | auto | auto |  |  |  | 1 |
| 70 | 535 | 707 | Cargo Space 3000kg |  |  | 707 | auto | auto |  |  |  | 1 |
| 70 | 535 | 706 | Cargo Space 1800kg |  |  | 706 | auto | auto |  |  |  | 1 |
| 70 | 535 | 705 | Cargo Space 1200kg |  |  | 705 | auto | auto |  |  |  | 1 |
| 70 | 535 | 704 | Cargo Space 800kg |  |  | 704 | auto | auto |  |  |  | 1 |
| 70 | 535 | 703 | Cargo Space 500kg |  |  | 703 | auto | auto |  |  |  | 1 |
| 70 | 535 | 702 | Cargo Space 250kg |  |  | 702 | auto | auto |  |  |  | 1 |
| 70 | 535 | 701 | Cargo Space 100kg |  |  | 701 | auto | auto |  |  |  | 1 |
| 70 | 535 | 0 | No Cargo Space |  |  | 700 | auto | auto |  |  |  | 1 |
| 70 | 535 | 709 | Cargo Space 8K |  |  | 709 | auto | auto |  |  |  | 1 |
| 75 | 534 | 753 | Heavy Surface-Air Missiles | REGKEY.techLevel>=5 |  | 753 | auto | auto | 37 | 1 |  | 3 |
| 75 | 534 | 751 | Light Surface-Air Missiles |  |  | 751 | auto | auto | 37 | 1 |  | 1 |
| 75 | 534 | 752 | Medium Surface-Air Missiles | REGKEY.techLevel>=3 |  | 752 | auto | auto | 37 | 1 |  | 2 |
| 76 | 534 | 761 | 50mm HV AA Gun |  |  | 761 | auto | auto | 37 | 1 |  | 1 |
| 76 | 534 | 762 | 88mm HV AA Gun |  |  | 762 | auto | auto | 37 | 1 |  | 2 |
| 76 | 534 | 763 | 100mm SHV AA Gun | REGKEY.techLevel>=3 |  | 763 | auto | auto | 37 | 1 |  | 3 |
| 76 | 534 | 764 | Twin-100mm SHV AA-Gun | REGKEY.techLevel>=5 |  | 764 | auto | auto | 37 | 1 |  | 4 |
| 77 | 534 | 772 | Heavy MANPAD | tech.309>=100 |  | 772 | auto | auto | 37 | 1 |  | 2 |
| 77 | 534 | 771 | MANPAD |  |  | 771 | auto | auto | 37 | 1 |  | 1 |
| 77 | 534 | 773 | Super-Heavy MANPAD | tech.309>=100; tech.103>=100 |  | 773 | auto | auto | 37 | 1 |  | 3 |

