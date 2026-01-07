import './footer.css'


const Footer = () => {
    return(
        <div className='footer'>

            <div className='foot-block section-one'>
                <img className='footer-img' src="https://amanogawa.space/static/media/main_logo.cbd20fb31814b97e5c362476c274812d.svg" alt="" />
                <p className='text-data'>
                    © 
                    2026
                    Український аніме-портал
                </p>
                <button className='button-text-moon-sun' type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill beck-img moon-img" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>
                    <p>на <span>темну</span> сторону</p>
                    <div className='swg-star'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#0063f2" className="bi bi-stars svg-img-star" viewBox="0 0 16 16"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg>
                    </div>
                </button>
            </div>

            <div className='foot-block section-all'>
                <h5 className='h5-size'>Посилання</h5>
                <a href="">На головну</a>
                <a href="">Аніме</a>
                <a href="">Про нас</a>
            </div>      

            <div className='foot-block section-all'>
                <h5 className='h5-size'>Соцмережі</h5>
                <a href="">Dicord</a>
                <a href="">Instagram</a>
                <a href="">Telegram</a>
                <a href="">TikTok</a>
                <a href="">Youtube</a>
            </div>

            <div className='foot-block section-all'>
                <h5 className='h5-size'>Про нас</h5>
                <a href="">Поширені питання</a>
                <a href="">Підтримати</a>
                <a href="">Принципи спільноти</a>
                <a href="">Зв'язатися з нами</a>
            </div>
                
  

        </div>
    )
}

export default Footer