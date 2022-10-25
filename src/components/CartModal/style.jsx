import styled from 'styled-components'


export const Container = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;

  background-color: black;
  color: white;

  .item-cart{

    width: 150px;
    border: 1px solid var(--primary-color);
    margin: 2rem;



    .item {
      width: 100%;
    }


  }



  .total {
      display: flex;
      justify-content: flex-end;
      margin-right: 5rem;
    }

  button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  background-color: var(--primary-color);
  border-radius: 10px;
  transition: filter 0.3s;



  &:hover{
      filter: brightness(0.7);
    }
  }


`
