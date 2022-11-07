import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2em;
  margin-bottom: 4px;
`;

const Content = styled.p`
  font-size: medium;
  text-align: justify;
`;

const TextBox = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOREM IPSUM</Title>
        <Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga
          commodi autem alias ratione cumque sed blanditiis, debitis, hic at,
          necessitatibus facere odit voluptatem eius recusandae quibusdam et?
          Rerum enim ut sunt quibusdam esse? Atque voluptas magnam vero
          repellat! Nemo accusamus id ullam expedita delectus, sapiente officia
          minus cum, facere voluptatum similique? Quae, rerum, ullam corporis
          impedit excepturi totam delectus corrupti sed exercitationem deserunt
          laborum hic, eligendi quisquam eum ad. Facilis saepe laudantium
          maiores, nulla aut sit ab velit placeat quidem ullam sapiente
          voluptates repudiandae illum pariatur, vero fugiat corrupti
          voluptatibus molestias quod animi! A architecto corrupti quisquam
          culpa optio fuga error, saepe non dolores est illum excepturi
          necessitatibus animi minus asperiores consectetur ducimus accusantium
          vitae. Culpa inventore nulla velit deserunt eligendi eius sed quos
          repudiandae maxime aperiam nihil iusto perspiciatis tenetur est
          numquam ipsa, ab animi eaque necessitatibus dicta, quo quas
          voluptatibus nisi eveniet. Voluptatem totam, est quae sunt dolorum
          architecto nemo debitis earum error alias autem dolor expedita animi
          aperiam et provident. Accusantium assumenda obcaecati eius
          reprehenderit quas incidunt, nisi sequi inventore blanditiis possimus
          consequatur nesciunt amet corrupti quod perspiciatis eligendi nobis
          distinctio expedita exercitationem nostrum, neque saepe, enim
          voluptate quos. Fugiat sed culpa tenetur deleniti, architecto quasi.
        </Content>
      </Wrapper>
    </Container>
  );
};

export default TextBox;
