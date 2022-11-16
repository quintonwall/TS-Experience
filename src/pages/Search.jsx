import React from "react";
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/react'
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "../config";
import { gbl_disabledActionSet, gbl_disabledMessage } from "../config";

const Search = () => {
  const embedRef = useEmbedRef();

  return (
    <div>
      <SearchEmbed
        ref={embedRef}
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        answerId={"ef625725-b6fa-4ce4-9522-d942499a1690"}
        disabledActions={gbl_disabledActionSet}
        disabledActionReason={gbl_disabledMessage}
      />
    </div>
  );
};

export default Search;
