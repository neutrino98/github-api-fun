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
    props.client
      .query({
        query: getRepoByNameAndAuthor(name, owner)
      })
      // .then((response: any) => {
      //   console.log(response.data.repository);
      //   const repos: Repo = JSON.parse(response.data.repository);
      //   console.log(repos);
      // })
      .then((repos: Repo) => {
        console.log("data in then: ", repos);
        setRepos(repos);
        setName("");
        setOwner("");
      })
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
            onSubmit={onSubmitSearchRepos}
          />
        </li>
        <li>2</li>
        <li>
          <Suspense fallback={LargeSpinner}>
            <FoundedRepos repos={repos} error={null} />
          </Suspense>
        </li>
        <li>4</li>
      </ul>
    </div>
  );
}

export default withApollo(LandingPage);
