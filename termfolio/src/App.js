import { useEffect, useState } from "react";
import Screen from "./components/Screen";

function App() {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/gourish13/gourish13.github.io/main/profile.json"
		)
			.then((res) => res.json())
			.then((data) => setProfile(data))
			.catch((err) => {
				console.log(err);
				setProfile(null);
			});

		return () => setProfile(null);
	}, []);

	return (
		<div className="h-screen w-screen flex">
			<Screen profile={profile}></Screen>
		</div>
	);
}

export default App;
