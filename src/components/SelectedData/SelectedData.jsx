import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import styles from "./SelectedData.module.css";
import CollapseBox from "../CollapseBox";
import { useSelector, useDispatch } from "react-redux";
import { selectedItems } from "../../features/items/itemSlice";
import { deleteItem } from "../../features/items/itemSlice";
const SelectedData = () => {
	const [isCheck, setIsCheck] = useState([]);
	const items = useSelector(selectedItems);
	const dispatch = useDispatch();
	const select = items.filter((item) => isCheck.includes(item.uniqueId));
	const leftItems = items.filter((item) => !isCheck.includes(item.uniqueId));
	const handleDispatch = () => {
		dispatch(deleteItem([select, leftItems]));
		setIsCheck([]);
	};
	return (
		<div className={styles.root}>
			<h2>Selected Data</h2>
			<div className={styles["div-button"]}>
				<Button
					onClick={() => handleDispatch(select, leftItems)}
					className={styles.button}>
					Delete
				</Button>
			</div>
			{items.length > 0 ? (
				<Space direction='vertical'>
					{items.map((item) => item.id === "A").length > 0 ? (
						<CollapseBox
							items={items.filter((item) => item.id === "A")}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
						/>
					) : null}
					{items.map((item) => item.id === "B").length > 0 ? (
						<CollapseBox
							items={items.filter((item) => item.id === "B")}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
						/>
					) : null}
					{items.map((item) => item.id === "C").length > 0 ? (
						<CollapseBox
							items={items.filter((item) => item.id === "C")}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
						/>
					) : null}
					{items.map((item) => item.id === "D").length > 0 ? (
						<CollapseBox
							items={items.filter((item) => item.id === "D")}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
						/>
					) : null}
					{items.map((item) => item.id === "E").length > 0 ? (
						<CollapseBox
							items={items.filter((item) => item.id === "E")}
							isCheck={isCheck}
							setIsCheck={setIsCheck}
						/>
					) : null}
				</Space>
			) : null}
		</div>
	);
};

export default SelectedData;
