import {
	Client,
	DEFAULT_CONFIGURATION,
	MetadataController,
	DataController,
} from "@thoughtspot/rest-api-sdk";
import { TOKEN_ENDPOINT_API, TS_HOST } from "./constants";
import React, { useState } from "react";

DEFAULT_CONFIGURATION.baseUrl = `https://${TS_HOST}`;
DEFAULT_CONFIGURATION.acceptLanguage = "*";

const apiContext = React.createContext({
	metadataController: null,
	dataController: null,
});

export const useAPIClient = () => React.useContext(apiContext);

export const APIProvider = ({ children }) => {
	const [loading, uisetLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	const [controllers, setControllers] = React.useState({});

	const init = (token) => {
		DEFAULT_CONFIGURATION.accessToken = token;
		let client = new Client(DEFAULT_CONFIGURATION);
		const metadataController = new MetadataController(client);
		const dataController = new DataController(client);
		setControllers({
			metadataController,
			dataController,
		});
	};

	console.log('DEFAULT_CONFIGURATION', DEFAULT_CONFIGURATION)

	React.useEffect(() => {
		// fetch(TOKEN_ENDPOINT_API)
		// 	.then((res) => res.text())
		// 	.then((token) => {
		// 		console.log('asdf', token)
		// 		init(token);
		// 	});
	}, []);

	return (
		<apiContext.Provider value={controllers}>{children}</apiContext.Provider>
	);
};
