import React from "react";
import { Repo } from "../../types/Repo";

interface IFoundedReposProps {
  repos: Repo | null;
  error: string | null;
}

export default function FoundedRepos({ error, repos }: IFoundedReposProps) {
  return (
    <div>
      {error && "Smt go wrong"}
      {repos ? "Repo" : "No repo"}
    </div>
  );
}
