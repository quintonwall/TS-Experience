import React from "react";
import { LiveboardEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react';
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "./liveboard.css";
import '../config'
import { gbl_disabledActionSet, gbl_disabledMessage, gbl_visibleActionSet } from "../config";

import { gbl_meta, gbl_thoughtSpotHost } from "./../config";
import { useInitThoughtSpot } from "./../use-init-thoughtspot";

export const defaultActionSet = [Action.DrillDown, Action.AddFilter, Action.ShowUnderlyingData, Action.ConfigureFilter];

const Liveboard = () => {

	const embedRef = useEmbedRef();

	const [fullHeight] = React.useState(false);

	const onLoad = (e) => {
		console.log("Loading liveboard");
	};

	const isInit = useInitThoughtSpot(gbl_thoughtSpotHost);

	if (!isInit) {
		return <></>;
	}

	return (
		<div >
			<LiveboardEmbed
				ref={embedRef}
				frameParams={{
					height: 1200
				}}
				fullHeight={fullHeight}
				liveboardId="b173faa2-e861-4540-a232-853f7aeb2c37"
				onLoad={onLoad}
				disabledActions={gbl_disabledActionSet}
				disabledActionReason={gbl_disabledMessage}
				visibleActions={gbl_visibleActionSet}
			/>
		</div>
	);
};

export default Liveboard;