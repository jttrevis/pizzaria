import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '@material-ui/core/Button'
import amber from '@material-ui/core/colors/amber'

import  pizzasData  from '../../pizzasData.json'
import { useStateContext } from '../../context/StateContext'






const useStyles = makeStyles((theme) => ({
  card: {

    maxWidth: 345,
    background: 'black',
    color: 'white',
    border: '1px solid gold',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {

    color: 'white'
  },

  buttonCard : {
    marginBottom: '10px',
    background: amber[700],
    color: 'black',
    width: '80%'
  }

}))

const pizzaDb = pizzasData.pizzas
const sidesDb = pizzasData.sides
const drinksDb = pizzasData.drinks

export const PizzaCard = () => {

  const { qty, onAdd } = useStateContext()

  const classes = useStyles()

  return (


    <>
    {pizzaDb.map((item, index) => {
      return (
        <Card
        item={item}
        key={index}
        className={classes.card}
        >

          <CardHeader
            name={item.name}
            title={item.name}
          />
          <CardMedia
            className={classes.media}
            image={item.image}
            name={item.name}
          />
          <CardContent>
            <Typography
            className={classes.cardContent}
            variant="body2"
            color="textSecondary"
            component="p">
              {item.ingredients}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton
            className={classes.cardContent}
            aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>

            <Button
            className={classes.buttonCard}
            variant="contained"
            href="#contained-buttons"
            onClick={() => onAdd(item, qty)}
            >
            <strong>£{item.price}</strong>
          </Button>
          </CardActions>

        </Card>

      )
    })}


    </>
  )
}

export const SidesCard = () => {
  const classes = useStyles()

  const { decQyt, incQty, qty, onAdd } = useStateContext()






  return (

    <>
    {sidesDb.map((item, index) => {
      return (
        <Card  key={index}  item={item} className={classes.card}>
        <CardHeader
          name={item.name}
          title={item.name}
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          name={item.name}
        />
        <CardContent>
          <Typography className={classes.cardContent}   variant="body2" color="textSecondary" component="p">
            {item.ingredients}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton className={classes.cardContent} aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Button onClick={() => onAdd(item, qty)} className={classes.buttonCard} variant="contained"  href="#contained-buttons">
          <strong>£{item.price}</strong>
        </Button>
        </CardActions>

      </Card>

      )
    })}


    </>
  )
}


export const DrinksCard = () => {
  const classes = useStyles()
  const { decQyt, incQty, qty, onAdd } = useStateContext()

  return (

    <>
    {drinksDb.map(item => {
      return (
        <Card  key={item.id} className={classes.card}>
        <CardHeader
          name={item.name}
          title={item.name}
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          name={item.name}
        />
        <CardContent>
          <Typography className={classes.cardContent}   variant="body2" color="textSecondary" component="p">
            {item.ingredients}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton className={classes.cardContent} aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Button onClick={() => onAdd(item, qty)} className={classes.buttonCard} variant="contained"  href="#contained-buttons">
          <strong>£{item.price}</strong>
        </Button>
        </CardActions>

      </Card>

      )
    })}


    </>
  )
}