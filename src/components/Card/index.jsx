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

const pizzaDb = pizzasData.pizzas;

export const CardItem = () => {
  const classes = useStyles()

  return (

    <>
    {pizzaDb.map(pizza => {
      return (
        <Card className={classes.card}>
        <CardHeader
          name={pizza.name}
          title={pizza.name}
        />
        <CardMedia
          className={classes.media}
          image={pizza.image}
          name={pizza.name}
        />
        <CardContent>
          <Typography className={classes.cardContent}   variant="body2" color="textSecondary" component="p">
            {pizza.ingredients}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton className={classes.cardContent} aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Button className={classes.buttonCard} variant="contained"  href="#contained-buttons">
          <strong>{pizza.price}</strong>
        </Button>
        </CardActions>

      </Card>

      )
    })}


    </>
  )
}
