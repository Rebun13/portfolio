"use client";

import { GithubRepository } from "@/components/types";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./styles.module.css";
import 'react-loading-skeleton/dist/skeleton.css';
import { v4 as uuid } from "uuid";

export default function Repos() {
    const [response, setResponse] = useState<Array<GithubRepository>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [filterBy, setFilterBy] = useState<string | null>(null);
    const filterRepos = (topic: string) => {
        if (filterBy === topic) {
            setFilterBy(null);
        } else {
            setFilterBy(topic);
        }
    };

    const headers = new Headers();
    headers.set('Accept', 'application/vnd.github+json');
    // headers.set('Authorization', 'Bearer <YOUR-TOKEN>');
    headers.set('X-GitHub-Api-Version', '2022-11-28');

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: headers
        };
        fetch('https://api.github.com/users/Rebun13/repos?type=public&per_page=100', requestOptions)
            .then((res) => res.json())
            .then((data: Array<GithubRepository>) => {
                setResponse(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return (
        <div className={styles.tableSkeleton}>
            <Skeleton count={1} height={40} baseColor="rgba(var(--foreground), .5)" highlightColor="rgba(var(--foreground), .8)" />
            <Skeleton count={7} height={30} baseColor="rgba(var(--foreground), .5)" highlightColor="rgba(var(--foreground), .8)" />
        </div>
    );
    if (!response) return <p>Could not fetch my projects 🤔</p>;

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Repo</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((repo) => {
                        if (filterBy !== null && !repo.topics?.includes(filterBy)) return <></>;
                        return (
                            <tr key={repo.id} className={styles.trow}>
                                <td>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                </td>
                                <td>{repo.language}</td>
                                <td>{repo.description}</td>
                                <td>{repo.topics?.map((topic) => (
                                    <button
                                        key={uuid()}
                                        className={topic === filterBy ? `${styles.topic} ${styles.selected}` : styles.topic}
                                        onClick={() => filterRepos(topic)}
                                    >{topic}</button>))}
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}