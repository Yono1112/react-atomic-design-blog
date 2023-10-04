import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Headonly } from "../components/templates/Headonly";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<DefaultLayout>
						<Top />
					</DefaultLayout>
				} />
				<Route path="/users" element={
					<Headonly>
						<Users />
					</Headonly>
				} />
			</Routes>
		</BrowserRouter>
	);
}
