# MtgLifeCounter
Install requirements with 
````
yarn install
````

The players can be created dynamically, styling the PlayerCards without hardcoding the layout for all different 
numbers of players.

Needs a button for settings / customization, should be a popup that doesn't create a new screen. 

playerStatus format should be 
````
p1: {
    life: 20,
    name: 'asd',
    commanderDamage: {
        'asdasd': 10,
        etc...
    },
    citiesblessing: false,
    etc... 
}
````
Remember to run eslint before commiting
