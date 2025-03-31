import { Link } from "react-router-dom";
import house1 from '../assets/images/house1.jpg';
import house2 from '../assets/images/house2.jpg';
import house3 from '../assets/images/house3.jpg';
import '../styles/PropertyStyles.css';

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$2,500,000",
    image: house1, // Replace with actual image URL
    description: "A stunning villa with a breathtaking view of the city.",
  },
  {
    id: 2,
    title: "Cozy Apartment in New York",
    price: "$850,000",
    image: house2,
    description: "A modern apartment in the heart of Manhattan.",
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    price: "$1,750,000",
    image: house3,
    description: "A beautiful beachfront property with private access to the ocean.",
  },
];

function PropertyListings() {
  return (
    <div className="container text-center mt-4"> {/* Ensures full centering */}
      <h2 className="mb-4">Property Listings</h2>
      <div className="row justify-content-center"> {/* Centers grid */}
        {properties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 shadow-lg">
              <img src={property.image} className="property-image card-img-top" alt={property.title} />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text"><strong>Price:</strong> {property.price}</p>
                <Link to={`/property/${property.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListings;

{/* this is where i am gonna input all the data about the propeties
  replace url with property image Urls then change the description  */ }