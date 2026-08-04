
import React from "react";
import "../css/Branch.css";



const branches = [
  {
    city: "Agra",
    address:
      "Ukharra road, near Silver Line School, India ATM, Sanjay Nagar, Rajpur Chungi, 1st floor, 282001",
    lat: 27.1767,
    lng: 78.0081,
  },
  {
    city: "Meerut",
    address: "Kankar khera Meerut city-250002",
    lat: 28.9845,
    lng: 77.7064,
  },
  {
    city: "Mathura",
    address: "Ground Floor, Near Chandrapuri Colony, Bharatpur Mathura Road, Narholi Chauraha, Mauza Birjapur Undrun, Shriji Shakuntala colony, Tehsil District Mathura, Uttar Pradesh - 281001",
    lat: 27.4924,
    lng: 77.6737,
  },
  {
    city: "PALWAL",
    address: "Second Floor, Behind District Jail, Gautam Market, Civil Lines, Palwal, Haryana-121102.",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "Agra",
    address: "Ukharra road near silver line school India ATM Sanjay nagar rajpur chungi 1st floor",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "Firozabad",
    address: "Tapa Kalan Painth, Jalesar Road, Distt. Firozabad - 283203",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "Gajraula",
    address: "Near faazalpur fatak Mandi road bandhan Bank ke pass Gajraula, Amroha Uttar Pradesh",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "Jhunjhunu",
    address: "Example Address here",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "HAPUR",
    address: "Awash vikash colony meerut road hapur",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "BHADRAK",
    address: "PLOT NO -500/4397 IN KHATA NO 821/4628,AT -PURUSOTTAM NAGAR, SAMRAIPUR BHADRAK,ODISHA-756100",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "Bhubaneswar",
    address: "Plot No. 21/361, 3rd Floor, Raghunath Pur, Nuagaon Road, Behind Indian Oil Petrol Pump, Lingipur, Bhubaneswar, Dist. Khurdha, Odisha, PIN-751002",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "DASARATHPUR",
    address: "AT/PO. DASARATHPUR,NEAR POST OFFICE,JAIPUR ,ODISHA -755006",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "DHUSURI",
    address: "PLOT NO.609/2653/2654 IN KHATA NO .593/333,AT-PATRISAHI ,DHUSURI ,TEH-DHAMANAGAR,BHADRAK ,ODISHA-756119",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "SALEPUR",
    address: "PLOT NO.22 IN KHATA NO. 835/334, BALISAHI, SALEPUR, PO- SALIPUR, DIST-CUTTACK, ODISHA-754202",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "KENDRAPARA",
    address: "Plot No. 1419/4653, First Floor, At-Garapur, Block-Kendrapara, Dist-Kendrapara, Odisha-754211",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "KHORDA",
    address: "At-Nandasahi, Near Durga Mandap, Old Fire Station Square, Khorda, Odisha-751012",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "MOTTO",
    address: "2nd Floor, Chasakhanda, Motto, Chandabali, Bhadrak, Odisha-756132",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "TIHIDI",
    address: "Rath Complex, Adjecent to Reliance Smart Point, Adjacent to Indian Oil Petrol Pump, Tihidi, Dist- Bhadrak, Odisha, PIN-756130",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "PURI",
    address: "JAGSNNATH COLONY,KUMUTIPATANA,BALUKHANDA,PURI STATION ROAD,PURI,752002,ODISHA",
    lat: 28.1289,
    lng: 75.3995,
  },
   {
    city: "JAGATSINGHPUR",
    address: "At-Hariharapur, PO/PS. Jagatsinghpur, D- Jagatsinghpur, Odisha - 754103",
    lat: 28.1289,
    lng: 75.3995,
  },
   
];

const Branch = () => {
  const openInMaps = (lat, lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="branch-container">
      <h2 className="branch-title">
        <span className="blue-text">Our Branch</span>{" "}
        <span className="orange-text">Locations</span>
      </h2>

      <div className="branch-list">
        {branches.map((branch, index) => (
          <div key={index} className="branch-card">
            <h3 className="branch-city">{branch.city}</h3>
            <p className="branch-address">{branch.address}</p>
            <button
              className="map-btn"
              onClick={() => openInMaps(branch.lat, branch.lng)}
            >
              View on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branch;


