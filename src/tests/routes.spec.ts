import app from '../server';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

let chaiLib = <any>chai;
let chaiRequestLib = chaiLib.default.request;

describe('GET animal', () => {
  it('should return status 200', () => {
    return chaiRequestLib(app)
    .get('/animal')
    .then((res: any) => {
      chai.expect(res.status).to.eql(200);
    })
  })
})

describe('GET animal/:id', () => {
  it('should return status 200', () => {
    return chaiRequestLib(app)
    .get('/animal/1')
    .then((res: any) => {
      chai.expect(res.status).to.eql(200);
    })
  })
})

describe('PUT animal', () => {
  it('should return status 200', () => {
    const animal = {
      nome: 'TST648',
      tipo: 'poltry',
      status: 'ativo'
    };
    return chaiRequestLib(app)
    .put('/animal/1')
    .send(animal)
    .then((res: any) => {
      chai.expect(res.status).to.eql(200);
    })
  })
})

describe('DELETE animal', () => {
  it('should return status 200', () => {
    return chaiRequestLib(app)
    .delete('/animal/11')
    .then((res: any) => {
      chai.expect(res.status).to.eql(200);
    })
  })
})