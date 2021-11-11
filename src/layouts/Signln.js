import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

import avatar from '../images/avatar.jpg';

export default function Signln({signOut}) {
    return (
        <div>
           <Menu.Item>
               <Image avatar spaced="right" src={avatar}/>
           <Dropdown pointing="top left" text="Engin">
               <Dropdown.Menu>
                   <Dropdown.Item text="Bilgilerim" icon="info"/> 
                   <Dropdown.Item onClick={signOut} text="Cikis Yap" icon="sign-out"/> 

               </Dropdown.Menu>
           </Dropdown>

           </Menu.Item>
        </div>
    )
}
