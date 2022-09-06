import adventure from "./adventure.jpg";
import experience from "./experience.jpg";
import restaurant from "./restaurant.jpg";
import stay from "./stay.jpg";
import CategoryItem from "./CategoryItem";
const CategoryList = () => {
  const categories = [
    {
      categoryName: "Stays",
      description: "Homes, Boutique & more",
      image: stay,
    },
    {
      categoryName: "Experiences",
      description: "Activities hosted by locals",
      image: experience,
    },
    {
      categoryName: "Adventures",
      description: "Hosted trips including lodging",
      image: adventure,
    },
    {
      categoryName: "Restaurants",
      description: "Popular spots to eat & drink",
      image: restaurant,
    },
  ];
  return (
    <div className="container pt-4">
      <div className="row">
        {categories.map((category, i) => (
          <CategoryItem key={i} category={category} title="my title">
            <img
              style={{ height: 200, objectFit: "cover" }}
              src={category.image}
              className="card-img-top"
              alt="..."
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
