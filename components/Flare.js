import {
	Lensflare,
	LensflareElement,
} from "../node_modules/three/examples/jsm/objects/Lensflare.js";
import { useLoader, extend } from "react-three-fiber";
import React, { useRef, useEffect } from "react";
import { TextureLoader } from "three";

import img0 from "../media/lensflare0.png";
import img3 from "../media/lensflare3.png";

extend({ Lensflare, LensflareElement });

const Flare = () => {
	const lensflare = useRef();

	const [flare0, flare3] = useLoader(TextureLoader, [img0, img3]);

	useEffect(() => {
		lensflare.current.addElement(new LensflareElement(flare0, 512, 0));
		lensflare.current.addElement(new LensflareElement(flare3, 60, 0.6));
		lensflare.current.addElement(new LensflareElement(flare3, 70, 0.7));
		lensflare.current.addElement(new LensflareElement(flare3, 120, 0.9));
		lensflare.current.addElement(new LensflareElement(flare3, 70, 1));
	}, [lensflare]);

	return (
		<React.Fragment>
			<pointLight
				color="yellow"
				intensity={5.5}
				position={[-36, 60, 0]}
				distance={2000}
				color-setHSL={[0.995, 0.5, 0.9]}
			>
				<lensflare ref={lensflare} color="white" />
			</pointLight>
		</React.Fragment>
	);
};

export default React.memo(Flare);
