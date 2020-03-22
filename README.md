# Boardgame Tool Kit

### Description
Board Game Tool Kit: 
An all in one app with multiple components that can be added based on the board game type.

### Live Link
- http://tseki88.github.io/steveSekiProjectFive



## Available Tools
#### v1.0 - 12/03/2019
- Count Down Timer
- Stop Watch
- Scoreboard

#### v2.0 - 03/16/2020 ~
- Stop Watch 
    - 03/16/2020
- Count Down Timer
    - 03/17/2020
- Dice Rolling [4,6,8,10,12,20] 
    - 03/17/2020
- Coin Flip 
    - 03/17/2020
- Scoreboard
    - 03/18/2020
    - temporary limit of 1 due to shared access and only single save point
- Canvas
    - 03/19/2020


## Upcoming Features & Fixes

### ToolKit App
- [ ] Set up data structure to handle multiple Scoreboard & Canvas component data
- [ ] User Authentication / Guest Access
    - [ ] Multiple sets of toolkits
- [ ] Lock to prevent deleting components
- [x] Mute Sounds (when implemented)
- [x] Dark Mode
- [x] Grid Layout
- [ ] Accordion for each component (shrinking it?)
- [ ] Mobile UI/UX Optimization (size/render/accessing each component)
    - [x] sidebar menu
    - [ ] fix position sticky.

#### ScoreBoard
- [ ] ScoreBoard Refactor into smaller components for performance optimization
- [x] Mobile view
    - [ ] snap to grid, freeze first column
- [ ] Ability to transpose the table data...
    - (...may consider refactoring from table => grid/flexbox)
- [ ] Error Handler for player & scores have appropriate data (fill if missing)
- [ ] Tally / Multiply Ability (point value e.g. for every Egg you get 5 points..)
- [ ] Player Turn Tracker

#### Count Down Timer
- [x] Option to set alarm sound

#### Coin Flip
- [ ] find replacement Head/Tails images
- [x] coin flip sound

#### Stop Watch
- n/a

#### Dice Rolling [4,6,8,10,12,20]
- [x] multiple sided dice
- [x] dice rolling sound

#### Canvas
- [x] fix size/scaling issue leading to incorrect input location
- [ ] ability to resize(or at least offer a bigger size)
    - Brings up the question on layout of toolkit, should it be grid based?
- [ ] ability to keep current state of sketch like our scoreboard (need data structure first)

## Potential Ideas / Brain Dump
- Some type of event logging with data of the selected component
- Each Tool to have unique muter?

## Tool Stretch Goals / Ideas
- [x] ScoreBoard
- [x] Game Duration Timer
- [x] Count Down Timer
- [x] Dice Roller
- [x] Coin Flip 
- [ ] listed notes (for roleplaying/hints. pretty much a toDo/Note app)
- [ ] Tally Counter / Round Tracker
- [x] drawing/sketch canvas?
- [ ] Team Randomizer
- [ ] Buzzer / Short Sound Recorder(?)


## Credit / Resources
### Semantic UI
 - https://github.com/Semantic-Org/Semantic-UI-React
### Dice Roll Sounds
 - Kenney Vleugels (www.kenney.nl)
### Dice Font
 - https://github.com/fponticelli/dicefont
### Canvas Tutorial
 - https://github.com/AnkurSheel/react-drawing-interaction