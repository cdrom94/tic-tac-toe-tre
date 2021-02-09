import React from "react";

const Lighting = () => {
	return (
		<React.Fragment>
			<ambientLight />
			<spotLight
				intensity={0.2}
				angle={Math.PI / 7}
				position={[150, 150, 250]}
				penumbra={1}
			/>
			<pointLight position={[-150, 300, -300]} intensity={1.5} />
		</React.Fragment>
	);
};

export default React.memo(Lighting);
