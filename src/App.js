import { Row, Col } from "antd";
import SelectedData from "./components/SelectedData/SelectedData";
import AllData from "./components/AllData/AllData";
import styles from "./App.module.css";

function App() {
	
	return (
		<>
			<Row className={styles.row}>
				<Col className={styles.col} md={11} xs={23}>
					<AllData  />
				</Col>
				<Col className={styles.col} md={11} xs={23}>
					<SelectedData />
				</Col>
			</Row>
		</>
	);
}

export default App;
