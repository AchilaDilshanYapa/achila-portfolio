import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 7rem 1rem 3rem 1rem;
`;

const BlogCard = styled.article`
  width: clamp(280px, 28vw, 420px);
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;

  h2 {
    margin: 0 0 0.8rem 0;
    font-size: calc(0.8rem + 1vw);
  }

  p {
    margin: 0;
    font-size: calc(0.55rem + 0.6vw);
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const BlogCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

const Meta = styled.small`
  display: inline-block;
  margin-top: 0.9rem;
  opacity: 0.8;
`;

const posts = [
  {
    id: 1,
    title: "Monthly Fortune Teller",
    excerpt:
      "A fun and interactive web-based fortune telling game that reveals your future predictions based on your birth month.",
    meta: "Click hear",
    url: "https://achiladilshanyapa.github.io/fortune-teller-monthly/",
  },
  {
    id: 2,
    title: "Future Predictor ",
    excerpt:
      "A fun and interactive web-based fortune-telling game that generates personalized future predictions based on birth year.",
    meta: "Click hear",
    url: "https://achiladilshanyapa.github.io/future-predictor-game/",
  },
  {
    id: 3,
    title: "SpeedXtreme - Car Racing Game",
    excerpt:
      "A classic arcade-style car racing game built with vanilla JavaScript, HTML5, and CSS3. Features keyboard controls, obstacle avoidance, and score tracking.",
    meta: "Click hear",
    url: "https://achiladilshanyapa.github.io/SpeedXtreme-Fastest-Track/",
  },
  {
    id: 4,
    title: "Snake Game",
    excerpt:
      "A modern implementation of the classic Snake game with progressive difficulty levels.",
    meta: "Click hear",
    url: "https://achiladilshanyapa.github.io/snake-game-levels/",
  },
];

const BlogPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {posts.map((post) => {
          const card = (
            <BlogCard key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Meta>{post.meta}</Meta>
            </BlogCard>
          );

          return post.url ? (
            <BlogCardLink
              key={`link-${post.id}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card}
            </BlogCardLink>
          ) : (
            card
          );
        })}

        <BigTitle text="AREA59" top="80%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default BlogPage;
