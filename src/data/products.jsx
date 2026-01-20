const products = [
  {
    id: "p1",
    title: "Student Microscope (40x - 400x)",
    price: 4500,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/61MstERkLZL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: "p2",
    title: "Test Tube Set (12 pcs)",
    price: 800,
    discountPercent: 15,
    image: "https://m.media-amazon.com/images/I/51Vhn3Or3ML._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p3",
    title: "Glass Beaker 500ml",
    price: 250,
    discountPercent: 5,
    image: "https://m.media-amazon.com/images/I/61y6Pxgu+EL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p4",
    title: "Physics Starter Kit",
    price: 3200,
    discountPercent: 20,
    image: "https://m.media-amazon.com/images/I/81eVBym6wAL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p5",
    title: "Chemistry Starter Kit",
    price: 2100,
    discountPercent: 12,
    image: "https://m.media-amazon.com/images/I/71ON7-0H3tL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p6",
    title: "Digital Thermometer",
    price: 450,
    discountPercent: 8,
    image:
      "https://m.media-amazon.com/images/I/51c7+8cmiSL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p7",
    title: "Bunsen Burner",
    price: 499,
    discountPercent: 44,
    image: "https://m.media-amazon.com/images/I/61VU13k4JlL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "p8",
    title: "Vernier Caliper",
    price: 999,
    discountPercent: 40,
    image: "https://m.media-amazon.com/images/I/61CHTTsoY+L._AC_SR360,240_CB1169409_QL70_.jpg"
  },
  {
    id: "p9",
    title: "0-25mm outside micrometer screw gauge",
    price: 1450,
    discountPercent: 41,
    image: "https://m.media-amazon.com/images/I/41pXoFyJUxL._AC_UL480_FMwebp_QL65_.jpg"
  },
  // Additional products
  {
    id: "p10",
    title: "Lab Safety Goggles",
    price: 299,
    discountPercent: 18,
    image: "https://m.media-amazon.com/images/I/512MPRIKcTL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p11",
    title: "Petri Dish Set (6 pcs)",
    price: 350,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/51UetUr-yGL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p12",
    title: "LabMart Analytical Balance ",
    price: 399,
    discountPercent: 20,
    image: "https://m.media-amazon.com/images/I/31teuhMbBFL._SX466_.jpg" // Example unique image
  },
  {
    id: "p13",
    title: "Precision Weighing Scale",
    price: 1200,
    discountPercent: 25,
    image: "https://m.media-amazon.com/images/I/51WMzZq09cL._AC_UY327_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p14",
    title: "Lab Notebook",
    price: 150,
    discountPercent: 5,
    image: "https://m.media-amazon.com/images/I/71yo8ZKsuaL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p15",
    title: "Graduated Cylinder 100ml",
    price: 220,
    discountPercent: 12,
    image: "https://m.media-amazon.com/images/I/41PnwHqzQNL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p16",
    title: "Lab Timer",
    price: 180,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/61ve10QCzgL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p17",
    title: "Lab Pipette Set",
    price: 320,
    discountPercent: 15,
    image: "https://m.media-amazon.com/images/I/31Sv4tnK3KL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p18",
    title: "Lab Sample Bottles (6 pcs)",
    price: 280,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/51tHuBnpEtL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
  {
    id: "p19",
    title: "Lab Forceps",
    price: 120,
    discountPercent: 8,
    image: "https://m.media-amazon.com/images/I/41vcf7KOyEL._AC_UL480_FMwebp_QL65_.jpg" // Example unique image
  },
   {
    id: "p20",
    title: "AI-Spatula Spoon 8 ",
    price: 599,
    discountPercent: 25,
    image: "https://m.media-amazon.com/images/I/4142Y52-sHL._SY500_.jpg" // Example unique image
  },
  {
    id: "p21",
    title: "Swent Spinal Needle ",
    price: 999,
    discountPercent: 50,
    image: "https://m.media-amazon.com/images/I/515QwGUpDYL._SY500_.jpg" // Example unique image
  }
];
// Example inside ProductsPage
products.map((p) => (
  <div key={p.id}>
    <h3>{p.name}</h3>
    {/* ...existing render... */}
    <button onClick={() => {
      setViewProduct(p); // from App as prop
      setView("viewProduct");
    }}>
      View
    </button>
    <button onClick={() => addToCart(p)}>Add to Cart</button>
  </div>
))

export default products;
