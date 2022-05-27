
import CampaignsCard from '../CampaignsCard/CampaignsCard';
import './campaigns.css'
import frame48 from '../../image/Frame48.png';
import frame49 from '../../image/Frame49.png';
import frame50 from '../../image/Frame50.png';

function Campaigns() {

    const campaigns = [
        {
            id: 1,
            title: 'Partnyorlarımızda Novruz bayramı kampaniyası',
            image: frame48,
            date: '18.07.2022'
        },
        {
            id: 2,
            title: 'City finance-dan yaz sürprizləri',
            image: frame49,
            date: '12.12.2022'

        },
        {
            id: 3,
            title: 'Lombard krediti üzrə Kampaniya',
            image: frame50,
            date: '31.05.2022'
        }
    ]

    return (
        <>
            <section className='campaigns_section'>
                <div className='container'>
                    <h6>Kampaniyalar</h6>
                    <div className='campaigns_box'>
                        {
                            campaigns.map((campaigns, key) => (
                                <CampaignsCard key={key} title={campaigns.title} image={campaigns.image} date={campaigns.date} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Campaigns;