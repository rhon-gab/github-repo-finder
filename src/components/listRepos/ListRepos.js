import React, { useState } from "react";
import { query, VIEW_REPOS } from "../../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import { getLocalStorageItem } from "../../helpers/localStorage";
import {
    ScrollableDiv,
    Wrapper,
    Card,
    UpperCard,
    Poster,
    Text,
    TextCard,
    Bottom,
    ButtonText,
    LoadMoreButton,
    SideButton,
    SideButtonText,
    ViewButton
} from "./listReposStyle";
import { P } from "../repoContainer/repoContainerStyle";
import { Grid } from "@material-ui/core";
import { ModalRepo } from "../Modal/ModalRepo"

export const ListRepos = ({ repos, loading, fetchMore }) => {

    const [visible, setVisible] = useState(false)
    const [repoOwner, setRepoOwner] = useState();
    const [repoName, setRepoName] = useState();

    const client = useApolloClient();
    const { data } = useQuery(VIEW_REPOS, {
        variables: { owner: `${repoOwner}`, name: `${repoName}` },
    });

    const viewRepo = (owner, name) => {
        setRepoOwner(owner)
        setRepoName(name)
        setVisible(true)
    };

    const showModal = () => {
        setVisible(!visible)
    };

    const saveRepo = (repo) => {
        let mergedData;
        let unique;
        const { savedRepos } = client.readQuery({
            query: query,
        });
        let savedRepoOnLocal = getLocalStorageItem("savedRepos");

        /*  if there are datas on the local Storage, im merging them with the newest data
         and removing the duplicates */
        if (savedRepoOnLocal) {
            mergedData = [...savedRepos, repo].concat(savedRepoOnLocal.savedRepos);
            unique = [
                ...new Map(mergedData.map((item) => [item["id"], item])).values(),
            ];
        }
        let data = {
            savedRepos: unique ? unique : [...savedRepos, repo],
        };
        client.writeQuery({ query, data });
    };

    const loadMore = (endCursor) => {
        fetchMore({
            variables: { cursor: endCursor },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev;
                }
                return {
                    search: {
                        ...prev.search,
                        ...fetchMoreResult.search,
                        nodes: [
                            ...prev.search.nodes,
                            ...fetchMoreResult.search.nodes,
                        ],
                    },
                };
            },
        })
    }


    if (loading) return <P>Loading ...</P>;
    return (
        <ScrollableDiv>
            <Wrapper container>
                <Grid item xs={8}>
                    <Grid container spacing={3} justify="center">
                        {repos &&
                            repos.search.nodes.map((repo) => (
                                <Grid item key={repo.id}>
                                    <Card>
                                        <UpperCard>
                                            <Poster
                                                key={repo.id}
                                                src={repo.owner.avatarUrl}
                                                alt="poster"
                                            />
                                            <SideButton onClick={() => saveRepo(repo)} >
                                                <SideButtonText color={"#2c3e50"}>Save</SideButtonText>
                                            </SideButton>
                                        </UpperCard >
                                        <TextCard>
                                            <Text color={"#304352"}>Title:</Text>
                                            <Text color={"#2c3e50"}>{repo.name}</Text>
                                        </TextCard>
                                        <ViewButton onClick={() => viewRepo(repo.owner.login, repo.name)}>
                                            <SideButtonText color={"#45a247"}>View</SideButtonText>
                                        </ViewButton>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                <ModalRepo modalState={visible} showModal={showModal} repoInfo={data} />
            </Wrapper>
            {repos && repos.search.pageInfo.hasNextPage && (
                <Bottom>
                    <LoadMoreButton onClick={() =>
                        loadMore(repos.search.pageInfo.endCursor)}>
                        <ButtonText>Load more</ButtonText>
                    </LoadMoreButton>
                </Bottom>
            )}
        </ScrollableDiv>

    );
};
