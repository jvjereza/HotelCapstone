@include('FrontEnd.animated')
    
    @include('FrontEnd.toggle')
            <!-- END menu-toggle -->

            @include('FrontEnd.header')
    <!-- END head -->
@include('AboutPage.about2')
    <!-- END section -->

    @include('AboutPage.video');

    @include('AboutPage.leader');

    @include('AboutPage.photos');
    <!-- END section -->

    @include('AboutPage.leader');

    
    
    @include('AboutPage.reservesection');

    @yield('footer');
    
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    
    
    <script src="js/aos.js"></script>
    
    <script src="js/bootstrap-datepicker.js"></script> 
    <script src="js/jquery.timepicker.min.js"></script> 

    

    <script src="js/main.js"></script>
  </body>
</html>