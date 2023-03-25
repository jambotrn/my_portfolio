import { LazyLoadImage } from "react-lazy-load-image-component";
//import PlaceholderImage from "../../public/project-img/img-skeleton2.jpg";

//import image from './img-skeleton2.jpg';
function Work(){
    return(

        <div className="container-fluid bottom-speace work-cont" id="letest-work-of-skamirul">
        <div className="row work-r" >
        <h4 className="heading" >   &#10094;  &nbsp; <span className="heading-span">My Letest Work </span> &nbsp; &#10095; </h4>
        <div className="col-md-3 work-div">
            <div className="card work-card" >
            <LazyLoadImage src={'project-img/skamirul-magicjob-img-0.png'}
            className="img-fluid"
            placeholderSrc={'project-img/img-skeleton2.png'}
            alt="Image Alt"
            />

            <div className="card-body">
                <h4 className="card-title">Magic Job</h4>
                <p className="card-text">An online job portal website</p>
                <a href="projects/magic-job" className="btn btn-primary">See Portfolio</a>
            </div>
            </div>
        </div>
        <div className="col-md-3 work-div" >
            <div className="card work-card" >
            <LazyLoadImage src={'project-img/skamirul-codingblog-project-img-1.png'}
            className="img-fluid"
            placeholderSrc={'project-img/img-skeleton2.png'}
            alt="Image Alt"
            />

            <div className="card-body">
                <h4 className="card-title">Coding Blog</h4>
                <p className="card-text">A Computer Programe Bloging website</p>
                <a href="projects/coding-blog" className="btn btn-primary">See Portfolio</a>
            </div>
            </div>
        </div>
        <div className="col-md-3 work-div" >
            <div className="card work-card" >
            <LazyLoadImage src={'project-img/skamirul-snehainter-1.png'}
            className="img-fluid"
            placeholderSrc={'project-img/img-skeleton2.png'}
            alt="Image Alt"
            />
            <div className="card-body">
                <h4 className="card-title">Sneha Intercontinental</h4>
                <p className="card-text">Ecommarce website</p>
                <a href="project/sneha-intercontinental" className="btn btn-primary">See Portfolio</a>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Work