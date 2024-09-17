import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "No contract"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Group fitness classes",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Group fitness classes",
                "Unlimited personal training sessions",
                "Access to pool and sauna",
                "Guest pass"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 119.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Group fitness classes",
                "2 personal training sessions per month",
                "Access to pool and sauna",
                "Family discount"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Discounted group fitness classes",
                "No contract"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl"> Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;