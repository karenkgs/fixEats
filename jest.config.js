module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.test.(ts)'
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    testEnvironment: 'node'
};