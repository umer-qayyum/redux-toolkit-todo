import React from 'react'
import styled from 'styled-components';
import { deleteUsers } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux';
const DeleteAllUser = () => {
    const dispatch=useDispatch();
    const deleteAll=()=>{
        dispatch(deleteUsers())
    }
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={()=>deleteAll()}>Delete</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 .clear-btn{
    margin-top:10px;
    text-transform:capitalize;
    background-color:#db338a;
 }
  }
`;

export default DeleteAllUser
