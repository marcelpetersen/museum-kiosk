clean:
	rm -rf .asset-cache _site

dist: clean
	yarn install
	JEKYLL_ENV=production bin/jekyll build