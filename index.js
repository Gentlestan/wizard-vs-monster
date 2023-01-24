import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"];
let wizardsArray = ["wizard", "istari", "lotr"];

/*
Challenge
1. Create a function called getNewMonster.
2. Write logic inside the function that takes the first 
monster from monstersArray and extracts that monster's 
data from characterData.
3. Save that data to a new const called nextMonsterData.
**hint.md for help!!**
*/

function getNewMonster(){
   const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}
function getNewWizard(){
  const nextWizardData =  characterData[wizardsArray.shift()]
     return nextWizardData ? new Character(nextWizardData) : {}
}

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    
     if(wizard.dead){
     if(wizardsArray.length > 0){
        wizard = getNewWizard()
        render()
         
    } else{
        endGame()
    }
    }
         if(monster.dead){
        if(monstersArray.length > 0){
            monster = getNewMonster()
            render()
        }
        else{
            endGame()
        }
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
            "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}


let monster = getNewMonster()
let wizard = getNewWizard()
render()

