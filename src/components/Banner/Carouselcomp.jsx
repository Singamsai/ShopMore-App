import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import banner4 from '../../images/banner4.png'

function Item(props)
{
    return (
        <Paper>
            <img style={{width:"100%", height:"35vh"}} src={props.item.imgsrc} alt=""></img>
        </Paper>
    )
}

const Carouselcomp = () => {
    
    var items = [
        {
            imgsrc: banner1
        },
        {
            imgsrc: banner2
        },
        {
            imgsrc: banner3
        },
        {
            imgsrc: banner4
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Carouselcomp
