import {
  //   Categories, (not used after step 32)
  Container,
  //   SortPopup, (not used after step 32)
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5" /*6*/>
        <Title text="Все пиццы" size="lg" className="font-extrabold" /*7*/ />
        {/* 
        <Categories 17 (not used after step 32) />
        <SortPopup 26 (not used after step 32) />
        */}
      </Container>
      <TopBar /*32*/ />
      <div style={{ height: "3000px" }} /*33 for check purposes*/></div>
    </>
  );
}

// 0. Start here
// 1. Create title.tsx in shared folder and go to title.tsx
// 8. Create categories.tsx in shared folder and go to categories.tsx
// 18. Create sort-popup.tsx in shared folder and go to sort-popup.tsx
// 27. Create top-bar.tsx in shared folder and go to top-bar.tsx
// 34. Finish

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
