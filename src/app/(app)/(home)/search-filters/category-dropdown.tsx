import { Button } from "@/components/ui/button";

interface Props {
  category: any;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  return <Button variant="link">{category.name}</Button>;
};
