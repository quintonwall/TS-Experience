import React from "react";
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react'
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "../config";
import { gbl_disabledActionSet, gbl_disabledMessage } from "../config";

const EmptySearch = () => {
  const embedRef = useEmbedRef();

  return (
    <div>
      <SearchEmbed
        ref={embedRef}
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        dataSources={"5f791f79-d175-44b4-bd67-9e748f3dfbba"}
        disabledActions={gbl_disabledActionSet}
        disabledActionReason={gbl_disabledMessage}
      />
    </div>
  );
};

export default EmptySearch;
