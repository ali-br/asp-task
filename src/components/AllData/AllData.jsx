import React,{useState} from "react";
import {  Button, Space,  } from "antd";
import styles from "./AllData.module.css";
import CollapseBox from "../CollapseBox";
import { useSelector,useDispatch } from "react-redux";
import { selectAllItems } from "../../features/items/itemSlice";
import { addItem } from "../../features/items/itemSlice";
const AllData = () => {
	const [isCheck, setIsCheck] = useState([]);
    const items = useSelector(selectAllItems)

	const selectedItems = items.filter(item=>isCheck.includes(item.uniqueId))
	const leftItems = items.filter(item=>!isCheck.includes(item.uniqueId))
	// console.log(selectedItems);
	// console.log(leftItems);
	const dispatch = useDispatch()
	const handleDispatch=(selectedItems,leftItems)=>{
		dispatch(addItem([selectedItems,leftItems]))	
	}
	return (
		<div className={styles.root}>
			<h2>All Data</h2>
			<div className={styles["div-button"]}>
				<Button onClick={()=>handleDispatch(selectedItems,leftItems)} className={styles.button}>Add</Button>
			</div>
			<Space direction='vertical'>
				{items.map(item=>item.id==="A").length>0?(<CollapseBox items={items.filter((item) => item.id === "A")} isCheck={isCheck} setIsCheck={setIsCheck}/>):null}
				{items.map(item=>item.id==="B").length>0?(<CollapseBox items={items.filter((item) => item.id === "B")} isCheck={isCheck} setIsCheck={setIsCheck}/>):null}
				{items.map(item=>item.id==="C").length>0?(<CollapseBox items={items.filter((item) => item.id === "C")} isCheck={isCheck} setIsCheck={setIsCheck}/>):null}
				{items.map(item=>item.id==="D").length>0?(<CollapseBox items={items.filter((item) => item.id === "D")} isCheck={isCheck} setIsCheck={setIsCheck}/>):null}
				{items.map(item=>item.id==="E").length>0?(<CollapseBox items={items.filter((item) => item.id === "E")} isCheck={isCheck} setIsCheck={setIsCheck}/>):null}
			</Space>
		</div>
	);
};

export default AllData;
