let lucky = false; //determines good/bad outcomes
let money = 100; //used in dice game
let dummyCount = 0; //counts failure to follow instructions
if (confirm('WARNING: The next choice you make will have substantial consequences on your future. Do you wish to proceed?')) {
		lucky = true;
		money = 10;
		console.log(lucky)
	} else {
		alert("Sometimes it's ok to be a coward. This is not one of those times.")

	}

let debt = parseFloat(prompt('Pick a large number'));
if (isNaN(debt)) {
	alert('That wasn\'t a number you dummy!')
	dummyCount++;
	debt = 5000000;
} 

const luckStatus = function(luckVal){
	return luckVal ? 'LUCKY' : 'UNLUCKY'
}

const swim = function(choice, luckVal){
	if (choice) {
		if (choice.toUpperCase() === 'SIGNAL') {
			alert('You do your best to signal to the boat, they notice you and head over to pick you up and you breath a sigh of releif.')
			if(luckVal) {
				alert('You thank your rescuers and ask them where they are headed. It turns out they\'re from the mainland and are willing to take you far far away from here')
				alert(`YOU ESCAPED \nYou chose to SWIM \nYou chose to SIGNAL and got rescued because you were ${luckStatus(luckVal)} \nYou were $${debt} in DEBT \nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')

			} else {
				alert('You thank your rescuers and ask them where they are headed \n"Why back to the island, my good friend. We have much to discuss" \nYou hear a voice behind you say and feel your stomach churn because you recognize that to be the voice of none other than Don Garcia. Maybe you would have been better off if you just kept swimming')
				alert(`GAME OVER \nYou chose to SWIM \nYou chose to SIGNAL for rescue but got caught because you were ${luckStatus(luckVal)} \nYou were $${debt} in DEBT \nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')
				}

		} else if (choice.toUpperCase() === 'SWIMMING'){
			alert('You decide not to get the boat\'s attention and to continue swimming in the direction you think the shore is in through the night.')		
			if (luckVal) {
				alert('You\'ve long since lost sensation in your limbs, but you keep pushing on. You\'ve been swimming longer than you thought possible, but as the sky begins to lighten and day begins to break you can see the mainland ahead of you. You don\'t know what you\'ll do once you get there but a fresh start means fresh opportunites. You keep swimming with the dawn sun at your back, tired, but with hopes high')
				alert(`YOU ESCAPED \nYou chose to SWIM \nYou chose to keep on SWIMMING and made it to shore because you were ${luckStatus(luckVal)}\nYou were $${debt} in DEBT \nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')
			} else {
				alert('You keep swimming, but with the sun gone it\'s impossible to keep track of where you\'re headed. Try as you might you can\'t keep at this forever. You find yourself being pulled beneath the water without the energy to come back up')
				alert(`GAME OVER \nYou chose to SWIM \nYou chose to keep on SWIMMING but drowned because you were ${luckStatus(luckVal)}\nYou were $${debt} in DEBT \nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')
			}
		} else { 
				alert("You dummy! That wasn't one of the options, try again");
				dummyCount++;
				swim(prompt('Do you try and \'SIGNAL\' for help or keep \'SWIMMING\'?'))
		}
	} else {
				alert("You dummy! You need to put something in!");
				dummyCount++;
				swim(prompt('Do you try and \'SIGNAL\' for help or keep \'SWIMMING\'?'))
	}
}
const gamble = function(choice, luckVal) {
	if (choice) {
		if (choice.toUpperCase() === 'SLOTS'){
			alert('You decide to give the slots a try')
			if (luckVal) {
				alert(`Well hot dang, you hit the progressive jackpot on your first pull, and it happened to be for $${debt}, which is the exact amount of your debt! How convenient! \nYou\'re about to get up to leave but who should you see but Don Garcia and his crew behind him.`)
				alert('"I take it you have the money you owe me?" The Don asks and then motions to your winnings.\n"Ah yes, I believe that\'s it right there. I\'ll have my men count it and we can get this whole nasty debt business behind us." he says and then leans in close "But if I ever catch you in my \'Don Garcia\'s Grill and Cantina\' trying to skip the bill again, next time I won\'t be so nice."\nAll things considered, you think things turned out pretty alright')
				debt = 0
				alert(`YOU PAID YOUR DEBT \nYou chose to try and pay your DEBT \nYou decided to try the SLOTS and got ${luckStatus(luckVal)}\nYou ended up $${debt} in DEBT, good job!\nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')
			} else {
				alert(`Well that didn\'t last long. You\'re out of the money you had on you and are no closer to paying off your debt to Don Garcia than when you entered the casino, who you see heading toward you right now...`)
				alert(`GAME OVER \nYou chose to try and pay your DEBT \nYou decided to try the SLOTS but you were ${luckStatus(luckVal)}\nYou ended $${debt} in DEBT, and got a nice new pair of CEMENT SHOES!\nYou failed to follow instructions ${dummyCount} times`)
				alert('Refresh page to try again')
			}
		} else if(choice.toUpperCase() === 'DICE') {
			alert('You decide to try your hand at dice. You only got $100 on you and it\'s $50 a roll. better hope you\'re lucky. This may take a while (check the log for results)')
			while (money < debt && money > 0) {
				if (luckVal) {
					let playerNum = Math.round(Math.random() * (6-4)+4) + Math.round(Math.random() * (6-4)+4)
					let houseNum = Math.round(Math.random() * 6) + Math.round(Math.random() * 6)
					if (playerNum > houseNum){
							money += 100
							console.log(`You rolled: ${playerNum}, the house rolled ${houseNum}. You Win! Money: ${money}`)
						} else {
							money -= 50
							console.log(`You rolled: ${playerNum}, the house rolled ${houseNum}. You Lose! Money: ${money}`)
						}
					}  else {
						let playerNum = Math.ceil(Math.random() * 3) + Math.ceil(Math.random() * 3)
						let houseNum = Math.round(Math.random() * 6) + Math.round(Math.random() * 6)
						if (playerNum > houseNum){
							money += 100
							console.log(`You rolled: ${playerNum}, the house rolled ${houseNum}. You Win! Money: ${money}`)
							} else {
								money -= 50
								console.log(`You rolled: ${playerNum}, the house rolled ${houseNum}. You Lose! Money: ${money}`)
							}
					}
				}
				if (money >= debt){
					alert('Wow that did take a while, but you did it. You did the dice. Look, Don Garcia is standing behind you ready to collect, give that man what he\'s owed')
					money -= debt;
					debt = 0;
					alert(`YOU PAID YOUR DEBT IN THE HARDEST WAY POSSIBLE! \nYou chose to try and pay your DEBT\nYou chose to play DICE and you were ${luckStatus(luckVal)} \nYou are DEBT FREE, and even walked away with an extra $${money} in cash!\nYou failed to follow instructions ${dummyCount} times`)
					alert('Refresh page to try again')
				} else {
					alert(`Well that didn\'t last long. You\'re out of the money you had on you and are no closer to paying off your debt to Don Garcia than when you entered the casino, who you see heading toward you right now...`)
					alert(`GAME OVER \nYou chose to try and pay your DEBT \nYou decided to try playing DICE but you were ${luckStatus(luckVal)}\nYou ended $${debt} in DEBT, and got a nice new pair of CEMENT SHOES!\nYou failed to follow instructions ${dummyCount} times`)
					alert('Refresh page to try again')
				} 
			} else { //invalid choice
				alert("You dummy! That's not one of your options!");
				dummyCount++;
				gamble(prompt('Do you want to play \'SLOTS\' or \'DICE\''))
			}
		} else { //nothing entered
			alert("You dummy! You need to put something in!");
			dummyCount++;
			gamble(prompt('Do you want to play \'SLOTS\' or \'DICE\''))
		} 
	} 

const choiceOne = function(path){
	if (path) {
		switch (path.toUpperCase()) {
			case 'SWIM':
				alert("It's time to go. You decide to swim for it.");
				swim(prompt('You swim for hours on end. Your arms and legs are throbbing but your freedom keeps you motivated as you head toward the sun beginning to dip below the horizon. You see a large boat ahead of you and are about to signal to it, but you stop and think it might not be a good idea for people to know your whereabouts if word got back to Don Garcia. Do you \'SIGNAL\' the boat, or keep \'SWIMMING\'?'),lucky)
				break;
			case 'DEBT':
				alert("You decide to stay and try to make some cash.");
				gamble(prompt('You do it at the only place you know, the casino. You can try out the \'SLOTS\' if you\'re feeling lucky or you could try shooting \'DICE\''), lucky)
				break;
			default:
				alert("You dummy! That wasn't one of the options, try again");
				dummyCount++;
				choiceOne(prompt('Do you try and pay your \'DEBT\' or \'SWIM\' for it?'))
				break;
			}
		} else { 
			alert("You dummy! You need to put something in!")
			dummyCount++;
			choiceOne(prompt('Do you try and pay your \'DEBT\' or \'SWIM\' for it?'))
		}
	}

alert(`You wake up underneath a banana tree with the sun beating down on your face. You dig into your pocket and pull out a piece of paper...`)
alert(`You owe me $${debt} for what you did last night, I'll be sending my men to collect once the sun goes down. \n D.G.`)
alert(`That isn't good. You can't remember what you did, but you sure recognize the insignia at the bottom. Don Garcia, owner of the banana plantation you find yourself on and more importantly a big time player in the criminal underworld. You better be sure to pay him back.`)

choiceOne(prompt('Or should you? You could always try and swim for it. It\'s a long shot but it might be better than dealing with Don Garcia. Will you stay and try to pay your \'DEBT\', or \'SWIM\' for it?'))


