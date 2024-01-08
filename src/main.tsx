import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Root from "./components/Root.tsx";
import Room from "./components/Room.tsx";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: ":roomID",
		element: <Room />
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider>
			<RouterProvider router={router} />
		</MantineProvider>
	</React.StrictMode>,
);

// https://reffect.co.jp/react/react-router-6#i-3
// https://mo-gu-mo-gu.com/react-router-v6-loader-basic/
// https://ja.react.dev/learn
// https://javascript.keicode.com/newjs/fetch.php#2-2
