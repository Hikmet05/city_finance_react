import Button from '../Button/Button'
import './sliderCard.css'

function SliderCard({ title, image }) {
    return (
        <>
            <div className='slider_card'>
                <div className='slider_card_img'>
                    <img src={image} alt="img" />
                </div>
                <h3>{title}</h3>
                <div className='slider_text'>
                    <div className='slide_date'>
                        <span>Müddət:</span>
                        <span>1-3 il</span>
                    </div>
 
                    <div className='slide_date'>
                        <span>Valyuta:</span>
                        <span>₼</span>
                    </div>
                </div>

                <Button text='Sifariş et' btn_width='100%' />

            </div>
        </>
    )
}

export default SliderCard