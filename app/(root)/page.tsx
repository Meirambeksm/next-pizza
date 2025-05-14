import { Container, Filters, Title, TopBar } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared/products-group-list";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizzas";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

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
            <Suspense>
              <Filters />
            </Suspense>
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

// 0. Start here 22:13:35
// 1b. Visit: console.cloud.google.com/apis/dashboard
// 1c. Select a project => New project => Create => Credentials => +Create credentials => OAuth client ID => Configure consent screen => Get started => go to step 1d =>
// 1d. Fill App Information: App name, User support email => Next => External => Next => Email addresses => Next => I agree => Continue => Create => go to step 1e =>
// 1e. Create OAuth client ID => Application type: Web application => Name: Any name => Authorized redirect URIs: Add URI => http://localhost:3000/api/auth/callback/google => Create
// 1f. ClientID: 975752230101-5v2stndncdq0h3nji8i5s0b4537qfcu7.apps.googleusercontent.com
// 1g. Client Secret: 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
// 1h. In .env file add the following: GOOGLE_CLIENT_ID="975752230101-5v2stndncdq0h3nji8i5s0b4537qfcu7.apps.googleusercontent.com" and GOOGLE_CLIENT_SECRET="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" and come back
// 1i(end). Go to auth-options.ts in constants of shared

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
