import './styles/Style.css'

function JobsCard(){
    return (
        <a href="">
            <div className="job-table">
                <img src="https://image.shutterstock.com/mosaic_250/301519563/640011838/stock-photo-handsome-unshaven-young-dark-skinned-male-laughing-out-loud-at-funny-meme-he-found-on-internet-640011838.jpg" alt=""/>
                <div className="job-desc">
                    <h3>Web Developer</h3>
                    <p>Google | Full-Time | Remote Anywhere</p>
                </div>
                <div className="job-info">
                    <p>Jakarta, Indonesia</p>
                    <p>Posted 12 days ago</p>
                </div>
            </div>
        </a>
    )
}

export default JobsCard