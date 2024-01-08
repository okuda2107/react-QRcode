import { Button, Center } from '@mantine/core';
import { createRoom } from "./Room";

export default function Root() {
	return (
		<>
			<Center h={100}>
				<Button onClick={createRoom}>Create Room</Button>
			</Center>
		</>
	);
}
