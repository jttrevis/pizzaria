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

  .item-container {
    display: flex;
  }

  .quantity {
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 0.25rem;

  }

  .minus {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    border-right: 1px solid var(--primary-color);
    cursor: pointer;
  }
  .plus {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    border-left: 1px solid var(--primary-color);
    cursor: pointer;
  }

  .qty {
    padding-left: 1rem;
    padding-right: 1rem;

  }

  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    background: transparent;
    color: #ce2f2f;
    width: 5rem;
    height: 100%;
    tab-size: 50px;
  }


  .item-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

  }

  .total {
      display: flex;
      justify-content: flex-end;
      margin-right: 5rem;
    }

  .btn-checkout {
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
