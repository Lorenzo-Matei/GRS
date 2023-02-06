import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardBody, CardImgOverlay } from "shards-react";
import "./categories-directory.styles.scss";

const cloudFrontMiscImages = "https://dem6epkjrbcxz.cloudfront.net/misc/";

function CategoriesDirectory() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search); // if url is /search/?category=shirts then searches for shirts
  const category = searchParams.get("category") || "all"; //returns items in that category, otherwise return null or all items.
  const subCategory = searchParams.get("subCategory") || "all";
  const microCategory = searchParams.get("microCategory") || "all";

  const getFilterURL = (filter) => {
    const filterCategory = filter.category || category;

    return `/search?category=${encodeURIComponent(
      filterCategory
    )}&subCategory=all&microCategory=all&query=all&price=all&rating=all&order=all&page=1`;
  };

  const categories = [
    {
      id: 1,
      title: "Cooking",
      imageUrl: cloudFrontMiscImages + "cooking-category.jpg",
      //
    },
    {
      id: 2,
      title: "Refrigeration",
      imageUrl: cloudFrontMiscImages + "refrigerator-category.jpg",
      //
    },
    {
      id: 3,
      title: "Food Preparation",
      imageUrl: cloudFrontMiscImages + "foodprep-category.jpg",
      //
    },
    {
      id: 4,
      title: "Beverage, Food Displays & Warmers",
      imageUrl: cloudFrontMiscImages + "foodwarmers-category.jpg",
      //
    },
    {
      id: 5,
      title: "Warewashing, Sinks & Plumbing",
      imageUrl: cloudFrontMiscImages + "warewashing-category.jpg",
      //
    },
    {
      id: 6,
      title: "Tables, Shelves & Furniture",
      imageUrl: cloudFrontMiscImages + "tablesfurtniture-category.jpg",
    },
    {
      id: 7,
      title: "Janitorial Chemicals",
      imageUrl: cloudFrontMiscImages + "janitorialchemicals-category.jpg",
    },
    {
      id: 8,
      title: "Clothing",
      imageUrl: cloudFrontMiscImages + "clothing-category.jpg",
      //
    },
    {
      id: 9,
      title: "Tabletop & Service",
      imageUrl: cloudFrontMiscImages + "tabletopservice-category.jpg",
      //
    },
    {
      id: 10,
      title: "Smallwares",
      imageUrl: cloudFrontMiscImages + "smallwares-category.jpg",
      //
    },
  ];

  const CategoryCard = (props) => {
    return (
      <Link
        className="category-card"
        to={getFilterURL({
          category: props.title,
        })}
      >
        <Card className="category-card">
          <CardImgOverlay />

          <img className="category-image" src={props.imageURL}></img>

          <CardBody className="category-cardbody">
            <h6 className="category-card-title"> {props.title}</h6>
          </CardBody>
        </Card>
      </Link>
    );
  };

  function categoryCards(categories) {
    return categories.map((category) => (
      // <Link
      //   to={getFilterURL({
      //     category: category.title,
      //   })}
      // >
      <CategoryCard
        key={category.id}
        title={category.title}
        imageURL={category.imageUrl}
      />
      //</Link>
    ));
  }

  return (
    <div className="directory-categories-container">
      <Card className="category-title-card">
        <CardBody className="category-section-title">
          <h4 class="card-title" className="card-title-text">
            Shop By Category
          </h4>
        </CardBody>
      </Card>

      <div className="category-cards-container">
        {categoryCards(categories)}
      </div>
    </div>
  );
}

export default CategoriesDirectory;
