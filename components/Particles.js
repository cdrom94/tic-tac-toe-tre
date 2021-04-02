import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "react-three-fiber";

const Particles = ({ count, color }) => {
	const mesh = useRef();
	const light = useRef();

	const dummy = useMemo(() => new THREE.Object3D(), []);

	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < count; i++) {
			const t = Math.random() * 100;
			const factor = 20 + Math.random() * 100;
			const speed = 0.01 + Math.random() / 200;
			const xFactor = -25 + Math.random() * 100;
			const yFactor = -25 + Math.random() * 100;
			const zFactor = -25 + Math.random() * 100;
			temp.push({
				t,
				factor,
				speed,
				xFactor,
				yFactor,
				zFactor,
				mx: 0,
				my: 0,
			});
		}
		return temp;
	}, [count]);

	useFrame(() => {
		particles.forEach((particle, i) => {
			let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

			t = particle.t += speed / 2;
			const a = Math.cos(t) + Math.sin(t * 1) / 10;
			const b = Math.sin(t) + Math.cos(t * 2) / 10;
			const s = Math.cos(t);

			dummy.position.set(
				(particle.mx / 10) * a +
					xFactor +
					Math.cos((t / 10) * factor) +
					(Math.sin(t * 1) * factor) / 10,
				(particle.my / 10) * b +
					yFactor +
					Math.sin((t / 10) * factor) +
					(Math.cos(t * 2) * factor) / 10,
				(particle.my / 10) * b +
					zFactor +
					Math.cos((t / 10) * factor) +
					(Math.sin(t * 3) * factor) / 10
			);
			dummy.scale.set(s, s, s);
			dummy.rotation.set(s * 5, s * 5, s * 5);
			dummy.updateMatrix();

			mesh.current.setMatrixAt(i, dummy.matrix);
		});
		mesh.current.instanceMatrix.needsUpdate = true;
	});
	return (
		<React.Fragment>
			<pointLight
				ref={light}
				distance={40}
				intensity={8}
				color="white"
				castShadow
			/>
			<instancedMesh
				castShadow
				receiveShadow
				ref={mesh}
				args={[null, null, count]}
			>
				<dodecahedronBufferGeometry args={[0.09, 0]} />
				<meshPhongMaterial color={color} />
			</instancedMesh>
		</React.Fragment>
	);
};

export default React.memo(Particles);
