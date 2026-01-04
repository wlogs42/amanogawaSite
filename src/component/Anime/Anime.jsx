import Cart from '../Cart/Cart';
import './Anime.css';
import tatsuki from '../../assets/tatsuki_fudjimoto_17_26.jpeg';
import porce from '../../assets/this_porce.jpeg';


const Anime = () => {


    return (
        <div className="anime-page">
            <div className='anime-function'>
                <button className='style-button-anime'>
                    <div className='button-search-anime-div'>
                        <h2>Search</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        
                    </div>
                </button>
                <button className='style-button-anime'>
                    <div className='button-search-anime-div'>
                        <h2>Search</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        
                    </div>
                </button>
                <button className='style-button-anime'>
                    <div className='button-search-anime-div'>
                        <h2>Search</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        
                    </div>
                </button>
                <button className='style-button-anime'>
                    <div className='button-search-anime-div'>
                        <h2>Search</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        
                    </div>
                </button>
                <button className='style-button-anime'>
                    <div className='button-search-anime-div'>
                        <h2>Search</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        
                    </div>
                </button>
            </div>


            <div className='anime-carts'>
                                <Cart id={1} imgCart={tatsuki} title="tatsiki-fidjimoto-17-16" seriesCount={8} whatched={122882} year={2025} sisonCount={1} />
                <Cart id={2} imgCart={porce} title="ця порцелянова лялечка" seriesCount={12} whatched={543882} year={2025} sisonCount={2} />
            </div>

        </div>
    )
}

export default Anime;