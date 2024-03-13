import React from 'react'
import './Header.css';
import amzLogo from '../src/images/amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
   const [{basket},dispatch] = useStateValue();


  return (
    <div className='header'>   

             <Link to="/">
                <img className='headerlogo' src={amzLogo}/>  
              </Link>        
        
        <div className='header_delivery'>
          <span className='header_deliverloc'>Deliver to</span>
            <div>
            <LocationOnIcon className='header_location'/>
            <span className='header_india'>India</span>
            </div>
        </div>

        <div className='headersearch'>
          <input className='header_searchinput' type="text"/>
          <SearchIcon className="header_searchIcon"/>
            

        </div>

        <div className='header_nav'>
          <Link to="/login">
          <div className='header_option'>
            <span className='header_hello'>
               Hello User

            </span>
            <span className='header_sign'>
              Sign in
            </span>
          </div>
          </Link>
          <div className='header_option'>
            <span className='header_return'>
                  Returns
            </span>
            <span className='header_order'>
                  & Orders

            </span>
            
          </div>


          <div className='header_option'>
            <span className="header_yours">
                 Yours
            </span>
            <span className='header_prime'>
                prime
            </span>
            
          </div>
         <Link to="/Checkout">
          <div className="header_OptionBasket">
            <ShoppingBasketIcon />
           
            <span className='header_basketCount'> {basket?.length}</span>

          </div>
          </Link>
          
        </div>





    </div>
    


  )
}

export default Header