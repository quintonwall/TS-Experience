import React from "react";

import {
  EmbedEvent,
  SageEmbed,
  init,
  AuthType
} from "@thoughtspot/visual-embed-sdk";

import { gbl_thoughtSpotHost } from "./../config";
import { useInitThoughtSpot } from "./../use-init-thoughtspot";
// import {
// 	getClusterId,
// 	getClusterName,
// 	getUserGuid,
// } from '@thoughtspot/session-service';

import { Spin } from "antd";
import { notification } from "antd";

import {TS_HOST} from "./../constants";
import { Layout } from "antd";
const { Content } = Layout;

// import { APIProvider } from "./../api-client.jsx"

import {
	DEFAULT_CONFIGURATION
} from "@thoughtspot/rest-api-sdk";


const Sage = () => {
	const [isEmbedLoading, setIsEmbedLoading] = React.useState(true);
	const embedRef = React.useRef(null);

	DEFAULT_CONFIGURATION.baseUrl = `https://${TS_HOST}`;
	DEFAULT_CONFIGURATION.acceptLanguage = "*";

	// {
	// 	"None": "None",
	// 	"EmbeddedSSO": "EmbeddedSSO",
	// 	"SSO": "SSO_SAML",
	// 	"SAML": "SSO_SAML",
	// 	"SAMLRedirect": "SSO_SAML",
	// 	"OIDC": "SSO_OIDC",
	// 	"OIDCRedirect": "SSO_OIDC",
	// 	"AuthServer": "AuthServer",
	// 	"TrustedAuthToken": "AuthServer",
	// 	"TrustedAuthTokenCookieless": "AuthServerCookieless",
	// 	"Basic": "Basic"
	// }
	
	// const authStatus = init({
	// 	thoughtSpotHost: TS_HOST,
	// 	authType: AuthType.None, // AuthType.Passthrough
	// 	// See https://github.com/thoughtspot/node-token-auth-server-example
	// 	// for the implementation of the below endpoint.
	// 	// authEndpoint: TOKEN_ENDPOINT,
	// 	// customCssUrl: "cdn.jsdelivr.net/gh/thoughtspot/custom-css-demo/dark5.css"
	// });

	// https://try-everywhere-internal.thoughtspotstaging.cloud

	// const authStatus = init({
	// 	thoughtSpotHost: TS_HOST,
	// 	authType: AuthType.Basic,
	// 	username: 'webmarketing',
	// 	password: 'PMM$.user',
	// 	// username: 'tsadmin',
	// 	// password: '123Cloud!',

	// 	// hostConfig: {
	// 	// 	hostUserGuid: getUserGuid(),
	// 	// 	hostClusterId: getClusterId(),
	// 	// 	hostClusterName: getClusterName(),
	// 	// },
	// 	autoLogin: true
	// });
	
	// authStatus.on("SUCCESS", () => {
	// 	notification.info({
	// 		message: "Auth successful",
	// 		duration: 2,
	// 		placement: "bottomRight",
	// 	});
	// });
	// authStatus.on("FAILURE", (reason) => {
	// 	notification.error({
	// 		message: "Auth Failed due to " + reason,
	// 		duration: 2,
	// 		placement: "bottomRight",
	// 	});
	// });
	// authStatus.on("LOGOUT", () => {
	// 	notification.info({
	// 		message: "Successfully logged out",
	// 		duration: 2,
	// 		placement: "bottomRight",
	// 	});
		
	// });
	React.useEffect(() => {
		useInitThoughtSpot(gbl_thoughtSpotHost);


		if (embedRef !== null) {
			embedRef.current.innerHTML = "";
		}

		const tsSage = new SageEmbed("#tsEmbed", {
			disableWorksheetChange: true,
			hideEurekaResults: true,
			isSageEmbed: true,
			showPrimaryNavbar: false,
			hideEurekaSuggestions: true,
			frameParams: {
				height: 1200
			}
		});

		tsSage
			.on(EmbedEvent.Init, () => setIsEmbedLoading(true))
			.on(EmbedEvent.Load, () => setIsEmbedLoading(false))
			.render();
	}, []);

	return (
		<>
			<Layout>
				<Content>
					{/* <APIProvider> */}
						<div style={{position: 'relative', minHeight: 'calc(100vh - 44px)', maxHeight: 'calc(100vh - 44px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="tsEmbed" ref={embedRef} id="tsEmbed"></div>
					{/* </APIProvider> */}
					<style>
						{`
							.tsEmbed iframe {height: 100%!important; position: absolute;}
						`}
					</style>
				</Content>
			</Layout>
		</>
	);
};

export default Sage;