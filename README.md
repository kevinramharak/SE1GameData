# SE1GameData

This repository contains (generated) documentation for the data types used by [Shadow Empire](https://store.steampowered.com/app/1154840/Shadow_Empire/).

The intention of this repository is to provide easily navigable documentation for modders.

## Contents

The documentation is generated from a `.se1` file.

The following files have been used to generated documenation:

| Name | Location |
| ---- | -------- |
| `masterfile.se1master` | [`./generated/masterfile`](./generated/masterfile/) |
| `randomgame.se1` | [`./generated/masterfile`](./generated/randomgame/) |

## Resources

Here are some resources that will help explain how modding works for Shadow Empire:

- [Game Manual](https://ftp.matrixgames.com/pub/ShadowEmpire/Shadow%20Empire%20manual%20EBOOK.pdf)
- [S&S Editor Documentation](https://docs.google.com/document/d/1UCvS0p8mVXVwyjuaAfCTFxJ6p7VIbpPYfKDHzKcIHtY)
- [Dev Notes - SE_Data](https://www.scribd.com/document/631927585/Dev-Notes-SE-Data)
- [Shadow Empire Tutorial - Modyfing Existing Tables](https://docs.google.com/document/d/1CwPG0hinIayfeqjTACCyGFLU-nwHuP8YgRRf690yfmQ) by Akrakorn
- [Shadow Empire Modding Guide](https://docs.google.com/document/d/1gS74sWD7BUxPok39RB77oX5gZbIlpsW0ow-ssRq2XlU) by Casteroid

Additionally you might find these communities helpful:

- [Matrix Games - Shadow Empire - Forum](https://forums.matrixgames.com/viewforum.php?f=10617)
- [War of the Worlds - Unoffical Community Discord](https://steamcommunity.com/app/1154840/discussions/0/2968398851799729820/) (found through the discord discover server feature, or in the steam forum page)

## FAQ

### How is the documentation generated?

The documentation is generated through the `SE1ModTools` tool. This tool is not publicly available yet.

`SE1ModTools` uses [reflection](https://en.wikipedia.org/wiki/Reflective_programming) and [reverse engineering](https://en.wikipedia.org/wiki/Reverse_engineering) to recreate the data types used in game and stored in `.se1` files. By using these types, `.se1` files can be read, and used to generate documentation.

Shadow Empire uses 2 `.se1` files, the `master.se1masterfile` which contains some base functionality. The rest of the game is build through the engine, game code and the `randomgame.se1` scenario file.

### Are there any plans to expand on this repository?

Yes, if there is any interest I will try and expand on this documentation.
If not I will at least update it for my own modding purposes.

Some of the ideas that are worth looking into:

- Document more data types
    - Sub Formation Types
    - Reinforcement Types
    - Events / Scripts
    - Library Variables
    - Cultures
    - Research
    - Game Rules
    - ...
- Explain specific data tables
    - Assets
    - Perks
    - Logistics
    - Models & Model Types
    - OOB
    - TOE
    - ...
- Use a static site generator to generate a documentation website (with search features)
- Examples / Tutorials / Cookbook
