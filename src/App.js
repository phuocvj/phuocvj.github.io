import Giscus from "@giscus/react";

import "./App.css";

function App() {
  const projectRepo = process.env.REACT_APP_GISCUS_PROJECT_REPO;
  const projectRepoId = process.env.REACT_APP_GISCUS_PROJECT_REPO_ID;
  const discussionCategoryId =
    process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_ID;
  const discussionCategoryName =
    process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_NAME;
  return (
    <div className="App">
      <Giscus
        id="comment-id"
        repo={projectRepo}
        repoId={projectRepoId}
        category={discussionCategoryName}
        categoryId={discussionCategoryId}
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default App;
