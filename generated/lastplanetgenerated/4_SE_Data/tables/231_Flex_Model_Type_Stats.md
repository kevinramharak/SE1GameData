# `Flex Model Type Stats` (`231`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `4` |
| Name | [SE_Data](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Model Type ID | `Text` |
| `1` | Stat ID | `Text` |
| `2` | Formula | `Text` |
| `3` | Fixed | `Text` |
| `4` | IF Clause | `Text` |
| `5` | n/a | `Text` |
| `6` | Comments | `Text` |
| `7` | Model Stat # | `Text` |

### Data

| Model Type ID | Stat ID | Formula | Fixed | IF Clause | n/a | Comments | Model Stat # |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ---- Basic Stats determined by frame of aircraft --------------- |  |  |  |  |  |  |  |
| ---- Meta Design ----------- |  |  |  |  |  |  |  |
| ---- PRODUCTION COST Stats determined by frame of aircraft --------------- |  |  |  |  |  |  |  |
| ------------ ---- AMMO COST Air-to-Air Weapons ---------------- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Air-to-Air Weapons ---------------- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Cargo Space ---------------- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Engine Type Choice ------------------- 2x Engine ----- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Engine Type Choice ------------------- 4x Engine ----- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Engine Type Choice ------------------- 6x Engine ----- |  |  |  |  |  |  |  |
| ------------ ---- PRODUCTION COST Fuel Tank Choice ---------------- |  |  |  |  |  |  |  |
| ------------ Air-to-Air Weapons ---------------- |  |  |  |  |  |  |  |
| ------------ Air-to-Ground Weapons ---------------- |  |  |  |  |  |  |  |
| ------------ Cargo Space ---------------- |  |  |  |  |  |  |  |
| ------------ Engine Type Choice ------------------- 1x Engine ----- |  |  |  |  |  |  |  |
| ------------ Engine Type Choice ------------------- 2x Engine ----- |  |  |  |  |  |  |  |
| ------------ Engine Type Choice ------------------- 4x Engine ----- |  |  |  |  |  |  |  |
| ------------ Engine Type Choice ------------------- 6x Engine ----- |  |  |  |  |  |  |  |
| ------------ Fuel Tank Choice ---------------- |  |  |  |  |  |  |  |
| ------------ PRODUCTION COST Wing Size ---------------- |  |  |  |  |  |  |  |
| ------------ Wing Size ---------------- |  |  |  |  |  |  |  |
| ------------ Wing Size for Thopters ---------------- |  |  |  |  |  |  |  |
| ---------------- AMMO COST  Air-to-Ground Weapons ---------------- |  |  |  |  |  |  |  |
| ---------------- PRODUCTION COST  Air-to-Ground Weapons ---------------- |  |  |  |  |  |  |  |
| ---------------- PRODUCTION COST  Engine Type Choice ------------------- 1x Engine ----- |  |  |  |  |  |  |  |
| ----Final Calculations ------------------ |  |  |  |  |  |  |  |
| [1][2][3][4][5][21][22][11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][131][133][132] | 401 | 1 | 2 |  |  | PROD POP COST for all non automated |  |
| [1][2][3][4][5][21][22][11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][131][133][132] | 301 | STAT.401 | 2 |  |  | FOOD UPKEEP COST |  |
| [1][2][3][4][5][21][22][13][132][133] | 403 | GAMEKEY.76 | 2 | STAT.42>=24 |  | PROD COST for Hazard Surplus Cost |  |
| [101] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [101] | 402 | 5 | 2 |  |  | Prod Cost Metal |  |
| [101] | 530 | 1 | 2 |  |  | Minimum Airbase Level |  |
| [101] | 403 | 5 | 2 |  |  | Prod Cost IP |  |
| [101] | 501 | 2400 | 2 |  |  | Max Weight |  |
| [101] | 500 | 400 | 2 |  |  | Real Weight |  |
| [101] | 4 | 20 | 2 |  |  | Armour Strength |  |
| [101] | 506 | 150 | 2 |  |  | Height in cm |  |
| [101] | 6 | 1 | 2 |  |  | Size |  |
| [101] | 1 | 101 | 1 |  |  | Model Type ID |  |
| [101] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [101] | 505 | 7 | 2 |  |  | Length in meters |  |
| [101] | 509 | 4 | 2 |  |  | IP |  |
| [101][102][103][104][105][106][107][108] | 151 | 70+dth(3,20)+(TECH.366/2) | 1 |  |  | Structural Design between 70 and 130 plus Aircraft Design /2 |  |
| [101][102][103][104][105][106][107][108] | 72 | 5 | 2 |  |  | Recon Points |  |
| [101][104][105][106][107][108][109][111][112][113][121][122][123] | 96 | 2 | 2 | STAT.96==1; dth(1,100)<33; |  | Chance for Graphical Base Type THREE |  |
| [101][104][105][106][107][108][109][111][112][113][121][122][123] | 96 | 1 | 2 | dth(1,100)<33; |  | Chance for Graphical Base Type TWO |  |
| [101][104][105][106][107][108][109][111][112][113][121][122][123] | 96 | 1 | 2 |  |  | Graphical Base Type is set to ONE |  |
| [102] | 506 | 300 | 2 |  |  | Height in cm |  |
| [102] | 500 | 1200 | 2 |  |  | Real Weight |  |
| [102] | 403 | 20 | 2 |  |  | Prod Cost IP |  |
| [102] | 1 | 102 | 1 |  |  | Model Type ID |  |
| [102] | 509 | 10 | 2 |  |  | Aerodynamic Rating |  |
| [102] | 4 | 30 | 2 |  |  | Armour Strength |  |
| [102] | 402 | 20 | 2 |  |  | Prod Cost Metal |  |
| [102] | 501 | 12000 | 2 |  |  | Max Weight |  |
| [102] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [102] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [102] | 6 | 5 | 2 |  |  | Size |  |
| [102] | 505 | 10 | 2 |  |  | Length in meters |  |
| [102] | 530 | 2 | 2 |  |  | Minimum Airbase Level |  |
| [102][103] | 96 | 3+dth(1,2) | 2 | STAT.43>=321; STAT.43<=359 |  | Jet Engine Graphical Base |  |
| [102][103] | 96 | 5 | 2 | STAT.43>=371; STAT.43<=379 |  | Rocket Engine Graphical Base |  |
| [102][103] | 96 | dth(1,2) | 2 | STAT.43<321 | STAT.43>359 |  | Non Jet Engine Graphical |  |
| [103] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [103] | 509 | 10 | 2 |  |  | Aerodynamic Rating |  |
| [103] | 506 | 450 | 2 |  |  | Height in cm |  |
| [103] | 505 | 20 | 2 |  |  | Length in meters |  |
| [103] | 403 | 40 | 2 |  |  | Prod Cost IP |  |
| [103] | 6 | 10 | 2 |  |  | Size |  |
| [103] | 402 | 40 | 2 |  |  | Prod Cost Metal |  |
| [103] | 530 | 3 | 2 |  |  | Minimum Airbase Level |  |
| [103] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [103] | 501 | 60000 | 2 |  |  | Max Weight |  |
| [103] | 500 | 6000 | 2 |  |  | Real Weight |  |
| [103] | 4 | 40 | 2 |  |  | Armour Strength |  |
| [103] | 1 | 103 | 1 |  |  | Model Type ID |  |
| [104] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [104] | 403 | 40 | 2 |  |  | Prod Cost IP |  |
| [104] | 506 | 450 | 2 |  |  | Height in cm |  |
| [104] | 4 | 40 | 2 |  |  | Armour Strength |  |
| [104] | 509 | 8 | 2 |  |  | Aerodynamic Rating |  |
| [104] | 501 | 60000 | 2 |  |  | Max Weight |  |
| [104] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [104] | 500 | 6000 | 2 |  |  | Real Weight |  |
| [104] | 402 | 40 | 2 |  |  | Prod Cost Metal |  |
| [104] | 530 | 3 | 2 |  |  | Minimum Airbase Level |  |
| [104] | 6 | 10 | 2 |  |  | Size |  |
| [104] | 1 | 104 | 1 |  |  | Model Type ID |  |
| [104] | 505 | 20 | 2 |  |  | Length in meters |  |
| [105] | 505 | 50 | 2 |  |  | Length in meters |  |
| [105] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [105] | 530 | 4 | 2 |  |  | Minimum Airbase Level |  |
| [105] | 501 | 240000 | 2 |  |  | Max Weight |  |
| [105] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [105] | 403 | 70 | 2 |  |  | Prod Cost IP |  |
| [105] | 500 | 25000 | 2 |  |  | Real Weight |  |
| [105] | 4 | 60 | 2 |  |  | Armour Strength |  |
| [105] | 6 | 20 | 2 |  |  | Size |  |
| [105] | 509 | 6 | 2 |  |  | Aerodynamic Rating |  |
| [105] | 402 | 70 | 2 |  |  | Prod Cost Metal |  |
| [105] | 1 | 105 | 1 |  |  | Model Type ID |  |
| [105] | 506 | 600 | 2 |  |  | Height in cm |  |
| [106] | 509 | 4 | 2 |  |  | Aerodynamic Rating |  |
| [106] | 506 | 600 | 2 |  |  | Height in cm |  |
| [106] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [106] | 403 | 70 | 2 |  |  | Prod Cost IP |  |
| [106] | 402 | 70 | 2 |  |  | Prod Cost Metal |  |
| [106] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [106] | 4 | 60 | 2 |  |  | Armour Strength |  |
| [106] | 505 | 50 | 2 |  |  | Length in meters |  |
| [106] | 1 | 106 | 1 |  |  | Model Type ID |  |
| [106] | 501 | 240000 | 2 |  |  | Max Weight |  |
| [106] | 530 | 4 | 2 |  |  | Minimum Airbase Level |  |
| [106] | 500 | 25000 | 2 |  |  | Real Weight |  |
| [106] | 6 | 20 | 2 |  |  | Size |  |
| [107] | 1 | 107 | 1 |  |  | Model Type ID |  |
| [107] | 500 | 45000 | 2 |  |  | Real Weight |  |
| [107] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [107] | 501 | 480000 | 2 |  |  | Max Weight |  |
| [107] | 403 | 100 | 2 |  |  | Prod Cost IP |  |
| [107] | 506 | 800 | 2 |  |  | Height in cm |  |
| [107] | 402 | 100 | 2 |  |  | Prod Cost Metal |  |
| [107] | 6 | 40 | 2 |  |  | Size |  |
| [107] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [107] | 509 | 2 | 2 |  |  | Aerodynamic Rating |  |
| [107] | 530 | 5 | 2 |  |  | Minimum Airbase Level |  |
| [107] | 4 | 80 | 2 |  |  | Armour Strength |  |
| [107] | 505 | 80 | 2 |  |  | Length in meters |  |
| [108] | 530 | 5 | 2 |  |  | Minimum Airbase Level |  |
| [108] | 500 | 45000 | 2 |  |  | Real Weight |  |
| [108] | 506 | 800 | 2 |  |  | Height in cm |  |
| [108] | 403 | 100 | 2 |  |  | Prod Cost IP |  |
| [108] | 501 | 480000 | 2 |  |  | Max Weight |  |
| [108] | 505 | 80 | 2 |  |  | Length in meters |  |
| [108] | 6 | 40 | 2 |  |  | Size |  |
| [108] | 402 | 100 | 2 |  |  | Prod Cost Metal |  |
| [108] | 509 | 0 | 2 |  |  | Aerodynamic Rating |  |
| [108] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [108] | 1 | 108 | 1 |  |  | Model Type ID |  |
| [108] | 526 | 0 | 2 |  |  | Vertical Landing Ability |  |
| [108] | 4 | 80 | 2 |  |  | Armour Strength |  |
| [11] | 102 | 5 | 2 | STAT.102>0 |  | FUEL/ENERGY base usage |  |
| [11] | 402 | 5 | 2 |  |  | PROD METAL COST for all vehicles, cost for the basic structure |  |
| [11] | 6 | 1 | 2 |  |  | SIZE for Truck |  |
| [11] | 101 | 5 | 2 | STAT.101>0 |  | FUEL/ENERGY base usage |  |
| [11] | 408 | 4 | 2 |  |  | Trucks need less Pop |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][72][73][131] | 402 | STAT.6 * 2 | 2 |  |  | PROD METAL COST for all vehicles, cost for the chasis |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][13][72][73][131] | 403 | STAT.6 * 1 | 2 |  |  | PROD IP COST for all vehicles, cost for the chasis |  |
| [11][12][41][31][81][32][34][23][33][35][51][52][61][62][63][64][92][91][36][131][101][102][103][104][105][106][107][108][111][112][113][121][122][123] | 403 | 3*GAMEKEY.76*max(SIZE/2,1) | 2 |  |  | PROD COST for Hazard Surplus Cost |  |
| [111] | 6 | 6 | 2 |  |  | Size |  |
| [111] | 4 | 15 | 2 |  |  | Armour Strength |  |
| [111] | 505 | 14 | 2 |  |  | Length in meters |  |
| [111] | 506 | 300 | 2 |  |  | Height in cm |  |
| [111] | 1 | 111 | 1 |  |  | Model Type ID |  |
| [111] | 402 | 30 | 2 |  |  | Prod Cost Metal |  |
| [111] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [111] | 500 | 750 | 2 |  |  | Real Weight |  |
| [111] | 403 | 30 | 2 |  |  | Prod Cost IP |  |
| [111] | 509 | 4 | 2 |  |  | Aerodynamic Rating |  |
| [111] | 501 | 6000 | 2 |  |  | Max Weight |  |
| [111] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [111] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [111][112][113] | 151 | 70+dth(3,20)+(TECH.367/2) | 1 |  |  | Structural Design between 70 and 130 plus Helicopter Design /2 |  |
| [111][112][113] | 72 | 10 | 2 |  |  | Recon Points |  |
| [112] | 509 | 2 | 2 |  |  | Aerodynamic Rating |  |
| [112] | 506 | 400 | 2 |  |  | Height in cm |  |
| [112] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [112] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [112] | 505 | 20 | 2 |  |  | Length in meters |  |
| [112] | 501 | 15000 | 2 |  |  | Max Weight |  |
| [112] | 4 | 30 | 2 |  |  | Armour Strength |  |
| [112] | 500 | 1500 | 2 |  |  | Real Weight |  |
| [112] | 402 | 40 | 2 |  |  | Prod Cost Metal |  |
| [112] | 1 | 112 | 1 |  |  | Model Type ID |  |
| [112] | 6 | 10 | 2 |  |  | Size |  |
| [112] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [112] | 403 | 40 | 2 |  |  | Prod Cost IP |  |
| [113] | 500 | 3000 | 2 |  |  | Real Weight |  |
| [113] | 501 | 27000 | 2 |  |  | Max Weight |  |
| [113] | 6 | 14 | 2 |  |  | Size |  |
| [113] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [113] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [113] | 4 | 45 | 2 |  |  | Armour Strength |  |
| [113] | 506 | 500 | 2 |  |  | Height in cm |  |
| [113] | 509 | 0 | 2 |  |  | Aerodynamic Rating |  |
| [113] | 505 | 30 | 2 |  |  | Length in meters |  |
| [113] | 403 | 50 | 2 |  |  | Prod Cost IP |  |
| [113] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [113] | 1 | 113 | 1 |  |  | Model Type ID |  |
| [113] | 402 | 50 | 2 |  |  | Prod Cost Metal |  |
| [12] | 6 | 3 | 2 |  |  | SIZE for APC |  |
| [12] | 90 | 5 |  |  |  |  |  |
| [12] | 72 | 4 | 2 |  |  | Better RECON for APC, |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 102 | 10 | 2 | STAT.102>0 |  | FUEL/ENERGY base usage |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 402 | 10 | 2 |  |  | PROD METAL COST for all vehicles, cost for the basic structure |  |
| [12][31][32][33][34][35][41][23][51][52][61][62][91][36][63][64][81][131] | 101 | 10 | 2 | STAT.101>0 |  | FUEL/ENERGY base usage |  |
| [12][41] | 408 | 2 | 2 |  |  | APCs and Buggies need less Pop |  |
| [121] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [121] | 405 | 1 | 2 |  |  | 1 Hi-Tech for Light Thop |  |
| [121] | 403 | 30 | 2 |  |  | Prod Cost IP |  |
| [121] | 507 | 40+dth(4,6) | 1 |  |  | Wingarea for Thopter |  |
| [121] | 500 | 1500 | 2 |  |  | Real Weight |  |
| [121] | 4 | 50 | 2 |  |  | Armour Strength |  |
| [121] | 1 | 121 | 1 |  |  | Model Type ID |  |
| [121] | 6 | 5 | 2 |  |  | Size |  |
| [121] | 509 | 10 | 2 |  |  | Aerodynamic Rating |  |
| [121] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [121] | 505 | 10 | 2 |  |  | Length in meters |  |
| [121] | 402 | 30 | 2 |  |  | Prod Cost Metal |  |
| [121] | 501 | 12000 | 2 |  |  | Max Weight |  |
| [121] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [121] | 506 | 400 | 2 |  |  | Height in cm |  |
| [121][122][123] | 151 | 70+dth(3,20)+(TECH.368/2) | 1 |  |  | Structural Design between 70 and 130 plus Thopter Design /2 |  |
| [121][122][123] | 72 | 15 | 2 |  |  | Recon Points |  |
| [122] | 4 | 75 | 2 |  |  | Armour Strength |  |
| [122] | 403 | 50 | 2 |  |  | Prod Cost IP |  |
| [122] | 1 | 122 | 1 |  |  | Model Type ID |  |
| [122] | 500 | 4500 | 2 |  |  | Real Weight |  |
| [122] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [122] | 501 | 48000 | 2 |  |  | Max Weight |  |
| [122] | 507 | 80+dth(4,12) | 1 |  |  | Wingarea for Thopter |  |
| [122] | 509 | 5 | 2 |  |  | Aerodynamic Rating |  |
| [122] | 405 | 2 | 2 |  |  | 2 Hi-Tech for Med Thop |  |
| [122] | 6 | 12 | 2 |  |  | Size |  |
| [122] | 402 | 50 | 2 |  |  | Prod Cost Metal |  |
| [122] | 506 | 550 | 2 |  |  | Height in cm |  |
| [122] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [122] | 505 | 25 | 2 |  |  | Length in meters |  |
| [122] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [123] | 4 | 100 | 2 |  |  | Armour Strength |  |
| [123] | 505 | 50 | 2 |  |  | Length in meters |  |
| [123] | 402 | 70 | 2 |  |  | Prod Cost Metal |  |
| [123] | 500 | 9000 | 2 |  |  | Real Weight |  |
| [123] | 530 | 0 | 2 |  |  | Minimum Airbase Level |  |
| [123] | 401 | 1 | 2 |  |  | Prod Cost Population |  |
| [123] | 6 | 20 | 2 |  |  | Size |  |
| [123] | 501 | 120000 | 2 |  |  | Max Weight |  |
| [123] | 1 | 123 | 1 |  |  | Model Type ID |  |
| [123] | 526 | 1 | 2 |  |  | Vertical Landing Ability |  |
| [123] | 506 | 700 | 2 |  |  | Height in cm |  |
| [123] | 509 | 0 | 2 |  |  | Aerodynamic Rating |  |
| [123] | 507 | 160+dth(4,16) | 1 |  |  | Wingarea for Thopter |  |
| [123] | 405 | 3 | 2 |  |  | 3 Hi-Tech for Hvy Thopter |  |
| [123] | 403 | 70 | 2 |  |  | Prod Cost IP |  |
| [13] | 6 | 2 | 2 |  |  | SIZE for Motorbike Infantry |  |
| [13] | 101 | 2 | 2 |  |  | MOVE FUEL COST for motorbikes (no engine choice) |  |
| [13] | 72 | 6 | 2 |  |  | Better RECON for Motorbike Infantry |  |
| [131] | 537 | 2 | 2 |  |  | AA RANGE for SAM Launcher |  |
| [22] | 44 | 1 | 2 |  |  | RANGE for Artillery |  |
| [23] | 44 | 1 | 2 |  |  | RANGE for Mechanized Artillery |  |
| [31][81] | 72 | 3 | 2 |  |  | Better RECON for Light Tank, Mechanized Quad MG |  |
| [31][81] | 6 | 4 | 2 |  |  | SIZE for Light Tank, Mechanized Quad MG |  |
| [32][34][23] | 6 | 6 | 2 |  |  | SIZE for Medium Tank,Assault Gun,Mechanized Artillery |  |
| [32][34][23] | 72 | 2 | 2 |  |  | Better RECON for Medium Tank,Assault Gun, Mechanized Artillery |  |
| [33][35] | 6 | 8 | 2 |  |  | SIZE for Heavy Tank,Tank Destroyer (Hvy) |  |
| [34] | 24 | 1 | 2 |  |  | Assault Gun has no Cupola functionality |  |
| [35] | 24 | 1 | 2 |  |  | Tank Destroyer has no Cupola functionality |  |
| [36] | 6 | 10 | 2 |  |  | SIZE for Monitor Tank |  |
| [41] | 6 | 3 | 2 |  |  | SIZE for Buggy |  |
| [41] | 72 | 6 | 2 |  |  | Better RECON for Buggy |  |
| [5] | 404 | 1 | 2 |  |  | PROD MACHINE COST for jetpack |  |
| [5] | 23 | 1 | 2 |  |  | JETPACK ACTIVE for Jetpack Infantry |  |
| [5] | 72 | 6 | 2 |  |  | Better RECON for Jetpack Infantry |  |
| [51] | 6 | 6 | 2 |  |  | SIZE for Walker (Light) |  |
| [51] | 72 | 4 | 2 |  |  | Better RECON for Walker (Light) |  |
| [51][52][61][62][63][64][91][92][71][131] | 404 | STAT.6 / 2 | 2 |  |  | PROD MACHINERY COST for walkers, launchers and platforms |  |
| [52] | 6 | 8 | 2 |  |  | SIZE for Heavy Walker (Hvy) |  |
| [52] | 72 | 3 | 2 |  |  | Better RECON for Heavy Walker (Hvy) |  |
| [61] | 6 | 6 | 2 |  |  | SIZE for Rocket Launcher (Med) |  |
| [61] | 44 | 2 | 2 |  |  | RANGE for Rocket Launcher |  |
| [61][13][41] | 90 | 2 | 2 |  |  | MOVETYPE=Wheel for RocketLauncher |  |
| [62] | 44 | 4 | 2 |  |  | RANGE for Missile Launcher |  |
| [62][63][131] | 6 | 8 | 2 |  |  | SIZE for Missile Launcher (Hvy) and Atomic Launcher |  |
| [62][63][23][131] | 90 | 5 | 2 |  |  | MOVETYPE=Tracked for other Launchers and Mech Artillery |  |
| [63] | 44 | 4 | 2 |  |  | RANGE for Atomic Launcher |  |
| [64] | 44 | 999 | 2 |  |  | RANGE for ICBM Launcher |  |
| [64][61][62][63][23][131] | 91 | 3 | 2 |  |  | UNITGROUP = Tank |  |
| [64][63][91][92] | 94 | 1 | 2 | Gas |  | RATIOVERRULE=1 for Platforms and Atmomic Launcher |  |
| [64][92] | 6 | 10 | 2 |  |  | SIZE for Immobile Platforms (wide area shield, icbm) |  |
| [71][72][73] | 405 | 1 | 2 |  |  | PROD HI-TECH  COST for automated or robot models |  |
| [71][72][73] | 302 | 3 | 2 |  |  | ENERGY UPKEEP COST for automated or robot models |  |
| [72][73] | 6 | 4 | 2 |  |  | SIZE for Automated Emplacements |  |
| [72][73][92][64] | 90 | 7 | 2 |  |  | MOVETYPE = Immobile |  |
| [91] | 76 | 1 | 2 |  |  | deplete hp rule |  |
| [91] | 6 | 10 | 2 |  |  | SIZE for Mobile Shield Generator (Mon) |  |
| [92] | 76 | 1 | 2 |  |  | deplete rule hp |  |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 100 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 80 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 528 | -80 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -70 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -60 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -50 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -10 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | 0 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | 0 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | 20 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 2 | 300 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 0 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 400 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 750 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 125 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 225 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 325 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 400 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 500 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 600 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 100 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 50 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 550 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 60 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 5 | 200000 | 2 |  |  | Weight | 533 |
| [air] | 2 | 20 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 5 | 100 | 2 |  |  | Weight | 533 |
| [air] | 2 | 675 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 502 | 250000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 200000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 150000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 100000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 60000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 40000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 25000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 18000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 12000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 8000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 2 | 3500 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 502 | 5000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 3000 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 5 | 250 | 2 |  |  | Weight | 533 |
| [air] | 2 | 40 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 5 | 500 | 2 |  |  | Weight | 533 |
| [air] | 5 | 1200 | 2 |  |  | Weight | 533 |
| [air] | 2 | 1500 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 5 | 250000 | 2 |  |  | Weight | 533 |
| [air] | 528 | -90 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 5 | 150000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 100000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 60000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 40000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 25000 | 2 |  |  | Weight | 533 |
| [air] | 2 | 2500 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 5 | 18000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 12000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 8000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 5000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 3000 | 2 |  |  | Weight | 533 |
| [air] | 5 | 1800 | 2 |  |  | Weight | 533 |
| [air] | 5 | 800 | 2 |  |  | Weight | 533 |
| [air] | 528 | -50 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -90 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -70 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 525 | 100 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 200 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 325 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 500 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 534 |
| [air] | 2 | 250 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 525 | 375 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 2 | 7000 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 300 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 300 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 300 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 534 |
| [air] | 525 | 300 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 225 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 150 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 2 | 450 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 2 | 150 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 2 | 200 | 2 |  |  | Fire Power vs Ground | 534 |
| [air] | 525 | 50 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 100 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 502 | 1800 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 525 | 150 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 200 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 250 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 25 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 50 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 75 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 100 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 125 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 525 | 75 | 2 |  |  | Fire Power vs Air | 534 |
| [air] | 500 | 300 | 2 |  |  | Real Weight | 534 |
| [air] | 528 | -60 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 500 | 300 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 600 | 2 |  |  | Real Weight | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -90 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -80 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -30 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | 0 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | 20 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 528 | -80 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -70 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -60 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -50 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -90 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 528 | -80 | 2 |  |  | Air-to-Air Modifier Round 2 | 534 |
| [air] | 527 | 60 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -80 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -90 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 500 | 600 | 2 |  |  | Real Weight | 534 |
| [air] | 2 | 5000 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 500 | 600 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 600 | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 200-((TECH.130/100)*100) | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 400-(((TECH.130/100)*100)*2) | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 800-(((TECH.130/100)*100)*4) | 2 |  |  | Real Weight | 534 |
| [air] | 500 | 1600-(((TECH.130/100)*100)*8) | 2 |  |  | Real Weight | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Modifier Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -90 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -80 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 527 | -100 | 2 |  |  | Air-to-Air Penalty Round 1 | 534 |
| [air] | 500 | 600 | 2 |  |  | Real Weight | 534 |
| [air] | 502 | 1200 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 502 | 500 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 44800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 5000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 8000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 12000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 5600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 80000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 10000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 12000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 20000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 32000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 12800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 25600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 16000 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 30 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 28 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 14310 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 7070 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 14310 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 7070 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 26 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 24 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 22 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 450 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2960 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5840 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 11710 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 450 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2650 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 4320 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 6650 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 7070 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 14310 | 2 |  |  | Real Weight | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 8800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4000 | 2 |  |  | Engine Power | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 16 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 507 | 60 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 90 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 120 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 150 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 507 | 180 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 3 | 600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2400 | 2 |  |  | Engine Power | 43 |
| [air] | 507 | 210 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 48 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 48300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 6040 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 12990 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 48300 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 12990 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 6040 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 48300 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 26 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 24 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 22 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2810 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5440 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 10720 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 21520 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2810 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 4870 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 7940 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 12220 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 6040 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 12990 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 26290 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 504 | 28 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 502 | 100 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 502 | 250 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 509 | 24 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 2 | 800 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 502 | 800 | 2 |  |  | Fuel Tank Liters | 533 |
| [air] | 504 | 30 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 36 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 36 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 36 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 36 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 32 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 3 | 900 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1800 | 2 |  |  | Engine Power | 43 |
| [air] | 509 | 36 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 12 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 15 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 3 | 3600 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 13200 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 120000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 67200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 7500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 12000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 18000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 8400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 15000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 24000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 9600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 18000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 30000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 48000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 9600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 19200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 38400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 9000 | 2 |  |  | Engine Power | 43 |
| [air] | 2 | 1125 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 5 | 18000 | 2 |  |  | Weight | 535 |
| [air] | 500 | 100-(((TECH.130/100)*100)/2) | 2 |  |  | Real Weight | 41 |
| [air] | 402 | 84 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 36 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 60 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 72 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 84 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 36 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 48 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 60 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 72 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 90 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 72 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 36 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 60 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 36 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 270 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 72 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 96 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 132 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 240 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 72 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 96 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 132 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 240 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 36 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 60 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 72 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 90 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 407 | 48 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 72 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 405 | 30 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 403 | 1 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 2 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 2 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 3 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 3 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 4 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 5 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 7 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 9 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 11 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 14 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 405 | 24 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 407 | 60 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 405 | 18 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 6 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 407 | 84 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 18 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 24 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 30 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 18 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 24 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 30 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 60 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 24 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 36 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 48 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 60 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 405 | 12 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 403 | 132 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 96 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 72 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 32 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 40 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 60 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 32 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 40 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 56 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 32 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 40 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 56 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 16 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 403 | 160 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 403 | 120 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 88 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 120 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 88 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 120 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 88 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 120 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 160 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 88 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 407 | 32 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 40 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 48 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 24 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 32 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 40 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 405 | 4 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 8 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 12 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 16 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 20 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 72 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 96 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 132 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 270 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 404 | 40 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 20 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 407 | 60 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 32 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 403 | 45 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 407 | 40 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 56 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 20 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 407 | 48 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 50 | 2 |  |  | Prod Cost IP | 533 |
| [air] | 402 | 2 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 201 | 100 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 80 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 120 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 200 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 200 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 200 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 300 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 600 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 900 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 1200 | 2 |  |  | Ammo Cost | 534 |
| [air] | 529 | 20 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 30 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 50 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 50 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 50 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 40 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 60 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 201 | 100 | 2 |  |  | Ammo Cost | 534 |
| [air] | 529 | 100 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 201 | 100 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 40 | 2 |  |  | Ammo Cost | 534 |
| [air] | 402 | 3 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 5 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 6 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 7 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 10 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 15 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 22 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 25 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 201 | 20 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 30 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 50 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 50 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 50 | 2 |  |  | Ammo Cost | 534 |
| [air] | 201 | 60 | 2 |  |  | Ammo Cost | 534 |
| [air] | 402 | 2 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 529 | 100 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 80 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 201 | 9000 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 13000 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 250 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 500 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 750 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 1000 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 1500 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 2500 | 2 |  |  | Ammo Cost | 41 |
| [air] | 529 | 300 | 2 |  |  | Ammo Cost Air Combat | 41 |
| [air] | 529 | 400 | 2 |  |  | Ammo Cost Air Combat | 41 |
| [air] | 529 | 600 | 2 |  |  | Ammo Cost Air Combat | 41 |
| [air] | 529 | 800 | 2 |  |  | Ammo Cost Air Combat | 41 |
| [air] | 5 | STAT.500 - (STAT.500 * TECH.361/200) | 2 |  |  | Add REAL WEIGHT modified for Lightweight Alloys Tech to WEIGHT |  |
| [air] | 25 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | ENGINE DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [air] | 26 | ((STAT.7/2 + dth(4,20)) * STAT.151/100) | 4 |  |  | ARMOUR DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [air] | 27 | ((STAT.7/2 + dth(4,20)) * STAT.151/100) | 4 |  |  | WEAPON DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [air] | 97 | dth(1,3) | 1 |  |  | DETAIL TYPE is fixed for the whol series to provide graphical consistency |  |
| [air] | 201 | 6000 | 2 |  |  | Ammo Cost | 41 |
| [air] | 529 | 100 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 201 | 3750 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 1250 | 2 |  |  | Ammo Cost | 41 |
| [air] | 529 | 120 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 200 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 200 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 200 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 300 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 600 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 900 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 529 | 1200 | 2 |  |  | Ammo Cost Air Combat | 534 |
| [air] | 201 | 300 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 400 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 600 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 800 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 125 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 250 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 375 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 500 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 750 | 2 |  |  | Ammo Cost | 41 |
| [air] | 201 | 2250 | 2 |  |  | Ammo Cost | 41 |
| [air] | 402 | 2 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 2 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 1 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 403 | 8 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 8 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 402 | 2 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 3 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 3 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 5 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 7 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 9 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 11 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 14 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 30 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 40 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 45 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 402 | 50 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 403 | 4 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 534 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 403 | 14 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 18 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 18 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 18 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 1 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 2 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 3 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 4 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 5 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 6 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 402 | 14 | 2 |  |  | Prod Cost Metal | 41 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 41 |
| [air] | 402 | 30 | 2 |  |  | Prod Cost Metal | 41 |
| [air] | 402 | 40 | 2 |  |  | Prod Cost Metal | 41 |
| [air] | 402 | 1 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 402 | 1 | 2 |  |  | Prod Cost Metal | 535 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 10 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 8 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 6 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 32 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 32 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 402 | 48 | 2 |  |  | Prod Cost Metal | 534 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 534 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 534 |
| [air] | 404 | 3 | 2 |  |  | Prod Cost Machinery | 534 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 534 |
| [air] | 402 | 1 | 2 |  |  | Prod Cost Metal | 533 |
| [air] | 407 | 10 | 2 |  |  | Prod Cost Rare Metals | 534 |
| [air] | 407 | 20 | 2 |  |  | Prod Cost Rare Metals | 534 |
| [air] | 407 | 25 | 2 |  |  | Prod Cost Rare Metals | 534 |
| [air] | 403 | 14 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 2 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 403 | 4 | 2 |  |  | Prod Cost IP | 41 |
| [air] | 407 | 15 | 2 |  |  | Prod Cost Rare Metals | 534 |
| [air] | 2 | 1750 | 2 |  |  | Fire Power vs Ground | 41 |
| [air] | 405 | 10 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 6 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 403 | 22 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 45 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 22 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 22 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 90 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 45 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | chk(226,STAT.6,1,7); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | chk(226,STAT.6,1,8); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | chk(226,STAT.6,1,10); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 402 | chk(226,STAT.6,1,1); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,2); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,3); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,4); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,5); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,6); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,7); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,8); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 402 | chk(226,STAT.6,1,10); | 2 |  |  | Prod Cost Metal | 532 |
| [air] | 403 | 10 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 22 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 10 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | chk(226,STAT.6,1,6); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | 10 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 10 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 14 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 6 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 10 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 15 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 4 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 6 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 8 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 10 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 12 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 15 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 6 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 15 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 14 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 10 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 15 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 12 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 16 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 22 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 70 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 4 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 6 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 10 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 15 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 6 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | chk(226,STAT.6,1,5); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | chk(226,STAT.6,1,4); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | chk(226,STAT.6,1,3); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 500 | 20000-(((TECH.130/100)*100)*100) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 40000-(((TECH.130/100)*100)*200) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 80000-(((TECH.130/100)*100)*400) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 160000-(((TECH.130/100)*100)*800) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 500-(((TECH.130/100)*100)*250/100) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 1000-(((TECH.130/100)*100)*5) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 1500-(((TECH.130/100)*100)*750/100) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 2000-(((TECH.130/100)*100)*10) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 3000-(((TECH.130/100)*100)*15) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 5000-(((TECH.130/100)*100)*25) | 2 |  |  | Real Weight | 41 |
| [air] | 525 | 30 | 2 |  |  | Fire Power vs Air | 41 |
| [air] | 525 | 35 | 2 |  |  | Fire Power vs Air | 41 |
| [air] | 525 | 40 | 2 |  |  | Fire Power vs Air | 41 |
| [air] | 525 | 45 | 2 |  |  | Fire Power vs Air | 41 |
| [air] | 527 | -60 | 2 |  |  | Air-to-Air Penalty Round 1 | 41 |
| [air] | 527 | -30 | 2 |  |  | Air-to-Air Penalty Round 1 | 41 |
| [air] | 527 | 0 | 2 |  |  | Air-to-Air Penalty Round 1 | 41 |
| [air] | 500 | 10000-(((TECH.130/100)*100)*50) | 2 |  |  | Real Weight | 41 |
| [air] | 527 | 20 | 2 |  |  | Air-to-Air Penalty Round 1 | 41 |
| [air] | 500 | 5000-(((TECH.130/100)*100)*25) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 2000-(((TECH.130/100)*100)*10) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 200-(((TECH.130/100)*100)) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 400-(((TECH.130/100)*100)*2) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 800-(((TECH.130/100)*100)*4) | 2 |  |  | Real Weight | 41 |
| [air] | 503 | 160 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 300 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 500 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 670 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 1000 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 1650 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 3300 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 6600 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 13000 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 26000 | 2 |  |  | Cargo Cap | 41 |
| [air] | 503 | 50000 | 2 |  |  | Cargo Cap | 41 |
| [air] | 500 | 500-(((TECH.130/100)*100)*250/100) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 1000-(((TECH.130/100)*100)*5) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 1500-(((TECH.130/100)*100)*750/100) | 2 |  |  | Real Weight | 41 |
| [air] | 500 | 3000-(((TECH.130/100)*100)*15) | 2 |  |  | Real Weight | 41 |
| [air] | 528 | -20 | 2 |  |  | Air-to-Air Penalty Round 2 | 41 |
| [air] | 528 | -10 | 2 |  |  | Air-to-Air Penalty Round 2 | 41 |
| [air] | 528 | 0 | 2 |  |  | Air-to-Air Penalty Round 2 | 41 |
| [air] | 503 | 800 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 1200 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 1800 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 3000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 5000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 8000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 12000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 18000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 25000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 40000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 60000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 100000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 150000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 200000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 250000 | 2 |  |  | Cargo Cap | 535 |
| [air] | 403 | chk(226,STAT.6,1,1); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 403 | chk(226,STAT.6,1,2); | 2 |  |  | Prod Cost IP | 532 |
| [air] | 503 | 500 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 250 | 2 |  |  | Cargo Cap | 535 |
| [air] | 503 | 100 | 2 |  |  | Cargo Cap | 535 |
| [air] | 5 | 250000 | 2 |  |  | Weight | 535 |
| [air] | 528 | 0 | 2 |  |  | Air-to-Air Penalty Round 2 | 41 |
| [air] | 5 | 100 | 2 |  |  | Weight | 535 |
| [air] | 5 | 250 | 2 |  |  | Weight | 535 |
| [air] | 5 | 500 | 2 |  |  | Weight | 535 |
| [air] | 5 | 800 | 2 |  |  | Weight | 535 |
| [air] | 5 | 1200 | 2 |  |  | Weight | 535 |
| [air] | 5 | 1800 | 2 |  |  | Weight | 535 |
| [air] | 5 | 3000 | 2 |  |  | Weight | 535 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 5 | 5000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 12000 | 2 |  |  | Weight | 535 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 5 | 25000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 40000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 60000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 100000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 150000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 200000 | 2 |  |  | Weight | 535 |
| [air] | 5 | 8000 | 2 |  |  | Weight | 535 |
| [air] | 405 | 8 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 30 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 8 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 12 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 16 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 20 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 30 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 12 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 16 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 20 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 28 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 80 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 140 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 30 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 28 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 12 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 16 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 20 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 24 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 402 | 8 | 2 |  |  | Prod Cost Metal | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 407 | 28 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 20 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 20 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 10 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 405 | 2 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 4 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 407 | 12 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 16 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 407 | 32 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 48 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 72 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 144 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 10 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 10 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 12 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 20 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 10 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 6 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 10 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 3 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 5 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 407 | 6 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 8 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 10 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 12 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 14 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 6 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 10 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 16 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 24 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 36 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 407 | 72 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 2 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 3 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 5 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 1 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 3 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 3 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 4 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 404 | 5 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 403 | 80 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 80 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 48 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 64 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 88 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 120 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 180 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 40 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 30 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 404 | 8 | 2 |  |  | Prod Cost Machinery | 43 |
| [air] | 405 | 1 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 2 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 3 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 4 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 405 | 5 | 2 |  |  | Prod Cost Hi-Tech | 43 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 407 | 0 | 2 |  |  | Prod Cost Rare Metals | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 90 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 20 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 24 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 32 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 60 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 90 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 403 | 44 | 2 |  |  | Prod Cost IP | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 3 | 5000 | 2 |  |  | Engine Power | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 190 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 370 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 730 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1460 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 60 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 190 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 330 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 540 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 220 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 880 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 220 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 410 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 880 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 410 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 760 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 410 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1620 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 60 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 5 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 30 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 28 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 26 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 4 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 24 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 7 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 6 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 22 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 220 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 6040 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 410 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 880 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 60 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 100 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 190 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 330 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 540 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 830 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 220 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 880 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1790 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 3290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 6040 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 410 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 1000 | 2 |  |  | Real Weight | 532 |
| [air] | 500 | 2000 | 2 |  |  | Real Weight | 532 |
| [air] | 500 | 5000 | 2 |  |  | Real Weight | 532 |
| [air] | 500 | 10000 | 2 |  |  | Real Weight | 532 |
| [air] | 500 | 16000 | 2 |  |  | Real Weight | 532 |
| [air] | 500 | 24000 | 2 |  |  | Real Weight | 532 |
| [air] | 509 | 10 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 8 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 6 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 4 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 500 | 400 | 2 |  |  | Real Weight | 532 |
| [air] | 509 | 2 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 0 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 0 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 509 | 0 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 3 | 150 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 300 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 200 | 2 |  |  | Engine Power | 43 |
| [air] | 509 | 0 | 2 |  |  | Aerodynamic Rating | 532 |
| [air] | 3 | 400 | 2 |  |  | Engine Power | 43 |
| [air] | 500 | 80 | 2 |  |  | Real Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,240000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 7 | 70+dth(3,10) | 0 |  |  | Base Design between 70 and 100 initially plus Aircraft Ruggedness /2 |  |
| [air] | 301 | 1 | 2 |  |  | Food Upkeep Cost |  |
| [air] | 527 | 100 | 2 |  |  | Base is no attack penalty round 1 |  |
| [air] | 528 | 100 | 2 |  |  | Base is no attack penalty round 2 |  |
| [air] | 507 | chk(226,STAT.505/2,1,2); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,5); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,10); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,15); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,25); | 2 |  |  | Wing Area | 532 |
| [air] | 500 | 50 | 2 |  |  | Real Weight | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,40); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,85); | 2 |  |  | Wing Area | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,120); | 2 |  |  | Wing Area | 532 |
| [air] | 501 | chk(226,STAT.6,1,200) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,800) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,4000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,10000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,20000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,50000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,100000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 501 | chk(226,STAT.6,1,160000) / 10; | 2 |  |  | Max Weight | 532 |
| [air] | 507 | chk(226,STAT.505/2,1,60); | 2 |  |  | Wing Area | 532 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1250 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 10000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 16000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 25000 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 3750 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 2500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 5000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 8000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 5000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 8000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 11200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 20000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 250 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 500 | 2 |  |  | Engine Power | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 8 | STAT.7 | 3 |  |  | The Base Design value copy at creation (before Field Testing) |  |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 30 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 28 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 26 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 24 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 22 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 8 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 7 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 6 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 5 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 4 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 540 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 500 | 1050 | 2 |  |  | Real Weight | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 50000 | 2 |  |  | Engine Power | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 11 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 15 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 13 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 12 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 10 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 9 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 20 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 18 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 16 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 504 | 14 | 2 |  |  | Engine Efficiency | 43 |
| [air] | 3 | 32000 | 2 |  |  | Engine Power | 43 |
| [air] | 500 | 2060 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 540 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 940 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2350 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 630 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2500 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5060 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 9300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 17080 | 2 |  |  | Real Weight | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 500 | 4140 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 9300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2500 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 290 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 540 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 940 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1530 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2350 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 630 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2500 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5060 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 9300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5060 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 630 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2500 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 5060 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 9300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 2140 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 4590 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 9300 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 17080 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 630 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1160 | 2 |  |  | Real Weight | 43 |
| [air] | 500 | 1160 | 2 |  |  | Real Weight | 43 |
| [air] | 3 | 20000 | 2 |  |  | Engine Power | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 3 | 6400 | 2 |  |  | Engine Power | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 40 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 30 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 60 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 3 | 12000 | 2 |  |  | Engine Power | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 508 | 0 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 20 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 25 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 508 | 1 | 2 |  |  | Air Sensitive | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 3 | 8000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 10000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 16000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 10000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 5000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 16000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 12800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 22400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 40000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 7500 | 2 |  |  | Engine Power | 43 |
| [air] | 509 | 50 | 2 |  |  | Aerodynamic Rating | 43 |
| [air] | 3 | 3200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 507 | 30 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 507 | 60 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 75 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 90 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 507 | 105 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 526 | 1 | 2 |  |  | Vertical Landing Ability | 43 |
| [air] | 507 | 45 | 2 |  |  | Wing Area m2 | 43 |
| [air] | 3 | 600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 300 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 6000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2500 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1600 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 800 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 4400 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 3000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 2000 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 1200 | 2 |  |  | Engine Power | 43 |
| [air] | 3 | 400 | 2 |  |  | Engine Power | 43 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Gauss Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin High Speed Heavy Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Adv. Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Light Plasma Blaster | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Charged Gauss Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Gas Powered Machinegun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 88mm HV AA Gun | 534 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Adv. Machinegun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad Machinegun | 41 |
| [all] | 5 | 550 | 2 |  |  | WEIGHT for Twin-100mm SHV AA-Gun | 534 |
| [all] | 5 | 325 | 2 |  |  | WEIGHT for 100mm SHV AA Gun | 534 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 50mm HV AA Gun | 534 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Heavy Surface-Air Missiles | 534 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Medium Surface-Air Missiles | 534 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Light Surface-Air Missiles | 534 |
| [all] | 5 | 600 | 2 |  |  | WEIGHT for Tactical Nuke Grenade Launcher | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Very Heavy Plasma Blast Gun | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Quad High Speed Machinegun | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Gauss Heavy Machinegun | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Atomic 1 MT Fission Missile | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Atomic 10 MT Fusion Missile | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Plasma Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Heavy Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Light Conventional Missiles | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Big Rockets | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Rockets | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Small Rockets | 41 |
| [all] | 75 | 100 | 2 |  |  | ATTACKS OVERRULE for Tactical Nuke Grenade Launcher | 41 |
| [all] | 75 | 1000 | 2 |  |  | ATTACKS OVERRULE for 100 MegaTon ICBM | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 75 | 600 | 2 |  |  | ATTACKS OVERRULE for 50 MegaTon ICBM | 41 |
| [all] | 75 | 200 | 2 |  |  | ATTACKS OVERRULE for Atomic 10 MT Fusion Missile | 41 |
| [all] | 75 | 60 | 2 |  |  | ATTACKS OVERRULE for Atomic 1 MT Fission Missile | 41 |
| [all] | 75 | 20 | 2 |  |  | ATTACKS OVERRULE for Plasma Missiles | 41 |
| [all] | 75 | 14 | 2 |  |  | ATTACKS OVERRULE for Heavy Conventional Missiles | 41 |
| [all] | 75 | 12 | 2 |  |  | ATTACKS OVERRULE for Medium Conventional Missiles | 41 |
| [all] | 75 | 10 | 2 |  |  | ATTACKS OVERRULE for Light Conventional Missiles | 41 |
| [all] | 75 | 8 | 2 |  |  | ATTACKS OVERRULE for Big Rockets | 41 |
| [all] | 75 | 6 | 2 |  |  | ATTACKS OVERRULE for Medium Rockets | 41 |
| [all] | 75 | 4 | 2 |  |  | ATTACKS OVERRULE for Small Rockets | 41 |
| [all] | 75 | 2 | 2 |  |  | ATTACKS OVERRULE for Twin Heavy Plasma Blaster | 41 |
| [all] | 75 | 200 | 2 |  |  | ATTACKS OVERRULE for 10 MegaTon ICBM | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Heavy Plasma Blast Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for 40mm Howitzer Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Light Plasma Blast Gun | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for Atomic 1 MT Fission Missile | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Plasma Missiles | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Heavy Conventional Missiles | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Medium Conventional Missiles | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Light Conventional Missiles | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Big Rockets | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for Medium Rockets | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Small Rockets | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Plasma Blaster | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 5 | 700 | 2 |  |  | WEIGHT for Atomic 10 MT Fusion Missile | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin High Speed Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Adv. Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Heavy Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Light Plasma Blaster | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Charged Gauss Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Gauss Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Gas Powered Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad High Speed Machinegun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Twin Gauss Heavy Machinegun | 41 |
| [all] | 5 | 1000 | 2 |  |  | WEIGHT for 10 MegaTon ICBM | 41 |
| [all] | 5 | 1200 | 2 |  |  | WEIGHT for 50 MegaTon ICBM | 41 |
| [all] | 5 | 1400 | 2 |  |  | WEIGHT for 100 MegaTon ICBM | 41 |
| [all] | 5 | 800 | 2 |  |  | WEIGHT for Combined Beam Gun | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Beam Gun | 41 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Very Heavy Laser Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for Heavy Laser Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Medium Laser Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Light Laser Gun | 41 |
| [all] | 5 | 650 | 2 |  |  | WEIGHT for 300mm High Velocity Gun | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for 240mm High Velocity Gun | 41 |
| [all] | 5 | 350 | 2 |  |  | WEIGHT for 180mm High Velocity Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for 150mm High Velocity Gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 105mm High Velocity Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for 88mm High Velocity Gun | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 60mm High Velocity Gun | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for 40mm High Velocity Gun | 41 |
| [all] | 5 | 50 | 2 |  |  | WEIGHT for 25mm High Velocity Gun | 41 |
| [all] | 5 | 650 | 2 |  |  | WEIGHT for 300mm Howitzer Gun | 41 |
| [all] | 5 | 500 | 2 |  |  | WEIGHT for 240mm Howitzer Gun | 41 |
| [all] | 5 | 350 | 2 |  |  | WEIGHT for 180mm Howitzer Gun | 41 |
| [all] | 5 | 300 | 2 |  |  | WEIGHT for 150mm Howitzer Gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 105mm Howitzer Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for 88mm Howitzer Gun | 41 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for 60mm Howitzer Gun | 41 |
| [all] | 5 | 50 | 2 |  |  | WEIGHT for 25mm Howitzer Gun | 41 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Medium Plasma Blast Gun | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 10 MegaTon ICBM | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Plasma Rifle | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 100 MegaTon ICBM | 41 |
| [all] | 402 | 30 | 2 |  |  | PROD METAL for 60mm High Velocity Gun | 41 |
| [all] | 402 | 24 | 2 |  |  | PROD METAL for 40mm High Velocity Gun | 41 |
| [all] | 402 | 18 | 2 |  |  | PROD METAL for 25mm High Velocity Gun | 41 |
| [all] | 402 | 66 | 2 |  |  | PROD METAL for 300mm Howitzer Gun | 41 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for 240mm Howitzer Gun | 41 |
| [all] | 402 | 54 | 2 |  |  | PROD METAL for 180mm Howitzer Gun | 41 |
| [all] | 402 | 48 | 2 |  |  | PROD METAL for 150mm Howitzer Gun | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 105mm Howitzer Gun | 41 |
| [all] | 402 | 36 | 2 |  |  | PROD METAL for 88mm Howitzer Gun | 41 |
| [all] | 402 | 30 | 2 |  |  | PROD METAL for 60mm Howitzer Gun | 41 |
| [all] | 402 | 36 | 2 |  |  | PROD METAL for 88mm High Velocity Gun | 41 |
| [all] | 402 | 24 | 2 |  |  | PROD METAL for 40mm Howitzer Gun | 41 |
| [all] | 402 | 1000 | 2 |  |  | PROD METAL for 100 MegaTon ICBM | 41 |
| [all] | 402 | 800 | 2 |  |  | PROD METAL for 50 MegaTon ICBM | 41 |
| [all] | 402 | 600 | 2 |  |  | PROD METAL for 10 MegaTon ICBM | 41 |
| [all] | 402 | 400 | 2 |  |  | PROD METAL for Atomic 10 MT Fusion Missile | 41 |
| [all] | 402 | 200 | 2 |  |  | PROD METAL for Atomic 1 MT Fission Missile | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Plasma Missiles | 41 |
| [all] | 402 | 160 | 2 |  |  | PROD METAL for Heavy Conventional Missiles | 41 |
| [all] | 402 | 140 | 2 |  |  | PROD METAL for Medium Conventional Missiles | 41 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Light Conventional Missiles | 41 |
| [all] | 402 | 80 | 2 |  |  | PROD METAL for Big Rockets | 41 |
| [all] | 402 | 18 | 2 |  |  | PROD METAL for 25mm Howitzer Gun | 41 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for Medium Rockets | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 105mm High Velocity Gun | 41 |
| [all] | 402 | 54 | 2 |  |  | PROD METAL for 180mm High Velocity Gun | 41 |
| [all] | 402 | 4 | 2 |  |  | PROD METAL for MANPAD | 534 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Adv. Machinegun | 41 |
| [all] | 402 | 200 | 2 |  |  | PROD METAL for Twin-100mm SHV AA-Gun | 534 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for 100mm SHV AA Gun | 534 |
| [all] | 402 | 50 | 2 |  |  | PROD METAL for 88mm HV AA Gun | 534 |
| [all] | 402 | 25 | 2 |  |  | PROD METAL for 50mm HV AA Gun | 534 |
| [all] | 402 | 160 | 2 |  |  | PROD METAL for Heavy Surface-Air Missiles | 534 |
| [all] | 402 | 140 | 2 |  |  | PROD METAL for Medium Surface-Air Missiles | 534 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Light Surface-Air Missiles | 534 |
| [all] | 402 | 100 | 2 |  |  | PROD METAL for Tactical Nuke Grenade Launcher | 41 |
| [all] | 402 | 48 | 2 |  |  | PROD METAL for 150mm High Velocity Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Very Heavy Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Medium Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Light Plasma Blast Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Combined Beam Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Beam Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Very Heavy Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Heavy Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Medium Laser Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Light Laser Gun | 41 |
| [all] | 402 | 66 | 2 |  |  | PROD METAL for 300mm High Velocity Gun | 41 |
| [all] | 402 | 60 | 2 |  |  | PROD METAL for 240mm High Velocity Gun | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD METAL for Heavy Plasma Blast Gun | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for 50 MegaTon ICBM | 41 |
| [all] | 402 | 40 | 2 |  |  | PROD METAL for Small Rockets | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Laser Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Charged Gauss Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Gauss Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Gas Powered Carbine | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Automatic Rifle | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Carbine | 41 |
| [all] | 402 | 1 | 2 |  |  | PROD METAL for Slugthrower | 41 |
| [all] | 537 | 2 | 2 |  |  | RANGE for Heavy Surface-Air Missiles | 534 |
| [all] | 537 | 1 | 2 |  |  | RANGE for Medium Surface-Air Missiles | 534 |
| [all] | 44 | 3 | 2 |  |  | RANGE for Plasma Missiles | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Machinegun | 41 |
| [all] | 44 | 2 | 2 |  |  | RANGE for Heavy Conventional Missiles | 41 |
| [all] | 44 | 2 | 2 |  |  | RANGE for Big Rockets | 41 |
| [all] | 44 | 1 | 2 |  |  | RANGE for Medium Rockets | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Quad Gas Powered Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Gas Powered Machinegun | 41 |
| [all] | 22 | 0 | 2 |  |  | AMMOSAVER for Gas Powered Carbine | 41 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Heavy Surface-Air Missiles | 534 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Medium Surface-Air Missiles | 534 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Light Surface-Air Missiles | 534 |
| [all] | 92 | 1 | 2 |  |  | LIMITED COMBAT OVERRULE for Tactical Nuke Grenade Launcher | 41 |
| [all] | 44 | 1 | 2 |  |  | RANGE for Medium Conventional Missiles | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Plasma Blaster | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Advcanced Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Gas Powered Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin High Speed Heavy Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Adv. Machinegun | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Heavy Machinegun | 41 |
| [all] | 402 | 10 | 2 |  |  | PROD METAL for Micro Nuke RPG | 41 |
| [all] | 402 | 4 | 2 |  |  | PROD METAL for Heavy RPG | 41 |
| [all] | 402 | 3 | 2 |  |  | PROD METAL for Guided RPG | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for RPG | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Bazooka | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for High Speed Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Light Plasma Blaster | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Charged Gauss Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Gauss Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Gas Powered Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad High Speed Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Adv. Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Light Plasma Blaster | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Tripod Assault Laser Rifle | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Charged Gauss Machinegun | 41 |
| [all] | 402 | 2 | 2 |  |  | PROD METAL for Gauss Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 402 | 16 | 2 |  |  | PROD METAL for Twin Gauss Heavy Machinegun | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER VS GROUND for 50mm HV AA Gun | 534 |
| [all] | 95 | 50 | 2 |  |  | RAD for Tactical Nuke Grenade Launcher | 41 |
| [all] | 2 | 700 | 2 |  |  | FIREPOWER for 150mm High Velocity Gun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 105mm High Velocity Gun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for 88mm High Velocity Gun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for 60mm High Velocity Gun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for 40mm High Velocity Gun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for 25mm High Velocity Gun | 41 |
| [all] | 2 | 1200 | 2 |  |  | FIREPOWER for 300mm Howitzer Gun | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for 240mm Howitzer Gun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for 180mm Howitzer Gun | 41 |
| [all] | 2 | 700 | 2 |  |  | FIREPOWER for 150mm Howitzer Gun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for 180mm High Velocity Gun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 105mm Howitzer Gun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for 60mm Howitzer Gun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for 40mm Howitzer Gun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for 25mm Howitzer Gun | 41 |
| [all] | 2 | 500000 | 2 |  |  | FIREPOWER for 100 MegaTon ICBM | 41 |
| [all] | 2 | 300000 | 2 |  |  | FIREPOWER for 50 MegaTon ICBM | 41 |
| [all] | 2 | 100000 | 2 |  |  | FIREPOWER for 10 MegaTon ICBM | 41 |
| [all] | 2 | 100000 | 2 |  |  | FIREPOWER for Atomic 10 MT Fusion Missile | 41 |
| [all] | 2 | 30000 | 2 |  |  | FIREPOWER for Atomic 1 MT Fission Missile | 41 |
| [all] | 2 | 30000 | 2 |  |  | FIREPOWER for Plasma Missiles | 41 |
| [all] | 2 | 12000 | 2 |  |  | FIREPOWER for Heavy Conventional Missiles | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for 88mm Howitzer Gun | 41 |
| [all] | 2 | 10000 | 2 |  |  | FIREPOWER for Medium Conventional Missiles | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for 240mm High Velocity Gun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Light Laser Gun | 41 |
| [all] | 525 | 50 | 2 |  |  | FIREPOWER VS AIR for Heavy MANPAD | 534 |
| [all] | 525 | 40 | 2 |  |  | FIREPOWER VS AIR for MANPAD | 534 |
| [all] | 525 | 200 | 2 |  |  | FIREPOWER VS AIR for Twin-100mm SHV AA-Gun | 534 |
| [all] | 525 | 100 | 2 |  |  | FIREPOWER VS AIR for 100mm SHV AA Gun | 534 |
| [all] | 525 | 75 | 2 |  |  | FIREPOWER VS AIR for 88mm HV AA Gun | 534 |
| [all] | 525 | 50 | 2 |  |  | FIREPOWER VS AIR for 50mm HV AA Gun | 534 |
| [all] | 525 | 300 | 2 |  |  | FIREPOWER VS AIR for Heavy Surface-Air Missiles | 534 |
| [all] | 525 | 260 | 2 |  |  | FIREPOWER VS AIR for Medium Surface-Air Missiles | 534 |
| [all] | 525 | 200 | 2 |  |  | FIREPOWER VS AIR for Light Surface-Air Missiles | 534 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 2 | 1200 | 2 |  |  | FIREPOWER for 300mm High Velocity Gun | 41 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 2 | 12500 | 2 |  |  | FIREPOWER for Tactical Nuke Grenade Launcher | 41 |
| [all] | 2 | 7500 | 2 |  |  | FIREPOWER for Very Heavy Plasma Blast Gun | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Heavy Plasma Blast Gun | 41 |
| [all] | 2 | 4500 | 2 |  |  | FIREPOWER for Medium Plasma Blast Gun | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Light Plasma Blast Gun | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Combined Beam Gun | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Beam Gun | 41 |
| [all] | 2 | 2000 | 2 |  |  | FIREPOWER for Very Heavy Laser Gun | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Heavy Laser Gun | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for Medium Laser Gun | 41 |
| [all] | 537 | 1 | 2 |  |  | flak range | 534 |
| [all] | 525 | 60 | 2 |  |  | FIREPOWER VS AIR for Super-Heavy MANPAD | 534 |
| [all] | 2 | 8000 | 2 |  |  | FIREPOWER for Light Conventional Missiles | 41 |
| [all] | 2 | 5000 | 2 |  |  | FIREPOWER for Medium Rockets | 41 |
| [all] | 2 | 266 | 2 |  |  | FIREPOWER for Gas Powered Machinegun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for High Speed Machinegun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for Advcanced Machinegun | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Machinegun | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Plasma Rifle | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Laser Rifle | 41 |
| [all] | 2 | 230 | 2 |  |  | FIREPOWER for Charged Gauss Rifle | 41 |
| [all] | 2 | 160 | 2 |  |  | FIREPOWER for Gauss Rifle | 41 |
| [all] | 2 | 85 | 2 |  |  | FIREPOWER for Gas Powered Carbine | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Automatic Rifle | 41 |
| [all] | 2 | 500 | 2 |  |  | FIREPOWER for Gauss Machinegun | 41 |
| [all] | 2 | 75 | 2 |  |  | FIREPOWER for Carbine | 41 |
| [all] | 72 | 1 | 2 |  |  | Base Recon Points |  |
| [all] | 4 | STAT.6 * 20 | 2 |  |  | Extra ARMOUR Strength for shear size |  |
| [all] | 1 | MODELTYPEID | 2 |  |  | Model Type ID so that subsequent algorithm can interpret better |  |
| [all] | 5 | STAT.6 * 10 | 2 |  |  | WEIGHT |  |
| [all] | 408 | 1 | 2 |  |  | Normally no Pop Prod Cost Divider |  |
| [all] | 8 | STAT.7 | 3 |  |  | The Base Design value copy at creation (before Field Testing) |  |
| [all] | 6 | 1 | 2 |  |  | Default Size = 1 |  |
| [all] | 151 | 70+dth(3,20) | 1 |  |  | Structural Design between 70 and 130 |  |
| [all] | 7 | 70+dth(3,10) | 0 |  |  | Base Design between 70 and 100 initially |  |
| [all] | 402 | 6 | 2 |  |  | PROD METAL for Heavy MANPAD | 534 |
| [all] | 2 | 50 | 2 |  |  | FIREPOWER for Slugthrower | 41 |
| [all] | 2 | 6000 | 2 |  |  | FIREPOWER for Big Rockets | 41 |
| [all] | 2 | 750 | 2 |  |  | FIREPOWER for Charged Gauss Machinegun | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Light Plasma Blaster | 41 |
| [all] | 2 | 4000 | 2 |  |  | FIREPOWER for Small Rockets | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Twin Heavy Plasma Blaster | 41 |
| [all] | 2 | 2000 | 2 |  |  | FIREPOWER for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 2 | 1125 | 2 |  |  | FIREPOWER for Twin Gauss Heavy Machinegun | 41 |
| [all] | 2 | 525 | 2 |  |  | FIREPOWER for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for Twin High Speed Heavy Machinegun | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for Twin Heavy Adv. Machinegun | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for Twin Heavy Machinegun | 41 |
| [all] | 2 | 650 | 2 |  |  | FIREPOWER for Micro Nuke RPG | 41 |
| [all] | 2 | 1000 | 2 |  |  | FIREPOWER for Tripod Assault Laser Rifle | 41 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER for Heavy RPG | 41 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER for RPG | 41 |
| [all] | 2 | 100 | 2 |  |  | FIREPOWER for Bazooka | 41 |
| [all] | 2 | 4500 | 2 |  |  | FIREPOWER for Quad Light Plasma Blaster | 41 |
| [all] | 2 | 3000 | 2 |  |  | FIREPOWER for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 2 | 2250 | 2 |  |  | FIREPOWER for Quad Charged Gauss Machinegun | 41 |
| [all] | 2 | 1500 | 2 |  |  | FIREPOWER for Quad Gauss Machinegun | 41 |
| [all] | 2 | 800 | 2 |  |  | FIREPOWER for Quad Gas Powered Machinegun | 41 |
| [all] | 2 | 900 | 2 |  |  | FIREPOWER for Quad High Speed Machinegun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for Quad Adv. Machinegun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Quad Machinegun | 41 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER for Guided RPG | 41 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Quad Machinegun | 41 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Light Surface-Air Missiles | 534 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Heavy Surface-Air Missiles | 534 |
| [all] | 202 | 24 | 2 |  |  | COMBAT AMMO/ENERGY for Light Laser Gun | 41 |
| [all] | 201 | 540 | 2 |  |  | COMBAT AMMO/ENERGY for 300mm High Velocity Gun | 41 |
| [all] | 201 | 480 | 2 |  |  | COMBAT AMMO/ENERGY for 240mm High Velocity Gun | 41 |
| [all] | 201 | 450 | 2 |  |  | COMBAT AMMO/ENERGY for 180mm High Velocity Gun | 41 |
| [all] | 201 | 390 | 2 |  |  | COMBAT AMMO/ENERGY for 150mm High Velocity Gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 105mm High Velocity Gun | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm High Velocity Gun | 41 |
| [all] | 201 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for 60mm High Velocity Gun | 41 |
| [all] | 201 | 150 | 2 |  |  | COMBAT AMMO/ENERGY for 40mm High Velocity Gun | 41 |
| [all] | 201 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for 25mm High Velocity Gun | 41 |
| [all] | 202 | 36 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Laser Gun | 41 |
| [all] | 201 | 540 | 2 |  |  | COMBAT AMMO/ENERGY for 300mm Howitzer Gun | 41 |
| [all] | 201 | 450 | 2 |  |  | COMBAT AMMO/ENERGY for 180mm Howitzer Gun | 41 |
| [all] | 201 | 390 | 2 |  |  | COMBAT AMMO/ENERGY for 150mm Howitzer Gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 105mm Howitzer Gun | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm Howitzer Gun | 41 |
| [all] | 201 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for 60mm Howitzer Gun | 41 |
| [all] | 201 | 150 | 2 |  |  | COMBAT AMMO/ENERGY for 40mm Howitzer Gun | 41 |
| [all] | 201 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for 25mm Howitzer Gun | 41 |
| [all] | 203 | 1200 | 2 |  |  | COMBAT AMMO/ENERGY for 100 MegaTon ICBM | 41 |
| [all] | 203 | 800 | 2 |  |  | COMBAT AMMO/ENERGY for 50 MegaTon ICBM | 41 |
| [all] | 203 | 500 | 2 |  |  | COMBAT AMMO/ENERGY for 10 MegaTon ICBM | 41 |
| [all] | 201 | 480 | 2 |  |  | COMBAT AMMO/ENERGY for 240mm Howitzer Gun | 41 |
| [all] | 203 | 200 | 2 |  |  | COMBAT AMMO/ENERGY for Atomic 10 MT Fusion Missile | 41 |
| [all] | 202 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Laser Gun | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Beam Gun | 41 |
| [all] | 95 | 4000 | 2 |  |  | RAD for 100 MegaTon ICBM | 41 |
| [all] | 95 | 2000 | 2 |  |  | RAD for 50 MegaTon ICBM | 41 |
| [all] | 95 | 1000 | 2 |  |  | RAD for 10 MegaTon ICBM | 41 |
| [all] | 95 | 1000 | 2 |  |  | RAD for Atomic 10 MT Fusion Missile | 41 |
| [all] | 95 | 200 | 2 |  |  | RAD for Atomic 1 MT Fission Missile | 41 |
| [all] | 95 | 1 | 2 |  |  | RAD for Micro Nuke RPG | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for Super-Heavy MANPAD | 534 |
| [all] | 201 | 240 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy MANPAD | 534 |
| [all] | 201 | 180 | 2 |  |  | COMBAT AMMO/ENERGY for MANPAD | 534 |
| [all] | 201 | 750 | 2 |  |  | COMBAT AMMO/ENERGY for Twin-100mm SHV AA-Gun | 534 |
| [all] | 202 | 90 | 2 |  |  | COMBAT AMMO/ENERGY for Very Heavy Laser Gun | 41 |
| [all] | 201 | 375 | 2 |  |  | COMBAT AMMO/ENERGY for 100mm SHV AA Gun | 534 |
| [all] | 201 | 225 | 2 |  |  | COMBAT AMMO/ENERGY for 50mm HV AA Gun | 534 |
| [all] | 201 | 4000 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Surface-Air Missiles | 534 |
| [all] | 201 | 2500 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Surface-Air Missiles | 534 |
| [all] | 201 | 1250 | 2 |  |  | COMBAT AMMO/ENERGY for Light Surface-Air Missiles | 534 |
| [all] | 203 | 10 | 2 |  |  | COMBAT AMMO/ENERGY for Tactical Nuke Grenade Launcher | 41 |
| [all] | 202 | 240 | 2 |  |  | COMBAT AMMO/ENERGY for Very Heavy Plasma Blast Gun | 41 |
| [all] | 202 | 195 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Plasma Blast Gun | 41 |
| [all] | 202 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Plasma Blast Gun | 41 |
| [all] | 202 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Light Plasma Blast Gun | 41 |
| [all] | 202 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Combined Beam Gun | 41 |
| [all] | 201 | 300 | 2 |  |  | COMBAT AMMO/ENERGY for 88mm HV AA Gun | 534 |
| [all] | 2 | 0 | 2 |  |  | FIREPOWER VS GROUND for Medium Surface-Air Missiles | 534 |
| [all] | 203 | 100 | 2 |  |  | COMBAT AMMO/ENERGY for Atomic 1 MT Fission Missile | 41 |
| [all] | 201 | 5400 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy Conventional Missiles | 41 |
| [all] | 202 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Light Plasma Blaster | 41 |
| [all] | 202 | 20 | 2 |  |  | COMBAT AMMO/ENERGY for Tripod Assault Laser Rifle | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Charged Gauss Machinegun | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for Gauss Machinegun | 41 |
| [all] | 201 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Gas Powered Machinegun | 41 |
| [all] | 201 | 160 | 2 |  |  | COMBAT AMMO/ENERGY for High Speed Machinegun | 41 |
| [all] | 201 | 100 | 2 |  |  | COMBAT AMMO/ENERGY for Advcanced Machinegun | 41 |
| [all] | 201 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Machinegun | 41 |
| [all] | 202 | 13 | 2 |  |  | COMBAT AMMO/ENERGY for Plasma Rifle | 41 |
| [all] | 202 | 6 | 2 |  |  | COMBAT AMMO/ENERGY for Laser Rifle | 41 |
| [all] | 201 | 260 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Machinegun | 41 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Charged Gauss Rifle | 41 |
| [all] | 201 | 3 | 2 |  |  | COMBAT AMMO/ENERGY for Gas Powered Carbine | 41 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Automatic Rifle | 41 |
| [all] | 201 | 10 | 2 |  |  | COMBAT AMMO/ENERGY for Carbine | 41 |
| [all] | 201 | 5 | 2 |  |  | COMBAT AMMO/ENERGY for Slugthrower | 41 |
| [all] | 2 | 60 | 2 |  |  | FIREPOWER VS GROUND for Super-Heavy MANPAD | 534 |
| [all] | 2 | 50 | 2 |  |  | FIREPOWER VS GROUND for Heavy MANPAD | 534 |
| [all] | 2 | 40 | 2 |  |  | FIREPOWER VS GROUND for MANPAD | 534 |
| [all] | 2 | 400 | 2 |  |  | FIREPOWER VS GROUND for Twin-100mm SHV AA-Gun | 534 |
| [all] | 2 | 300 | 2 |  |  | FIREPOWER VS GROUND for 100mm SHV AA Gun | 534 |
| [all] | 2 | 200 | 2 |  |  | FIREPOWER VS GROUND for 88mm HV AA Gun | 534 |
| [all] | 201 | 15 | 2 |  |  | COMBAT AMMO/ENERGY for Gauss Rifle | 41 |
| [all] | 202 | 250 | 2 |  |  | COMBAT AMMO/ENERGY for Plasma Missiles | 41 |
| [all] | 201 | 400 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Adv. Machinegun | 41 |
| [all] | 201 | 175 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Gas Powered Machinegun | 41 |
| [all] | 201 | 4200 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Conventional Missiles | 41 |
| [all] | 201 | 3000 | 2 |  |  | COMBAT AMMO/ENERGY for Light Conventional Missiles | 41 |
| [all] | 201 | 1740 | 2 |  |  | COMBAT AMMO/ENERGY for Big Rockets | 41 |
| [all] | 201 | 1200 | 2 |  |  | COMBAT AMMO/ENERGY for Medium Rockets | 41 |
| [all] | 201 | 660 | 2 |  |  | COMBAT AMMO/ENERGY for Small Rockets | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Plasma Blaster | 41 |
| [all] | 202 | 40 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Gauss Heavy Machinegun | 41 |
| [all] | 201 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad High Speed Machinegun | 41 |
| [all] | 201 | 320 | 2 |  |  | COMBAT AMMO/ENERGY for Twin High Speed Heavy Machinegun | 41 |
| [all] | 201 | 120 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Machinegun | 41 |
| [all] | 203 | 1 | 2 |  |  | COMBAT AMMO/ENERGY for Micro Nuke RPG | 41 |
| [all] | 201 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Heavy RPG | 41 |
| [all] | 201 | 60 | 2 |  |  | COMBAT AMMO/ENERGY for Guided RPG | 41 |
| [all] | 201 | 50 | 2 |  |  | COMBAT AMMO/ENERGY for RPG | 41 |
| [all] | 201 | 30 | 2 |  |  | COMBAT AMMO/ENERGY for Bazooka | 41 |
| [all] | 202 | 165 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Light Plasma Blaster | 41 |
| [all] | 202 | 80 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Charged Gauss Machinegun | 41 |
| [all] | 201 | 650 | 2 |  |  | COMBAT AMMO/ENERGY for Quad Gauss Machinegun | 41 |
| [all] | 201 | 200 | 2 |  |  | COMBAT AMMO/ENERGY for Twin Heavy Adv. Machinegun | 41 |
| [all] | 402 | 8 | 2 |  |  | PROD METAL for Super-Heavy MANPAD | 534 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 150mm Polymer Plating | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Carbine | 41 |
| [all] | 405 | 16 | 2 |  |  | PROD HI-TECH for XXL Shield Generator | 42 |
| [all] | 405 | 14 | 2 |  |  | PROD HI-TECH for XL Shield Generator | 42 |
| [all] | 405 | 12 | 2 |  |  | PROD HI-TECH for Very Large Shield Generator | 42 |
| [all] | 405 | 10 | 2 |  |  | PROD HI-TECH for Large Shield Generator | 42 |
| [all] | 405 | 8 | 2 |  |  | PROD HI-TECH for Medium Shield Generator | 42 |
| [all] | 405 | 6 | 2 |  |  | PROD HI-TECH for Small Shield Generator | 42 |
| [all] | 405 | 7 | 2 |  |  | PROD HI-TECH for 400mm Liquid Armour | 42 |
| [all] | 405 | 6 | 2 |  |  | PROD HI-TECH for 300mm Liquid Armour | 42 |
| [all] | 405 | 5 | 2 |  |  | PROD HI-TECH for 200mm Liquid Armour | 42 |
| [all] | 405 | 4 | 2 |  |  | PROD HI-TECH for 150mm Liquid Armour | 42 |
| [all] | 406 | 1 | 2 |  |  | PROD RADIOACTIVES for Envirosuit and Personal Shield Generator | 42 |
| [all] | 405 | 3 | 2 |  |  | PROD HI-TECH for 100mm Liquid Armour | 42 |
| [all] | 405 | 1 | 2 |  |  | PROD HI-TECH for  25mm Liquid Armour | 42 |
| [all] | 405 | 1 | 2 |  |  | PROD HI-TECH for Envirosuit and Personal Shield Generator | 42 |
| [all] | 404 | 24 | 2 |  |  | PROD COST MACHINERY for XXL Shield Generator | 42 |
| [all] | 404 | 20 | 2 |  |  | PROD COST MACHINERY for XL Shield Generator | 42 |
| [all] | 404 | 16 | 2 |  |  | PROD COST MACHINERY for Very Large Shield Generator | 42 |
| [all] | 404 | 12 | 2 |  |  | PROD COST MACHINERY for Large Shield Generator | 42 |
| [all] | 404 | 8 | 2 |  |  | PROD COST MACHINERY for Medium Shield Generator | 42 |
| [all] | 404 | 4 | 2 |  |  | PROD COST MACHINERY for Small Shield Generator | 42 |
| [all] | 404 | 2 | 2 |  |  | PROD COST MACHINERY for Heavy Battledress | 42 |
| [all] | 404 | 1 | 2 |  |  | PROD COST MACHINERY for Battledress | 42 |
| [all] | 405 | 2 | 2 |  |  | PROD HI-TECH for 50mm Liquid Armour | 42 |
| [all] | 403 | 350 | 2 |  |  | PROD COST IP for XXL Shield Generator | 42 |
| [all] | 407 | 2 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 25mm Polymer Plating | 42 |
| [all] | 407 | 6 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 100mm Polymer Plating | 42 |
| [all] | 5 | 350 * SIZE /2 | 2 |  |  | WEIGHT for 400mm Steel Plating | 42 |
| [all] | 5 | 300 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Steel Plating | 42 |
| [all] | 5 | 250 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Steel Plating | 42 |
| [all] | 5 | 200 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Steel Plating | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Steel Plating | 42 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Steel Plating | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Steel Plating | 42 |
| [all] | 5 | 10 * SIZE / 2 | 2 |  |  | WEIGHT for Minimal 5mm Steel Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Envirosuit and Personal Shield Generator | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Heavy Battledress | 42 |
| [all] | 407 | 4 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 50mm Polymer Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Battledress | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Combat Armour | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Padded Envirosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Envirosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Filters + Thermosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Thermosuit | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Filters | 42 |
| [all] | 407 | 14 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 400mm Polymer Plating | 42 |
| [all] | 407 | 12 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 300mm Polymer Plating | 42 |
| [all] | 407 | 10 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 200mm Polymer Plating | 42 |
| [all] | 407 | 8 * SIZE / 2 | 2 |  |  | PROD RARE METALS for 150mm Polymer Plating | 42 |
| [all] | 5 | 0 | 2 |  |  | WEIGHT for Heavy Combat Armour | 42 |
| [all] | 5 | 25 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Polymer Plating | 42 |
| [all] | 403 | 300 | 2 |  |  | PROD COST IP for XL Shield Generator | 42 |
| [all] | 403 | 200 | 2 |  |  | PROD COST IP for Large Shield Generator | 42 |
| [all] | 403 | 8 | 2 |  |  | PROD COST IP for Battledress | 42 |
| [all] | 403 | 5 | 2 |  |  | PROD COST IP for Heavy Combat Armour | 42 |
| [all] | 403 | 4 | 2 |  |  | PROD COST IP for Combat Armour | 42 |
| [all] | 403 | 3 | 2 |  |  | PROD COST IP for Padded Envirosuit | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD COST IP for Envirosuit | 42 |
| [all] | 403 | 2 | 2 |  |  | PROD COST IP for Filters + Thermosuit | 42 |
| [all] | 403 | 1 | 2 |  |  | PROD COST IP for Thermosuit | 42 |
| [all] | 403 | 1 | 2 |  |  | PROD COST IP for Filters | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for XXL Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for XL Shield Generator | 42 |
| [all] | 403 | 10 | 2 |  |  | PROD COST IP for Heavy Battledress | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Very Large Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Medium Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Small Shield Generator | 42 |
| [all] | 402 | 16  * SIZE / 2 | 2 |  |  | PROD COST METAL for 400mm Liquid Armour | 42 |
| [all] | 402 | 14  * SIZE / 2 | 2 |  |  | PROD COST METAL for 300mm Liquid Armour | 42 |
| [all] | 402 | 12  * SIZE / 2 | 2 |  |  | PROD COST METAL for 200mm Liquid Armour | 42 |
| [all] | 402 | 10  * SIZE / 2 | 2 |  |  | PROD COST METAL for 150mm Liquid Armour | 42 |
| [all] | 402 | 8  * SIZE / 2 | 2 |  |  | PROD COST METAL for 100mm Liquid Armour | 42 |
| [all] | 402 | 6  * SIZE / 2 | 2 |  |  | PROD COST METAL for 50mm Liquid Armour | 42 |
| [all] | 402 | 4 * SIZE / 2 | 2 |  |  | PROD COST METAL for  25mm Liquid Armour | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 400mm Polymer Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Large Shield Generator | 42 |
| [all] | 403 | 250 | 2 |  |  | PROD COST IP for Very Large Shield Generator | 42 |
| [all] | 403 | 16 | 2 |  |  | PROD COST IP for Envirosuit and Personal Shield Generator | 42 |
| [all] | 403 | 6  * SIZE / 2 | 2 |  |  | PROD COST IP for 25mm Steel Plating | 42 |
| [all] | 403 | 150 | 2 |  |  | PROD COST IP for Medium Shield Generator | 42 |
| [all] | 403 | 100 | 2 |  |  | PROD COST IP for Small Shield Generator | 42 |
| [all] | 403 | 80 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Liquid Armour | 42 |
| [all] | 403 | 70 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Liquid Armour | 42 |
| [all] | 403 | 60 * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Liquid Armour | 42 |
| [all] | 403 | 50 * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Liquid Armour | 42 |
| [all] | 403 | 40 * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Liquid Armour | 42 |
| [all] | 403 | 30 * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Liquid Armour | 42 |
| [all] | 403 | 20 * SIZE / 2 | 2 |  |  | PROD COST IP for  25mm Liquid Armour | 42 |
| [all] | 403 | 72 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Polymer Plating | 42 |
| [all] | 403 | 2 * SIZE / 2 | 2 |  |  | PROD COST IP for Minimal 5mm Steel Plating | 42 |
| [all] | 403 | 56 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Polymer Plating | 42 |
| [all] | 403 | 30 * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Polymer Plating | 42 |
| [all] | 403 | 20 * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Polymer Plating | 42 |
| [all] | 403 | 12  * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Polymer Plating | 42 |
| [all] | 403 | 6 * SIZE / 2 | 2 |  |  | PROD COST IP for 25mm Polymer Plating | 42 |
| [all] | 403 | 18 * SIZE / 2 | 2 |  |  | PROD COST IP for 400mm Steel Plating | 42 |
| [all] | 403 | 16 * SIZE / 2 | 2 |  |  | PROD COST IP for 300mm Steel Plating | 42 |
| [all] | 403 | 14 * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Steel Plating | 42 |
| [all] | 403 | 12  * SIZE / 2 | 2 |  |  | PROD COST IP for 150mm Steel Plating | 42 |
| [all] | 403 | 10  * SIZE / 2 | 2 |  |  | PROD COST IP for 100mm Steel Plating | 42 |
| [all] | 403 | 8  * SIZE / 2 | 2 |  |  | PROD COST IP for 50mm Steel Plating | 42 |
| [all] | 403 | 42  * SIZE / 2 | 2 |  |  | PROD COST IP for 200mm Polymer Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 300mm Polymer Plating | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Polymer Plating | 42 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Polymer Plating | 42 |
| [all] | 407 | 4 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 407 | 3 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 407 | 2 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 407 | 1 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 402 | 10 | 2 |  |  | PROD COST for Triple Diesel Engine | 43 |
| [all] | 402 | 8 | 2 |  |  | PROD COST for Double Diesel Engine | 43 |
| [all] | 402 | 6 | 2 |  |  | PROD COST for Heavy Diesel Engine | 43 |
| [all] | 402 | 4 | 2 |  |  | PROD COST for Medium Diesel Engine | 43 |
| [all] | 402 | 2 | 2 |  |  | PROD COST for Light Diesel Engine | 43 |
| [all] | 403 | 48 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 407 | 5 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 403 | 36 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 403 | 12 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 403 | 10 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 403 | 8 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 403 | 6 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 403 | 4 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 403 | 26 | 2 |  |  | PROD COST for Triple Diesel Engine | 43 |
| [all] | 403 | 22 | 2 |  |  | PROD COST for Double Diesel Engine | 43 |
| [all] | 403 | 18 | 2 |  |  | PROD COST for Heavy Diesel Engine | 43 |
| [all] | 403 | 12 | 2 |  |  | PROD COST for Medium Diesel Engine | 43 |
| [all] | 403 | 8 | 2 |  |  | PROD COST for Light Diesel Engine | 43 |
| [all] | 403 | 24 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 102 | 3*SIZE*((50+stat.5)/100) +20 | 2 |  |  | FUEL/ENERGY USE for Triple Electric Engine | 43 |
| [all] | 405 | 1 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 405 | 3 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 403 | 48 | 2 |  |  | PROD IP for 100mm Mass Driver Gun | 41 |
| [all] | 402 | 42 | 2 |  |  | PROD METAL for 100mm Mass Driver gun | 41 |
| [all] | 5 | 250 | 2 |  |  | WEIGHT for 100mm Mass Driver gun | 41 |
| [all] | 201 | 345 | 2 |  |  | COMBAT AMMO/ENERGY for 100mm Mass Driver Gun | 41 |
| [all] | 2 | 600 | 2 |  |  | FIREPOWER for 100mm Mass Driver Gun | 41 |
| [all] | 96 | -1 | 2 | STAT.96>1; dth(1,100)<33; |  | Chance for Graphical Base Type TWO |  |
| [all] | 96 | 1 | 2 | STAT.96<3; dth(1,100)<33; |  | Chance for Graphical Base Type TWO |  |
| [all] | 96 | 1 | 2 | (STAT.3/STAT.6)>(60+dth(3,40)) |  | Chance for Graphical Base Type THREE |  |
| [all] | 96 | 1 | 2 | (STAT.3/STAT.6)>(40+dth(2,40)) |  | Chance for Graphical Base Type TWO |  |
| [all] | 96 | 1 | 2 |  |  | Graphical Base Type is set to ONE |  |
| [all] | 405 | 2 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 97 | dth(1,3) | 1 |  |  | DETAIL TYPE is fixed for the whol series to provide graphical consistency |  |
| [all] | 26 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | ARMOUR DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 25 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | ENGINE DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 406 | 3 | 2 |  |  | PROD COST for Triple Nuclear Engine | 43 |
| [all] | 406 | 2 | 2 |  |  | PROD COST for Double Nuclear Engine | 43 |
| [all] | 406 | 1 | 2 |  |  | PROD COST for Nuclear Engine | 43 |
| [all] | 404 | 5 | 2 |  |  | PROD COST for Triple Electric Engine | 43 |
| [all] | 404 | 4 | 2 |  |  | PROD COST for Double Electric Engine | 43 |
| [all] | 404 | 3 | 2 |  |  | PROD COST for Heavy Electric Engine | 43 |
| [all] | 404 | 2 | 2 |  |  | PROD COST for Medium Electric Engine | 43 |
| [all] | 404 | 1 | 2 |  |  | PROD COST for Light Electric Engine | 43 |
| [all] | 27 | (STAT.7/2 + dth(4,20)) * STAT.151/100 | 4 |  |  | WEAPON DESIGN based on BASE DESIGN. Modified for STRUC.DESIGN |  |
| [all] | 5 | 75 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Polymer Plating | 42 |
| [all] | 102 | 2*SIZE*((50+stat.5)/100) +15 | 2 |  |  | FUEL/ENERGY USE for Double Electric Engine | 43 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +5 | 2 |  |  | FUEL/ENERGY USE for Medium Electric Engine | 43 |
| [all] | 3 | 100 | 2 |  |  | ENGINE POWER for Light Electric Engine | 43 |
| [all] | 3 | 1200 | 2 |  |  | ENGINE POWER for Triple Diesel Engine | 43 |
| [all] | 3 | 800 | 2 |  |  | ENGINE POWER for Double Diesel Engine | 43 |
| [all] | 3 | 400 | 2 |  |  | ENGINE POWER for Heavy Diesel Engine | 43 |
| [all] | 3 | 300 | 2 |  |  | ENGINE POWER for Medium Diesel Engine | 43 |
| [all] | 3 | 200 | 2 |  |  | ENGINE POWER for Light Diesel Engine | 43 |
| [all] | 5 | 2000 | 2 |  |  | WEIGHT for XXL Shield Generator | 42 |
| [all] | 5 | 1600 | 2 |  |  | WEIGHT for XL Shield Generator | 42 |
| [all] | 5 | 1200 | 2 |  |  | WEIGHT for Very Large Shield Generator | 42 |
| [all] | 5 | 800 | 2 |  |  | WEIGHT for Large Shield Generator | 42 |
| [all] | 3 | 150 | 2 |  |  | ENGINE POWER for Medium Electric Engine | 43 |
| [all] | 5 | 600 | 2 |  |  | WEIGHT for Medium Shield Generator | 42 |
| [all] | 5 | 350 * SIZE / 2 | 2 |  |  | WEIGHT for 400mm Liquid Armour | 42 |
| [all] | 5 | 300 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Liquid Armour | 42 |
| [all] | 5 | 250 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Liquid Armour | 42 |
| [all] | 5 | 200 * SIZE / 2 | 2 |  |  | WEIGHT for 150mm Liquid Armour | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 100mm Liquid Armour | 42 |
| [all] | 5 | 100 * SIZE / 2 | 2 |  |  | WEIGHT for 50mm Liquid Armour | 42 |
| [all] | 5 | 50 * SIZE / 2 | 2 |  |  | WEIGHT for 25mm Liquid Armour | 42 |
| [all] | 5 | 175 * SIZE /2 | 2 |  |  | WEIGHT for 400mm Polymer Plating | 42 |
| [all] | 5 | 150 * SIZE / 2 | 2 |  |  | WEIGHT for 300mm Polymer Plating | 42 |
| [all] | 5 | 125 * SIZE / 2 | 2 |  |  | WEIGHT for 200mm Polymer Plating | 42 |
| [all] | 5 | 400 | 2 |  |  | WEIGHT for Small Shield Generator | 42 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +10 | 2 |  |  | FUEL/ENERGY USE for Heavy Electric Engine | 43 |
| [all] | 3 | 200 | 2 |  |  | ENGINE POWER for Heavy Electric Engine | 43 |
| [all] | 3 | 600 | 2 |  |  | ENGINE POWER for Triple Electric Engine | 43 |
| [all] | 102 | 1*SIZE*((50+stat.5)/100) +1 | 2 |  |  | FUEL/ENERGY USE for Light Electric Engine | 43 |
| [all] | 101 | 3*SIZE*((50+stat.5)/100) +20 | 2 |  |  | FUEL/ENERGY USE for Triple Diesel Engine | 43 |
| [all] | 101 | 2*SIZE*((50+stat.5)/100) +15 | 2 |  |  | FUEL/ENERGY USE for Double Diesel Engine | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +10 | 2 |  |  | FUEL/ENERGY USE for Heavy Diesel Engine | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +5 | 2 |  |  | FUEL/ENERGY USE for Medium Diesel Engine | 43 |
| [all] | 101 | 1*SIZE*((50+stat.5)/100) +1 | 2 |  |  | FUEL/ENERGY USE for Light Diesel Engine | 43 |
| [all] | 5 | 200 | 2 |  |  | WEIGHT for Triple Nuclear | 43 |
| [all] | 5 | 150 | 2 |  |  | WEIGHT for Double Nuclear | 43 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Nuclear | 43 |
| [all] | 5 | 80 | 2 |  |  | WEIGHT for Triple Electric | 43 |
| [all] | 3 | 400 | 2 |  |  | ENGINE POWER for Double Electric Engine | 43 |
| [all] | 5 | 60 | 2 |  |  | WEIGHT for Double Electric | 43 |
| [all] | 5 | 30 | 2 |  |  | WEIGHT for Medium Electric | 43 |
| [all] | 5 | 20 | 2 |  |  | WEIGHT for Light Electric | 43 |
| [all] | 5 | 125 | 2 |  |  | WEIGHT for Triple Diesel | 43 |
| [all] | 5 | 100 | 2 |  |  | WEIGHT for Double Diesel | 43 |
| [all] | 5 | 75 | 2 |  |  | WEIGHT for Heavy Diesel | 43 |
| [all] | 5 | 60 | 2 |  |  | WEIGHT for Medium Diesel | 43 |
| [all] | 5 | 45 | 2 |  |  | WEIGHT for Light Diesel | 43 |
| [all] | 3 | 2400 | 2 |  |  | ENGINE POWER for Triple Nuclear Engine | 43 |
| [all] | 3 | 1800 | 2 |  |  | ENGINE POWER for Double Nuclear Engine | 43 |
| [all] | 3 | 1200 | 2 |  |  | ENGINE POWER for Nuclear Engine | 43 |
| [all] | 5 | 40 | 2 |  |  | WEIGHT for Heavy Electric | 43 |
| [all] | 403 | 1 | 2 |  |  | PROD IP for Slugthrower | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 200mm Polymer Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 50mm Polymer Plating | 42 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Heavy Plasma Blast Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Medium Plasma Blast Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Light Plasma Blast Gun | 41 |
| [all] | 403 | 70 | 2 |  |  | PROD IP for Combined Beam Gun | 41 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for Beam Gun | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Very Heavy Laser Gun | 41 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for Heavy Laser Gun | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Medium Laser Gun | 41 |
| [all] | 403 | 30 | 2 |  |  | PROD IP for Light Laser Gun | 41 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for 300mm High Velocity Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Very Heavy Plasma Blast Gun | 41 |
| [all] | 403 | 72 | 2 |  |  | PROD IP for 240mm High Velocity Gun | 41 |
| [all] | 403 | 56 | 2 |  |  | PROD IP for 150mm High Velocity Gun | 41 |
| [all] | 403 | 48 | 2 |  |  | PROD IP for 105mm High Velocity Gun | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for 88mm High Velocity Gun | 41 |
| [all] | 403 | 32 | 2 |  |  | PROD IP for 60mm High Velocity Gun | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for 40mm High Velocity Gun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for 25mm High Velocity Gun | 41 |
| [all] | 403 | 44 | 2 |  |  | PROD IP for 300mm Howitzer Gun | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for 240mm Howitzer Gun | 41 |
| [all] | 403 | 36 | 2 |  |  | PROD IP for 180mm Howitzer Gun | 41 |
| [all] | 403 | 32 | 2 |  |  | PROD IP for 150mm Howitzer Gun | 41 |
| [all] | 403 | 64 | 2 |  |  | PROD IP for 180mm High Velocity Gun | 41 |
| [all] | 403 | 28 | 2 |  |  | PROD IP for 105mm Howitzer Gun | 41 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for Tactical Nuke Grenade Launcher | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Medium Surface-Air Missiles | 534 |
| [all] | 405 | 8 | 2 |  |  | PROD HIGH TECH for Quad Light Plasma Blaster | 41 |
| [all] | 405 | 2 | 2 |  |  | PROD HIGH TECH for Light Plasma Blaster | 41 |
| [all] | 405 | 1 | 2 |  |  | PROD HIGH TECH for Plasma Rifle | 41 |
| [all] | 407 | 30 | 2 |  |  | PROD RARE METALS for Combined Beam Gun | 41 |
| [all] | 407 | 20 | 2 |  |  | PROD RARE METALS for Beam Gun | 41 |
| [all] | 407 | 25 | 2 |  |  | PROD RARE METALS for Very Heavy Laser Gun | 41 |
| [all] | 407 | 20 | 2 |  |  | PROD RARE METALS for Heavy Laser Gun | 41 |
| [all] | 407 | 15 | 2 |  |  | PROD RARE METALS for Medium Laser Gun | 41 |
| [all] | 407 | 10 | 2 |  |  | PROD RARE METALS for Light Laser Gun | 41 |
| [all] | 407 | 5 | 2 |  |  | PROD RARE METALS for Plasma Missiles | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Light Surface-Air Missiles | 534 |
| [all] | 407 | 8 | 2 |  |  | PROD RARE METALS for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 407 | 4 | 2 |  |  | PROD RARE METALS for Tripod Assault Laser Rifle | 41 |
| [all] | 407 | 2 | 2 |  |  | PROD RARE METALS for Laser Rifle | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Super-Heavy MANPAD | 534 |
| [all] | 403 | 15 | 2 |  |  | PROD IP for Heavy MANPAD | 534 |
| [all] | 403 | 10 | 2 |  |  | PROD IP for MANPAD | 534 |
| [all] | 403 | 200 | 2 |  |  | PROD IP for Twin-100mm SHV AA-Gun | 534 |
| [all] | 403 | 100 | 2 |  |  | PROD IP for 100mm SHV AA Gun | 534 |
| [all] | 403 | 50 | 2 |  |  | PROD IP for 88mm HV AA Gun | 534 |
| [all] | 403 | 25 | 2 |  |  | PROD IP for 50mm HV AA Gun | 534 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for Heavy Surface-Air Missiles | 534 |
| [all] | 407 | 8 | 2 |  |  | PROD RARE METALS for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 405 | 4 | 2 |  |  | PROD HIGH TECH for Twin Heavy Plasma Blaster | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for 88mm Howitzer Gun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for 40mm Howitzer Gun | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for Quad Light Plasma Blaster | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Quad Tripod Assault Laser Rifle | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Quad Charged Gauss Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Quad Gauss Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad Gas Powered Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad High Speed Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Quad Adv. Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Quad Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Light Plasma Blaster | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Tripod Assault Laser Rifle | 41 |
| [all] | 403 | 1 | 2 |  |  | PROD IP for Bazooka | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Charged Gauss Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Gas Powered Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for High Speed Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Advcanced Machinegun | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Machinegun | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Plasma Rifle | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Laser Rifle | 41 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for Charged Gauss Rifle | 41 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for Gauss Rifle | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Gas Powered Carbine | 41 |
| [all] | 403 | 2 | 2 |  |  | PROD IP for Automatic Rifle | 41 |
| [all] | 403 | 6 | 2 |  |  | PROD IP for Gauss Machinegun | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for 60mm Howitzer Gun | 41 |
| [all] | 403 | 3 | 2 |  |  | PROD IP for RPG | 41 |
| [all] | 403 | 7 | 2 |  |  | PROD IP for Heavy RPG | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for 25mm Howitzer Gun | 41 |
| [all] | 403 | 640 | 2 |  |  | PROD IP for 100 MegaTon ICBM | 41 |
| [all] | 403 | 480 | 2 |  |  | PROD IP for 50 MegaTon ICBM | 41 |
| [all] | 403 | 320 | 2 |  |  | PROD IP for 10 MegaTon ICBM | 41 |
| [all] | 403 | 240 | 2 |  |  | PROD IP for Atomic 10 MT Fusion Missile | 41 |
| [all] | 403 | 160 | 2 |  |  | PROD IP for Atomic 1 MT Fission Missile | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Plasma Missiles | 41 |
| [all] | 403 | 80 | 2 |  |  | PROD IP for Heavy Conventional Missiles | 41 |
| [all] | 403 | 60 | 2 |  |  | PROD IP for Medium Conventional Missiles | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Light Conventional Missiles | 41 |
| [all] | 403 | 5 | 2 |  |  | PROD IP for Guided RPG | 41 |
| [all] | 403 | 40 | 2 |  |  | PROD IP for Big Rockets | 41 |
| [all] | 403 | 20 | 2 |  |  | PROD IP for Small Rockets | 41 |
| [all] | 403 | 24 | 2 |  |  | PROD IP for Twin Heavy Plasma Blaster | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Twin Heavy Assault Laser Rifle | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Twin Charged Gauss Heavy Machinegun | 41 |
| [all] | 403 | 12 | 2 |  |  | PROD IP for Twin Gauss Heavy Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Twin Gas Powered Heavy Machinegun | 41 |
| [all] | 403 | 16 | 2 |  |  | PROD IP for Twin High Speed Heavy Machinegun | 41 |
| [all] | 403 | 8 | 2 |  |  | PROD IP for Twin Heavy Adv. Machinegun | 41 |
| [all] | 403 | 4 | 2 |  |  | PROD IP for Twin Heavy Machinegun | 41 |
| [all] | 403 | 10 | 2 |  |  | PROD IP for Micro Nuke RPG | 41 |
| [all] | 403 | 30 | 2 |  |  | PROD IP for Medium Rockets | 41 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 100mm Polymer Plating | 42 |
| [all] | 405 | 5 | 2 |  |  | PROD HIGH TECH for Plasma Missiles | 41 |
| [all] | 405 | 15 | 2 |  |  | PROD HIGH TECH for 10 MegaTon ICBM | 41 |
| [all] | 202 | 600 | 2 |  |  | ENERGY CONSUMPTION COMBAT for XL Shield Generator | 42 |
| [all] | 202 | 400 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Very Large Shield Generator | 42 |
| [all] | 202 | 300 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Large Shield Generator | 42 |
| [all] | 202 | 200 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Medium Shield Generator | 42 |
| [all] | 202 | 100 | 2 |  |  | ENERGY CONSUMPTION COMBAT for Small Shield Generator | 42 |
| [all] | 4 | 36000 | 2 |  |  | ARMOUR STRENGTH for XXL Shield Generator | 42 |
| [all] | 4 | 30000 | 2 |  |  | ARMOUR STRENGTH for XL Shield Generator | 42 |
| [all] | 4 | 24000 | 2 |  |  | ARMOUR STRENGTH for Very Large Shield Generator | 42 |
| [all] | 4 | 18000 | 2 |  |  | ARMOUR STRENGTH for Large Shield Generator | 42 |
| [all] | 4 | 12000 | 2 |  |  | ARMOUR STRENGTH for Medium Shield Generator | 42 |
| [all] | 202 | 800 | 2 |  |  | ENERGY CONSUMPTION COMBAT for XXL Shield Generator | 42 |
| [all] | 4 | 6000 | 2 |  |  | ARMOUR STRENGTH for Small Shield Generator | 42 |
| [all] | 4 | 3200 | 2 |  |  | ARMOUR STRENGTH for 300mm Liquid Armour | 42 |
| [all] | 4 | 2400 | 2 |  |  | ARMOUR STRENGTH for 200mm Liquid Armour | 42 |
| [all] | 4 | 1800 | 2 |  |  | ARMOUR STRENGTH for 150mm Liquid Armour | 42 |
| [all] | 4 | 1200 | 2 |  |  | ARMOUR STRENGTH for 100mm Liquid Armour | 42 |
| [all] | 4 | 600 | 2 |  |  | ARMOUR STRENGTH for 50mm Liquid Armour | 42 |
| [all] | 4 | 300 | 2 |  |  | ARMOUR STRENGTH for 25mm Liquid Armour | 42 |
| [all] | 4 | 4200 | 2 |  |  | ARMOUR STRENGTH for 400mm Polymer Plating | 42 |
| [all] | 4 | 3400 | 2 |  |  | ARMOUR STRENGTH for 300mm Polymer Plating | 42 |
| [all] | 4 | 2600 | 2 |  |  | ARMOUR STRENGTH for 200mm Polymer Plating | 42 |
| [all] | 4 | 2000 | 2 |  |  | ARMOUR STRENGTH for 150mm Polymer Plating | 42 |
| [all] | 4 | 4000 | 2 |  |  | ARMOUR STRENGTH for 400mm Liquid Armour | 42 |
| [all] | 4 | 1400 | 2 |  |  | ARMOUR STRENGTH for 100mm Polymer Plating | 42 |
| [all] | 78 | 50 | 2 |  |  | PROTECT CHANCE for Small Shield Generator | 42 |
| [all] | 78 | 70 | 2 |  |  | PROTECT CHANCE for Large Shield Generator | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for 25mm Polymer Plating | 42 |
| [all] | 402 | 44  * SIZE / 2 | 2 |  |  | PROD COST METAL for 400mm Steel Plating | 42 |
| [all] | 402 | 34  * SIZE / 2 | 2 |  |  | PROD COST METAL for 300mm Steel Plating | 42 |
| [all] | 402 | 24  * SIZE / 2 | 2 |  |  | PROD COST METAL for 200mm Steel Plating | 42 |
| [all] | 402 | 19  * SIZE / 2 | 2 |  |  | PROD COST METAL for 150mm Steel Plating | 42 |
| [all] | 402 | 14   * SIZE / 2 | 2 |  |  | PROD COST METAL for 100mm Steel Plating | 42 |
| [all] | 402 | 9  * SIZE / 2 | 2 |  |  | PROD COST METAL for 50mm Steel Plating | 42 |
| [all] | 402 | 6   * SIZE / 2 | 2 |  |  | PROD COST METAL for 25mm Steel Plating | 42 |
| [all] | 402 | 2   * SIZE / 2 | 2 |  |  | PROD COST METAL for Minimal 5mm Steel Plating | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Envirosuit and Personal Shield Generator | 42 |
| [all] | 78 | 60 | 2 |  |  | PROTECT CHANCE for Medium Shield Generator | 42 |
| [all] | 402 | 6 | 2 |  |  | PROD COST METAL for Heavy Battledress | 42 |
| [all] | 402 | 4 | 2 |  |  | PROD COST METAL for Heavy Combat Armour | 42 |
| [all] | 402 | 3 | 2 |  |  | PROD COST METAL for Combat Armour | 42 |
| [all] | 402 | 2 | 2 |  |  | PROD COST METAL for Padded Envirosuit | 42 |
| [all] | 402 | 1 | 2 |  |  | PROD COST METAL for Envirosuit | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Filters + Thermosuit | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Thermosuit | 42 |
| [all] | 402 | 0 | 2 |  |  | PROD COST METAL for Filters | 42 |
| [all] | 78 | 100 | 2 |  |  | PROTECT CHANCE for XXL Shield Generator | 42 |
| [all] | 78 | 90 | 2 |  |  | PROTECT CHANCE for XL Shield Generator | 42 |
| [all] | 78 | 80 | 2 |  |  | PROTECT CHANCE for Very Large Shield Generator | 42 |
| [all] | 402 | 5 | 2 |  |  | PROD COST METAL for Battledress | 42 |
| [all] | 405 | 10 | 2 |  |  | PROD HIGH TECH for Atomic 10 MT Fusion Missile | 41 |
| [all] | 4 | 800 | 2 |  |  | ARMOUR STRENGTH for 50mm Polymer Plating | 42 |
| [all] | 4 | 3000 | 2 |  |  | ARMOUR STRENGTH for 400mm Steel Plating | 42 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Micro Nuke RPG | 41 |
| [all] | 404 | 12 | 2 |  |  | PROD MACHINERY for Heavy Surface-Air Missiles | 534 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Medium Surface-Air Missiles | 534 |
| [all] | 404 | 8 | 2 |  |  | PROD MACHINERY for Light Surface-Air Missiles | 534 |
| [all] | 404 | 5 | 2 |  |  | PROD MACHINERY for Tactical Nuke Grenade Launcher | 41 |
| [all] | 404 | 30 | 2 |  |  | PROD MACHINERY for 100 MegaTon ICBM | 41 |
| [all] | 404 | 20 | 2 |  |  | PROD MACHINERY for 50 MegaTon ICBM | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for 10 MegaTon ICBM | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Atomic 10 MT Fusion Missile | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Atomic 1 MT Fission Missile | 41 |
| [all] | 73 | 30 | 2 |  |  | OVERRULE KILL% for Atomic 1 MT Fission Missile | 41 |
| [all] | 404 | 14 | 2 |  |  | PROD MACHINERY for Heavy Conventional Missiles | 41 |
| [all] | 404 | 10 | 2 |  |  | PROD MACHINERY for Light Conventional Missiles | 41 |
| [all] | 404 | 2 | 2 |  |  | PROD MACHINERY for Micro Nuke RPG | 41 |
| [all] | 405 | 14 | 2 |  |  | PROD HIGH TECH for Very Heavy Plasma Blast Gun | 41 |
| [all] | 405 | 11 | 2 |  |  | PROD HIGH TECH for Heavy Plasma Blast Gun | 41 |
| [all] | 405 | 8 | 2 |  |  | PROD HIGH TECH for Medium Plasma Blast Gun | 41 |
| [all] | 405 | 5 | 2 |  |  | PROD HIGH TECH for Light Plasma Blast Gun | 41 |
| [all] | 405 | 6 | 2 |  |  | PROD HIGH TECH for Combined Beam Gun | 41 |
| [all] | 405 | 4 | 2 |  |  | PROD HIGH TECH for Beam Gun | 41 |
| [all] | 405 | 25 | 2 |  |  | PROD HIGH TECH for 100 MegaTon ICBM | 41 |
| [all] | 405 | 20 | 2 |  |  | PROD HIGH TECH for 50 MegaTon ICBM | 41 |
| [all] | 404 | 12 | 2 |  |  | PROD MACHINERY for Medium Conventional Missiles | 41 |
| [all] | 4 | 400 | 2 |  |  | ARMOUR STRENGTH for 25mm Polymer Plating | 42 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Atomic 10 MT Fusion Missile | 41 |
| [all] | 73 | 70 | 2 |  |  | OVERRULE KILL% for 50 MegaTon ICBM | 41 |
| [all] | 4 | 2400 | 2 |  |  | ARMOUR STRENGTH for 300mm Steel Plating | 42 |
| [all] | 4 | 1600 | 2 |  |  | ARMOUR STRENGTH for 200mm Steel Plating | 42 |
| [all] | 4 | 1200 | 2 |  |  | ARMOUR STRENGTH for 150mm Steel Plating | 42 |
| [all] | 4 | 800 | 2 |  |  | ARMOUR STRENGTH for 100mm Steel Plating | 42 |
| [all] | 4 | 400 | 2 |  |  | ARMOUR STRENGTH for 50mm Steel Plating | 42 |
| [all] | 4 | 200 | 2 |  |  | ARMOUR STRENGTH for 25mm Steel Plating | 42 |
| [all] | 4 | 50 | 2 |  |  | ARMOUR STRENGTH for Minimal 5mm Steel Plating | 42 |
| [all] | 4 | 500 | 2 |  |  | ARMOUR STRENGTH for Envirosuit and Personal Shield Generator | 42 |
| [all] | 4 | 1000 | 2 |  |  | ARMOUR STRENGTH for Heavy Battledress | 42 |
| [all] | 4 | 500 | 2 |  |  | ARMOUR STRENGTH for Battledress | 42 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for 10 MegaTon ICBM | 41 |
| [all] | 4 | 300 | 2 |  |  | ARMOUR STRENGTH for Heavy Combat Armour | 42 |
| [all] | 4 | 100 | 2 |  |  | ARMOUR STRENGTH for Padded Envirosuit | 42 |
| [all] | 4 | 50 | 2 |  |  | ARMOUR STRENGTH for Envirosuit | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Filters + Thermosuit | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Thermosuit | 42 |
| [all] | 4 | 0 | 2 |  |  | ARMOUR STRENGTH for Filters | 42 |
| [all] | 73 | 80 | 2 |  |  | OVERRULE KILL% for Heavy Surface-Air Missiles | 534 |
| [all] | 73 | 60 | 2 |  |  | OVERRULE KILL% for Medium Surface-Air Missiles | 534 |
| [all] | 73 | 40 | 2 |  |  | OVERRULE KILL% for Light Surface-Air Missiles | 534 |
| [all] | 73 | 50 | 2 |  |  | OVERRULE KILL% for Tactical Nuke Grenade Launcher | 41 |
| [all] | 73 | 90 | 2 |  |  | OVERRULE KILL% for 100 MegaTon ICBM | 41 |
| [all] | 4 | 200 | 2 |  |  | ARMOUR STRENGTH for Combat Armour | 42 |
| [all] | 4 | 30 | 2 |  |  | Armour Strength = 30, free start |  |

