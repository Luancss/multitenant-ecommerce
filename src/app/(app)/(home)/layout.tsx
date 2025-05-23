import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
import { Category } from "@/payload-types";
import { CustomCategory } from "./types";

interface Props {
  children: React.ReactNode;
}

export default async function ({ children }: Props) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // Populate subscategories'
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of the "depth: 1" we are confident "doc" will be a type if "Category"
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
