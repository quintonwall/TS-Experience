import React from "react";
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/lib/src/react'
import { EmbedEvent, Action, HostEvent } from '@thoughtspot/visual-embed-sdk';
import "../config";
import { gbl_disabledActionSet, gbl_disabledMessage, gbl_visibleActionSet } from "../config";

const Search = {
  frameParams: {},
  /*param-start-collapseDataSources*//*param-end-collapseDataSources*/
  /*param-start-hideDataSources*//*param-end-hideDataSources*/
  /*param-start-hideResults*/
  hideResults: true,
  /*param-end-hideResults*/
  /*param-start-enableSearchAssist*//*param-end-enableSearchAssist*/
  /*param-start-modifyActions*//*param-end-modifyActions*/
  /*param-start-disabledActions*//*param-end-disabledActions*/
  /*param-start-dataSources*//*param-end-dataSources*/
  /*param-start-searchOptions*//*param-end-searchOptions*/
  /*param-start-answerId*//*param-end-answerId*/
};


// Function to show/hide
function setDisplayStyle(el, style) {
  if(document.getElementById(el)) {
    document.getElementById(el).style.display = style;
  }
}

// Functions to show and hide a loader while iframe loads
function showLoader() {
  setDisplayStyle("loader", "block");
}
function hideLoader() {
  setDisplayStyle("loader", "none");
}

function showAuthExpired() {
  setDisplayStyle("authExpiredBanner", "flex");
}

export default Search;



export default Search;
