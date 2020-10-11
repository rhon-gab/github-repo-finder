import React, { useState } from "react";
import { ListRepos } from '../listRepos/ListRepos'
import { SavedRepos } from '../SavedRepos'
import { useQuery } from "@apollo/client";
import { SEARCH_REPOS } from "../../graphql/queries";
import { Form, Input } from "antd";
import {
    HeaderBox,
    TextLogo,
    P
} from "./repoContainerStyle";

const { Search } = Input;
export const RepoContainer = () => {
    const [repoName, setRepoName] = useState();
    const { loading, error, data, fetchMore } = useQuery(SEARCH_REPOS, {
        variables: { queryString: `name:${repoName}`, cursor: null },
    });
    const handleSearchInput = (inputValue) => {
        setRepoName(inputValue);
    };
    if (loading) return <P>Loading...</P>;
    if (error) return <P>Error :(</P>;

    return (
        <div>
            <HeaderBox>
                <TextLogo>Github Repository Finder</TextLogo>
                <Form>
                    <Form.Item>
                        <Search
                            placeholder="Search repository"
                            onSearch={handleSearchInput}
                            enterButton
                            size="large"
                        />
                    </Form.Item>
                </Form>
            </HeaderBox>
            <ListRepos data={data} fetchMore={fetchMore}/>
            <SavedRepos />
        </div>
    );
};