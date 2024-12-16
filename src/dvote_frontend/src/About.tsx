import React from 'react';
import { Container, Typography, Box, Divider, Card, CardMedia, CardContent, Grid } from '@mui/material';

// Dados fictícios dos membros da diretoria
const boardMembers = [
    {
        name: 'Ana Amorim',
        role: 'Cofundadora',
        image: 'https://bafybeiejwesoz2hllud454mw75efkibpcdfkd7z46ynibbqateet3tcx3e.ipfs.w3s.link/carol-amorim.svg',
    },
    {
        name: 'Sandro Antunes',
        role: 'Cofundador',
        image: 'https://bafybeienbpsmmqzbcsgeiot6is3jopn4ra4dakwrmnp2julhxdlndvfzhq.ipfs.w3s.link/sandro-antunes.svg',
    },
    {
        name: 'Ygor Nogueira',
        role: 'Diretor Jurídico',
        image: 'https://bafybeiawpgif5m3xsph6m7gnto34uby3e4tibkwmxybq67ssnmkzdu5tmm.ipfs.w3s.link/ygor-nogueira.svg',
    },
    {
        name: 'Bruno Queiroz',
        role: 'Desenvolvedor',
        image: 'https://bafybeidrkmp4w27md3ug42k7vhcdggvnbhjxaym55q5e22q6vpmxvdtia4.ipfs.w3s.link/17.png',
    },
    {
        name: 'Jaycee Tran',
        role: 'Desenvolvedor',
        image: 'https://bafybeibzzxhadp7sptuijtrz265ii3hsmx4mpbpcxzhfvg57ejhs22szd4.ipfs.w3s.link/23.svg',
    },
    {
        name: 'Naruhitokaide',
        role: 'Desenvolvedor',
        image: 'https://bafybeihfhxfvekzyebvwwxpqyjrokhou4wj4uvmxz6omxe3r5jvm7yjmii.ipfs.w3s.link/21.png',
    },
];

const About = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                {/* Quem Nós Somos */}
                <Typography variant="h2" gutterBottom>
                    Quem Nós Somos
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    A ASPPIBRA - Associação dos Proprietários e Possuidores de Imóveis no Brasil é uma associação civil sem fins lucrativos, fundada em 09/04/2016, no Estado do Rio de Janeiro-RJ. Compõe-se de profissionais e cidadãos comprometidos com o desenvolvimento tecnológico e socioeconômico da sociedade moderna. Nossa atuação visa defender e representar os interesses dos cidadãos, especialmente os proprietários e possuidores de imóveis em todo o Brasil.
                </Typography>
                <Divider sx={{ my: 2 }} />

                {/* Visão */}
                <Typography variant="h4" gutterBottom>
                    Visão
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    Ser referência na aceleração da tokenização imobiliária no Brasil, integrando tecnologias de ponta para promover um desenvolvimento econômico sustentável e inclusivo, respeitando os direitos de propriedade privada e a conservação ambiental.
                </Typography>

                {/* Objetivos */}
                <Typography variant="h4" gutterBottom>
                    Objetivos
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Escrituração e Digitalização do Registro Imobiliário:</strong> Utilizar tecnologias como blockchain para simplificar e agilizar os processos de registro imobiliário, garantindo segurança jurídica e facilitando o acesso à propriedade.
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Inclusão Digital e Segurança Financeira:</strong> Capacitar comunidades e indivíduos para participar da economia digital de forma segura e inclusiva, promovendo oportunidades econômicas equitativas.
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    <strong>Preservação Ambiental e Energia Sustentável:</strong> Promover práticas agrícolas e pecuárias sustentáveis, recuperar áreas degradadas e fomentar a geração de energia renovável, contribuindo para a preservação ambiental e a mitigação das mudanças climáticas.
                </Typography>

                {/* Diretoria */}
                <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                    Diretoria
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    Conheça os membros da nossa diretoria que trabalham para o sucesso da nossa organização.
                </Typography>

                <Grid container spacing={3}>
                    {boardMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={member.image}
                                    alt={`Foto de ${member.name}`}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
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

                {/* Missão */}
                <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                    Missão
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                    Promover a inclusão digital, facilitar o acesso dos cidadãos a recursos financeiros e serviços descentralizados por meio de tecnologias emergentes como blockchain, DeFi e tokenização, tornando a escrituração imobiliária acessível a todos os brasileiros, independentemente de seu acesso prévio à informação.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
