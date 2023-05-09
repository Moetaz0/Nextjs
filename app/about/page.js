import Image from 'next/image'
export default function About() { 
 return ( 
<div className="container">
<div className="banner-item-02">
 <div className="text-content">
 <h4>About us</h4>
 <h2>Our company</h2>
 </div>
 </div>
 <div className="row">
 <div className="col-md-12">
 <div>
 <h2>Our Background</h2>
 </div>
 </div>
 <div className="col-md-6">
 <div>
 <Image src="/images/feature-image.jpg" alt="" width="600"
height="300" priority />
 </div>
 </div>
 <div className="col-md-6">
 <div>
 <h4>Who we are &amp; What we do?</h4>
 <div>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
 Sed voluptate nihil eum consectetur similique? 
 Consectetur, quod, incidunt, harum nisi dolores delectus 
reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, 
consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea 
praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis 
quis. 
 </div>
 </div>
 </div>
 </div>
 </div>
 ) 
 }