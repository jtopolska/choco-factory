import { useState } from "react";
import data from './data.js';
import { FaShoppingBasket } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


function HeaderAndItems() {
    const [openBin, setOpenBin] = useState(false);
    const [bars] = useState(data);
    const [order, setOrder] = useState([])

    const addToOrder = (el) => {
        let itemExist = false;
        order.forEach(element => {
            if (element.id === el.id) {
                itemExist = true;
            }
        })
        
        if (!itemExist) {
            let addItem = order;
            addItem.push(el);
            setOrder(addItem);
        }
    }

    const deleteItem = (id) => {
        let editedArray = order.filter(del => del.id !== id);
        setOrder(editedArray);
    }

    const showBinItem = () => {
        let total = order.reduce((sum, current) => sum + Number(current.price), 0);

        return (
            <div>
                {order.map(elem => (
                    <div className="orderItem" key={ elem.id }>
                        <img src={ elem.image } alt="Chocolate" />
                        <div className="orderItem-text">
                            <h2>{ elem.title }</h2>
                            <p>${ elem.price }</p>
                        </div>
                        <FaTrash className="orderItem-trash" onClick={ () => deleteItem(elem.id) }/>
                    </div>
                ))}
                <button className="delete-all" onClick={ () => setOrder([]) }>Delete all</button>
                <p className="total">Total: ${ total.toFixed(2) }</p>
            </div>
        )
    }

    return (
        <>
            <nav>
                <a className="logo" href="./public/index.html">Chocolate Factory</a>
                <a href="#about">About</a>
                <a href="#contacts">Contacts</a>
                <FaShoppingBasket onClick={ () => setOpenBin(!openBin) } className={`btn-bin ${openBin && 'active'}`}/>
                <p className={`${openBin && 'order-quantity'}`}>{ openBin && order.length }</p>
                {openBin && (
                    <div className="bin">
                        {order.length > 0 ? showBinItem() : 'Cart is empty'}
                    </div>
                    )
                }
            </nav>

            <div className="item-container">
                <div className='heading'>
                    <h1>Tired of classic chocolate bars? <br /> Create your own!</h1>
                </div> 
                <h3><sup>&#8727;</sup>First choose one or more types of chocolate</h3>
                {bars.map(el => {
                    return (
                    <div className='item' key={ el.id }>
                        <img src={ el.image } alt="Chocolate" />
                        <h2>{ el.title }</h2>
                        <p>{ el.desc }</p>
                        <div className='price-row'>
                            <p>${ el.price } / 50g</p>
                            <button onClick={ () => addToOrder(el) }>Add</button>
                        </div>
                    </div>);
                })}
            </div>
        </>
    );
    
}
export default HeaderAndItems;
