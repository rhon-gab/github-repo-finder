import React, { useState } from "react";
import {
    Wrapper,
    Card,
    Poster,
    Text,
    TextCard,
    Bottom,
    ButtonText,
    LoadMoreButton
} from "./listReposStyle";
import { Grid } from "@material-ui/core";

export const ListRepos = ({ data, fetchMore }) => {
    console.log('data sent', data)
    return (
        <div>
            <Wrapper container>
                <Grid item xs={8}>
                    <Grid container spacing={3} justify="center">
                        {data &&
                            data.search.nodes.map((repo) => (
                                <Grid item key={repo.id}>
                                    <Card /* onClick={() => handleOpen(repo.id)} */>
                                        <Poster
                                            key={repo.id}
                                            src={repo.owner.avatarUrl}
                                            alt="poster"
                                        />
                                        <TextCard>
                                            <Text color={"#F0F8FF"}>Title:</Text>
                                            <Text color={"#fff3b2"}>{repo.name}</Text>
                                        </TextCard>
                                    </Card>
                                </Grid>
                            ))}

                    </Grid>
                </Grid>
            </Wrapper>
            {data && data.search.pageInfo.hasNextPage && (
                <Bottom>
                    <LoadMoreButton onClick={() =>
                        fetchMore({
                            variables: { cursor: data.search.pageInfo.endCursor },
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
                    >
                        <ButtonText>Load more...</ButtonText>
                    </LoadMoreButton>
                </Bottom>
            )}
        </div>
    );
};