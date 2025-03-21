import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const Card = ({ review }) => {
  return (
    <StyledWrapper>
      <div className="task" draggable="true">
        <div className="tags">
          <span className="tag">{review.name}</span>
          <button className="options">
            <svg
              xmlSpace="preserve"
              viewBox="0 0 41.915 41.916"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              version="1.1"
              fill="#000000"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z" />{" "}
                    <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z" />{" "}
                    <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z" />{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
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
    width: 400px;
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
    padding: 10px 60px;
    font-size: 14px;
    color: #ffffff;
    background-color: #1389eb;
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

  .viewer span svg {
    stroke: #fff;
  }
`;

export default Card;
