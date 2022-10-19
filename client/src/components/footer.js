const footer = () => {
    return (
        <div className='footer_container'>
            <div className='madeBy'>
                <p>Made by <span className='name'>Mantas Santockis</span></p>

            </div>
            <p className='joke'>(A Joke of Apple products.)</p>

            <div className='twitter'>
                <img src='https://cdn-icons-png.flaticon.com/512/152/152809.png?w=360' className='twitter_logo' alt='twitterLogo' />
                <span>Mantas.san@gmail.com</span>
            </div>

            <div className='footer_text'>
                <p>If this made you chuckle, sign up to get an email when we make other cool stuff.</p>
            </div>


            <div className='email_input'>
                <input type='email' placeholder='Your Email' />
                <button type='submit'>Submit</button>

            </div>

        </div>
    )
}


export default footer