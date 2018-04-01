import React, { Component } from 'react';
import BDin_Menu from './bd_forms';

export default class App extends Component {
  render() {
    return (
        <div>
          <div className="backgroundSkew">
            <div className="bd-heading">
              <h1>Bottega Diner</h1>
              <div className="bd-subheading">
                Welcome to Our Diner!<br/>Please have a look at our Menu! Each Entree Comes with your choice two Sides.
                <br/> Our Chef's Choice of the week is a Hamburger with Fries, and a Milkshake for $10.
              </div>
              <div className="bdMenu">
                Menu<br/>
                Breakfast - Omelet - $10, Biscuits & Gravy - $12, and Pancakes - $8<br/>
                Lunch - Sandwich - $10, Hamburger - $12, Chicken Tenders - $10<br/>
                Dinner - Pasta - $12, Parmesan Chicken - $12, Roast Beef - $14
              </div>
              <div className="sideMenu">
                Sides<br/>
                Fruit bowl, Steamed Vegetables, Fries, Onion Rings, Salad, Soup, Milkshake, Pudding
              </div>
           </div>
           <BDin_Menu />
        </div>  
      </div>   
    );
  }
}
