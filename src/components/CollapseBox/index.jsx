import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
import styles from "./index.module.css";
const CollapseBox = ({ items, isCheck, setIsCheck }) => {
	const [isCheckAll, setIsCheckAll] = useState(false);
	const handleSelectAll = (e) => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(items.map((item) => item.uniqueId));
		if (isCheckAll) {
			setIsCheck([]);
		}
	};

	const handleClick = (e) => {
		const { id, checked } = e.target;
		setIsCheck([...isCheck, id]);
		if (!checked) {
			setIsCheck(isCheck.filter((item) => item !== id));
		}
	};

	return (
		<>
			{items.length > 0 ? (
				<Collapse
					expandIconPosition='end'
					bordered={false}
					items={[
						{
							key: "1",
							label: (
								<div className={styles.container}>
									<div className={styles.title}>
										{items.length > 0 ? items[0].id : null}
									</div>
									<div>quantity: {items.length}</div>
									<Checkbox onChange={handleSelectAll} checked={isCheckAll} />
								</div>
							),
							children: items
								.toSorted((a, b) => a.uniqueId - b.uniqueId)
								.map((item) => (
									<div
										key={item.uniqueId}
										className={styles["child-container"]}>
										<div>#{item.uniqueId}</div>
										<div style={{marginRight:20}}>
											{item.created.split("T").shift().split("-").join("/")}
										</div>
										<Checkbox
											key={item.uniqueId}
											id={item.uniqueId}
											onChange={handleClick}
											checked={isCheck.includes(item.uniqueId)}
										/>
									</div>
								)),
						},
					]}
				/>
			) : null}
		</>
	);
};

export default CollapseBox;
