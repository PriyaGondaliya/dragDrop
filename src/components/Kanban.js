import React, { useRef, useState } from "react";
import Category from "./Category";
import "./kanban.css";

const data = [
  { _id: 1, title: "new", items: ["complete login module", "2", "3"] },
  { _id: 2, title: "done", items: ["complete login module", "2", "3", "4"] },
];

const Kanban = () => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, grpI, itemI) => {
    console.log("started" + grpI + " " + itemI);
    dragItem.current = { grpI, itemI };
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
    setDragging(true);
  };

  const handleDragEnd = () => {
    console.log("ending");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);

    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragEnter = (e, grpI, itemI) => {
    console.log("entering" + grpI + itemI);
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      console.log("target not same");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[grpI].items.splice(
          itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = { grpI, itemI };
        return newList;
      });
    }
  };

  const getStyles = (grpI, itemI) => {
    const currentItem = dragItem.current;
    if (currentItem.grpI === grpI && currentItem.itemI === itemI) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  return (
    <div className="drag-n-drop">
      {list.map((grp, grpI) => (
        <Category
          key={grp._id}
          title={grp.title}
          grp={grp}
          grpI={grpI}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          dragging={dragging}
          getStyles={getStyles}
        />
      ))}
    </div>
  );
};

export default Kanban;
