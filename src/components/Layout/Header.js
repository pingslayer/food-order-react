import { Fragment } from "react";

//components
import HeaderCartButton from "./HeaderCartButton";
//css
import classes from "./Header.module.css";
//images
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Day-Area Continental Restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
