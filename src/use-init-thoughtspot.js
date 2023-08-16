import React from 'react';
import { init, AuthType, Action } from "@thoughtspot/visual-embed-sdk";

import {TS_HOST} from "./constants";

export function useInitThoughtSpot(thoughtSpotHost: string) {
	init({
		thoughtSpotHost: TS_HOST,
		authType: AuthType.Basic,
		username: 'webmarketing',
		password: 'PMM$.user',
		// username: 'tsadmin',
		// password: '123Cloud!',

		// hostConfig: {
		// 	hostUserGuid: getUserGuid(),
		// 	hostClusterId: getClusterId(),
		// 	hostClusterName: getClusterName(),
		// },
		autoLogin: true
	});

	return true
}