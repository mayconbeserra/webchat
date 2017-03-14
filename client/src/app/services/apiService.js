import request from 'superagent';

export function post (url, payload, callback) {
  return request
    .post(url)
    .type('json')
    .send(payload)
    .end((err, res) => {
      if (err) console.log(err); // eslint-disable-line
      callback(res);
    });
}

export function get (url, callback) {
  return request
    .get(url)
    .end((err, res) => {
      if (err) console.log(err); // eslint-disable-line
      callback(res);
    });
}
