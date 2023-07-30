import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-img">
                <img src={imgUrl} alt="" />
                <div className="proj-text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}