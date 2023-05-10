import React from "react";
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react'
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "../config";
import { gbl_disabledActionSet, gbl_disabledMessage, gbl_visibleActionSet } from "../config";

const Search = () => {
  const embedRef = useEmbedRef({
    frameParams: {width: '100%', height: '100%'},
    hideDataSources: true,
    answerId: "ef625725-b6fa-4ce4-9522-d942499a1690",
    });

  return (
    <div>
      <SearchEmbed
        ref={embedRef}
        frameParams={{ hideDataSources: "true", width: '100%', height: '100%', }}
        answerId={"ef625725-b6fa-4ce4-9522-d942499a1690"}
        disabledActions={gbl_disabledActionSet}
        disabledActionReason={gbl_disabledMessage}
        visibleActions={gbl_visibleActionSet}
      />
    </div>
  );
};

export default Search;
