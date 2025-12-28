// Placeholder CLI entry for LinkedIn CLI (TypeScript)
// Adapted from Instagram CLI structure
import meow from 'meow';
import React from 'react';
import { render } from 'ink';
import { LinkedInMain } from './ui/views/main-view.js';

const cli = meow(`
	Usage
	  $ linkedin-cli [command]

	Commands
	  profile      Show LinkedIn profile (placeholder)
	  connections  Show LinkedIn connections (placeholder)
	  posts        Show LinkedIn posts (placeholder)
	  messaging    Show LinkedIn messages (placeholder)

	Options
	  --help     Show help
`, {
	importMeta: import.meta,
	flags: {
		help: {
			type: 'boolean',
			alias: 'h',
			default: false
		}
	}
});

render(<LinkedInMain cli={cli} />);
