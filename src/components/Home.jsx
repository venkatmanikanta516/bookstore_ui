import React from 'react'

function Home() {

    const items = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFksW3K__5YTx21rCrZ_mLBISaGrLhfQg9g&s', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IDedXDPGVi2s7la2Lv5MFURHLMy49fbUgA&s',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZBWXUFYSEz3ZFW7Fa7wtzKdtMgcPqNpWvQ&s'];
  return (
    <div class ="container row "> 
    {items.map((item,index) => (
        <div class="card col-md-6"  style={{ width: '18rem', margin:"10px"}}>
  <img src={item} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
))
    }
    
</div>

 )
}

export default Home
