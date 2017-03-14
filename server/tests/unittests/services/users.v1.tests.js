import 'babel-polyfill';
import { expect } from 'chai';
import sinon from 'sinon';
import UserService from '../../../src/services/v1/user';
import UsersRepository from '../../../src/repositories/usersRepository';

describe('Testing --> Services.Users', () => {
  describe('Detail', () => {
    it('should return a specified User', async () => {
      const repository = new UsersRepository();
      sinon.stub(repository, 'getById', fakeUser);

      const result = await UserService({ repo: repository }).detail(1);
      const expected = fakeUser();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('active', expected.active);
    });

    it('test', async () => {
      const x = () => console.log(this);
      x();

      const obj = {
        x: x.bind('here'),
      };

      obj.x();
    });
  });

  describe('Create', () => {
    it('should create a new user', async () => {
      const repository = new UsersRepository();
      sinon.stub(repository, 'insert', fakeUser);

      const result = await UserService({ repo: repository }).create(fakeUser);
      const expected = fakeUser();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('active', expected.active);
    });
  });

  describe('Update', () => {
    it('should update an existing user', async () => {
      const repository = new UsersRepository();
      sinon.stub(repository, 'update', fakeUser);

      const result = await UserService({ repo: repository }).update(1, fakeUser);
      const expected = fakeUser();

      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('active', expected.active);
    });
  });

  describe('Delete', () => {
    it('should delete an existing user', async () => {
      const repository = new UsersRepository();
      sinon.stub(repository, 'delete', fakeUser);

      const result = await UserService({ repo: repository }).del(1);
      const expected = fakeUser();

      expect(repository.delete.calledOnce).to.be.equals(true);
      expect(repository.delete.getCall(0).args[0]).to.be.equals(1);
      expect(result).to.have.property('id', expected.id);
      expect(result).to.have.property('name', expected.name);
      expect(result).to.have.property('active', expected.active);
    });
  });

  describe('List', () => {
    it('should list all users', async () => {
      const repository = new UsersRepository();
      sinon.stub(repository, 'getAll', fakeUsers);

      const result = await UserService({ repo: repository }).list();
      let index = 0;
      result.forEach((element) => {
        const fakeUser = fakeUsers()[index];
        Object.keys(fakeUsers()[index]).forEach((key) => {
          expect(element).to.have.property(key, fakeUser[key]);
        });
        index += 1;
      });
    });
  });
});

const fakeUser = () => {
  return {
    id: 1,
    name: 'Mary',
    active: true,
  };
};

const fakeUsers = () => {
  return [
    {
      id: 1,
      name: 'Mary',
      active: true,
    },
    {
      id: 2,
      name: 'John',
      active: true,
    },
  ];
};
