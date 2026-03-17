# SE1 File Format

Shadow Empire uses the following file extensions to logically group the file types it uses.

These file extensions are:

| Extension     | Type                 |
| ------------- | -------------------- |
| `.se1`        | Scenario             |
| `.se1master`  | Masterfile           |
| `.se1evlib`   | Event Library        |
| `.se1zip`     | Mod Library          |
| `.se1map`     | Map file             |
| `.se1troops`  | Troop Library        |
| `.se1his`     | Historical Library   |
| `.se1off`     | Officer Library      |
| `.se1offcard` | Officer Card Library |

The game uses the `.se1`, `.se1master`, `.se1zip` and `.se1evlib` file types, but the remaining ones are still technically still possible.

All files use the same data format, but depending on the file type and what its purpose is, the contents of the file may vary.

## Compression

All `.se1[*]` files are ZIP file archives compressed with the [Deflate](https://en.wikipedia.org/wiki/Deflate) algorithm.

## Archive

Most uncompressed archives will contain a single file named `temp.txt`, which is a binary file containing the serialized Game Data in [NRBF format](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nrbf/).

`.se1zip` is the exception where the remaining archive entries will be directories containing assets that are part of that mod library.

## Binary

The binary file can be decoded/deserialized into data structures, by using a NRBF decoder.

Depending on the implementation and programming language this could require generating the correct data types before attempting to deserialize the binary file.
