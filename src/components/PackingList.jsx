import { useState } from "react";

function PackingList({ items, OnDeleteItem, onToggelItem, onClear }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItem;
    if (sortBy === "input") sortedItem = items;
    if (sortBy === "description") sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItem.map((item) => (
                        <Item item={item} OnDeleteItem={OnDeleteItem} onToggelItem={onToggelItem} key={item.id} />
                    ))}
                </ul>
                <div className="actions">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option style={{ backgroundColor: "black" }} value="input">
                            Sort by input order
                        </option>
                        <option style={{ backgroundColor: "black" }} value="description">
                            Sort by description
                        </option>
                        <option style={{ backgroundColor: "black" }} value="packed">
                            Sort by packed status
                        </option>
                    </select>
                    <button className="actions" onClick={onClear}>
                        Clear
                    </button>
                </div>
            </div>
        </>
    );
}
function Item({ item, OnDeleteItem, onToggelItem }) {
    return (
        <>
            <li>
                <input type="checkbox" value={item.packed} onChange={() => onToggelItem(item.id)} />
                <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                    {item.quantity} {item.description}
                </span>
                <button onClick={() => OnDeleteItem(item.id)}>❌</button>
            </li>
        </>
    );
}
export default PackingList;
