module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',

        // Tell jest to look in the src dir when we use @/
        '@/(.*)$': '<rootDir>/src/renderer/$1',
    },
    globals: {
        window: {},
    },
    watchPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/renderer/utils/setNativeValue.ts',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/renderer/utils/setNativeValue.ts',
    ],
    modulePathIgnorePatterns: ['<rootDir>/coverage/'],
    modulePaths: ['<rootDir>/src/'],
};
