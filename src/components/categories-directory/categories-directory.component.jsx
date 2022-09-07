import { Card, CardBody, CardImgOverlay } from "shards-react";
import "./categories-directory.styles.scss";

const cloudFrontMiscImages = "https://dem6epkjrbcxz.cloudfront.net/misc/";

function CategoriesDirectory() {
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
      <Card className="category-card">
        <CardImgOverlay />

        <img className="category-image" src={props.imageURL}></img>

        <CardBody className="category-cardbody">
          <h6 className="category-card-title"> {props.title}</h6>
        </CardBody>
      </Card>
    );
  };

  function categoryCards(categories) {
    return categories.map((category) => (
      <CategoryCard
        key={category.id}
        title={category.title}
        imageURL={category.imageUrl}
      />
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
