import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
	return {
		id: val,
		name: `hoge${val + 1}`,
		image: "https://source.unsplash.com/TaCk3NspYe0",
		email: `hoge${val + 1}@example.com`,
		phone: "090-0000-0000",
		company: {
			name: "hogehoge company"
		},
		website: "https://google.com"
	}
})

export const Users = () => {
	return (
		<SContainer>
			<h2>Users一覧</h2>
			<SearchInput />
			<SUserArea>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</SUserArea>
		</SContainer>
	)
}

const SContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px;
`

const SUserArea = styled.div`
	padding-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
`