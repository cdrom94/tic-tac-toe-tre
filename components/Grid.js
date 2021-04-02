import React from "react";

const Bar = props => {
	return (
		<mesh {...props}>
			<boxBufferGeometry args={[0.05, 7, 0.05]} />
			<meshStandardMaterial
				metalness={1}
				roughness={0.1}
				color={0xf1c232}
			/>
		</mesh>
	);
};

const Grid = () => {
	return (
		<React.Fragment>
			<Bar position={[2.4, 0, 0]} />
			<Bar position={[0, 0, 0]} />
			<Bar position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
			<Bar position={[1.2, 1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
		</React.Fragment>
	);
};

export default React.memo(Grid);
