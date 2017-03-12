import test from 'ava';
import request from 'supertest';

let server;

test.beforeEach(t => {
  process.env.PORT = 9999;
  delete require.cache[require.resolve('./index')];
  server = require('./index');
});

test.afterEach(t => {
  server.close();
});

test('foo', t => {
  t.pass();
});

test('foo', t => {
  t.pass();
});

test('foo', t => {
  t.pass();
});

// check how to import server without running it

/*test('signup:Success', async t => {
  const res = await request(app).get('/');

  t.is(res.status, 200);
});*/
