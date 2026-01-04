import './Cart.css';


const Cart = ({ id, imgCart, title, seriesCount, whatched, year, sisonCount }) => {


    return (
        <div className="cart">
            <img className='img-title' src={imgCart} alt={title} />
            <div className='down-info'>
                <p className='title-text'>{title}</p>

                <div className="cart-info">
                    <div className='info-another'>
                        <p>Season {sisonCount}</p>
                        <p>{year}</p>
                    </div>

                    <div className='info'>
                        <p>{seriesCount}/{seriesCount}</p>
                    </div>

                    <div className='info'>
                        <p>{whatched}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart