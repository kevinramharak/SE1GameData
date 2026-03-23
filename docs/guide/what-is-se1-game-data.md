# What is SE1 Game Data?

SE1 stands for Shadow Empire 1, while Game Data is a name used to describe all the types and data the game stores in its `.se1[*]` files. The types and data contained in these files are used by the game to save/load its games, start new games, and run the game's systems and simulations.

## Libraries

Much of the game data is grouped logically by libraries. Most of the games systems are logically grouped into their own libraries like:

- `SE_Assets`
- `SE_Random`
- `SE_Trade`

Additionally DLC's are implemented as libraries where they augment or add to some of the games base systems.
For example the `SE_Airforce` library defines data and types related to its (free) Air Force DLC, while `SE_Navy` defines data and types implementing the Oceania DLC.

## Root

There are a few types and data instances that are not part of a library, these can be considered as part of the "root" of the game, and are often used as base types. For example all infantry troop types inherit from the base "INFANTRY" sub formation type. Usually these are defined in the games master file `masterfile.se1master`.

## Reference

To explore the game data structured structured per library, checkout the [reference](../reference/root/).

Types and data instances part of the "root" are shown as part of the pseudo-library Root.

## Catalog

To get a complete overview of all game data structured per type, checkout the [catalog](../catalog/libraries/).
