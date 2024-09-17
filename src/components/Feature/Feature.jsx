import PropTypes from "prop-types";
import { GoCheckCircleFill } from "react-icons/go";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"> 
                <GoCheckCircleFill className="text-green-500 mr-4"></GoCheckCircleFill>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;