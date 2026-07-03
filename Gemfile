# Gemfile — Ruby dependency manifest for this Jekyll project.
# Run `bundle install` to install all gems listed here.
# Run `bundle exec jekyll serve` to start the local dev server.
# Bundler ensures everyone on the team uses the same gem versions.

# RubyGems.org is the official public gem repository — the default source for all Ruby packages.
source "https://rubygems.org"

# Jekyll: the static site generator that powers this project.
# "~> 4.3" means "4.3 or any newer 4.x release, but NOT 5.x"
# This prevents accidentally installing a breaking major version.
gem "jekyll", "~> 4.3"

# Minima: the base theme this site extends (overridden with custom layouts and Sass).
gem "minima", "~> 2.5"

# Jekyll plugins — loaded automatically when listed under :jekyll_plugins.
group :jekyll_plugins do
  gem "jekyll-seo-tag"    # Adds <meta> SEO tags, Open Graph, and Twitter Card tags automatically
  gem "jekyll-sitemap"    # Auto-generates sitemap.xml for search engine crawlers
end

# Windows / JRuby compatibility gems.
# These are only installed on Windows (mingw/mswin) or JRuby platforms.
# They are NOT installed on Linux (the GitHub Actions runner), so they don't affect deployment.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"  # Timezone support — required for Jekyll's date filters on Windows
  gem "tzinfo-data"             # Timezone data files — needed because Windows lacks them natively
end

# Windows-only: watches the filesystem for changes so `jekyll serve --livereload` works.
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# JRuby-only: HTTP parser compatibility shim for JRuby's alternative HTTP stack.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
