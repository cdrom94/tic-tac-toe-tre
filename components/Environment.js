import React, { useEffect } from "react";
import { PMREMGenerator, UnsignedByteType } from "three";
import { useThree } from "react-three-fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import HDRI from "../media/parkimage.hdr";

const Environment = () => {
	const { gl, scene } = useThree();
	const pmremGenerator = new PMREMGenerator(gl);
	const loader = new RGBELoader();
	loader.setDataType(UnsignedByteType);
	pmremGenerator.compileEquirectangularShader();

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
