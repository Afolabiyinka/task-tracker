import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const Card = ({ review }) => {
  return (
    <StyledWrapper>
      <div className="task">
        <div className="tags">
          <span className="tag">{review.name}</span>
          <button className="options"></button>
        </div>
        <p>{review.review}</p>
        <StarRating rating={review.rating} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .task {
    position: relative;
    color: #fffff;
    cursor: move;
    background-color: #0d1b2a;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin-bottom: 1rem;
    // max-width: 350px;
    height: 230px;
    width: 350px;
    transition: 0.3s all;
  }

  .task:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    transform: scale(1.05);
    border-color: rgba(162, 179, 207, 0.2) !important;
  }

  .task p {
    font-size: 15px;
    margin: 1.2rem 0;
  }

  .tag {
    border-radius: 10px;
    // padding: 10px 60px;
    font-size: 1.3rem;
    text-decoration: underline;
    font-weight: bold;
    color: #ffffff;
    // background-color: #1389eb;
  }

  .tags {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .options {
    background: transparent;
    border: 0;
    color: #c4cad3;
    font-size: 17px;
  }

  .options svg {
    fill: #9fa4aa;
    width: 20px;
  }

  .stats {
    position: relative;
    width: 100%;
    color: #9fa4aa;
    font-size: 12px;
    font-family: ui-monospace;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stats div {
    margin-right: 1rem;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .stats svg {
    margin-right: 5px;
    height: 100%;
    stroke: #9fa4aa;
  }

  .viewer span {
    height: 30px;
    width: 30px;
    background-color: rgb(28, 117, 219);
    margin-right: -10px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: grid;
    align-items: center;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 2px;
  }

  // .viewer span svg {
  //   stroke: #fff;
  // }
`;

export default Card;
