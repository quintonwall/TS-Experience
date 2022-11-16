import React from "react";
import { Liveboard, useEmbedRef } from '@thoughtspot/visual-embed-sdk/react';
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "./liveboard.css";
import '../config'
import { gbl_disabledActionSet, gbl_disabledMessage } from "../config";



export const defaultActionSet = [Action.DrillDown, Action.AddFilter, Action.ShowUnderlyingData, Action.ConfigureFilter];

const Liveboard = () => {
  
  const embedRef = useEmbedRef();

  const [disabledActions, setDisabledActions] = React.useState();


  const [fullHeight, setFullHeight] = React.useState(false);

  const onLoad = (e) => {
    console.log("Loading liveboard");
  };

  const disableTheActions = (e) => {
      setDisabledActions(disabledSet);
  };

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
        />
    </div>
  );
};

export default Liveboard;