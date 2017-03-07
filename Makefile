clean:
	rm -rf .asset-cache _site

deps:
	bundle install
	yarn install

dist: clean
	JEKYLL_ENV=production bin/jekyll build
