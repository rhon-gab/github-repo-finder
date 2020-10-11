import React, { useState } from "react";
import { ListRepos } from './ListRepos'
import { SavedRepos } from './SavedRepos'
import { useQuery } from "@apollo/client";
import { SEARCH_REPOS } from "../graphql/queries";

export const RepoContainer = () => {
    const { loading, error, data, fetchMore } = useQuery(SEARCH_REPOS, {
        variables: { queryString: `name:tetris`, cursor: null },
    });

    return (
        <div>
            Repo containter
            <ListRepos data={data}/>
            <SavedRepos />
        </div>
    );
};
