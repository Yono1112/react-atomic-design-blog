import { Header } from "../atoms/layout/Header";

export const Headonly = (props) => {
	const { children } = props;
	return (
		<>
			<Header />
			{children}
		</>
	)
}