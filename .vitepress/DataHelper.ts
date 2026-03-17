import libraries from '../data/libraries.json' with { type: 'json' };
import tables from '../data/data-tables.json' with { type: 'json' };

export interface ILibrary {
  name: string;
  id: number;
  description?: string;
  version?: number;
}

export interface IDataTable {
  name: string;
  id: number;
  libraryId?: number;
  libraryName?: string;
}

export interface IGameData {
  libraries: ILibrary[];
  tables: IDataTable[];
}

export class DataHelper {
  constructor(public readonly data: Readonly<IGameData>) {}

  getRootTables(): IDataTable[] {
    return this.data.tables.filter((table) => typeof table.libraryId === 'undefined');
  }

  hasTables(library: ILibrary): boolean {
    return this.data.tables.some((table) => library.id == table.libraryId);
  }
}

export const helper = new DataHelper({
  libraries,
  tables,
});
