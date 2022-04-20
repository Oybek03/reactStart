import React from "react";
import { ReactDOM } from "react-dom";
import faker from "@faker-js/faker";

const CommentCompnent = (props) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={props.img} />
        </a>
        <div className="content">
          <a className="author">{props.name}</a>
          <div className="metadata">
            <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>5 Faves
            </div>
          </div>
          <div className="text">
        {props.coment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCompnent;
