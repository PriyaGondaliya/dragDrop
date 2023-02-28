import React from "react";

const Item = ({
  item,
  handleDragStart,
  itemI,
  grpI,
  dragging,
  getStyles,
  handleDragEnter,
}) => {
  return (
    <div
      draggable
      className={dragging ? getStyles(grpI, itemI) : "dnd-item"}
      onDrag={(e) => {
        handleDragStart(e, grpI, itemI);
      }}
      onDragEnter={
        dragging
          ? (e) => {
              handleDragEnter(e, grpI, itemI);
            }
          : null
      }
    >
      <div>
        <p>{item}</p>
      </div>
    </div>
  );
};

export default Item;
