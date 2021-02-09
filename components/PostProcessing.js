import React from "react";
import { EffectComposer, Bloom } from "react-postprocessing";

const PostProcessing = () => {
	return (
		<EffectComposer>
			<Bloom
				intensity={0.7}
				blurPass={undefined}
				luminanceSmoothing={0.9}
				luminanceThreshold={0}
				height={600}
			/>
		</EffectComposer>
	);
};

export default React.memo(PostProcessing);
