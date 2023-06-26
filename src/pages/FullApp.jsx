import React from "react";
import { AppEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react';
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "./liveboard.css";
import '../config'
import { gbl_disabledActionSet, gbl_disabledMessage, gbl_visibleActionSet } from "../config";



export const defaultActionSet = [Action.DrillDown, Action.AddFilter, Action.ShowUnderlyingData, Action.ConfigureFilter];

// This is used in search tab

const FullApp = () => {

	const embedRef = useEmbedRef();

	const [disabledActions, setDisabledActions] = React.useState();


	const [fullHeight, setFullHeight] = React.useState(false);

	const onLoad = (e) => {
		console.log("Loading liveboard");
	};

	const disableTheActions = (e) => {
		setDisabledActions(disabledSet);
	};

	const isInit = useInitThoughtSpot(gbl_thoughtSpotHost);

	if (!isInit) {
		return <></>;
	}

	return (
		<div >
			<AppEmbed
				ref={embedRef}
				frameParams={{
					height: 1200
				}}
				fullHeight="true"
				pageId="Page.Home"
				path="saved-answer/ef625725-b6fa-4ce4-9522-d942499a1690"
				disabledActions={gbl_disabledActionSet}
				disabledActionReason={gbl_disabledMessage}
				visibleActions={gbl_visibleActionSet}
			/>
		</div>
	);
};

export default FullApp;