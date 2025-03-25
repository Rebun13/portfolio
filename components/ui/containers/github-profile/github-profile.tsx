"use client";

import { GithubRepository } from "@/components/types";
import { useEffect, useState } from "react";

export default function Repos() {
    const [response, setResponse] = useState<Array<GithubRepository>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const headers = new Headers();
    headers.set('Accept', 'application/vnd.github+json');
    // headers.set('Authorization', 'Bearer <YOUR-TOKEN>');
    headers.set('X-GitHub-Api-Version', '2022-11-28');

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: headers
        };
        fetch('https://api.github.com/users/Rebun13/repos', requestOptions)
          .then((res) => res.json())
          .then((data: Array<GithubRepository>) => {
            setResponse(data);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!response) return <p>No profile data</p>;
    console.log(response[0]);
    return (
        <div>
            <h1>Public Repositories</h1>
            <ul>
                {response.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}