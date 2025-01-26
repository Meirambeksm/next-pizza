import { Container, Filters, Title, TopBar } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { ProductsGroupList } from "@/shared/components/shared/products-group-list";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Filters*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Products list*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// 0. Start here 12:56:00
// 1. Go to cart.ts in store folder of shared

// Usefull links:
// https://www.youtube.com/watch?v=GUwizGbY4cc&t=23767s
// figma: https://www.figma.com/design/cYz4fOSK74EJoqHxoNr1hT/Next-Pizza?node-id=0-1&node-type=canvas&t=OhzwEM0YW7g8Z8dL-0

/*
INITIALIZING:
1. Open your project directory in a terminal and run: git init. 
   This initializes a new Git repo in your project
2. Add project files to git and run: git add . 
   This stages all your project files for the first commit
3. Commit your changes and run: git commit -m "Initial commit"
   This commits your changes
4. Create a repo on Github (do not initialize with a Readmen)
5. Link your local repo to Github and run the following:
   git remote add origin https://github.com/Meirambeksm/pizza.git
   git branch -M main
   git push -u origin main
*/

/*
Push Future Changes:
git add .
git commit -m "Describe your changes"
git push
*/

/*
git clone https://github.com/Meirambeksm/pizza.git
*/

/*
1. Keep the current version (safe). Create a new branch before checking out the old commit: git branch backup-current
   This creates a backup-current branch pointing to the latest commit.
2. Find the Commit Hash. Run to see your commit history: git log --oneline
3. Check out the commit (Detached head). To temporarily revert to a previous commit (detached head), run: git checkout <commit-hash>
4. You can switch back to this branch (latest version): git checkout backup-current
5. Return to the main branch. After inspecting the old version , you can return to the latest commit on your main branch: git checkout main
*/
