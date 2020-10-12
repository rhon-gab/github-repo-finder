import React from "react";
import { Modal } from "@material-ui/core";
import {
    ModalWrapper,
    Containter,
    LeftBox,
    LeftHeader,
    TextColumn,
    RightBox,
    LeftContentTop,
    Poster,
    LeftContentBottom
} from "./modalRepoStyle";
import {
    Text,
    TextCard
} from "../listRepos/listReposStyle";

export const ModalRepo = ({ modalState, showModal, repoInfo }) => {

    let repos = repoInfo && repoInfo.repositoryOwner.repository

    return (
        <Modal open={modalState} onClose={showModal}>
            <ModalWrapper>
                {repos &&
                    <Containter>
                        <LeftBox>
                            <LeftHeader>
                                <TextColumn>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Title:</Text>
                                        <Text color={"#bdc3c7"}>{repos.name}</Text>
                                    </TextCard>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Owner</Text>
                                        <Text color={"#bdc3c7"}>{repos.owner.login}</Text>
                                    </TextCard>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Url:</Text>
                                        <Text>
                                            <a style={{ color: "#1cefff" }}
                                                href={repos.owner.url}>
                                                {repos.owner.url}
                                            </a>
                                        </Text>
                                    </TextCard>
                                </TextColumn>
                            </LeftHeader>
                        </LeftBox>

                        <RightBox>
                            <LeftContentTop>
                                <Poster src={repos.owner.avatarUrl} alt="repo poster" />
                            </LeftContentTop>
                            <LeftContentBottom>
                                <TextColumn>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Stargazer:</Text>
                                        <Text color={"#78ffd6"}>{repos.stargazers.totalCount}</Text>
                                    </TextCard>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Watchers:</Text>
                                        <Text color={"#78ffd6"}>{repos.watchers.totalCount}</Text>
                                    </TextCard>
                                    <TextCard>
                                        <Text color={"#F0F8FF"}>Fork counts:</Text>
                                        <Text color={"#78ffd6"}>{repos.forkCount}</Text>
                                    </TextCard>
                                </TextColumn>
                            </LeftContentBottom>
                        </RightBox>
                    </Containter>
                }
            </ModalWrapper>
        </Modal>
    );
}
