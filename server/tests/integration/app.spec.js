const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    await request(app)
      .post('/ongs')
      .send({
        name: "Futuro Dev",
        email: "contato@futurodev.com",
        whatsapp: "47000000000",
        city: "Goiânia",
        uf: "SP",
      })
      .expect('Content-Type', /json/)
      .expect(200);
      
  });

  it('should be able to list all ongs', async () => {
    await request(app)
      .get('/ongs')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should be able to create a session', async () => {
    const response = await request(app).get('/ongs');
    await request(app)
      .post('/sessions')
      .send({ id: response.body[0].id })
      .expect('Content-Type', /json/)
      .expect(200);

  });

  it('should be able to create a new incident by an ong', async () => {
    const response = await request(app).get('/ongs');
    await request(app)
      .post('/incidents')
      .set('Authorization', response.body[0].id)
      .send({
        title: "Caso 1",
        description: "Detalhes do caso",
        value: 120,
      })
      .expect('Content-Type', /json/)
      .expect(200);

  });

  it('should be able to list the incidents from a determinated ong', async () => {
    const response = await request(app).get('/ongs');
    await request(app)
      .get('/ong/incidents')
      .set('Authorization', response.body[0].id)
      .expect('Content-Type', /json/)
      .expect(200);
  });
  
  it('should be able to list all incidents', async () => {
    await request(app)
      .get('/incidents')
      .query('page=1')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should be able to delete an incident', async () => {
    const response = await request(app).get('/ongs');
    await request(app)
      .delete('/incidents/1')
      .set('Authorization', response.body[0].id)
      .expect(204);
  });
});