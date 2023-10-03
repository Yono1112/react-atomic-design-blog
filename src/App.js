import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButtton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";
import { Headonly } from "./components/templates/Headonly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
	name: "hoge",
	image: "https://source.unsplash.com/TaCk3NspYe0",
	email: "hoge@example.com",
	phone: "090-0000-0000",
	company: {
		name: "hogehoge company"
	},
	website: "https://google.com"
}

export default function App() {
	return (
		<BrowserRouter>
			<DefaultLayout>
				<PrimaryButton>hello</PrimaryButton>
				<SecondaryButtton>world</SecondaryButtton>
				<br />
				<SearchInput />
				<UserCard user={user} />
			</DefaultLayout>
		</BrowserRouter>
	);
}