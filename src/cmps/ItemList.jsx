
import React, { useCallback, useEffect, useState } from 'react'
import { itemService } from '../services/itemService.js'
import { ItemPreview } from './ItemPreview.jsx'
import patternDivide from '../assets/imgs/pattern-divide.svg'

export default function ItemList() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        setItems(itemService.query())
        return () => {

        }
    }, [])
    console.log('items', items);
    if (!items) return <h1>loading..</h1>
    return (
        <section className="items">
            <div className="items-container flex space-between">
                <div className="flex column">
                    <img src={patternDivide}  className="pattern-divide"/>
                    <p className="title">A few highlights from our menu</p>
                    <p className="desc">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                </div>
                <div className="item-list flex column">
                    {items.map(item => {

                        return <ItemPreview key={item.id} item={item} />;

                    })}

                </div>
            </div>
        </section>
    )
}
