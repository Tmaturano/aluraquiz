import styled from 'styled-components'
import Head from 'next/head';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import QuizLogo from '../../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}> 
     <Head>
        <title>Alura Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        <meta name="title" content="Alura Quiz" />
        <meta name="description" content="Check your knowledge with some CSS questions" />

        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.tmaturano.vercel.app/" />
        <meta property="og:title" content="Alura Quiz" />
        <meta property="og:description" content="Check your knowledge with some CSS questions" />
        <meta property="og:image" content="" />

        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.tmaturano.vercel.app/" />
        <meta property="twitter:title" content="Alura Quiz" />
        <meta property="twitter:description" content="Check your knowledge with some CSS questions" />
        <meta property="twitter:image" content="" />

      </Head>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget> 
        <Widget>          
          <Widget.Content>
            <h1>Question 1</h1> 
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tmaturano"/>
    </QuizBackground>
  );
}
