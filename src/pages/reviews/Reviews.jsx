import "./reviews.scss";
import { useQuery } from "@tanstack/react-query";


const Reviews = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="right">
                    <h1>register</h1>
                    <div>
                        <input type="text" placeholder="username" />
                        <h1></h1>
                    </div>
                    <div>
                        <input type="password" placeholder="password" />
                        <h1></h1>
                    </div>
                    <div>
                        <input type="password" placeholder="confirm password" />
                        <h1></h1>
                    </div>
                    <div>
                        <button className = "button">register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reviews
