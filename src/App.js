import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButtton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

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
		<div className="App">
			<PrimaryButton>hello</PrimaryButton>
			<SecondaryButtton>world</SecondaryButtton>
			<SearchInput />
			<UserCard user={user} />
		</div>
	);
}