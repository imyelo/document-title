example: example-bundle
	@cd example && anywhere

example-bundle:
	@webpack ./example/entry.js ./example/bundle.js

gh-pages: example-bundle
	@git branch -D gh-pages
	@git checkout --orphan gh-pages
	@git reset .
	@git clean -f -d -x --exclude example
	@mv example/* ./
	@git add . && git commit -m "generate gh-pages"
	@git push origin gh-pages:gh-pages -f
	@git checkout master
	@git branch -D gh-pages

.PHONY: example example-bundle gh-pages
