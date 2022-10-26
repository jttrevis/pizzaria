import styled from 'styled-components'


export const Container = styled.div`
  display: block;
  text-align: center;

  margin: 0 auto;
  max-height: 70vh;
  background-color: black;
  color: white;

  .item-cart{
    margin: 1rem;
    width: 150px;
    border: 1px solid var(--primary-color);

  }

  img {
    display: flex;

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
