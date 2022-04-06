import styled from "@emotion/styled";
import { InferGetServerSidePropsType, NextPage } from "next";
import { BlogPost } from "../../../@types/schema";
import NotionService from "../../services/notion-service";
import { color, font, media } from "../../styles";
import BlogCard from "../molecules/BlogCard";
import Menu from "../molecules/Menu";

type Props = {
    posts:BlogPost[]
}


export const Home: React.VFC<Props> = ({posts})=>{
    return(
        <Wrapper>
            <Left>
                <Menu/>
            </Left>
            <Right>
                <Title id={"recipe"}>Recipe</Title>
                <CardGrid>
                    {posts.map((post: BlogPost) => (
                        <BlogCard key={post.id} post={post}/>
                    ))}
                </CardGrid>
                <Title id={"projects"}>Projects</Title>
                <CardGrid>
                    {posts.map((post: BlogPost) => (
                        <BlogCard key={post.id} post={post}/>
                    ))}
                </CardGrid>
                <Title id={"studio"}>Studio</Title>
                <Map></Map>
                <Title id={"people"}>People</Title>
                <Map></Map>
            </Right>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    height:100vh;
    max-width:1040px;
    margin:0 auto;
    padding:56px 0 0;
    display: grid;
    grid-template-columns:1fr auto;
    gap:32px;
    ${media.sp`
    width:100%;
    
    `}
    `

const Left = styled.div`
    background-color: blueviolet;
    width: 200px;
`

const Right = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: visible;
`

const Title= styled.h1`
        text-align: left;
        ${font.h2};
        color:${color.content.dark};
`
const CardGrid = styled.div`
        margin:0 auto;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:32px;
        width:100%;
        ${media.md`
            grid-template-columns:1fr 1fr;
        `}
        ${media.sp`
            grid-template-columns:1fr;
        `}
`

const Map = styled.div`
    height:320px;
    width:100%;
    background-color: azure;
`