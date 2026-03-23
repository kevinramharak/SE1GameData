import { Cli } from '../../SE1ModTools/src/Scripting/src/SE1ModToolsCli.ts';

const ShadowEmpiresScenariosDirectory = 'C:/Program Files (x86)/Steam/steamapps/common/Shadow Empire/shadowscenarios';
const ShadowEmpiresSaveDirectory = 'C:/Users/kevin/Documents/My Games/Shadow Empire';

const masterfile = `${ShadowEmpiresScenariosDirectory}/masterfile.se1master`;
const randomgame = `${ShadowEmpiresScenariosDirectory}/randomgame.se1`;
const saves = [`${ShadowEmpiresSaveDirectory}/lastplanetgenerated.se1`, `${ShadowEmpiresSaveDirectory}/firstturn.se1`];

const output = 'D:/Projects/Hobbies/SE1GameData/data/';

Cli.docgen(output, masterfile, randomgame, ...saves);
