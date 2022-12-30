import { useState } from 'react';
// import { Component } from 'react';
import data from './data.js';
import emptyData from './emptyData.js';

function Items() {
    const [bars, setBars] = useState(data);
    // const [order, setOrder] = useState(emptyData);


    const addToOrder = (el) => {
        // console.log(id)
        // let orderItem = bars.filter(bar => bar.id === id);
        // console.log(orderItem)
        // let orderArray = order;
        // console.log(orderArray)
        // orderArray.push(orderItem)
        // console.log(orderArray)
        // setOrder(orderArray);
        // console.log(setOrder)

        let order = emptyData;
        order.push(el);
        // setOrder(order);
        console.log(order)
    }

    return (
        <div className="item-container">            
            {bars.map(el => {
                return (
                <div className='item' key={ el.id }>
                    <img src={ el.image } alt="Chocolate" />
                    <h2>{ el.title }</h2>
                    <p>{ el.desc }</p>
                    <div className='price-row'>
                        <p>${ el.price }</p>
                        <button onClick={ () => addToOrder(el) }>Add</button>
                    </div>
                </div>);
            })}
        </div>
    );
}
// export default Items;

// export default class Items extends Component {
//     constructor() {
//         super();

//         this.state = {
//             bar: data,
//             order: []
//         }
//     }

//     addToOrder(el) {
//         console.log(this.state.bar)
//         console.log(el)
//         let orderArray = this.state.order;
//         orderArray.push(el);
//         this.setState({ order: orderArray })
//         console.log(this.state.order)
//     }

//     render() {
//         return (
//             <div className="item-container">            
//                 {this.state.bar.map(el => {
//                     return (
//                     <div className='item' key={ el.id }>
//                         <img src={ el.image } alt="Chocolate" />
//                         <h2>{ el.title }</h2>
//                         <p>{ el.desc }</p>
//                         <div className='price-row'>
//                             <p>${ el.price }</p>
//                             <button onClick={ () => this.addToOrder(el) }>Add</button>
//                         </div>
//                     </div>);
//                 })}
//             </div>
//         );
//     }
// }
