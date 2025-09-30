import "./service.css"

const Service = () => {
        return(

                <div className="service-container">

                    <ul className="service-list">

                        <li className="service-item">
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src="assets/images/service-1.png" style={{width:42, height:22.1875}} loading="lazy" alt="Service icon"/>
                                </div>

                                <div>
                                    <h3 className="h4 card-title">FREE SHIPPING</h3>

                                    <p className="card-text">
                                        All orders over <span>$150</span>
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src="assets/images/service-2.png" style={{width:42, height:34.1719}} loading="lazy" alt="Service icon"/>
                                </div>

                                <div>
                                    <h3 className="h4 card-title">QUICK PAYMENT</h3>

                                    <p className="card-text">
                                        100% secure payment
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src="assets/images/service-3.png" style={{width:42, height:42}} loading="lazy" alt="Service icon"/>
                                </div>

                                <div>
                                    <h3 className="h4 card-title">FREE RETURNS</h3>

                                    <p className="card-text">
                                        Money back in 30 days
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-card">

                                <div className="card-icon">
                                    <img src="assets/images/service-4.png" style={{ width:42, height:42}} loading="lazy" alt="Service icon"/>
                                </div>

                                <div>
                                    <h3 className="h4 card-title">24/7 SUPPORT</h3>

                                    <p className="card-text">
                                        Get Quick Support
                                    </p>
                                </div>

                            </div>
                        </li>

                    </ul>

                </div>
            
                

        )
}
export default Service;