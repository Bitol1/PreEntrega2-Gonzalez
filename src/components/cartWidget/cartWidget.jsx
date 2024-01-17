import React from "react";


const CartWidget = ({notificationCount, onClick}) => {
    return (
    <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onClick}>
                <div className="d-flex align-items-center">
                    <i className="bi bi-cart-fill me-2"></i>
                    <span>Carrito</span>
                    {notificationCount >= 0 && (
                        <span className="badge bg-danger ms-2">{notificationCount}</span>
                    )}
                </div>
            </button>
    </li>
    );
};

export default CartWidget;