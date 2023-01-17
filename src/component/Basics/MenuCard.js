import React from 'react'

const MenuCard = ({ menuData }) => {
   // console.log(menuData);

  return (
    <>
    <section className="main-card-container">
    {menuData.map((curElem) => {

   const {id, name, category, image, description} = curElem; 
        return (
            <>
    <div className="card-container" key={id}>
    <div className="card">
    <div className="card-body">
        <div className="card-number">{id}</div>
        <div className="card-category">{category}</div>
        <div className="card-title">{name}</div> <br></br>
        <div className="card-description">
       {description} 
        </div>
        <div className="card-read">READ</div>
    </div>
    <img src={image} alt="images" className="card-media" /> 
    <div className="card-order">Order Now</div> <br></br>
    <div className="line-1"></div>
    </div>
    </div>
    </>
        );
    })};
    </section>
  </>
  );
};

export default MenuCard;