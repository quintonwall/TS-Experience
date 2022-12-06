import React from "react";
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react'
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "../config";
import { gbl_disabledActionSet, gbl_disabledMessage } from "../config";


function testa(){
  //embedRef.contentWindow.getElementsByName('ThoughtSpot Embedded Analytics')[0].contentWindow.pendo.initialize();
  //useEmbedRef().pendo.initialize();
  //useEmbedRef().current.getElementById('ThoughtSpot Embedded Analytics').contentWindow.pendo.initialize();
  //useEmbedRef().
  
}

const init_pendo = (e) => {
  console.log("Initializing Pendo");
  //embedRef.contentWindow.pendo.initialize();
};

const EmptySearch = () => {
  
  const embedRef = useEmbedRef();
  return (
    <div>
      <SearchEmbed
        ref={embedRef}
        onLoad={init_pendo}
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        dataSources={"5f791f79-d175-44b4-bd67-9e748f3dfbba"}
        disabledActions={gbl_disabledActionSet}
        disabledActionReason={gbl_disabledMessage}
      />
      
    </div>
  );
};

export default EmptySearch;
