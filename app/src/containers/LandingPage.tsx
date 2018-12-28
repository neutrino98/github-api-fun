import React, { useState, Suspense } from "react";
import FindRepository from "../components/Repository/FindRepository";
import { getRepoByNameAndAuthor } from "../api/repository";
import withApollo from "react-apollo/withApollo";
import LargeSpinner from "../components/common/spinner";
import FoundedRepos from "../components/Repository/FoundedRepos";
import { Repo } from "../types/Repo";

interface ILandingPageProps {
  client: any;
}

function LandingPage(props: ILandingPageProps) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [repos, setRepos] = useState<Repo | null>(null);

  function onSubmitSearchRepos() {
    props
      .client({
        query: getRepoByNameAndAuthor(name, owner)
      })
      .then((repos: Repo) => setRepos(repos))
      .catch((e: any) => console.log(e));
  }

  return (
    <div>
      <ul id="landing-page-container">
        <li>
          <FindRepository
            name={name}
            onNameChange={e => setName(e.target.value)}
            owner={owner}
            onOwnerChange={e => setOwner(e.target.value)}
            onSubmit={() => {}}
          />
        </li>
        <li>2</li>
        <li>
          <Suspense fallback={LargeSpinner}>
            <FoundedRepos repos={null} error={null} />
          </Suspense>
        </li>
        <li>4</li>
      </ul>
    </div>
  );
}

export default withApollo(LandingPage);
