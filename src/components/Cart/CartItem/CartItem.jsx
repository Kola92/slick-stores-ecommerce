import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFrmCart }) => {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardMedia
          image={item.image.url}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" style={{ fontSize: "2.08rem" }}>
            {item.name}
          </Typography>
          <Typography variant="h5" style={{ lineHeight: "2" }}>
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => onRemoveFrmCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
