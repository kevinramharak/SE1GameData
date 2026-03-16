## `SE_Random.'Atmospheric Reactions'` (id = `117`)

### Columns (`14`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Reaction ID | Text 
| `1` | Reaction Name | Text 
| `2` | Gas 1 ID | Text 
| `3` | Reacts with Gas 2 ID | Text 
| `4` | And with Gas 3 ID | Text 
| `5` | Result in Gas4 id | Text 
| `6` | Results in gas5 id | Text 
| `7` | Speed in %/year | Text 
| `8` | Other Effect | Text 
| `9` | Only geoAct | Text 
| `10` | %modOpenSea | Text 
| `11` | If Plant | Text 
| `12` | aboveGas1ppm | Text 
| `13` | Chance in % | Text 

### Rows (`25`)

| Reaction ID | Reaction Name | Gas 1 ID | Reacts with Gas 2 ID | And with Gas 3 ID | Result in Gas4 id | Results in gas5 id | Speed in %/year | Other Effect | Only geoAct | %modOpenSea | If Plant | aboveGas1ppm | Chance in % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1|Methane burning|15|8|0|7|0|50||||||100|
|2|Ammonia conversion|9|15|0|19|0|10||||||100|
|3|Acid Rain|20|19|0|0|0|10|acidification ocean|||||100|
|4|Sulfuric conversion|15|16|0|10|0|10||||||100|
|5|Sulfuric Rain|20|15|10|0|15|10||||||100|
|6|Phosphoric oxidation|11|15|0|0|0|100||||||100|
|7|Fluorine oxidation|18|15|0|0|0|100||||||100|
|8|Fluorine explosion|18|1|0|0|0|100||||||100|
|9|Hydrogen oxidation|1|15|0|0|0|100||||||100|
|10|Wildfires|15|0|0|7|0|10|CO in atmos |||1|300000|100|
|11|Organic loss|7|0|0|0|0|1|Take CO2|0||1||100|
|12|CO2 Volcano|0|0|0|7|0|5|Give CO2|1||0||100|
|13|CH4+NH3 Volc|0|0|0|8|9|1||1||||10|
|14|Nitr Volcano|0|0|0|3|10|1||1||||66|
|15|Evaporation|0|0|0|20|0|2||0|100|0|0|100|
|16|Rain|20|0|0|0|0|5|||||20000|100|
|17|So2 absorb|10|0|0|0|0|45|||100|||100|
|18|Co2 absorb|7|0|0|0|0|3|||100||500|100|
|19|NOX aspiration|19|0|0|3|7|5||||1||100|
|20|Ar Volcano|0|0|0|4|0|1||1||||10|
|21|Ne Volcano|0|0|0|5|0|1||1||||2|
|22|Xe Volcano|0|0|0|6|0|1||1||||1|
|23|Remove watervapor|20|0|0|0|0|100||||||100|
|24|Remove NH3|9|0|0|0|0|97||||1|5|100|
|25|Methane Hydroxyl reaction|20|8|0|20|7|8||||||100|

