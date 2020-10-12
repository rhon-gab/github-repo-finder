import React, { useState, useEffect } from "react";
import { query, VIEW_REPOS } from "../../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import {
    setLocalStorageItem,
    getLocalStorageItem,
} from "../../helpers/localStorage";
import {
    Wrapper,
    Card,
    UpperCard,
    Poster,
    Text,
    TextCard,
    SideButton,
    SideButtonText,
    ViewButton
} from "../listRepos/listReposStyle";
import {
    TitleContainer,
    Title
} from "./savedReposStyle";
import { Grid } from "@material-ui/core";
import { ModalRepo } from "../Modal/ModalRepo"

export const SavedRepos = () => {
    const [visible, setVisible] = useState(false)
    const [repoOwner, setRepoOwner] = useState();
    const [repoName, setRepoName] = useState();

    const { data } = useQuery(query);
    let reposInfo = useQuery(VIEW_REPOS, {
        variables: { owner: `${repoOwner}`, name: `${repoName}` },
    }).data

    let savedRepoOnLocal = getLocalStorageItem("savedRepos");
    const client = useApolloClient();

    const viewRepo = (owner, name) => {
        setRepoOwner(owner)
        setRepoName(name)
        setVisible(true)
    };

    const showModal = () => {
        setVisible(!visible)
    };

    const mergeLocals = () => {
        let mergedData;
        let unique;
        if (savedRepoOnLocal) {
            mergedData = [...data.savedRepos].concat(savedRepoOnLocal.savedRepos);
            unique = mergedData && [
                ...new Map(mergedData.map((item) => [item["id"], item])).values(),
            ];
        }
        let newData = {
            savedRepos: unique ? unique : data.savedRepos,
        };
        return newData;
    };

    let listRepos = mergeLocals();

    useEffect(() => {
        listRepos = mergeLocals();
        setLocalStorageItem("savedRepos", listRepos);
    }, [savedRepoOnLocal]);


    const deleteRepo = (id) => {
        const { savedRepos } = client.readQuery({
            query: query,
        });
        if (savedRepos.length) {
            let list = [...savedRepos];
            const updatedList = list.filter((item) => item.id !== id);
            let data = {
                savedRepos: updatedList,
            };
            client.writeQuery({
                query,
                data,
            });
            setLocalStorageItem("savedRepos", data);
        } else {
            let listOnLocale = [...savedRepoOnLocal.savedRepos];
            const updatedListOnLocal = listOnLocale.filter((item) => item.id !== id);
            let data = {
                savedRepos: updatedListOnLocal,
            };
            setLocalStorageItem("savedRepos", data);
        }
    };

    return (
        <div>
            <TitleContainer>
                <Title>
                    Saved Repositories
                </Title>
            </TitleContainer>
            <Wrapper container>
                <Grid item xs={8}>
                    <Grid container spacing={3} justify="center">
                        {listRepos &&
                            listRepos.savedRepos.map((repo) => (
                                <Grid item key={repo.id}>
                                    <Card>
                                        <UpperCard>
                                            <Poster
                                                key={repo.id}
                                                src={repo.owner.avatarUrl}
                                                alt="poster"
                                            />
                                            <SideButton onClick={() => deleteRepo(repo.id)} >
                                                <SideButtonText color={"#f7797d"}>Delete</SideButtonText>
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
                <ModalRepo modalState={visible} showModal={showModal} repoInfo={reposInfo} />
            </Wrapper>
        </div>
    );
};