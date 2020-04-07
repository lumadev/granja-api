import express from 'express'
import { Pool, Client } from 'pg'
import cors from 'cors'

import routes from './routes';

import { DatabaseConfig } from '../database/config'

class App {
  public express = express();

  constructor () {
    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const database = new DatabaseConfig()
    const { connectionString } = database;

    // const { Pool } = require('pg')
    // const pool = new Pool({
    //   connectionString: connectionString,
    // })

    // pool.query('SELECT * FROM animal', (err, res) => {
    //   console.log(res);
    //   pool.end()
    // })

    const client = new Client({ connectionString })
    client.connect()
  }

  private routes (): void {
    this.express.use(routes);
  }
}

export default new App().express