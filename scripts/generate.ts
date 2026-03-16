import fs from 'fs/promises';
import { Cli } from '../../SE1ModTools/src/Scripting/src/SE1ModToolsCli.ts';

const ShadowEmpiresScenariosDirectory = "C:/Program Files (x86)/Steam/steamapps/common/Shadow Empire/shadowscenarios";
const entries = [
    'masterfile.se1master',
    'randomgame.se1',
];

entries.forEach(async entry => {
    const [name,] = entry.split('.');
    const inputFile = `${ShadowEmpiresScenariosDirectory}/${entry}`;

    const output = `./generated/${name}/`;
    await fs.rm(output, { recursive: true });

    Cli.docgen(inputFile, output);
});
