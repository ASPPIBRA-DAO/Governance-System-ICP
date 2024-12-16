import React from 'react';
import { Container, Typography, Box, Divider, Card, CardMedia, CardContent, Grid } from '@mui/material';

// Dados fictícios dos membros da diretoria
const boardMembers = [
    {
        name: 'ASPPBR-USDT',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
    {
        name: 'ASPPBR-WBNB',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
    {
        name: 'ASPPBR-CTK',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
    {
        name: 'ASPPBR-FIL',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
    {
        name: 'ASPPBR-**',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
    {
        name: 'ASPPBR-**',
        role: 'Pool de Liquidez V2',
        image: 'https://i.postimg.cc/Bb8ZZBj1/dex.png',
    },
];

const Tokenomics = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                {/* Título da seção */}
                <Typography variant="h2" gutterBottom>
                    Tokenomics
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Descrição inicial sobre o token ASPPBR */}
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    O token <strong>ASPPBR</strong> é uma ferramenta segura e criptografada projetada para facilitar a interação dos associados e usuários com os serviços e produtos administrados pela <strong>ASPPIBRA-DAO</strong>. Com ele, é possível acessar o sistema de governança e realizar trocas descentralizadas de maneira eficiente e segura. Construído no computador da internet e integrado a outras redes Blockchain como a Ethereum e Binance Smart Chain, o Token de Governança <strong>ASPPBR</strong> possui um suprimento total de 21 milhões de tokens.
                </Typography>

                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    O <strong>ASPPBR</strong> oferece uma variedade de usos práticos dentro do ecossistema blockchain:
                </Typography>

                {/* Itens de uso do token */}
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Cashback</strong>: Os usuários recebem reembolso de parte do valor gasto, incentivando o uso contínuo do token.
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Acúmulo de Pontos</strong>: Associados podem acumular pontos e convertê-los em produtos e serviços, obtendo descontos e vantagens exclusivas através do programa de fidelidade da <strong>ASPPIBRA-DAO</strong>.
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Votação Digital</strong>: O token pode ser utilizado em sistemas de votação, garantindo justiça e transparência. Os detentores de tokens têm voz ativa nos processos de tomada de decisão, contribuindo para o desenvolvimento do ecossistema.
                </Typography>

                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    O <strong>ASPPBR</strong> representa um marco de inovação para a <strong>ASPPIBRA-DAO</strong> no cenário global, ampliando a interação entre usuários e associados dentro e fora do Brasil. Combinando criptografia, segurança, descentralização e praticidade, o token empodera os usuários e revoluciona a governança e as trocas no ecossistema blockchain.
                </Typography>

                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    Nas seções a seguir, exploraremos detalhadamente os recursos e o potencial do token <strong>ASPPBR</strong>, destacando as possibilidades transformadoras que ele traz para o cenário blockchain.
                </Typography>

                {/* Card de Observação */}
                <Card sx={{ backgroundColor: '#f8e71c', border: '1px solid #f2c300', marginTop: 4, padding: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="primary" gutterBottom>
                            Observação
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Este documento não deve ser interpretado como um prospecto ou uma oferta de valores mobiliários, tampouco como a promoção de qualquer produto de investimento. A Tokenomics aqui apresentada tem a finalidade de ser um instrumento didático, facilitando a compreensão do Token, suas funções e sua finalidade no ecossistema em construção.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            O token <strong>ASPPBR</strong> não tem o objetivo de ser considerado dinheiro digital, commodities ou um mecanismo de investimento, conforme expresso na Lei Nº 14.478, de 21 de dezembro de 2022. Sua finalidade está claramente definida para facilitar a interação dos associados e usuários com a associação <strong>ASPPIBRA-DAO</strong>.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            É importante ressaltar que os tokens digitais <strong>ASPPBR</strong> não possuem a natureza de títulos, conforme definido pelo artigo 2º da Lei Nº 6.385 de 7 de dezembro de 1976, que dispõe sobre o mercado de valores mobiliários. Além disso, destaca-se que esses tokens não estão registrados como valores mobiliários em qualquer agência governamental e não devem ser tratados como tal.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Seção de Pool de Liquidez */}
                <Typography variant="h4" gutterBottom>
                    Pool de Liquidez
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    Disponibilizamos Liquidez para nossos associados 24/48 ininterrupto garantindo a estabilidade do nosso ecossistema e dos projetos desenvolvidos e apoiados por nossa comunidade. A valorização é mero resultado do trabalho contínuo da comunidade e da adoção dos nossos serviços.
                </Typography>

                {/* Cards de membros da diretoria */}
                <Grid container spacing={3}>
                    {boardMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={member.image}
                                    alt={`Foto de ${member.name}`}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Seção de Tokenomics Detalhado */}
                <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                    Tokenomics Detalhado
                </Typography>
                <Typography variant="body1" paragraph>
                    Abaixo estão as informações detalhadas sobre a distribuição de tokens, que são
                    fundamentais para garantir a transparência e a gestão eficiente dos recursos.
                </Typography>

                {/* Cards de informações detalhadas */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Oferta Total</Typography>
                                <Typography variant="body1">21.000.000 Tokens</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Pool Liquidez</Typography>
                                <Typography variant="body1">R$ 1.500.000,00</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Market Cap</Typography>
                                <Typography variant="body1">R$ 500.000,00</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Gráfico DexScreener */}
                <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                    Gráfico de Preço em Tempo Real
                </Typography>
                <Box
                    id="dexscreener-embed"
                    sx={{
                        position: 'relative',
                        width: '100%',
                        paddingBottom: { xs: '125%', md: '65%' },
                        height: 0,
                    }}
                >
                    <iframe
                        src="https://dexscreener.com/bsc/0x4F287Dd8B2b02aA8885AB9C6DdCE876D1031268B?embed=1&theme=dark&trades=0&info=0"
                        title="Gráfico DexScreener"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 0,
                        }}
                    ></iframe>
                </Box>
            </Box>
        </Container>
    );
};

export default Tokenomics;
