import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const app: FastifyInstance = fastify({
    logger: true,
});

app.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { hello: 'world' };
});

const start = async () => {
    try {
        const port: number = 3333;

        await app.listen({ port });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();