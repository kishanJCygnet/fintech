<?php
get_header();
if (have_posts()) :
    while (have_posts()) : the_post(); ?>
        <!-- Banner Slider start -->
		<?php
            $featured_img_url = get_the_post_thumbnail_url(get_the_ID(), '1920w');
        ?>
		<section class="banner-content">    
			<div class="banner-inner-content w-100" <?php if ($featured_img_url) : ?> style="background-image: url('<?php echo $featured_img_url; ?>')" <?php endif; ?>>  
				<div class="d-md-flex flex-wrap slide-content-main align-items-center w-100">
                    <div class="banner-caption text-white">
                        <h1 class="banner-title text-white">
                            <?php the_title(); ?>
                        </h1>
                    </div>
					 <div class="mb-5">
						<div class="author-share-block mb-3">
							<ul class="author-block mb-0 list-unstyled d-flex flex-wrap">
								<li>
									<?php the_date(); ?>
								</li>
							</ul>
						</div>
					</div>
                </div>
			</div>    
		</section>
        <!-- Banner Slider end -->
        <div>
            <section class="bg-white no-min-height">
                <div class="py-5">
                    <div class="blog-detail">
                        <!--<div class="blog-share-social d-none d-xl-block">
                            <div class="sidebar-social">
                                <div class="share-social-box">
                                    <a href="javascript:void(0)" title="Share" class="share-btn"><i class="bi bi-share" aria-hidden="true"></i></a>
                                    <?php echo sharethis_inline_buttons(); ?>
                                </div>
                            </div>
                        </div>-->
                        <div class="container section-container-padding pt-0 pb-0">
                            <div class="single-container">
                                <div class="article-container">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 mb-5 mb-md-0">
                                            <article class="blog-contents pe-md-3 pe-xl-4 pe-xxl-5">
                                                <h2 class="section-title mb-3">Summary</h2>
                                                <!--<div class="blog-share-social d-xl-none mb-5">
                                                    <div class="sidebar-social">
                                                        <div class="share-social-box">
                                                            <a href="javascript:void(0)" title="Share" class="share-btn"><i class="bi bi-share" aria-hidden="true"></i></a>
                                                            <?php echo sharethis_inline_buttons(); ?>
                                                        </div>
                                                    </div>
                                                </div>-->
                                                <?php the_content(); ?>
                                            </article>											
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>