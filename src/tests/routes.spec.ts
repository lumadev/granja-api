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