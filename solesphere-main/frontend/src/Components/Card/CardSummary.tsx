import React from "react";
import './CardSummary.css';
import { useNavigate } from "react-router";

interface CardSummaryProps {
    subTotal?: number;
    grandTotal?: number;
}

function CardSummary(props: CardSummaryProps) {
    const navigate = useNavigate();

    const navigateCheckout = () => {
        localStorage.setItem("cart", JSON.stringify([]));
        navigate('/checkout');
    };

    let subTotal = props.subTotal ? props.subTotal.toFixed(2) : 0;
    let grandTotal = props.grandTotal ? props.grandTotal.toFixed(2) : 0;

    return (
        <>
            <div className="summary-container ">
                <div className="summary-item-container second-grid">
                    <div className="grid-items text-aligns">
                        <p style={{ fontWeight: "bold", fontSize: "21px" }}>Subtotal</p>
                    </div>
                    <div className="grid-items text-aligns-price">
                        <p>${subTotal}</p>
                    </div>
                </div>
                <div className="summary-item-container">
                    <div className="grid-items text-aligns">
                        <p style={{ fontWeight: "bold", fontSize: "21px" }}>Grand Total:</p>
                    </div>
                    <div className="grid-items text-aligns-price">
                        <p>${grandTotal}</p>
                    </div>
                </div>
                <div>
                    <a>
                        <button
                            className="btn btn-primary btn-checkout"
                            onClick={navigateCheckout}
                        >
                            Checkout
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default CardSummary;
