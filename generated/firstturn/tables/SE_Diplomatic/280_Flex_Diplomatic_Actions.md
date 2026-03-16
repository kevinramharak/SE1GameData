## `SE_Diplomatic.'Flex Diplomatic Actions'` (id = `280`)

### Columns (`25`)

| Index | Name | Type |
| ----: | ---- | ---- |
| `0` | Card ID | Text 
| `1` | Name | Text 
| `2` | PP Cost | Text 
| `3` | Event Picture | Text 
| `4` | Text | Text 
| `5` | Org ID | Text 
| `6` | Org IF Logic | Text 
| `7` | Target Type | Text 
| `8` | Target IF Logic | Text 
| `9` | Weight SET Logic | Text 
| `10` | BP Cost | Text 
| `11` | Category | Text 
| `12` | Phase | Text 
| `13` | UseHuman | Text 
| `14` | New Col | Text 
| `15` | New Col | Text 
| `16` | New Col | Text 
| `17` | overlay eventpic | Text 
| `18` | med.event | Text 
| `19` | AllowSelfPlay | Text 
| `20` | New Col | Text 
| `21` | New Col | Text 
| `22` | New Col | Text 
| `23` | New Col | Text 
| `24` | New Col | Text 

### Rows (`48`)

| Card ID | Name | PP Cost | Event Picture | Text | Org ID | Org IF Logic | Target Type | Target IF Logic | Weight SET Logic | BP Cost | Category | Phase | UseHuman | New Col | New Col | New Col | overlay eventpic | med.event | AllowSelfPlay | New Col | New Col | New Col | New Col | New Col |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1|Open Contact|5|9|Open communication so that you can propose deals.|30||1||20|20|1|1|1|32|||386|387|||||||
|2|Embassy|10|18|Exchanging ambassadors increases communication and recon|30|che(249,2,1)>0;|1||6|40|1|1|1||||386|387|||||||
|3|Cultural Exchange|20|19|Exchanging experts increases communication and recon|30|che(249,2,1)>0; che(249,2,2)>0;|1||3|80|1|1|1||||386|387|||||||
|4|Expel Diplomats|20|20|Unilaterally reduce communication level|30|che(249,2,1)>0|1||6|80|1|1|0|32|||386|387|||||||
|5|Trade|5|21|Allows trade to take place between you|30|che(249,2,1)>0|1||10|40|1|1|1|32|||386|387|||||||
|6|Free Trade|10|22|Makes it impossible to impose tariffs on cross border trade|30|che(249,2,1)>0; che(249,2,5)>0;|1||6|80|1|1|1||||386|387|||||||
|7|Free Movement|20|23|Makes it possible for population to cross your borders.|30|che(249,2,1)>0; che(249,2,6)>0;|1||3|160|1|1|1||||386|387|||||||
|8|Limit Trade|20|24|Unilateraly reduce trade level|30|che(249,2,1)>0;|1||6|80|1|1|0|32|||386|387|||||||
|9|Scientific Cooperation|5|25|Try to share discoveries, but not actual tech levels|30|che(249,2,1)>0;|1||10|40|1|1|1|32|||386|387|||||||
|10|Scientific Exchange|10|26|Share tech levels will be attempted if 50 points ahead|30|che(249,2,1)>0; che(249,2,9)>0;|1||6|80|1|1|1||||386|387|||||||
|11|Scientific Joint Effort|20|27|Full sharing of tech levels will be attempted|30|che(249,2,1)>0; che(249,2,10)>0;|1||3|160|1|1|1||||386|387|||||||
|12|Limit Science Coop|20|28|Unilateraly reduce the scientific cooperation level.|30|che(249,2,1)>0; che(249,2,9)>0|1||6|80|1|1|0|32|||386|387|||||||
|13|Non-Agression Pact|5|29|Makes it impossible for both to declare war|30|che(249,2,1)>0;|1||10|40|1|1|1|32|||386|387|||||||
|14|Friendship Pact|10|30|Anybody who attacks you will be our enemy|30|che(249,2,1)>0; che(249,2,13)>0;|1||6|80|1|1|1||||386|387|||||||
|15|Victory Pact|20|31|Your enemies will be our enemies and we conquer the planet together|30|che(249,2,1)>0; che(249,2,14)>0;|1||3|160|1|1|1||||386|387|||||||
|16|Cancel Pact Clause|40|32|Unilaterally reduce military pact level|30||1||6|80|1|1|0|32|||386|387|||||||
|25|Provocation|20|33|A successful provocation will cause a relation drop|30||1||10|80|1|1|0||||386|387|||||||
|26|Propose Peace|10|34|End the war and go to peace|30||1||20|80|1|1|1||||386|387|||||||
|27|Major War|20|676|Go to war with Major Regime! allows your units to conquer their zones. Note that this can cause severe loyalty/relation penalties if relation is high.|30|che(261,2)>0|1||40|80|1|1|0|32|||386|387|||||||
|28|Gift 400 Crd|1|35|A token gift could improve relations|30||1||20|60|1|1|1|32|||386|387|||||||
|29|Gift 1000 Crd|3|36|A substantial gift will improve relations|30|che(249,2,28)>0|1||10|120|1|1|1||||386|387|||||||
|30|Gift 2500 Crd|5|37|A big gift will surely improve relations|30|che(249,2,29)>0|1||5|200|1|1|1||||386|387|||||||
|31|Support Faction|10|733|Send special operatives to support a foreign Faction.|18||1||10|20|3|8|0||||388|389|||||||
|32|Ask For Help|2|734|Ask a Friend for help, either Credits or PP|30||1||15|20|1|1|0|32|||386|387|||||||
|33|Ouverture|30|674|Communicate willingness to end the war|30||1||15|40|1|1|1||||386|387|||||||
|41|Shadow Spy|5|612|Assign a master Spy to a Leader to help with Leaders next Skill Roll.|18||4||10|20|8|2|0|32|||388|389|1||||||
|42|Shadow Diplomat|10|613|Assign a Veteran Diplomat to a Leader to help with Leaders next Skill Roll.|30||4||10|20|8|1|0|32|||386|387|1||||||
|49|Minor War|10|676|Go to war with Minor Regime! allows your units to conquer their zones. Note that this can cause some loyalty/relation penalties if relation is high.||che(261,2)>0|1||40|40|2|6|0|32|||386|387|||||||
|101|Invade|10|-1|Attack a minor regime|0||1||20|10|999|6|0||||386|387|||||||
|102|Offer Protection|2|38|Offer yourself as protector. You will defend them when attacked|30||1||10|20|2|6|0|32|||386|387|||||||
|103|Offer Client|3|39|Offer them to become a client state. They'll be docile and pay tax.|30||1||10|40|2|6|0||||386|387|||||||
|104|Propose Peace|5|735|End the war and go to peace|30||1||10|20|2|6|0|32|||386|387|||||||
|105|Unification|20|675|Consider the advantages of being part of our great <NATION>...|30||1||10|30|2|6|0||||386|387|||||||
|106|Annexation|30|676|You are either with us or against us!|30||1||10|60|2|6|0||||386|387|||||||
|107|Xeno Diplomat|20|755|Send an emissary to invite the Alien natives to a meeting.|30|GAMEKEY.58>0|1||10|30|2|6|0||||386|387|||||||
|108|Xeno Diplomat Team|45|755|Send a team of emissaries to invite the alien natives for a meeting.|30|GAMEKEY.58>0|1||5|40|2|6|0||||386|387|||||||
|201|Send Spy|3|40|Send 1 spy|18||2||30|10|3|2|0|32|||388|389|||||||
|202|Send Spy Team|4|41|Send 3 spies|18|che(249,2,201)>0|2||10|20|3|2|0||||388|389|||||||
|203|Send Spy Ring|5|42|Send 6 spies|18|che(249,2,202)>0|2||5|30|3|2|0||||388|389|||||||
|701|Call to Success I|50|390|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.144>0|2||20|100|3|8|0||||388|389|||||||
|702|Call to Success II|100|391|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.145>0|2||10|200|3|8|0||||388|389|||||||
|703|Call to Success III|150|392|Make capable population and workers leave to join Free Folk and eventually come to you.|18|REGIMEFEAT.146>0|2||5|300|3|8|0||||388|389|||||||
|704|Call to Rebellion I|50|393|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.104>0|2||20|100|3|8|0||||388|389|||||||
|705|Call to Rebellion II|100|394|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.105>0|2||10|200|3|8|0||||388|389|||||||
|706|Call to Rebellion III|150|395|Send agitators and propaganda to sow discontent with their masters.|18|REGIMEFEAT.106>0|2||5|300|3|8|0||||388|389|||||||
|707|Call to Power I|50|396|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.121>0|2||20|100|3|8|0||||388|389|||||||
|708|Call to Power II|100|397|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.123>0|2||10|200|3|8|0||||388|389|||||||
|709|Call to Power III|150|398|Sow the seeds of ambition among their soldiers and NCOs.|18|REGIMEFEAT.124>0|2||5|300|3|8|0||||388|389|||||||

