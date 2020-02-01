'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const crypto = require('crypto');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async crypto() {
    const { ctx } = this;

    const salt = crypto.randomBytes(128)
      .toString('base64');
    const hash = crypto.pbkdf2Sync('crypto', salt, 10000, 64, 'sha512')
      .toString('hex');

    ctx.body = hash;
  }

  async fibonacci() {
    const { ctx } = this;

    const ret = this.toFibonacci(34);

    ctx.body = ret;
  }

  toFibonacci(i) {
    if (i < 2) return i;
    return this.toFibonacci(i - 2) + this.toFibonacci(i - 1);
  }
}

module.exports = HomeController;
