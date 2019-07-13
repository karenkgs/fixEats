import { HelloWorld } from '../../src';

describe('Integration tests for HelloWorld API', () => {

    it('should return hello world', () => {
        const message = new HelloWorld().sayHello();
        expect(message).toBe('Hello world!');
    });

});