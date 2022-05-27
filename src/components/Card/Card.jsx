import './card.css' 

function Card({image,title,text}) {


    return (
        <>
            <div className="banner_box">
                <div className="box_img">
                    <img src={image} alt="img" />
                </div>
                <div className="box_text">
                    <h6>{title}</h6>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card