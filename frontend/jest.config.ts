import type { Config } from '@jest/types'
import { defaults } from 'jest-config'
import React from 'react'

global.React = React

// Sync object
const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['./node_modules', 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/*.test.(ts|tsx)'],
  verbose: true,
}

export default config
