import { useParams, Link } from "react-router-dom";
import house1 from '../assets/images/house1.jpg';
import house2 from '../assets/images/house2.jpg';
import house3 from '../assets/images/house3.jpg';
import '../styles/PropertyStyles.css';

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$2,500,000",
    image: house1, // Replace with actual image
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

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <h2 className="text-center mt-4">Property not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img src={property.image} className="property-image" alt={property.title} />
        <div className="card-body">
          <h2 className="card-title">{property.title}</h2>
          <p><strong>Price:</strong> {property.price}</p>
          <p>{property.description}</p>
          <Link to="/properties" className="btn btn-primary">
            Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;


/*this is where im gonna input the details of each property */