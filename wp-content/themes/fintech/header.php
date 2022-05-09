<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php twentytwentyone_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="Content-Security-Policy" content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;">
	
	<link rel="icon" type="image/x-icon" href="<?php echo get_theme_file_uri(); ?>/images/favicons/favicon.ico">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_theme_file_uri(); ?>/images/favicons/16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_theme_file_uri(); ?>/images/favicons/32.png">
    <link rel="icon" type="image/png" sizes="57x57" href="<?php echo get_theme_file_uri(); ?>/images/favicons/57.png">
    <link rel="icon" type="image/png" sizes="76x76" href="<?php echo get_theme_file_uri(); ?>/images/favicons/76.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_theme_file_uri(); ?>/images/favicons/96.png">
    <link rel="icon" type="image/png" sizes="120x120" href="<?php echo get_theme_file_uri(); ?>/images/favicons/120.png">
    <link rel="icon" type="image/png" sizes="128x128" href="<?php echo get_theme_file_uri(); ?>/images/favicons/128.png">
    <link rel="icon" type="image/png" sizes="144x144" href="<?php echo get_theme_file_uri(); ?>/images/favicons/144.png">
    <link rel="icon" type="image/png" sizes="152x152" href="<?php echo get_theme_file_uri(); ?>/images/favicons/152.png">
    <link rel="icon" type="image/png" sizes="167x167" href="<?php echo get_theme_file_uri(); ?>/images/favicons/167.png">
    <link rel="icon" type="image/png" sizes="180x180" href="<?php echo get_theme_file_uri(); ?>/images/favicons/180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo get_theme_file_uri(); ?>/images/favicons/192.png">
    <link rel="icon" type="image/png" sizes="195x195" href="<?php echo get_theme_file_uri(); ?>/images/favicons/195.png">
    <link rel="icon" type="image/png" sizes="196x196" href="<?php echo get_theme_file_uri(); ?>/images/favicons/196.png">
    <link rel="icon" type="image/png" sizes="228x228" href="<?php echo get_theme_file_uri(); ?>/images/favicons/228.png">
	
	<link rel="stylesheet" href="<?php echo THEME_PATH; ?>/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo THEME_PATH; ?>/css/animate.css">	
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
	<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=626a78d085d62e001964c5d1&product=sop' id='share-this-share-buttons-mu-js' async='async'></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-N7TZJXP');</script>
	<!-- End Google Tag Manager -->
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7TZJXP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="loader">
    <img src="<?php echo THEME_PATH; ?>/images/Web loader Cygnature.gif" alt="loader" />
</div>
<header>
        <div class="topBar navbar-expand-lg py-2">
            <div class="container-fluid d-flex">
                <ul class="navbar-nav ms-auto   justify-content-end item-cent">
                    <li class="nav-item Website-list">
                        <a class="nav-link gp-website" href="javascript:void(0);">Group Websites</a> 
						<?php /* Group website links start */
							if (have_rows('group_websites', 'option')) : ?>
							<ul>
								<?php while (have_rows('group_websites', 'option')) : the_row(); 
										if (get_sub_field('website_url', 'option') && get_sub_field('website_title', 'option')) { ?>
										<li>
											<a href="<?php echo the_sub_field('website_url', 'option'); ?>" title="<?php echo the_sub_field('website_title', 'option'); ?>" ><?php echo the_sub_field('website_title', 'option'); ?></a>
										</li>
										<?php } 
									endwhile; ?>
							</ul>
							<?php endif; 
							/* Group website links end */ ?>	
                    </li>
                </ul>
                <div class="d-flex item-center">
                    <!--<a href="#" class="so-icon"><i class="fas fa-search"></i></a>-->
					<span class="search-icon">
                        <span class="overlay"></span>
                        <?php echo do_shortcode('[wpdreams_ajaxsearchlite]'); ?>
                    </span>
                    <!-- Social icon start-->
					<?php if (have_rows('header_icons', 'option')) : ?>
					  <?php while (have_rows('header_icons', 'option')) : the_row(); ?>
						  <a class="so-icon" href="<?php if (get_sub_field('social_link', 'option')) {
									  echo the_sub_field('social_link', 'option');
									} else {
									  echo '#';
									} ?>" <?php if (get_sub_field('social_link_title', 'option')) : ?>title="<?php echo the_sub_field('social_link_title', 'option'); ?>" <?php endif; ?> target="_blank" rel="noopener">
							<?php if (get_sub_field('social_icons', 'option')) : ?>
							  <i class="fab <?php echo the_sub_field('social_icons', 'option'); ?>" aria-hidden="true"></i>
							<?php endif; ?>
						  </a>
					  <?php endwhile; ?>
					<?php endif; ?>			
					<!-- Social icon end -->
                </div>
            </div>
        </div>
		
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <div class="nav-inner-content">
				<a href="<?php echo site_url(); ?>" class="navbar-brand" title="<?php echo the_field('logo_title', 'option'); ?>" alt="<?php echo the_field('logo_title', 'option'); ?>">
					<!--<span class="visually-hidden"><?php echo the_field('logo_title', 'option'); ?></span>-->

					<?php if (get_field('desktop_logo', 'option')) : ?>
						<div>
							<?php
							$header_logo_url = get_field("desktop_logo", "option"); ?>
							<img src="<?php echo $header_logo_url; ?>" alt="<?php echo the_field('logo_title', 'option'); ?>">
						</div>
					<?php endif; ?>

					<?php /*if (get_field('mobile_logo', 'option')) : ?>
						<div class="d-md-none">
							<?php
							$mobile_logo_url = get_field("mobile_logo", "option"); ?>
							<img src="<?php echo $mobile_logo_url; ?>" alt="<?php echo the_field('logo_title', 'option'); ?>">
						</div>
					<?php endif;*/ ?>
				</a>
               
                <div class="right-content d-flex align-items-center">
                <div class="collapse navbar-collapse" id="navbarScroll">
					<?php if ( has_nav_menu( 'primary' ) ) : ?>
						<nav id="site-navigation" class="primary-navigation" aria-label="<?php esc_attr_e( 'Primary menu', 'fitech' ); ?>">
							<?php
							wp_nav_menu(
								array(
									'theme_location'  => 'primary',
									'menu_class'      => 'menu-wrapper',
									'container_class' => 'primary-menu-container',
									'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
									'fallback_cb'     => false,
								)
							);
							?>
						</nav><!-- #site-navigation -->
					<?php endif; ?>
                </div>			
               
              
               <?php $post_slug = $post->post_name;
				if($post_slug != '15-days-free-trial' && $post_slug != 'sign-up' && $post_slug != 'thank-you-for-contacting-us' && $post_slug != 'thank-you-for-signing-up' && $post_slug != 'thank-you-for-your-interest' ){?>
                    <a id="contact_us" href="#contactus" class="btn btn-outline-primary rounded-pill contact-us ms-2 fw-bold">Get In Touch</a>
                    <?php } ?>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div> 
				
            </div>
            </div>
        </nav>
    </header>
    <!-- End Header -->
