import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
  data: any;
}
export const Categories = ({ data }: Props) => {
  return (
    <div>
      {data.map((category: Category) => (
        <div key={category.id} className="flex flex-col">
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};
