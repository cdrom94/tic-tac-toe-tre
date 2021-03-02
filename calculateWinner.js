import success1 from "/media/success1.mp3";
import success2 from "/media/success2.mp3";
import success3 from "/media/success3.mp3";
import click from "/media/click.mp3";

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
			successTuneList[
				(successTuneList.length * Math.random()) | 0
			].play();
			return squares[a];
		} else {
			clickTune.play();
		}
	}
	return null;
};

export default calculateWinner;
