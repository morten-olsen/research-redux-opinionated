const express = require('express');
const faker = require('faker');

const app = express();

const users = new Array(100).fill(undefined).map((a, i) => ({
  id: i,
  name: faker.name.findName(),
  job: faker.name.jobType(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  image: faker.image.avatar(),
}));

const pets = new Array(100).fill(undefined).map((a, i) => ({
  id: i,
  owner: Math.floor(Math.random() * users.length),
  image: faker.image.animals(),
  name: faker.name.findName(),
}));

const take = (page, items, name) => {
  const start = (page - 1) * 10;
  const result = items.filter((item, i) => i > start && i < start + 10);
  return {
    result,
    links: {
      next: items.length > (page * 10) + 1
        ? `/api/${name}?page=${page + 1}`
        : undefined,
    }
  }
}

app.get('/users', (req, res) => {
  const page = parseInt(req.query.page || '1');
  res.json(take(page, users, 'users'));
});

app.get('/users/:id', (req, res) => {
  res.json({
    result: users[req.params.id],
    links: {},
  });
});

app.get('/pets', (req, res) => {
  const owner = parseInt(req.query.owner);
  const items = pets.filter(p => p.owner === owner);
  const page = parseInt(req.query.page || '1');
  res.json(take(page, items, 'pets'));
});

app.get('/pets/:id', (req, res) => {
  res.json({
    result: pets[req.params.id],
    links: {},
  });
});

module.exports = app;
