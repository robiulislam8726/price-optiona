import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-300 rounded-lg p-4 flex flex-col text-red-600">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold"> {price}</span>
                <span className="text-3xl"> /mon</span>
            </h2>
            <h4 className="text-4xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-600 w-full py-4 font-extrabold rounded-lg hover:bg-green-900 text-white">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;