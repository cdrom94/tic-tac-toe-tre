import React, { useRef } from "react";

const Pearl = ({ position }) => {
	const mesh = useRef();

	return (
		<mesh castShadow receiveShadow position={position} ref={mesh}>
			<sphereBufferGeometry args={[0.45, 32, 32]} />
			<meshStandardMaterial
				color="white"
				metalness={0.9}
				roughness={0.1}
			/>
		</mesh>
	);
};

export default React.memo(Pearl);
