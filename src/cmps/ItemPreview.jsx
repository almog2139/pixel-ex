import React from 'react'
import iconMinus from '../assets/imgs/icon-minus.svg'

export function ItemPreview({ item }) {
    const { imgUrl, title, desc } = item
    return (
       
                <div className="item-preview flex  space between align-center">
                    <div className="flex item-img-div">
                        <img src={require(`../assets/imgs/menu-items/${imgUrl}.jpg`).default} />
                        <img src={iconMinus} className="img-minus relative" />
                    </div>
                    <div className="flex column">
                        <p className="item-title">{title}</p>
                        <p className="item-desc">{desc}</p>

                    </div>
                </div>

    )
}
