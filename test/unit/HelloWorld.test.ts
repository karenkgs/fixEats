import { HelloWorld } from '../../src';

describe('Unit tests of HelloWorld', () => {

    it('should return hello world', () => {
        const message = new HelloWorld().sayHello();
        expect(message).toBe('Hello world!');
    });

});