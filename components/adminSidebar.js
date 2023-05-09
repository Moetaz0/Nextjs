"use client" ; 
import React from "react"; 
import { useRouter } from 'next/navigation'; 
import "./style.css"; 
import { Paper, Divider, MenuList, MenuItem, Typography } from
'@mui/material'; 
//https://mui.com/material-ui/material-icons/
//https://htmlcolorcodes.com/fr/
import Person3Icon from '@mui/icons-material/Person3'; 
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'; 
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'; 
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'; 
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'; 
import SettingsIcon from '@mui/icons-material/Settings'; 
const AdminSidebar = () => { 
 const router = useRouter(); 
 
return ( 
 <div className="containerst">
<Paper className="stylepop" >
<MenuList >
<MenuItem >
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>{}}
className="stylediv">
<div>
<Person3Icon sx={{ color: '#1C15F5'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>User Profile</Typography></div>
</div>
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>{}}
className="stylediv">
<div>
<PeopleOutlineIcon sx={{ color: '#FF5733'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>Clients</Typography></div>
</div>
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>router.push('/tableCategories')}
className="stylediv">
<div>
<ArticleOutlinedIcon sx={{ color: '#316610'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>
Categories</Typography></div>
</div>
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>router.push('/tableProducts')}
className="stylediv">
<div>
<ReceiptLongOutlinedIcon sx={{ color: '#991793'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>Products</Typography></div>
</div>
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>{}}
className="stylediv">
<div>
<AssignmentOutlinedIcon sx={{ color: '#FFC300'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>Orders</Typography></div>
</div>
</MenuItem>
<Divider />
<MenuItem>
<div onClick={()=>{router.push('/dashboard')}}
className="stylediv">
<div>
<SettingsIcon sx={{ color: '#831C5D'}}/>
</div>
<div><Typography sx={{ color: 'gray'}}>Settings</Typography></div>
</div>
</MenuItem>
<Divider />
</MenuList>
</Paper>
</div>
); 
}; 
export default AdminSidebar; 
