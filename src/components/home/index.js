import React from 'react';
import { CoverContainer, Text, Title, SubTitle, Button } from './HomeElements';

const Home = () => {
  return (
    <>
        <CoverContainer id="home">
            <Text>
              <Title>Sed ut perspiciatis unde omnis iste natus</Title>
              <SubTitle>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</SubTitle>
              <Button>Read more</Button>
            </Text>
        </CoverContainer>
    </>
  )
}

export default Home