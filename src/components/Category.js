import React from "react";
import Item from "./Item";

const Category = ({
  title,
  grp,
  handleDragStart,
  grpI,
  dragging,
  getStyles,
  handleDragEnter,
}) => {
  //   console.log(grpI);
  return (
    <div
      className="dnd-group"
      onDragEnter={
        dragging && !grp.items.length
          ? (e) => handleDragEnter(e, grpI, 0)
          : null
      }
    >
      <div className="group-title">{title}</div>
      {grp.items.map((item, itemI) => (
        <Item
          key={item}
          item={item}
          handleDragStart={handleDragStart}
          itemI={itemI}
          grpI={grpI}
          dragging={dragging}
          getStyles={getStyles}
          handleDragEnter={handleDragEnter}
        />
      ))}
    </div>
  );
};

export default Category;
