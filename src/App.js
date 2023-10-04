import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButtton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";
import { Headonly } from "./components/templates/Headonly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { UserCard } from "./components/organisms/user/UserCard";
import { Router } from "./router/Router";

export default function App() {
	return (
		// <BrowserRouter>
		// 	<DefaultLayout>
		// 		<PrimaryButton>hello</PrimaryButton>
		// 		<SecondaryButtton>world</SecondaryButtton>
		// 		<br />
		// 		<SearchInput />
		// 		<UserCard user={user} />
		// 	</DefaultLayout>
		// </BrowserRouter>
		<Router />
	);
}