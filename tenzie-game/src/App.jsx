import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import { Die } from "./components/Die/Die";

import "./styles/app.css";

function App() {
	const [dices, setDices] = useState(generateRandomDices());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		// caso todos sejam hold
		// const isAllDiceHeld = dices.filter((die) => die.isHeld === false).length <= 0;

		const check = dices.every((item) => {
			return item.value === dices[0].value && item.isHeld === true;
		});

		if (check) {
			setTenzies(true);
			console.log("You WOn");
		}
	}, [dices]);

	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function generateRandomDices() {
		const allNewDice = [];
		for (let i = 0; i < 10; i++) {
			allNewDice.push(generateNewDie());
		}
		return allNewDice;
	}

	function holdDice(id) {
		setDices((prevDices) => {
			return prevDices.map((dice) => {
				if (dice.id === id) {
					return { ...dice, isHeld: !dice.isHeld };
				} else {
					return dice;
				}
			});
		});
	}

	function handleRollDice() {
		if (tenzies) {
			setDices(generateRandomDices());
			setTenzies(false);
		} else {
			setDices((prevDice) => {
				return prevDice.map((die) => {
					if (!die.isHeld) {
						return generateNewDie();
					} else {
						return die;
					}
				});
			});
		}
	}

	return (
		<div className="background">
			{tenzies && (
				<Confetti
					width={window.innerWidth}
					height={innerHeight}
					gravity={0.2}
					tweenDuration={100}
				/>
			)}
			<main className="container">
				<h2 className="title">{tenzies ? "Congratulations!!" :"Tenzies"}</h2>
				<p className="instructions">
					Roll until all dice are the same. Click each die to freeze it at
					its current value between rolls.
				</p>
				<div className="board">
					{dices.map((dice) => {
						return (
							<Die
								key={dice.id}
								id={dice.id}
								value={dice.value}
								isHeld={dice.isHeld}
								handleHoldDice={holdDice}
							/>
						);
					})}
				</div>

				<button className="roll-dice" onClick={handleRollDice}>
					{tenzies ? "New Game" : "Roll"}
				</button>
			</main>
		</div>
	);
}

export default App;


// extras
//track number of rolls to win
//track time to win
//scorebord of the above itens