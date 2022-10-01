import react from "react";
const Modal=()=>{
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close"><i class="fas fa-times"></i></button>
                <div className="inner-box">
                    <img src="./images/bg3.jpg"  alt=""  />
                    <div className="info">
                        <h1> ReactJS by Ashu - latest Web Application with React </h1>
                        <h3>Rohit Rakioe</h3>
                        <h4>Rocket Publishing Ltd<span>2020-08-27</span></h4><br/>
                        <a href ="#"><button>More</button></a>
                    </div>
                </div>
                <h4 className="description"> get more knowledge get more job, you aspire becoming more tricks and power of using ReactJs</h4>
            </div>
        </div>
        </>
    )
}
export default Modal;