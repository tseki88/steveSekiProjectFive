## Juno Project 5 - Solo React App

### Description
Board Game Tool Kit: 
An all in one app with multiple components that can be added based on the board game type.
The user can add, lock and remove components
- Score Tracker Component
    - A table where user can input more names across the column heaers
    - input score type on row header
    - Total at the bottom

### MVP
Have a functional Score Tracker Component with the ability to
- [x] Add new columns (users)
- [x] Add new rows (score type)
- [x] editable name cell
- [x] editable score cell
- [x] sum component
- [x] ability to remove columns and rows (on confirm)
- [x] Utilize Firebase to store scoreboard
- [x] implement CSS grid (responsive properties)
- [x] Session Name
- [x] Styling
- [x] Responsive

### Stretch Goals
- [ ] Draggable score rows and columns (to rearrange order)?
- [ ] Draggable and auto-fit tool components
- [ ] flickity between tools on mobile
- [ ] Login authentication
- [ ] Ability to add and remove multiple components of your choice to the interface, catering to each specific games needs.
- [ ] Ability to lock the component, to prevent removal.
- [ ] Save multiple interface templates per 'user'.
- [ ] Make another component, which can be added to the interface. 
    - [x] Game Duration Timer
    - [x] Count Down Timer
    - [ ] Dice Roller
        - [ ] multiple sided dice
    - [ ] listed notes (for roleplaying or hint-relate games)
        - [ ] drawing feature?
    - [ ] Tally Counter
    - [ ] Team Randomizer

### Pseudo Code
--[userbase object]
    -[user object]
        -[user name] : string
        -[score array ]
            -[0 ] : number
            -[1 ] : number
            -[2 ] : number
            -[3 ] : number
    -[user object]
        -[user name] : string
        -[score array ]
            -[0 ] : number
            -[1 ] : number
            -[2 ] : number
            -[3 ] : number


--[score type array]
    - 0: scoreType Name
    - 1: scoreType Name
    - 2: scoreType Name
    - 3: scoreType Name


- Create a column "user component"
- When adding a NEW user component, it will reference the score type array length, and create a scoreArray (populated with default value of [arrayNumber: 0] )
- Render as a new additional column, with each score value inside an input jsx element (so that the input can be updated), which will then rerender and update the userobject referenced.
- Make a main component with grid properties (css grid)
- When adding a new scoreType, it will push a new object in the score type array and also push a new scoreType for each user object