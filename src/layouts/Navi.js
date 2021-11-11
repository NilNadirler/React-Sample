import React,{useState}from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import Signln from './Signln'
import SignOut from './SignOut'
import { useSelector } from 'react-redux'


export default function Navi() {


  const {cartItems} = useSelector(state => state.cart)
 const [isAuthanticated, setIsAuthenticated] = useState(true)

   const history=useHistory()

 function handleSignOut(params){
   setIsAuthenticated(false)
   history.push("/")
 }
 function handleSignIn(params){
  setIsAuthenticated(true)
}
    
  return (
        <div>
        <Menu inverted>
               <Container>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'    
        />

        <Menu.Menu position='right'>
       
           {cartItems.length>0&&<CartSummary/>}
           {isAuthanticated? <Signln signOut={handleSignOut} />: <SignOut signIn={handleSignIn}/>
           }


        </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
