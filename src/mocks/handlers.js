import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          firstName: 'John12',
          lastName: 'Maverick',
        },
        {
          id: '30769d1c-22f5-43d2-8f2c-eaa1796930a7',
          firstName: 'John13',
          lastName: 'Kowalsky',
        },
        {
          id: '743cc341-c31e-4056-9095-18e8f9eaaf41',
          firstName: 'Ola',
          lastName: 'Maliniak',
        }
      ])
    );
  }),

  rest.post(`${process.env.REACT_APP_API_URL}/movies`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ status: 'ok' })
    );
  })
];
