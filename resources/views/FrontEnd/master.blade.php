@include('FrontEnd.animated')
    
    @include('FrontEnd.toggle')
            <!-- END menu-toggle -->

            @include('FrontEnd.header')
    <!-- END head -->

   @include('FrontEnd.hero');


    @include('FrontEnd.checkInOut');

    @include('FrontEnd.about');

    @include('FrontEnd.rooms');    
    
    @include('FrontEnd.history');
    <!-- END section -->
    
    @include('FrontEnd.menu');
    
    <!-- END section -->
    @include('FrontEnd.testimonial');
    

   

  <!-- Footer Section Begin -->
  @yield('footer');
  <!-- Footer Section End -->
    
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