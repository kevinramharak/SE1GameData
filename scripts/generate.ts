import fs from 'fs/promises';
import path from 'path';
import { Cli } from '../../SE1ModTools/src/Scripting/src/SE1ModToolsCli.ts';

const ShadowEmpiresScenariosDirectory = "C:/Program Files (x86)/Steam/steamapps/common/Shadow Empire/shadowscenarios";
const ShadowEmpiresSaveDirectory = "C:/Users/kevin/Documents/My Games/Shadow Empire";
const entries = [
    `${ShadowEmpiresScenariosDirectory}/masterfile.se1master`,
    `${ShadowEmpiresScenariosDirectory}/randomgame.se1`,
    `${ShadowEmpiresSaveDirectory}/lastplanetgenerated.se1`,
    `${ShadowEmpiresSaveDirectory}/firstturn.se1`,
];

entries.forEach(async inputFile => {
    const fileName = path.basename(inputFile);
    const name = path.basename(fileName, path.extname(fileName));

    const output = `./generated/${name}/`;
    try {
        await fs.rm(output, { recursive: true });
    } catch {}

    Cli.docgen(inputFile, output);
});
