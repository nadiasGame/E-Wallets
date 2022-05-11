export default function Card ({color, chip, logo, number, name, date}){
    return (
        <div>
            <div className="displayed-card" style={{ background:color}}>
                <section className="card-header">
                    <div >
                            {chip}
                    </div> 
                    <div className="vendors-icone">
                            {logo}
                    </div>
                </section>
                <section className="card-number">{number}</section>
                <section className="card-info" >
                    <div>
                        <span className="info-card-label">NAMEHOLDER</span>
                        <p className="info-card-input">{name}</p>
                    </div>
                    <div>
                        <span className="info-card-label">Valid THR</span>
                        <p className="info-card-input">{date}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}