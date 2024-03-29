import success1 from "url:/media/success1.mp3";
import success2 from "url:/media/success2.mp3";
import success3 from "url:/media/success3.mp3";
import click from "url:/media/click.mp3";

const clickTune = new Audio(click);
const successTuneList = [
	new Audio(success1),
	new Audio(success2),
	new Audio(success3),
];

const calculateWinner = squares => {
	let lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		let [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			const index = Math.floor(Math.random() * successTuneList.length);
			successTuneList[index].play();
			return squares[a];
		} else if (squares.some(x => x !== null)) {
			clickTune.play();
		}
	}
	return null;
};

export default calculateWinner;
