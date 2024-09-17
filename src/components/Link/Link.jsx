import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <li className="mr-5 hover:bg-green-500 px-6" key={route.id}>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route : PropTypes.object
}
export default Link;