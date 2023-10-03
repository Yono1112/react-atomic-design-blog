import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButtton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<PrimaryButton>hello</PrimaryButton>
			<SecondaryButtton>world</SecondaryButtton>
			<SearchInput />
		</div>
	);
}