# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
# config.serve_static_assets = true
Rails.application.config.assets.precompile += %w( scroll.js )
Rails.application.config.assets.precompile += %w( jquery.malihu.PageScroll2id.js )
Rails.application.config.assets.precompile += %w( classie.js )
Rails.application.config.assets.precompile += %w( jquery.parallax-1.1.3.js )
Rails.application.config.assets.precompile += %w( jquery-2.1.1.js )
Rails.application.config.assets.precompile += %w( cbpAnimatedHeader.min.js )
Rails.application.config.assets.precompile += %w( jquery.fs.tipper.min.js )
Rails.application.config.assets.precompile += %w( owl.carousel.min.js )
Rails.application.config.assets.precompile += %w( jquery.animsition.min.js )
Rails.application.config.assets.precompile += %w( main.js )
Rails.application.config.assets.precompile += %w( jquery.chaffle.min.js )
Rails.application.config.assets.precompile += %w( imagesloaded.pkgd.min.js )
Rails.application.config.assets.precompile += %w( masonry.js )
Rails.application.config.assets.precompile += %w( isotope.js )
Rails.application.config.assets.precompile += %w( waypoints.min.js )
Rails.application.config.assets.precompile += %w( contact.js )
Rails.application.config.assets.precompile += %w( scrollReveal.js )
Rails.application.config.assets.precompile += %w( jquery.counterup.min.js )
Rails.application.config.assets.precompile += %w( modernizr.js )

Rails.application.config.assets.precompile += %w( custom.js )
