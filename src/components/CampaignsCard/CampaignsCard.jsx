import "./campaignsCard.css";

const CampaignsCard = ({ image, title, date }) => {
    return (
        <div className="campaigns_card">
            <div className="campaigns_card_top">
                <img src={image} alt={`${image}`} />
            </div>
            <div className="campaigns_card_bottom">
                <h4>{title}</h4>
                <p>⏱ {date}</p>
            </div>
        </div>
    );
};

export default CampaignsCard;