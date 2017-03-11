import request from 'superagent';

export function post (url, payload, callback) {
  return request
    .post(url)
    .type('json')
    .send(payload)
    .end((err, res) => {
      if (err) console.log(err);
      callback(res);
    });
}

export function get () {

}
