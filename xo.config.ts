import {type FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = {
	prettier: true,
	semicolon: true,
	space: false,
	react: true,
	rules: {
		'react/prop-types': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'react/no-array-index-key': 'off',
		'react/require-default-props': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'capitalized-comments': 'off',
		'no-useless-return': 'off',
		'arrow-body-style': 'off',
		'no-console': 'warn',
		'promise/prefer-await-to-then': 'off',
		'react/jsx-no-leaked-render': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': [
			'error',
			{considerDefaultExhaustiveForUnions: true},
		],
	},
};

export default xoConfig;
