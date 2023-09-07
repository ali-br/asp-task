import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import styles from "./SelectedData.module.css";
import CollapseBox from "../CollapseBox";
import { useSelector,useDispatch } from "react-redux";
import { selectedItems } from "../../features/items/itemSlice";
import { deleteItem } from "../../features/items/itemSlice";
const SelectedData = () => {
	const [isCheck, setIsCheck] = useState([]);
	const items = useSelector(selectedItems);
const dispatch=useDispatch()
	const a = items.filter((item) => item.id === "A");
	const b = items.filter((item) => item.id === "B");
	const c = items.filter((item) => item.id === "C");
	const d = items.filter((item) => item.id === "D");
	const e = items.filter((item) => item.id === "E");
	const select = items.filter(item=>isCheck.includes(item.uniqueId))
	const leftItems = items.filter(item=>!isCheck.includes(item.uniqueId))
	console.log(select,leftItems);
	return (
		<div className={styles.root}>
			<h2>Selected Data</h2>
			<div className={styles["div-button"]}>
				<Button onClick={()=>dispatch(deleteItem([select,leftItems]))} className={styles.button}>Delete</Button>
			</div>
			{items.length > 0 ? (
				<Space direction='vertical'>
					<CollapseBox items={a} isCheck={isCheck} setIsCheck={setIsCheck} />
					<CollapseBox items={b} isCheck={isCheck} setIsCheck={setIsCheck} />
					<CollapseBox items={c} isCheck={isCheck} setIsCheck={setIsCheck} />
					<CollapseBox items={d} isCheck={isCheck} setIsCheck={setIsCheck} />
					<CollapseBox items={e} isCheck={isCheck} setIsCheck={setIsCheck} />
				</Space>
			) : null}
		</div>
	);
};

export default SelectedData;
