import NavHome from '../components/NavHome'
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import eventImg from '../img/festa.jpg';
import argo from '../img/argo.jpg';
import mauro from '../img/mauro.jpg';

export function Home() {

  return (
    <div className="App">
      <NavHome />
      <Grid centered stackable padded relaxed>
        <Grid.Column width={9}>
          <Divider className='event-text' horizontal>EVENTOS</Divider>
          <Grid stackable columns='equal' centered>
            <Grid.Column width={5}>
              <Link to='/products'>
                <Card centered className='event-card'>
                  <Image className='event-img' src={eventImg} />
                  <Card.Content>
                    <Card.Header>Calourada Lineless</Card.Header>
                    <Card.Description>14/07/23</Card.Description>
                  </Card.Content>
                </Card>
                <Card centered className='event-card'>
                  <Image className='event-img' src={argo} />
                  <Card.Content>
                    <Card.Header>Calourada Argonautas</Card.Header>
                    <Card.Description>14/07/23</Card.Description>
                  </Card.Content>
                </Card>                <Card centered className='event-card'>
                  <Image className='event-img' src={mauro} />
                  <Card.Content>
                    <Card.Header>Calourada do Mauro</Card.Header>
                    <Card.Description>14/07/23</Card.Description>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </div >
  );
};