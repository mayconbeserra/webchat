import repository from '../repositories/usersRepository';
import userService from '../services/v1/user';

export async function list (req, res) {
  const data = await userService({
    repo: repository(),
  }).list();
  res.status(200).json(data);
}

export async function detail (req, res) {
  const data = await userService({
    repo: repository(),
  }).detail(req.params.id);

  if (!detail) res.status(404).end();

  res.status(200).json(data);
}

export async function create (req, res) {
  const newEntity = await userService({
    repo: repository(),
  }).create(req.body);

  if (!newEntity) res.status(400).end();

  res.status(201).json(newEntity[0]);
}

export async function update (req, res) {
  const result = await userService({
    repo: repository(),
  }).update(req.params.id, req.body);

  if (!result) res.status(400).end();

  res.status(200).json(result[0]);
}

export async function del (req, res) {
  const user = await repository().getById(req.params.id);

  if (!user) return res.status(404).end();

  await userService({
    repo: repository(),
  }).del(req.params.id);

  return res.status(200).json(user);
}
