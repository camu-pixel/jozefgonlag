<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 */
?>
		</div><!-- #content -->
<?php global $hideFooter; if (!$hideFooter) { ?>
        <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-eaa3">
  <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
    <p class="u-small-text u-text u-text-variant u-text-1">Footer Text. 2021<br>
    </p>
  </div>
</footer>
        
<?php } ?>
        
        
	</div><!-- .site-inner -->
</div><!-- #page -->

<?php wp_footer(); ?>
<?php back_to_top(); ?>
</body>
</html>
