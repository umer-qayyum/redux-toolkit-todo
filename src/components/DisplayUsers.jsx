import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BiSolidTrashAlt } from "react-icons/bi";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const removMe = (ind) => {
    dispatch(removeUser(ind));
  };
  return (
    <Wrapper>
      <div className="content">
        {data.map((user, id) => {
          return (
            <ul key={id}>
              <li>
                <h3>{user} </h3>{" "}
                <BiSolidTrashAlt
                  className="delete-icon"
                  onClick={() => removMe(id)}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    padding: 10px;
    border: 1px solid grey;
    margin: 5px 0px;
    border-radius: 5px;
  }

  h3 {
    margin: 0;
  }

  .delete-icon {
    font-size: 3.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
    margin: 0 0 0 auto;
  }
`;

export default DisplayUsers;
