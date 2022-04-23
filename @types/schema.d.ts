// TODO update
export type Tag = {
    color: string
    id: string
    name: string
}

export type Resource = {
    name: string
    url: string
}

export type BlogPost = {
    id: string;
    slug: string;
    cover: string;
    title: string;
    tags: Tag[];
    description: string;
    date: string
    version: string
    model: string
    resource: Resource[]
}

export type PostPage = {
    post: BlogPost,
    markdown: string
}

export type ProjectPost = {
    id: string;
    slug: string;
    cover: string;
    title: string;
    tags: Tag[];
    description: string;
    date: string
}