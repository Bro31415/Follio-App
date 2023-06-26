import './styles/Style.css'
import React, { useState } from 'react'

function Cards(){
    return (
        <div className="single-card">
            <img className="card-img"
                src="https://images-platform.99static.com/a4hHM4ScRkZwmW-lg9J_HcPXEBk=/0x0:1349x1349/500x500/top/smart/99designs-contests-attachments/67/67507/attachment_67507620"
                alt=""/>
                <h3>Product Packaging</h3>
            <div className="profile">
                <div className="user">
                    <img className="user-img"
                        src="https://image.shutterstock.com/mosaic_250/301519563/640011838/stock-photo-handsome-unshaven-young-dark-skinned-male-laughing-out-loud-at-funny-meme-he-found-on-internet-640011838.jpg"
                        alt=""/>
                    <h1 className="user-username">CungCaiLin</h1>
                </div>
                <div className="user-stats">
                    <a href=""><i className="fa-solid fa-heart"></i></a>
                    <label htmlFor="fa-heart">19K</label>

                    <i className="fa-sharp fa-solid fa-eye"></i>
                    <label htmlFor="fa-eye">50K</label>
                </div>
            </div>
        </div>
    )
}

export default Cards