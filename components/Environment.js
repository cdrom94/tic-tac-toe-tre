import React, { useEffect } from "react";
import { PMREMGenerator } from "three";
import { useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import HDRI from "url:../media/parkimage.hdr";

const Environment = () => {
	const { gl, scene } = useThree();
	const pmremGenerator = new PMREMGenerator(gl);
	pmremGenerator.compileEquirectangularShader();
	const loader = new RGBELoader();

	useEffect(() => {
		loader.load(HDRI, texture => {
			const envMap = pmremGenerator.fromEquirectangular(texture).texture;
			gl.toneMappingExposure = 3;
			scene.environment = scene.background = envMap;
			texture.dispose();
			pmremGenerator.dispose();
		});
	}, []);
	return null;
};

export default React.memo(Environment);
