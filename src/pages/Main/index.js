import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Description, Title, Bold, Subtitle } from './styles';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Title>TEMPLATE DE DESENVOLVIMENTO</Title>
                <Subtitle>Nome do projeto: HelloWorld</Subtitle>
                <Image source={{ uri: 'http://www.gfxconsultoria.com.br/img/GFX-consultoria.png' }}
                    style={{
                        height: 100,
                        width: 200,
                        margin: 10
                    }} />
                <Description>
                    Template básico para projetos do grupo de desenvolvimento mobile
                    GFX Consultoria, você pode começar modificando o arquivo no caminho
                    <Bold>./src/pages/Main/index.js</Bold>
                </Description>
            </Container>
        );
    }
}
