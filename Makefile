example: example-bundle
	@cd example && anywhere

example-bundle:
	@webpack ./example/entry.js ./example/bundle.js

gh-pages: example-bundle
	@./node_modules/.bin/gh-pages -d example

.PHONY: example example-bundle gh-pages
